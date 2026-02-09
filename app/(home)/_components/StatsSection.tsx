import {
  IconUsers,
  IconSettingsAutomation,
  IconTrophy,
  IconShieldCheck,
} from "@tabler/icons-react";

const stats = [
  {
    label: "Years of Excellence",
    value: "7+",
    icon: IconTrophy,
    description: "Consistent growth in the energy sector.",
  },
  {
    label: "Projects to be completed",
    value: "250+",
    icon: IconSettingsAutomation,
    description: "Successful upstream & midstream deliveries.",
  },
  {
    label: "Local Content",
    value: "95%",
    icon: IconUsers,
    description: "Empowering the Nigerian workforce.",
  },
  {
    label: "Safety Record",
    value: "0 LTI",
    icon: IconShieldCheck,
    description: "Zero Lost Time Injuries across all sites.",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-[#040d0a] relative overflow-hidden">
      {/* Background decoration: Changed to emerald/green blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center space-y-4"
            >
              {/* Icon Wrapper */}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-white/10">
                <stat.icon size={24} strokeWidth={1.5} />
              </div>

              {/* Number */}
              <div className="space-y-1">
                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                    {stat.value}
                  </h3>
                  <p className="text-primary font-bold uppercase tracking-widest text-[10px]">
                    {stat.label}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed max-w-[150px] group-hover:opacity-100 transition-opacity duration-500">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Bottom Border/Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
