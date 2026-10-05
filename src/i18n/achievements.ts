// Danh sách thành tựu cho gallery (id trùng tên file ảnh trong assets/certificate)
// type: award (giải thưởng) | merit (giấy khen) | certificate (chứng nhận)
// cv: true -> hiển thị thêm trong mục Thành tựu của trang CV

export const achievements = {
    vi: [
        // Giải thưởng
        { id: "27", type: "award", cv: true, title: "Giải Vàng (Gold Award) – Bảng Giáo dục Đại học, GCD4F lần thứ 9", issuer: "Global Competition on Design for Futures – Chung kết khu vực Đông Nam Á tại Malaysia (đội Gendemy)", year: "07/2026" },
        { id: "04", type: "award", cv: true, title: "Giải Ba Sinh viên Nghiên cứu Khoa học cấp Đại học", issuer: "Giấy khen của Giám đốc Đại học Bách khoa Hà Nội", year: "2024 - 2025" },
        { id: "05", type: "award", cv: true, title: "Giải Poster Sinh viên Nghiên cứu Khoa học cấp Đại học", issuer: "Giấy khen của Giám đốc Đại học Bách khoa Hà Nội", year: "2024 - 2025" },
        { id: "09", type: "award", cv: true, title: "Giải Nhì cuộc thi bình chọn online BK.VIDEAS 2022 - 2023", issuer: "Đại học Bách khoa Hà Nội – Khối ngành Quản lý, Sư phạm, Ngoại ngữ và Lý luận chính trị", year: "06/2023" },
        { id: "08", type: "award", cv: true, title: "Giải Ba Phân ban Khoa học và Công nghệ Giáo dục – Hội nghị Sinh viên NCKH lần thứ 40", issuer: "Viện Sư phạm Kỹ thuật, Đại học Bách khoa Hà Nội", year: "06/2023" },

        // Giấy khen
        { id: "02", type: "merit", cv: true, title: "Giấy khen vì nhiều đóng góp tích cực cho các hoạt động của Đại học", issuer: "Giám đốc Đại học Bách khoa Hà Nội", year: "2023 - 2024" },
        { id: "15", type: "merit", cv: true, title: "Giấy khen vì kết quả học tập tốt và nhiều đóng góp trong công tác Đoàn thanh niên – Hội sinh viên", issuer: "Giám đốc Đại học Bách khoa Hà Nội", year: "2022 - 2023" },
        { id: "10", type: "merit", title: "Giấy khen hoàn thành xuất sắc nhiệm vụ trong công tác Đoàn – Hội và phong trào sinh viên", issuer: "Trưởng Khoa Khoa học và Công nghệ Giáo dục", year: "2023 - 2024" },
        { id: "11", type: "merit", title: "Giấy khen hoàn thành xuất sắc nhiệm vụ trong công tác Đoàn và phong trào sinh viên", issuer: "Liên chi Đoàn Khoa Khoa học và Công nghệ Giáo dục", year: "2023 - 2024" },
        { id: "24", type: "merit", title: "Giấy khen hoàn thành xuất sắc nhiệm vụ trong công tác Đoàn – Hội và phong trào sinh viên", issuer: "Viện trưởng Viện Sư phạm Kỹ thuật", year: "2022 - 2023" },
        { id: "03", type: "merit", title: "Giấy khen vì thành tích trong công tác Đoàn và phong trào thanh niên, sinh viên", issuer: "BCH Đoàn TNCS Hồ Chí Minh Trường Đại học Bách khoa Hà Nội", year: "2021 - 2022" },

        // Chứng nhận
        { id: "16", type: "certificate", title: "Đứng lớp dự án “Chắp cánh Bích Hào – Ứng dụng AI trong dạy và học”", issuer: "UBND xã Bích Hào (Nghệ An), Khoa KH&CN Giáo dục – ĐHBK Hà Nội, Quỹ Chắp Cánh CC Foundation", year: "08/2026" },
        { id: "22", type: "certificate", title: "Certificate of Appreciation – Hội thảo quốc tế ICEF 2025", issuer: "International Conference on Educational Sciences and Foreign Language Teaching, Hạ Long (23 - 25/10/2025)", year: "10/2025" },
        { id: "14", type: "certificate", title: "Tham gia Hội nghị Sinh viên NCKH lần thứ 42 (mã đề tài S7.03-O-03)", issuer: "Đại học Bách khoa Hà Nội", year: "06/2025" },
        { id: "13", type: "certificate", title: "Tham gia Hội nghị Sinh viên NCKH lần thứ 42 (mã đề tài S7.03-P-20)", issuer: "Đại học Bách khoa Hà Nội", year: "06/2025" },
        { id: "21", type: "certificate", title: "Dự án “Chắp cánh Hoàng Su Phì – Thiết kế bài giảng STEM và ứng dụng trí tuệ nhân tạo trong dạy học”", issuer: "Phòng GD&ĐT huyện Hoàng Su Phì (Hà Giang), Khoa KH&CN Giáo dục – ĐHBK Hà Nội, Quỹ Chắp Cánh CC Foundation", year: "04/2025" },
        { id: "19", type: "certificate", title: "Dự án “Chắp cánh Lai Châu 2 – Ứng dụng CNTT & Trí tuệ nhân tạo trong dạy học và quản lý”", issuer: "Phòng GD&ĐT thành phố Lai Châu, Khoa KH&CN Giáo dục – ĐHBK Hà Nội, Quỹ Chắp Cánh CC Foundation", year: "12/2024" },
        { id: "12", type: "certificate", title: "Thành viên Ban Điều hành EdTech Bách khoa, nhiệm kỳ 3 (2023 - 2024)", issuer: "Khoa Khoa học và Công nghệ Giáo dục & Đoàn Thanh niên Khoa, ĐHBK Hà Nội", year: "05/2024" },
        { id: "01", type: "certificate", title: "Hoàn thành khoá học Business Analyst Practitioner", issuer: "Chứng nhận của UdeCareer", year: "05/2024" },
        { id: "06", type: "certificate", cv: true, title: "Đại sứ FOSSASIA Summit 2024", issuer: "Certificate of Appreciation, FOSSASIA Summit (08 - 10/04/2024)", year: "04/2024" },
        { id: "25", type: "certificate", cv: true, title: "Hoàn thành chương trình Global Project-Based Learning tại Nhật Bản", issuer: "Shibaura Institute of Technology – Innovative Global Program (25/02 - 05/03/2024)", year: "03/2024" },
        { id: "17", type: "certificate", title: "Dự án “Chắp cánh STEM Dế Xu Phình”", issuer: "Trường PTDTBT TH&THCS Dế Xu Phình, Viện Sư phạm Kỹ thuật – ĐHBK Hà Nội, Quỹ Chắp Cánh CC Foundation", year: "12/2023" },
        { id: "26", type: "certificate", title: "Hoàn thành chương trình bồi dưỡng nhận thức về Đảng", issuer: "Đảng ủy Khối các trường Đại học, Cao đẳng Hà Nội", year: "11/2023" },
        { id: "18", type: "certificate", title: "Đề án “Chắp cánh Lai Châu STEM & E-Learning”", issuer: "Phòng Giáo dục thành phố Lai Châu, Viện Sư phạm Kỹ thuật – ĐHBK Hà Nội, Quỹ Chắp Cánh CC Foundation", year: "09/2023" },
        { id: "23", type: "certificate", title: "Hoàn thành chương trình Global Project-Based Learning on Internet of Things", issuer: "ĐHBK Hà Nội, Phenikaa University & Shibaura Institute of Technology (07 - 15/09/2023)", year: "09/2023" },
        { id: "20", type: "certificate", title: "Dự án “Chắp cánh Bố Trạch STEM & E-Learning”", issuer: "Phòng Giáo dục huyện Bố Trạch, Viện Sư phạm Kỹ thuật – ĐHBK Hà Nội, Quỹ Chắp Cánh CC Foundation", year: "07/2023" },
        { id: "07", type: "certificate", title: "Tham gia Hội nghị Sinh viên NCKH lần thứ 40 (mã đề tài ED.05)", issuer: "Đại học Bách khoa Hà Nội", year: "06/2023" }
    ],
    en: [
        // Awards
        { id: "27", type: "award", cv: true, title: "Gold Award, Higher Education Track – 9th Global Competition on Design for Futures (GCD4F)", issuer: "Southeast Asia Regional Finals in Malaysia – Team Gendemy (Beijing Normal University, UNESCO IITE, Open University Malaysia)", year: "07/2026" },
        { id: "04", type: "award", cv: true, title: "Third Prize, University-level Student Scientific Research", issuer: "Certificate of Merit from the President of HUST", year: "2024 - 2025" },
        { id: "05", type: "award", cv: true, title: "Poster Prize, University-level Student Scientific Research", issuer: "Certificate of Merit from the President of HUST", year: "2024 - 2025" },
        { id: "09", type: "award", cv: true, title: "Second Prize, BK.VIDEAS 2022 - 2023 Online Voting Contest", issuer: "Hanoi University of Science and Technology – Management, Pedagogy, Foreign Languages & Political Theory track", year: "06/2023" },
        { id: "08", type: "award", cv: true, title: "Third Prize, Educational Science & Technology Subcommittee – 40th Student Research Conference", issuer: "School of Engineering Pedagogy, HUST", year: "06/2023" },

        // Certificates of Merit
        { id: "02", type: "merit", cv: true, title: "Certificate of Merit for positive contributions to university activities", issuer: "President of HUST", year: "2023 - 2024" },
        { id: "15", type: "merit", cv: true, title: "Certificate of Merit for good academic results and contributions to the Youth Union – Student Association", issuer: "President of HUST", year: "2022 - 2023" },
        { id: "10", type: "merit", title: "Certificate of Merit for outstanding Youth Union – Student Association work and student movements", issuer: "Dean of the School of Educational Science and Technology", year: "2023 - 2024" },
        { id: "11", type: "merit", title: "Certificate of Merit for outstanding Youth Union work and student movements", issuer: "Youth Union of the School of Educational Science and Technology", year: "2023 - 2024" },
        { id: "24", type: "merit", title: "Certificate of Merit for outstanding Youth Union – Student Association work and student movements", issuer: "Director of the School of Engineering Pedagogy", year: "2022 - 2023" },
        { id: "03", type: "merit", title: "Certificate of Merit for achievements in Youth Union work and student movements", issuer: "Ho Chi Minh Communist Youth Union of HUST", year: "2021 - 2022" },

        // Certificates
        { id: "16", type: "certificate", title: "Instructor, “Chap Canh Bich Hao – Applying AI in Teaching and Learning” project", issuer: "Bich Hao Commune People's Committee (Nghe An), School of Educational Science and Technology – HUST, CC Foundation", year: "08/2026" },
        { id: "22", type: "certificate", title: "Certificate of Appreciation – ICEF 2025 International Conference", issuer: "International Conference on Educational Sciences and Foreign Language Teaching, Ha Long (October 23 - 25, 2025)", year: "10/2025" },
        { id: "14", type: "certificate", title: "Participant, 42nd Student Research Conference (Research ID S7.03-O-03)", issuer: "Hanoi University of Science and Technology", year: "06/2025" },
        { id: "13", type: "certificate", title: "Participant, 42nd Student Research Conference (Research ID S7.03-P-20)", issuer: "Hanoi University of Science and Technology", year: "06/2025" },
        { id: "21", type: "certificate", title: "“Chap Canh Hoang Su Phi – STEM Lesson Design and AI in Teaching” project", issuer: "Hoang Su Phi District Department of Education and Training (Ha Giang), School of Educational Science and Technology – HUST, CC Foundation", year: "04/2025" },
        { id: "19", type: "certificate", title: "“Chap Canh Lai Chau 2 – Applying IT & AI in Teaching and Management” project", issuer: "Lai Chau City Department of Education and Training, School of Educational Science and Technology – HUST, CC Foundation", year: "12/2024" },
        { id: "12", type: "certificate", title: "Management Committee member, EdTech Bach Khoa – Term 3 (2023 - 2024)", issuer: "Faculty of Education & FED Youth Union, HUST", year: "05/2024" },
        { id: "01", type: "certificate", title: "Business Analyst Practitioner Course", issuer: "Certificate of Participation from UdeCareer", year: "05/2024" },
        { id: "06", type: "certificate", cv: true, title: "FOSSASIA Summit 2024 Ambassador", issuer: "Certificate of Appreciation, FOSSASIA Summit (April 8 - 10, 2024)", year: "04/2024" },
        { id: "25", type: "certificate", cv: true, title: "Global Project-Based Learning Program in Japan", issuer: "Shibaura Institute of Technology – Innovative Global Program (Feb 25 - Mar 5, 2024)", year: "03/2024" },
        { id: "17", type: "certificate", title: "“Chap Canh STEM De Xu Phinh” project", issuer: "De Xu Phinh Ethnic Boarding Primary & Secondary School, School of Engineering Pedagogy – HUST, CC Foundation", year: "12/2023" },
        { id: "26", type: "certificate", title: "Completion of the Party awareness training course", issuer: "Party Committee of Hanoi Universities and Colleges", year: "11/2023" },
        { id: "18", type: "certificate", title: "“Chap Canh Lai Chau STEM & E-Learning” scheme", issuer: "Lai Chau City Department of Education, School of Engineering Pedagogy – HUST, CC Foundation", year: "09/2023" },
        { id: "23", type: "certificate", title: "Global Project-Based Learning on Internet of Things", issuer: "HUST, Phenikaa University & Shibaura Institute of Technology (September 7 - 15, 2023)", year: "09/2023" },
        { id: "20", type: "certificate", title: "“Chap Canh Bo Trach STEM & E-Learning” project", issuer: "Bo Trach District Department of Education, School of Engineering Pedagogy – HUST, CC Foundation", year: "07/2023" },
        { id: "07", type: "certificate", title: "Participant, 40th Student Research Conference (Research ID ED.05)", issuer: "Hanoi University of Science and Technology", year: "06/2023" }
    ],
    zh: [
        // 奖项
        { id: "27", type: "award", cv: true, title: "第九届未来设计全球大赛 (GCD4F) 高等教育赛道金奖", issuer: "东南亚区域决赛（马来西亚）· Gendemy 团队（北京师范大学、联合国教科文组织教育信息技术研究所、马来西亚开放大学）", year: "07/2026" },
        { id: "04", type: "award", cv: true, title: "校级学生科研三等奖", issuer: "河内理工大学校长奖状", year: "2024 - 2025" },
        { id: "05", type: "award", cv: true, title: "校级学生科研海报奖", issuer: "河内理工大学校长奖状", year: "2024 - 2025" },
        { id: "09", type: "award", cv: true, title: "BK.VIDEAS 2022 - 2023 线上评选二等奖", issuer: "河内理工大学（管理、师范、外语及政治理论类）", year: "06/2023" },
        { id: "08", type: "award", cv: true, title: "第40届学生科研会议 教育科学与技术分会三等奖", issuer: "河内理工大学技术师范学院", year: "06/2023" },

        // 奖状
        { id: "02", type: "merit", cv: true, title: "为大学活动作出积极贡献奖状", issuer: "河内理工大学校长", year: "2023 - 2024" },
        { id: "15", type: "merit", cv: true, title: "学习成绩良好并积极参与共青团与学生会工作奖状", issuer: "河内理工大学校长", year: "2022 - 2023" },
        { id: "10", type: "merit", title: "出色完成共青团与学生会工作及学生运动奖状", issuer: "教育科学与技术学院院长", year: "2023 - 2024" },
        { id: "11", type: "merit", title: "出色完成共青团工作及学生运动奖状", issuer: "教育科学与技术学院团总支", year: "2023 - 2024" },
        { id: "24", type: "merit", title: "出色完成共青团与学生会工作及学生运动奖状", issuer: "技术师范学院院长", year: "2022 - 2023" },
        { id: "03", type: "merit", title: "共青团工作及青年学生运动优秀奖状", issuer: "河内理工大学胡志明共青团执委会", year: "2021 - 2022" },

        // 证书
        { id: "16", type: "certificate", title: "“Chap Canh Bich Hao：人工智能在教学中的应用”项目授课", issuer: "义安省 Bich Hao 社人民委员会、河内理工大学教育科学与技术学院、CC Foundation 基金会", year: "08/2026" },
        { id: "22", type: "certificate", title: "ICEF 2025 国际会议感谢证书", issuer: "教育科学与外语教学国际会议，下龙（2025年10月23日 - 25日）", year: "10/2025" },
        { id: "14", type: "certificate", title: "第42届学生科研会议参会证书（课题编号 S7.03-O-03）", issuer: "河内理工大学", year: "06/2025" },
        { id: "13", type: "certificate", title: "第42届学生科研会议参会证书（课题编号 S7.03-P-20）", issuer: "河内理工大学", year: "06/2025" },
        { id: "21", type: "certificate", title: "“Chap Canh Hoang Su Phi：STEM 课程设计与人工智能教学应用”项目", issuer: "河江省黄树皮县教育培训处、河内理工大学教育科学与技术学院、CC Foundation 基金会", year: "04/2025" },
        { id: "19", type: "certificate", title: "“Chap Canh Lai Chau 2：信息技术与人工智能在教学和管理中的应用”项目", issuer: "莱州市教育培训处、河内理工大学教育科学与技术学院、CC Foundation 基金会", year: "12/2024" },
        { id: "12", type: "certificate", title: "EdTech Bach Khoa 第三届管理委员会成员（2023 - 2024）", issuer: "河内理工大学教育学院及学院团委", year: "05/2024" },
        { id: "01", type: "certificate", title: "Business Analyst Practitioner 课程结业", issuer: "UdeCareer 证书", year: "05/2024" },
        { id: "06", type: "certificate", cv: true, title: "FOSSASIA 峰会 2024 大使", issuer: "FOSSASIA 峰会感谢证书 (2024年4月8日 - 10日)", year: "04/2024" },
        { id: "25", type: "certificate", cv: true, title: "日本 Global Project-Based Learning 项目结业", issuer: "芝浦工业大学 Innovative Global Program（2024年2月25日 - 3月5日）", year: "03/2024" },
        { id: "17", type: "certificate", title: "“Chap Canh STEM De Xu Phinh”项目", issuer: "De Xu Phinh 民族寄宿中小学、河内理工大学技术师范学院、CC Foundation 基金会", year: "12/2023" },
        { id: "26", type: "certificate", title: "党的认识培训课程结业", issuer: "河内大学及高校党委", year: "11/2023" },
        { id: "18", type: "certificate", title: "“Chap Canh Lai Chau STEM & E-Learning”计划", issuer: "莱州市教育处、河内理工大学技术师范学院、CC Foundation 基金会", year: "09/2023" },
        { id: "23", type: "certificate", title: "Global Project-Based Learning on Internet of Things 项目结业", issuer: "河内理工大学、Phenikaa 大学、芝浦工业大学（2023年9月7日 - 15日）", year: "09/2023" },
        { id: "20", type: "certificate", title: "“Chap Canh Bo Trach STEM & E-Learning”项目", issuer: "布泽县教育处、河内理工大学技术师范学院、CC Foundation 基金会", year: "07/2023" },
        { id: "07", type: "certificate", title: "第40届学生科研会议参会证书（课题编号 ED.05）", issuer: "河内理工大学", year: "06/2023" }
    ]
};
