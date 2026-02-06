import { DEFAULT_IMAGE } from "@/constants";
import {
  IconSchool,
  IconBuildingSkyscraper,
  IconUserPlus,
} from "@tabler/icons-react";

export const CommunityImpact = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Side: Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={DEFAULT_IMAGE}
                alt="Nigerian Engineers in training"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
              <div className="bg-emerald-50 p-4 md:p-8 rounded-2xl">
                <IconUserPlus className="text-emerald-600 mb-2 md:mb-4 size-6 md:size-10" />
                <h4 className="text-base md:text-lg font-bold text-slate-900 italic">
                  "Empowering the local workforce is our greatest investment."
                </h4>
              </div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="bg-emerald-600 p-5 md:p-8 rounded-2xl text-white">
                <p className="text-4xl font-bold">95%</p>
                <p className="text-xs mt-1.5 font-semibold uppercase tracking-widest opacity-80">
                  Local Procurement
                </p>
              </div>
              <img
                src={DEFAULT_IMAGE}
                alt="Community development"
                className="rounded-2xl w-full h-80 object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-1.5">
                Community & Growth
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Investing in <br className="hidden lg:block" />
                <span className="text-emerald-600 text-outline">
                  Nigerian Excellence.
                </span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sustainability at AIRMOB goes beyond the environment. We are
                committed to the socio-economic development of Nigeria by
                ensuring that our operations create tangible opportunities for
                the people and businesses in our host communities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3 md:gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 shrink-0">
                  <IconSchool size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Skill Acquisition
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Providing specialized technical training to bridge the gap
                    between education and industry requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 shrink-0">
                  <IconBuildingSkyscraper size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Infrastructure Support
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Partnering with local stakeholders to improve community
                    access to essential services and energy.
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
