import { Loader2 } from "lucide-react";

export function Loader() {
    return (
        <div className="fixed inset-0 z-[100] flex h-screen w-full items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-4">
                {/* El spinner sutil */}
                <Loader2 className="h-10 w-10 animate-spin text-zinc-500" />
                <p className="text-sm font-light tracking-widest text-zinc-400 uppercase">
                    Cargando arte...
                </p>
            </div>
        </div>
    );
}