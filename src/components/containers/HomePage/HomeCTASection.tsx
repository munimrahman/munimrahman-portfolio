import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomeCTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-orange-950/[0.02]" />
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-lutria mb-8 tracking-tight">
          Let’s Build Something <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-600">
            That Scales
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
          If you’re looking for a developer who understands both{" "}
          <strong className="text-foreground border-b border-orange-500/30">
            Next.js engineering
          </strong>{" "}
          and{" "}
          <strong className="text-foreground border-b border-orange-500/30">
            SEO-driven growth
          </strong>
          , let’s talk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact">
            <Button className="h-14 px-8 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:scale-105">
              Get in Touch <ArrowRight className="ml-2 size-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-2 border-orange-200 bg-transparent hover:bg-orange-50 hover:border-orange-300 text-orange-800 text-lg font-semibold transition-all"
            >
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTASection;
