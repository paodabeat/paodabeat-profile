// File: components/ProjectSection.tsx

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

import SectionHeader from './SectionHeader';

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

const pad = (n: number) => String(n).padStart(2, '0');

// Nhãn hành động theo loại sản phẩm
const actionLabel = (project: ProjectItem, status: Record<string, string>) =>
    project.type === 'youtube' ? status.play :
        project.type === 'game' ? status.play_game :
            project.type === 'pdf' ? status.pdf :
                status.visit;

const isUnavailable = (project: ProjectItem) => project.type === 'updating' || !project.url;

// Khung ảnh: có link thì bấm được, chưa có thì chỉ hiển thị
const ImageFrame: React.FC<{ project: ProjectItem; aspect: string }> = ({ project, aspect }) => {
    const img = (
        <div className={`${aspect} bg-panel overflow-hidden`}>
            <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-700 ${isUnavailable(project) && project.category !== 'tv' ? 'grayscale opacity-50' : 'group-hover:scale-[1.03]'}`}
            />
        </div>
    );
    return isUnavailable(project)
        ? img
        : <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={project.title}>{img}</a>;
};

// Dòng hành động ở chân mỗi sản phẩm
const ActionLine: React.FC<{ project: ProjectItem; status: Record<string, string> }> = ({ project, status }) =>
    isUnavailable(project) ? (
        <span className="text-sm text-muted italic">{status.updating}</span>
    ) : (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
            {actionLabel(project, status)} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </a>
    );

// =========================================================================
// SUB-COMPONENT 1: POSTER DỌC (Dành cho TV & Events) - chú thích nằm dưới ảnh
// =========================================================================
const TVItem: React.FC<{ project: ProjectItem; index: number; status: Record<string, string> }> = ({ project, index, status }) => (
    <article className="group">
        <ImageFrame project={project} aspect="aspect-3/4" />
        <div className="pt-4">
            <span className="label tabular-nums">No. {pad(index + 1)}</span>
            <h4 className="text-lg font-medium leading-snug tracking-tight mt-1.5 mb-3">{project.title}</h4>
            <ActionLine project={project} status={status} />
        </div>
    </article>
);

// =========================================================================
// SUB-COMPONENT 2: SẢN PHẨM NGANG (Dành cho các loại khác)
// =========================================================================
const NormalItem: React.FC<{ project: ProjectItem; index: number; status: Record<string, string> }> = ({ project, index, status }) => (
    <article className="group flex flex-col h-full">
        <ImageFrame project={project} aspect="aspect-video" />
        <div className="pt-4 flex flex-col grow">
            <span className="label tabular-nums">No. {pad(index + 1)}</span>
            <h4 className={`text-xl font-medium leading-snug tracking-tight mt-1.5 mb-2 ${isUnavailable(project) ? 'text-muted' : ''}`}>
                {project.title}
            </h4>
            <p className="text-sm leading-relaxed text-muted mb-5 grow">{project.description}</p>
            <div><ActionLine project={project} status={status} /></div>
        </div>
    </article>
);

const ProjectEntry: React.FC<{ project: ProjectItem; index: number; status: Record<string, string> }> = (props) =>
    props.project.category === 'tv' ? <TVItem {...props} /> : <NormalItem {...props} />;

// =========================================================================
// SUB-COMPONENT 3: DẢI TRƯỢT NGANG CHO MỖI DANH MỤC
// Dùng cuộn gốc của trình duyệt (scroll-snap) để vuốt mượt trên điện thoại
// =========================================================================
const ProjectRow: React.FC<{
    items: ProjectItem[];
    categoryId: string;
    categoryLabel: string;
    status: Record<string, string>;
}> = ({ items, categoryId, categoryLabel, status }) => {
    const { t } = useTranslation();
    const trackRef = useRef<HTMLDivElement>(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);

    const updateArrows = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        setCanPrev(el.scrollLeft > 4);
        setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    }, []);

    useEffect(() => {
        updateArrows();
        window.addEventListener('resize', updateArrows);
        return () => window.removeEventListener('resize', updateArrows);
    }, [updateArrows, items.length]);

    const scrollByPage = (direction: 1 | -1) => {
        const el = trackRef.current;
        if (el) el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' });
    };

    if (items.length === 0) return null;

    const isTV = categoryId === 'tv';
    const itemWidth = isTV
        ? 'w-[68%] sm:w-[42%] lg:w-[calc((100%-6rem)/4)]'
        : 'w-[85%] sm:w-[60%] lg:w-[calc((100%-4rem)/3)]';

    return (
        <div className="border-t border-rule pt-6">
            <div className="flex items-end justify-between gap-6 mb-8">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                    {categoryLabel}
                    <sup className="label ml-2 align-super">{pad(items.length)}</sup>
                </h3>
                {(canPrev || canNext) && (
                    <div className="flex items-center gap-5 text-sm">
                        <button onClick={() => scrollByPage(-1)} disabled={!canPrev} aria-label={t('common.prev')} className="disabled:opacity-25 hover:text-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                        <button onClick={() => scrollByPage(1)} disabled={!canNext} aria-label={t('common.next')} className="disabled:opacity-25 hover:text-accent transition-colors">
                            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                    </div>
                )}
            </div>

            <div
                ref={trackRef}
                onScroll={updateArrows}
                className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 scroll-px-5 md:scroll-px-0"
            >
                {items.map((project, index) => (
                    <div key={project.id} className={`shrink-0 snap-start ${itemWidth}`}>
                        <ProjectEntry project={project} index={index} status={status} />
                    </div>
                ))}
            </div>
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

    const countOf = (key: string) => key === 'all' ? projectsData.length : projectsData.filter(p => p.category === key).length;

    const filteredProjects = activeCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    const isTVGrid = activeCategory === 'tv';

    return (
        <section id="projects" className="py-20 md:py-32 px-5 md:px-10">
            <div className="max-w-[90rem] mx-auto">
                <SectionHeader index="02" title={t('projects.title')} aside={t('common.items', { count: projectsData.length })} />

                {/* Bộ lọc danh mục dạng chữ, gạch chân mục đang chọn */}
                <div className="flex gap-x-8 overflow-x-auto no-scrollbar border-b border-rule mb-14 -mx-5 px-5 md:mx-0 md:px-0">
                    {Object.entries(projectsCategories).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`shrink-0 pb-3 -mb-px border-b text-sm transition-colors ${activeCategory === key
                                ? 'border-accent text-ink font-medium'
                                : 'border-transparent text-muted hover:text-ink'
                                }`}
                        >
                            {label as string}
                            <sup className="ml-1 text-[10px] tabular-nums">{countOf(key)}</sup>
                        </button>
                    ))}
                </div>

                {activeCategory === 'all' ? (
                    <div className="flex flex-col gap-20">
                        {Object.keys(projectsCategories)
                            .filter(key => key !== 'all')
                            .map(categoryKey => (
                                <ProjectRow
                                    key={categoryKey}
                                    items={projectsData.filter(p => p.category === categoryKey)}
                                    categoryId={categoryKey}
                                    categoryLabel={projectsCategories[categoryKey]}
                                    status={projectsStatus}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14 ${isTVGrid ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.03 }}
                                >
                                    <ProjectEntry project={project} index={index} status={projectsStatus} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </section>
    );
}
