import alcosteImage from '../assets/alcoste_painting.jpg';

export default function About() {
    return (
        <section className="w-full bg-black py-10 md:py-24 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                {/* Texto más humano y cercano */}
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                        Tatuar es un <span className="text-amber-800">pacto.</span>
                    </h2>

                    <div className="space-y-6 text-zinc-300">
                        <p className="text-lg leading-relaxed text-zinc-400">
                            No me gusta hacer "tatuajes de catálogo". Me gusta hacer cosas que tengan sentido para ti y que, cuando te mires al espejo dentro de diez años, sigan contando algo real.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-400">
                            Llevo años poniendo marcas en la piel, pero el proceso es siempre el mismo: nos sentamos, hablamos de tu idea y le damos forma juntos. Sin prisas y sin pretensiones.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-400">
                            De lo técnico ni te preocupes. Higiene absoluta, material de primera y técnica cuidada. Eso es lo mínimo que te mereces. Tú solo trae tu idea, del resto me encargo yo.
                        </p>
                    </div>

                    <div className="flex gap-8 pt-4 border-t border-zinc-800 pt-8">
                        <div>
                            <p className="text-white font-bold text-lg">Diseño</p>
                            <p className="text-sm text-zinc-500">Único y a medida</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">Higiene</p>
                            <p className="text-sm text-zinc-500">Estándar profesional</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">Tinta</p>
                            <p className="text-sm text-zinc-500">Calidad superior</p>
                        </div>
                    </div>
                </div>

                {/* Lado derecho: Imagen */}
                <div className="relative h-[500px] w-full">
                    <div className="absolute inset-0 bg-zinc-800 rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src={alcosteImage}
                            alt="Estudio de tatuajes"
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-amber-800/30 rounded-lg -z-10" />
                </div>
            </div>
        </section>
    );
}