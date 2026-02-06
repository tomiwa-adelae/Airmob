import { IconHeadset, IconMailOpened, IconMapPin } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative py-24 bg-[#040d0a] overflow-hidden">
      {/* Dynamic Background with Emerald Core */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/images/world-map.png')] bg-no-repeat bg-center bg-contain opacity-10 grayscale invert" />
        {/* Central Hub Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 text-center">
        {/* Animated Support Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-4 shadow-sm">
          <IconHeadset className="text-emerald-400 w-4 h-4" />
          <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">
            Global Response Team
          </span>
        </div>

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
          Let’s Power the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 italic">
            Future Together.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Whether you’re inquiring about our{" "}
          <span className="text-emerald-400/80 font-medium">
            high-performance lubricants
          </span>
          , seeking technical support, or exploring a strategic partnership, our
          team is ready to deliver excellence.
        </p>

        {/* Floating Quick-Contact Accents */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3">
            <IconMapPin className="text-emerald-500 w-5 h-5" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              Lagos, NG
            </span>
          </div>
          <div className="flex items-center gap-3">
            <IconMailOpened className="text-emerald-500 w-5 h-5" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">
              Inquiry Ready
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
