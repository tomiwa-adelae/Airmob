import {
  IconDroplet,
  IconSettings,
  IconSettingsAutomation,
} from "@tabler/icons-react";

const pillars = [
  {
    title: "Exploration & Production",
    desc: "Providing precision drilling support and technical expertise for upstream operations.",
    icon: IconSettings,
    color: "bg-yellow",
  },
  {
    title: "Lubricant Production",
    desc: "Manufacturing high-grade industrial lubricants designed for extreme durability and performance.",
    icon: IconDroplet,
    color: "bg-emerald-600",
  },
  {
    title: "Industrial Services",
    desc: "Integrated energy solutions, supply chain management, and technical consultancy.",
    icon: IconSettingsAutomation,
    color: "bg-orange-600",
  },
];

export const ServicePillars = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`${pillar.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20`}
              >
                <pillar.icon size={30} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-base">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
