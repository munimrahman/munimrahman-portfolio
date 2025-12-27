"use client";

import { motion, useScroll, useTransform } from "motion/react";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { CaseStudyCard, CaseStudyCardProps } from "../CaseStudyCard";

const caseStudies: CaseStudyCardProps[] = [
  {
    title: "Budget Planner Finance App",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
    engagement: "12 min",
    userSatisfaction: "4.5",
    image: "/web-1.avif",
    cardBackground: "#d9f0d3",
  },
  {
    title: "Digital Product Design Solution",
    description:
      "Focus was to create a user-friendly interface that simplified the process of accessing premium operational web scraping proxies. ",
    engagement: "12 min",
    userSatisfaction: "4.5",
    image: "/web-2.avif",
    cardBackground: "#FAE5D0",
  },
  {
    title: "Bitbo - Bitcoin Stats & Data",
    description:
      "Leading Bitcoin Data and Stats site. Live price action, monitor on-chain data, and track key economic indicators.",
    engagement: "12 min",
    userSatisfaction: "4.5",
    image: "/web-3.avif",
    cardBackground: "#E7E0EB",
  },
  {
    title: "UI Design for Internet Sharing App",
    description:
      "An innovative app and approach for taking advantage of unused internet from people's devices. It differs from others because of its simplicity, functions, and ways to earn extra money.",
    engagement: "12 min",
    userSatisfaction: "4.5",
    image: "/web-4.avif",
    cardBackground: "#D1EAFA",
  },
];

const projects = [
  {
    title: "Project 1",
    src: "/images/p1.avif",
  },
  {
    title: "Project 2",
    src: "/images/p2.avif",
  },
  {
    title: "Project 3",
    src: "/images/p3.avif",
  },
  {
    title: "Project 4",
    src: "/images/p4.avif",
  },
  {
    title: "Project 5",
    src: "/images/p5.avif",
  },
];

interface StickyCard_001Props extends CaseStudyCardProps {
  i: number;
  caseStudy: CaseStudyCardProps;
  progress: any;
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
