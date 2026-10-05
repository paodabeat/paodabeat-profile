"""
Tạo ảnh tối ưu cho gallery Thành tựu từ ảnh gốc trong assets/certificate.

    python scripts/optimize_images.py

- Ảnh gốc (giữ nguyên, không bị sửa): assets/certificate/<id>.(png|jpg|jpeg|webp)
- Ảnh hiển thị (khung lớn + xem phóng to): assets/certificate/web/<id>.webp   (cạnh dài tối đa 2000px)
- Ảnh nhỏ (dải thumbnail):                assets/certificate/thumb/<id>.webp (cạnh dài tối đa 360px)

Chỉ tạo lại khi ảnh gốc mới hơn bản đã tạo. Cần Pillow: pip install pillow
"""

from pathlib import Path

from PIL import Image

Image.MAX_IMAGE_PIXELS = None  # ảnh scan có thể > 89 megapixel

ROOT = Path(__file__).resolve().parent.parent / "assets" / "certificate"
SIZES = {"web": (2000, 82), "thumb": (360, 75)}  # thư mục: (cạnh dài tối đa, chất lượng webp)
EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}


def main() -> None:
    sources = sorted(p for p in ROOT.iterdir() if p.is_file() and p.suffix.lower() in EXTENSIONS)
    for folder in SIZES:
        (ROOT / folder).mkdir(exist_ok=True)

    for source in sources:
        targets = {folder: ROOT / folder / f"{source.stem}.webp" for folder in SIZES}
        if all(t.exists() and t.stat().st_mtime >= source.stat().st_mtime for t in targets.values()):
            continue

        with Image.open(source) as image:
            image = image.convert("RGB")
            for folder, (max_side, quality) in SIZES.items():
                copy = image.copy()
                copy.thumbnail((max_side, max_side), Image.LANCZOS)
                copy.save(targets[folder], "WEBP", quality=quality, method=6)
        print(f"{source.name}: {', '.join(f'{f}/{t.name}' for f, t in targets.items())}")


if __name__ == "__main__":
    main()
