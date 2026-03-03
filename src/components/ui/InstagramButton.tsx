import { Instagram } from "lucide-react";

export function InstagramButton() {
    // Cambia 'alcostetattoo' por tu usuario real
    const instagramUrl = "https://www.instagram.com/alcoste.tattoo/";

    return (
        <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600"
            aria-label="Visitar nuestro Instagram"
        >
            <Instagram size={30} />
        </a>
    );
}