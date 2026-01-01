"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Zap, Search, Layers } from "lucide-react";
import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";

const AboutJourneySection = ({ className }: ComponentProps) => {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 lg:grid-rows-[auto_1fr] gap-y-10 lg:gap-y-0 lg:gap-x-12 items-start">
          {/* Block 1: Header (Label + Heading) - Top on Mobile, Right Top on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 lg:col-start-5 space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-orange-500/50"></span>
              <span className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase">
                My Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Beyond Just <span className="text-orange-500">Writing Code</span>
            </h2>
          </motion.div>

          {/* Block 2: Image / Visual Side - Middle on Mobile, Left on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:row-span-2 relative lg:self-center"
          >
            <div className="relative aspect-4/5 w-full max-w-md lg:max-w-[420px] rounded-2xl overflow-hidden border border-border/40 shadow-2xl shadow-orange-500/10 mx-auto">
              <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                <Image
                  src="/images/about.avif"
                  alt="Munim Rahman working"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-md border border-orange-200/50 p-4 rounded-xl shadow-lg max-w-50">
                <p className="text-sm font-medium text-muted-foreground">
                  &quot;Great design alone isn’t enough.&quot;
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Block 3: Content Side (Description + Icons) - Bottom on Mobile, Right Bottom on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-5 space-y-6 text-lg text-muted-foreground leading-relaxed pt-6 lg:pt-0"
          >
            <p>
              I started my journey by building simple websites and learning how
              modern frontend frameworks work. As I worked on more real-world
              projects, I realized something important:
              <strong className="text-foreground font-semibold">
                {" "}
                great design alone isn’t enough
              </strong>
              .
            </p>

            <p>Websites need to be:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
              <li className="flex items-center justify-center gap-2 text-sm md:text-base text-foreground font-medium p-2 md:p-3 rounded-lg bg-orange-500/5 border border-orange-100 dark:border-orange-500/10">
                <Zap className="w-5 h-5 text-orange-500" /> Fast
              </li>
              <li className="flex items-center justify-center gap-2 text-sm md:text-base text-foreground font-medium p-2 md:p-3 rounded-lg bg-orange-500/5 border border-orange-100 dark:border-orange-500/10">
                <Search className="w-5 h-5 text-orange-500" /> SEO-friendly
              </li>
              <li className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 text-sm md:text-base text-foreground font-medium p-2 md:p-3 rounded-lg bg-orange-500/5 border border-orange-100 dark:border-orange-500/10">
                <Layers className="w-5 h-5 text-orange-500" /> Scalable
              </li>
            </ul>

            <p>
              That realization pushed me deeper into{" "}
              <strong className="text-foreground">React</strong>,{" "}
              <strong className="text-foreground">Next.js</strong>, and{" "}
              <strong className="text-foreground">
                performance-focused development
              </strong>
              . Over time, I began specializing in SEO-optimized Next.js
              applications, where frontend performance and visibility go hand in
              hand.
            </p>

            <p>
              Today, I focus on building production-ready web applications that
              are engineered for{" "}
              <strong className="text-foreground">
                speed, maintainability, and long-term success
              </strong>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourneySection;
