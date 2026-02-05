import { Button } from "@/components/ui/button";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side: Professional Imagery */}
          <div className="w-full lg:w-1/2  relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/about.jpg"
                alt="AIRMOB Operations"
                height={1000}
                width={1000}
                className="size-full aspect-auto object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl hidden md:block shadow-xl">
              <p className="text-2xl font-bold">Since 2018</p>
              <p className="text-sm opacity-80">Leading Nigerian Excellence</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-2">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest">
              About AIRMOB Nigeria Limited
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The AIRMOB Motion:{" "}
              <span className="text-primary">Aspiring to Greatness</span>
            </h3>
            <p className="text-muted-foreground text-lg lg:text-base leading-relaxed">
              Founded in 2018, AIRMOB is a leading oil and gas industrial
              company committed to delivering excellence across the energy value
              chain. We relentlessly pursue new heights, driven by a vision to
              transform mobility and connectivity across Nigeria and beyond.
            </p>
            <div className="pt-4">
              <Button variant="secondary" className="text-primary">
                Learn more about our history
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
