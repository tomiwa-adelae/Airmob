import { Target, Eye, ShieldCheck, Leaf, Handshake } from "lucide-react";

export const MissionValues = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-14 md:mb-20">
          <div className="p-10 rounded-2xl bg-emerald-50 border border-slate-100 space-y-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-6">
              <Target className="size-5" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To power industries, support communities, and contribute to
              national development through innovation and excellence in the
              energy value chain.
            </p>
          </div>

          <div className="p-10 rounded-2xl bg-primary text-white space-y-4 shadow-xl">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary mb-6">
              <Eye className="size-5" />
            </div>
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-emerald-100 leading-relaxed text-lg">
              To be a vital force in Africa&apos;s oil and gas sector,
              pioneering digital transformation and sustainable energy practices
              for a brighter continent.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-4">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-1.5">
            Our Foundation
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Core Corporate Values
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-8">
            <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-primary mb-6">
              <ShieldCheck size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Safety First</h4>
            <p className="text-muted-foreground text-base">
              Zero-compromise approach to operational safety and the health of
              our workforce.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-primary mb-6">
              <Handshake size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Uncompromising Integrity</h4>
            <p className="text-muted-foreground text-base">
              Building trust through transparent, ethical, and reliable business
              partnerships.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-primary mb-6">
              <Leaf size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">
              Environmental Responsibility
            </h4>
            <p className="text-muted-foreground text-base">
              Committed to sustainability through smart drilling and
              carbon-conscious operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
