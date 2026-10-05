// File: i18n/project.ts

import gendemyProject from "../../assets/project/gendemy.webp";
import sinhvienthehemoiProgram from "../../assets/program/sinhvienthehemoi.webp";
import congiapgiapthinProgram from "../../assets/program/12congiapgiapthin.webp";
import duoilacoquyetthangProgram from "../../assets/program/duoilacoquyetthang.webp";
import quanquenchinhgocProgram from "../../assets/program/quanquenchinhgoc.webp";
import vtvawardsProgram from "../../assets/program/vtvawards.webp";
import congiapattyProgram from "../../assets/program/12congiapatty.webp";
import vangmaikhuckhaihoanProgram from "../../assets/program/vangmaikhuckhaihoan.webp";
import muahelaplanhProgram from "../../assets/program/muahelaplanh.webp";
import vutrudongtienProgram from "../../assets/program/vutrudongtien.webp";
import duonglendinholympiaProgram from "../../assets/program/duonglendinholympia.webp";
import thoicovangProgram from "../../assets/program/thoicovang.webp";
import dieunhobekydieuProgram from "../../assets/program/dieunhobekydieu.webp";
import vuikhoecoichProgram from "../../assets/program/vuikhoecoich.webp";
import congiapbinhngoProgram from "../../assets/program/12congiapbinhngo.webp";
import starseedProject from "../../assets/project/starseed.webp";
import dannysdayProject from "../../assets/project/danny'sday.webp";
import theescapeProject from "../../assets/project/theescape.webp";

