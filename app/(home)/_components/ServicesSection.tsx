import { Button } from "@/components/ui/button";
import { Droplets, Drill, Factory } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ServicesSection = () => {
  const services = [
    {
      title: "Exploration & Production",
      desc: "Providing precision drilling and technical support services that drive efficiency in the upstream sector.",
      icon: <Drill className="w-6 h-6 text-orange-600" />,
      iconBg: "bg-orange-50",
      image: "/assets/images/drilling.jpg",
      slug: "/solutions/#exploration-support",
    },
    {
      title: "Lubricant Production",
      desc: "Manufacturing high-performance lubricants designed for smooth performance and long-lasting industrial protection.",
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-50",
      image: "/assets/images/lubricant-oil.jpg",
      slug: "/solutions/#lubricant-production",
    },
    {
      title: "Industrial Energy Solutions",
      desc: "Managing secure storage, supply chains, and expert consultancy for complex energy projects.",
      icon: <Factory className="w-6 h-6 text-slate-600" />,
      iconBg: "bg-slate-100",
      image: "/assets/images/storage.jpg",
      slug: "/solutions/#industrial-services",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            What We Do
          </h2>
          <h3 className="text-4xl font-bold mb-6">
            Powering the Energy Value Chain
          </h3>
          <p className="text-muted-foreground text-lg">
            AIRMOB Nigeria Limited delivers excellence through a diverse
            portfolio of specialized services tailored to the evolving needs of
            the global energy market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-visible shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Container */}
              <div className="rounded-t-2xl overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  height={1000}
                  width={1000}
                  className="size-full object-cover aspect-video md:aspect-square lg:aspect-video group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay for subtle depth */}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Area */}
              <div className="p-8 pt-10 relative">
                {/* Floating Icon Wrapper */}
                <div
                  className={`absolute -top-8 left-8 w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center shadow-lg border-4 border-white transform group-hover:-translate-y-1 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {service.desc}
                </p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link href={service.slug}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
