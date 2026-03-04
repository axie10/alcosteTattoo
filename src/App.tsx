import { Route, Routes } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<GalleryPage />} />
    </Routes>
  );
}
