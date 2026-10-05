"""
Chuẩn bị ảnh cho web.

    python scripts/optimize_images.py

1. Gallery Thành tựu - ảnh gốc: assets/certificate/<id>.(png|jpg|jpeg|webp) (giữ nguyên, không bị sửa)
   - assets/certificate/web/<id>.webp   (khung lớn + xem phóng to, cạnh dài tối đa 2000px)
   - assets/certificate/thumb/<id>.webp (dải thumbnail, cạnh dài tối đa 360px)

2. Album ảnh Đào tạo: assets/training/<album>/<01, 02, ...>.(png|jpg|jpeg|webp)
   - assets/training/<album>/cover.webp (ảnh bìa ghép tất cả ảnh, ảnh chính lấy theo COLLAGE_MAIN)
   Tên thư mục album dùng chữ không dấu, nối bằng "-" (ví dụ "lai-chau-7-12-2025") và khớp với
   trường "album" trong src/i18n/projects.ts. Ảnh album nên có cạnh dài khoảng 1800px.

Chỉ tạo lại khi ảnh nguồn mới hơn bản đã tạo. Cần Pillow: pip install pillow
"""

from pathlib import Path

from PIL import Image, ImageOps

Image.MAX_IMAGE_PIXELS = None  # ảnh scan có thể > 89 megapixel

ASSETS = Path(__file__).resolve().parent.parent / "assets"
EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}

CERTIFICATE_SIZES = {"web": (2000, 82), "thumb": (360, 75)}  # thư mục: (cạnh dài tối đa, chất lượng webp)

# Ảnh bìa ghép cho album Đào tạo: ảnh chính (khung lớn bên trái) của từng album, mặc định là ảnh đầu tiên
COLLAGE_MAIN = {
    "bich-hao-1-8-2026": "02",
    "ha-dong-24-8-2026": "01",
    "lai-chau-7-12-2025": "02",
    "quoc-oai-22-8-2026": "07",
}
COLLAGE_SIZE = (1600, 900)    # khớp khung 16:9 của thẻ sản phẩm
COLLAGE_GAP = 6
COLLAGE_MAIN_RATIO = 0.6      # ảnh chính chiếm 60% chiều ngang
COLLAGE_BACKGROUND = (244, 242, 237)  # màu giấy của trang (--color-paper)


def images_in(folder: Path) -> list[Path]:
    return sorted(p for p in folder.iterdir() if p.is_file() and p.suffix.lower() in EXTENSIONS)


def export(source: Path, targets: dict[Path, tuple[int, int]]) -> bool:
    """Ghi ảnh webp cho từng target (đường dẫn -> (cạnh dài, chất lượng)). Trả về True nếu có ghi."""
    if all(t.exists() and t.stat().st_mtime >= source.stat().st_mtime for t in targets):
        return False

    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        for target, (max_side, quality) in targets.items():
            target.parent.mkdir(parents=True, exist_ok=True)
            copy = image.copy()
            copy.thumbnail((max_side, max_side), Image.LANCZOS)
            copy.save(target, "WEBP", quality=quality, method=6)
    return True


def build_collage(album: Path, main_stem: str | None) -> bool:
    """Ghép các ảnh của album thành cover.webp: ảnh chính bên trái, các ảnh còn lại xếp lưới bên phải."""
    photos = [p for p in images_in(album) if p.stem != "cover"]
    if not photos:
        return False
    target = album / "cover.webp"
    if target.exists() and all(target.stat().st_mtime >= p.stat().st_mtime for p in photos):
        return False

    main = next((p for p in photos if p.stem == main_stem), photos[0])
    others = [p for p in photos if p != main]

    width, height = COLLAGE_SIZE
    gap = COLLAGE_GAP
    canvas = Image.new("RGB", COLLAGE_SIZE, COLLAGE_BACKGROUND)

    def paste(path: Path, box: tuple[int, int, int, int]) -> None:
        x0, y0, x1, y1 = box
        with Image.open(path) as image:
            image = ImageOps.exif_transpose(image).convert("RGB")
            canvas.paste(ImageOps.fit(image, (x1 - x0, y1 - y0), Image.LANCZOS), (x0, y0))

    main_width = round(width * COLLAGE_MAIN_RATIO) if others else width
    paste(main, (0, 0, main_width, height))

    if others:
        # Lưới bên phải: 1 cột nếu ít ảnh, 2 cột nếu nhiều; hàng cuối thiếu ảnh thì kéo giãn cho đủ chiều ngang
        cols = 1 if len(others) <= 2 else 2
        rows = -(-len(others) // cols)
        left = main_width + gap
        for row in range(rows):
            row_items = others[row * cols:(row + 1) * cols]
            y0 = round(row * (height + gap) / rows)
            y1 = round((row + 1) * (height + gap) / rows) - gap
            for col, path in enumerate(row_items):
                x0 = left + round(col * (width - left + gap) / len(row_items))
                x1 = left + round((col + 1) * (width - left + gap) / len(row_items)) - gap
                paste(path, (x0, y0, x1, y1))

    canvas.save(target, "WEBP", quality=82, method=6)
    return True


def main() -> None:
    certificates = ASSETS / "certificate"
    for source in images_in(certificates):
        targets = {certificates / folder / f"{source.stem}.webp": size for folder, size in CERTIFICATE_SIZES.items()}
        if export(source, targets):
            print(f"certificate/{source.name}")

    training = ASSETS / "training"
    for album in sorted(p for p in training.iterdir() if p.is_dir()) if training.exists() else []:
        if build_collage(album, COLLAGE_MAIN.get(album.name)):
            print(f"training/{album.name}/cover.webp")


if __name__ == "__main__":
    main()
