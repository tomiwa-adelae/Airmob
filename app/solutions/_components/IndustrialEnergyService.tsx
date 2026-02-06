import {
  IconTruckDelivery,
  IconChartBar,
  IconBuildingFactory2,
} from "@tabler/icons-react";
import Image from "next/image";

export const IndustrialEnergyService = () => {
  return (
    <section
      id="industrial-services"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Logistics & Strategy Imagery */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/supply-chain.jpg"
                alt="Energy Supply Chain and Logistics"
                className="w-full h-[500px] object-cover"
              />
              {/* Subtle Tech Overlay */}
              <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply" />
            </div>

            {/* Efficiency Stat Badge */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-10 bg-slate-900 text-white p-8 rounded-2xl shadow-2xl hidden xl:block border border-white/10">
              <p className="text-orange-500 text-3xl font-extrabold mb-1">
                Optimized
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                Supply Chain Systems
              </p>
            </div>
          </div>

          {/* Right: Technical Details */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-orange-600 text-sm font-bold uppercase tracking-widest mb-1.5">
                Solution 03
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Industrial & <br className="hidden lg:block" />
                <span className="text-orange-600">Energy Solutions.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We close the gap in the energy value chain by providing robust
                industrial support, from secure fuel supply logistics to
                strategic energy consultancy for large-scale manufacturing
                plants.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100 flex gap-3 md:gap-6 group hover:bg-orange-50 transition-colors">
                <IconTruckDelivery className="text-orange-600 w-10 h-10 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg md:text-xl mb-1">
                    Logistics & Supply
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Ensuring the reliable delivery of energy resources through a
                    vetted network of storage and transport assets.
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-3 md:gap-6 group hover:bg-blue-50 transition-colors">
                <IconChartBar className="text-blue-600 w-10 h-10 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg md:text-xl mb-1">
                    Strategic Consultancy
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Providing data-backed insights to help industrial partners
                    optimize energy consumption and reduce overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
