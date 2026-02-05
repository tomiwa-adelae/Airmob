import { AboutSection } from "./_components/AboutSection";
import { ContactFooter } from "./_components/ContactFooter";
import { Hero } from "./_components/Hero";
import { InnovationSection } from "./_components/InnovationSection";
import { ServicesSection } from "./_components/ServicesSection";
import { SubsidiarySection } from "./_components/SubsidiarySection";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <InnovationSection />
      <SubsidiarySection />
      <ContactFooter />
    </div>
  );
};

export default page;
