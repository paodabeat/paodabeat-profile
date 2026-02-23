import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
                typewriter: ["EdTech Enthusiast", "Multimedia Content Creator", "E-learning Designer", "System Developer"],
                desc: "Là người đam mê Công nghệ Giáo dục (EdTech), tôi kết hợp thế mạnh về tư duy sư phạm, thiết kế đa phương tiện và lập trình hệ thống để tạo ra các giải pháp học tập sáng tạo. Từng thử sức qua nhiều dự án lớn tại VTV và ĐHBK HN, tôi luôn lấy người học làm trung tâm để thiết kế nội dung. Với sự kỷ luật, tôi không ngừng học hỏi và đổi mới bản thân mỗi ngày.",
                download_cv: "Download CV",
                view_projects: "Xem Dự Án",
                quote: "\"Little strokes fell great oaks\""
            },
            experience: {
                title: "Kinh Nghiệm",
                list: [
                    { year: "2023 - 2026", company: "Đài Truyền hình Việt Nam (VTV)", role: "Sản xuất chương trình truyền hình", description: "• Biên tập, thiết kế đồ hoạ, phối hợp thực hiện: Sinh viên thế hệ mới, 12 Con Giáp, Quán quen chính gốc, Dưới ngọn cờ quyết thắng, VTV Awards, Đường lên đỉnh Olympia...\n• Ban tổ chức: Ngày hội văn hoá HSB - T&T, Hoà nhạc Ánh Sáng, 50 năm TASECO..." },
                    { year: "2024 - 2025", company: "Trung tâm Truyền thông và Tri thức số (CCDK)", role: "Multimedia Content Creator & Lead of Design", description: "• Xây dựng nội dung số trên TikTok, Fanpage, Website theo nhận diện thương hiệu ĐHBK Hà Nội.\n• Lead of Design: Quản lý và kiểm duyệt nội dung hình ảnh, ấn phẩm cho hệ thống LED truyền thông ĐHBK Hà Nội." },
                    { year: "2024", company: "Học viện Viettel (VTAc)", role: "Thực tập sinh L&D", description: "• Trợ giảng các lớp Đào tạo Cán bộ quản lý và chương trình Global Mobility.\n• Tổ chức đào tạo cho Khách hàng Đối tác (cán bộ UBND tỉnh Hà Nam, Hưng Yên, Bộ Quốc Phòng,...)." },
                    { year: "2024", company: "gPBL on IoT (Tokyo - Nhật Bản)", role: "Sinh viên trao đổi", description: "• Đại diện Khoa KH&CNGD tham gia chương trình trao đổi tại Học viện Công nghệ Shibaura (Tokyo).\n• Xây dựng giải pháp Công nghệ giải quyết vấn đề xã hội bằng Robotic và IoT." },
                    { year: "2023 - 2024", company: "EdTech Bách khoa", role: "Chủ nhiệm", description: "• Quản lý & vận hành EdTech Lab. Xây dựng môi trường phát triển dự án EdTech (Learn with Tech, EdTech News...).\n• Tổ chức Workshop, Openday, Ngày hội Trải nghiệm Giáo dục Kỹ năng Công dân số." },
                    { year: "2023", company: "Trung tâm Chuyển đổi số - DTC", role: "E-learning Designer", description: "• Tham gia xây dựng dự án Học liệu số của Bộ Giáo dục và Đào tạo.\n• Phát triển nội dung khoá học (B-learning) trên hệ thống LMS cho sinh viên khối kỹ thuật ĐHBKHN." },
                    { year: "2022 - 2025", company: "Chắp Cánh STEAM & E-learning", role: "Ban tổ chức", description: "• Hỗ trợ giáo viên thiết kế bài giảng STEAM, E-learning tại Mù Cang Chải, Lai Châu, Quảng Bình...\n• Trực tiếp đào tạo cho hơn 200 giáo viên về AI Animation trong Giáo dục tại Lai Châu." },
                    { year: "2019 - 2021", company: "Ngôi nhà Trí Tuệ (NNTT)", role: "Quản trị viên", description: "• Xây dựng môi trường học tập trọn đời, quản lý thư viện hơn 1000 đầu sách lưu động.\n• Liên kết, tổ chức các lớp học và chương trình giáo dục miễn phí cho thanh thiếu niên địa phương." }
                ]
            },
            projects: {
                title: "Sản Phẩm & Dự Án",
                detail_btn: "Chi tiết",
                list: [
                    { id: 1, title: "Gendemy", category: "Hệ sinh thái", description: "Hệ sinh thái giáo dục số toàn diện tích hợp công nghệ AI và E-learning." },
                    { id: 2, title: "Sản xuất Truyền hình", category: "Đa phương tiện", description: "Các dự án truyền hình, gameshow và ấn phẩm số được sản xuất tại VTV." },
                    { id: 3, title: "Thiết kế & Lập trình Game", category: "EdTech", description: "Các trò chơi giáo dục tương tác phát triển trên nền tảng GDevelop & Rive." },
                    { id: 4, title: "Hệ thống E-learning", category: "EdTech", description: "Phát triển và vận hành hệ thống quản lý học tập (LMS), bài giảng tương tác." },
                    { id: 5, title: "Social Media Content", category: "Sáng tạo", description: "Quản lý và xây dựng nội dung truyền thông cho các dự án tại ĐHBK HN." }
                ]
            },
            skills: {
                title: "Kỹ Năng",
                list: [
                    { title: "Thiết kế đồ hoạ 2D/3D", items: ["Illustrator", "Photoshop", "Indesign", "Canva", "Blender"] },
                    { title: "Biên tập đa phương tiện", items: ["Premiere Pro", "After Effect", "Audition", "Animation", "CapCut", "Filmora"] },
                    { title: "Phân tích & Thiết kế HT", items: ["Figma", "Moodle", "Vercel", "Hostinger", "Mermaid"] },
                    { title: "Lập trình & Quản trị HT", items: ["HTML/CSS", "JavaScript/TS", "TailwindCSS", "MySQL", "Supabase", "Firebase", "Python"] },
                    { title: "Sản xuất E-learning", items: ["Active Presenter", "iSpring", "Lumi"] },
                    { title: "Thiết kế Game", items: ["GDevelop", "Rive"] },
                    { title: "AI Agent & AI Ứng dụng", items: ["Shakker", "Kling", "Hailuo", "Vbee"] },
                    { title: "Kỹ năng đặc thù khác", items: ["Truyền hình (vMix, Resolume)", "Phân tích dữ liệu (SPSS, GA)"] }
                ]
            },
            academic: {
                title: "Học Thuật",
                education: {
                    title: "Học Vấn",
                    degree: "Cử nhân Công nghệ Giáo dục",
                    university: "Đại học Bách khoa Hà Nội"
                },
                achievements: {
                    title: "Thành Tựu",
                    list: [
                        "Giấy khen từ Giám đốc Đại học Bách khoa Hà Nội (2024-2025)",
                        "Giấy khen từ BCH Đoàn TNCS Hồ Chí Minh ĐHBK HN (2023-2024)",
                        "Giấy khen từ Trưởng Khoa KH & Công nghệ Giáo dục (2022-2025)",
                        "Giải nhì cuộc thi sáng tạo BK.VIDEAS (2023)",
                        "Giải ba Oral - Giải nhì Poster Hội nghị Sinh viên NCKH (2023, 2025)",
                        "Giấy chứng nhận tham gia dự án Chắp Cánh STEM & E-Learning",
                        "Giấy chứng nhận Đại sứ FOSSASIA Summit (2024)",
                        "Giấy chứng nhận hoàn thành khoá học BA (Business Analyst) của UdeCareer"
                    ]
                },
                research: {
                    title: "Nghiên Cứu Khoa Học",
                    list: [
                        { title: "The Application of Problem-Based Learning in Soft Skills Courses: An Experiment in Classes with Multidisciplinary Students in Vietnam", journal: "Int. J. Eng. Ped. (Jul. 2025)" },
                        { title: "Mức độ sẵn sàng học tập tự định hướng của sinh viên trong môi trường Blended Learning: Trường hợp ĐHBK Hà Nội", journal: "TCGD (Tháng 8 2025)" },
                        { title: "Psychological Mechanisms Linking Project-Based Learning to Sustainable Development Goals Awareness", journal: "ETSD (Jan. 2026)" },
                        { title: "The Impact of Project-Based Learning on HUST Students' Awareness of the UN Sustainable Development Goals", journal: "Hội thảo ICEF (Ha Long, 2025)" }
                    ]
                }
            },
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
                address_detail: "Tương Mai - Hoàng Mai - Hà Nội",
                email: "Email:",
                foreign_language: "NGOẠI NGỮ",
                english: "Tiếng Anh",
                chinese: "Tiếng Trung Quốc",
                education_time: "Công nghệ Giáo dục",
                skills: {
                    graphic: "Thiết kế đồ họa 2D/3D",
                    video: "Biên tập và xử lý video/audio",
                    system: "Thiết kế hệ thống",
                    programming: "Ngôn ngữ lập trình",
                    others: "Các kỹ năng khác",
                    others_list: ["Phân tích nghiệp vụ (BA)", "Xây dựng kịch bản", "Thiết kế bài giảng tương tác H5P", "Thiết kế PowerPoint", "Thiết kế và lập trình game", "Đạo diễn thu âm và ghi hình"]
                }
            }
        }
    },
    en: {
        translation: {
            nav: {
                hero: "About",
                experience: "Experience",
                projects: "Projects",
                skills: "Skills",
                academic: "Academic",
            },
            hero: {
                typewriter: ["EdTech Enthusiast", "Multimedia Content Creator", "E-learning Designer", "System Developer"],
                desc: "As an EdTech Enthusiast, I combine pedagogical mindset, multimedia design, and system development to create innovative learning solutions. Having participated in major projects at VTV and HUST, I always prioritize a learner-centric approach in content design. With discipline, I constantly learn and innovate myself every day.",
                download_cv: "Download CV",
                view_projects: "View Projects",
                quote: "\"Little strokes fell great oaks\""
            },
            experience: {
                title: "Experience",
                list: [
                    { year: "2023 - 2026", company: "Vietnam Television (VTV)", role: "TV Program Production", description: "• Editing, graphic design, and co-production: New Generation Students, 12 Zodiacs, Authentic Local Eateries, Under the Winning Flag, VTV Awards, Road to Mt. Olympia...\n• Organizer: HSB - T&T Culture Day, Light Concert, 50 years of TASECO..." },
                    { year: "2024 - 2025", company: "Center for Communication and Digital Knowledge (CCDK)", role: "Multimedia Content Creator & Lead of Design", description: "• Built digital content on TikTok, Fanpage, and Website according to HUST brand identity.\n• Lead of Design: Managed and censored visual content and publications for the HUST media LED system." },
                    { year: "2024", company: "Viettel Academy (VTAc)", role: "L&D Intern", description: "• Teaching assistant for Management Training classes and the Global Mobility program.\n• Organized training for Partners and Clients (officials of Ha Nam, Hung Yen provinces, Ministry of Defense,...)." },
                    { year: "2024", company: "gPBL on IoT (Tokyo - Japan)", role: "Exchange Student", description: "• Represented the School of Educational Science & Technology to participate in an exchange program at Shibaura Institute of Technology (Tokyo).\n• Built technology solutions to solve social problems using Robotics and IoT." },
                    { year: "2023 - 2024", company: "HUST EdTech", role: "President", description: "• Managed & operated EdTech Lab. Built an environment for EdTech project development (Learn with Tech, EdTech News...).\n• Organized Workshops, Open Days, and Digital Citizenship Skills Education Experience Day." },
                    { year: "2023", company: "Digital Transformation Center - DTC", role: "E-learning Designer", description: "• Participated in building the digital learning material project of the Ministry of Education and Training.\n• Developed course content (B-learning) on the LMS system for HUST engineering students." },
                    { year: "2022 - 2025", company: "Chap Canh STEAM & E-learning", role: "Organizer", description: "• Supported teachers in designing STEAM and E-learning lectures in Mu Cang Chai, Lai Chau, Quang Binh...\n• Directly trained over 200 teachers on AI Animation in Education in Lai Chau." },
                    { year: "2019 - 2021", company: "The House of Wisdom (NNTT)", role: "Administrator", description: "• Built a lifelong learning environment, managed a mobile library with over 1000 books.\n• Associated and organized free classes and educational programs for local youth." }
                ]
            },
            projects: {
                title: "Products & Projects",
                detail_btn: "Details",
                list: [
                    { id: 1, title: "Gendemy", category: "Ecosystem", description: "A comprehensive digital education ecosystem integrating AI and E-learning." },
                    { id: 2, title: "TV Production", category: "Multimedia", description: "Television projects, gameshows, and digital publications produced at VTV." },
                    { id: 3, title: "Game Design & Dev", category: "EdTech", description: "Interactive educational games developed on GDevelop & Rive platforms." },
                    { id: 4, title: "E-learning System", category: "EdTech", description: "Developed and operated Learning Management Systems (LMS) and interactive lectures." },
                    { id: 5, title: "Social Media Content", category: "Creative", description: "Managed and created media content for projects at HUST." }
                ]
            },
            skills: {
                title: "Skills",
                list: [
                    { title: "2D/3D Graphic Design", items: ["Illustrator", "Photoshop", "Indesign", "Canva", "Blender"] },
                    { title: "Multimedia Editing", items: ["Premiere Pro", "After Effect", "Audition", "Animation", "CapCut", "Filmora"] },
                    { title: "System Analysis & Design", items: ["Figma", "Moodle", "Vercel", "Hostinger", "Mermaid"] },
                    { title: "Programming & SysAdmin", items: ["HTML/CSS", "JavaScript/TS", "TailwindCSS", "MySQL", "Supabase", "Firebase", "Python"] },
                    { title: "E-learning Production", items: ["Active Presenter", "iSpring", "Lumi"] },
                    { title: "Game Design", items: ["GDevelop", "Rive"] },
                    { title: "AI Agent & Applied AI", items: ["Shakker", "Kling", "Hailuo", "Vbee"] },
                    { title: "Other Specific Skills", items: ["TV Production (vMix, Resolume)", "Data Analysis (SPSS, GA)"] }
                ]
            },
            academic: {
                title: "Academic",
                education: {
                    title: "Education",
                    degree: "Bachelor of Educational Technology",
                    university: "Hanoi University of Science and Technology"
                },
                achievements: {
                    title: "Achievements",
                    list: [
                        "Certificate of Merit from the President of HUST (2024-2025)",
                        "Certificate of Merit from Ho Chi Minh Communist Youth Union of HUST (2023-2024)",
                        "Certificate of Merit from the Dean of School of Educational Science & Technology (2022-2025)",
                        "Second Prize in BK.VIDEAS creative competition (2023)",
                        "Third Prize Oral - Second Prize Poster at Student Scientific Research Conference (2023, 2025)",
                        "Certificate of participation in Chap Canh STEM & E-Learning project",
                        "Certificate of FOSSASIA Summit Ambassador (2024)",
                        "Certificate of completion of BA (Business Analyst) course by UdeCareer"
                    ]
                },
                research: {
                    title: "Scientific Research",
                    list: [
                        { title: "The Application of Problem-Based Learning in Soft Skills Courses: An Experiment in Classes with Multidisciplinary Students in Vietnam", journal: "Int. J. Eng. Ped. (Jul. 2025)" },
                        { title: "Students' Self-Directed Learning Readiness in a Blended Learning Environment: The Case of HUST", journal: "Journal of Education (Aug. 2025)" },
                        { title: "Psychological Mechanisms Linking Project-Based Learning to Sustainable Development Goals Awareness", journal: "ETSD (Jan. 2026)" },
                        { title: "The Impact of Project-Based Learning on HUST Students' Awareness of the UN Sustainable Development Goals", journal: "ICEF Conference (Ha Long, 2025)" }
                    ]
                }
            },
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
                address_detail: "Tuong Mai - Hoang Mai - Hanoi",
                email: "Email:",
                foreign_language: "LANGUAGES",
                english: "English",
                chinese: "Chinese",
                education_time: "Educational Technology",
                skills: {
                    graphic: "2D/3D Graphic Design",
                    video: "Video/Audio Editing",
                    system: "System Design",
                    programming: "Programming Languages",
                    others: "Other Skills",
                    others_list: ["Business Analysis (BA)", "Scriptwriting", "H5P Interactive Lectures", "PowerPoint Design", "Game Design & Dev", "Audio & Video Directing"]
                }
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
                typewriter: ["教育科技爱好者", "多媒体内容创作者", "电子学习设计师", "系统开发员"],
                desc: "作为一名教育科技（EdTech）爱好者，我将教学思维、多媒体设计和系统开发相结合，以创造创新的学习解决方案。在参与VTV和河内理工大学的重大项目时，我始终坚持以学习者为中心的内容设计方法。凭借自律，我每天都在不断学习和自我创新。",
                download_cv: "下载简历",
                view_projects: "查看项目",
                quote: "\"滴水穿石\""
            },
            experience: {
                title: "经验",
                list: [
                    { year: "2023 - 2026", company: "越南国家电视台 (VTV)", role: "电视节目制作", description: "• 剪辑、图形设计和联合制作：《新一代大学生》、《十二生肖》、《地道正宗餐厅》、《在决胜旗帜下》、《VTV颁奖典礼》、《通往奥林匹亚之路》...\n• 组织者：HSB - T&T文化节、光之音乐会、TASECO 50周年..." },
                    { year: "2024 - 2025", company: "数字传播与知识中心 (CCDK)", role: "多媒体内容创作者与设计主管", description: "• 根据HUST品牌形象在TikTok、Fanpage和网站上建立数字内容。\n• 设计主管：管理和审查HUST媒体LED系统的视觉内容和出版物。" },
                    { year: "2024", company: "Viettel学院 (VTAc)", role: "学习与发展（L&D）实习生", description: "• 担任管理培训班和全球流动计划的助教。\n• 为合作伙伴和客户（河南省、兴安省、国防部的官员等）组织培训。" },
                    { year: "2024", company: "gPBL on IoT (日本东京)", role: "交换生", description: "• 代表教育科学与技术学院参加芝浦工业大学（东京）的交流项目。\n• 构建技术解决方案，使用机器人和物联网解决社会问题。" },
                    { year: "2023 - 2024", company: "HUST EdTech", role: "主席", description: "• 管理和运营EdTech实验室。建立教育科技项目开发环境（Learn with Tech，EdTech News...）。\n• 组织工作坊、开放日和数字公民技能教育体验日。" },
                    { year: "2023", company: "数字化转型中心 - DTC", role: "电子学习设计师", description: "• 参与建设教育与培训部的数字学习材料项目。\n• 在LMS系统上为HUST工程类学生开发课程内容（B-learning）。" },
                    { year: "2022 - 2025", company: "Chap Canh STEAM & E-learning", role: "组织者", description: "• 协助教师在木江界、莱州、广平等地设计STEAM和电子学习课程...\n• 在莱州直接为200多名教师进行了AI动画在教育中的应用培训。" },
                    { year: "2019 - 2021", company: "The House of Wisdom", role: "管理员", description: "• 建立终身学习环境，管理拥有1000多本书的流动图书馆。\n• 联合组织为当地青少年提供免费课程和教育项目。" }
                ]
            },
            projects: {
                title: "产品与项目",
                detail_btn: "详情",
                list: [
                    { id: 1, title: "Gendemy", category: "生态系统", description: "全面集成AI和电子学习的数字教育生态系统。" },
                    { id: 2, title: "电视制作", category: "多媒体", description: "在VTV制作的电视项目、游戏节目和数字出版物。" },
                    { id: 3, title: "游戏设计与开发", category: "教育科技", description: "在GDevelop和Rive平台上开发的互动教育游戏。" },
                    { id: 4, title: "电子学习系统", category: "教育科技", description: "开发和运营学习管理系统 (LMS) 和互动课程。" },
                    { id: 5, title: "社交媒体内容", category: "创意", description: "管理和创建河内理工大学项目的媒体内容。" }
                ]
            },
            skills: {
                title: "技能",
                list: [
                    { title: "2D/3D图形设计", items: ["Illustrator", "Photoshop", "Indesign", "Canva", "Blender"] },
                    { title: "多媒体编辑", items: ["Premiere Pro", "After Effect", "Audition", "Animation", "CapCut", "Filmora"] },
                    { title: "系统分析与设计", items: ["Figma", "Moodle", "Vercel", "Hostinger", "Mermaid"] },
                    { title: "编程与系统管理", items: ["HTML/CSS", "JavaScript/TS", "TailwindCSS", "MySQL", "Supabase", "Firebase", "Python"] },
                    { title: "电子学习制作", items: ["Active Presenter", "iSpring", "Lumi"] },
                    { title: "游戏设计", items: ["GDevelop", "Rive"] },
                    { title: "AI代理与应用AI", items: ["Shakker", "Kling", "Hailuo", "Vbee"] },
                    { title: "其他专业技能", items: ["电视制作 (vMix, Resolume)", "数据分析 (SPSS, GA)"] }
                ]
            },
            academic: {
                title: "学术",
                education: {
                    title: "教育背景",
                    degree: "教育科技学士",
                    university: "河内理工大学"
                },
                achievements: {
                    title: "成就",
                    list: [
                        "河内理工大学校长奖状 (2024-2025)",
                        "河内理工大学胡志明共青团奖状 (2023-2024)",
                        "教育科学与技术学院院长奖状 (2022-2025)",
                        "BK.VIDEAS创新大赛二等奖 (2023)",
                        "学生科研会议口头报告三等奖 - 海报展示二等奖 (2023, 2025)",
                        "参与Chap Canh STEM & E-Learning项目证书",
                        "FOSSASIA峰会大使证书 (2024)",
                        "UdeCareer BA（业务分析师）课程结业证书"
                    ]
                },
                research: {
                    title: "科学研究",
                    list: [
                        { title: "The Application of Problem-Based Learning in Soft Skills Courses: An Experiment in Classes with Multidisciplinary Students in Vietnam", journal: "Int. J. Eng. Ped. (Jul. 2025)" },
                        { title: "混合学习环境下学生自我导向学习准备度：以HUST为例", journal: "教育杂志 (Aug. 2025)" },
                        { title: "Psychological Mechanisms Linking Project-Based Learning to Sustainable Development Goals Awareness", journal: "ETSD (Jan. 2026)" },
                        { title: "The Impact of Project-Based Learning on HUST Students' Awareness of the UN Sustainable Development Goals", journal: "ICEF 会议 (Ha Long, 2025)" }
                    ]
                }
            },
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
                address_detail: "河内 - 黄梅 - 湘梅",
                email: "电子邮件：",
                foreign_language: "外语",
                english: "英语",
                chinese: "中文",
                education_time: "教育技术",
                skills: {
                    graphic: "2D/3D图形设计",
                    video: "视频/音频编辑",
                    system: "系统设计",
                    programming: "编程语言",
                    others: "其他技能",
                    others_list: ["业务分析 (BA)", "剧本创作", "H5P互动课程", "PPT设计", "游戏设计与开发", "音视频导演"]
                }
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