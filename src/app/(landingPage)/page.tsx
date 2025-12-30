import React from "react";
import HomeHeroSection from "@/components/containers/HomePage/HomeHeroSection";
import { Skiper16 } from "@/components/containers/HomePage/FeaturedProject";
import FAQSection from "@/components/containers/Shared/FAQSection";
import TrustSection from "@/components/containers/HomePage/TrustSection";
import ProblemSection from "@/components/containers/HomePage/ProblemSection";
import ServicesSection from "@/components/containers/HomePage/ServicesSection";
import WhyMeSection from "@/components/containers/HomePage/WhyMeSection";
import HomeCTASection from "@/components/containers/HomePage/HomeCTASection";
import { FAQItem } from "@/types";
import SkillSection from "@/components/containers/HomePage/SkillSection";

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
      <SkillSection />
      <Skiper16 />
      <ProblemSection />
      {/* <ScrollServiceSection /> */}
      <ServicesSection />
      <WhyMeSection />
      <FAQSection faqs={faqData} className="bg-orange-50/50 py-20 md:py-32" />
      <HomeCTASection />
    </>
  );
};

export default HomePage;
