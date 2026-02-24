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
            {
                id: 101, category: "gendemy", title: "Hệ sinh thái học tập số Gendemy",
                type: "website", url: "https://www.gendemyedu.com/",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/gendemy.png",
                description: "Hệ sinh thái giáo dục số toàn diện nhằm mục tiêu phát triển năng lực học tập tự định hướng cho người học."
            },

            // TV & Events (Dạng Poster Gallery)
            {
                id: 201, category: "tv", title: "12 Con Giáp 2024",
                type: "pdf", url: "",
                image: "https://cdn-images.vtv.vn/562122370168008704/2024/2/11/poster-1707648689188656725692.jpg",
                description: "Chương trình giải trí Tết Nguyên Đán Giáp Thìn đặc biệt trên VTV."
            },
            {
                id: 202, category: "tv", title: "12 Con Giáp 2025",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/486854527_1074077004755036_856707956005061699_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEKG8ynaBsmhvyyh-t-azMTeHaI75izomJ4dojvmLOiYsC75Ae2ownNkfBwvI75n974o5xz6i8Y-ZUfik4vmk6_&_nc_ohc=10ssFeCUNawQ7kNvwE2glQ3&_nc_oc=AdmppYDAf4KlWpKYkJ_UumVjhk64TPsPWMsMMuXDnzBv3PjVX-asBhzHS4NysRHB1h4P2PBodctkCr4-asy18uvD&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=ZMZW9GJQUMGaqKQ5aYZIAw&oh=00_AfvmAL8W1k2QCi5nPs8OxSiPHdEOFZY4mEYZzxiTeJ86nA&oe=69A27D33",
                description: "Chương trình giải trí Tết Nguyên Đán Ất Tỵ đặc biệt trên VTV."
            },
            {
                id: 203, category: "tv", title: "12 Con Giáp 2026",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/638200423_1341248158037918_7253331000717129550_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHOGEdkPfy3wsyQlnCFDArhJHvzwNlTx-wke_PA2VPH7CA-eJEDAw69NNi7jmbXXcJRHdq1ewR7WNahnIDypewM&_nc_ohc=8h1YUSt_qkcQ7kNvwEsutAJ&_nc_oc=AdkZAplGTL07ZHbol2mVjKxZMaBfQzoo6EbwHBWGxipvZ4UHRSpw-aQHFkG3thZ5W3BGlikEgGxtyDCYH-OBn6qC&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=S8QRDptgF1O6ocA0VGDZmA&oh=00_Afu7_A0ftPCo-DBbQERh5-azqO__-IUE4h57eA_Sk0PlQg&oe=69A26904",
                description: "Chương trình giải trí Tết Nguyên Đán Bính Ngọ đặc biệt trên VTV."
            },
            {
                id: 204, category: "tv", title: "Sinh viên thế hệ mới 2023",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/481683300_1056088759887194_6235910746360311038_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF_Puxkw3AU_FX-MC3OX-ekK2Akq1kj9B4rYCSrWSP0HjtYSvDqtAaxODpymboqFKd94mUw9bIiGGeBv_AC7Wkd&_nc_ohc=_ohOa77zfAkQ7kNvwEDJuti&_nc_oc=AdnIn-c_y3-U28lkq5BWc24wR6lb6hxEuDyXrEnEvAmwv20c49t5-nnurkh2K2KKFJpAY-XJS8GFwuI8CTjrNvTn&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=yIhIhEBIwBPmVAvFdHr4RQ&oh=00_AfuyHfumhi9eO_xbPlaSvfN_wh2zAU0flH4foj2KXseSoA&oe=69A28287",
                description: "Gameshow thực tế dành cho sinh viên các trường Đại học toàn quốc."
            },
            {
                id: 205, category: "tv", title: "Quán quen chính gốc",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/486311742_1068218928674177_5831662282687836579_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH1lmkRB33ZLiLp4-qPHVmyLXVIJUVMmtctdUglRUya16qRK7I6U3awoi_h-CjEtDW7QagfWlnF-JOqCB3B7Wy6&_nc_ohc=lR_PB8iufHcQ7kNvwHdViAL&_nc_oc=AdkppYPOTwOjqijvyoGegK5QPmzpAe_nYQXTYrqGs6cCdiGUPJjMfOQHG6hbWZK0KpuL-0_mVGYMbCohkOMKsGAs&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=_19N67vPkVoGfT0yBJlrmg&oh=00_AfvLwvYoDaCxNykBPiGv0EM509e715oBFNXTnoKQe_ydkA&oe=69A25BC8",
                description: "Chương trình khám phá ẩm thực và văn hóa địa phương."
            },
            {
                id: 206, category: "tv", title: "Dưới lá cờ quyết thắng",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/486119595_1079802994167053_3500895224808215024_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF6VVxc0wX7_1Cvp4Cew4db-mQ_pBFymkr6ZD-kEXKaSmU2H-s2l0rI8zS9dIS9xeewFDeCmUEj6Dy5tIYWx8sz&_nc_ohc=Fqz_C9ZkSgUQ7kNvwHuSbBw&_nc_oc=Adl2GF8hgLjQv3WYH7OLnBD8_Uinm47lWdA-rfj1Qa7g7VDBoYVHzt-QTcVwnGrZ6anZaNRpIUOw-dCfMQg5X_Wv&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=drEpXA7sikkhtNOKz07_lA&oh=00_Afu6l6InbvlKyzRndDiwOow3Uq6nXFeCDFohOgBztp4H2Q&oe=69A27781",
                description: "Chương trình kỷ niệm 70 năm chiến thắng điện biên phủ."
            },
            {
                id: 207, category: "tv", title: "Vũ trụ đồng tiền",
                type: "pdf", url: "", image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/589386857_731054210036775_4700850098539129572_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEpMlxRSd9raq63E-h-HL8Eh5TWxQmDkfeHlNbFCYOR96fYxWl98ZBzppPNiyiUpgVNWFi10X8HjCGRx7s4s6xH&_nc_ohc=8ff1h4YFRrQQ7kNvwFcry86&_nc_oc=AdmLv3MHPAkRX2lho5ymp6X4z57TYQroCA52ZlXvjTg9upArMc93n3ShAD3ngF2-3VekIJ2SPtXC_oOlkZMgJGeg&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=UYDPW31Ia5pl1WmS4YClIw&oh=00_AfsBPjzGu3EjSUimnXhGmmCn1PevaALsi6uIGKeyVfBeeA&oe=69A28937",
                description: "The Moneyverse - Chương trình giáo dục tài chính cho giới trẻ."
            },
            {
                id: 208, category: "tv", title: "Vang mãi khúc khải hoàn",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/492308426_122163295304352085_5924212382754739483_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFy7HqjPKpkOGu9rLrcdYnro4SHkgn0LgyjhIeSCfQuDHroD0gyA_gXQaRK5suMs4ysSC2FmnR7cRvb738FQlaU&_nc_ohc=fx1vNUdkOhoQ7kNvwGcLbJS&_nc_oc=Adlidnl96hmuQ1F6m_DSyA52T2ecBtOWeBBd37GdZCzSkbrkZAa7caKZCkAh_Y7U1Vt5KROZoZPQD8H7joTgksn8&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=ltZ6ZFw7YxCMByM9utU6Gg&oh=00_Afsqmcr-OpP2xILuEaS7zxUgDOPIKk45TC7wMV_mQGdOUA&oe=69A2652B",
                description: "Chương trình nghệ thuật kỷ niệm 50 năm giải phóng miền Nam - thống nhất đất nước."
            },
            {
                id: 209, category: "tv", title: "Đường lên đỉnh Olympia",
                type: "pdf", url: "https://drive.google.com/file/d/1oT9NasKDULGbSsf3_Sb9CboDP-flC5KQ/view?usp=sharing",
                image: "https://cdn.tienphong.vn/images/3bcb5324177179b7fadb52080c025bb7363dd804e96942fcec4c6014ca92b3d607174fb7ee2d525eda0cb9fda0c94155/olympia-25.jpg",
                description: "Chương trình truyền hình trí tuệ dành cho học sinh THPT."
            },
            {
                id: 210, category: "tv", title: "VTV Awards 2025",
                type: "pdf", url: "",
                image: "https://cdn-images.vtv.vn/66349b6076cb4dee98746cf1/2024/12/30/package-media-61890120700971492521428.png",
                description: "Lễ trao giải thưởng truyền hình thường niên của VTV."
            },
            {
                id: 211, category: "tv", title: "Mùa hè lấp lánh",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/502592788_1119507306882669_4007871204689701854_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEJOu1l5hpx99QJ066DC3ycoAFN27xi2ZygAU3bvGLZnK8FRGElssL217w1VuSs9bIKXZcweiVdDNbJEowTO06D&_nc_ohc=m2nzWOGLHRYQ7kNvwGTjfcY&_nc_oc=AdlRBEPoCvSTsdWktxOqhG9QbpkQOM7JL7MyXm1wceZJB8DzPBwv6kWAkuiyYrCie4LcIgvqkKZI3gIhtESxUqgQ&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=LvoiAGZbRTlKMa1LE7296w&oh=00_AfvOkd_IhgLCG4EQ_9WjeZZ32FysWPfhvql27yERppXEIw&oe=69A272A6",
                description: "Chương trình ca nhạc thiếu nhi nhân ngày lễ Quốc tế Thiếu nhi"
            },
            {
                id: 212, category: "tv", title: "Ngày hội văn hoá",
                type: "pdf", url: "",
                image: "https://i.ytimg.com/vi/JKkhyYz2nLs/maxresdefault.jpg",
                description: "Chương trình kỷ niệm đánh dấu hành trình 32 năm tiên phong, đổi mới và đồng hành cùng sự phát triển của đất nước.."
            },
            {
                id: 213, category: "tv", title: "Hoà nhạc Ánh sáng",
                type: "pdf", url: "",
                image: "https://tayho360.vn/upload/admin/files/6775ff069985b%20(1).jpg",
                description: "Chương trình văn hoá nghệ thuật âm thanh - ánh sáng Chào năm mới 2025"
            },
            {
                id: 214, category: "tv", title: "Thời cơ vàng",
                type: "pdf", url: "",
                image: "https://hnm.1cdn.vn/2025/08/18/f65a255838/poster-tinh.png",
                description: "Chương trình kỷ niệm ngày Quốc khánh Việt Nam"
            },
            {
                id: 215, category: "tv", title: "Điều nhỏ bé kỳ diệu",
                type: "pdf", url: "",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/vtv/dieunhobekydieu-poster.png",
                description: "'Điều nhỏ bé kỳ diệu' trên VTV3 là một chương trình truyền hình mang tính chất suy ngẫm, lan tỏa những giá trị nhân văn và sưởi ấm tâm hồn giữa nhịp sống hiện đại."
            },


            // Game
            {
                id: 301, category: "game", title: "Starseed",
                type: "game", url: "https://gd.games/instant-builds/e8714d2a-3f8f-4d8d-91e7-f9c7e5548aba",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/starseed.png",
                description: "Trò chơi giáo dục tương tác được thiết kế và phát triển trên nền tảng GDevelop."
            },
            {
                id: 302, category: "game", title: "Danny's Day",
                type: "game", url: "https://games.gdevelop-app.com/game-bbb4de63-0786-4da9-bb55-4d54425c392b/index.html",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/danny'sday.png",
                description: "Game học thuật phiêu lưu, giải quyết tình huống tương tác thực tế."
            },
            {
                id: 303, category: "game", title: "The Escape Game",
                type: "game", url: "https://games.gdevelop-app.com/game-be5ed1b7-1e8b-4467-bfdb-e01f9ab4f315/index.html",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/theescape.png",
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

            // Training
            {
                id: 601, category: "training", title: "AI Animation in Education",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/train1/600/400",
                description: "Chương trình đào tạo ứng dụng AI tạo hiệu ứng hoạt hình cho giáo viên."
            }
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
            {
                id: 101, category: "gendemy", title: "Gendemy Ecosystem",
                type: "website", url: "https://www.gendemyedu.com/",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/gendemy.png",
                description: "A comprehensive digital education ecosystem aimed at developing self-directed learning skills."
            },

            {
                id: 201, category: "tv", title: "12 Zodiacs 2024",
                type: "pdf", url: "",
                image: "https://cdn-images.vtv.vn/562122370168008704/2024/2/11/poster-1707648689188656725692.jpg",
                description: "Special Lunar New Year entertainment show on VTV."
            },
            {
                id: 202, category: "tv", title: "12 Zodiacs 2025",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/486854527_1074077004755036_856707956005061699_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEKG8ynaBsmhvyyh-t-azMTeHaI75izomJ4dojvmLOiYsC75Ae2ownNkfBwvI75n974o5xz6i8Y-ZUfik4vmk6_&_nc_ohc=10ssFeCUNawQ7kNvwE2glQ3&_nc_oc=AdmppYDAf4KlWpKYkJ_UumVjhk64TPsPWMsMMuXDnzBv3PjVX-asBhzHS4NysRHB1h4P2PBodctkCr4-asy18uvD&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=ZMZW9GJQUMGaqKQ5aYZIAw&oh=00_AfvmAL8W1k2QCi5nPs8OxSiPHdEOFZY4mEYZzxiTeJ86nA&oe=69A27D33",
                description: "Special Lunar New Year entertainment show on VTV."
            },
            {
                id: 203, category: "tv", title: "12 Zodiacs 2026",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/638200423_1341248158037918_7253331000717129550_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHOGEdkPfy3wsyQlnCFDArhJHvzwNlTx-wke_PA2VPH7CA-eJEDAw69NNi7jmbXXcJRHdq1ewR7WNahnIDypewM&_nc_ohc=8h1YUSt_qkcQ7kNvwEsutAJ&_nc_oc=AdkZAplGTL07ZHbol2mVjKxZMaBfQzoo6EbwHBWGxipvZ4UHRSpw-aQHFkG3thZ5W3BGlikEgGxtyDCYH-OBn6qC&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=S8QRDptgF1O6ocA0VGDZmA&oh=00_Afu7_A0ftPCo-DBbQERh5-azqO__-IUE4h57eA_Sk0PlQg&oe=69A26904",
                description: "Special Lunar New Year entertainment show on VTV."
            },
            {
                id: 204, category: "tv", title: "New Generation Students 2023",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/481683300_1056088759887194_6235910746360311038_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF_Puxkw3AU_FX-MC3OX-ekK2Akq1kj9B4rYCSrWSP0HjtYSvDqtAaxODpymboqFKd94mUw9bIiGGeBv_AC7Wkd&_nc_ohc=_ohOa77zfAkQ7kNvwEDJuti&_nc_oc=AdnIn-c_y3-U28lkq5BWc24wR6lb6hxEuDyXrEnEvAmwv20c49t5-nnurkh2K2KKFJpAY-XJS8GFwuI8CTjrNvTn&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=yIhIhEBIwBPmVAvFdHr4RQ&oh=00_AfuyHfumhi9eO_xbPlaSvfN_wh2zAU0flH4foj2KXseSoA&oe=69A28287",
                description: "Reality gameshow for university students nationwide."
            },
            {
                id: 205, category: "tv", title: "Authentic Local Eateries",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/486311742_1068218928674177_5831662282687836579_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH1lmkRB33ZLiLp4-qPHVmyLXVIJUVMmtctdUglRUya16qRK7I6U3awoi_h-CjEtDW7QagfWlnF-JOqCB3B7Wy6&_nc_ohc=lR_PB8iufHcQ7kNvwHdViAL&_nc_oc=AdkppYPOTwOjqijvyoGegK5QPmzpAe_nYQXTYrqGs6cCdiGUPJjMfOQHG6hbWZK0KpuL-0_mVGYMbCohkOMKsGAs&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=_19N67vPkVoGfT0yBJlrmg&oh=00_AfvLwvYoDaCxNykBPiGv0EM509e715oBFNXTnoKQe_ydkA&oe=69A25BC8",
                description: "Program exploring local cuisine and culture."
            },
            {
                id: 206, category: "tv", title: "Under the Winning Flag",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/486119595_1079802994167053_3500895224808215024_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF6VVxc0wX7_1Cvp4Cew4db-mQ_pBFymkr6ZD-kEXKaSmU2H-s2l0rI8zS9dIS9xeewFDeCmUEj6Dy5tIYWx8sz&_nc_ohc=Fqz_C9ZkSgUQ7kNvwHuSbBw&_nc_oc=Adl2GF8hgLjQv3WYH7OLnBD8_Uinm47lWdA-rfj1Qa7g7VDBoYVHzt-QTcVwnGrZ6anZaNRpIUOw-dCfMQg5X_Wv&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=drEpXA7sikkhtNOKz07_lA&oh=00_Afu6l6InbvlKyzRndDiwOow3Uq6nXFeCDFohOgBztp4H2Q&oe=69A27781",
                description: "Program celebrating the 70th anniversary of the Dien Bien Phu victory."
            },
            {
                id: 207, category: "tv", title: "The Moneyverse",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/589386857_731054210036775_4700850098539129572_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEpMlxRSd9raq63E-h-HL8Eh5TWxQmDkfeHlNbFCYOR96fYxWl98ZBzppPNiyiUpgVNWFi10X8HjCGRx7s4s6xH&_nc_ohc=8ff1h4YFRrQQ7kNvwFcry86&_nc_oc=AdmLv3MHPAkRX2lho5ymp6X4z57TYQroCA52ZlXvjTg9upArMc93n3ShAD3ngF2-3VekIJ2SPtXC_oOlkZMgJGeg&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=UYDPW31Ia5pl1WmS4YClIw&oh=00_AfsBPjzGu3EjSUimnXhGmmCn1PevaALsi6uIGKeyVfBeeA&oe=69A28937",
                description: "Financial education program for young people."
            },
            {
                id: 208, category: "tv", title: "Echoing the Victory Song",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/492308426_122163295304352085_5924212382754739483_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFy7HqjPKpkOGu9rLrcdYnro4SHkgn0LgyjhIeSCfQuDHroD0gyA_gXQaRK5suMs4ysSC2FmnR7cRvb738FQlaU&_nc_ohc=fx1vNUdkOhoQ7kNvwGcLbJS&_nc_oc=Adlidnl96hmuQ1F6m_DSyA52T2ecBtOWeBBd37GdZCzSkbrkZAa7caKZCkAh_Y7U1Vt5KROZoZPQD8H7joTgksn8&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=ltZ6ZFw7YxCMByM9utU6Gg&oh=00_Afsqmcr-OpP2xILuEaS7zxUgDOPIKk45TC7wMV_mQGdOUA&oe=69A2652B",
                description: "Art program celebrating the 50th anniversary of the liberation of the South and national reunification."
            },
            {
                id: 209, category: "tv", title: "Road to Mt. Olympia",
                type: "pdf", url: "https://drive.google.com/file/d/1oT9NasKDULGbSsf3_Sb9CboDP-flC5KQ/view?usp=sharing",
                image: "https://cdn.tienphong.vn/images/3bcb5324177179b7fadb52080c025bb7363dd804e96942fcec4c6014ca92b3d607174fb7ee2d525eda0cb9fda0c94155/olympia-25.jpg",
                description: "Intellectual television program for high school students."
            },
            {
                id: 210, category: "tv", title: "VTV Awards 2025",
                type: "pdf", url: "",
                image: "https://cdn-images.vtv.vn/66349b6076cb4dee98746cf1/2024/12/30/package-media-61890120700971492521428.png",
                description: "Annual television awards ceremony of VTV."
            },
            {
                id: 211, category: "tv", title: "Sparkling Summer",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/502592788_1119507306882669_4007871204689701854_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEJOu1l5hpx99QJ066DC3ycoAFN27xi2ZygAU3bvGLZnK8FRGElssL217w1VuSs9bIKXZcweiVdDNbJEowTO06D&_nc_ohc=m2nzWOGLHRYQ7kNvwGTjfcY&_nc_oc=AdlRBEPoCvSTsdWktxOqhG9QbpkQOM7JL7MyXm1wceZJB8DzPBwv6kWAkuiyYrCie4LcIgvqkKZI3gIhtESxUqgQ&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=LvoiAGZbRTlKMa1LE7296w&oh=00_AfvOkd_IhgLCG4EQ_9WjeZZ32FysWPfhvql27yERppXEIw&oe=69A272A6",
                description: "Children's music program for International Children's Day."
            },
            {
                id: 212, category: "tv", title: "Cultural Festival",
                type: "pdf", url: "",
                image: "https://i.ytimg.com/vi/JKkhyYz2nLs/maxresdefault.jpg",
                description: "Program marking the 32-year journey of pioneering, innovation, and accompanying the country's development."
            },

            {
                id: 301, category: "game", title: "Starseed",
                type: "game", url: "https://gd.games/instant-builds/e8714d2a-3f8f-4d8d-91e7-f9c7e5548aba",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/starseed.png",
                description: "Interactive educational game developed on GDevelop platform."
            },
            {
                id: 302, category: "game", title: "Danny's Day",
                type: "game", url: "https://games.gdevelop-app.com/game-bbb4de63-0786-4da9-bb55-4d54425c392b/index.html",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/danny'sday.png",
                description: "Adventure academic game addressing real-life interactive scenarios."
            },
            {
                id: 303, category: "game", title: "The Escape Game",
                type: "game", url: "https://games.gdevelop-app.com/game-be5ed1b7-1e8b-4467-bfdb-e01f9ab4f315/index.html",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/theescape.png",
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

            {
                id: 601, category: "training", title: "AI Animation in Education",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/train1/600/400",
                description: "Training program on applying AI for educational animation tailored for teachers."
            }
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
            {
                id: 101, category: "gendemy", title: "Gendemy 数字教育生态系统",
                type: "website", url: "https://www.gendemyedu.com/",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/gendemy.png",
                description: "全面集成AI和电子学习的数字教育生态系统，旨在培养自主学习能力。"
            },

            {
                id: 201, category: "tv", title: "2024年12生肖",
                type: "pdf", url: "",
                image: "https://cdn-images.vtv.vn/562122370168008704/2024/2/11/poster-1707648689188656725692.jpg",
                description: "VTV 上的特别农历新年娱乐节目。"
            },
            {
                id: 202, category: "tv", title: "2025年12生肖",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/486854527_1074077004755036_856707956005061699_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEKG8ynaBsmhvyyh-t-azMTeHaI75izomJ4dojvmLOiYsC75Ae2ownNkfBwvI75n974o5xz6i8Y-ZUfik4vmk6_&_nc_ohc=10ssFeCUNawQ7kNvwE2glQ3&_nc_oc=AdmppYDAf4KlWpKYkJ_UumVjhk64TPsPWMsMMuXDnzBv3PjVX-asBhzHS4NysRHB1h4P2PBodctkCr4-asy18uvD&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=ZMZW9GJQUMGaqKQ5aYZIAw&oh=00_AfvmAL8W1k2QCi5nPs8OxSiPHdEOFZY4mEYZzxiTeJ86nA&oe=69A27D33",
                description: "VTV 上的特别农历新年娱乐节目。"
            },
            {
                id: 203, category: "tv", title: "2026年12生肖",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/638200423_1341248158037918_7253331000717129550_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHOGEdkPfy3wsyQlnCFDArhJHvzwNlTx-wke_PA2VPH7CA-eJEDAw69NNi7jmbXXcJRHdq1ewR7WNahnIDypewM&_nc_ohc=8h1YUSt_qkcQ7kNvwEsutAJ&_nc_oc=AdkZAplGTL07ZHbol2mVjKxZMaBfQzoo6EbwHBWGxipvZ4UHRSpw-aQHFkG3thZ5W3BGlikEgGxtyDCYH-OBn6qC&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=S8QRDptgF1O6ocA0VGDZmA&oh=00_Afu7_A0ftPCo-DBbQERh5-azqO__-IUE4h57eA_Sk0PlQg&oe=69A26904",
                description: "VTV 上的特别农历新年娱乐节目。"
            },
            {
                id: 204, category: "tv", title: "2023新一代学生",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/481683300_1056088759887194_6235910746360311038_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF_Puxkw3AU_FX-MC3OX-ekK2Akq1kj9B4rYCSrWSP0HjtYSvDqtAaxODpymboqFKd94mUw9bIiGGeBv_AC7Wkd&_nc_ohc=_ohOa77zfAkQ7kNvwEDJuti&_nc_oc=AdnIn-c_y3-U28lkq5BWc24wR6lb6hxEuDyXrEnEvAmwv20c49t5-nnurkh2K2KKFJpAY-XJS8GFwuI8CTjrNvTn&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=yIhIhEBIwBPmVAvFdHr4RQ&oh=00_AfuyHfumhi9eO_xbPlaSvfN_wh2zAU0flH4foj2KXseSoA&oe=69A28287",
                description: "面向全国大学生的真人秀游戏节目。"
            },
            {
                id: 205, category: "tv", title: "地道美食店",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/486311742_1068218928674177_5831662282687836579_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH1lmkRB33ZLiLp4-qPHVmyLXVIJUVMmtctdUglRUya16qRK7I6U3awoi_h-CjEtDW7QagfWlnF-JOqCB3B7Wy6&_nc_ohc=lR_PB8iufHcQ7kNvwHdViAL&_nc_oc=AdkppYPOTwOjqijvyoGegK5QPmzpAe_nYQXTYrqGs6cCdiGUPJjMfOQHG6hbWZK0KpuL-0_mVGYMbCohkOMKsGAs&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=_19N67vPkVoGfT0yBJlrmg&oh=00_AfvLwvYoDaCxNykBPiGv0EM509e715oBFNXTnoKQe_ydkA&oe=69A25BC8",
                description: "探索当地美食和文化的节目。"
            },
            {
                id: 206, category: "tv", title: "在决胜旗帜下",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/486119595_1079802994167053_3500895224808215024_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF6VVxc0wX7_1Cvp4Cew4db-mQ_pBFymkr6ZD-kEXKaSmU2H-s2l0rI8zS9dIS9xeewFDeCmUEj6Dy5tIYWx8sz&_nc_ohc=Fqz_C9ZkSgUQ7kNvwHuSbBw&_nc_oc=Adl2GF8hgLjQv3WYH7OLnBD8_Uinm47lWdA-rfj1Qa7g7VDBoYVHzt-QTcVwnGrZ6anZaNRpIUOw-dCfMQg5X_Wv&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=drEpXA7sikkhtNOKz07_lA&oh=00_Afu6l6InbvlKyzRndDiwOow3Uq6nXFeCDFohOgBztp4H2Q&oe=69A27781",
                description: "庆祝奠边府战役胜利70周年的节目。"
            },
            {
                id: 207, category: "tv", title: "The Moneyverse (金钱宇宙)",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/589386857_731054210036775_4700850098539129572_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEpMlxRSd9raq63E-h-HL8Eh5TWxQmDkfeHlNbFCYOR96fYxWl98ZBzppPNiyiUpgVNWFi10X8HjCGRx7s4s6xH&_nc_ohc=8ff1h4YFRrQQ7kNvwFcry86&_nc_oc=AdmLv3MHPAkRX2lho5ymp6X4z57TYQroCA52ZlXvjTg9upArMc93n3ShAD3ngF2-3VekIJ2SPtXC_oOlkZMgJGeg&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=UYDPW31Ia5pl1WmS4YClIw&oh=00_AfsBPjzGu3EjSUimnXhGmmCn1PevaALsi6uIGKeyVfBeeA&oe=69A28937",
                description: "面向年轻人的金融教育节目。"
            },
            {
                id: 208, category: "tv", title: "凯旋曲永驻",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/492308426_122163295304352085_5924212382754739483_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFy7HqjPKpkOGu9rLrcdYnro4SHkgn0LgyjhIeSCfQuDHroD0gyA_gXQaRK5suMs4ysSC2FmnR7cRvb738FQlaU&_nc_ohc=fx1vNUdkOhoQ7kNvwGcLbJS&_nc_oc=Adlidnl96hmuQ1F6m_DSyA52T2ecBtOWeBBd37GdZCzSkbrkZAa7caKZCkAh_Y7U1Vt5KROZoZPQD8H7joTgksn8&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=ltZ6ZFw7YxCMByM9utU6Gg&oh=00_Afsqmcr-OpP2xILuEaS7zxUgDOPIKk45TC7wMV_mQGdOUA&oe=69A2652B",
                description: "庆祝南方解放和国家统一50周年的艺术节目。"
            },
            {
                id: 209, category: "tv", title: "通往奥林匹亚峰之路",
                type: "pdf", url: "https://drive.google.com/file/d/1oT9NasKDULGbSsf3_Sb9CboDP-flC5KQ/view?usp=sharing",
                image: "https://cdn.tienphong.vn/images/3bcb5324177179b7fadb52080c025bb7363dd804e96942fcec4c6014ca92b3d607174fb7ee2d525eda0cb9fda0c94155/olympia-25.jpg",
                description: "面向高中生的益智电视节目。"
            },
            {
                id: 210, category: "tv", title: "2025年VTV Awards",
                type: "pdf", url: "",
                image: "https://cdn-images.vtv.vn/66349b6076cb4dee98746cf1/2024/12/30/package-media-61890120700971492521428.png",
                description: "VTV 的年度电视颁奖典礼。"
            },
            {
                id: 211, category: "tv", title: "闪耀的夏天",
                type: "pdf", url: "",
                image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/502592788_1119507306882669_4007871204689701854_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEJOu1l5hpx99QJ066DC3ycoAFN27xi2ZygAU3bvGLZnK8FRGElssL217w1VuSs9bIKXZcweiVdDNbJEowTO06D&_nc_ohc=m2nzWOGLHRYQ7kNvwGTjfcY&_nc_oc=AdlRBEPoCvSTsdWktxOqhG9QbpkQOM7JL7MyXm1wceZJB8DzPBwv6kWAkuiyYrCie4LcIgvqkKZI3gIhtESxUqgQ&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=LvoiAGZbRTlKMa1LE7296w&oh=00_AfvOkd_IhgLCG4EQ_9WjeZZ32FysWPfhvql27yERppXEIw&oe=69A272A6",
                description: "庆祝国际儿童节的儿童音乐节目。"
            },
            {
                id: 212, category: "tv", title: "文化节",
                type: "pdf", url: "",
                image: "https://i.ytimg.com/vi/JKkhyYz2nLs/maxresdefault.jpg",
                description: "纪念开拓、创新并伴随国家发展32周年历程的节目。"
            },

            {
                id: 301, category: "game", title: "Starseed",
                type: "game", url: "https://gd.games/instant-builds/e8714d2a-3f8f-4d8d-91e7-f9c7e5548aba",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/starseed.png",
                description: "在GDevelop平台上开发的互动教育游戏。"
            },
            {
                id: 302, category: "game", title: "Danny's Day",
                type: "game", url: "https://games.gdevelop-app.com/game-bbb4de63-0786-4da9-bb55-4d54425c392b/index.html",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/danny'sday.png",
                description: "解决现实生活中互动场景的冒险学术游戏。"
            },
            {
                id: 303, category: "game", title: "The Escape Game",
                type: "game", url: "https://games.gdevelop-app.com/game-be5ed1b7-1e8b-4467-bfdb-e01f9ab4f315/index.html",
                image: "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat-portfolio/theescape.png",
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

            {
                id: 601, category: "training", title: "教育中的 AI 动画",
                type: "updating", url: "",
                image: "https://picsum.photos/seed/train1/600/400",
                description: "针对教师应用AI制作教育动画特效的培训项目。"
            }
        ]
    }
};