import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage, LanguageCode } from '../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const SECTION_IDS = ['hero', 'experience', 'projects', 'skills', 'academic'];

const languages: { code: LanguageCode; label: string }[] = [
    { code: 'vi', label: 'VN' },
    { code: 'en', label: 'EN' },
    { code: 'zh', label: 'ZH' },
];

// Bộ chọn ngôn ngữ dạng chữ: VN / EN / ZH
export const LanguageSwitch = ({ current, onChange }: { current: LanguageCode; onChange: (code: LanguageCode) => void }) => (
    <div className="flex items-center gap-2 text-xs font-medium tracking-[0.12em]">
        {languages.map((lang, i) => (
            <React.Fragment key={lang.code}>
                {i > 0 && <span className="text-muted/50">/</span>}
                <button
                    onClick={() => onChange(lang.code)}
                    aria-pressed={current === lang.code}
                    className={`transition-colors ${current === lang.code ? 'text-ink underline underline-offset-4 decoration-accent' : 'text-muted hover:text-ink'}`}
                >
                    {lang.label}
                </button>
            </React.Fragment>
        ))}
    </div>
);

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();
    const { currentLanguage, setLanguage } = useLanguage();
    const { t } = useTranslation();

    const navItems = SECTION_IDS.map((id) => ({ id, label: t(`nav.${id}`) }));

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120;
            SECTION_IDS.forEach((id) => {
                const section = document.getElementById(id);
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(id);
                }
            });
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Khoá cuộn trang khi mở menu mobile
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    const ThemeButton = (
        <button
            onClick={toggleTheme}
            className="text-muted hover:text-ink transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Sun className="w-4 h-4" strokeWidth={1.5} /> : <Moon className="w-4 h-4" strokeWidth={1.5} />}
        </button>
    );

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-paper border-b border-rule transition-colors duration-300">
            <div className="max-w-[90rem] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">

                {/* LOGO */}
                <a href="#hero" className="text-[13px] font-semibold tracking-[0.22em] uppercase">
                    Paodabeat
                </a>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-7">
                        {navItems.map((item, i) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`group flex items-baseline gap-1.5 text-[13px] transition-colors ${activeSection === item.id ? 'text-ink' : 'text-muted hover:text-ink'}`}
                                >
                                    <span className="text-[10px] tabular-nums text-muted">0{i + 1}</span>
                                    <span className={`border-b pb-0.5 ${activeSection === item.id ? 'border-accent' : 'border-transparent'}`}>
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-6 border-l border-rule pl-6">
                        <LanguageSwitch current={currentLanguage} onChange={setLanguage} />
                        {ThemeButton}
                    </div>
                </div>

                {/* MOBILE BUTTONS */}
                <div className="flex items-center gap-5 md:hidden">
                    {ThemeButton}
                    <button
                        className="text-[13px] font-medium tracking-[0.12em] uppercase"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? t('common.close') : 'Menu'}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU: danh mục toàn màn hình, đánh số như mục lục tạp chí */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper px-5 pt-6 pb-10 flex flex-col overflow-y-auto"
                    >
                        <ul className="border-t border-rule">
                            {navItems.map((item, i) => (
                                <li key={item.id} className="border-b border-rule">
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-baseline gap-4 py-4 text-3xl font-medium tracking-tight ${activeSection === item.id ? 'text-accent' : 'text-ink'}`}
                                    >
                                        <span className="label tabular-nums">0{i + 1}</span>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto pt-8">
                            <LanguageSwitch current={currentLanguage} onChange={setLanguage} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
