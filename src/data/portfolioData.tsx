import React from 'react';
import { Globe, Tv, Gamepad, Laptop, Smartphone, GraduationCap } from 'lucide-react';

export const TikTok = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

// Map Icon cho các Project theo Category
export const PROJECT_ICONS: Record<string, React.ReactNode> = {
    'gendemy': <Globe className="w-6 h-6" />,
    'tv': <Tv className="w-6 h-6" />,
    'game': <Gamepad className="w-6 h-6" />,
    'elearning': <Laptop className="w-6 h-6" />,
    'social': <Smartphone className="w-6 h-6" />,
    'training': <GraduationCap className="w-6 h-6" />
};

// Mảng lưu trữ logo cho phần Kinh nghiệm (Experience)
export const EXPERIENCE_LOGOS: string[] = [
    "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/177993414_4822253704458434_8505515620250398149_n.png?_nc_cat=1&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFBimnZ6rFnJKHMK-mS6zBIfAyCf3RYpeF8DIJ_dFil4dKW6uMmHJ9s5BDMAX6U9FkMCvUAyGAt5f9a8KwzSo5g&_nc_ohc=nyGhWHN4qWUQ7kNvwGhyeQ1&_nc_oc=Adk0TbpWQKALx9Mp3zaFld_EygR0XcK5L43PuMuZMg1ora91SCT_5YdOCNBn3XxFyN0OTFcMD1OBMa-vtlVp_7Yg&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=iZGBhhWOIFpXE2BVV9RcXg&oh=00_AftCV37zVBs_Ph0bP29hJozVZUMdR240ZlQ6zJAYROeGsg&oe=69A1FFE8",
    "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/415289234_866098218639786_6531273959080041931_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGsbcrSzuqyzMUR5V9aa96FlRzQ-z1J0iOVHND7PUnSIxhIdh04Sj5ttGpGEtIaaczUyqGbVU4-br2rkbqNsGCe&_nc_ohc=C2UN28P0k1sQ7kNvwGvHBr_&_nc_oc=AdnfUZekVuJfJYJRiFMYNxeNiKDBA-0DGpZakNVAWucTpjoJG2K4NDJ_qcmBMWVfMp8TVsNEJ8Hrm_1-9lzUfoL7&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=I5ERVkl9kQ7_-qNf1v3_sA&oh=00_Aft02twsF3rHWtjYnhinVBzsyo2C8k02avmT_gnr0eAAKw&oe=69A1F733",
    "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/307171265_554790069985526_7831474949129101442_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFf45BPjJBrMfFWpWmJRa4PEwaHdc4-9AUTBod1zj70BTLRC7RSaeiMEJ2e_0gNuDdwnzo3l_Tany9EPVOcjt4d&_nc_ohc=6C6srQHdTt0Q7kNvwEGELKE&_nc_oc=AdmtvzCioFZHzNhnqVlc7IMnbojnuFS-Ol4_lR7fid2UbLNoz2iSZHiIu7bOeSH9aE7vxVShrO_bmvbhBAaHB3kB&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=gYTPDSogTUPXUN0GW1Cq3Q&oh=00_AfsIM0pJlekfIJp9mWcT6NYhX5kl_ypOsL9rqUbclJbBXg&oe=69A1E551",
    "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/284509137_419198283544036_4464288199319105306_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGNhQRIBbarBZMgtqwK6KXfEC7X8W8HcaYQLtfxbwdxplRhIy-Yjw3zmbRKKFGiEDvcNhOP-5YjFuok3m2XXHb1&_nc_ohc=Dhn9rbHnZ_UQ7kNvwG25mrC&_nc_oc=AdnVmpUCVykboTk-D_vmFqce5DjVDjf14Z2rW7E4ueZ2r3yirXOUZzXYg9_btn20RYdyfdAaUdvgbus7-5xdrjdZ&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=LwLR7y5FUc9Ns4zhaX8O4A&oh=00_Afvb1gWenDK-Psy89OAPQqW92ExytVBRzQw2UW06QeTSxg&oe=69A1F3FC",
    "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/481662396_652786163926782_5639776897056290320_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFGLpR_wfP8oUeEdnI02za-QXuNSUhM0rdBe41JSEzStw2xhI7yrH9Q_7lQ8C0ockkTsnqoAA-O341-r_kq5AGS&_nc_ohc=HJgmDoHoPeIQ7kNvwEtLNtJ&_nc_oc=AdnOP_ciRo_gIaCLppeJli39l2wIUC_I776mK_HMD1uNlTlOr-Q6B3BIrnCQw5r1kXrVIfiwurvSQYZyLWKlYMzM&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=ZeyOx1_fZ2Hg768Q7a8JNQ&oh=00_AfuOhuTyeWbyf98XESoLVnmST2KA7n6yMqg2U35nX09AxQ&oe=69A20593",
    "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/462492998_122113565006528291_4284159198265856373_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEvTcyszgodCK-AZViDi2PvFU2DsR80M3YVTYOxHzQzdqAA4Jk7B36a9_A1zo1KyMTPcTMEIHWLp2qi6UepEUvM&_nc_ohc=3hW4nAyKyM4Q7kNvwEfdj-9&_nc_oc=AdnufaPf343v9J5nvGNJrl5gj9JC4yapFG9ZmBghVTsIhUu68uu8Pr1DR2NJ2l3wutlaKZ96LCrwUF-qzaAkm7hL&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=8FQvsdaQ3eEcdtS5SqkfLQ&oh=00_Afs7q6EfcNpsLlzCSGVGUNY-qSDG6gYkErDIl7-bVV12pQ&oe=69A2102E",
    "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/633549741_1541405197990249_1839704605910530912_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFFthg8EjHU2bGGLvESPo6MxjuVbuyR1-bGO5Vu7JHX5rvw2kFTLRkY0yQOOqWj1_FKOgPHBw1XTdmt_829si1d&_nc_ohc=Dz_51ak0ggoQ7kNvwE4zAKa&_nc_oc=Adk3TxOEnYWmmNVkmnWqbhSkHhA79CNoDxKj_U3HR4uKKpbzNKxn96gITyATRGQHFTcJt9MHR0IWDmfX8cZD3uWn&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=opK_m8SuAxIURLRLH62fCA&oh=00_Afv7H8lL6UFH_6JYvdfHS_4v11_SCgY6y4yBTs81C5nHVg&oe=69A20692",
    "https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/60356226_2153560588268646_3897352203127488512_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHymMrFmO9fLhOoK-ZkNXiOLCucmgRNqSMsK5yaBE2pI_SRdwkX5BB8Yfz-WSkYVD4ctIVjYHtT_xqlZ_nSLesd&_nc_ohc=44kzUr57ZjwQ7kNvwHN5Ij-&_nc_oc=Adnp_YoNHtgBKO0VdQatnwH_g05sfXwebnALlr53Yp-m0YFezgtcjji72z7aWGHaNM4eUd8Cp0m2wvhxCkDYKq1B&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=43wU5mv2gA1KXfwMFV5ctg&oh=00_Afum3mHznkIUE2Mid_sk3aqmLJH7igGca3ERhVY2atFZDA&oe=69C3A375"
];

// Mảng lưu trữ liên kết cho phần Kinh nghiệm (Experience)
export const EXPERIENCE_LINKS: string[] = [
    "https://www.facebook.com/profile.php?id=100064582395910",
    "https://www.facebook.com/ccprhust",
    "https://www.facebook.com/hocvienviettel",
    "https://www.facebook.com/shibaura",
    "https://www.facebook.com/edtech.hust",
    "https://www.facebook.com/cdt.hust.edu.vn",
    "https://www.facebook.com/KhoaKH.CNGD",
    "https://www.facebook.com/ngoinhatritue1"
];