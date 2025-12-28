"use client";

import { skillData } from "@/assets/icons/techIcons";
import { motion, Variants } from "motion/react";

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

const AboutPageSkillSection = () => {
  return (
    <section className="container py-20 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4 text-center mb-24"
      >
        <div className="flex items-center gap-4">
          <span className="h-0.5 w-12 bg-orange-500/50 rounded-full"></span>
          <span className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase">
            Expertise
          </span>
          <span className="h-0.5 w-12 bg-orange-500/50 rounded-full"></span>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
          Tools & <span className="text-orange-500">Technologies</span>
        </h2>
        <p className="max-w-2xl text-muted-foreground mt-4 text-lg">
          A collection of tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      {/* Skills Layout */}
      <div className="flex flex-col gap-16">
        {skillData.map((category) => (
          <motion.div
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start group/category"
          >
            {/* Category Title (Left) */}
            <motion.div
              variants={categoryVariants}
              className="md:col-span-3 md:sticky md:top-24 text-left md:text-right px-2"
            >
              <div className="flex flex-col md:items-end gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover/category:text-orange-500 transition-colors duration-300 relative inline-block">
                  {category.title}
                </h3>
                <div className="h-1 w-12 bg-orange-500/20 rounded-full group-hover/category:bg-orange-500/50 group-hover/category:w-20 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Skills Grid (Right) */}
            <div className="md:col-span-9 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={itemVariants}
                  title={skill.name}
                  whileTap={{ scale: 0.95 }}
                  className="aspect-square flex items-center justify-center p-3 rounded-lg border border-orange-500/10 bg-card/40 backdrop-blur-md hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300 group/card shadow-sm hover:shadow-lg hover:shadow-orange-500/10 relative group"
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-orange-500/0 group-hover/card:bg-orange-500/5 rounded-lg transition-all duration-300" />

                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 relative z-10">
                    <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full drop-shadow-md">
                      {skill.icon}
                    </div>
                  </div>

                  {/* Tooltip-like effect on small screens if needed, otherwise name is in title */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutPageSkillSection;
