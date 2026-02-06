import {
  IconFileText,
  IconHandStop,
  IconArrowRight,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export const SustainabilityCTA = () => {
  return (
    <section className="pb-16 md:pb-24 bg-white">
      <div className="container">
        <div className="relative rounded-2xl bg-[#040d0a] overflow-hidden p-8 md:p-16">
          {/* Abstract background glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
                Partner with us in <br className="hidden lg:block" />
                <span className="text-emerald-400">Responsible Growth.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                Whether you are a community stakeholder, a regulatory body, or
                an industrial partner, let&apos;s discuss how we can drive the
                Nigerian energy sector forward—sustainably.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Button>Partner With Us</Button>

              <Button variant="outline">
                <IconFileText className="text-emerald-400" />
                View 2025 ESG Report
              </Button>
            </div>
          </div>

          {/* Bottom decorative bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0" />
        </div>
      </div>
    </section>
  );
};
