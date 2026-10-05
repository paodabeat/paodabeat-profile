import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { SOCIAL_LINKS } from './HeroSection';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const contacts = [
        { label: t('footer.phone_label'), value: '+84 327842261', href: 'tel:+84327842261' },
        { label: t('footer.email_label'), value: 'giabao.hust@gmail.com', href: 'mailto:giabao.hust@gmail.com' },
        { label: t('footer.address_label'), value: t('footer.address') }
    ];

    return (
        <footer className="bg-ink text-paper dark:bg-panel dark:text-ink px-5 md:px-10 pt-20 md:pt-28 pb-8 transition-colors duration-300">
            <div className="max-w-[90rem] mx-auto">
                <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.04em] max-w-5xl">
                    {t('footer.connect')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-8 mt-16 md:mt-24 border-t border-paper/20 dark:border-rule pt-8">
                    {contacts.map((item) => (
                        <div key={item.label}>
                            <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-paper/50 dark:text-muted mb-2">{item.label}</p>
                            {item.href
                                ? <a href={item.href} className="text-lg hover:underline underline-offset-4">{item.value}</a>
                                : <p className="text-lg">{item.value}</p>}
                        </div>
                    ))}
                    <div>
                        <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-paper/50 dark:text-muted mb-2">{t('hero.follow')}</p>
                        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-lg">
                            {SOCIAL_LINKS.map((social) => (
                                <li key={social.label}>
                                    <a href={social.href} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">{social.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 mt-20 pt-6 border-t border-paper/20 dark:border-rule text-xs text-paper/50 dark:text-muted">
                    <p>{t('footer.copyright', { year: currentYear })}</p>
                    <a href="#hero" className="flex items-center gap-2 hover:text-paper dark:hover:text-ink transition-colors uppercase tracking-[0.16em]">
                        {t('common.back_to_top')} <ArrowUp className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
