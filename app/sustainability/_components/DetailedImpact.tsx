import {
  IconLeaf,
  IconSchool,
  IconUsersGroup,
  IconArrowUpRight,
  IconHeartRateMonitor,
} from "@tabler/icons-react";

const details = [
  {
    category: "Environment",
    title: "Biodiversity & Conservation",
    desc: "Implementing strict protocols to protect local ecosystems near our operation sites and minimizing waste through circular manufacturing.",
    icon: IconLeaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    category: "Education",
    title: "Technical Scholarships",
    desc: "Empowering the next generation of Nigerian engineers through STEM scholarships and hands-on technical internship programs.",
    icon: IconSchool,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    category: "Health",
    title: "Community Wellness",
    desc: "Supporting local health initiatives and ensuring world-class medical standards for our workforce and their families.",
    icon: IconHeartRateMonitor,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    category: "Community",
    title: "Local Infrastructure",
    desc: "Partnering with host communities to build sustainable infrastructure, from clean water access to improved energy grids.",
    icon: IconUsersGroup,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export const DetailedImpact = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-1.5 text-primary">
            Depth of Impact
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Our Commitment in <span className="text-primary">Action.</span>
          </h3>
        </div>
        <p className="text-slate-500 text-lg mt-2 max-w-2xl">
          We move beyond corporate responsibility into active participation in
          Nigeria's social and environmental growth.
        </p>

        <div className="grid md:grid-cols-2 mt-10 gap-6">
          {details.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100"
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center transition-colors`}
                >
                  <item.icon size={28} />
                </div>
                <IconArrowUpRight className="text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <span
                className={`text-${item.color}-600 text-xs font-bold uppercase tracking-widest`}
              >
                {item.category}
              </span>
              <h4 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                {item.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
