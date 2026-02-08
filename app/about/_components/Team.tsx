import { DEFAULT_IMAGE } from "@/constants";
import {
  IconUsersGroup,
  IconUserCog,
  IconCertificate,
} from "@tabler/icons-react";
import Image from "next/image";

export const Team = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-1.5">
              Our Human Capital
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              A Dynamic Blend of <br className="hidden lg:block" />
              <span className="text-primary">Talented Individuals.</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At AIRMOB, we believe that technology is only as powerful as the
              people who operate it. Our team is a diverse group of industry
              veterans and forward-thinking innovators dedicated to pushing the
              boundaries of what’s possible in the Nigerian energy sector.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <IconUserCog className="text-primary w-6 h-6" />
                </div>
                <span className="font-bold text-slate-800">
                  Technical Expertise
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <IconUsersGroup className="text-primary w-6 h-6" />
                </div>
                <span className="font-bold text-slate-800">
                  Collaborative Culture
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Representation */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  width={1000}
                  height={1000}
                  src={"/assets/images/cac.jpeg"}
                  alt="Engineers on site"
                  className="rounded-2xl w-full h-64 object-top object-cover shadow-lg"
                />
                <div className="bg-emerald-800 p-6 md:p-8 rounded-2xl text-white">
                  <p className="text-2xl md:text-3xl font-bold mb-1">100%</p>
                  <p className="text-xs lg:text-sm opacity-80 uppercase tracking-widest font-semibold">
                    Nigerian Talent
                  </p>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="bg-green-950 p-6 md:p-8 rounded-2xl text-white">
                  <IconCertificate className="w-8 h-8 text-green-400 mb-4" />
                  <p className="text-base lg:text-lg font-bold">
                    Industry Certified
                  </p>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src={"/assets/images/engineer.jpg"}
                  alt="Innovation team"
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
