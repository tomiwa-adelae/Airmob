import { Button } from "@/components/ui/button";
import { HERO_VIDEO } from "@/constants";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] py-24 overflow-hidden flex items-center justify-center">
      {/* 1. Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 3. Content Container */}
      <div className="container relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tagline from Document */}
          <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-4 animate-fade-in">
            The AIRMOB Motion
          </span>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Aspiring to Greatness. <br className="hidden md:block" />
            <span className="text-emerald-500">Powering the Future.</span>
          </h1>

          <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
            AIRMOB is a leading force in Nigeria’s oil and gas industry,
            delivering innovative solutions in exploration, lubricant
            production, and digital energy services.
          </p>

          <div className="flex w-full sm:w-auto flex-col sm:flex-row items-center justify-center gap-2 mt-8">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/solutions">View our Solutions</Link>
            </Button>
            <Button asChild className="w-full sm:w-auto" variant="secondary">
              <Link href="/contact">Contact us now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 4. Subtle Bottom Gradient (Optional, looks professional) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent z-10" />
    </section>
  );
};
