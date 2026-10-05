import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowUp } from 'lucide-react';

// Nút cuộn về đầu trang: chỉ hiện khi đã cuộn quá một màn hình
export default function ScrollToTop() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > window.innerHeight * 0.8);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label={t('common.back_to_top')}
                    title={t('common.back_to_top')}
                    className="group fixed right-5 bottom-5 md:right-8 md:bottom-8 z-40 w-12 h-12 flex items-center justify-center bg-ink text-paper border border-ink hover:bg-accent hover:border-accent hover:text-white transition-colors print:hidden"
                >
                    <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" strokeWidth={1.5} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
