import { IconMailForward, IconHash, IconCheck } from "@tabler/icons-react";

export const NewsSubscription = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
          {/* Left Side: Newsletter Signup */}
          <div className="lg:w-3/5 p-6 md:p-10 border-r border-slate-100">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                The AIRMOB <span className="text-primary">Energy Brief.</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Get monthly technical insights, project milestones, and West
                African energy market trends delivered directly to your inbox.
              </p>

              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Work email address"
                    className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white outline-none transition-all pr-36"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-6 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 px-2 uppercase tracking-widest font-bold">
                  * Join 1,200+ industry professionals. No spam.
                </p>
              </form>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  "Market Analysis",
                  "Tech Whitepapers",
                  "Safety Updates",
                  "Project News",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-slate-500 text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <IconCheck size={12} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Topics / Archive */}
          <div className="lg:w-2/5 p-6 md:p-10 bg-[#040d0a] text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full" />

            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                <IconHash className="text-primary" /> Browse by Topic
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Upstream",
                  "Lubricants",
                  "ESG",
                  "Innovation",
                  "Local Content",
                  "Safety",
                  "Logistics",
                  "AI in Oil",
                ].map((tag, i) => (
                  <button
                    key={i}
                    className="px-4 py-2 rounded-full border border-white/10 hover:border-primary hover:text-primary text-white text-xs font-bold transition-all"
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-slate-400 text-sm mb-4">
                  Looking for a specific report?
                </p>
                <button className="flex items-center gap-2 text-primary font-bold group">
                  Access Document Archive
                  <IconMailForward
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
