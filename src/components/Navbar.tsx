import { useState } from "react";
import { InstagramIcon } from "@/utils/icons/InstagramIcon";
import { Menu, X } from "lucide-react"; // Necesitamos estos iconos
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-md border-b border-white/10 flex-nowrap">

      {/* Logo */}
      <div className="text-white font-bold text-xl tracking-tighter shrink-0 z-50">
        <Link to="/">
          ALCOSTE<span className="text-amber-800">TATTOO</span>
        </Link>
      </div>

      {/* Menú Desktop (Oculto en móvil) */}
      <div className="hidden md:flex gap-8 items-center text-white/80 font-medium">
        <Link to="/galeria" className="hover:text-amber-800 transition">Galería</Link>
        <a href="#estilos" className="hover:text-white transition">Estilos</a>
        <a href="#contacto" className="hover:text-white transition">Contacto</a>
        <a
          href="https://www.instagram.com/alcostetattoo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-amber-800 transition"
        >
          <InstagramIcon className="w-5 h-5" />
        </a>
        {/* <Button className="bg-white text-black hover:bg-zinc-200">Reserva</Button> */}
      </div>

      {/* Botón Hamburguesa (Solo en móvil) */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú Móvil (Desplegable) */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-xl text-white md:hidden">
          <Link to="/galeria" onClick={() => setIsOpen(false)} className="hover:text-amber-800">Galería</Link>
          <a href="#estilos" onClick={() => setIsOpen(false)} className="hover:text-amber-800">Estilos</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-amber-800">Contacto</a>

          <a
            href="https://www.instagram.com/alcostetattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-amber-800"
          >
            <InstagramIcon className="w-8 h-8" />
          </a>

          {/* <Button className="bg-white text-black mt-4" onClick={() => setIsOpen(false)}>Reserva</Button> */}
        </div>
      )}
    </nav>
  );
}