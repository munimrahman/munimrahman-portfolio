"use client";

import { motion } from "motion/react";
import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const AboutCTASection = ({ className }: ComponentProps) => {
  return (
    <section className={cn("py-32 relative overflow-hidden", className)}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-orange-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
            Let’s Build Something <br />
            <span className="text-orange-500">Together</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            If you’re looking for a developer who understands both{" "}
            <strong className="text-foreground">frontend engineering</strong>{" "}
            and <strong className="text-foreground">SEO-driven growth</strong>,
            I’d love to talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-orange-500/10"
            >
              View my services
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-border/60 font-semibold flex items-center justify-center gap-2 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-all"
            >
              <Mail size={18} />
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTASection;
