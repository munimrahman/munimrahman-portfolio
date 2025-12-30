import React from "react";
import HomeHeroSection from "@/components/containers/HomePage/HomeHeroSection";
import FAQSection from "@/components/containers/Shared/FAQSection";
import { FeaturedProject } from "@/components/containers/HomePage/FeaturedProject";
import ProblemSection from "@/components/containers/HomePage/ProblemSection";
import ServicesSection from "@/components/containers/HomePage/ServicesSection";
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
      <SkillSection className="py-20 md:py-32 bg-card" />
      <FeaturedProject className="py-20 md:py-32" />
      <ProblemSection className="py-20 md:py-32 bg-card" />
      <ServicesSection />
      <FAQSection faqs={faqData} className="bg-card py-20 md:py-32" />
      <HomeCTASection />
    </>
  );
};

export default HomePage;
