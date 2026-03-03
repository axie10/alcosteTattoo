// src/components/layout/DefaultLayout.tsx
// El que creamos antes

import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { InstagramButton } from "@/components/ui/InstagramButton";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useEffect, useState } from "react";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState(true);

  // Simulamos una carga de 2 segundos (puedes quitar esto luego)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // He cambiado h-screen por min-h-screen para evitar problemas si la web es muy larga
    <div>
      {loading ? (
        <Loader />
      ) : (
        <><Navbar />
          <main className="w-full bg-black min-h-screen">
            {children}
          </main>
          <Footer />
          {/* <WhatsAppButton /> */}
          {/* <InstagramButton /> */}
          </>
      )}
    </div>
  );
}