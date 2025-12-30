import React from "react";
import SectionHeader from "../Shared/SectionHeader";
import { Check, Star } from "lucide-react";

const reasons = [
  {
    title: "Built-in SEO Architecture",
    desc: "Not an afterthought. I structure your app for search engines from day one.",
  },
  {
    title: "Performance First",
    desc: "Core Web Vitals green. Fast load times. Happy users and better rankings.",
  },
  {
    title: "Clean, Scalable Code",
    desc: "Codebases that are easy to maintain, extend, and hand over to teams.",
  },
  {
    title: "Crystal Clear Communication",
    desc: "No ghosting. Realistic timelines. Regular updates. You're never in the dark.",
  },
];

const WhyMeSection = () => {
  return (
    <section className="py-20 md:py-32 bg-orange-950/[0.02] relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fb923c 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container max-w-5xl">
        <SectionHeader
          name="Why Me?"
          title="Why Work With Me"
          description="I bring a mix of technical expertise and product thinking to every project."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 md:p-8 rounded-2xl bg-background border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 group"
            >
              <div className="shrink-0">
                <div className="size-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Star className="size-6 fill-current" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
