import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Aumentamos la distancia (de 20 a 40)
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Dispara la animación un poco antes
      transition={{ 
        duration: 1.0, // Más lento, para que se note
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] // Esto es una curva "cubic-bezier" orgánica
      }}
    >
      {children}
    </motion.div>
  );
}