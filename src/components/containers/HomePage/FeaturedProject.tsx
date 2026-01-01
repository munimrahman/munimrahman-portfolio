"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { CaseStudyCard, CaseStudyCardProps } from "../../CaseStudyCard";
import SectionHeader from "../Shared/SectionHeader";
import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";

const caseStudies: CaseStudyCardProps[] = [
  {
    title: "SaaS Admin Dashboard",
    description:
      "A high-performance admin dashboard with role-based access control, real-time data visualization, and seamless API integrations.",
    engagement: "Fast",
    userSatisfaction: "5.0",
    image: "/web-1.avif",
    lightBg: "#ffedd5", // Orange-100
    darkBg: "#1c1917", // Stone-900 (Warm dark)
  },
  {
    title: "Enterprise SEO Platform",
    description:
      "Scalable architected Next.js site handling thousands of pages with perfect Core Web Vitals and programmatic SEO structure.",
    engagement: "SEO",
    userSatisfaction: "4.9",
    image: "/web-2.avif",
    lightBg: "#f3f4f6", // Gray-100
    darkBg: "#18181b", // Zinc-950
  },
  {
    title: "E-commerce MVP",
    description:
      "Rapidly developed MVP for a fashion startup, featuring custom checkout flow, inventory management, and fast mobile performance.",
    engagement: "MVP",
    userSatisfaction: "4.8",
    image: "/web-3.avif",
    lightBg: "#fee2e2", // Red-100
    darkBg: "#1c1917", // Stone-900
  },
  {
    title: "Marketing Site Rebrand",
    description:
      "Complete overhaul of a legacy site to a modern, headless CMS powered Next.js application, resulting in 2x faster load times.",
    engagement: "Rebrand",
    userSatisfaction: "5.0",
    image: "/web-4.avif",
    lightBg: "#e0f2fe", // Sky-100
    darkBg: "#0f172a", // Slate-900
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
      className="sticky top-20 md:top-28 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 40}px)`,
        }}
        className="rounded-4xl relative flex origin-top flex-col overflow-hidden"
      >
        {/* <img src={src} alt={title} className="h-full w-full object-cover" /> */}
        <CaseStudyCard
          key={i}
          title={caseStudy.title}
          description={caseStudy.description}
          engagement={caseStudy.engagement}
          userSatisfaction={caseStudy.userSatisfaction}
          image={caseStudy.image}
          lightBg={caseStudy.lightBg}
          darkBg={caseStudy.darkBg}
        />
      </motion.div>
    </div>
  );
};

interface Props extends ComponentProps {}

const FeaturedProject = ({ className }: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <section className={cn("relative container", className)}>
        <div
          ref={container}
          className={cn(
            "relative flex w-full flex-col items-center justify-center pb-[12vh]"
          )}
        >
          <SectionHeader
            name="Featured Projects"
            title="Real-World Experience"
            description="Not Just Demos. Production-ready applications."
            className=""
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
        </div>
      </section>
    </ReactLenis>
  );
};

export { FeaturedProject, StickyCard_001 };

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
