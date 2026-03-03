import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        question: "¿Cuánto cuesta un tatuaje?",
        answer: "No tengo una tarifa por hora fija porque cada pieza es un mundo. El precio depende del tamaño, la zona del cuerpo y la complejidad del diseño. Si tienes una idea, escríbeme, cuéntame qué quieres y te daré un presupuesto cerrado sin compromiso."
    },
    {
        question: "¿Duele mucho?",
        answer: "La pregunta del millón. Sí, es una aguja entrando en tu piel, así que algo se nota. Pero la mayoría de la gente se sorprende de que no es tan malo como imaginaban. Es una molestia totalmente soportable, sobre todo si vienes descansado y habiendo comido bien."
    },
    {
        question: "¿Qué medidas de higiene seguís?",
        answer: "Eso es innegociable. Trabajo con material 100% estéril y de un solo uso. Todo el proceso cumple estrictamente con la normativa sanitaria vigente. Tu piel y tu salud son lo primero, no me la juego."
    },
    {
        question: "¿Qué debo hacer después del tatuaje?",
        answer: "No te preocupes, cuando termines te daré todas las pautas de cuidados paso a paso. La clave no es solo hacerse el tatuaje, sino cómo lo curas los días siguientes para que se mantenga perfecto de por vida."
    }
];

export function FAQSection() {
    return (
        <section className="w-full bg-black py-24 px-6 md:px-20 border-t border-zinc-900">
            <div className="max-w-3xl mx-auto space-y-12">

                <div className="text-center space-y-3">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                        Dudas frecuentes
                    </h2>
                    <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
                        Preguntas <span className="text-amber-800">frecuentes.</span>
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-zinc-800 rounded-lg px-6 data-[state=open]:border-amber-800/50 transition-colors"
                        >
                            <AccordionTrigger className="text-white hover:text-amber-800 hover:no-underline font-semibold text-lg py-6">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400 text-lg leading-relaxed pb-6">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}