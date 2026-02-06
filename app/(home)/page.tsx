import { AboutSection } from "./_components/AboutSection";
import { ContactFooter } from "./_components/ContactFooter";
import { Hero } from "./_components/Hero";
import { HomeNewsSection } from "./_components/HomeNewsSection";
import { InnovationSection } from "./_components/InnovationSection";
import { ServicesSection } from "./_components/ServicesSection";
import { StatsSection } from "./_components/StatsSection";
import { SubsidiarySection } from "./_components/SubsidiarySection";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <InnovationSection />
      <HomeNewsSection />
      <SubsidiarySection />
    </div>
  );
};

export default page;
