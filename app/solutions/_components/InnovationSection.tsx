import {
  IconCpu,
  IconChartInfographic,
  IconCloudLock,
} from "@tabler/icons-react";

export const InnovationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#040d0a] text-white overflow-hidden relative">
      {/* Background Tech Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full" />
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/tech-grid.png')] bg-repeat" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-3">
            Innovation & Technology
          </h2>
          <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-6 leading-tight">
            Building the{" "}
            <span className="text-emerald-400">Digital Oilfield.</span>
          </h3>
          <p className="text-gray-400 text-lg">
            We are redefining the energy value chain by integrating Artificial
            Intelligence and IoT into traditional operations to enhance safety
            and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
              <IconCpu size={30} />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl md:text-2xl font-bold">IoT Integration</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                Real-time sensors on drilling rigs and manufacturing lines
                provide constant data streams to prevent downtime before it
                happens.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform">
              <IconChartInfographic size={30} />
            </div>
            <h4 className="text-2xl font-bold">Predictive Analytics</h4>
            <p className="text-slate-400 leading-relaxed">
              Using AI to analyze geological data and lubricant performance,
              optimizing output and reducing environmental impact.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/20 group-hover:scale-110 transition-transform">
              <IconCloudLock size={30} />
            </div>
            <h4 className="text-2xl font-bold">Carbon Capture</h4>
            <p className="text-slate-400 leading-relaxed">
              Pioneering technical frameworks for carbon reduction in energy
              production to support Nigeria’s sustainable development goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
