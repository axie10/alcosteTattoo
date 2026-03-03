// src/components/Hero.tsx
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* Fondo: Imagen que ocupa absolutamente todo el espacio */}
      <div 
        className="absolute inset-0 z-0 bg-black bg-[url('./assets/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay un poco más oscuro para que el contraste con el blanco y marrón oscuro sea perfecto */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido: Quitamos el 'max-w-5xl' si quieres que el texto sea más flexible, 
          o mantenemos un 'max-w-full' para permitir que respire */}
      <div className="relative z-10 text-center px-4 md:px-10 space-y-10 w-full">
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-none">
          El arte de la <span className="text-amber-800">tinta eterna</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
          Diseños personalizados que cuentan tu historia. 
          Agenda tu cita hoy y empecemos a crear algo único.
        </p>
        
        <div className="flex gap-6 justify-center pt-6 flex-wrap">
          {/* Botón Primario: Fondo blanco, texto oscuro */}
          <Button size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200 text-lg px-8 py-6 rounded-full transition-all" onClick={() => window.location.href = '/galeria'}>
            Ver Portafolio
          </Button>
          
          {/* Botón Secundario: Borde y texto en marrón oscuro (amber-800) */}
          <Button variant="outline" size="lg" className="text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white text-lg px-8 py-6 rounded-full transition-all">
            Pedir Cita
          </Button>
        </div>
      </div>
    </section>
  );
}