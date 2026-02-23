import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <section className="py-12 border-t border-black/10 dark:border-white/10 text-center relative overflow-hidden bg-neutral-900 dark:bg-black transition-colors duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-primary/10 blur-[50px] pointer-events-none" />
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-white">
                <h2 className="text-3xl font-bold mb-8">{t('footer.connect')}</h2>
                <div className="flex flex-wrap justify-center gap-8 mb-8 text-white/80">
                    <span className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-primary" /> 0327842261
                    </span>
                    <span className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-primary" /> giabao.hust@gmail.com
                    </span>
                    <span className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" /> {t('footer.address')}
                    </span>
                </div>
                <p className="text-white/40 text-sm">
                    {t('footer.copyright', { year: currentYear })}
                </p>
            </div>
        </section>
    );
};

export default Footer;