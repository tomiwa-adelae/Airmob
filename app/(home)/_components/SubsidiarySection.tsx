// import { Button } from "@/components/ui/button";
// import { IconExternalLink } from "@tabler/icons-react";
// import { HardHat, Mountain, Construction, ArrowUpRight } from "lucide-react";

// export const SubsidiarySection = () => {
//   return (
//     <section className="py-16 lg:py-24 bg-white overflow-hidden">
//       <div className="container">
//         <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-2xl py-8 md:py-16 relative overflow-hidden shadow-2xl shadow-yellow-200/50">
//           {/* Subtle Industrial Pattern Overlay */}
//           <div
//             className="absolute inset-0 opacity-10 pointer-events-none"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           />

//           <div className="relative container z-10">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/10 border border-slate-900/20 rounded-full mb-6">
//               <span className="w-2 h-2 bg-slate-900 rounded-full animate-pulse" />
//               <span className="text-slate-900 text-xs font-bold uppercase tracking-widest">
//                 Our Subsidiary
//               </span>
//             </div>

//             <h2 className="text-3xl max-w-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
//               FORBLIZ Global Resources
//             </h2>
//             <p className="text-amber-900/80 italic text-xl mb-6 font-medium max-w-4xl">
//               "...where brilliance begins and greatness rises"
//             </p>

//             <p className="text-slate-800 text-lg leading-relaxed mb-6 max-w-2xl">
//               As a key subsidiary of AIRMOB Nigeria Limited, FORBLIZ specializes
//               in large-scale construction and mining. We bridge the gap between
//               energy and infrastructure.
//             </p>

//             {/* Feature Grid: Using semi-transparent dark backgrounds */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
//               {[
//                 { icon: <Mountain />, label: "Mining" },
//                 { icon: <Construction />, label: "Civil Works" },
//                 { icon: <HardHat />, label: "Operations" },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 bg-white/20 backdrop-blur-sm p-4 rounded- blgorder border-white/30"
//                 >
//                   <div className="text-slate-900">
//                     {item.icon}
//                     {/* {Math.cloneElement(item.icon, { className: "w-6 h-6" })} */}
//                   </div>
//                   <span className="text-slate-900 font-semibold uppercase text-sm tracking-wide">
//                     {item.label}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Premium Button */}
//             <Button asChild variant={"black"}>
//               <a target="_blank" href="https://forbliz.com/">
//                 Visit Subsidiary Website <IconExternalLink />
//               </a>
//             </Button>
//           </div>

//           {/* Decorative Large Icon in Background */}
//           <Construction className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-900/5 rotate-12 pointer-events-none" />
//         </div>
//       </div>
//     </section>
//   );
// };

import { Button } from "@/components/ui/button";
import { IconExternalLink, IconArrowRight } from "@tabler/icons-react";
import { HardHat, Mountain, Construction } from "lucide-react";

const features = [
  { icon: Mountain, label: "Mining" },
  { icon: Construction, label: "Civil Works" },
  { icon: HardHat, label: "Operations" },
];

export const SubsidiarySection = () => {
  return (
    <section className="pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="container">
        {/* Main Card */}
        <div className="relative rounded-2xl bg-[#040d0a] text-white p-8 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full" />
          {/* 1. Subtle Industrial Pattern & Mesh Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

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

              <Button asChild variant={"white"}>
                <a target="_blank" href="https://forbliz.com/">
                  Visit Forbliz.com
                  <IconExternalLink />
                </a>
              </Button>
            </div>

            {/* Right Column: Feature Grid & Visual */}
            <div className="w-full lg:w-2/5 flex flex-col gap-2">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 md:gap-6 bg-green-950 backdrop-blur-xl p-3 md:p-6 rounded-2xl border border-green-500/40 shadow-sm hover:bg-green-500/60 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-amber-950/10">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-white font-bold text-lg">
                      {item.label}
                    </span>
                  </div>
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
