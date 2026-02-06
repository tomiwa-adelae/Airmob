import Image from "next/image";
import React from "react";

const certifications = [
  {
    name: "NUPRC",
    logo: "/assets/images/nuprc-logo.jpg",
    label: "Regulatory Compliance",
  },
  {
    name: "NCDMB",
    logo: "/assets/images/nuprc-logo.jpg",
    label: "Local Content Certified",
  },
  {
    name: "ISO 9001",
    logo: "/assets/images/nuprc-logo.jpg",
    label: "Quality Management",
  },
  {
    name: "NNPC",
    logo: "/assets/images/nuprc-logo.jpg",
    label: "Strategic Partner",
  },
];

export const TrustBar = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col items-center mb-10 text-center">
          <h4 className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">
            Accreditations & Strategic Partnerships
          </h4>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:opacity-60 hover:opacity-100 transition-all">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 transition-all duration-300 hover:opacity-100 hover:scale-105"
            >
              <div className="h-12 md:h-16 w-auto lg:grayscale group-hover:grayscale-0 transition-all">
                <Image
                  width={1000}
                  height={1000}
                  src={cert.logo}
                  alt={cert.name}
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider lg:opacity-0 group-hover:opacity-100 transition-opacity">
                {cert.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
