"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionHeader from "../Shared/SectionHeader";
import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Bit Byte Technology Ltd",
    role: "Software Engineer",
    period: "January 2023 – Present",
    type: "Full-time",
    achievements: [
      "Contributed to the development of E-Commerce, Point of Sale, Chat Application and online ticket booking web applications using ReactJS, NextJS, Tailwind, and MaterialUI.",
      "Developed a real-time chat system that increased manual orders by approximately 70%.",
      "Developed a fully functional Point of Sale (POS) system with features like refund, exchange, cross-exchange orders, and seamless calculation.",
      "Built a secure payment system for secure transactions with condition based partial payment.",
      "Implemented a dynamic card-based system (membership, discount, and gift cards) where users can apply them during purchases for personalized offers and rewards.",
      "Implemented a barcode generation module with both single and bulk (CSV upload) options.",
    ],
    technologies: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "MaterialUI",
      "Redux",
    ],
  },
  {
    id: 2,
    company: "Digicon Technologies Ltd",
    role: "Frontend Developer",
    period: "September 2022 – December 2022",
    type: "Full-time",
    achievements: [
      "Developed with ReactJS, Tailwind, and MaterialUI.",
      "Contributed to the development process of the Employee Management System application component by participating in the system's frontend and API integration.",
      "Integrated conveyance slips and leave process module.",
    ],
    technologies: ["ReactJS", "Tailwind CSS", "MaterialUI"],
  },
];

const AboutPageExperienceSection = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  return (
    <section className={cn("py-24 relative overflow-hidden", className)}>
      <div className="container relative z-10">
        <SectionHeader
          name="Career Journey"
          title="Work Experience"
          description="A timeline of my professional journey."
        />

        <div ref={containerRef} className="relative mt-24">
          {/* Main Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-[0.5px] h-full w-0.5 bg-border/40 will-change-transform">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-orange-500 origin-top"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          {/* Main Vertical Line (Mobile) */}
          <div className="md:hidden absolute left-4 sm:left-6 top-0 h-full w-0.5 bg-border/40 will-change-transform">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-orange-500 origin-top"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-8 md:gap-10",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 transform -translate-x-1/2 z-10 top-6">
                    <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-orange-100 flex items-center justify-center border-2 md:border-4 border-background shadow-sm">
                      <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                    </div>
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div
                    className={cn(
                      "w-full md:w-1/2 pl-10 sm:pl-12 md:pl-0",
                      isEven ? "md:pl-0 md:pr-16" : "md:pl-16 md:pr-0"
                    )}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={cn(
                        "relative group will-change-[transform,opacity]",
                        isEven ? "md:mr-auto" : "md:ml-auto"
                      )}
                    >
                      <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                        <div className="flex flex-col gap-1 mb-6 pr-16">
                          <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 mb-2">
                            {exp.type}
                          </span>
                          <h3 className="text-2xl font-bold text-foreground">
                            {exp.role}
                          </h3>
                          <div className="text-lg font-medium text-orange-600 dark:text-orange-400">
                            {exp.company}
                          </div>
                          <div className="text-sm text-muted-foreground font-medium">
                            {exp.period}
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {exp.achievements.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                            >
                              <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary border border-border/40 rounded-md text-xs font-medium text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageExperienceSection;
