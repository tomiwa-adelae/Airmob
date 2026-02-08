import React from "react";
import { Hero } from "./_components/Hero";
import { MissionValues } from "./_components/MissionValues";
import { Team } from "./_components/Team";
import { AboutCTA } from "./_components/AboutCTA";
import { Leadership } from "./_components/Leadership";
import { TrustBar } from "./_components/TrustBar";

const page = () => {
  return (
    <div>
      <Hero />
      <MissionValues />
      <Team />
      {/* <Leadership /> */}
      <AboutCTA />
      <TrustBar />
    </div>
  );
};

export default page;
