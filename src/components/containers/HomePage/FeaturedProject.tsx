"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { CaseStudyCard } from "../../CaseStudyCard";
import SectionHeader from "../Shared/SectionHeader";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { projects } from "@/constants";
import { Project } from "@/types";

// ... existing code ...

interface StickyCard_001Props {
  i: number;
  caseStudy: Project;
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
        className="relative flex origin-top flex-col overflow-hidden"
      >
        {/* <img src={src} alt={title} className="h-full w-full object-cover" /> */}
        <CaseStudyCard
          project={caseStudy}
          className={i === 3 ? "max-w-5xl" : ""}
        />
      </motion.div>
    </div>
  );
};

interface Props extends ComponentProps<"section"> {}

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
            "relative flex w-full flex-col items-center justify-center pb-[5vh]"
          )}
        >
          <SectionHeader
            name="Featured Projects"
            title="Selected Projects"
            description="Production-ready applications built for real-world use"
            className=""
          />
          {projects.map((project, i) => {
            const targetScale =
              Math.max(0.5, 1 - (projects.length - i - 1) * 0.1) *
              (i === projects.length - 1 ? 0.97 : 1);
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
