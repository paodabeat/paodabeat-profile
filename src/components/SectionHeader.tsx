import React from 'react';
import { motion } from 'motion/react';

// Tiêu đề section kiểu tạp chí: đường kẻ mảnh, số thứ tự, tiêu đề lớn và ghi chú bên phải
export default function SectionHeader({ index, title, aside }: { index: string; title: string; aside?: React.ReactNode }) {
    return (
        <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="border-t border-ink pt-5 mb-14 md:mb-20"
        >
            <div className="flex items-baseline justify-between gap-6 mb-6 md:mb-10">
                <span className="label">({index})</span>
                {aside && <span className="label text-right">{aside}</span>}
            </div>
            <h2 className="text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.035em]">
                {title}
            </h2>
        </motion.header>
    );
}
