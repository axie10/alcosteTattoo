import { Route, Routes } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import Home from './pages/Home';
import { StylesPage } from './pages/StylesPage';

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/styles" element={<StylesPage />} />
    </Routes>
  );
}
