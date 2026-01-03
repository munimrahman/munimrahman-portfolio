import AboutHeroSection from "@/components/containers/AboutPage/AboutHeroSection";
import AboutJourneySection from "@/components/containers/AboutPage/AboutJourneySection";
import AboutSpecializationSection from "@/components/containers/AboutPage/AboutSpecializationSection";
import AboutPageSkillSection from "@/components/containers/AboutPage/AboutPageSkillSection";
import AboutProcessSection from "@/components/containers/AboutPage/AboutProcessSection";
import AboutPageExperienceSection from "@/components/containers/AboutPage/AboutPageExperienceSection";
import AboutClientsSection from "@/components/containers/AboutPage/AboutClientsSection";
import ServicesCTASection from "@/components/containers/Shared/ServiceCTASection";
import { ContactFormSectionV2 } from "@/components/containers/Shared/ContactFormSection";

const AboutMePage = () => {
  return (
    <>
      <AboutHeroSection />

      <AboutPageSkillSection className="bg-card py-16 md:py-32" />

      <AboutJourneySection className="bg-background py-16 md:py-32" />

      <AboutSpecializationSection />

      <AboutProcessSection className="bg-card" />

      <AboutPageExperienceSection className="py-32 bg-background" />

      <AboutClientsSection />

      {/* <FAQSection faqs={faqData} className="bg-background py-32" /> */}

      <ServicesCTASection className="py-20 md:py-32 bg-card" />

      <ContactFormSectionV2 className="py-20 md:py-32" />
    </>
  );
};

export default AboutMePage;
