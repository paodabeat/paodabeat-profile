import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Download, ChevronRight } from 'lucide-react';

// Import Component
import Typewriter from './Typewriter';

export default function HeroSection() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    // Lấy dữ liệu từ i18n
    const typewriterTexts = (t('hero.typewriter', { returnObjects: true }) as string[]) || [];

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-125 h-125 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-125 h-125 bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                {/* CỘT TRÁI: THÔNG TIN TEXT */}
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <div className="flex flex-col w-max mb-2 mt-2">
                        <div className="flex justify-between w-full text-2xl md:text-[2.5rem] font-black text-neutral-800 dark:text-white/90 leading-none mb-5 tracking-widest">
                            <span>P</span><span>H</span><span>U</span><span>N</span><span>G</span>
                            <span>&nbsp;</span>
                            <span>T</span><span>R</span><span>A</span><span>N</span>
                        </div>
                        <div className="text-7xl md:text-[8.5rem] font-black leading-tight bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
                            GIA BAO
                        </div>
                    </div>

                    <div className="text-xl md:text-2xl font-medium mb-5 h-5 text-neutral-700 dark:text-white/90">
                        {typewriterTexts.length > 0 && <Typewriter texts={typewriterTexts} />}
                    </div>

                    <p className="text-neutral-600 dark:text-white/70 text-[15px] md:text-lg leading-relaxed max-w-xl mb-10 text-justify">
                        {t('hero.desc')}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <motion.button onClick={() => navigate('/cv')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-primary text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-blue-700 transition-colors">
                            <Download className="w-5 h-5" /> {t('hero.download_cv')}
                        </motion.button>
                        <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 font-bold rounded-xl flex items-center gap-2 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                            {t('hero.view_projects')} <ChevronRight className="w-5 h-5" />
                        </motion.a>
                    </div>

                    {/* Đồng bộ FontAwesome Icons */}
                    <div className="flex gap-6">
                        {[
                            { icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com/phungtrangiabao/" },
                            { icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com/in/paodabeat/" },
                            { icon: "fa-brands fa-youtube", href: "https://www.youtube.com/@paodabeat6731" },
                            { icon: "fa-brands fa-tiktok", href: "https://www.tiktok.com/@paodabeat" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -5, color: 'var(--color-primary)' }}
                                className="text-neutral-500 dark:text-white/50 hover:text-primary transition-colors flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-white/5 shadow-sm border border-black/5 dark:border-white/5"
                            >
                                <i className={`${social.icon} text-xl`}></i>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* CỘT PHẢI: HÌNH ẢNH */}
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:flex items-center justify-center h-full">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 md:rotate-0 font-black opacity-10 dark:opacity-20 pointer-events-none select-none whitespace-nowrap z-0"
                        style={{ fontSize: 'clamp(6rem, 12vw, 12rem)', WebkitTextStroke: '2px var(--color-primary)', color: 'transparent' }}
                    >
                        PORTFOLIO
                    </div>
                    <img
                        src="https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat/hero-image.png"
                        alt="Paodabeat"
                        className="relative z-10 w-full max-w-130 h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:scale-[1.02] transition-transform duration-700"
                    />
                </motion.div>
            </div>
        </section>
    );
}