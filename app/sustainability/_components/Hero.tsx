import { IconLeaf, IconWorldCheck } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center py-24 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 translate-x-20 z-0" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-4">
            <IconLeaf className="text-emerald-600 w-4 h-4" />
            <span className="text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em]">
              Commitment to ESG
            </span>
          </div>

          <h1 className="text-slate-900 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
            Advancing Energy, <br />
            <span className="text-emerald-600">Preserving the Future.</span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            At AIRMOB, we believe that true progress is measured by the legacy
            we leave behind. Our sustainability framework integrates
            environmental protection with social empowerment and ethical
            governance.
          </p>

          <div className="flex flex-wrap gap-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                <IconWorldCheck size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Local Commitment
                </p>
              </div>
            </div>
            {/* Add more stats or impact points here */}
          </div>
        </div>
      </div>

      {/* Abstract Nature Visual */}
      <div className="absolute right-0 bottom-0 w-full lg:w-1/2 h-full hidden lg:block z-0">
        <div className="relative h-full w-full">
          <img
            src="/assets/images/sustainability-bg.jpg"
            alt="Sustainable energy and environment"
            className="h-full w-full object-cover clip-path-polygon" // You can define a custom clip-path in tailwind config
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};
