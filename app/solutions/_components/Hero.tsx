import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center py-26 overflow-hidden bg-[#040d0a]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/energy-infrastructure.jpg"
          alt="Energy Infrastructure"
          className="w-full h-full object-cover opacity-30 scale-105 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
        />
        {/* Technical Grid Overlay - Now Emerald Tinted */}
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.png')] opacity-10 mix-blend-overlay" />

        {/* Gradient that fades from Emerald-Black to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d0a] via-[#040d0a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040d0a]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              Integrated Energy Solutions
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Precision Across the <br />
            <span className="text-emerald-500 italic">Value Chain.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            From upstream exploration support to high-performance lubricant
            manufacturing, AIRMOB provides the technical backbone for
            Nigeria&apos;s industrial growth.
          </p>

          <div className="flex w-full sm:w-auto flex-col sm:flex-row items-center justify-start gap-2">
            <Button asChild className="w-full sm:w-auto">
              <Link href={"/contact"}>Get a Quote</Link>
            </Button>
            {/* <Button variant="outline" className="w-full sm:w-auto">
              Technical Specs
            </Button> */}
          </div>
        </div>
      </div>

      {/* Floating Service Navigation (Bottom of Hero) */}
      <div className="absolute bottom-0 left-0 w-full bg-white/[0.02] backdrop-blur-xl border-t border-white/5 hidden lg:block">
        {/* Animated Scan Line */}
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse" />

        <div className="container mx-auto flex justify-between items-center py-8">
          <p className="text-emerald-500/40 text-[10px] font-bold uppercase tracking-[0.3em]">
            Jump to Section:
          </p>
          <div className="flex gap-12">
            {[
              "Exploration Support",
              "Lubricant Production",
              "Industrial Services",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-white/50 hover:text-emerald-400 text-sm font-bold transition-all flex items-center gap-2 group"
              >
                {item}
                <ChevronDown
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
