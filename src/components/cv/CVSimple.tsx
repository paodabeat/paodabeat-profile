import React from 'react';
import { useTranslation } from 'react-i18next';

import avatarImage from '../../../assets/avatar.webp';
import { CV_CONTACT, useCvData } from './cvData';

// Mẫu CV "Đơn giản": một cột, chữ đen trên nền trắng, mỗi khối ngăn bằng một đường kẻ.
// Bố cục quen thuộc với nhà tuyển dụng và thân thiện với hệ thống lọc hồ sơ tự động (ATS).

// Tiêu đề khối: chữ in hoa, kẻ đậm phía dưới
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-[15px] font-bold tracking-[0.08em] uppercase text-cv-dark pb-1.5 mb-4 border-b-2 border-cv-dark">
        {children}
    </h2>
);

// Một dòng thông tin cá nhân ở đầu trang: nhãn in đậm + nội dung
const InfoRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex gap-2 items-baseline">
        <span className="font-bold text-cv-dark shrink-0">{label}</span>
        <span className="text-gray-700">{children}</span>
    </div>
);

// Dòng hai cột: mốc thời gian bên trái, nội dung bên phải
const TimelineRow = ({ period, children }: { period?: string; children: React.ReactNode }) => (
    <div className="flex gap-6 print:break-inside-avoid">
        <div className="w-26 shrink-0 text-[11.5px] tabular-nums text-gray-600 pt-0.5">{period}</div>
        <div className="grow">{children}</div>
    </div>
);

// Tách chuỗi mô tả "• ...\n• ..." thành từng gạch đầu dòng
const bulletsOf = (description: string) =>
    description
        .split('\n')
        .map((line) => line.replace(/^[•·\-\s]+/, '').trim())
        .filter(Boolean);

