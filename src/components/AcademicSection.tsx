import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import SectionHeader from './SectionHeader';
import Gallery, { GalleryItem } from './Gallery';
import { CERTIFICATE_IMAGES, CERTIFICATE_THUMBS, RESEARCH_IMAGES } from '../data/portfolioData';

export interface AchievementItem { id: string; type: string; title: string; issuer: string; year: string; cv?: boolean }
export interface ResearchItem {
    id: string; title: string; journal: string; url?: string;
    venue: string; citation: string; year: string; authors: string; abstract: string;
}

// Tiêu đề phụ trong section Học thuật
const SubHeading = ({ index, title, aside }: { index: string; title: string; aside?: string }) => (
    <div className="flex items-baseline justify-between gap-6 border-t border-ink pt-4 mb-10">
        <h3 className="text-2xl md:text-4xl font-medium tracking-tight">
            <span className="label mr-4 align-middle">{index}</span>{title}
        </h3>
        {aside && <span className="label shrink-0">{aside}</span>}
    </div>
);

export default function AcademicSection() {
    const { t } = useTranslation();
    const [achievementType, setAchievementType] = useState('all');

    // Lấy dữ liệu từ i18n
    const achievementsData = (t('academic.achievements.list', { returnObjects: true }) as AchievementItem[]) || [];
    const researchData = (t('academic.research.list', { returnObjects: true }) as ResearchItem[]) || [];

    // Ghép ảnh theo id (tên file trong assets/certificate và assets/research)
    const achievementTypes = (t('academic.achievements.types', { returnObjects: true }) as Record<string, string>) || {};
    const countOfType = (type: string) => type === 'all' ? achievementsData.length : achievementsData.filter((item) => item.type === type).length;

    const achievementItems: GalleryItem[] = achievementsData
        .filter((item) => achievementType === 'all' || item.type === achievementType)
        .map((item) => ({
        id: item.id,
        title: item.title,
        meta: item.issuer,
        year: item.year,
        image: CERTIFICATE_IMAGES[item.id],
        thumb: CERTIFICATE_THUMBS[item.id]
    }));

    const researchItems: GalleryItem[] = researchData.map((item) => ({
        id: item.id,
        title: item.title,
        meta: item.venue,
        details: item.citation,
        year: item.year,
        authors: item.authors,
        abstract: item.abstract,
        url: item.url,
        urlLabel: t('academic.research.read'),
        image: RESEARCH_IMAGES[item.id]
    }));

    const educationFacts = [
        { label: t('academic.education.honor_label'), value: t('academic.education.honor') },
        { label: t('cv.english'), value: 'B2' },
        { label: t('cv.chinese'), value: 'B1' }
    ];

    return (
        <section id="academic" className="py-20 md:py-32 px-5 md:px-10">
            <div className="max-w-[90rem] mx-auto">
                <SectionHeader index="04" title={t('academic.title')} />

                {/* HỌC VẤN */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-24 md:mb-32"
                >
                    <SubHeading index="4.1" title={t('academic.education.title')} />
                    <ol className="border-b border-rule">
                        {/* Cao học (đang theo học) */}
                        <li className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6 pb-10 md:pb-12">
                            <div className="lg:col-span-7">
                                <p className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-[-0.03em]">
                                    {t('academic.education.master.degree')}
                                </p>
                                <p className="text-lg text-muted mt-3">{t('academic.education.master.school')}</p>
                            </div>
                            <dl className="lg:col-span-5 border-t border-rule pt-4 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-10 space-y-4">
                                <div>
                                    <dt className="label mb-2">{t('academic.education.master.track_label')}</dt>
                                    <dd className="text-lg md:text-xl font-medium">{t('academic.education.master.track')}</dd>
                                </div>
                                <dd className="flex items-center gap-2 text-sm text-accent">
                                    <span className="w-1.5 h-1.5 bg-accent" aria-hidden /> {t('academic.education.master.status')}
                                </dd>
                            </dl>
                        </li>

                        {/* Cử nhân */}
                        <li className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6 py-10 md:py-12 border-t border-rule">
                            <div className="lg:col-span-7">
                                <p className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-[-0.03em]">
                                    {t('academic.education.degree')}
                                </p>
                                <p className="text-lg text-muted mt-3">{t('academic.education.university')}</p>
                            </div>
                            <dl className="lg:col-span-5 grid grid-cols-3 border-t border-rule pt-4 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-10">
                                {educationFacts.map((fact) => (
                                    <div key={fact.label} className="pr-4">
                                        <dt className="label mb-2">{fact.label}</dt>
                                        <dd className="text-lg md:text-xl font-medium">{fact.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </li>
                    </ol>
                </motion.div>

                {/* THÀNH TỰU */}
                <div className="mb-24 md:mb-32">
                    <SubHeading index="4.2" title={t('academic.achievements.title')} aside={t('common.items', { count: achievementsData.length })} />

                    {/* Lọc theo nhóm: Giải thưởng / Giấy khen / Chứng nhận */}
                    <div className="flex gap-x-8 overflow-x-auto no-scrollbar border-b border-rule mb-10 -mx-5 px-5 md:mx-0 md:px-0">
                        {Object.entries(achievementTypes).map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => setAchievementType(key)}
                                className={`shrink-0 pb-3 -mb-px border-b text-sm transition-colors ${achievementType === key
                                    ? 'border-accent text-ink font-medium'
                                    : 'border-transparent text-muted hover:text-ink'
                                    }`}
                            >
                                {label}
                                <sup className="ml-1 text-[10px] tabular-nums">{countOfType(key)}</sup>
                            </button>
                        ))}
                    </div>

                    <Gallery key={achievementType} items={achievementItems} variant="certificate" />
                </div>

                {/* NGHIÊN CỨU KHOA HỌC */}
                <div>
                    <SubHeading index="4.3" title={t('academic.research.title')} aside={t('common.items', { count: researchItems.length })} />
                    <Gallery items={researchItems} variant="paper" />
                </div>
            </div>
        </section>
    );
}
