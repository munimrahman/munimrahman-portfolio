import React from "react";
import { Check, Briefcase, Users, CheckCircle, Globe } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "4+",
    unit: "Years",
    label: "Professional Experience",
  },
  {
    icon: CheckCircle,
    value: "20+",
    unit: "Projects",
    label: "Successfully Delivered",
  },
  {
    icon: Users,
    value: "10+",
    unit: "Clients",
    label: "Happy Clients Worldwide",
  },
  {
    icon: Globe,
    value: "Remote",
    unit: "",
    label: "Available Worldwide",
  },
];

const reasons = [
  {
    text: "SEO-aware architecture built into the foundation — not added later",
  },
  {
    text: "Performance-first approach with Core Web Vitals in mind",
  },
  {
    text: "Clean, maintainable codebases that teams can grow with",
  },
  {
    text: "Product-focused mindset aligned with real business goals",
  },
  {
    text: "Regular updates and transparent communication",
  },
];

const WhyMeSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fb923c 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Stats Cards arranged in 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}{" "}
                  {stat.unit && (
                    <span className="text-base font-normal text-muted-foreground">
                      {stat.unit}
                    </span>
                  )}
                </h3>
                <p className="text-sm font-medium text-muted-foreground/80 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-[0.2em] text-orange-500/70 uppercase">
                WHY WORK WITH ME
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground leading-[1.2]">
              A Developer Who Thinks Beyond Just Code
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bring together engineering discipline, SEO awareness, and
              product thinking to build web applications that don’t just work —
              they perform, scale, and stay discoverable across search engines
              and modern AI platforms.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="shrink-0 mt-1">
                    <div className="size-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <Check className="size-4" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
                <span>Contact Me</span>
                <svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <button className="border border-border/50 px-8 py-3.5 rounded-full font-medium hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-all flex items-center gap-2">
                <span>Get in touch</span>
                <svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
