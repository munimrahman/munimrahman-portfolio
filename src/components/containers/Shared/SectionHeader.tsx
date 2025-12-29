"use client";

import { motion } from "motion/react";

interface Props {
  name: string;
  title: string;
  description: string;
}

const SectionHeader = ({ name, title, description }: Props) => {
  return (
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
          {name}
        </span>
        <span className="h-px w-8 bg-orange-500/50"></span>
      </div>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
        {title}
      </h2>
      <p className="max-w-2xl text-muted-foreground mt-4 text-lg">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