const Bullets = ({ items }: { items: string[] }) => (
    <ul className="space-y-1">
        {items.map((item, index) => (
            <li key={index} className="flex gap-2 text-[11.5px] leading-snug text-gray-700">
                <span className="text-cv-dark shrink-0">·</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

export default function CVSimple() {
    const { t } = useTranslation();
    const { experiences, achievements, research, skills } = useCvData();

    return (
        <div className="px-11 py-10 text-neutral-900 print:px-9 print:py-8">

            {/* --- ĐẦU TRANG: ảnh, tên, chức danh, thông tin liên hệ --- */}
            <header className="flex gap-7 items-start pb-7">
                <img
                    src={avatarImage}
                    alt={t('profile.full')}
                    className="w-28 h-37 shrink-0 object-cover bg-neutral-200 border border-neutral-300"
                    crossOrigin="anonymous"
                />

                <div className="grow pt-0.5">
                    <h1 className="text-[32px] font-bold leading-none tracking-tight text-cv-dark">
                        {t('profile.full')}
                    </h1>
                    <p className="text-[15px] text-gray-600 mt-2 mb-3.5">{t('cv.headline')}</p>

                    <div className="space-y-1 text-[11.5px]">
                        <InfoRow label={t('cv.phone')}>{CV_CONTACT.phone}</InfoRow>
                        <InfoRow label={t('cv.email')}>{CV_CONTACT.email}</InfoRow>
                        <InfoRow label={t('cv.website')}>
                            <a
                                href={CV_CONTACT.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline print:text-primary print:no-underline"
                            >
                                {CV_CONTACT.website}
                            </a>
                        </InfoRow>
                        <InfoRow label={t('cv.address')}>{t('cv.address_detail')}</InfoRow>
                    </div>
                </div>
            </header>

            <div className="space-y-6">

                {/* --- MỤC TIÊU NGHỀ NGHIỆP --- */}
                <section>
                    <SectionTitle>{t('cv.objective')}</SectionTitle>
                    <p className="text-[11.5px] leading-relaxed text-gray-700 text-justify">
                        {t('hero.desc')}
                    </p>
                </section>

                {/* --- HỌC VẤN --- */}
                <section>
                    <SectionTitle>{t('academic.education.title')}</SectionTitle>
                    <div className="space-y-3.5">
                        <TimelineRow period={t('academic.education.master.status')}>
                            <h3 className="font-bold text-[12.5px] text-cv-dark leading-tight">
                                {t('academic.education.master.school')}
                            </h3>
                            <p className="text-[11.5px] font-bold text-gray-800 mt-0.5">
                                {t('academic.education.master.degree')}
                            </p>
                            <p className="text-[11.5px] text-gray-700 mt-0.5">
                                {t('academic.education.master.track_label')}: {t('academic.education.master.track')}
                            </p>
                        </TimelineRow>

                        <TimelineRow>
                            <h3 className="font-bold text-[12.5px] text-cv-dark leading-tight">
                                {t('academic.education.university')}
                            </h3>
                            <p className="text-[11.5px] font-bold text-gray-800 mt-0.5">
                                {t('academic.education.degree')}
                            </p>
                            <p className="text-[11.5px] text-gray-700 mt-0.5">
                                {t('academic.education.honor_label')}: {t('academic.education.honor')} · {t('cv.english')} B2 · {t('cv.chinese')} B1
                            </p>
                        </TimelineRow>
                    </div>
                </section>

                {/* --- KINH NGHIỆM LÀM VIỆC --- */}
                <section>
                    <SectionTitle>{t('experience.title')}</SectionTitle>
                    <div className="space-y-3.5">
                        {experiences.map((exp, index) => (
                            <TimelineRow key={index} period={exp.year}>
                                <h3 className="font-bold text-[12.5px] text-cv-dark leading-tight">{exp.company}</h3>
                                <p className="text-[11.5px] font-bold text-primary mt-0.5 mb-1">{exp.role}</p>
                                <Bullets items={bulletsOf(exp.description)} />
                            </TimelineRow>
                        ))}
                    </div>
                </section>

                {/* --- KỸ NĂNG --- */}
                <section>
                    <SectionTitle>{t('skills.title')}</SectionTitle>
                    {/* Cột tên nhóm rộng hơn cột mốc thời gian để mỗi nhóm kỹ năng gọn trên một dòng */}
                    <div className="space-y-1.5">
                        {skills.map((group, index) => (
                            <div key={index} className="flex gap-5 text-[11.5px] leading-snug">
                                <span className="w-44 shrink-0 font-bold text-cv-dark">{group.title}</span>
                                <span className="grow text-gray-700">{group.items.join(' · ')}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- THÀNH TỰU --- */}
                <section>
                    <SectionTitle>{t('academic.achievements.title')}</SectionTitle>
                    <div className="space-y-2">
                        {achievements.map((item, index) => (
                            <TimelineRow key={index} period={item.year}>
                                <p className="text-[11.5px] leading-snug text-gray-800 font-bold">{item.title}</p>
                                {item.issuer && (
                                    <p className="text-[11px] leading-snug text-gray-600 italic mt-0.5">{item.issuer}</p>
                                )}
                            </TimelineRow>
                        ))}
                    </div>
                </section>

                {/* --- NGHIÊN CỨU KHOA HỌC --- */}
                <section>
                    <SectionTitle>{t('academic.research.title')}</SectionTitle>
                    {/* Đánh số 1-4 cho thẳng hàng; tên tạp chí / hội thảo xuống dòng ngay dưới tên bài */}
                    <ol className="space-y-2">
                        {research.map((item, index) => (
                            <li key={index} className="flex gap-3 print:break-inside-avoid">
                                <span className="w-4 shrink-0 text-[11.5px] font-bold text-cv-dark tabular-nums pt-px">
                                    {index + 1}.
                                </span>
                                <div className="grow">
                                    {item.url ? (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11.5px] leading-snug text-gray-800 font-bold hover:text-primary hover:underline print:no-underline print:text-gray-800"
                                        >
                                            "{item.title}"
                                        </a>
                                    ) : (
                                        <p className="text-[11.5px] leading-snug text-gray-800 font-bold">"{item.title}"</p>
                                    )}
                                    <p className="text-[11px] leading-snug text-gray-600 italic mt-0.5">{item.journal}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </div>
    );
}
