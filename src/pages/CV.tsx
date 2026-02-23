import React from 'react';
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft, Printer } from "lucide-react";
import { useTranslation } from 'react-i18next';

// Component Tiêu đề khối cho cột phải (Học vấn, Kỹ năng, Thành tựu...)
const RightColumnSectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#4a4542] text-white text-center py-2 px-4 font-bold text-lg tracking-widest uppercase mb-6 shadow-sm">
        {children}
    </div>
);

export default function CV() {
    const { t } = useTranslation();

    // Lấy dữ liệu từ file i18n
    const experiencesData = (t('experience.list', { returnObjects: true }) as Array<{ year: string, company: string, role: string, description: string }>) || [];
    const achievementsData = (t('academic.achievements.list', { returnObjects: true }) as string[]) || [];

    // Đồng bộ danh sách Kỹ năng dùng chung với trang chủ
    const skillsData = (t('skills.list', { returnObjects: true }) as Array<{ title: string, items: string[] }>) || [];

    return (
        <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 py-8 px-4 md:py-12 font-sans relative transition-colors duration-300 print:bg-white print:py-0 print:px-0">

            {/* Top Bar: Nút Quay lại & Nút Tải PDF (Ẩn khi in) */}
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

            {/* Vùng chứa CV bản A4 (Luôn là nền trắng để giống tờ giấy in) */}
            <div className="w-full max-w-[210mm] mx-auto bg-white shadow-2xl overflow-hidden flex flex-col relative text-neutral-900 print:shadow-none print:w-[210mm] print:m-0">

                {/* Background Dots Overlay (Góc trái trên) */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] bg-size-[16px_16px] opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

                {/* --- HEADER LÀM LẠI THEO DESIGN --- */}
                <header className="relative flex flex-col md:flex-row justify-between items-end p-8 md:p-12 md:pb-8 border-b-4 border-cv-dark z-10 overflow-hidden min-h-80">

                    {/* Vùng chứa Ảnh ngang (absolute để nằm dưới chữ) */}
                    <div className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0">
                        {/* Họa tiết chấm bi pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] bg-size-[12px_12px] opacity-40"></div>

                        {/* Box Ảnh chữ nhật */}
                        <div className="absolute top-8 bottom-8 right-8 left-8 md:left-12 overflow-hidden shadow-xl rounded-sm bg-neutral-200">
                            <img
                                src="https://jbzoqomwrkyhcstjaiby.supabase.co/storage/v1/object/public/Gendemy/paodabeat/Meiji%20Jingu%201.png"
                                alt="Phùng Trần Gia Bảo"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Vùng Text (z-index cao hơn ảnh, lấn sang phải) */}
                    <div className="text-center md:text-left mb-20 md:mb-0 w-full relative z-20 pointer-events-none flex flex-col justify-end">
                        <div className="inline-block bg-white/70 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-lg w-fit">
                            <h2 className="text-primary font-black text-xl tracking-widest leading-none mb-2 pointer-events-auto">
                                CURRICULUM <br /> VITAE
                            </h2>
                            <div className="w-16 h-2 bg-primary mb-6 mt-4 pointer-events-auto"></div>

                            {/* Họ đệm nhỏ hơn */}
                            <h1 className="text-3xl md:text-4xl font-black leading-none text-cv-dark tracking-tighter drop-shadow-sm pointer-events-auto">
                                PHÙNG TRẦN
                            </h1>

                            {/* Tên to nổi bật, lấn chèn lên ảnh */}
                            <h1 className="text-7xl md:text-[5rem] font-black leading-none text-primary tracking-tighter mt-1 drop-shadow-md pointer-events-auto">
                                GIA BẢO
                            </h1>
                        </div>
                    </div>

                    {/* Social Icons góc dưới ảnh */}
                    <div className="absolute bottom-12 right-12 z-30 flex gap-2 print:hidden">
                        <a href="https://www.facebook.com/phungtrangiabao/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#222] flex items-center justify-center text-white hover:bg-primary hover:-translate-y-1 transition-all rounded-sm shadow-md"><i className="fa-brands fa-facebook-f text-lg"></i></a>
                        <a href="https://www.linkedin.com/in/paodabeat/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#222] flex items-center justify-center text-white hover:bg-primary hover:-translate-y-1 transition-all rounded-sm shadow-md"><i className="fa-brands fa-linkedin-in text-lg"></i></a>
                        <a href="https://www.youtube.com/@paodabeat6731" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#222] flex items-center justify-center text-white hover:bg-primary hover:-translate-y-1 transition-all rounded-sm shadow-md"><i className="fa-brands fa-youtube text-lg"></i></a>
                        <a href="https://www.tiktok.com/@paodabeat" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#222] flex items-center justify-center text-white hover:bg-primary hover:-translate-y-1 transition-all rounded-sm shadow-md"><i className="fa-brands fa-tiktok text-lg"></i></a>
                    </div>
                </header>

                {/* --- BODY --- */}
                <div className="flex flex-col md:flex-row relative z-10">

                    {/* CỘT TRÁI */}
                    <div className="w-full md:w-[58%] p-8 md:p-10 bg-white">
                        <section className="mb-10">
                            <h2 className="text-xl font-black text-cv-dark mb-6 tracking-widest uppercase">{t('cv.contact')}</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-cv-dark flex items-center justify-center text-white group-hover:bg-primary transition-all">
                                        <i className="fa-solid fa-phone text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-cv-dark">{t('cv.phone')}</p>
                                        <p className="text-sm text-gray-700">0327842261</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-cv-dark flex items-center justify-center text-white group-hover:bg-primary transition-all">
                                        <i className="fa-solid fa-house text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-cv-dark">{t('cv.address')}</p>
                                        <p className="text-sm text-gray-700">{t('cv.address_detail')}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-cv-dark flex items-center justify-center text-white group-hover:bg-primary transition-all">
                                        <i className="fa-solid fa-envelope text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-cv-dark">{t('cv.email')}</p>
                                        <p className="text-sm text-gray-700">giabao.hust@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-gray-200 mb-10"></div>

                        <section>
                            <h2 className="text-xl font-black text-cv-dark mb-8 tracking-widest uppercase">{t('experience.title')}</h2>
                            <div className="relative pl-6 space-y-8">
                                <div className="absolute left-2.75 top-2 bottom-0 w-0.5 bg-gray-300"></div>

                                {experiencesData.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="relative group cursor-default"
                                    >
                                        <div className="absolute -left-5 top-1.5 w-4 h-4 rounded-full bg-cv-dark group-hover:bg-primary transition-colors duration-300 print:bg-cv-dark"></div>
                                        <div>
                                            <h3 className="font-bold text-lg text-cv-dark leading-tight mb-1">{exp.company}</h3>
                                            <p className="text-primary font-bold text-sm mb-2">
                                                {exp.role} {exp.year ? `(${exp.year})` : ""}
                                            </p>
                                            <ul className="text-sm text-gray-700 leading-relaxed space-y-1 whitespace-pre-line">
                                                {exp.description}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* CỘT PHẢI */}
                    <div className="w-full md:w-[42%] bg-primary text-white p-8 md:p-10 flex flex-col gap-8 print:bg-primary print:text-white">
                        <section>
                            <RightColumnSectionTitle>{t('academic.education.title')}</RightColumnSectionTitle>
                            <div className="text-center md:text-left">
                                <p className="font-bold text-lg mb-1">{t('academic.education.university')}</p>
                                <p className="text-sm font-medium opacity-90">{t('cv.education_time')}</p>
                            </div>
                        </section>

                        <section>
                            <RightColumnSectionTitle>{t('skills.title')}</RightColumnSectionTitle>
                            <div className="relative pl-6 space-y-5">
                                <div className="absolute left-2.75 top-2 bottom-2 w-0.5 bg-white/50"></div>

                                {/* Loop tự động lấy Kỹ năng từ file JSON (đồng bộ Website) */}
                                {skillsData.map((skillGroup, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute -left-4.5 top-1 w-3 h-3 rounded-full border-2 border-white bg-primary print:bg-primary print:border-white"></div>
                                        <p className="font-bold text-sm mb-1">{skillGroup.title}</p>
                                        <p className="text-xs opacity-90 bg-white/10 print:bg-white/20 print:text-white inline-block px-2 py-1 rounded">
                                            {skillGroup.items.join(', ')}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <RightColumnSectionTitle>{t('academic.achievements.title')}</RightColumnSectionTitle>
                            <ul className="space-y-3 text-sm">
                                {achievementsData.map((achievement, index) => (
                                    <li key={index} className="flex gap-2 items-start">
                                        <span className="mt-0.5 text-xs">●</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <RightColumnSectionTitle>{t('cv.foreign_language')}</RightColumnSectionTitle>
                            <div className="space-y-2 text-sm pl-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    <span className="font-bold w-36">{t('cv.english')}</span>
                                    <span className="font-black bg-white text-primary px-2 py-0.5 rounded text-xs">C1</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    <span className="font-bold w-36">{t('cv.chinese')}</span>
                                    <span className="font-black bg-white text-primary px-2 py-0.5 rounded text-xs">B1</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}