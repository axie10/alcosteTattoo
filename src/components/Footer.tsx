import { MapPin, Phone, Instagram, Clock, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-900 pt-20 pb-10 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-zinc-400">

                {/* Columna 1: Branding */}
                <div className="space-y-4">
                    <h2 className="text-white font-bold text-xl tracking-tighter">ALCOSTE<span className="text-amber-800">TATTOO</span></h2>
                    <p className="text-sm leading-relaxed">
                        Tatuajes creados con propósito.
                    </p>
                </div>

                {/* Columna 2: Navegación */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold uppercase text-xs tracking-widest">Explora</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#galeria" className="hover:text-amber-800 transition">Galería</a></li>
                        <li><a href="#estilos" className="hover:text-amber-800 transition">Estilos</a></li>
                        <li><a href="#contacto" className="hover:text-amber-800 transition">Cita Previa</a></li>
                    </ul>
                </div>

                {/* Columna 3: Contacto */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold uppercase text-xs tracking-widest">Contacto</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-amber-800" />
                            <span>+34 600 000 000</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-amber-800" />
                            <span>hola@alcostetattoo.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-amber-800" />
                            <span>Cáceres, Extremadura</span>
                        </div>
                    </div>
                </div>

                {/* Columna 4: Redes y Horario */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold uppercase text-xs tracking-widest">Síguenos</h3>
                    <a href="#" className="flex items-center gap-2 text-sm hover:text-white transition">
                        <Instagram className="w-4 h-4 text-amber-800" />
                        @alcostetattoo
                    </a>
                    <div className="pt-4 space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                            <Clock className="w-3 h-3 text-amber-800" />
                            <span>Lun - Vie: 10:00 - 20:00</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Pie inferior */}
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
                <p>© {new Date().getFullYear()} Axie Studio. Diseñado con intención.</p>
            </div>
        </footer>
    );
}