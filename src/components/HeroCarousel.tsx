import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { PHOTOS, PHOTO_FOCUS } from '../data/portfolioData';

// Khung ảnh vuông ở đầu trang (Fig. 01): các ảnh tự chuyển sau mỗi 5 giây,
// hoặc người xem bấm mũi tên trái/phải để tự đổi. Ảnh cắt về khung vuông theo
// điểm nhắm khai báo ở PHOTO_FOCUS để nhân vật chính luôn nằm trong khung.

const INTERVAL = 5000;

interface PhotoEntry {
    id: string;
    title: string;
    meta?: string;
    year?: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function HeroCarousel() {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const photos = ((t('photos.list', { returnObjects: true }) as PhotoEntry[]) || [])
        .filter((photo) => PHOTOS[photo.id]?.image);

    const total = photos.length;
    const current = photos[index % Math.max(total, 1)];

    const go = (step: number) => setIndex((i) => (i + step + total) % total);

    // Tự chuyển ảnh. Hẹn giờ gắn với index nên mỗi lần bấm tay là đếm lại từ đầu.
    // Dừng khi người xem đang rê chuột vào ảnh, hoặc khi máy đặt chế độ hạn chế chuyển động.
    useEffect(() => {
        if (paused || total < 2) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const timer = window.setTimeout(() => setIndex((i) => (i + 1) % total), INTERVAL);
        return () => window.clearTimeout(timer);
    }, [index, paused, total]);

    // Tải sẵn ảnh kế tiếp để lúc chuyển không bị trắng khung
    useEffect(() => {
        if (total < 2) return;
        const next = photos[(index + 1) % total];
        if (next) new Image().src = PHOTOS[next.id].image;
    }, [index, total, photos]);

    if (!current) return null;

    return (
        <>
            <div
                className="relative bg-panel aspect-square overflow-hidden"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <AnimatePresence initial={false}>
                    <motion.img
                        key={current.id}
                        src={PHOTOS[current.id].image}
                        alt={current.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: PHOTO_FOCUS[current.id] ?? '50% 50%' }}
                    />
                </AnimatePresence>

                {total > 1 && (
                    // Đặt ở góc trên bên phải: hầu hết ảnh có phần nền ở đó nên nút không đè lên người
                    <div className="absolute top-4 right-4 flex gap-2">
                        <button
                            onClick={() => go(-1)}
                            aria-label={t('common.prev')}
                            className="w-9 h-9 flex items-center justify-center bg-paper/90 text-ink hover:bg-paper transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => go(1)}
                            aria-label={t('common.next')}
                            className="w-9 h-9 flex items-center justify-center bg-paper/90 text-ink hover:bg-paper transition-colors"
                        >
                            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                    </div>
                )}
            </div>

            <figcaption className="flex justify-between gap-4 pt-3 text-xs text-muted" aria-live="polite">
                <span className="shrink-0 tabular-nums">
                    Fig.&nbsp;{pad(index + 1)}
                    {total > 1 && <span className="text-muted/60"> / {pad(total)}</span>}
                </span>
                <span className="italic text-right">
                    {[current.meta, current.year].filter(Boolean).join(' · ')}
                </span>
            </figcaption>
        </>
    );
}
