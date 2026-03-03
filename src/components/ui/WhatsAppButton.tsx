import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // Cambia este número por el del estudio
  const phoneNumber = "34600000000"; 
  const message = "Hola, me gustaría pedir información para un tatuaje.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-500 hover:scale-110 transition-all duration-300 animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}