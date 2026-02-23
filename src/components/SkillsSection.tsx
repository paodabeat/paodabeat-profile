import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Cpu } from 'lucide-react';

export default function SkillsSection() {
    const { t } = useTranslation();

    // Lấy dữ liệu từ i18n
    const skillsData = (t('skills.list', { returnObjects: true }) as Array<{ title: string, items: string[] }>) || [];

    return (
        <section id="skills" className="py-24 px-6 bg-black/5 dark:bg-white/2">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t('skills.title')}</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm dark:shadow-none hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-[16px] font-bold mb-4 flex items-center gap-2 text-primary">
                                <Cpu className="w-5 h-5" /> {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((skill, si) => (
                                    <span
                                        key={si}
                                        className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-black/40 border border-black/5 dark:border-white/5 text-xs font-medium text-neutral-700 dark:text-white/90 hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}