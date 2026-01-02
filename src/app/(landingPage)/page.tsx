import React from "react";
import HomeHeroSection from "@/components/containers/HomePage/HomeHeroSection";
import FAQSection from "@/components/containers/Shared/FAQSection";
import { FeaturedProject } from "@/components/containers/HomePage/FeaturedProject";
import ProblemSection from "@/components/containers/HomePage/ProblemSection";
import ServicesSection from "@/components/containers/HomePage/ServicesSection";
import HomeExperienceSection from "@/components/containers/HomePage/HomeExperienceSection";
import { FAQItem } from "@/types";
import SkillSection from "@/components/containers/HomePage/SkillSection";
import { ContactFormSectionV2 } from "@/components/containers/Shared/ContactFormSection";
import ServicesCTASection from "@/components/containers/Shared/SearviceCTASection";

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Do you specialize in Next.js only?",
    answer:
      "Yes. My work is focused on Next.js and modern frontend architecture.",
  },
  {
    id: 2,
    question: "Can you help with SEO for Next.js websites?",
    answer: "Absolutely. SEO is a core part of how I build applications.",
  },
  {
    id: 3,
    question: "How do we get started?",
    answer: "Just reach out — we’ll discuss your goals and next steps.",
  },
];

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
      <FAQSection faqs={faqData} className="py-16 md:py-32 bg-card" />
      <ContactFormSectionV2 className="pt-16 md:pt-32" />
    </>
  );
};

export default HomePage;
