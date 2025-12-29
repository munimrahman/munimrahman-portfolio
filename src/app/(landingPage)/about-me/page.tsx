import AboutHeroSection from "@/components/containers/AboutPage/AboutHeroSection";
import AboutJourneySection from "@/components/containers/AboutPage/AboutJourneySection";
import AboutSpecializationSection from "@/components/containers/AboutPage/AboutSpecializationSection";
import AboutPageSkillSection from "@/components/containers/AboutPage/AboutPageSkillSection";
import AboutProcessSection from "@/components/containers/AboutPage/AboutProcessSection";
import ExperienceSectionV2 from "@/components/containers/AboutPage/ExperienceSectionV2";
import AboutClientsSection from "@/components/containers/AboutPage/AboutClientsSection";
import AboutCTASection from "@/components/containers/AboutPage/AboutCTASection";
import FAQSection from "@/components/containers/Shared/FAQSection";
import { FAQItem } from "@/types";

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Can you join our team mid-project?",
    answer:
      "Yes. We regularly embed with teams during critical phases, launching, scaling, or stabilizing complex apps.",
  },
  {
    id: 2,
    question: "How do you typically work with in-house developers?",
    answer:
      "We pair with your engineers, handle delivery together, and often support platform or architecture tracks.",
  },
  {
    id: 3,
    question: "Can you help us stabilize a team that’s moving too slowly?",
    answer:
      "Yes. We help uncover root causes, architecture, testing, performance, and improve delivery pace with hands-on engineering.",
  },
  {
    id: 4,
    question: "Can you take ownership of entire features or domains?",
    answer:
      "Absolutely. We’re often responsible for owning specific domains or refactors while collaborating closely with product and design.",
  },
  {
    id: 5,
    question: "Can you support CI, testing, and dev workflows too?",
    answer:
      "We do. We help teams align testing layers with architecture, and set up CI pipelines that reflect how code is actually used.",
  },
  {
    id: 6,
    question: "What if we use React in a monorepo or across multiple teams?",
    answer:
      "We’re comfortable designing boundaries, supporting shared packages, and working in monorepos with complex ownership and coordination needs.",
  },
  {
    id: 7,
    question: "How fast can you get started?",
    answer:
      "We’re built for integration. We can typically kick off within days and begin adding value immediately.",
  },
];

const AboutMePage = () => {
  return (
    <>
      <AboutHeroSection />

      {/* Journey Section - "My Journey into Web Development" */}
      <AboutJourneySection className="bg-background" />

      {/* Specialization Section - "What I Specialize In" */}
      <AboutSpecializationSection />

      {/* Skills Section - "My Tech Stack" */}
      <AboutPageSkillSection className="bg-background py-24" />

      {/* Process Section - "How I Work" */}
      <AboutProcessSection className="bg-card" />

      {/* Experience Section - "Experience & Approach" */}
      <ExperienceSectionV2 className="py-24 bg-background" />

      {/* Clients Section - "Who I Work With" */}
      <AboutClientsSection />

      {/* Faq Section */}
      <FAQSection faqs={faqData} className="bg-card py-24" />

      {/* CTA Section - "Let's Build Something Together" */}
      <AboutCTASection className="bg-background" />
    </>
  );
};

export default AboutMePage;
