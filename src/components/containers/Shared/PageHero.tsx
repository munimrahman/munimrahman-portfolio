"use client";

import { ComponentProps } from "@/types";
import { motion } from "motion/react";

interface Props extends ComponentProps {
  title: string;
  heading: string;
  headingWithColor: string;
  description: string;
}

const PageHero = ({ title, heading, headingWithColor, description }: Props) => {
  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden flex flex-col items-center justify-center text-center md:container md:mx-auto">
      {/* Sunrise Glow Effect - Multiple layers for depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full md:h-125 pointer-events-none z-0">
        {/* Core - The "Sun" */}
        <div className="absolute -bottom-8 md:-bottom-12.5 left-1/2 -translate-x-1/2 w-48 md:w-80 h-32 md:h-60 bg-orange-50/10 dark:bg-orange-500/20 blur-[60px] md:blur-[250px] rounded-full" />

        {/* Primary Glow - Spreading upward */}
        <div className="absolute -bottom-12 md:-bottom-25 left-1/2 -translate-x-1/2 w-full max-w-[90vw] md:max-w-3xl h-48 md:h-100 bg-linear-to-t from-orange-500/20 dark:from-orange-500/15 via-orange-500/5 to-transparent blur-[80px] md:blur-[80px] rounded-full" />

        {/* Secondary Wide Glow */}
        <div className="absolute -bottom-16 md:-bottom-37.5 left-1/2 -translate-x-1/2 w-full max-w-[100vw] md:max-w-5xl h-64 md:h-125 bg-orange-500/5 dark:bg-orange-500/5 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* Fading Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent z-10" />

      <div className="container relative z-10 space-y-4 md:space-y-8 md:px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <span className="h-px w-8 md:w-12 bg-orange-500/30" />
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-orange-500 uppercase">
            {title}
          </span>
          <span className="h-px w-8 md:w-12 bg-orange-500/30" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-lustria tracking-tight text-foreground leading-[1.15] md:leading-[1.1]"
        >
          {heading} <span className="text-orange-400">{headingWithColor}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
