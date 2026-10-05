import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

import SectionHeader from './SectionHeader';

// Import Dữ liệu
import { EXPERIENCE_META } from '../data/portfolioData';

export default function ExperienceSection() {
    const { t } = useTranslation();

    // Lấy dữ liệu từ i18n
    const experiencesData = (t('experience.list', { returnObjects: true }) as Array<{ key: string, year: string, company: string, role: string, description: string }>) || [];

    return (
        <section id="experience" className="py-20 md:py-32 px-5 md:px-10">
            <div className="max-w-[90rem] mx-auto">
                <SectionHeader index="01" title={t('experience.title')} aside={t('common.items', { count: experiencesData.length })} />

                {/* Mỗi kinh nghiệm là một dòng kẻ ngang: năm | đơn vị & vai trò | mô tả */}
                <ol className="border-t border-rule">
                    {experiencesData.map((exp, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5 }}
                            className="border-b border-rule"
                        >
                            <a
                                href={EXPERIENCE_META[exp.key]?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-4 py-8 md:py-10"
                            >
                                <span className="md:col-span-2 text-sm tabular-nums text-muted pt-1">{exp.year}</span>

                                <div className="md:col-span-4 flex items-start gap-4">
                                    <img
                                        src={EXPERIENCE_META[exp.key]?.logo}
                                        alt={exp.company}
                                        className="w-11 h-11 shrink-0 object-cover bg-white border border-rule"
                                    />
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-medium leading-snug tracking-tight group-hover:text-accent transition-colors">
                                            {exp.company}
                                        </h3>
                                        <p className="label mt-2">{exp.role}</p>
                                    </div>
                                </div>

                                <p className="md:col-span-5 text-[15px] leading-relaxed text-muted whitespace-pre-line">
                                    {exp.description}
                                </p>

                                <ArrowUpRight
                                    className="hidden md:block md:col-span-1 justify-self-end w-5 h-5 text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                                    strokeWidth={1.5}
                                />
                            </a>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
