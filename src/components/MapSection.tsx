export function MapSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tighter">
          Encuéntranos en <span className="text-amber-800">Cáceres</span>
        </h2>
        
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-900 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.2413550993074!2d-6.385461624021275!3d39.45842807158742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd16e45d1d1f0f49%3A0x6a6d6d6d6d6d6d6d!2sC.%20San%20Petersburgo%2C%201%2C%2010005%20C%C3%A1ceres!5e0!3m2!1ses!2ses!4v1709489500000!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Alcoste Tattoo"
          ></iframe>
        </div>
        
        <p className="mt-4 text-zinc-500 text-sm">
          C. San Petersburgo, 1, 10005 Cáceres
        </p>
      </div>
    </section>
  );
}