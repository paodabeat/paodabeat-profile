import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, PlayCircle, Gamepad2, FileText, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Dữ liệu Icon
import { PROJECT_ICONS } from '../data/portfolioData';

// 1. Định nghĩa kiểu dữ liệu Project (TypeScript Interface)
interface ProjectItem {
    id: number;
    category: string;
    title: string;
    type: string;
    url: string;
    image: string;
    description: string;
}

// =========================================================================
// SUB-COMPONENT 1: GIAO DIỆN THẺ POSTER DỌC (Dành cho TV & Events)
// Đã fix cảnh báo Tailwind: aspect-[3/4] -> aspect-3/4
// =========================================================================
const TVCard: React.FC<{ project: ProjectItem; projectsStatus: Record<string, string> }> = ({ project, projectsStatus }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl overflow-hidden shadow-sm group bg-neutral-200 dark:bg-black/50 aspect-3/4 w-full"
    >
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Lớp phủ Hover Màu Xanh */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center translate-y-4 group-hover:translate-y-0">
            <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md">
                {project.title}
            </h3>
            {project.type === 'updating' || !project.url ? (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold text-white backdrop-blur-sm">
                    <Clock className="w-4 h-4" /> {projectsStatus.updating}
                </span>
            ) : (
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg"
                >
                    {projectsStatus.pdf} <FileText className="w-4 h-4" />
                </a>
            )}
        </div>
    </motion.div>
);

// =========================================================================
// SUB-COMPONENT 2: GIAO DIỆN THẺ NGANG BÌNH THƯỜNG (Dành cho các loại khác)
// =========================================================================
const NormalCard: React.FC<{
    project: ProjectItem;
    projectsCategories: Record<string, string>;
    projectsStatus: Record<string, string>
}> = ({ project, projectsCategories, projectsStatus }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -10 }}
        className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none group hover:border-primary/50 flex flex-col transition-all duration-300 w-full h-full"
    >
        <div className="aspect-video relative overflow-hidden bg-neutral-200 dark:bg-black/50">
            <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 ${project.type === 'updating' ? 'grayscale opacity-50 blur-sm' : 'opacity-90 dark:opacity-70 group-hover:opacity-100 group-hover:scale-110'}`}
            />
            <div className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-black/60 backdrop-blur rounded-xl text-primary dark:text-white shadow-sm">
                {PROJECT_ICONS[project.category] || <ExternalLink className="w-6 h-6" />}
            </div>
            {project.type === 'youtube' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <PlayCircle className="w-16 h-16 text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                </div>
            )}
        </div>

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

            <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                {project.type === 'updating' || !project.url ? (
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
);

// =========================================================================
// SUB-COMPONENT 3: SLIDER TRƯỢT NGANG (Đã khai báo React.FC để fix lỗi key)
// =========================================================================
const ProjectCarousel: React.FC<{
    items: ProjectItem[];
    categoryId: string;
    projectsCategories: Record<string, string>;
    projectsStatus: Record<string, string>;
}> = ({ items, categoryId, projectsCategories, projectsStatus }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsToShow(1); // Mobile
            else if (window.innerWidth < 1024) setItemsToShow(2); // Tablet
            else setItemsToShow(categoryId === 'tv' ? 4 : 3); // Desktop (TV hiện 4 poster dọc)
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [categoryId]);

    const maxIndex = Math.max(0, items.length - itemsToShow);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    if (items.length === 0) return null;

    return (
        <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {PROJECT_ICONS[categoryId] || <ExternalLink className="w-5 h-5" />}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider">{projectsCategories[categoryId]}</h3>
            </div>

            <div className="relative group">
                {items.length > itemsToShow && (
                    <button
                        onClick={handlePrev}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white dark:bg-[#1a1a1a] shadow-lg rounded-full text-neutral-600 dark:text-white/80 hover:text-primary transition-all md:opacity-0 md:group-hover:opacity-100 hover:scale-110 border border-black/5 dark:border-white/10"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                )}

                <div className="overflow-hidden px-2 pb-6 pt-2">
                    <motion.div
                        className="flex gap-6"
                        initial={false}
                        animate={{ x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * (1.5 / itemsToShow)}rem)` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {items.map((project) => (
                            <div
                                key={project.id}
                                className="shrink-0"
                                style={{ width: `calc(${100 / itemsToShow}% - ${((itemsToShow - 1) * 1.5) / itemsToShow}rem)` }}
                            >
                                {categoryId === 'tv'
                                    ? <TVCard project={project} projectsStatus={projectsStatus} />
                                    : <NormalCard project={project} projectsCategories={projectsCategories} projectsStatus={projectsStatus} />}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {items.length > itemsToShow && (
                    <button
                        onClick={handleNext}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white dark:bg-[#1a1a1a] shadow-lg rounded-full text-neutral-600 dark:text-white/80 hover:text-primary transition-all md:opacity-0 md:group-hover:opacity-100 hover:scale-110 border border-black/5 dark:border-white/10"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                )}
            </div>

            {items.length > itemsToShow && (
                <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-neutral-300 dark:bg-white/20 hover:bg-primary/50'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// =========================================================================
// COMPONENT CHÍNH
// =========================================================================
export default function ProjectsSection() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('all');

    const projectsCategories = (t('projects.categories', { returnObjects: true }) as Record<string, string>) || {};
    const projectsStatus = (t('projects.status', { returnObjects: true }) as Record<string, string>) || {};
    const projectsData = (t('projects.list', { returnObjects: true }) as ProjectItem[]) || [];

    // Đã fix lỗi biến filteredProjects bị thiếu định nghĩa ở bản trước
    const filteredProjects = activeCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    const isTVGrid = activeCategory === 'tv';

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t('projects.title')}</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </div>

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

                {activeCategory === 'all' ? (
                    <div className="flex flex-col gap-8">
                        {Object.keys(projectsCategories)
                            .filter(key => key !== 'all')
                            .map(categoryKey => {
                                const itemsInCategory = projectsData.filter(p => p.category === categoryKey);
                                return (
                                    <ProjectCarousel
                                        key={categoryKey}
                                        items={itemsInCategory}
                                        categoryId={categoryKey}
                                        projectsCategories={projectsCategories}
                                        projectsStatus={projectsStatus}
                                    />
                                );
                            })
                        }
                    </div>
                ) : (
                    <motion.div layout className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isTVGrid ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <React.Fragment key={project.id}>
                                    {project.category === 'tv'
                                        ? <TVCard project={project} projectsStatus={projectsStatus} />
                                        : <NormalCard project={project} projectsCategories={projectsCategories} projectsStatus={projectsStatus} />}
                                </React.Fragment>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </section>
    );
}