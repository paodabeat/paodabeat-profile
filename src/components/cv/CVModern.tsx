import React from 'react';
import { useTranslation } from 'react-i18next';

import coverImage from '../../../assets/cover.webp';
import qrCodeImage from '../../../assets/qrcode.webp';
import { CV_CONTACT, useCvData } from './cvData';

// Mẫu CV "Hiện đại": header ảnh lớn + hai cột (trái trắng / phải nền xanh).

const RightColumnSectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#4a4542] text-white text-center py-1.5 px-4 font-bold text-base tracking-widest uppercase mb-4 shadow-sm">
        {children}
    </div>
);

export default function CVModern() {
    const { t } = useTranslation();
    const { experiences, achievements, research, skills } = useCvData();

    return (
        <>
            {/* Background Dots */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] bg-size-[16px_16px] opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

            {/* --- HEADER --- */}
            <header className="relative flex flex-row justify-between items-end p-10 border-b-4 border-cv-dark z-10 overflow-hidden min-h-64 print:min-h-55 print:p-8 print:overflow-visible">

                {/* Vùng chứa Ảnh */}
                <div className="absolute top-0 right-0 w-[60%] h-full z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] bg-size-[12px_12px] opacity-40"></div>
                    <div className="absolute top-6 bottom-6 right-6 left-10 overflow-hidden shadow-xl rounded-sm bg-neutral-200 print:shadow-md">
                        <img
                            src={coverImage}
                            alt={t('profile.full')}
                            className="w-full h-full object-cover"
                            crossOrigin="anonymous"
                        />
                    </div>
                </div>

                {/* Vùng Text */}
                <div className="text-left mb-0 w-full relative z-20 pointer-events-none flex flex-col justify-end">
                    <div className="inline-block bg-transparent p-0 print:py-2 print:pr-2 rounded-lg w-fit">
                        <h2 className="text-primary font-black text-lg tracking-widest leading-none print:leading-tight mb-1.5 pointer-events-auto">
                            CURRICULUM <br /> VITAE
                        </h2>
                        <div className="w-12 h-1.5 bg-primary mb-4 mt-2 pointer-events-auto"></div>

                        <h1 className="text-3xl font-black leading-none print:leading-tight text-cv-dark tracking-tighter drop-shadow-sm pointer-events-auto">
                            {t('profile.family').toUpperCase()}
                        </h1>

                        <h1 className="text-[4.5rem] font-black leading-none print:leading-normal text-primary tracking-tighter mt-1 drop-shadow-md pointer-events-auto print:pb-2 print:pt-1">
                            {t('profile.given').toUpperCase()}
                        </h1>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8 z-30 flex gap-2">
                    <a href="https://www.facebook.com/phungtrangiabao/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#222] flex items-center justify-center text-white hover:bg-primary transition-all rounded-sm shadow-md print:bg-[#333] print:text-white print:shadow-none"><i className="fa-brands fa-facebook-f text-sm"></i></a>
                    <a href="https://www.linkedin.com/in/paodabeat/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#222] flex items-center justify-center text-white hover:bg-primary transition-all rounded-sm shadow-md print:bg-[#333] print:text-white print:shadow-none"><i className="fa-brands fa-linkedin-in text-sm"></i></a>
                    <a href="https://www.youtube.com/@paodabeat6731" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#222] flex items-center justify-center text-white hover:bg-primary transition-all rounded-sm shadow-md print:bg-[#333] print:text-white print:shadow-none"><i className="fa-brands fa-youtube text-sm"></i></a>
                    <a href="https://www.tiktok.com/@paodabeat" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#222] flex items-center justify-center text-white hover:bg-primary transition-all rounded-sm shadow-md print:bg-[#333] print:text-white print:shadow-none"><i className="fa-brands fa-tiktok text-sm"></i></a>
                </div>
            </header>

            {/* --- BODY --- */}
            <div className="flex flex-row relative z-10 grow">

                {/* CỘT TRÁI */}
                <div className="w-[56%] p-8 bg-white print:p-6 print:pr-5 flex flex-col">
                    <section className="mb-6 print:mb-5">
                        <h2 className="text-lg font-black text-cv-dark mb-3 tracking-widest uppercase">{t('cv.contact')}</h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-cv-dark flex items-center justify-center text-white print:bg-cv-dark print:text-white shrink-0">
                                    <i className="fa-solid fa-phone text-[10px]"></i>
                                </div>
                                <p className="text-xs font-bold text-cv-dark min-w-22.5">{t('cv.phone')}</p>
                                <p className="text-xs text-gray-700">{CV_CONTACT.phone}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-cv-dark flex items-center justify-center text-white print:bg-cv-dark print:text-white shrink-0">
                                    <i className="fa-solid fa-house text-[10px]"></i>
                                </div>
                                <p className="text-xs font-bold text-cv-dark min-w-22.5">{t('cv.address')}</p>
                                <p className="text-xs text-gray-700 leading-tight">{t('cv.address_detail')}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-cv-dark flex items-center justify-center text-white print:bg-cv-dark print:text-white shrink-0">
                                    <i className="fa-solid fa-envelope text-[10px]"></i>
                                </div>
                                <p className="text-xs font-bold text-cv-dark min-w-22.5">{t('cv.email')}</p>
                                <p className="text-xs text-gray-700">{CV_CONTACT.email}</p>
                            </div>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-200 mb-5 print:mb-4"></div>

                    <section className="grow">
                        <h2 className="text-lg font-black text-cv-dark mb-5 tracking-widest uppercase">{t('experience.title')}</h2>
                        <div className="relative pl-7 space-y-4 print:space-y-3.5">
                            <div className="absolute left-1.5 top-1.5 bottom-0 w-0.5 bg-gray-300"></div>

                            {experiences.map((exp, index) => (
                                <div key={index} className="relative group cursor-default print:break-inside-avoid">
                                    <div className="absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full bg-cv-dark print:bg-cv-dark"></div>
                                    <div>
                                        <h3 className="font-bold text-[13px] text-cv-dark leading-tight mb-0.5">{exp.company}</h3>
                                        <p className="text-primary font-bold text-[11px] mb-1">
                                            {exp.role} {exp.year ? `(${exp.year})` : ""}
                                        </p>
                                        <p className="text-[11px] text-gray-700 leading-snug whitespace-pre-line">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* CỘT PHẢI */}
                <div className="w-[44%] bg-primary text-white p-8 flex flex-col gap-5 print:bg-primary print:text-white print:p-6 print:pl-5">

                    <section>
                        <RightColumnSectionTitle>{t('academic.education.title')}</RightColumnSectionTitle>
                        <div className="text-left mb-3">
                            <p className="font-bold text-[15px] mb-0.5 leading-tight">{t('academic.education.degree')}</p>
                            <p className="text-xs font-medium opacity-90">{t('academic.education.university')}</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="bg-white text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm">
                                {t('cv.english')} B2
                            </span>
                            <span className="bg-white text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm">
                                {t('cv.chinese')} B1
                            </span>
                        </div>
                    </section>

                    <section>
                        <RightColumnSectionTitle>{t('skills.title')}</RightColumnSectionTitle>
                        <div className="relative pl-5 space-y-3">
                            <div className="absolute left-2.25 top-1.5 bottom-1.5 w-0.5 bg-white/40"></div>

                            {skills.map((skillGroup, index) => {
                                const isLastItem = index === skills.length - 1;
                                return (
                                    <div key={index} className="relative">
                                        <div className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full border-2 border-white bg-primary print:border-white"></div>
                                        <p className="font-bold text-[12px] mb-0.5">{skillGroup.title}</p>
                                        <div className="text-[10px] opacity-90 leading-tight">
                                            {isLastItem ? (
                                                skillGroup.items.map((item, idx) => (
                                                    <span key={idx} className="block mb-0.5">• {item}</span>
                                                ))
                                            ) : (
                                                <span>{skillGroup.items.join(', ')}, ...</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <section>
                        <RightColumnSectionTitle>{t('academic.achievements.title')}</RightColumnSectionTitle>
                        <ul className="space-y-1.5 text-[11px] leading-tight opacity-95">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="flex gap-1.5 items-start">
                                    <span className="mt-0.5 text-[8px]">●</span>
                                    <span>{achievement.title}{achievement.year ? ` (${achievement.year})` : ''}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <RightColumnSectionTitle>{t('academic.research.title')}</RightColumnSectionTitle>
                        <div className="space-y-2">
                            {research.slice(0, 3).map((item, index) => (
                                <div key={index} className="text-[11px] leading-tight">
                                    {item.url ? (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold opacity-100 line-clamp-2 hover:underline hover:text-white/80 transition-colors print:no-underline print:text-inherit"
                                        >
                                            "{item.title}"
                                        </a>
                                    ) : (
                                        <p className="font-bold opacity-100 line-clamp-2">"{item.title}"</p>
                                    )}
                                    <p className="italic opacity-80 mt-0.5">- {item.journal}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-auto pt-2 flex flex-col items-center justify-center text-center">
                        <a
                            href={CV_CONTACT.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-28 h-28 rounded-xl overflow-hidden shadow-md mb-2 hover:scale-105 transition-transform duration-300 print:hover:scale-100"
                        >
                            <img
                                src={qrCodeImage}
                                alt="QR Code"
                                className="w-full h-full object-cover"
                                crossOrigin="anonymous"
                            />
                        </a>
                        <p className="text-[11px] font-medium opacity-90 max-w-35 italic leading-tight">
                            {t('cv.qr_text')}
                        </p>
                    </section>

                </div>
            </div>
        </>
    );
}
