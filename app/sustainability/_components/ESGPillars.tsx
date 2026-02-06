import { IconLeaf, IconUsers, IconGavel } from "@tabler/icons-react";

const esgPillars = [
  {
    title: "Environmental Stewardship",
    description:
      "Minimizing our industrial footprint through advanced waste management and exploring carbon capture technologies in our drilling support operations.",
    icon: IconLeaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Social Empowerment",
    description:
      "Investing in the Nigerian workforce. 100% of our on-site teams are local experts, fostering economic growth within the communities where we operate.",
    icon: IconUsers,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Ethical Governance",
    description:
      "Operating with radical transparency and integrity. Our leadership ensures strict adherence to international safety and ethical standards.",
    icon: IconGavel,
    color: "text-slate-600",
    bgColor: "bg-slate-100",
  },
];

export const ESGPillars = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-1.5">
            Our Framework
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Sustainability Built into the{" "}
            <span className="text-emerald-600">Core of Motion.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {esgPillars.map((pillar, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 group"
            >
              <div
                className={`${pillar.bgColor} ${pillar.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                <pillar.icon size={32} />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-slate-900">
                  {pillar.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
