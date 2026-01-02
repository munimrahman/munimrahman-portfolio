"use client";

import { motion } from "motion/react";
import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";
import { Building2, Rocket, Users2, Check } from "lucide-react";

const clientTypes = [
  {
    icon: Rocket,
    title: "Startup Founders",
  },
  {
    icon: Building2,
    title: "Small to Medium Businesses",
  },
  {
    icon: Users2,
    title: "Product Teams",
  },
];

const AboutClientsSection = ({ className }: ComponentProps) => {
  return (
    <section
      className={cn(
        "py-24 bg-card overflow-hidden md:overflow-visible",
        className
      )}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500/50"></span>
                <span className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase">
                  Collaboration
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground text-balance">
                Who I <span className="text-orange-500">Work With</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I primarily work with visionaries who value quality. If you care
              about{" "}
              <strong className="text-foreground">
                performance, SEO, and long-term maintainability
              </strong>
              , we’ll be a great fit.
            </p>

            <div className="p-6 bg-orange-50 dark:bg-orange-950/20 rounded-2xl border border-orange-100 dark:border-orange-900/50">
              <p className="text-orange-800 dark:text-orange-200 font-medium italic">
                &quot;If you’re looking for a quick, throwaway website — I’m
                probably not the right choice.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right: Client Types */}
          <motion.div
            className="lg:w-1/2 grid grid-cols-1 gap-6 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {clientTypes.map((client) => (
              <div
                key={client.title}
                className="flex items-center gap-6 p-6 rounded-2xl border border-border/40 bg-background hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-orange-600 transition-colors">
                  <client.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {client.title}
                </h3>
                <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <Check className="text-orange-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutClientsSection;
