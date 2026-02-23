import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
    // Khởi tạo state cho theme, ưu tiên lấy từ localStorage hoặc theo hệ thống
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as Theme;
            if (savedTheme) {
                return savedTheme;
            }
            // Nếu chưa có, kiểm tra giao diện hệ thống (System Preferences)
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return 'dark'; // Đặt mặc định ban đầu là dark (cho đúng nguyên bản)
    });

    // Mỗi khi theme thay đổi, cập nhật class 'dark' lên thẻ <html> và lưu vào localStorage
    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    // Hàm chuyển đổi giữa Light và Dark
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
}