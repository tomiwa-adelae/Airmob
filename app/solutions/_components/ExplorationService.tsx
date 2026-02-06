import {
  IconTargetArrow,
  IconDatabase,
  IconActivity,
} from "@tabler/icons-react";
import Image from "next/image";

export const ExplorationService = () => {
  return (
    <section
      id="exploration-support"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Industrial Imagery with Stats Overlay */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/drilling-site.jpg"
                alt="Precision Drilling Operations"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -right-8 bg-yellow-700 text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
              <IconActivity className="mb-4 w-10 h-10 text-yellow-200" />
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-2">
                Operational Goal
              </p>
              <p className="text-lg font-extrabold italic">
                "Maximizing Yield, Minimizing Risk."
              </p>
            </div>
          </div>

          {/* Right: Technical Details */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-yellow text-sm font-bold uppercase tracking-widest mb-1.5">
                Solution 01
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Exploration & <br className="hidden lg:block" />
                <span className="text-yellow text-outline">
                  Production Support.
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                AIRMOB provides a comprehensive suite of support services for
                the upstream sector. We specialize in precision drilling support
                and technical consultancy that ensures operations are efficient,
                safe, and compliant with global standards.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-3.5 md:gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow">
                  <IconTargetArrow size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">
                    Precision Drilling Support
                  </h4>
                  <p className="text-muted-foreground">
                    Utilizing advanced technical frameworks to ensure accuracy
                    in complex geological environments.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 md:gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow">
                  <IconDatabase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">
                    Digital Oilfield Insights
                  </h4>
                  <p className="text-slate-500">
                    Integration of IoT sensors and real-time data analytics to
                    monitor rig performance and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
