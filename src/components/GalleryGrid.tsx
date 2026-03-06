import { motion } from "framer-motion";

// 1. Definimos las reglas del contenedor
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // El tiempo de espera entre una foto y la siguiente
    },
  },
};

// 2. Definimos las reglas de cada imagen (item)
const item = {
  hidden: { opacity: 0, scale: 0.8 }, // Empieza un poco más pequeña
  show: { opacity: 1, scale: 1 },     // Crece hasta su tamaño normal
};

export function GalleryGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {/* Mapearemos los items aquí */}
      {children}
    </motion.div>
  );
}

// 3. El componente para envolver cada imagen individual
export function GalleryItem({ children }: { children: React.ReactNode }) {
  return <motion.div variants={item}>{children}</motion.div>;
}