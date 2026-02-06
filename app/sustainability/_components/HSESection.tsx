import {
  IconShieldCheckered,
  IconBolt,
  IconStethoscope,
  IconActivity,
} from "@tabler/icons-react";
import Image from "next/image";

export const HSESection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#040d0a] text-white overflow-hidden relative">
      {/* Subtle top border - Neon Emerald Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <IconShieldCheckered className="text-emerald-400 w-4 h-4" />
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Safety Management System
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Our Goal is{" "}
                <span className="text-emerald-500 italic">Zero Harm.</span>
              </h2>
            </div>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
              At AIRMOB, safety isn&apos;t just a policy—it&apos;s our DNA. We
              operate under stringent{" "}
              <span className="text-white font-semibold">HSE protocols</span> to
              ensure that every member of our team returns home safely, every
              single day.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-colors group">
                <IconBolt className="text-emerald-400 w-6 h-6 shrink-0 group-hover:animate-pulse" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide">
                    Risk Mitigation
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Proactive threat identification before operations begin.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-colors group">
                <IconStethoscope className="text-emerald-400 w-6 h-6 shrink-0 group-hover:animate-pulse" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide">
                    Health Monitoring
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Comprehensive health tracking for all field personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Powerful Visual */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/safety-standard.jpg"
                alt="Safety protocols on site"
                className="w-full h-[500px] object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040d0a] via-transparent to-transparent" />
            </div>

            {/* Safety Stat Card - The "Zero" Badge */}
            <div className="absolute -bottom-6 left-2 sm:-left-6 bg-emerald-500 p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(16,185,129,0.3)] z-20 border-4 border-[#040d0a] group hover:scale-105 transition-transform cursor-default">
              <div className="flex items-center gap-4">
                <p className="text-6xl font-black text-white leading-none">0</p>
                <IconActivity className="text-emerald-200/50 w-8 h-8 animate-bounce" />
              </div>
              <p className="text-[10px] font-black text-emerald-100 uppercase tracking-widest mt-3">
                Lost Time <br /> Injuries (LTI)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
