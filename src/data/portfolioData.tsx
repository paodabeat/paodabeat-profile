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
    "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Paodabeat/logo/vtv3.png",
    "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Paodabeat/logo/ccdk.png",
    "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Paodabeat/logo/vtac.png",
    "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Paodabeat/logo/sit.png",
    "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Paodabeat/logo/etc.png",
    "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Paodabeat/logo/cdt.png",
    "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Paodabeat/logo/fed.png",
    "https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Paodabeat/logo/nntt.png"
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