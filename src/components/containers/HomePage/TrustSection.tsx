"use client";

import { Briefcase, CheckCircle, Globe, Search } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const trustItems = [
  {
    icon: Briefcase,
    text: "4+ Years Experience",
  },
  {
    icon: CheckCircle,
    text: "Production-ready Apps",
  },
  {
    icon: Search,
    text: "SEO-First Architecture",
  },
  {
    icon: Globe,
    text: "Remote & Async Friendly",
  },
];

const TrustSection = () => {
  return (
    <section className="py-10 border-y border-orange-500/10 bg-orange-500/5 overflow-hidden">
      <div className="container">
        <div className="flex relative items-center mask-linear-gradient">
          {/* Gradient Masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 md:gap-32 shrink-0 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...trustItems, ...trustItems, ...trustItems, ...trustItems].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 text-muted-foreground/80 hover:text-orange-600 transition-colors duration-300"
                >
                  <item.icon className="size-5 md:size-6 opacity-70" />
                  <span className="font-lustria text-lg md:text-xl font-medium tracking-wide">
                    {item.text}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
