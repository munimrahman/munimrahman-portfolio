"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { CaseStudyCard, CaseStudyCardProps } from "../../CaseStudyCard";
import SectionHeader from "../Shared/SectionHeader";

const caseStudies: CaseStudyCardProps[] = [
  {
    title: "SaaS Admin Dashboard",
    description:
      "A high-performance admin dashboard with role-based access control, real-time data visualization, and seamless API integrations.",
    engagement: "Fast",
    userSatisfaction: "5.0",
    image: "/web-1.avif",
    cardBackground: "#ffedd5", // Orange-100
  },
  {
    title: "Enterprise SEO Platform",
    description:
      "Scalable architected Next.js site handling thousands of pages with perfect Core Web Vitals and programmatic SEO structure.",
    engagement: "SEO",
    userSatisfaction: "4.9",
    image: "/web-2.avif",
    cardBackground: "#f3f4f6", // Gray-100
  },
  {
    title: "E-commerce MVP",
    description:
      "Rapidly developed MVP for a fashion startup, featuring custom checkout flow, inventory management, and fast mobile performance.",
    engagement: "MVP",
    userSatisfaction: "4.8",
    image: "/web-3.avif",
    cardBackground: "#fee2e2", // Red-100
  },
  {
    title: "Marketing Site Rebrand",
    description:
      "Complete overhaul of a legacy site to a modern, headless CMS powered Next.js application, resulting in 2x faster load times.",
    engagement: "Rebrand",
    userSatisfaction: "5.0",
    image: "/web-4.avif",
    cardBackground: "#e0f2fe", // Sky-100
  },
];

// ... existing code ...

interface StickyCard_001Props {
  i: number;
  caseStudy: CaseStudyCardProps;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StickyCard_001 = ({
  i,
  caseStudy,
  progress,
  range,
  targetScale,
}: StickyCard_001Props) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex origin-top flex-col overflow-hidden"
      >
        {/* <img src={src} alt={title} className="h-full w-full object-cover" /> */}
        <CaseStudyCard
          key={i}
          title={caseStudy.title}
          description={caseStudy.description}
          engagement={caseStudy.engagement}
          userSatisfaction={caseStudy.userSatisfaction}
          image={caseStudy.image}
          cardBackground={caseStudy.cardBackground}
        />
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[20vh]"
      >
        <SectionHeader
          name="Featured Projects"
          title="Real-World Experience"
          description="Not Just Demos. Production-ready applications."
        />
        {caseStudies.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (caseStudies.length - i - 1) * 0.1
          );
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              caseStudy={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { Skiper16, StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
