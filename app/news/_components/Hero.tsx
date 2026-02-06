import { IconTrendingUp, IconRss, IconNewSection } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative py-24 min-h-[80vh] bg-[#040d0a] overflow-hidden">
      {/* Background Radial Glow - Centered Emerald Hub */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent z-0" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Live Indicator - Refined for Emerald Branding */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">
              AIRMOB Intelligence Hub
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl  font-extrabold leading-[1.1] mb-6 tracking-tight">
            Insights on the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-500">
              Future of Energy.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Stay updated with corporate milestones, technical whitepapers, and
            market analysis from the heart of Nigeria&apos;s energy value chain.
          </p>

          {/* Quick Stats/Topics Bar - Uniform Emerald Palette */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl pt-6 border-t border-white/5">
            {[
              {
                icon: IconTrendingUp,
                label: "Market Trends",
                color: "text-emerald-400",
              },
              {
                icon: IconNewSection,
                label: "Project Updates",
                color: "text-emerald-400",
              },
              {
                icon: IconRss,
                label: "Tech Insights",
                color: "text-emerald-400",
              },
            ].map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 group cursor-default"
              >
                <div className="p-2 rounded-lg bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors">
                  <topic.icon
                    className={`${topic.color} w-5 h-5 transition-transform group-hover:scale-110`}
                  />
                </div>
                <span className="text-gray-300 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors">
                  {topic.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Grid Background - Clean emerald dots */}
      <div className="absolute inset-0 bg-[url('/assets/images/dots-pattern.jpg')] opacity-[0.03] invert pointer-events-none" />
    </section>
  );
};
