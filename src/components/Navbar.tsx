import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-md border-b border-white/10 flex-nowrap">

      {/* Logo - Añadimos shrink-0 para que nunca se aplaste */}
      <div className="text-white font-bold text-xl tracking-tighter shrink-0">
        <Link to="/">
          ALCOSTE<span className="text-amber-800">TATTOO</span>
        </Link>
      </div>

      {/* Enlaces - Ocultos en móvil, se muestran en md */}
      <div className="hidden md:flex gap-8 text-white/80 font-medium">
        <Link to="/galeria" className="hover:text-amber-800 transition">Galería</Link>
        <a href="#estilos" className="hover:text-white transition">Estilos</a>
        <a href="#contacto" className="hover:text-white transition">Contacto</a>
      </div>

      {/* Botón - Añadimos shrink-0 para que siempre esté visible */}
      <div className="shrink-0">
        <Button className="bg-white text-black hover:bg-zinc-200">
          Reserva
        </Button>
      </div>
    </nav>
  );
}