import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] py-24 flex items-center justify-center overflow-hidden bg-[#040d0a]">
      {/* Background Image with Emerald Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/industrial-facility.jpg"
          alt="AIRMOB Industrial Infrastructure"
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        {/* Advanced Gradient: Dark Green Tinting */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#040d0a] via-[#040d0a]/60 to-emerald-900/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040d0a]" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-500/5 blur-[100px] rounded-full" />

      <div className="container relative z-10">
        <div>
          {/* Animated Top Label */}
          <div className="flex items-center gap-4 mb-4 animate-in fade-in slide-in-from-left duration-700">
            <div className="h-[1px] w-12 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-emerald-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">
              The AIRMOB Journey
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
            Pioneering{" "}
            <span className="text-emerald-400 italic">Excellence</span> <br />
            in Nigerian Energy.
          </h1>

          <div className="relative">
            {/* The side border now has a glow effect */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl pl-4 md:pl-8">
              Since our founding in 2018, we have relentlessly pursued new
              heights, transforming traditional operations through a commitment
              to
              <span className="text-emerald-50 text-emerald-400/50 font-semibold">
                {" "}
                safety, innovation,{" "}
              </span>{" "}
              and local empowerment.
            </p>
          </div>

          {/* Hero Call to Action (Optional but recommended) */}
          <div className="mt-12 flex flex-col md:flex-row gap-2">
            <Button className="w-full md:w-auto">Explore Our Vision</Button>
            <Button className="w-full md:w-auto" variant={"white"}>
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom transition - Soft fade into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#040d0a] to-transparent z-20" />
    </section>
  );
};
