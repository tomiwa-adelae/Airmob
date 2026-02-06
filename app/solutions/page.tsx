import React from "react";
import { Hero } from "./_components/Hero";
import { ServicePillars } from "./_components/ServicePillars";
import { ExplorationService } from "./_components/ExplorationService";
import { LubricantService } from "./_components/LubricantService";
import { IndustrialEnergyService } from "./_components/IndustrialEnergyService";
import { InnovationSection } from "./_components/InnovationSection";
import { TechnicalResources } from "./_components/TechnicalResources";

const page = () => {
  return (
    <div>
      <Hero />
      <ServicePillars />
      <div className="flex flex-col">
        <ExplorationService />
        <LubricantService />
        <IndustrialEnergyService />
      </div>
      <InnovationSection />
      <TechnicalResources />
    </div>
  );
};

export default page;
