import { useState, useEffect } from 'react';
// Asegúrate de ajustar las rutas de importación si ahora están en la carpeta 'pages'

import { FAQSection } from "../components/FAQSection";
import About from '@/components/About';
import Hero from '@/components/Hero';
import TattooCarousel from '@/components/TattooCarousel';
import DefaultLayout from '@/layout/DefaultLayout';
import { MapSection } from '@/components/MapSection';

export default function Home() {
    return (
        <DefaultLayout>
            <div>
                <Hero />
                <About />
                <TattooCarousel />
                <FAQSection />
                {/* <MapSection /> */}
            </div>
        </DefaultLayout>
    );
}