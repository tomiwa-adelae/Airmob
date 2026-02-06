import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Image from "next/image";

const leaders = [
  {
    name: "Name Placeholder",
    role: "Managing Director / CEO",
    image: "/assets/images/user.webp",
    bio: "Driving the strategic vision of AIRMOB with over 20 years of energy sector experience.",
    linkedin: "#",
  },
  {
    name: "Name Placeholder",
    role: "Technical Operations Director",
    image: "/assets/images/user.webp",
    bio: "Specializing in precision drilling and digital oilfield integration.",
    linkedin: "#",
  },
  {
    name: "Name Placeholder",
    role: "Head of Lubricants & Manufacturing",
    image: "/assets/images/user.webp",
    bio: "Expert in chemical engineering and high-performance industrial lubricants.",
    linkedin: "#",
  },
  {
    name: "Name Placeholder",
    role: "Director of Infrastructure (Forbliz)",
    image: "/assets/images/user.webp",
    bio: "Leading civil works and mining operations across the subsidiary arm.",
    linkedin: "#",
  },
];

export const Leadership = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-1.5">
            Our Leadership
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Visionary Leaders Steering <br className="hidden lg:block" /> The{" "}
            <span className="text-primary">AIRMOB Motion.</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            Our leadership team combines decades of global energy experience
            with a deep understanding of the Nigerian industrial landscape.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
          {leaders.map((leader, index) => (
            <div key={index} className="group flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 bg-slate-100">
                <Image
                  width={1000}
                  height={1000}
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Social Overlay */}
                <div className="absolute bottom-16 lg:bottom-4 right-4 translate-y-12 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={leader.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-emerald-700 shadow-lg"
                  >
                    <IconBrandLinkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Text Details */}
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {leader.name}
                </h4>
                <p className="text-primary font-semibold text-xs uppercase tracking-wider">
                  {leader.role}
                </p>
                <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed mt-3">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
