import { useTranslation } from 'react-i18next';

// Định nghĩa các mã ngôn ngữ dự án hỗ trợ
export type LanguageCode = 'vi' | 'en' | 'zh';

export function useLanguage() {
    const { i18n } = useTranslation();

    // Lấy mã ngôn ngữ hiện tại (cắt 2 ký tự đầu để tránh các trường hợp trả về 'vi-VN' hay 'en-US')
    const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'vi').substring(0, 2) as LanguageCode;

    // Hàm thay đổi ngôn ngữ
    const setLanguage = (lang: LanguageCode) => {
        i18n.changeLanguage(lang);
        // Lưu ý: Việc lưu vào localStorage ('i18nextLng') đã được thư viện i18next-browser-languagedetector tự động xử lý.
    };

    return { currentLanguage, setLanguage };
}