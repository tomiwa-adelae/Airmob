import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";

export const AboutCTA = () => {
  return (
    <section className="py-16 md:y-24 relative bg-[#040d0a] overflow-hidden">
      {/* Background with a subtle pattern */}
      {/* Background decoration: Changed to emerald/green blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full" />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/world-map.png')] bg-center bg-no-repeat bg-contain" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-8">
            <Handshake className="text-primary w-10 h-10" />
          </div>

          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Aspire to Greatness <br className="hidden md:block" />
            with AIRMOB?
          </h2>

          <p className="text-green-100 text-lg md:text-xl mb-10 opacity-80 leading-relaxed">
            We are more than an energy company; we are a movement. Partner with
            us as we redefine the Nigerian energy value chain through precision,
            integrity, and forward-thinking solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <Button className="w-full sm:w-auto">
              <Link href="/contact">Inquire About Partnerships</Link>
            </Button>
            <Button className="w-full sm:w-auto" variant="outline">
              <Link href="/solutions">View Our Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
