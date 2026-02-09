import { Button } from "@/components/ui/button";
import { IconExternalLink, IconArrowRight } from "@tabler/icons-react";
import { HardHat, Mountain, Construction } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Mountain, label: "Mining" },
  { icon: Construction, label: "Civil Works" },
  { icon: HardHat, label: "Operations" },
];

export const SubsidiarySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container">
        {/* Main Card */}
        <div className="relative rounded-2xl bg-[#040d0a] text-white p-8 md:p-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/digger.jpg"
              alt="Industrial Digger"
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
              priority
            />
            {/* 2. Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040d0a] via-[#040d0a]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040d0a] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            {/* Left Column: Narrative */}
            <div className="w-full lg:w-3/5 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/10 border border-gray-100/10 rounded-full">
                <span className="w-2 h-2 bg-gray-100 rounded-full animate-pulse" />
                <span className="text-gray-300 text-[10px] font-black uppercase tracking-[0.2em]">
                  Our Strategic Subsidiary
                </span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-yellow mb-4 tracking-tighter uppercase italic">
                  FORBLIZ <br />
                  <span className="text-white drop-shadow-sm">
                    Global Resources
                  </span>
                </h2>
                <p className="text-green-100 text-xl italic font-medium border-l-2 border-primary pl-4">
                  "...where brilliance begins and greatness rises"
                </p>
              </div>

              <p className="text-white text-lg leading-relaxed max-w-xl font-medium">
                As the infrastructure arm of AIRMOB Nigeria Limited, FORBLIZ
                specializes in large-scale civil engineering, mining, and
                logistics. We translate energy potential into physical progress.
              </p>

              {/* <Button disabled variant={"white"}>
                <a target="_blank" href="https://forbliz.com/">
                Visit Forbliz.com
                <IconExternalLink />
                </a>
              </Button> */}
            </div>

            {/* Right Column: Feature Grid & Visual */}
            <div className="w-full lg:w-2/5 grid gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-2xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon size={16} strokeWidth={1.5} />
                  </div>
                  <span className="text-white font-bold text-base tracking-tight uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Large Abstract Background Icon */}
          <Construction className="absolute -bottom-20 -right-20 w-96 h-96 text-slate-950/5 -rotate-12 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
