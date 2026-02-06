import {
  IconDropletFilled,
  IconShieldCheck,
  IconFlask,
} from "@tabler/icons-react";
import Image from "next/image";

export const LubricantService = () => {
  return (
    <section
      id="lubricant-production"
      className="py-16 md:py-24 bg-slate-50 overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          {/* Right: Product/Manufacturing Imagery */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/lubricant-oil.jpg"
                alt="Lubricant Manufacturing Facility"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay pattern for tech feel */}
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>

            {/* Quality Seal Badge */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <IconShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  Certified
                </p>
                <p className="text-sm font-extrabold text-primary">
                  Premium Grade
                </p>
              </div>
            </div>
          </div>

          {/* Left: Product Details */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-1.5">
                Solution 02
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                High-Performance <br />
                <span className="text-emerald-600">Lubricant Production.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                AIRMOB manufactures superior lubricants tailored for the
                demanding African industrial climate. Our products are
                engineered to minimize friction, reduce wear, and extend the
                lifespan of critical machinery across the energy and
                manufacturing sectors.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <IconFlask className="text-emerald-600 w-8 h-8" />
                <h4 className="font-bold text-slate-900">Advanced Blending</h4>
                <p className="text-slate-500 text-sm">
                  Formulated using high-viscosity index base oils and premium
                  additives for extreme heat resistance.
                </p>
              </div>
              <div className="space-y-3">
                <IconDropletFilled className="text-emerald-600 w-8 h-8" />
                <h4 className="font-bold text-slate-900">
                  Industrial Protection
                </h4>
                <p className="text-slate-500 text-sm">
                  Specifically designed for heavy-duty turbines, drilling rigs,
                  and industrial automotive fleets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
