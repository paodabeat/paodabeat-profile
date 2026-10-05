import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, FileDown, Image as ImageIcon, Loader2, Sun, Moon } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { toPng } from 'html-to-image'; // Đã thay thế html2canvas bằng html-to-image
import { jsPDF } from 'jspdf';
import coverImage from '../../assets/cover.webp';
import qrCodeImage from '../../assets/qrcode.webp';
import { LanguageSwitch } from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

// Component Tiêu đề khối cho cột phải
const RightColumnSectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#4a4542] text-white text-center py-1.5 px-4 font-bold text-base tracking-widest uppercase mb-4 shadow-sm">
        {children}
    </div>
);

export default function CV() {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const { currentLanguage, setLanguage } = useLanguage();
    const cvRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    // Lấy dữ liệu đầy đủ từ i18n
    const experiencesData = (t('experience.list', { returnObjects: true }) as Array<{ year: string, company: string, role: string, description: string }>) || [];
    const achievementsData = ((t('academic.achievements.list', { returnObjects: true }) as Array<{ title: string, year: string, cv?: boolean }>) || []).filter((item) => item.cv);
    const researchData = (t('academic.research.list', { returnObjects: true }) as Array<{ title: string, journal: string, url?: string }>) || [];
    const skillsData = (t('skills.list', { returnObjects: true }) as Array<{ title: string, items: string[] }>) || [];

    // Chụp toàn bộ thẻ CV thành ảnh (dùng chung cho xuất PNG và PDF)
    const captureCv = async (pixelRatio: number) => {
        const node = cvRef.current;
        if (!node) return null;

        return await toPng(node, {
            cacheBust: true, // Xoá cache để luôn lấy ảnh mới nhất khi chụp
            backgroundColor: '#ffffff', // Ép nền trắng
            pixelRatio, // Thay cho scale của html2canvas để tăng độ nét
            // FIX: Ép cứng kích thước lúc chụp theo đúng thẻ div, bỏ qua viewport của trình duyệt
            width: node.offsetWidth,
            height: node.offsetHeight,
            style: {
                // FIX: Xoá margin (mx-auto) trên bản clone ảo lúc chụp để không bị lệch sang phải
                margin: '0',
                transform: 'none',
            }
        });
    };

    // Xuất ảnh PNG
    const handleDownloadImage = async () => {
        if (isExporting) return;
        setIsExporting(true);
        try {
            const dataUrl = await captureCv(2);
            if (!dataUrl) return;

            // Tạo thẻ a ẩn để tải file
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "Phung_Tran_Gia_Bao_CV.png";
            link.click();
        } catch (error) {
            console.error("Lỗi khi tạo ảnh CV:", error);
            alert("Có lỗi xảy ra khi tạo ảnh. Vui lòng thử lại!");
        } finally {
            setIsExporting(false);
        }
    };

    // Xuất PDF: tự dựng file thay vì dùng window.print() để CV nằm gọn trên MỘT trang, không bị ngắt trang
    const handleDownloadPdf = async () => {
        const node = cvRef.current;
        if (!node || isExporting) return;
        setIsExporting(true);
        try {
            const dataUrl = await captureCv(3); // ~288dpi cho chữ sắc nét khi in
            if (!dataUrl) return;

            // Khổ trang PDF: rộng đúng A4, cao đúng theo tỉ lệ thật của CV -> một trang liền mạch
            const pageWidth = 210;
            const pageHeight = (node.offsetHeight / node.offsetWidth) * pageWidth;

            const pdf = new jsPDF({
                orientation: pageHeight >= pageWidth ? 'portrait' : 'landscape',
                unit: 'mm',
                format: [pageWidth, pageHeight],
                compress: true
            });
            pdf.addImage(dataUrl, 'PNG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');

            // Ảnh chụp không giữ được link, nên phủ thêm vùng link thật lên đúng toạ độ từng thẻ <a>
            // (nút mạng xã hội, bài nghiên cứu khoa học, mã QR) để nhà tuyển dụng bấm mở được từ file PDF
            const cvRect = node.getBoundingClientRect();
            const pxToMm = pageWidth / cvRect.width;

            node.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((anchor) => {
                const url = anchor.href;
                if (!url || url.startsWith('javascript:')) return;

                const rect = anchor.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) return; // bỏ qua thẻ đang ẩn

                pdf.link(
                    (rect.left - cvRect.left) * pxToMm,
                    (rect.top - cvRect.top) * pxToMm,
                    rect.width * pxToMm,
                    rect.height * pxToMm,
                    { url }
                );
            });

            pdf.save("Phung_Tran_Gia_Bao_CV.pdf");
        } catch (error) {
            console.error("Lỗi khi tạo PDF CV:", error);
            alert("Có lỗi xảy ra khi tạo PDF. Vui lòng thử lại!");
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="min-h-screen bg-paper text-ink font-sans relative transition-colors duration-300 print:bg-white print:min-h-0">

            {/* Thanh điều hướng: cùng phong cách với trang Portfolio */}
            <header className="sticky top-0 z-40 bg-paper border-b border-rule print:hidden">
                <div className="max-w-[90rem] mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-6">
                    <Link to="/" className="flex items-center gap-2 text-[13px] text-muted hover:text-ink transition-colors">
                        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                        {t('cv.back')}
                    </Link>
                    <Link to="/" className="hidden md:block text-[13px] font-semibold tracking-[0.22em] uppercase">
                        Paodabeat
                    </Link>
                    <div className="flex items-center gap-6">
                        <LanguageSwitch current={currentLanguage} onChange={setLanguage} />
                        <button onClick={toggleTheme} className="text-muted hover:text-ink transition-colors" aria-label="Toggle Theme">
                            {theme === 'dark' ? <Sun className="w-4 h-4" strokeWidth={1.5} /> : <Moon className="w-4 h-4" strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </header>

            <main className="px-5 md:px-10 pt-10 md:pt-14 pb-20 print:p-0">
            {/* Tiêu đề trang & nút tải */}
            <div className="w-full max-w-[210mm] mx-auto mb-8 border-t border-ink pt-4 flex flex-wrap items-end justify-between gap-6 print:hidden">
                <div>
                    <p className="label mb-3">Curriculum Vitae</p>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-none">{t('profile.full')}</h1>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={handleDownloadImage}
                        disabled={isExporting}
                        className="h-11 px-4 inline-flex items-center gap-2 text-sm font-medium border border-ink hover:bg-ink hover:text-paper transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <ImageIcon className="w-4 h-4" strokeWidth={1.5} />
                        {t('cv.download_png')}
                    </button>

                    <button
                        onClick={handleDownloadPdf}
                        disabled={isExporting}
                        className="h-11 px-4 inline-flex items-center gap-2 text-sm font-medium bg-ink text-paper border border-ink hover:bg-accent hover:border-accent hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        {isExporting
                            ? <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.5} />
                            : <FileDown className="w-4 h-4" strokeWidth={1.5} />}
                        {t('cv.download_pdf')}
                    </button>
                </div>
            </div>

            {/* Khung viền mảnh bao ngoài tờ CV (nằm ngoài vùng chụp nên không lọt vào file PNG/PDF) */}
            <div className="w-full max-w-[210mm] mx-auto border border-rule print:border-0 print:max-w-none">
            {/* Vùng chứa CV - Đã gỡ print:min-h-[297mm] để CV rớt trang tự nhiên như ban đầu */}
            <div
                ref={cvRef}
                className="w-full bg-white overflow-hidden flex flex-col relative text-neutral-900 print:w-[210mm] print:m-0 print:overflow-visible"
                style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}
            >

                {/* Background Dots */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] bg-size-[16px_16px] opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

                {/* --- HEADER --- */}
                <header className="relative flex flex-col md:flex-row justify-between items-end p-6 md:p-10 border-b-4 border-cv-dark z-10 overflow-hidden min-h-64 print:flex-row print:min-h-55 print:p-8 print:overflow-visible">

                    {/* Vùng chứa Ảnh */}
                    <div className="absolute top-0 right-0 w-full md:w-[60%] h-full z-0 print:w-[60%]">
                        <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] bg-size-[12px_12px] opacity-40"></div>
                        <div className="absolute top-6 bottom-6 right-6 left-6 md:left-10 print:left-10 overflow-hidden shadow-xl rounded-sm bg-neutral-200 print:shadow-md">
                            <img
                                src={coverImage}
                                alt={t('profile.full')}
                                className="w-full h-full object-cover"
                                crossOrigin="anonymous"
                            />
                        </div>
                    </div>

                    {/* Vùng Text */}
                    <div className="text-center md:text-left mb-16 md:mb-0 print:mb-0 w-full relative z-20 pointer-events-none flex flex-col justify-end print:text-left">
                        <div className="inline-block bg-white/70 md:bg-transparent print:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 print:py-2 print:pr-2 rounded-lg w-fit">
                            <h2 className="text-primary font-black text-lg tracking-widest leading-none print:leading-tight mb-1.5 pointer-events-auto">
                                CURRICULUM <br /> VITAE
                            </h2>
                            <div className="w-12 h-1.5 bg-primary mb-4 mt-2 pointer-events-auto"></div>

                            <h1 className="text-2xl md:text-3xl font-black leading-none print:leading-tight text-cv-dark tracking-tighter drop-shadow-sm pointer-events-auto print:text-3xl">
                                {t('profile.family').toUpperCase()}
                            </h1>

                            <h1 className="text-6xl md:text-[4.5rem] font-black leading-none print:leading-normal text-primary tracking-tighter mt-1 drop-shadow-md pointer-events-auto print:text-[4.5rem] print:pb-2 print:pt-1">
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
                                    <p className="text-xs text-gray-700">+84 327842261</p>
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
                            <div className="relative pl-7 space-y-4 print:space-y-3.5">
                                <div className="absolute left-1.5 top-1.5 bottom-0 w-0.5 bg-gray-300"></div>

                                {experiencesData.map((exp, index) => (
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
                    <div className="w-full md:w-[44%] bg-primary text-white p-6 md:p-8 flex flex-col gap-5 print:bg-primary print:text-white print:w-[44%] print:p-6 print:pl-5">

                        <section>
                            <RightColumnSectionTitle>{t('academic.education.title')}</RightColumnSectionTitle>
                            <div className="text-left mb-3">
                                <p className="font-bold text-[15px] mb-0.5 leading-tight">{t('academic.education.master.degree')}</p>
                                <p className="text-xs font-medium opacity-90">{t('academic.education.master.track_label')}: {t('academic.education.master.track')}</p>
                                <p className="text-xs font-medium opacity-90">{t('academic.education.master.school')}</p>
                            </div>
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

                                {skillsData.map((skillGroup, index) => {
                                    const isLastItem = index === skillsData.length - 1;
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
                                {achievementsData.map((achievement, index) => (
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
                                {researchData.slice(0, 3).map((research, index) => (
                                    <div key={index} className="text-[11px] leading-tight">
                                        {research.url ? (
                                            <a
                                                href={research.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-bold opacity-100 line-clamp-2 hover:underline hover:text-white/80 transition-colors print:no-underline print:text-inherit"
                                            >
                                                "{research.title}"
                                            </a>
                                        ) : (
                                            <p className="font-bold opacity-100 line-clamp-2">"{research.title}"</p>
                                        )}
                                        <p className="italic opacity-80 mt-0.5">- {research.journal}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mt-auto pt-2 flex flex-col items-center justify-center text-center">
                            <a
                                href="https://paodabeat-profile.vercel.app/"
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
            </div>
            </div>
            </main>

            <ScrollToTop />
        </div>
    );
}
