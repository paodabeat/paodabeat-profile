import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// --- IMPORT CÁC MODULE DỮ LIỆU ĐÃ TÁCH ---
import { experience } from './experience';
import { projects } from './projects';
import { skills } from './skills';
import { academic } from './academic';

const resources = {
    vi: {
        translation: {
            nav: {
                hero: "Giới thiệu",
                experience: "Kinh nghiệm",
                projects: "Sản phẩm",
                skills: "Kỹ năng",
                academic: "Học thuật",
            },
            hero: {
                typewriter: ["EdTech Enthusiast", "Multimedia Content Creator", "Instructional Designer", "System Developer"],
                desc: "Với tư duy sư phạm và kỹ năng công nghệ, tôi thiết kế các giải pháp E-learning và trải nghiệm đa phương tiện lấy người học làm trung tâm. Sự kỷ luật và tinh thần đổi mới là kim chỉ nam giúp tôi chinh phục những dự án giáo dục số phức tạp.",
                download_cv: "Download CV",
                view_projects: "Xem Dự Án",
                quote: "\"Little strokes fell great oaks\""
            },
            // Nhúng module tiếng Việt
            experience: experience.vi,
            projects: projects.vi,
            skills: skills.vi,
            academic: academic.vi,

            footer: {
                connect: "Let's connect & create!",
                address: "Hà Đông, Hà Nội",
                copyright: "Copyright © {{year}} Phùng Trần Gia Bảo. Designed with Passion."
            },
            cv: {
                back: "Quay lại Portfolio",
                download_pdf: "Tải PDF",
                contact: "LIÊN HỆ",
                phone: "Số điện thoại:",
                address: "Địa chỉ:",
                address_detail: "Chung cư Viện Bỏng - Hà Đông - Hà Nội",
                email: "Email:",
                foreign_language: "NGOẠI NGỮ",
                english: "Tiếng Anh",
                chinese: "Tiếng Trung Quốc",
                education_time: "Công nghệ Giáo dục",
                qr_text: "Quét mã để xem Portfolio trực tuyến"
            }
        }
    },
    en: {
        translation: {
            nav: {
                hero: "About Me",
                experience: "Experience",
                projects: "Projects",
                skills: "Skills",
                academic: "Academic",
            },
            hero: {
                typewriter: ["EdTech Enthusiast", "Multimedia Content Creator", "Instructional Designer", "System Developer"],
                desc: "With a pedagogical mindset and technical skills, I design learner-centric E-learning solutions and multimedia experiences. Discipline and an innovative spirit are my guiding principles in conquering complex digital education projects.",
                download_cv: "Download CV",
                view_projects: "View Projects",
                quote: "\"Little strokes fell great oaks\""
            },
            // Nhúng module tiếng Anh
            experience: experience.en,
            projects: projects.en,
            skills: skills.en,
            academic: academic.en,

            footer: {
                connect: "Let's connect & create!",
                address: "Ha Dong, Hanoi",
                copyright: "Copyright © {{year}} Phung Tran Gia Bao. Designed with Passion."
            },
            cv: {
                back: "Back to Portfolio",
                download_pdf: "Download PDF",
                contact: "CONTACT",
                phone: "Phone number:",
                address: "Address:",
                address_detail: "Vien Bong Apartment - Ha Dong - Hanoi",
                email: "Email:",
                foreign_language: "LANGUAGES",
                english: "English",
                chinese: "Chinese",
                education_time: "Educational Technology",
                qr_text: "Scan code to view Portfolio online"
            }
        }
    },
    zh: {
        translation: {
            nav: {
                hero: "关于",
                experience: "经验",
                projects: "项目",
                skills: "技能",
                academic: "学术",
            },
            hero: {
                typewriter: ["教育科技爱好者", "多媒体内容创作者", "教学设计师", "系统开发员"],
                desc: "凭借教学思维和技术专长，我设计以学习者为中心的电子学习解决方案和多媒体体验。纪律和创新精神是我征服复杂数字教育项目的指导原则。",
                download_cv: "下载简历",
                view_projects: "查看项目",
                quote: "\"滴水穿石\""
            },
            // Nhúng module tiếng Trung
            experience: experience.zh,
            projects: projects.zh,
            skills: skills.zh,
            academic: academic.zh,

            footer: {
                connect: "Let's connect & create!",
                address: "河内，河东",
                copyright: "Copyright © {{year}} Phung Tran Gia Bao. Designed with Passion."
            },
            cv: {
                back: "返回作品集",
                download_pdf: "下载 PDF",
                contact: "联系方式",
                phone: "电话号码：",
                address: "地址：",
                address_detail: "河内 - 黄梅 - 烧伤医院公寓",
                email: "电子邮件：",
                foreign_language: "外语",
                english: "英语",
                chinese: "中文",
                education_time: "教育技术",
                qr_text: "扫码在线查看作品集"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi', // Ngôn ngữ mặc định nếu không tìm thấy
        interpolation: {
            escapeValue: false // React đã tự động chống XSS
        }
    });

export default i18n;