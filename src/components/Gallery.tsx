import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from 'lucide-react';

export interface GalleryItem {
    id: string;
    title: string;
    image?: string;
    thumb?: string;    // Ảnh nhỏ cho dải thumbnail (không có thì dùng image)
    meta?: string;     // Đơn vị cấp / tạp chí
    year?: string;
    url?: string;
    urlLabel?: string;
    details?: string;  // Số tập, trang, ISSN / DOI
    authors?: string;  // Danh sách tác giả, phân tách bằng dấu phẩy
    abstract?: string;
}

// certificate: giấy khen, chứng nhận (khổ ngang) | paper: trang đầu bài báo (khổ A4 dọc)
type Variant = 'certificate' | 'paper';

const pad = (n: number) => String(n).padStart(2, '0');

// Tên chủ portfolio trong danh sách tác giả được tô đậm (có dấu hoặc không dấu)
const SELF_NAMES = ['phung tran gia bao', 'phùng trần gia bảo'];

const AuthorList = ({ authors }: { authors: string }) => (
    <>
        {authors.split(',').map((name, i, all) => {
            const trimmed = name.trim();
            const isSelf = SELF_NAMES.includes(trimmed.toLowerCase());
            return (
                <React.Fragment key={i}>
                    <span className={isSelf ? 'text-ink font-medium underline decoration-accent underline-offset-4' : ''}>{trimmed}</span>
                    {i < all.length - 1 && ', '}
                </React.Fragment>
            );
        })}
    </>
);

// =========================================================================
// PLACEHOLDER: hiển thị khi chưa có ảnh, giữ đúng tỉ lệ khung để thay ảnh sau không bị xô lệch
// =========================================================================
const Placeholder: React.FC<{ item: GalleryItem; variant: Variant; compact?: boolean }> = ({ item, variant, compact }) => {
    const { t } = useTranslation();

    if (compact) {
        return <div className="w-full h-full bg-panel flex items-center justify-center label">—</div>;
    }

    if (variant === 'paper') {
        // Mô phỏng trang đầu của một bài báo khoa học
        return (
            <div className="absolute inset-5 md:inset-8 bg-paper border border-rule p-6 md:p-8 flex flex-col">
                <p className="label">{item.meta}</p>
                <p className="mt-4 text-sm md:text-base font-semibold leading-snug line-clamp-4">{item.title}</p>
                <div className="mt-6 space-y-2" aria-hidden>
                    {[100, 92, 97, 60, 0, 100, 95, 88, 98, 70].map((w, i) => (
                        <div key={i} className="h-1.5 bg-rule" style={{ width: `${w}%`, opacity: w ? 1 : 0 }} />
                    ))}
                </div>
                <p className="mt-auto label text-center">{t('common.placeholder')}</p>
            </div>
        );
    }

    // Khung viền kép như giấy khen
    return (
        <div className="absolute inset-5 md:inset-8 border border-rule p-2">
            <div className="w-full h-full border border-rule flex flex-col items-center justify-center text-center px-6 gap-4">
                <span className="label">{t('common.placeholder')}</span>
                <p className="italic text-muted max-w-sm leading-relaxed">{item.title}</p>
            </div>
        </div>
    );
};

