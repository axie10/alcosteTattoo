import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import tattoo1 from "../assets/alcoste_painting.jpg";
import tattoo2 from "../assets/hero-bg.jpg";
import DefaultLayout from "@/layout/DefaultLayout";
// ... importa todas tus fotos aquí

const allTattoos = [tattoo1, tattoo2, /* ... */];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <DefaultLayout>
            <div className="min-h-screen bg-black text-white p-6 md:p-20">
                {/* Botón de volver */}
                <Link to="/" className="text-zinc-500 hover:text-amber-800 transition mb-10 block">
                    ← Volver al inicio
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold mb-12">Galería Completa</h1>

                {/* Grid de fotos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {allTattoos.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(image)}
                            className="aspect-square bg-zinc-900 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition"
                        >
                            <img src={image} alt="Tatuaje" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                {/* Modal igual que el que ya tenías */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95" onClick={() => setSelectedImage(null)}>
                        <button className="absolute top-6 right-6 text-white"><X size={40} /></button>
                        <img src={selectedImage} className="max-h-[90vh] max-w-full object-contain" />
                    </div>
                )}
            </div>
        </DefaultLayout>
    );
}