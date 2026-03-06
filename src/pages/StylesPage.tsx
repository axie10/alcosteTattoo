import { FadeIn } from "@/framer-motion/FadeIn";
import DefaultLayout from "@/layout/DefaultLayout";

const styles = [
    { title: "Fine Line", desc: "La delicadeza hecha tinta y diseños minimalistas." },
    { title: "Realismo", desc: "Profundidad y detalle extremo en blanco y negro." },
    { title: "Blackwork", desc: "Geometría, fuerza y tramas sólidas con alto contraste." },
    { title: "Traditional", desc: "Líneas gruesas y diseños clásicos que perduran." },
];

export function StylesPage() {
    return (
        <DefaultLayout>
            <section className="py-20 px-6 max-w-6xl mx-auto bg-black">
                <FadeIn>
                    <h2 className="text-4xl font-bold mb-12 text-center text-white">
                        Nuestros Estilos
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {styles.map((style, index) => (
                        <FadeIn key={style.title} delay={index * 0.1}>
                            {/* Borde blanco, hover ámbar. Fondo negro absoluto. */}
                            <div className="group p-8 rounded-2xl bg-black border border-white hover:border-amber-700 transition-all duration-300 cursor-default">
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-600 transition-colors duration-300">
                                    {style.title}
                                </h3>
                                <p className="text-white text-sm group-hover:text-zinc-300 transition-colors duration-300">
                                    {style.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </DefaultLayout>
    );
}