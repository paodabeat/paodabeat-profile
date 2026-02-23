import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Facebook,
    Linkedin,
    Youtube,
    Download,
    ExternalLink,
    ChevronRight,
    Award,
    BookOpen,
    PenTool,
    Cpu,
    Quote
} from 'lucide-react';

// Import Dữ liệu
import { TikTok, PROJECT_ICONS } from '../data/portfolioData';

// Import Components
import Navbar from '../components/Navbar';
import Typewriter from '../components/Typewriter';
import Footer from '../components/Footer';

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const navigate = useNavigate();
    const { t } = useTranslation(); // Hook dịch thuật

    // Ép kiểu mảng từ i18n kèm theo Fallback || [] để tránh lỗi crash .map
    const typewriterTexts = (t('hero.typewriter', { returnObjects: true }) as string[]) || [];
    const experiencesData = (t('experience.list', { returnObjects: true }) as Array<{ year: string, company: string, role: string, description: string }>) || [];
    const projectsData = (t('projects.list', { returnObjects: true }) as Array<{ id: number, title: string, category: string, description: string }>) || [];
    const skillsData = (t('skills.list', { returnObjects: true }) as Array<{ title: string, items: string[] }>) || [];
    const achievementsData = (t('academic.achievements.list', { returnObjects: true }) as string[]) || [];
    const researchData = (t('academic.research.list', { returnObjects: true }) as Array<{ title: string, journal: string }>) || [];

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-white font-sans selection:bg-primary/30 transition-colors duration-300">
            {/* Thanh tiến trình Scroll */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-60 origin-left" style={{ scaleX }} />

            <Navbar />

            <main>
                {/* SECTION 1: HERO */}
                <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6">
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 -left-20 w-125 h-125 bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute bottom-1/4 right-0 w-125 h-125 bg-blue-500/10 rounded-full blur-[120px]" />
                    </div>

                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

                            <div className="flex flex-col w-max mb-6 mt-10 md:mt-0">
                                <div className="flex justify-between w-full text-2xl md:text-[2.65rem] font-black text-neutral-800 dark:text-white/90 leading-none mb-2">
                                    <span>P</span><span>H</span><span>Ù</span><span>N</span><span>G</span>
                                    <span>&nbsp;</span>
                                    <span>T</span><span>R</span><span>Ầ</span><span>N</span>
                                </div>
                                <div className="text-7xl md:text-[8.5rem] font-black leading-none bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
                                    GIA BẢO
                                </div>
                            </div>

                            <div className="text-xl md:text-2xl font-medium mb-6 h-8">
                                {/* Component Typewriter chỉ chạy khi có dữ liệu mảng */}
                                {typewriterTexts.length > 0 && <Typewriter texts={typewriterTexts} />}
                            </div>

                            <p className="text-neutral-600 dark:text-white/70 text-[15px] md:text-lg leading-relaxed max-w-xl mb-10 text-justify">
                                {t('hero.desc')}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <motion.button onClick={() => navigate('/cv')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-primary text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-blue-700 transition-colors">
                                    <Download className="w-5 h-5" /> {t('hero.download_cv')}
                                </motion.button>
                                <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 font-bold rounded-xl flex items-center gap-2 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                                    {t('hero.view_projects')} <ChevronRight className="w-5 h-5" />
                                </motion.a>
                            </div>

                            <div className="flex gap-6">
                                {[
                                    { icon: <Facebook />, href: "https://www.facebook.com/phungtrangiabao/" },
                                    { icon: <Linkedin />, href: "https://www.linkedin.com/in/paodabeat/" },
                                    { icon: <Youtube />, href: "https://www.youtube.com/@paodabeat6731" },
                                    { icon: <TikTok />, href: "https://www.tiktok.com/@paodabeat" }
                                ].map((social, i) => (
                                    <motion.a key={i} href={social.href} target="_blank" rel="noreferrer" whileHover={{ y: -5, color: 'var(--color-primary)' }} className="text-neutral-500 dark:text-white/40 transition-colors">
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:block">
                            <div className="aspect-4/5 rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 relative group">
                                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src="https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat/avarta.png"
                                    alt="Phùng Trần Gia Bảo"
                                    className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                                />

                                <div className="absolute bottom-10 left-0 right-10 p-6 bg-white/90 dark:bg-black/70 backdrop-blur-md border-l-4 border-primary rounded-r-2xl shadow-2xl -translate-x-2.5 group-hover:translate-x-0 transition-transform duration-500">
                                    <Quote className="w-8 h-8 text-primary mb-2 opacity-50" />
                                    <div className="text-xl font-serif italic font-medium text-neutral-900 dark:text-white">
                                        {t('hero.quote')}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 2: EXPERIENCE */}
                <section id="experience" className="py-24 px-6 bg-black/5 dark:bg-white/2">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col items-center mb-20 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t('experience.title')}</h2>
                            <div className="w-20 h-1 bg-primary rounded-full" />
                        </div>

                        <div className="relative">
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
                                        <div className="absolute left-2.75 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-[#0a0a0a] md:-translate-x-1/2 z-10 transition-colors" />

                                        <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                                            <div className={`bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 rounded-2xl shadow-sm dark:shadow-none hover:border-primary/50 dark:hover:border-primary/50 hover:bg-neutral-50 dark:hover:bg-white/10 transition-all group ${isEven ? 'md:rounded-tr-none' : 'md:rounded-tl-none'}`}>
                                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-bold mb-3">{exp.year}</span>
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.company}</h3>
                                                <p className="text-neutral-500 dark:text-white/80 font-medium text-sm mb-4 uppercase tracking-wide">{exp.role}</p>
                                                <p className="text-neutral-600 dark:text-white/60 text-[14px] leading-relaxed whitespace-pre-line text-justify md:text-left">{exp.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: PROJECTS */}
                <section id="projects" className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col items-center mb-16 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t('projects.title')}</h2>
                            <div className="w-20 h-1 bg-primary rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectsData.map((project) => (
                                <motion.div key={project.id} whileHover={{ y: -10 }} className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none group hover:border-primary/50 transition-colors">
                                    <div className="aspect-video relative overflow-hidden bg-neutral-200 dark:bg-black/50">
                                        <img
                                            src={`https://picsum.photos/seed/project-${project.id}/600/400`}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-80 dark:opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                        />
                                        <div className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-black/60 backdrop-blur rounded-xl text-primary dark:text-white">
                                            {PROJECT_ICONS[project.id]}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{project.category}</span>
                                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">{project.description}</p>
                                        <button className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                                            {t('projects.detail_btn')} <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4: SKILLS */}
                <section id="skills" className="py-24 px-6 bg-black/5 dark:bg-white/2">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col items-center mb-16 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t('skills.title')}</h2>
                            <div className="w-20 h-1 bg-primary rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skillsData.map((cat, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm dark:shadow-none hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors">
                                    <h3 className="text-[16px] font-bold mb-4 flex items-center gap-2 text-primary">
                                        <Cpu className="w-5 h-5" /> {cat.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.items.map((skill, si) => (
                                            <span key={si} className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-black/40 border border-black/5 dark:border-white/5 text-xs font-medium text-neutral-700 dark:text-white/90 hover:border-primary/50 transition-colors cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 5: ACADEMIC & ACHIEVEMENTS */}
                <section id="academic" className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col items-center mb-16 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t('academic.title')}</h2>
                            <div className="w-20 h-1 bg-primary rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                                <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 shadow-sm dark:shadow-none">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><BookOpen className="text-primary" /> {t('academic.education.title')}</h3>
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

                                <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 shadow-sm dark:shadow-none">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Award className="text-primary" /> {t('academic.achievements.title')}</h3>
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
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><PenTool className="text-primary" /> {t('academic.research.title')}</h3>
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

                {/* FOOTER */}
                <Footer />
            </main>
        </div>
    );
}