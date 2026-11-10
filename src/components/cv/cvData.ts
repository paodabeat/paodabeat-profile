import { useTranslation } from 'react-i18next';

// Dữ liệu dùng chung cho mọi mẫu CV. Tất cả đều lấy từ i18n nên CV luôn khớp với trang Portfolio.

export interface CvExperience {
    key: string;
    year: string;
    company: string;
    role: string;
    description: string;
}

export interface CvAchievement {
    title: string;
    issuer?: string;
    year: string;
    cv?: boolean;
}

export interface CvResearch {
    title: string;
    journal: string;
    url?: string;
}

export interface CvSkillGroup {
    title: string;
    items: string[];
}

// Thông tin liên hệ cố định, không phụ thuộc ngôn ngữ
export const CV_CONTACT = {
    phone: "+84 327842261",
    email: "giabao.hust@gmail.com",
    website: "paodabeat-profile.vercel.app",
    websiteUrl: "https://paodabeat-profile.vercel.app/"
};

// "2026 - nay" / "2026 - Present" / "2026 - 至今" -> "2026".
// Mốc thời gian đang tiếp diễn trên CV chỉ ghi năm bắt đầu cho gọn; khoảng đã kết thúc ("2023 - 2026") giữ nguyên.
export const formatCvYear = (year: string) =>
    year.replace(/\s*[-–—]\s*(nay|now|present|hi[eệ]n t[aạ]i|至今|现在|現在)\s*$/i, '').trim();

export function useCvData() {
    const { t } = useTranslation();

    const experiences = ((t('experience.list', { returnObjects: true }) as CvExperience[]) || [])
        .map((exp) => ({ ...exp, year: formatCvYear(exp.year) }));

    const achievements = ((t('academic.achievements.list', { returnObjects: true }) as CvAchievement[]) || [])
        .filter((item) => item.cv);

    const research = (t('academic.research.list', { returnObjects: true }) as CvResearch[]) || [];
    const skills = (t('skills.list', { returnObjects: true }) as CvSkillGroup[]) || [];

    return { experiences, achievements, research, skills };
}