// =========================================================================
// LIGHTBOX: xem ảnh toàn màn hình, điều hướng bằng phím mũi tên / Esc
// =========================================================================
const Lightbox: React.FC<{
    item: GalleryItem;
    position: string;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    hasMany: boolean;
}> = ({ item, position, onClose, onPrev, onNext, hasMany }) => {
    const { t } = useTranslation();

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext]);

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#0b0b0b] text-[#ECE9E2] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            onClick={onClose}
        >
            <div className="flex items-center justify-between px-5 md:px-10 h-16 shrink-0 text-xs tracking-[0.16em] uppercase">
                <span className="tabular-nums text-[#9A958B]">{position}</span>
                <button onClick={onClose} className="flex items-center gap-2 hover:text-white">
                    {t('common.close')} <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
            </div>

            <div className="flex-1 min-h-0 flex items-center justify-center px-5 md:px-20">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </AnimatePresence>
            </div>

            <div className="shrink-0 px-5 md:px-10 py-5 flex items-end justify-between gap-6" onClick={(e) => e.stopPropagation()}>
                <div className="max-w-2xl">
                    <p className="text-base md:text-lg font-medium leading-snug">{item.title}</p>
                    {(item.meta || item.year) && (
                        <p className="text-sm text-[#9A958B] mt-1">{[item.meta, item.year].filter(Boolean).join(' · ')}</p>
                    )}
                </div>
                {hasMany && (
                    <div className="flex gap-6 shrink-0">
                        <button onClick={onPrev} aria-label={t('common.prev')} className="hover:text-white"><ArrowLeft className="w-6 h-6" strokeWidth={1.5} /></button>
                        <button onClick={onNext} aria-label={t('common.next')} className="hover:text-white"><ArrowRight className="w-6 h-6" strokeWidth={1.5} /></button>
                    </div>
                )}
            </div>
        </motion.div>,
        document.body
    );
};

