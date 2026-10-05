import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import SectionHeader from './SectionHeader';

export default function SkillsSection() {
    const { t } = useTranslation();

    // Lấy dữ liệu từ i18n
    const skillsData = (t('skills.list', { returnObjects: true }) as Array<{ title: string, items: string[] }>) || [];

    return (
        <section id="skills" className="py-20 md:py-32 px-5 md:px-10 bg-panel/50">
            <div className="max-w-[90rem] mx-auto">
                <SectionHeader index="03" title={t('skills.title')} aside={t('common.items', { count: skillsData.length })} />

                {/* Mỗi nhóm kỹ năng là một dòng: số thứ tự | tên nhóm | danh sách công cụ */}
                <div className="border-t border-rule">
                    {skillsData.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                            className="grid grid-cols-[2.5rem_1fr] md:grid-cols-12 gap-x-4 md:gap-x-6 gap-y-2 py-6 md:py-7 border-b border-rule"
                        >
                            <span className="md:col-span-1 label tabular-nums pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="md:col-span-4 text-lg md:text-xl font-medium tracking-tight">{cat.title}</h3>
                            <p className="min-w-0 col-start-2 md:col-span-7 md:col-start-auto text-[15px] leading-relaxed text-muted md:pt-1">
                                {cat.items.map((skill, si) => (
                                    <React.Fragment key={si}>
                                        {si > 0 && <> <span className="mx-1 text-muted/50" aria-hidden>/</span> </>}
                                        <span className="text-ink">{skill}</span>
                                    </React.Fragment>
                                ))}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
