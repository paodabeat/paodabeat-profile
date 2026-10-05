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
            profile: {
                family: "Phùng Trần",
                given: "Gia Bảo",
                full: "Phùng Trần Gia Bảo"
            },
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
                quote: "\"Little strokes fell great oaks\"",
                kicker: "Hồ sơ năng lực",
                now: "Vai trò",
                follow: "Theo dõi",
                caption: "Phùng Trần Gia Bảo, Hà Nội"
            },
            common: {
                prev: "Trước",
                next: "Sau",
                close: "Đóng",
                zoom: "Phóng to",
                items: "{{count}} mục",
                placeholder: "Ảnh đang được cập nhật",
                back_to_top: "Lên đầu trang",
                authors: "Tác giả",
                abstract: "Tóm tắt (Abstract)",
                published: "Công bố tại"
            },
            // Nhúng module tiếng Việt
            experience: experience.vi,
            projects: projects.vi,
            skills: skills.vi,
            academic: academic.vi,

            footer: {
                connect: "Let's connect & create!",
                address: "Tương Mai, Hà Nội, Việt Nam",
                phone_label: "Điện thoại",
                email_label: "Email",
                address_label: "Địa chỉ",
                copyright: "Copyright © {{year}} Phùng Trần Gia Bảo. Designed with Passion."
            },
            cv: {
                back: "Quay lại Portfolio",
                download_pdf: "Tải PDF",
                download_png: "Tải ảnh (PNG)",
                contact: "LIÊN HỆ",
                phone: "Số điện thoại:",
                address: "Địa chỉ:",
                address_detail: "Ngõ 51 - Tương Mai - Hà Nội",
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
            profile: {
                family: "Phùng Trần",
                given: "Gia Bảo",
                full: "Phùng Trần Gia Bảo"
            },
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
                quote: "\"Little strokes fell great oaks\"",
                kicker: "Portfolio",
                now: "Currently",
                follow: "Elsewhere",
                caption: "Phung Tran Gia Bao, Hanoi"
            },
            common: {
                prev: "Prev",
                next: "Next",
                close: "Close",
                zoom: "Enlarge",
                items: "{{count}} items",
                placeholder: "Image coming soon",
                back_to_top: "Back to top",
                authors: "Authors",
                abstract: "Abstract",
                published: "Published in"
            },
            // Nhúng module tiếng Anh
            experience: experience.en,
            projects: projects.en,
            skills: skills.en,
            academic: academic.en,

            footer: {
                connect: "Let's connect & create!",
                address: "Tuong Mai, Hanoi, Vietnam",
                phone_label: "Phone",
                email_label: "Email",
                address_label: "Based in",
                copyright: "Copyright © {{year}} Phung Tran Gia Bao. Designed with Passion."
            },
            cv: {
                back: "Back to Portfolio",
                download_pdf: "Download PDF",
                download_png: "Download PNG",
                contact: "CONTACT",
                phone: "Phone number:",
                address: "Address:",
                address_detail: "Lane 51 - Tuong Mai - Hanoi",
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
            profile: {
                family: "冯陈",
                given: "家宝",
                full: "冯陈家宝"
            },
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
                quote: "\"滴水穿石\"",
                kicker: "作品集",
                now: "身份",
                follow: "社交媒体",
                caption: "冯陈家宝，河内"
            },
            common: {
                prev: "上一个",
                next: "下一个",
                close: "关闭",
                zoom: "放大",
                items: "{{count}} 项",
                placeholder: "图片即将更新",
                back_to_top: "返回顶部",
                authors: "作者",
                abstract: "摘要 (Abstract)",
                published: "发表于"
            },
            // Nhúng module tiếng Trung
            experience: experience.zh,
            projects: projects.zh,
            skills: skills.zh,
            academic: academic.zh,

            footer: {
                connect: "Let's connect & create!",
                address: "越南，河内，相梅",
                phone_label: "电话",
                email_label: "邮箱",
                address_label: "地址",
                copyright: "Copyright © {{year}} 冯陈家宝. Designed with Passion."
            },
            cv: {
                back: "返回作品集",
                download_pdf: "下载 PDF",
                download_png: "下载 PNG",
                contact: "联系方式",
                phone: "电话号码：",
                address: "地址：",
                address_detail: "河内 - 相梅 - 51巷",
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