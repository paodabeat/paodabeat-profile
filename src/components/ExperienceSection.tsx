import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Import Dữ liệu
import { EXPERIENCE_LOGOS, EXPERIENCE_LINKS } from '../data/portfolioData';

export default function ExperienceSection() {
    const { t } = useTranslation();

    // Lấy dữ liệu từ i18n
    const experiencesData = (t('experience.list', { returnObjects: true }) as Array<{ year: string, company: string, role: string, description: string }>) || [];

    return (
        <section id="experience" className="py-24 px-6 bg-black/5 dark:bg-white/2">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t('experience.title')}</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </div>

                <div className="relative">
                    {/* Trục giữa timeline */}
                    <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-black/10 dark:bg-white/10 md:-translate-x-1/2" />

                    {experiencesData.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className="relative mb-12 flex flex-col md:flex-row items-center w-full"
                            >
                                {/* Cục Logo ở giữa */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-white md:-translate-x-1/2 z-10 overflow-hidden transition-colors shrink-0 flex items-center justify-center">
                                    <img src={EXPERIENCE_LOGOS[index]} alt={exp.company} className="w-full h-full object-cover" />
                                </div>

                                {/* Nội dung Card */}
                                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                                    <a
                                        href={EXPERIENCE_LINKS[index]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`relative block bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 rounded-2xl shadow-sm dark:shadow-none hover:border-primary/50 dark:hover:border-primary/50 hover:bg-neutral-50 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${isEven ? 'md:rounded-tr-none' : 'md:rounded-tl-none'}`}
                                    >
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-bold mb-3">{exp.year}</span>
                                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.company}</h3>
                                        <p className="text-neutral-500 dark:text-white/80 font-medium text-sm mb-4 uppercase tracking-wide">{exp.role}</p>
                                        <p className="text-neutral-600 dark:text-white/60 text-[14px] leading-relaxed whitespace-pre-line md:text-left text-justify">{exp.description}</p>
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}