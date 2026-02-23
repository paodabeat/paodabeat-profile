export const projects = {
    vi: {
        title: "Sản Phẩm & Dự Án",
        detail_btn: "Chi tiết",
        categories: {
            all: "Tất cả",
            gendemy: "Gendemy",
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
            pdf: "Đọc tài liệu"
        },
        list: [
            // Gendemy
            { id: 101, category: "gendemy", title: "Hệ sinh thái học tập số Gendemy", type: "website", url: "https://www.gendemyedu.com/", image: "https://picsum.photos/seed/gendemy/600/400", description: "Hệ sinh thái giáo dục số toàn diện nhằm mục tiêu phát triển năng lực học tập tự định hướng cho người học." },

            // TV & Events
            { id: 201, category: "tv", title: "Gameshow & Chương trình giải trí", type: "updating", url: "", image: "https://picsum.photos/seed/tv1/600/400", description: "Sản xuất nội dung và đồ họa cho 12 Con Giáp (2024-2026), Vang mãi khúc khải hoàn, Quán quen chính gốc..." },
            { id: 202, category: "tv", title: "Chương trình Giáo dục & Sinh viên", type: "updating", url: "", image: "https://picsum.photos/seed/tv2/600/400", description: "Tham gia tổ chức sản xuất Sinh viên thế hệ mới 2023, Vũ trụ đồng tiền, Đường lên đỉnh Olympia." },
            { id: 203, category: "tv", title: "Sự kiện Văn hoá - Nghệ thuật", type: "updating", url: "", image: "https://picsum.photos/seed/tv3/600/400", description: "Hỗ trợ sản xuất VTV Awards, Ngày hội văn hoá HSB - T&T, Hoà âm Ánh sáng." },

            // Game
            { id: 301, category: "game", title: "Starseed", type: "game", url: "https://gd.games/instant-builds/e8714d2a-3f8f-4d8d-91e7-f9c7e5548aba", image: "https://picsum.photos/seed/game1/600/400", description: "Trò chơi giáo dục tương tác được thiết kế và phát triển trên nền tảng GDevelop." },
            { id: 302, category: "game", title: "Danny's Day", type: "game", url: "https://games.gdevelop-app.com/game-bbb4de63-0786-4da9-bb55-4d54425c392b/index.html", image: "https://picsum.photos/seed/game2/600/400", description: "Game học thuật phiêu lưu, giải quyết tình huống tương tác thực tế." },
            { id: 303, category: "game", title: "The Escape Game", type: "game", url: "https://games.gdevelop-app.com/game-be5ed1b7-1e8b-4467-bfdb-e01f9ab4f315/index.html", image: "https://picsum.photos/seed/game3/600/400", description: "Trò chơi giải đố, thoát hiểm lồng ghép tư duy logic và kiến thức." },

            // E-learning
            { id: 401, category: "elearning", title: "Tiếng Anh 4 - In the city", type: "youtube", url: "https://youtu.be/flWbX_eWQBQ", image: "https://img.youtube.com/vi/flWbX_eWQBQ/maxresdefault.jpg", description: "Bài giảng H5P E-learning (Unit 17: In the city - Lesson 1)." },
            { id: 402, category: "elearning", title: "Kung Fu HSK 1 - Xin chào (你好)", type: "youtube", url: "https://youtu.be/gMO_LdzNLsY", image: "https://img.youtube.com/vi/gMO_LdzNLsY/maxresdefault.jpg", description: "Bài giảng ngoại ngữ tương tác H5P - Kung Fu HSK 1." },
            { id: 403, category: "elearning", title: "Tiếng Việt 5 - Mở rộng vốn từ", type: "youtube", url: "https://youtu.be/V6sxU_OXqGQ", image: "https://img.youtube.com/vi/V6sxU_OXqGQ/maxresdefault.jpg", description: "AI E-learning Video: Luyện từ và câu (Mở rộng vốn từ - Thiếu nhi)." },

            // Social Media Content
            { id: 501, category: "social", title: "TikTok Đại học Bách khoa Hà Nội", type: "updating", url: "", image: "https://picsum.photos/seed/social1/600/400", description: "Sáng tạo nội dung video ngắn truyền thông thương hiệu HUST trên nền tảng TikTok." },
            { id: 502, category: "social", title: "Hệ thống LED - ĐHBK Hà Nội", type: "updating", url: "", image: "https://picsum.photos/seed/social2/600/400", description: "Quản lý và thiết kế ấn phẩm trình chiếu cho hệ thống màn hình LED tại trường." },
            { id: 503, category: "social", title: "Tạp chí Khoa học và Công nghệ - JST", type: "updating", url: "", image: "https://picsum.photos/seed/social3/600/400", description: "Xây dựng nội dung truyền thông cho ấn phẩm nghiên cứu khoa học." },

            // Training
            { id: 601, category: "training", title: "AI Animation in Education", type: "updating", url: "", image: "https://picsum.photos/seed/train1/600/400", description: "Chương trình đào tạo ứng dụng AI tạo hiệu ứng hoạt hình cho giáo viên." }
        ]
    },
    en: {
        title: "Products & Projects",
        detail_btn: "Details",
        categories: {
            all: "All",
            gendemy: "Gendemy",
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
            pdf: "Read document"
        },
        list: [
            { id: 101, category: "gendemy", title: "Gendemy Ecosystem", type: "website", url: "https://www.gendemyedu.com/", image: "https://picsum.photos/seed/gendemy/600/400", description: "A comprehensive digital education ecosystem aimed at developing self-directed learning skills." },

            { id: 201, category: "tv", title: "Gameshows & Entertainment", type: "updating", url: "", image: "https://picsum.photos/seed/tv1/600/400", description: "Content production and graphic design for VTV's Lunar New Year special, Victory Song, etc." },
            { id: 202, category: "tv", title: "Education & Student Shows", type: "updating", url: "", image: "https://picsum.photos/seed/tv2/600/400", description: "Co-produced New Gen Students 2023, The Moneyverse, Road to Mt. Olympia." },
            { id: 203, category: "tv", title: "Cultural & Art Events", type: "updating", url: "", image: "https://picsum.photos/seed/tv3/600/400", description: "Supported VTV Awards, HSB Cultural Festival, Sound of Light." },

            { id: 301, category: "game", title: "Starseed", type: "game", url: "https://gd.games/instant-builds/e8714d2a-3f8f-4d8d-91e7-f9c7e5548aba", image: "https://picsum.photos/seed/game1/600/400", description: "Interactive educational game developed on GDevelop platform." },
            { id: 302, category: "game", title: "Danny's Day", type: "game", url: "https://games.gdevelop-app.com/game-bbb4de63-0786-4da9-bb55-4d54425c392b/index.html", image: "https://picsum.photos/seed/game2/600/400", description: "Adventure academic game addressing real-life interactive scenarios." },
            { id: 303, category: "game", title: "The Escape Game", type: "game", url: "https://games.gdevelop-app.com/game-be5ed1b7-1e8b-4467-bfdb-e01f9ab4f315/index.html", image: "https://picsum.photos/seed/game3/600/400", description: "Puzzle escape game integrating logical thinking and educational knowledge." },

            { id: 401, category: "elearning", title: "English 4 - In the city", type: "youtube", url: "https://youtu.be/flWbX_eWQBQ", image: "https://img.youtube.com/vi/flWbX_eWQBQ/maxresdefault.jpg", description: "H5P E-learning Lecture (Unit 17: In the city - Lesson 1)." },
            { id: 402, category: "elearning", title: "Kung Fu HSK 1 - Hello (你好)", type: "youtube", url: "https://youtu.be/gMO_LdzNLsY", image: "https://img.youtube.com/vi/gMO_LdzNLsY/maxresdefault.jpg", description: "Interactive H5P Foreign Language Lecture - Kung Fu HSK 1." },
            { id: 403, category: "elearning", title: "Vietnamese 5 - Vocabulary Expansion", type: "youtube", url: "https://youtu.be/V6sxU_OXqGQ", image: "https://img.youtube.com/vi/V6sxU_OXqGQ/maxresdefault.jpg", description: "AI E-learning Video: Vocabulary Expansion - Children." },

            { id: 501, category: "social", title: "HUST TikTok Channel", type: "updating", url: "", image: "https://picsum.photos/seed/social1/600/400", description: "Created short video content for HUST brand communication on TikTok." },
            { id: 502, category: "social", title: "LED System - HUST", type: "updating", url: "", image: "https://picsum.photos/seed/social2/600/400", description: "Managed and designed visual publications for the university's LED screens." },
            { id: 503, category: "social", title: "Journal of Science and Technology - JST", type: "updating", url: "", image: "https://picsum.photos/seed/social3/600/400", description: "Developed media content for scientific research publications." },

            { id: 601, category: "training", title: "AI Animation in Education", type: "updating", url: "", image: "https://picsum.photos/seed/train1/600/400", description: "Training program on applying AI for educational animation tailored for teachers." }
        ]
    },
    zh: {
        title: "产品与项目",
        detail_btn: "详情",
        categories: {
            all: "全部",
            gendemy: "Gendemy生态",
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
            pdf: "阅读文件"
        },
        list: [
            { id: 101, category: "gendemy", title: "Gendemy 数字教育生态系统", type: "website", url: "https://www.gendemyedu.com/", image: "https://picsum.photos/seed/gendemy/600/400", description: "全面集成AI和电子学习的数字教育生态系统，旨在培养自主学习能力。" },

            { id: 201, category: "tv", title: "娱乐与游戏节目", type: "updating", url: "", image: "https://picsum.photos/seed/tv1/600/400", description: "为越南国家电视台的《12生肖》、《凯旋曲永驻》等节目制作内容和视觉特效。" },
            { id: 202, category: "tv", title: "教育与学生节目", type: "updating", url: "", image: "https://picsum.photos/seed/tv2/600/400", description: "参与制作《新一代学生2023》、《The Moneyverse》和《通往奥林匹亚峰之路》。" },
            { id: 203, category: "tv", title: "文化与艺术活动", type: "updating", url: "", image: "https://picsum.photos/seed/tv3/600/400", description: "协助VTV Awards、HSB文化节和音乐节等大型活动制作。" },

            { id: 301, category: "game", title: "Starseed", type: "game", url: "https://gd.games/instant-builds/e8714d2a-3f8f-4d8d-91e7-f9c7e5548aba", image: "https://picsum.photos/seed/game1/600/400", description: "在GDevelop平台上开发的互动教育游戏。" },
            { id: 302, category: "game", title: "Danny's Day", type: "game", url: "https://games.gdevelop-app.com/game-bbb4de63-0786-4da9-bb55-4d54425c392b/index.html", image: "https://picsum.photos/seed/game2/600/400", description: "解决现实生活中互动场景的冒险学术游戏。" },
            { id: 303, category: "game", title: "The Escape Game", type: "game", url: "https://games.gdevelop-app.com/game-be5ed1b7-1e8b-4467-bfdb-e01f9ab4f315/index.html", image: "https://picsum.photos/seed/game3/600/400", description: "结合逻辑思维和教育知识的密室逃脱解谜游戏。" },

            { id: 401, category: "elearning", title: "英语 4 - In the city", type: "youtube", url: "https://youtu.be/flWbX_eWQBQ", image: "https://img.youtube.com/vi/flWbX_eWQBQ/maxresdefault.jpg", description: "H5P 电子学习讲座（第17单元：在城市 - 第1课）。" },
            { id: 402, category: "elearning", title: "功夫 HSK 1 - 你好", type: "youtube", url: "https://youtu.be/gMO_LdzNLsY", image: "https://img.youtube.com/vi/gMO_LdzNLsY/maxresdefault.jpg", description: "H5P 互动外语讲座 - 功夫 HSK 1。" },
            { id: 403, category: "elearning", title: "越南语 5 - 词汇扩展", type: "youtube", url: "https://youtu.be/V6sxU_OXqGQ", image: "https://img.youtube.com/vi/V6sxU_OXqGQ/maxresdefault.jpg", description: "AI 电子学习视频：词语和句子（词汇扩展 - 儿童）。" },

            { id: 501, category: "social", title: "HUST TikTok 频道", type: "updating", url: "", image: "https://picsum.photos/seed/social1/600/400", description: "在TikTok平台上制作有关河内理工大学品牌传播的短视频内容。" },
            { id: 502, category: "social", title: "LED 系统 - 河内理工大学", type: "updating", url: "", image: "https://picsum.photos/seed/social2/600/400", description: "管理和设计学校LED屏幕的视觉演示出版物。" },
            { id: 503, category: "social", title: "科学与技术杂志 - JST", type: "updating", url: "", image: "https://picsum.photos/seed/social3/600/400", description: "为科学研究出版物开发媒体内容。" },

            { id: 601, category: "training", title: "教育中的 AI 动画", type: "updating", url: "", image: "https://picsum.photos/seed/train1/600/400", description: "针对教师应用AI制作教育动画特效的培训项目。" }
        ]
    }
};