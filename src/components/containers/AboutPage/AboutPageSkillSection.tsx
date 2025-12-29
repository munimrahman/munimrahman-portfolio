"use client";

import { skillData } from "@/assets/icons/techIcons";
import { motion, Variants } from "motion/react";
import { ComponentProps } from "@/types";

interface Props extends ComponentProps {}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutPageSkillSection = ({ className }: Props) => {
  return (
    <section className={className} id="skills">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 text-center mb-20"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-orange-500/50"></span>
            <span className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase">
              Expertise
            </span>
            <span className="h-px w-8 bg-orange-500/50"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Skills & <span className="text-orange-500">Tools</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground mt-4 text-lg">
            The core stack and tools I use to build robust applications.
          </p>
        </motion.div>

        {/* Skills Layout - Centered with Max Width */}
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {skillData.map((category) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
            >
              {/* Category Title (Left Side on Desktop) */}
              <motion.div
                variants={categoryVariants}
                className="w-full md:w-48 md:shrink-0 md:text-right pt-2"
              >
                <h3 className="text-lg font-bold text-foreground/90 relative inline-block">
                  {category.title}
                  {/* Underline for mobile mostly, but nice decorative touch */}
                  <span className="absolute -bottom-2 right-0 w-full md:w-full h-0.5 bg-linear-to-r from-transparent via-orange-500/50 to-transparent md:from-transparent md:via-orange-500/50 md:to-orange-500/50 opacity-50" />
                </h3>
              </motion.div>

              {/* Skills Pills (Right Side) */}
              <div className="flex-1 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={itemVariants}
                    className="group relative"
                  >
                    {/* The Pill / Badge */}
                    <div
                      className="
                    relative overflow-hidden
                    bg-background/50 backdrop-blur-sm
                    border border-orange-500/20
                    hover:border-orange-500/40 hover:bg-orange-500/10
                    px-5 py-2 rounded-md
                    flex items-center gap-2.5
                    transition-all duration-300
                    cursor-default
                  "
                    >
                      {/* Optional: Icon */}
                      {/* <div className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 transition-colors">
                      {skill.icon}
                    </div> */}

                      {/* Text */}
                      <span className="text-sm font-semibold tracking-wide text-foreground uppercase group-hover:text-orange-500 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPageSkillSection;
