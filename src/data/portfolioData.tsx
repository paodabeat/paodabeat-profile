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
