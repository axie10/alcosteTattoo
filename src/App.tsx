import { useEffect, useState } from 'react';
import './App.css'
import Hero from './components/Hero';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import About from './components/About';
import { Footer } from './components/Footer';
import TattooCarousel from './components/TattooCarousel';
import { FAQSection } from './components/FAQSection';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulamos una carga de 2 segundos (puedes quitar esto luego)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-black min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <TattooCarousel />
          <FAQSection />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App
