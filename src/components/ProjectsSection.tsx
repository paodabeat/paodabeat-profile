import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, PlayCircle, Gamepad2, FileText, Clock } from 'lucide-react';

// Import Dữ liệu Icon
import { PROJECT_ICONS } from '../data/portfolioData';

export default function ProjectsSection() {
    const { t } = useTranslation();

    // Khởi tạo state cho bộ lọc Project
    const [activeCategory, setActiveCategory] = useState('all');

    // Lấy dữ liệu Project từ i18n
    const projectsCategories = (t('projects.categories', { returnObjects: true }) as Record<string, string>) || {};
    const projectsStatus = (t('projects.status', { returnObjects: true }) as Record<string, string>) || {};
    const projectsData = (t('projects.list', { returnObjects: true }) as Array<{ id: number, category: string, title: string, type: string, url: string, image: string, description: string }>) || [];

    // Logic Lọc danh sách Projects
    const filteredProjects = activeCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t('projects.title')}</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </div>

                {/* TAB BỘ LỌC DANH MỤC */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {Object.entries(projectsCategories).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === key
                                ? 'bg-primary text-white shadow-md scale-105'
                                : 'bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary'
                                }`}
                        >
                            {label as string}
                        </button>
                    ))}
                </div>

                {/* DANH SÁCH CARD DỰ ÁN */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none group hover:border-primary/50 flex flex-col transition-all duration-300"
                            >
                                {/* Phần Hình ảnh */}
                                <div className="aspect-video relative overflow-hidden bg-neutral-200 dark:bg-black/50">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover transition-all duration-700 ${project.type === 'updating' ? 'grayscale opacity-50 blur-sm' : 'opacity-90 dark:opacity-70 group-hover:opacity-100 group-hover:scale-110'}`}
                                    />

                                    {/* Icon Thể loại trên góc phải */}
                                    <div className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-black/60 backdrop-blur rounded-xl text-primary dark:text-white shadow-sm">
                                        {PROJECT_ICONS[project.category] || <ExternalLink className="w-6 h-6" />}
                                    </div>

                                    {/* Nút Play (dành riêng cho Youtube) mờ mờ chính giữa */}
                                    {project.type === 'youtube' && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <PlayCircle className="w-16 h-16 text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                                        </div>
                                    )}
                                </div>

                                {/* Phần Nội dung Text */}
                                <div className="p-6 flex flex-col grow">
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                                        {projectsCategories[project.category]}
                                    </span>
                                    <h3 className={`text-xl font-bold mb-3 ${project.type === 'updating' ? 'text-neutral-400 dark:text-white/50' : ''}`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed mb-6 grow ${project.type === 'updating' ? 'text-neutral-400 dark:text-white/30' : 'text-neutral-600 dark:text-white/60'}`}>
                                        {project.description}
                                    </p>

                                    {/* Nút Call To Action */}
                                    <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                                        {project.type === 'updating' ? (
                                            <span className="flex items-center gap-2 text-sm font-bold text-neutral-400 dark:text-white/30 cursor-not-allowed">
                                                <Clock className="w-4 h-4" /> {projectsStatus.updating}
                                            </span>
                                        ) : (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                                            >
                                                {project.type === 'youtube' ? projectsStatus.play :
                                                    project.type === 'game' ? projectsStatus.play_game :
                                                        project.type === 'pdf' ? projectsStatus.pdf :
                                                            projectsStatus.visit}

                                                {project.type === 'youtube' ? <PlayCircle className="w-4 h-4" /> :
                                                    project.type === 'game' ? <Gamepad2 className="w-4 h-4" /> :
                                                        project.type === 'pdf' ? <FileText className="w-4 h-4" /> :
                                                            <ExternalLink className="w-4 h-4" />}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}