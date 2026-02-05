import { IconChartBar, IconCpu, IconWind } from "@tabler/icons-react";
import { Cpu, Wind, BarChart3 } from "lucide-react";
import Image from "next/image";

export const InnovationSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#040d0a] text-white overflow-hidden relative">
      {/* Background decoration: Changed to emerald/green blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Tagline: Now in Green */}
            <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-3">
              Future-Ready Energy
            </h2>
            <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
              Transforming Traditional <br />
              Operations with{" "}
              <span className="text-emerald-400">Intelligence.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              AIRMOB is committed to fostering innovation. By leveraging
              cutting-edge technologies, we aim to transform traditional
              operations into efficient, environmentally friendly processes.
            </p>

            <div className="space-y-8">
              {/* Innovation Item 1 - Tech Green */}
              <div className="flex gap-3 group">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <IconCpu className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
                    Digital Oilfields (AI & IoT)
                  </h4>
                  <p className="text-gray-400 text-base">
                    Real-time data and predictive maintenance to reduce downtime
                    and improve safety.
                  </p>
                </div>
              </div>

              {/* Innovation Item 2 - Eco Green */}
              <div className="flex gap-3 group">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <IconWind className="text-green-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 group-hover:text-green-400 transition-colors">
                    Carbon Capture & Smart Drilling
                  </h4>
                  <p className="text-gray-400 text-base">
                    Sustainable practices that reduce emissions while boosting
                    production efficiency.
                  </p>
                </div>
              </div>

              {/* Innovation Item 3 - Lime/Teal Green */}
              <div className="flex gap-3 group">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <IconChartBar className="text-teal-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 group-hover:text-teal-400 transition-colors">
                    Automation & Analytics
                  </h4>
                  <p className="text-gray-400 text-base">
                    Improving decision-making and ensuring strict compliance
                    with environmental regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Tech-focused Visual */}
          <div className="relative">
            <div className="relative z-10 p-2 bg-emerald-500/10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <Image
                height={1000}
                width={1000}
                src="/assets/images/tech-oil.png"
                alt="Digital Innovation in Energy"
                className="rounded-2xl aspect-auto size-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Floating Data Card - Now Emerald */}
            <div className="absolute hidden md:block -bottom-20 -left-6 bg-emerald-600 p-6 rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] xl:block z-50 border border-emerald-400/20">
              <p className="text-xs uppercase tracking-widest text-emerald-100 opacity-80 mb-1">
                Live Analytics
              </p>
              <p className="text-2xl font-bold text-white">98.4% Efficiency</p>
              <div className="w-full bg-emerald-900/40 h-1 mt-3 rounded-full overflow-hidden">
                <div className="bg-white h-full w-[98%] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
