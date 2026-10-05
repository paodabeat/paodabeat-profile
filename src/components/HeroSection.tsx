import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowDown } from 'lucide-react';

// Import Component
import Typewriter from './Typewriter';
import heroImage from '../../assets/hero-image.webp';

export const SOCIAL_LINKS = [
    { label: "Facebook", href: "https://www.facebook.com/phungtrangiabao/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paodabeat/" },
    { label: "YouTube", href: "https://www.youtube.com/@paodabeat6731" },
    { label: "TikTok", href: "https://www.tiktok.com/@paodabeat" }
];

export default function HeroSection() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    // Lấy dữ liệu từ i18n
    const typewriterTexts = (t('hero.typewriter', { returnObjects: true }) as string[]) || [];

    return (
        <section id="hero" className="pt-24 md:pt-28 pb-20 md:pb-28 px-5 md:px-10">
            <div className="max-w-[90rem] mx-auto">

                {/* Dòng thông tin đầu trang, như măng-sét của tạp chí */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-b border-ink pb-3 label">
                    <span>{t('hero.kicker')}</span>
                    <span className="hidden md:block text-center">2019 — {new Date().getFullYear()}</span>
                    <span className="text-right">{t('footer.address')}</span>
                </div>

                {/* Tên */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pt-8 md:pt-12 pb-8 md:pb-12 border-b border-rule"
                >
                    <span className="block text-[clamp(1.5rem,4vw,3.25rem)] font-normal tracking-[-0.02em] text-muted leading-tight">
                        {t('profile.family')}
                    </span>
                    <span className="block text-[clamp(4.5rem,15vw,13rem)] font-semibold tracking-[-0.055em] leading-[0.92]">
                        {t('profile.given')}<span className="text-accent">.</span>
                    </span>
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12 pt-10 md:pt-14">

                    {/* CỘT TRÁI: VAI TRÒ & TRÍCH DẪN */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="lg:col-span-3 flex flex-col gap-10"
                    >
                        <div>
                            <p className="label mb-3">{t('hero.now')}</p>
                            <p className="text-lg font-medium min-h-[1.75rem]">
                                {typewriterTexts.length > 0 && <Typewriter texts={typewriterTexts} />}
                            </p>
                        </div>
                        <blockquote className="border-l-2 border-accent pl-4 italic text-muted leading-relaxed">
                            {t('hero.quote')}
                        </blockquote>
                    </motion.div>

                    {/* CỘT GIỮA: ẢNH */}
                    <motion.figure
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.25 }}
                        className="lg:col-span-5 lg:order-last"
                    >
                        <div className="bg-panel aspect-square overflow-hidden">
                            <img
                                src={heroImage}
                                alt={t('profile.full')}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <figcaption className="flex justify-between gap-4 pt-3 text-xs text-muted">
                            <span>Fig. 01</span>
                            <span className="italic">{t('hero.caption')}</span>
                        </figcaption>
                    </motion.figure>

                    {/* CỘT PHẢI: GIỚI THIỆU & LIÊN KẾT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-4 flex flex-col"
                    >
                        <p className="text-lg md:text-xl leading-[1.65] text-ink first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.9] first-letter:text-accent">
                            {t('hero.desc')}
                        </p>

                        <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10">
                            <button onClick={() => navigate('/cv')} className="text-link">
                                {t('hero.download_cv')} <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                            </button>
                            <a href="#projects" className="text-link">
                                {t('hero.view_projects')} <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
                            </a>
                        </div>

                        <div className="mt-auto pt-12">
                            <p className="label mb-3">{t('hero.follow')}</p>
                            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                                {SOCIAL_LINKS.map((social) => (
                                    <li key={social.label}>
                                        <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                                            {social.label} ↗
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
