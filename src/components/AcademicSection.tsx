import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Award, BookOpen, PenTool, ChevronRight } from 'lucide-react';

export default function AcademicSection() {
    const { t } = useTranslation();

    // Lấy dữ liệu từ i18n
    const achievementsData = (t('academic.achievements.list', { returnObjects: true }) as string[]) || [];
    const researchData = (t('academic.research.list', { returnObjects: true }) as Array<{ title: string, journal: string }>) || [];

    return (
        <section id="academic" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t('academic.title')}</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Education & Achievements */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">

                        {/* Box 1: Education */}
                        <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 shadow-sm dark:shadow-none">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <BookOpen className="text-primary" /> {t('academic.education.title')}
                            </h3>
                            <div className="border-l-2 border-primary pl-6">
                                <h4 className="text-xl font-bold text-neutral-900 dark:text-white">{t('academic.education.degree')}</h4>
                                <p className="text-neutral-500 dark:text-white/60 mb-4">{t('academic.education.university')}</p>
                                <div className="flex flex-wrap gap-3 text-sm">
                                    <span className="px-3 py-1 bg-primary text-white font-bold rounded">GPA: 3.35/4.0</span>
                                    <span className="px-3 py-1 bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-white rounded">English: B2</span>
                                    <span className="px-3 py-1 bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-white rounded">Chinese: B1</span>
                                </div>
                            </div>
                        </div>

                        {/* Box 2: Achievements */}
                        <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 shadow-sm dark:shadow-none">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Award className="text-primary" /> {t('academic.achievements.title')}
                            </h3>
                            <ul className="space-y-4">
                                {achievementsData.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-white/80 text-[15px] leading-relaxed">
                                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Research */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 h-full shadow-sm dark:shadow-none">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <PenTool className="text-primary" /> {t('academic.research.title')}
                            </h3>
                            <div className="space-y-6">
                                {researchData.map((item, i) => (
                                    <div key={i} className="group p-5 rounded-xl bg-neutral-50 dark:bg-black/20 hover:bg-neutral-100 dark:hover:bg-white/5 border border-transparent hover:border-black/5 dark:hover:border-white/10 transition-all">
                                        <h4 className="text-[15px] font-bold mb-2 text-neutral-800 dark:text-white group-hover:text-primary transition-colors leading-relaxed">
                                            {item.title}
                                        </h4>
                                        <p className="text-primary text-sm font-mono font-bold">
                                            {item.journal}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}