export const projects = {
    vi: {
        title: "Sản Phẩm & Dự Án",
        detail_btn: "Chi tiết",
        categories: {
            all: "Tất cả",
            project: "Dự án",
            tv: "Truyền hình",
            game: "Game & Tương tác",
            elearning: "E-learning",
            social: "Truyền thông số",
            training: "Đào tạo"
        },
        status: {
            updating: "Đang cập nhật",
            play: "Xem Video",
            visit: "Truy cập",
            play_game: "Chơi ngay",
            pdf: "Đọc tài liệu",
            gallery: "Xem ảnh"
        },
        list: [
            // Gendemy
            {
                id: 101, category: "project", title: "Hệ sinh thái học tập số Gendemy",
                type: "website", url: "https://www.gendemyedu.com/",
                image: gendemyProject,
                description: "Hệ sinh thái giáo dục số toàn diện nhằm mục tiêu phát triển năng lực học tập tự định hướng cho người học."
            },
            {
                id: 102, category: "project", title: "Dự án sản xuất học liệu số tương tác FED x IDEAS",
                type: "updating", url: "",
                image: "",
                description: "Quản lý dự án sản xuất học liệu số tương tác cho khối K12, hợp tác giữa Khoa Khoa học và Công nghệ Giáo dục (FED) và IDEAS."
            },

            // TV & Events (Dạng Poster Gallery)
            {
                id: 201, category: "tv", title: "Sinh viên thế hệ mới 2023",
                type: "pdf", url: "",
                image: sinhvienthehemoiProgram,
                description: "Gameshow thực tế dành cho sinh viên các trường Đại học toàn quốc."
            },
            {
                id: 202, category: "tv", title: "12 Con Giáp 2024",
                type: "pdf", url: "",
                image: congiapgiapthinProgram,
                description: "Chương trình giải trí Tết Nguyên Đán Giáp Thìn đặc biệt trên VTV."
            },
            {
                id: 203, category: "tv", title: "Dưới lá cờ quyết thắng",
                type: "pdf", url: "",
                image: duoilacoquyetthangProgram,
                description: "Chương trình kỷ niệm 70 năm chiến thắng điện biên phủ."
            },
            {
                id: 204, category: "tv", title: "Quán quen chính gốc",
                type: "pdf", url: "",
                image: quanquenchinhgocProgram,
                description: "Chương trình khám phá ẩm thực và văn hóa địa phương."
            },
            {
                id: 205, category: "tv", title: "VTV Awards 2025",
                type: "pdf", url: "",
                image: vtvawardsProgram,
                description: "Lễ trao giải thưởng truyền hình thường niên của VTV."
            },
            {
                id: 206, category: "tv", title: "12 Con Giáp 2025",
                type: "pdf", url: "",
                image: congiapattyProgram,
                description: "Chương trình giải trí Tết Nguyên Đán Ất Tỵ đặc biệt trên VTV."
            },
            {
                id: 207, category: "tv", title: "Hoà nhạc Ánh sáng",
                type: "pdf", url: "",
                image: "https://tayho360.vn/upload/admin/files/6775ff069985b%20(1).jpg",
                description: "Chương trình văn hoá nghệ thuật âm thanh - ánh sáng Chào năm mới 2025"
            },
            {
                id: 208, category: "tv", title: "Ngày hội văn hoá",
                type: "pdf", url: "",
                image: "https://i.ytimg.com/vi/JKkhyYz2nLs/maxresdefault.jpg",
                description: "Chương trình kỷ niệm đánh dấu hành trình 32 năm tiên phong, đổi mới và đồng hành cùng sự phát triển của đất nước.."
            },
            {
                id: 209, category: "tv", title: "Vang mãi khúc khải hoàn",
                type: "pdf", url: "",
                image: vangmaikhuckhaihoanProgram,
                description: "Chương trình nghệ thuật kỷ niệm 50 năm giải phóng miền Nam - thống nhất đất nước."
            },
            {
                id: 210, category: "tv", title: "Mùa hè lấp lánh",
                type: "pdf", url: "",
                image: muahelaplanhProgram,
                description: "Chương trình ca nhạc thiếu nhi nhân ngày lễ Quốc tế Thiếu nhi"
            },
            {
                id: 211, category: "tv", title: "Vũ trụ đồng tiền 2025",
                type: "pdf", url: "",
                image: vutrudongtienProgram,
                description: "The Moneyverse - Chương trình giáo dục tài chính cho giới trẻ."
            },
            {
                id: 212, category: "tv", title: "Đường lên đỉnh Olympia",
                type: "pdf", url: "https://drive.google.com/file/d/1oT9NasKDULGbSsf3_Sb9CboDP-flC5KQ/view?usp=sharing",
                image: duonglendinholympiaProgram,
                description: "Chương trình truyền hình trí tuệ dành cho học sinh THPT."
            },
            {
                id: 213, category: "tv", title: "Thời cơ vàng",
                type: "pdf", url: "",
                image: thoicovangProgram,
                description: "Chương trình kỷ niệm ngày Quốc khánh Việt Nam"
            },
            {
                id: 214, category: "tv", title: "Điều nhỏ bé kỳ diệu",
                type: "pdf", url: "",
                image: dieunhobekydieuProgram,
                description: "'Điều nhỏ bé kỳ diệu' trên VTV3 là một chương trình truyền hình mang tính chất suy ngẫm, lan tỏa những giá trị nhân văn và sưởi ấm tâm hồn giữa nhịp sống hiện đại."
            },
            {
                id: 215, category: "tv", title: "Vui khoẻ có ích",
                type: "pdf", url: "",
                image: vuikhoecoichProgram,
                description: "Chương trình truyền hình tư vấn sức khỏe và giải trí dành cho người cao tuổi."
            },
            {
                id: 216, category: "tv", title: "12 Con Giáp 2026",
                type: "pdf", url: "",
                image: congiapbinhngoProgram,
                description: "Chương trình giải trí Tết Nguyên Đán Bính Ngọ đặc biệt trên VTV."
            },

            // Game
            {
                id: 301, category: "game", title: "Starseed",
                type: "game", url: "https://gd.games/instant-builds/e8714d2a-3f8f-4d8d-91e7-f9c7e5548aba",
                image: starseedProject,
                description: "Trò chơi giáo dục tương tác được thiết kế và phát triển trên nền tảng GDevelop."
            },
            {
                id: 302, category: "game", title: "Danny's Day",
                type: "game", url: "https://games.gdevelop-app.com/game-bbb4de63-0786-4da9-bb55-4d54425c392b/index.html",
                image: dannysdayProject,
                description: "Game học thuật phiêu lưu, giải quyết tình huống tương tác thực tế."
            },
            {
                id: 303, category: "game", title: "The Escape Game",
                type: "game", url: "https://games.gdevelop-app.com/game-be5ed1b7-1e8b-4467-bfdb-e01f9ab4f315/index.html",
                image: theescapeProject,
                description: "Trò chơi giải đố, thoát hiểm lồng ghép tư duy logic và kiến thức."
            },

            // E-learning
            {
                id: 401, category: "elearning", title: "Tiếng Anh 4 - In the city",
                type: "youtube", url: "https://youtu.be/flWbX_eWQBQ",
                image: "https://img.youtube.com/vi/flWbX_eWQBQ/maxresdefault.jpg",
                description: "Bài giảng H5P E-learning (Unit 17: In the city - Lesson 1)."
            },
            {
                id: 402, category: "elearning", title: "Kung Fu HSK 1 - Xin chào (你好)",
                type: "youtube", url: "https://youtu.be/gMO_LdzNLsY",
                image: "https://img.youtube.com/vi/gMO_LdzNLsY/maxresdefault.jpg",
                description: "Bài giảng ngoại ngữ tương tác H5P - Kung Fu HSK 1."
            },
            {
                id: 403, category: "elearning", title: "Tiếng Việt 5 - Mở rộng vốn từ",
                type: "youtube", url: "https://youtu.be/V6sxU_OXqGQ",
                image: "https://img.youtube.com/vi/V6sxU_OXqGQ/maxresdefault.jpg",
                description: "AI E-learning Video: Luyện từ và câu (Mở rộng vốn từ - Thiếu nhi)."
            },

            // Social Media Content
            {
                id: 501, category: "social", title: "TikTok Đại học Bách khoa Hà Nội",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/social1/600/400",
                description: "Sáng tạo nội dung video ngắn truyền thông thương hiệu HUST trên nền tảng TikTok."
            },
            {
                id: 502, category: "social", title: "Hệ thống LED - ĐHBK Hà Nội",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/social2/600/400",
                description: "Quản lý và thiết kế ấn phẩm trình chiếu cho hệ thống màn hình LED tại trường."
            },
            {
                id: 503, category: "social", title: "Tạp chí Khoa học và Công nghệ - JST",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/social3/600/400",
                description: "Xây dựng nội dung truyền thông cho ấn phẩm nghiên cứu khoa học."
            },

            // Training (album ảnh trong assets/training/<album>, ảnh bìa là ảnh ghép cover.webp)
            {
                id: 601, category: "training", title: "Kỹ năng số, AI & an toàn thông tin mạng – Phường Hà Đông",
                type: "album", url: "", album: "ha-dong-24-8-2026",
                image: "",
                meta: "08/2026 · UBND phường Hà Đông",
                description: "Hội nghị tập huấn nghiệp vụ cho cán bộ, công chức, viên chức phường trong Chiến dịch 100 ngày thúc đẩy chuyển đổi số, do Khoa KH&CN Giáo dục – ĐHBK Hà Nội đồng hành."
            },
            {
                id: 602, category: "training", title: "Ứng dụng AI trong quản lý và giảng dạy – Xã Quốc Oai",
                type: "album", url: "", album: "quoc-oai-22-8-2026",
                image: "",
                meta: "08/2026 · 4 lớp · 837 cán bộ quản lý, giáo viên",
                description: "Bồi dưỡng giáo viên mầm non, tiểu học, THCS dùng ChatGPT, Gemini, Copilot, Canva AI để soạn giáo án, tạo học liệu số, sản xuất video hoạt hình bằng AI và hỗ trợ quản trị nhà trường."
            },
            {
                id: 603, category: "training", title: "Chắp Cánh Bích Hào – Ứng dụng AI trong dạy và học",
                type: "album", url: "", album: "bich-hao-1-8-2026",
                image: "",
                meta: "01 - 02/08/2026 · Bích Hào, Nghệ An · 150 giáo viên",
                description: "Tập huấn cầm tay chỉ việc: thiết kế bài giảng và video hoạt hình bằng AI, khai thác Gemini Notebook để tạo bản đồ tư duy, podcast, tóm tắt tài liệu và chấm điểm tự động."
            },
            {
                id: 604, category: "training", title: "Chắp Cánh Lai Châu 2 – Ứng dụng CNTT & AI trong dạy học và quản lý giáo dục",
                type: "album", url: "", album: "lai-chau-7-12-2025",
                image: "",
                meta: "12/2024 · TP Lai Châu · gần 150 giáo viên",
                description: "Khoá tập huấn thuộc dự án Chắp Cánh STEM & E-learning (Khoa KH&CN Giáo dục tổ chức, Quỹ Chắp Cánh tài trợ), hướng dẫn giáo viên mầm non, tiểu học, THCS ứng dụng CNTT và AI để tạo bài giảng."
            }
        ]
    },
    en: {
        title: "Products & Projects",
        detail_btn: "Details",
        categories: {
            all: "All",
            project: "Projects",
            tv: "TV & Events",
            game: "Game & Interaction",
            elearning: "E-learning",
            social: "Social Media",
            training: "Training"
        },
        status: {
            updating: "Updating soon",
            play: "Watch Video",
            visit: "Visit site",
            play_game: "Play now",
            pdf: "Read document",
            gallery: "View photos"
        },
        list: [
            {
                id: 101, category: "project", title: "Gendemy Ecosystem",
                type: "website", url: "https://www.gendemyedu.com/",
                image: gendemyProject,
                description: "A comprehensive digital education ecosystem aimed at developing self-directed learning skills."
            },
            {
                id: 102, category: "project", title: "FED x IDEAS Interactive Digital Learning Materials",
                type: "updating", url: "",
                image: "",
                description: "Managing the production of interactive digital learning materials for K-12, a collaboration between the School of Educational Science and Technology (FED) and IDEAS."
            },

            {
                id: 201, category: "tv", title: "New Generation Students 2023",
                type: "pdf", url: "",
                image: sinhvienthehemoiProgram,
                description: "Reality gameshow for university students nationwide."
            },
            {
                id: 202, category: "tv", title: "12 Zodiacs 2024",
                type: "pdf", url: "",
                image: congiapgiapthinProgram,
                description: "Special Lunar New Year entertainment show on VTV."
            },
            {
                id: 203, category: "tv", title: "Under the Winning Flag",
                type: "pdf", url: "",
                image: duoilacoquyetthangProgram,
                description: "Program celebrating the 70th anniversary of the Dien Bien Phu victory."
            },
            {
                id: 204, category: "tv", title: "Authentic Local Eateries",
                type: "pdf", url: "",
                image: quanquenchinhgocProgram,
                description: "Program exploring local cuisine and culture."
            },
            {
                id: 205, category: "tv", title: "VTV Awards 2025",
                type: "pdf", url: "",
                image: vtvawardsProgram,
                description: "Annual television awards ceremony of VTV."
            },
            {
                id: 206, category: "tv", title: "12 Zodiacs 2025",
                type: "pdf", url: "",
                image: congiapattyProgram,
                description: "Special Lunar New Year entertainment show on VTV."
            },
            {
                id: 207, category: "tv", title: "Light Concert",
                type: "pdf", url: "",
                image: "https://tayho360.vn/upload/admin/files/6775ff069985b%20(1).jpg",
                description: "Audio-visual arts program welcoming the New Year 2025."
            },
            {
                id: 208, category: "tv", title: "Cultural Festival",
                type: "pdf", url: "",
                image: "https://i.ytimg.com/vi/JKkhyYz2nLs/maxresdefault.jpg",
                description: "Program marking the 32-year journey of pioneering, innovation, and accompanying the country's development."
            },
            {
                id: 209, category: "tv", title: "Echoing the Victory Song",
                type: "pdf", url: "",
                image: vangmaikhuckhaihoanProgram,
                description: "Art program celebrating the 50th anniversary of the liberation of the South and national reunification."
            },
            {
                id: 210, category: "tv", title: "Sparkling Summer",
                type: "pdf", url: "",
                image: muahelaplanhProgram,
                description: "Children's music program for International Children's Day."
            },
            {
                id: 211, category: "tv", title: "The Moneyverse 2025",
                type: "pdf", url: "",
                image: vutrudongtienProgram,
                description: "Financial education program for young people."
            },
            {
                id: 212, category: "tv", title: "Road to Mt. Olympia",
                type: "pdf", url: "https://drive.google.com/file/d/1oT9NasKDULGbSsf3_Sb9CboDP-flC5KQ/view?usp=sharing",
                image: duonglendinholympiaProgram,
                description: "Intellectual television program for high school students."
            },
            {
                id: 213, category: "tv", title: "Golden Opportunity",
                type: "pdf", url: "",
                image: thoicovangProgram,
                description: "Program celebrating Vietnam's National Day."
            },
            {
                id: 214, category: "tv", title: "Magical Little Things",
                type: "pdf", url: "",
                image: dieunhobekydieuProgram,
                description: "A thoughtful TV program spreading human values and warming souls in modern life."
            },
            {
                id: 215, category: "tv", title: "Healthy and Happy",
                type: "pdf", url: "",
                image: vuikhoecoichProgram,
                description: "Health consultation and entertainment television program for the elderly."
            },
            {
                id: 216, category: "tv", title: "12 Zodiacs 2026",
                type: "pdf", url: "",
                image: congiapbinhngoProgram,
                description: "Special Lunar New Year entertainment show on VTV."
            },

            {
                id: 301, category: "game", title: "Starseed",
                type: "game", url: "https://gd.games/instant-builds/e8714d2a-3f8f-4d8d-91e7-f9c7e5548aba",
                image: starseedProject,
                description: "Interactive educational game developed on GDevelop platform."
            },
            {
                id: 302, category: "game", title: "Danny's Day",
                type: "game", url: "https://games.gdevelop-app.com/game-bbb4de63-0786-4da9-bb55-4d54425c392b/index.html",
                image: dannysdayProject,
                description: "Adventure academic game addressing real-life interactive scenarios."
            },
            {
                id: 303, category: "game", title: "The Escape Game",
                type: "game", url: "https://games.gdevelop-app.com/game-be5ed1b7-1e8b-4467-bfdb-e01f9ab4f315/index.html",
                image: theescapeProject,
                description: "Puzzle escape game integrating logical thinking and educational knowledge."
            },

            {
                id: 401, category: "elearning", title: "English 4 - In the city",
                type: "youtube", url: "https://youtu.be/flWbX_eWQBQ",
                image: "https://img.youtube.com/vi/flWbX_eWQBQ/maxresdefault.jpg",
                description: "H5P E-learning Lecture (Unit 17: In the city - Lesson 1)."
            },
            {
                id: 402, category: "elearning", title: "Kung Fu HSK 1 - Hello (你好)",
                type: "youtube", url: "https://youtu.be/gMO_LdzNLsY",
                image: "https://img.youtube.com/vi/gMO_LdzNLsY/maxresdefault.jpg",
                description: "Interactive H5P Foreign Language Lecture - Kung Fu HSK 1."
            },
            {
                id: 403, category: "elearning", title: "Vietnamese 5 - Vocabulary Expansion",
                type: "youtube", url: "https://youtu.be/V6sxU_OXqGQ",
                image: "https://img.youtube.com/vi/V6sxU_OXqGQ/maxresdefault.jpg",
                description: "AI E-learning Video: Vocabulary Expansion - Children."
            },

            {
                id: 501, category: "social", title: "HUST TikTok Channel",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/social1/600/400",
                description: "Created short video content for HUST brand communication on TikTok."
            },
            {
                id: 502, category: "social", title: "LED System - HUST",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/social2/600/400",
                description: "Managed and designed visual publications for the university's LED screens."
            },
            {
                id: 503, category: "social", title: "Journal of Science and Technology - JST",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/social3/600/400",
                description: "Developed media content for scientific research publications."
            },

            // Training (album ảnh trong assets/training/<album>, ảnh bìa là ảnh ghép cover.webp)
            {
                id: 601, category: "training", title: "Digital Skills, AI & Cybersecurity – Ha Dong Ward",
                type: "album", url: "", album: "ha-dong-24-8-2026",
                image: "",
                meta: "08/2026 · Ha Dong Ward People's Committee",
                description: "Professional training for ward officials and civil servants during the 100-Day Digital Transformation Campaign, delivered with the School of Educational Science and Technology, HUST."
            },
            {
                id: 602, category: "training", title: "AI in School Management and Teaching – Quoc Oai Commune",
                type: "album", url: "", album: "quoc-oai-22-8-2026",
                image: "",
                meta: "08/2026 · 4 classes · 837 school leaders & teachers",
                description: "Trained preschool, primary and lower-secondary teachers to use ChatGPT, Gemini, Copilot and Canva AI for lesson planning, digital learning materials, AI animated videos and school administration."
            },
            {
                id: 603, category: "training", title: "Chap Canh Bich Hao – AI in Teaching and Learning",
                type: "album", url: "", album: "bich-hao-1-8-2026",
                image: "",
                meta: "Aug 1 - 2, 2026 · Bich Hao, Nghe An · 150 teachers",
                description: "Hands-on training in AI-assisted lesson and animated video design, plus Gemini Notebook for mind maps, podcasts, document summaries and automated grading."
            },
            {
                id: 604, category: "training", title: "Chap Canh Lai Chau 2 – IT & AI in Teaching and Education Management",
                type: "album", url: "", album: "lai-chau-7-12-2025",
                image: "",
                meta: "12/2024 · Lai Chau City · nearly 150 teachers",
                description: "Training under the Chap Canh STEM & E-learning project (organised by the School of Educational Science and Technology, funded by CC Foundation) helping preschool to lower-secondary teachers build lessons with IT and AI."
            }
        ]
    },
    zh: {
        title: "产品与项目",
        detail_btn: "详情",
        categories: {
            all: "全部",
            project: "项目",
            tv: "电视与活动",
            game: "游戏与交互",
            elearning: "电子学习",
            social: "社交媒体",
            training: "培训项目"
        },
        status: {
            updating: "即将更新",
            play: "观看视频",
            visit: "访问网站",
            play_game: "立即游玩",
            pdf: "阅读文件",
            gallery: "查看照片"
        },
        list: [
            {
                id: 101, category: "project", title: "Gendemy 数字教育生态系统",
                type: "website", url: "https://www.gendemyedu.com/",
                image: gendemyProject,
                description: "全面集成AI和电子学习的数字教育生态系统，旨在培养自主学习能力。"
            },
            {
                id: 102, category: "project", title: "FED x IDEAS 互动数字学习资源制作项目",
                type: "updating", url: "",
                image: "",
                description: "管理面向 K12 的互动数字学习资源制作，由教育科学与技术学院 (FED) 与 IDEAS 合作开展。"
            },

            {
                id: 201, category: "tv", title: "2023新一代学生",
                type: "pdf", url: "",
                image: sinhvienthehemoiProgram,
                description: "面向全国大学生的真人秀游戏节目。"
            },
            {
                id: 202, category: "tv", title: "2024年12生肖",
                type: "pdf", url: "",
                image: congiapgiapthinProgram,
                description: "VTV 上的特别农历新年娱乐节目。"
            },
            {
                id: 203, category: "tv", title: "在决胜旗帜下",
                type: "pdf", url: "",
                image: duoilacoquyetthangProgram,
                description: "庆祝奠边府战役胜利70周年的节目。"
            },
            {
                id: 204, category: "tv", title: "地道美食店",
                type: "pdf", url: "",
                image: quanquenchinhgocProgram,
                description: "探索当地美食和文化的节目。"
            },
            {
                id: 205, category: "tv", title: "2025年VTV Awards",
                type: "pdf", url: "",
                image: vtvawardsProgram,
                description: "VTV 的年度电视颁奖典礼。"
            },
            {
                id: 206, category: "tv", title: "2025年12生肖",
                type: "pdf", url: "",
                image: congiapattyProgram,
                description: "VTV 上的特别农历新年娱乐节目。"
            },
            {
                id: 207, category: "tv", title: "光之音乐会",
                type: "pdf", url: "",
                image: "https://tayho360.vn/upload/admin/files/6775ff069985b%20(1).jpg",
                description: "喜迎2025新年的视听艺术节目。"
            },
            {
                id: 208, category: "tv", title: "文化节",
                type: "pdf", url: "",
                image: "https://i.ytimg.com/vi/JKkhyYz2nLs/maxresdefault.jpg",
                description: "纪念开拓、创新并伴随国家发展32周年历程的节目。"
            },
            {
                id: 209, category: "tv", title: "凯旋曲永驻",
                type: "pdf", url: "",
                image: vangmaikhuckhaihoanProgram,
                description: "庆祝南方解放和国家统一50周年的艺术节目。"
            },
            {
                id: 210, category: "tv", title: "闪耀的夏天",
                type: "pdf", url: "",
                image: muahelaplanhProgram,
                description: "庆祝国际儿童节的儿童音乐节目。"
            },
            {
                id: 211, category: "tv", title: "金钱宇宙 2025",
                type: "pdf", url: "",
                image: vutrudongtienProgram,
                description: "面向年轻人的金融教育节目。"
            },
            {
                id: 212, category: "tv", title: "通往奥林匹亚峰之路",
                type: "pdf", url: "https://drive.google.com/file/d/1oT9NasKDULGbSsf3_Sb9CboDP-flC5KQ/view?usp=sharing",
                image: duonglendinholympiaProgram,
                description: "面向高中生的益智电视节目。"
            },
            {
                id: 213, category: "tv", title: "黄金时机",
                type: "pdf", url: "",
                image: thoicovangProgram,
                description: "庆祝越南国庆节的节目。"
            },
            {
                id: 214, category: "tv", title: "奇妙的小事",
                type: "pdf", url: "",
                image: dieunhobekydieuProgram,
                description: "这是一档引人深思的电视节目，在现代生活中传播人文价值，温暖心灵。"
            },
            {
                id: 215, category: "tv", title: "健康快乐",
                type: "pdf", url: "",
                image: vuikhoecoichProgram,
                description: "面向老年人的健康咨询与娱乐电视节目。"
            },
            {
                id: 216, category: "tv", title: "2026年12生肖",
                type: "pdf", url: "",
                image: congiapbinhngoProgram,
                description: "VTV 上的特别农历新年娱乐节目。"
            },

            {
                id: 301, category: "game", title: "Starseed",
                type: "game", url: "https://gd.games/instant-builds/e8714d2a-3f8f-4d8d-91e7-f9c7e5548aba",
                image: starseedProject,
                description: "在GDevelop平台上开发的互动教育游戏。"
            },
            {
                id: 302, category: "game", title: "Danny's Day",
                type: "game", url: "https://games.gdevelop-app.com/game-bbb4de63-0786-4da9-bb55-4d54425c392b/index.html",
                image: dannysdayProject,
                description: "解决现实生活中互动场景的冒险学术游戏。"
            },
            {
                id: 303, category: "game", title: "The Escape Game",
                type: "game", url: "https://games.gdevelop-app.com/game-be5ed1b7-1e8b-4467-bfdb-e01f9ab4f315/index.html",
                image: theescapeProject,
                description: "结合逻辑思维和教育知识的密室逃脱解谜游戏。"
            },

            {
                id: 401, category: "elearning", title: "英语 4 - In the city",
                type: "youtube", url: "https://youtu.be/flWbX_eWQBQ",
                image: "https://img.youtube.com/vi/flWbX_eWQBQ/maxresdefault.jpg",
                description: "H5P 电子学习讲座（第17单元：在城市 - 第1课）。"
            },
            {
                id: 402, category: "elearning", title: "功夫 HSK 1 - 你好",
                type: "youtube", url: "https://youtu.be/gMO_LdzNLsY",
                image: "https://img.youtube.com/vi/gMO_LdzNLsY/maxresdefault.jpg",
                description: "H5P 互动外语讲座 - 功夫 HSK 1。"
            },
            {
                id: 403, category: "elearning", title: "越南语 5 - 词汇扩展",
                type: "youtube", url: "https://youtu.be/V6sxU_OXqGQ",
                image: "https://img.youtube.com/vi/V6sxU_OXqGQ/maxresdefault.jpg",
                description: "AI 电子学习视频：词语和句子（词汇扩展 - 儿童）。"
            },

            {
                id: 501, category: "social", title: "HUST TikTok 频道",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/social1/600/400",
                description: "在TikTok平台上制作有关河内理工大学品牌传播的短视频内容。"
            },
            {
                id: 502, category: "social", title: "LED 系统 - 河内理工大学",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/social2/600/400",
                description: "管理和设计学校LED屏幕的视觉演示出版物。"
            },
            {
                id: 503, category: "social", title: "科学与技术杂志 - JST",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/social3/600/400",
                description: "为科学研究出版物开发媒体内容。"
            },

            // Training (album ảnh trong assets/training/<album>, ảnh bìa là ảnh ghép cover.webp)
            {
                id: 601, category: "training", title: "数字技能、人工智能与网络安全培训 – 河东坊",
                type: "album", url: "", album: "ha-dong-24-8-2026",
                image: "",
                meta: "08/2026 · 河东坊人民委员会",
                description: "在“推动数字化转型100天行动”中，与河内理工大学教育科学与技术学院一起为坊干部、公务员开展业务培训。"
            },
            {
                id: 602, category: "training", title: "人工智能在学校管理与教学中的应用 – 国威社",
                type: "album", url: "", album: "quoc-oai-22-8-2026",
                image: "",
                meta: "08/2026 · 4 个班 · 837 名管理人员与教师",
                description: "培训幼儿园、小学、初中教师使用 ChatGPT、Gemini、Copilot、Canva AI 编写教案、制作数字学习资源、用 AI 制作动画视频并辅助学校管理。"
            },
            {
                id: 603, category: "training", title: "Chap Canh Bich Hao – 人工智能在教学中的应用",
                type: "album", url: "", album: "bich-hao-1-8-2026",
                image: "",
                meta: "2026年8月1日 - 2日 · 义安省 Bich Hao · 150 名教师",
                description: "手把手培训：用 AI 设计课件与动画视频，并使用 Gemini Notebook 制作思维导图、播客、文档摘要和自动评分。"
            },
            {
                id: 604, category: "training", title: "Chap Canh Lai Chau 2 – 信息技术与人工智能在教学和教育管理中的应用",
                type: "album", url: "", album: "lai-chau-7-12-2025",
                image: "",
                meta: "12/2024 · 莱州市 · 近 150 名教师",
                description: "Chap Canh STEM & E-learning 项目（教育科学与技术学院主办、CC Foundation 资助）的培训课程，帮助幼儿园至初中教师运用信息技术和 AI 制作课件。"
            }
        ]
    }
};