// =========================================================================
// COMPONENT CHÍNH: khung trình diễn lớn + chú thích + dải ảnh nhỏ
// =========================================================================
export default function Gallery({ items, variant }: { items: GalleryItem[]; variant: Variant }) {
    const { t } = useTranslation();
    const [active, setActive] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Đổi ngôn ngữ có thể đổi số lượng mục -> giữ chỉ số trong phạm vi
    const current = items[Math.min(active, items.length - 1)];
    const imageIndexes = items.map((item, i) => (item.image ? i : -1)).filter((i) => i >= 0);

    const go = (direction: 1 | -1) => setActive((prev) => (prev + direction + items.length) % items.length);

    // Trong lightbox chỉ lướt qua các mục đã có ảnh
    const goImage = useCallback((direction: 1 | -1) => {
        setActive((prev) => {
            const pos = imageIndexes.indexOf(prev);
            return imageIndexes[(pos + direction + imageIndexes.length) % imageIndexes.length];
        });
    }, [imageIndexes.join(',')]);

    const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);
    const lightboxPrev = useCallback(() => goImage(-1), [goImage]);
    const lightboxNext = useCallback(() => goImage(1), [goImage]);

    if (!current) return null;

    const isPaper = variant === 'paper';
    const stageAspect = isPaper ? 'aspect-[210/297]' : 'aspect-[4/3]';
    const thumbSize = isPaper ? 'w-16 md:w-20 aspect-[210/297]' : 'w-24 md:w-28 aspect-[4/3]';

    return (
        <div
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') go(-1);
                if (e.key === 'ArrowRight') go(1);
            }}
            className="outline-none"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8">

                {/* KHUNG TRÌNH DIỄN */}
                <div className={isPaper ? 'lg:col-span-5' : 'lg:col-span-8'}>
                    <div className={`relative ${stageAspect} bg-panel overflow-hidden`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="absolute inset-0"
                            >
                                {current.image ? (
                                    <button
                                        onClick={() => setIsLightboxOpen(true)}
                                        className="group absolute inset-0 p-5 md:p-8 cursor-zoom-in"
                                        aria-label={`${t('common.zoom')}: ${current.title}`}
                                    >
                                        <img src={current.image} alt={current.title} className="w-full h-full object-contain" />
                                        <span className="absolute right-3 bottom-3 p-2 bg-paper text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Maximize2 className="w-4 h-4" strokeWidth={1.5} />
                                        </span>
                                    </button>
                                ) : (
                                    <Placeholder item={current} variant={variant} />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* CHÚ THÍCH */}
                <div className={`flex flex-col ${isPaper ? 'lg:col-span-7' : 'lg:col-span-4'}`}>
                    <p className="text-5xl md:text-6xl font-medium tracking-[-0.04em] tabular-nums">
                        {pad(active + 1)}<span className="text-muted text-2xl md:text-3xl tracking-normal"> / {pad(items.length)}</span>
                    </p>

                    <div className="border-t border-rule mt-6 pt-6 min-h-[11rem]">
                        {current.year && <p className="label mb-3 tabular-nums">{current.year}</p>}
                        <h4 className="text-xl md:text-2xl font-medium leading-snug tracking-tight">{current.title}</h4>

                        {isPaper ? (
                            // Bài nghiên cứu: nơi công bố, tác giả, tóm tắt
                            <dl className="mt-6 space-y-5 text-[15px] leading-relaxed">
                                {current.meta && (
                                    <div>
                                        <dt className="label mb-1.5">{t('common.published')}</dt>
                                        <dd className="text-ink">{current.meta}</dd>
                                        {current.details && <dd className="text-sm text-muted mt-1">{current.details}</dd>}
                                    </div>
                                )}
                                {current.authors && (
                                    <div>
                                        <dt className="label mb-1.5">{t('common.authors')}</dt>
                                        <dd className="text-muted"><AuthorList authors={current.authors} /></dd>
                                    </div>
                                )}
                                {current.abstract && (
                                    <div>
                                        <dt className="label mb-1.5">{t('common.abstract')}</dt>
                                        <dd lang="en" className="text-sm text-muted text-justify hyphens-auto">{current.abstract}</dd>
                                    </div>
                                )}
                            </dl>
                        ) : (
                            current.meta && <p className="text-[15px] text-muted leading-relaxed mt-3">{current.meta}</p>
                        )}

                        {current.url && (
                            <a href={current.url} target="_blank" rel="noopener noreferrer" className="text-link text-sm mt-6">
                                {current.urlLabel} <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </a>
                        )}
                    </div>

                    <div className="mt-auto pt-8 flex items-center justify-between gap-6 border-t border-rule">
                        <button onClick={() => go(-1)} className="flex items-center gap-2 text-sm py-3 hover:text-accent transition-colors">
                            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> {t('common.prev')}
                        </button>
                        {current.image && (
                            <button onClick={() => setIsLightboxOpen(true)} className="hidden sm:flex items-center gap-2 text-sm py-3 text-muted hover:text-accent transition-colors">
                                <Maximize2 className="w-4 h-4" strokeWidth={1.5} /> {t('common.zoom')}
                            </button>
                        )}
                        <button onClick={() => go(1)} className="flex items-center gap-2 text-sm py-3 hover:text-accent transition-colors">
                            {t('common.next')} <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* DẢI ẢNH NHỎ */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar mt-8 py-1 -mx-5 px-5 md:mx-0 md:px-1">
                {items.map((item, i) => (
                    <button
                        key={item.id}
                        onClick={() => setActive(i)}
                        aria-label={item.title}
                        aria-current={i === active}
                        className={`relative shrink-0 ${thumbSize} overflow-hidden transition-opacity outline-offset-2 ${i === active ? 'outline-2 outline-accent opacity-100' : 'opacity-50 hover:opacity-100'}`}
                    >
                        {item.image
                            ? <img src={item.thumb ?? item.image} alt="" loading="lazy" className="w-full h-full object-cover bg-panel" />
                            : <Placeholder item={item} variant={variant} compact />}
                        <span className="absolute left-1 top-1 text-[10px] tabular-nums bg-paper text-ink px-1">{pad(i + 1)}</span>
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {isLightboxOpen && current.image && (
                    <Lightbox
                        item={current}
                        position={`${pad(imageIndexes.indexOf(active) + 1)} / ${pad(imageIndexes.length)}`}
                        onClose={closeLightbox}
                        onPrev={lightboxPrev}
                        onNext={lightboxNext}
                        hasMany={imageIndexes.length > 1}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
