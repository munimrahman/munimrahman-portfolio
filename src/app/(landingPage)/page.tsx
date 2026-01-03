import HomeHeroSection from "@/components/containers/HomePage/HomeHeroSection";
import { FeaturedProject } from "@/components/containers/HomePage/FeaturedProject";
import ProblemSection from "@/components/containers/HomePage/ProblemSection";
import ServicesSection from "@/components/containers/HomePage/ServicesSection";
import HomeExperienceSection from "@/components/containers/HomePage/HomeExperienceSection";
import SkillSection from "@/components/containers/HomePage/SkillSection";
import { ContactFormSectionV2 } from "@/components/containers/Shared/ContactFormSection";
import ServicesCTASection from "@/components/containers/Shared/ServiceCTASection";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <SkillSection className="py-16 md:py-32 bg-card" />
      <FeaturedProject className="py-16 md:py-32" />
      <ProblemSection className="py-16 md:py-32 bg-card" />
      <ServicesSection className="py-16 md:py-32" />
      <HomeExperienceSection className="py-16 md:py-32 bg-card" />
      <ServicesCTASection className="py-16 md:py-32" />
      {/* <FAQSection faqs={faqData} className="py-16 md:py-32 bg-card" /> */}
      <ContactFormSectionV2 className="pt-16 md:pt-32" />
    </>
  );
};

export default HomePage;
