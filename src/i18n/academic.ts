// id của mỗi thành tựu / bài nghiên cứu trùng với tên file ảnh:
// - Thành tựu: assets/certificate/<id>.(png|jpg|jpeg|webp), sau đó chạy `python scripts/optimize_images.py`
//   để tạo bản web/thumb (danh sách thành tựu nằm ở i18n/achievements.ts)
// - Nghiên cứu (trang đầu tiên của paper): assets/research/<id>.(png|jpg|jpeg|webp)
// Mục nào chưa có ảnh sẽ hiển thị placeholder.

import { achievements } from "./achievements";

// Thông tin bài nghiên cứu giữ nguyên như bản đã xuất bản (dùng chung cho cả 3 ngôn ngữ)
const PAPERS = {
    "01": {
        year: "2025",
        url: "https://doi.org/10.3991/ijep.v15i5.53663",
        authors: "Thi Van Dang, Phung Tran Gia Bao, Vu Dinh Minh, Nguyen Thi Thanh Tu",
        citation: "Vol. 15, No. 5 (2025), pp. 20–41 · eISSN 2192-4880 · DOI 10.3991/ijep.v15i5.53663",
        abstract: "Soft skills are essential if graduates are to meet the demands of the 21st-century workforce. This represents a major challenge for higher education programs, which need to adopt teaching methods that effectively equip students with these essential skills. This study evaluates the impact of a problem-based learning approach to curriculum design on soft skills for multidisciplinary students. The elective course, which attracts a diverse cohort of students, is delivered in a blended learning format. Using a mixed-methods research approach, the study collected data via questionnaires from 140 multidisciplinary students split between experimental and control groups, supplemented by in-depth interviews conducted after the course. This paper describes a proposed teaching process based on problem-based learning and details the implementation of an experimental lesson on time management as part of the soft skills curriculum. The results indicate that problem-based learning not only enhances the development of soft skills but also encourages student initiative and creativity by improving individual and teamwork skills in both online and face-to-face learning environments. Based on these findings, the study recommends further research to broaden the application of problem-based learning in higher education contexts."
    },
    "02": {
        year: "2025",
        url: "https://tcgd.tapchigiaoduc.edu.vn/index.php/tapchi/article/view/3710/1190",
        authors: "Trần Thị Thanh Hà, Phùng Trần Gia Bảo",
        citation: "Vol. 25, No. 15 (2025), pp. 47–52 · ISSN 2354-0753",
        abstract: "In the context of digital transformation and higher education reform in Vietnam, Blended Learning has become increasingly popular, especially after the COVID-19 pandemic. Hanoi University of Science and Technology has implemented numerous Blended Learning courses since 2017 through its Learning Management System (LMS). This article evaluates students' Self-Directed Learning Readiness (SDLR) in a Blended Learning environment, using a quantitative approach with a sample of 360 students from 9 faculties/institutes. The findings indicate that the average SDLR score is 149.56 out of 200 - approaching the high-readiness threshold according to the scale by Fisher et al. (2001). Among the SDLR components, “Desire for Learning” scored the highest (3.92/5), while “Self-Management” the lowest (3.34/5). The students with high GPAs (3.5–4.0) had SDLR scores 18% higher than those with lower GPAs (<2.0). The study recommends integrated solutions to enhance students' self-management abilities, including improved course design, supplementary LMS support tools, and skill development programs, in order to boost learning motivation and improve SDLR among students."
    },
    "03": {
        year: "2026",
        url: "https://jst.vn/index.php/etsd/article/view/1240",
        authors: "Tran Thi Quynh Mai, Phung Tran Gia Bao, Luu Ngoc Hien, Bach Thanh Giang, Le Hieu Hoc",
        citation: "Vol. 36, Issue 2 (April 2026), pp. 111–125 · e-ISSN 3093-3579 · DOI 10.51316/jst.189.etsd.2026.36.2.14",
        abstract: "The study investigates the psychological mechanisms linking Project-Based Learning (PjBL) to students' awareness of the United Nations Sustainable Development Goals (SDGs) at Hanoi University of Science and Technology (HUST). Based on 192 valid responses, the study employs PLS-SEM to examine the proposed relationships and ANOVA to test differences across academic disciplines, the results reveal that self-efficacy has positive influence on student’s awareness and knowledge and engagement with the SDGs. In contrast, learning motivation is found to affect only the evaluation dimension. Significant differences across academic disciplines were also identified in the three dimensions of SDG awareness. The study recommends enhancing the integration of SDGs into PjBL, fostering students’ self-efficacy, aligning learning motivation with SDGs-related content, and providing faculty training. Furthermore, future research should explore external moderating factors - such as institutional policies, support from lecturers and enterprises, and the classroom environments - to strengthen the model’s explanatory power."
    },
    "04": {
        year: "2025",
        url: "",
        authors: "Tran Thi Quynh Mai, Luu Ngoc Hien, Phung Tran Gia Bao, Bach Thanh Giang, Le Hieu Hoc",
        citation: "Ha Long, October 23–25, 2025 · p. 56 · PID 414",
        abstract: "This study evaluates the impact of Project-Based Learning (PjBL) on students at Hanoi University of Science and Technology in relation to their awareness of the United Nations Sustainable Development Goals (SDGs). Based on 192 valid responses and employing PLS-SEM and ANOVA analyses, the results reveal that self-efficacy has positive influence on student’s awareness and knowledge and engagement with the SDGs. In contrast, learning motivation is found to affect only the evaluation dimension. Significant differences across academic disciplines were also identified in the three dimensions of SDG awareness. The study recommends enhancing the integration of SDGs into PjBL, fostering students’ self-efficacy, aligning learning motivation with SDGs-related content, and providing faculty training. Furthermore, future research should explore external moderating factors – such as institutional policies, support from lecturers and enterprises, and the classroom environments – to strengthen the model’s explanatory power."
    }
};

