import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import { useTheme } from './hooks/useTheme'; // Import hook quản lý Theme

export default function App() {
  // Khởi tạo Theme ngay từ root component để đồng bộ toàn ứng dụng
  useTheme();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
}