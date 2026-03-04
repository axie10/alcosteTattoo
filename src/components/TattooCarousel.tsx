// Importamos las imágenes de los tatuajes
import tattoo1 from "../assets/alcoste_painting.jpg";
import tattoo2 from "../assets/alcoste_painting.jpg";
import tattoo3 from "../assets/alcoste_painting.jpg";
import tattoo4 from "../assets/alcoste_painting.jpg";
import tattoo5 from "../assets/alcoste_painting.jpg";
import { useState } from "react"; // 1. Importamos useState
import { X } from "lucide-react"; // Importamos un icono de cierre

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const tattooImages = [tattoo1, tattoo2, tattoo3, tattoo4, tattoo5];

export default function TattooCarousel() {
    // 2. Estado para controlar qué imagen está abierta (o null si ninguna)
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="w-full bg-black py-24 px-6 md:px-20 border-t border-zinc-900 mb-24">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                        Nuestros Trabajos
                    </h2>
                    <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
                        Galería de <span className="text-amber-800">Tatuajes</span>
                    </p>
                </div>

                <div className="flex justify-center">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl relative">
                        <CarouselContent className="-ml-4 md:-ml-6">
                            {tattooImages.map((image, index) => (
                                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3">
                                    <div className="p-1">
                                        {/* 3. Al hacer clic, guardamos la imagen en el estado */}
                                        <div
                                            onClick={() => setSelectedImage(image)}
                                            className="bg-zinc-950 border border-zinc-800 overflow-hidden group rounded-lg relative aspect-[4/5] cursor-pointer"
                                        >
                                            <img
                                                src={image}
                                                alt={`Tatuaje ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                            <CarouselPrevious className="static translate-y-0 bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800 hover:text-amber-800" />
                            <CarouselNext className="static translate-y-0 bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800 hover:text-amber-800" />
                        </div>
                    </Carousel>
                </div>
            </div>

            {/* 4. El Modal (solo se renderiza si selectedImage no es null) */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)} // Cierra al pulsar fuera
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-amber-800 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={40} />
                    </button>

                    <img
                        src={selectedImage}
                        alt="Tatuaje en grande"
                        className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Evita que se cierre si pulsas la propia foto
                    />
                </div>
            )}
        </section>
    );
}