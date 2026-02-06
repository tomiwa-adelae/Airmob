import React from "react";
import { Hero } from "./_components/Hero";
import { ESGPillars } from "./_components/ESGPillars";
import { HSESection } from "./_components/HSESection";
import { CommunityImpact } from "./_components/CommunityImpact";
import { DetailedImpact } from "./_components/DetailedImpact";
import { SustainabilityCTA } from "./_components/SustainabilityCTA";

const page = () => {
  return (
    <div>
      <Hero />
      <ESGPillars />
      <HSESection />
      <DetailedImpact />
      <CommunityImpact />
      <SustainabilityCTA />
    </div>
  );
};

export default page;
