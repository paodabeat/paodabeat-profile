/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage, LanguageCode } from '../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();
    const { currentLanguage, setLanguage } = useLanguage();
    const { t } = useTranslation();
    const langMenuRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { id: 'hero', label: t('nav.hero') },
        { id: 'experience', label: t('nav.experience') },
        { id: 'projects', label: t('nav.projects') },
        { id: 'skills', label: t('nav.skills') },
        { id: 'academic', label: t('nav.academic') },
    ];

    const languages: { code: LanguageCode; label: string }[] = [
        { code: 'vi', label: 'VN' },
        { code: 'en', label: 'EN' },
        { code: 'zh', label: 'ZH' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;
            sections.forEach(section => {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    // Đóng dropdown ngôn ngữ khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (code: LanguageCode) => {
        setLanguage(code);
        setIsLangMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-black tracking-widest text-neutral-900 dark:text-white cursor-pointer"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    PAODABEAT<span className="text-primary">.</span>
                </motion.div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${activeSection === item.id
                                ? 'text-primary'
                                : 'text-neutral-600 dark:text-white/60'
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}

                    <div className="flex items-center gap-3 border-l border-neutral-300 dark:border-white/20 pl-6 ml-2">
                        {/* LANGUAGE SELECTOR */}
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center gap-1 p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors"
                            >
                                <Globe className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase w-5">{currentLanguage}</span>
                            </button>

                            <AnimatePresence>
                                {isLangMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-20 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-xl border border-black/5 dark:border-white/10 overflow-hidden"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageChange(lang.code)}
                                                className={`w-full text-center py-2 text-sm font-bold transition-colors ${currentLanguage === lang.code
                                                    ? 'bg-primary text-white'
                                                    : 'text-neutral-600 dark:text-white/80 hover:bg-neutral-100 dark:hover:bg-white/5'
                                                    }`}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* TOGGLE THEME BUTTON */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* MOBILE BUTTONS */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => {
                            const nextIndex = (languages.findIndex(l => l.code === currentLanguage) + 1) % languages.length;
                            handleLanguageChange(languages[nextIndex].code);
                        }}
                        className="flex items-center gap-1 p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-white/80 transition-colors"
                    >
                        <span className="text-xs font-bold uppercase">{currentLanguage}</span>
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <button
                        className="text-neutral-900 dark:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-[#0a0a0a] border-t border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-300"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-lg font-bold uppercase tracking-wider ${activeSection === item.id
                                        ? 'text-primary'
                                        : 'text-neutral-600 dark:text-white/60'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;