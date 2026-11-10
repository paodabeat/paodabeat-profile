import gdmLogo from '../../assets/gdm-avarta.webp';
import vtv3Logo from '../../assets/vtv3-avarta.webp';
import ccdkLogo from '../../assets/ccdk-avarta.webp';
import vtacLogo from '../../assets/vtac-avarta.webp';
import sitLogo from '../../assets/sit-avarta.webp';
import etcLogo from '../../assets/etc-avarta.webp';
import cdtLogo from '../../assets/cdt-avarta.webp';
import fedLogo from '../../assets/fed-avarta.webp';
import nnttLogo from '../../assets/nntt-avarta.webp';
import ccfLogo from '../../assets/ccf-avarta.webp';

// Gom ảnh theo tên file (không gồm đuôi): "assets/certificate/04.jpg" -> { "04": url }
const mapByFileName = (modules: Record<string, string>) =>
    Object.fromEntries(
        Object.entries(modules).map(([path, url]) => [path.split('/').pop()!.replace(/\.[^.]+$/, ''), url])
    );

// Ảnh giấy khen / chứng nhận cho gallery Thành tựu, khớp theo id trong i18n/achievements.ts
// Dùng bản đã tối ưu (tạo bằng: python scripts/optimize_images.py), ảnh gốc 10.000px không đưa lên web
export const CERTIFICATE_IMAGES: Record<string, string> = mapByFileName(
    import.meta.glob('../../assets/certificate/web/*.webp', { eager: true, import: 'default' })
);

export const CERTIFICATE_THUMBS: Record<string, string> = mapByFileName(
    import.meta.glob('../../assets/certificate/thumb/*.webp', { eager: true, import: 'default' })
);

// Album ảnh cho các sản phẩm Đào tạo, đọc từ assets/training/<album>/
// - TRAINING_ALBUMS: { "lai-chau-7-12-2025": [url 01, url 02, ...] } sắp xếp theo số thứ tự tên file
// - TRAINING_COVERS: { "lai-chau-7-12-2025": url cover.webp } (ảnh ghép, tạo bằng: python scripts/optimize_images.py)
const trainingImages = Object.entries(
    import.meta.glob('../../assets/training/*/*.{webp,jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>
)
    .map(([path, url]) => {
        const [album, file] = path.split('/').slice(-2);
        return { album, name: file.replace(/\.[^.]+$/, ''), url };
    })
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

export const TRAINING_ALBUMS: Record<string, string[]> = {};
export const TRAINING_COVERS: Record<string, string> = {};
for (const { album, name, url } of trainingImages) {
    if (name === 'cover') TRAINING_COVERS[album] = url;
    else (TRAINING_ALBUMS[album] ??= []).push(url);
}

// Ảnh đời thường cho khung ảnh xoay vòng ở đầu trang, khớp theo id trong i18n (photos.list).
// Kích thước lấy từ manifest.json (tạo bằng: python scripts/optimize_images.py) để biết
// ảnh ngang hay dọc mà cắt về khung vuông cho đúng.
import photoManifest from '../../assets/photos/manifest.json';

const photoModules = import.meta.glob('../../assets/photos/*.webp', { eager: true, import: 'default' }) as Record<string, string>;

export interface Photo {
    image: string;
    ratio: number; // rộng / cao: > 1 là ảnh ngang
}

// Điểm nhắm của từng ảnh khi cắt về khung vuông (object-position: "ngang dọc").
// Ảnh gốc dọc/ngang nên khung vuông luôn cắt bớt; chỉnh số ở đây để nhân vật chính
// luôn lọt vào khung: giảm số thứ hai thì khung nhích lên trên, tăng thì xuống dưới;
// số thứ nhất tương tự theo chiều ngang. Ảnh không khai báo thì lấy giữa ảnh.
export const PHOTO_FOCUS: Record<string, string> = {
    "01": "50% 18%",   // ảnh tốt nghiệp - lấy nửa trên cho rõ mặt
    "02": "50% 30%",
    "03": "58% 45%",   // ảnh ngang, nhân vật lệch phải
    "04": "55% 30%",
    "05": "50% 26%",
    "06": "50% 40%",
    "07": "100% 50%"   // ảnh ngang, nhân vật sát mép phải nên lấy hẳn phần bên phải
};

export const PHOTOS: Record<string, Photo> = {};
for (const [path, url] of Object.entries(photoModules)) {
    const id = path.split('/').pop()!.replace(/\.webp$/, '');
    const size = (photoManifest as Record<string, { width: number; height: number }>)[id];
    PHOTOS[id] = { image: url, ratio: size ? size.width / size.height : 3 / 4 };
}

// Ảnh trang đầu tiên của bài nghiên cứu cho gallery Nghiên cứu khoa học, khớp theo id trong i18n/academic.ts
export const RESEARCH_IMAGES: Record<string, string> = mapByFileName(
    import.meta.glob('../../assets/research/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
);

// Logo và liên kết cho phần Kinh nghiệm (Experience), tra theo trường "key" trong i18n/experience.ts
export const EXPERIENCE_META: Record<string, { logo: string; link: string }> = {
    fed: { logo: fedLogo, link: "https://www.facebook.com/KhoaKH.CNGD" },
    gendemy: { logo: gdmLogo, link: "https://www.facebook.com/gendemyedu" },
    vtv: { logo: vtv3Logo, link: "https://www.facebook.com/profile.php?id=100064582395910" },
    ccdk: { logo: ccdkLogo, link: "https://www.facebook.com/ccprhust" },
    vtac: { logo: vtacLogo, link: "https://www.facebook.com/hocvienviettel" },
    sit: { logo: sitLogo, link: "https://www.facebook.com/shibaura" },
    etc: { logo: etcLogo, link: "https://www.facebook.com/edtech.hust" },
    cdt: { logo: cdtLogo, link: "https://www.facebook.com/cdt.hust.edu.vn" },
    ccf: { logo: ccfLogo, link: "https://www.facebook.com/KhoaKH.CNGD" },
    nntt: { logo: nnttLogo, link: "https://www.facebook.com/ngoinhatritue1" }
};
