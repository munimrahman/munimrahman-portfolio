"use client";

import { motion } from "motion/react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Layout, Globe, Server, Gauge } from "lucide-react";
import SectionHeader from "../Shared/SectionHeader";

const specializations = [
  {
    icon: Globe,
    title: "SEO-Optimized Next.js Websites",
    description:
      "Built with server-side rendering, proper metadata, and clean architecture for maximum visibility.",
  },
  {
    icon: Layout,
    title: "Custom React Interfaces",
    description:
      "Scalable, reusable UI systems built with modern best practices and accessibility in mind.",
  },
  {
    icon: Server,
    title: "Headless CMS Integration",
    description:
      "Sanity, Strapi, or Contentful integrated cleanly with Next.js for easy content management.",
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    description:
      "Core Web Vitals optimization, faster load times, better UX, and improved search rankings.",
  },
];

const AboutSpecializationSection = ({
  className,
}: ComponentProps<"section">) => {
  return (
    <section className={cn("py-24 bg-card relative", className)}>
      <div className="container relative z-10">
        <SectionHeader
          name="Specialization"
          title="What I Specialize In"
          description="I don’t try to do everything. I focus on areas where I can deliver real impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {specializations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-lg md:rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
            >
              <div className="mb-6 md:mb-8 w-12 h-12 md:w-14 md:h-14 rounded-md md:rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSpecializationSection;
