"use client";

import { motion } from "motion/react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Lightbulb, Workflow, Zap, Rocket } from "lucide-react";
import SectionHeader from "../Shared/SectionHeader";

const processSteps = [
  {
    id: "01",
    icon: Lightbulb,
    title: "Discovery & Goals",
    description: "Understanding your business, audience, and technical needs.",
  },
  {
    id: "02",
    icon: Workflow,
    title: "Architecture & Planning",
    description: "Choosing the right structure for performance and SEO.",
  },
  {
    id: "03",
    icon: Zap,
    title: "Development",
    description: "Clean code, fast pages, and modern best practices.",
  },
  {
    id: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "Smooth deployment and post-launch improvements.",
  },
];

const AboutProcessSection = ({ className }: ComponentProps<"section">) => {
  return (
    <section className={cn("py-24 relative overflow-hidden", className)}>
      {/* Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container relative z-10">
        <SectionHeader
          name="Process"
          title="Work Process"
          description="A Methodical Process For Maximum Results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group block h-full"
            >
              {/* Connector Line (Desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border/40 z-0">
                  <div className="absolute inset-0 bg-orange-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                </div>
              )}

              <div className="relative z-10 flex flex-col items-center text-center h-full p-6 rounded-lg md:rounded-xl bg-card border border-border/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group-hover:-translate-y-2">
                {/* Number Badge */}
                <span className="absolute top-4 right-4 text-xs font-bold font-mono text-orange-200 dark:text-orange-900 group-hover:text-orange-500 transition-colors">
                  {step.id}
                </span>

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-md md:rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300">
                  <step.icon size={30} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcessSection;
