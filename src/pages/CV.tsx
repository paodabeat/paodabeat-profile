import React from 'react';
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft, Printer } from "lucide-react";
import { useTranslation } from 'react-i18next';

// Component Tiêu đề khối cho cột phải
const RightColumnSectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#4a4542] text-white text-center py-1.5 px-4 font-bold text-base tracking-widest uppercase mb-4 shadow-sm">
        {children}
    </div>
);

export default function CV() {
    const { t } = useTranslation();

    // Lấy dữ liệu đầy đủ từ i18n
    const experiencesData = (t('experience.list', { returnObjects: true }) as Array<{ year: string, company: string, role: string, description: string }>) || [];
    const achievementsData = (t('academic.achievements.list', { returnObjects: true }) as string[]) || [];
    const researchData = (t('academic.research.list', { returnObjects: true }) as Array<{ title: string, journal: string }>) || [];
    const skillsData = (t('skills.list', { returnObjects: true }) as Array<{ title: string, items: string[] }>) || [];

    return (
        <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 py-8 px-4 md:py-12 font-sans relative transition-colors duration-300 print:!bg-white print:dark:bg-white print:py-0 print:px-0 print:min-h-0">

            {/* Top Bar: Nút Quay lại & Nút Tải PDF */}
            <div className="w-full max-w-[210mm] mx-auto mb-4 flex items-center justify-between print:hidden">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1a1a1a] text-cv-dark dark:text-white font-bold rounded-lg shadow hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300"
                >
                    <ChevronLeft className="w-5 h-5" />
                    {t('cv.back')}
                </Link>

                <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
                >
                    <Printer className="w-5 h-5" />
                    {t('cv.download_pdf')}
                </button>
            </div>

            {/* Vùng chứa CV bản A4 */}
            <div
                className="w-full max-w-[210mm] mx-auto bg-white shadow-2xl overflow-hidden flex flex-col relative text-neutral-900 print:shadow-none print:w-[210mm] print:m-0"
                style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}
            >

                {/* Background Dots */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] bg-size-[16px_16px] opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

                {/* --- HEADER --- */}
                <header className="relative flex flex-col md:flex-row justify-between items-end p-6 md:p-10 border-b-4 border-cv-dark z-10 overflow-hidden min-h-64 print:flex-row print:min-h-55 print:p-8">

                    {/* Vùng chứa Ảnh */}
                    <div className="absolute top-0 right-0 w-full md:w-[60%] h-full z-0 print:w-[60%]">
                        <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] bg-size-[12px_12px] opacity-40"></div>
                        <div className="absolute top-6 bottom-6 right-6 left-6 md:left-10 print:left-10 overflow-hidden shadow-xl rounded-sm bg-neutral-200 print:shadow-md">
                            <img
                                src="https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat/avarta.png"
                                alt="Phùng Trần Gia Bảo"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Vùng Text */}
                    <div className="text-center md:text-left mb-16 md:mb-0 print:mb-0 w-full relative z-20 pointer-events-none flex flex-col justify-end print:text-left">
                        <div className="inline-block bg-white/70 md:bg-transparent print:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 print:p-0 rounded-lg w-fit">
                            <h2 className="text-primary font-black text-lg tracking-widest leading-none mb-1.5 pointer-events-auto">
                                CURRICULUM <br /> VITAE
                            </h2>
                            <div className="w-12 h-1.5 bg-primary mb-4 mt-2 pointer-events-auto"></div>

                            <h1 className="text-2xl md:text-3xl font-black leading-none text-cv-dark tracking-tighter drop-shadow-sm pointer-events-auto print:text-3xl">
                                PHÙNG TRẦN
                            </h1>

                            <h1 className="text-6xl md:text-[4.5rem] font-black leading-none text-primary tracking-tighter mt-1 drop-shadow-md pointer-events-auto print:text-[4.5rem]">
                                GIA BẢO
                            </h1>
                        </div>
                    </div>

                    {/* Social Icons (Đã bỏ print:hidden để hiển thị trên PDF và có thể click) */}
                    <div className="absolute bottom-8 right-8 z-30 flex gap-2">
                        <a href="https://www.facebook.com/phungtrangiabao/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#222] flex items-center justify-center text-white hover:bg-primary transition-all rounded-sm shadow-md print:bg-[#333] print:text-white print:shadow-none"><i className="fa-brands fa-facebook-f text-sm"></i></a>
                        <a href="https://www.linkedin.com/in/paodabeat/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#222] flex items-center justify-center text-white hover:bg-primary transition-all rounded-sm shadow-md print:bg-[#333] print:text-white print:shadow-none"><i className="fa-brands fa-linkedin-in text-sm"></i></a>
                        <a href="https://www.youtube.com/@paodabeat6731" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#222] flex items-center justify-center text-white hover:bg-primary transition-all rounded-sm shadow-md print:bg-[#333] print:text-white print:shadow-none"><i className="fa-brands fa-youtube text-sm"></i></a>
                        <a href="https://www.tiktok.com/@paodabeat" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#222] flex items-center justify-center text-white hover:bg-primary transition-all rounded-sm shadow-md print:bg-[#333] print:text-white print:shadow-none"><i className="fa-brands fa-tiktok text-sm"></i></a>
                    </div>
                </header>

                {/* --- BODY --- */}
                <div className="flex flex-col md:flex-row relative z-10 print:flex-row grow">

                    {/* CỘT TRÁI */}
                    <div className="w-full md:w-[56%] p-6 md:p-8 bg-white print:w-[56%] print:p-6 print:pr-5 flex flex-col">
                        <section className="mb-6 print:mb-5">
                            <h2 className="text-lg font-black text-cv-dark mb-3 tracking-widest uppercase">{t('cv.contact')}</h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cv-dark flex items-center justify-center text-white print:bg-cv-dark print:text-white shrink-0">
                                        <i className="fa-solid fa-phone text-[10px]"></i>
                                    </div>
                                    <p className="text-xs font-bold text-cv-dark min-w-22.5">{t('cv.phone')}</p>
                                    <p className="text-xs text-gray-700">0327842261</p>
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
                                    <p className="text-xs text-gray-700">giabao.hust@gmail.com</p>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-gray-200 mb-5 print:mb-4"></div>

                        <section className="grow">
                            <h2 className="text-lg font-black text-cv-dark mb-5 tracking-widest uppercase">{t('experience.title')}</h2>
                            {/* Trục Timeline: Padding left 28px (pl-7) */}
                            <div className="relative pl-7 space-y-4 print:space-y-3.5">
                                {/* Đường thẳng dọc: left 6px (Tâm đường thẳng sẽ là 6 + 2/2 = 7px) */}
                                <div className="absolute left-[6px] top-1.5 bottom-0 w-0.5 bg-gray-300"></div>

                                {experiencesData.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="relative group cursor-default"
                                    >
                                        {/* Chấm tròn: -left-7 (kích thước 14px, Tâm chấm tròn sẽ là 0 + 14/2 = 7px => Thẳng hàng tuyệt đối) */}
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
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* CỘT PHẢI */}
                    <div className="w-full md:w-[44%] bg-primary text-white p-6 md:p-8 flex flex-col gap-5 print:bg-primary print:text-white print:w-[44%] print:p-6 print:pl-5">

                        {/* HỌC VẤN & NGOẠI NGỮ GỘP CHUNG */}
                        <section>
                            <RightColumnSectionTitle>{t('academic.education.title')}</RightColumnSectionTitle>
                            <div className="text-left mb-3">
                                <p className="font-bold text-[15px] mb-0.5 leading-tight">{t('academic.education.degree')}</p>
                                <p className="text-xs font-medium opacity-90">{t('academic.education.university')}</p>
                            </div>
                            {/* Badges Ngoại ngữ */}
                            <div className="flex gap-2">
                                <span className="bg-white text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm">
                                    {t('cv.english')} C1
                                </span>
                                <span className="bg-white text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm">
                                    {t('cv.chinese')} B1
                                </span>
                            </div>
                        </section>

                        {/* KỸ NĂNG */}
                        <section>
                            <RightColumnSectionTitle>{t('skills.title')}</RightColumnSectionTitle>
                            <div className="relative pl-5 space-y-3">
                                <div className="absolute left-2.25 top-1.5 bottom-1.5 w-0.5 bg-white/40"></div>

                                {skillsData.map((skillGroup, index) => {
                                    const isLastItem = index === skillsData.length - 1;

                                    return (
                                        <div key={index} className="relative">
                                            <div className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full border-2 border-white bg-primary print:border-white"></div>
                                            <p className="font-bold text-[12px] mb-0.5">{skillGroup.title}</p>
                                            <div className="text-[10px] opacity-90 leading-tight">
                                                {isLastItem ? (
                                                    // Nếu là item cuối (Kỹ năng đặc thù), tách thành từng block riêng
                                                    skillGroup.items.map((item, idx) => (
                                                        <span key={idx} className="block mb-0.5">
                                                            • {item}
                                                        </span>
                                                    ))
                                                ) : (
                                                    // Nếu không phải item cuối, in ra chuỗi cách nhau bởi dấu phẩy và thêm ', ...'
                                                    <span>{skillGroup.items.join(', ')}, ...</span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* THÀNH TỰU */}
                        <section>
                            <RightColumnSectionTitle>{t('academic.achievements.title')}</RightColumnSectionTitle>
                            <ul className="space-y-1.5 text-[11px] leading-tight opacity-95">
                                {achievementsData.map((achievement, index) => (
                                    <li key={index} className="flex gap-1.5 items-start">
                                        <span className="mt-0.5 text-[8px]">●</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* NGHIÊN CỨU KHOA HỌC */}
                        <section>
                            <RightColumnSectionTitle>{t('academic.research.title')}</RightColumnSectionTitle>
                            <div className="space-y-2">
                                {researchData.slice(0, 3).map((research, index) => (
                                    <div key={index} className="text-[11px] leading-tight">
                                        <p className="font-bold opacity-100 line-clamp-2">"{research.title}"</p>
                                        <p className="italic opacity-80 mt-0.5">- {research.journal}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* MÃ QR CODE */}
                        <section className="mt-auto pt-2 flex flex-col items-center justify-center text-center">
                            <div className="w-28 h-28 rounded-xl overflow-hidden shadow-md mb-2">
                                <img
                                    src="https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat/qrcode.png"
                                    alt="QR Code"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-medium opacity-90 max-w-35 italic leading-tight">
                                {t('cv.qr_text')}
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}