const PAPER_TITLES = {
    "01": "The Application of Problem-Based Learning in Soft Skills Courses: An Experiment in Classes with Multidisciplinary Students in Vietnam",
    "03": "Psychological Mechanisms Linking Project-Based Learning to Sustainable Development Goals Awareness: The Mediating Roles of Self-Efficacy, Learning Motivation, and Flow Experience Perception",
    "04": "The Impact of Project-Based Learning on HUST Students' Awareness of the UN Sustainable Development Goals"
};

// Tên đầy đủ của tạp chí / hội thảo
const VENUES = {
    "01": "International Journal of Engineering Pedagogy (iJEP)",
    "03": "Journal of Science and Technology: Engineering and Technology for Sustainable Development (JST: ETSD)",
    "04": "International Conference on Educational Sciences and Foreign Language Teaching (ICEF)"
};

export const academic = {
    vi: {
        title: "Học Thuật",
        education: {
            title: "Học Vấn",
            master: {
                degree: "Học viên Cao học Lý luận và Phương pháp dạy học",
                track_label: "Hướng module",
                track: "STEM và Công nghệ Giáo dục",
                school: "Khoa Khoa học và Công nghệ Giáo dục, Đại học Bách khoa Hà Nội",
                status: "Đang theo học"
            },
            degree: "Cử nhân Công nghệ Giáo dục",
            university: "Khoa Khoa học và Công nghệ Giáo dục, Đại học Bách khoa Hà Nội",
            honor_label: "Xếp loại",
            honor: "Bằng Giỏi"
        },
        achievements: {
            title: "Thành Tựu",
            types: { all: "Tất cả", award: "Giải thưởng", merit: "Giấy khen", certificate: "Chứng nhận" },
            list: achievements.vi
        },
        research: {
            title: "Nghiên Cứu Khoa Học",
            read: "Đọc bài báo",
            list: [
                { id: "01", title: PAPER_TITLES["01"], journal: "Int. J. Eng. Ped. (Jul. 2025)", venue: VENUES["01"], ...PAPERS["01"] },
                {
                    id: "02",
                    title: "Mức độ sẵn sàng học tập tự định hướng của sinh viên trong môi trường Blended Learning: Trường hợp nghiên cứu tại Đại học Bách khoa Hà Nội",
                    journal: "TCGD (Tháng 8 2025)",
                    venue: "Tạp chí Giáo dục (Vietnam Journal of Education - VJE)",
                    ...PAPERS["02"]
                },
                { id: "03", title: PAPER_TITLES["03"], journal: "ETSD (Apr. 2026)", venue: VENUES["03"], ...PAPERS["03"] },
                { id: "04", title: PAPER_TITLES["04"], journal: "Hội thảo ICEF (Hạ Long, 2025)", venue: VENUES["04"], ...PAPERS["04"] }
            ]
        }
    },
    en: {
        title: "Academic",
        education: {
            title: "Education",
            master: {
                degree: "Master's Student in Theory and Methods of Teaching",
                track_label: "Module track",
                track: "STEM and Educational Technology",
                school: "School of Educational Science and Technology, Hanoi University of Science and Technology",
                status: "In progress"
            },
            degree: "Bachelor of Educational Technology",
            university: "School of Educational Science and Technology, Hanoi University of Science and Technology",
            honor_label: "Classification",
            honor: "Very Good Degree"
        },
        achievements: {
            title: "Achievements",
            types: { all: "All", award: "Awards", merit: "Certificates of Merit", certificate: "Certificates" },
            list: achievements.en
        },
        research: {
            title: "Scientific Research",
            read: "Read the paper",
            list: [
                { id: "01", title: PAPER_TITLES["01"], journal: "Int. J. Eng. Ped. (Jul. 2025)", venue: VENUES["01"], ...PAPERS["01"] },
                {
                    id: "02",
                    title: "Students' Self-Directed Learning Readiness in a Blended Learning Environment: A Case Study at Hanoi University of Science and Technology",
                    journal: "Journal of Education (Aug. 2025)",
                    venue: "Vietnam Journal of Education (Tạp chí Giáo dục - VJE)",
                    ...PAPERS["02"]
                },
                { id: "03", title: PAPER_TITLES["03"], journal: "ETSD (Apr. 2026)", venue: VENUES["03"], ...PAPERS["03"] },
                { id: "04", title: PAPER_TITLES["04"], journal: "ICEF Conference (Ha Long, 2025)", venue: VENUES["04"], ...PAPERS["04"] }
            ]
        }
    },
    zh: {
        title: "学术",
        education: {
            title: "教育背景",
            master: {
                degree: "教学理论与方法 硕士研究生",
                track_label: "模块方向",
                track: "STEM 与教育技术",
                school: "河内理工大学 教育科学与技术学院",
                status: "在读"
            },
            degree: "教育科技学士",
            university: "河内理工大学 教育科学与技术学院",
            honor_label: "学位等级",
            honor: "优良"
        },
        achievements: {
            title: "成就",
            types: { all: "全部", award: "奖项", merit: "奖状", certificate: "证书" },
            list: achievements.zh
        },
        research: {
            title: "科学研究",
            read: "阅读论文",
            list: [
                { id: "01", title: PAPER_TITLES["01"], journal: "Int. J. Eng. Ped. (Jul. 2025)", venue: VENUES["01"], ...PAPERS["01"] },
                {
                    id: "02",
                    title: "混合学习环境下学生自我导向学习准备度：以河内理工大学为例",
                    journal: "教育杂志 (Aug. 2025)",
                    venue: "越南教育杂志 (Tạp chí Giáo dục - VJE)",
                    ...PAPERS["02"]
                },
                { id: "03", title: PAPER_TITLES["03"], journal: "ETSD (Apr. 2026)", venue: VENUES["03"], ...PAPERS["03"] },
                { id: "04", title: PAPER_TITLES["04"], journal: "ICEF 会议 (Ha Long, 2025)", venue: VENUES["04"], ...PAPERS["04"] }
            ]
        }
    }
};
