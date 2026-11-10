import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, FileDown, Image as ImageIcon, Loader2, Sun, Moon } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { toPng } from 'html-to-image'; // Đã thay thế html2canvas bằng html-to-image
import { jsPDF } from 'jspdf';
import { LanguageSwitch } from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CVModern from '../components/cv/CVModern';
import CVSimple from '../components/cv/CVSimple';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

// Bề ngang chuẩn của tờ CV (210mm ở 96dpi). CV luôn dựng ở khổ này rồi thu nhỏ cả tờ
// bằng transform khi màn hình hẹp, để bố cục hai cột không bị dồn lại hay tràn khung.
const CV_WIDTH = 794;

// Các mẫu CV có thể chọn. Thêm mẫu mới chỉ cần khai báo thêm một dòng ở đây.
type TemplateId = 'modern' | 'simple';

const TEMPLATES: Array<{ id: TemplateId; labelKey: string; Component: React.ComponentType }> = [
    { id: 'modern', labelKey: 'cv.template_modern', Component: CVModern },
    { id: 'simple', labelKey: 'cv.template_simple', Component: CVSimple }
];

const STORAGE_KEY = 'cv-template';

export default function CV() {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const { currentLanguage, setLanguage } = useLanguage();
    const cvRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);
    const [scale, setScale] = useState(1);
    const [frameHeight, setFrameHeight] = useState<number>();

    // Mẫu đang chọn, nhớ lại ở lần mở sau
    const [template, setTemplate] = useState<TemplateId>(() => {
        const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
        return TEMPLATES.some((item) => item.id === saved) ? (saved as TemplateId) : 'modern';
    });

    const chooseTemplate = (id: TemplateId) => {
        setTemplate(id);
        try {
            window.localStorage.setItem(STORAGE_KEY, id);
        } catch {
            // Trình duyệt chặn localStorage (chế độ ẩn danh) thì bỏ qua, chỉ mất việc ghi nhớ
        }
    };

    const ActiveTemplate = (TEMPLATES.find((item) => item.id === template) ?? TEMPLATES[0]).Component;

    // Tỉ lệ thu nhỏ = bề ngang khung hiện có / bề ngang chuẩn (không bao giờ phóng to quá 1)
    useLayoutEffect(() => {
        const frame = frameRef.current;
        const cv = cvRef.current;
        if (!frame || !cv) return;

        const update = () => {
            const next = Math.min(1, frame.clientWidth / CV_WIDTH);
            setScale(next);
            setFrameHeight(cv.offsetHeight * next);
        };

        const observer = new ResizeObserver(update);
        observer.observe(frame);
        observer.observe(cv);
        update();
        return () => observer.disconnect();
    }, [template]);

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

    const fileName = `Phung_Tran_Gia_Bao_CV_${template}`;

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
            link.download = `${fileName}.png`;
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

            pdf.save(`${fileName}.pdf`);
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

            {/* Chọn mẫu CV: cùng dữ liệu, khác cách trình bày */}
            <div className="w-full max-w-[210mm] mx-auto mb-6 flex flex-wrap items-center gap-x-4 gap-y-3 print:hidden">
                <span className="label">{t('cv.template_label')}</span>
                <div className="flex border border-rule" role="group">
                    {TEMPLATES.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => chooseTemplate(item.id)}
                            aria-pressed={template === item.id}
                            className={`h-9 px-4 text-[13px] font-medium transition-colors border-r border-rule last:border-r-0 ${
                                template === item.id
                                    ? 'bg-ink text-paper'
                                    : 'text-muted hover:text-ink hover:bg-panel'
                            }`}
                        >
                            {t(item.labelKey)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Khung viền mảnh bao ngoài tờ CV (nằm ngoài vùng chụp nên không lọt vào file PNG/PDF) */}
            <div
                ref={frameRef}
                className="w-full max-w-[210mm] mx-auto border border-rule overflow-hidden print:border-0 print:max-w-none print:overflow-visible print:h-auto!"
                style={{ height: frameHeight }}
            >
            {/* Vùng chứa CV - Đã gỡ print:min-h-[297mm] để CV rớt trang tự nhiên như ban đầu */}
            <div
                ref={cvRef}
                className="bg-white overflow-hidden flex flex-col relative text-neutral-900 print:m-0 print:overflow-visible print:w-[210mm]! print:transform-none!"
                style={{
                    width: CV_WIDTH,
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    printColorAdjust: 'exact',
                    WebkitPrintColorAdjust: 'exact'
                }}
            >
                <ActiveTemplate />
            </div>
            </div>
            </main>

            <ScrollToTop />
        </div>
    );
}
