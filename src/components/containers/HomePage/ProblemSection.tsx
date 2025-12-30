"use client";

import React from "react";
import {
  BarChart4,
  Code2,
  Globe,
  Layout,
  Search,
  Smartphone,
} from "lucide-react";
import SectionHeader from "../Shared/SectionHeader";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const problems = [
  {
    icon: Search,
    title: "Invisible in Search & AI Results",
    description:
      "Your site exists, but it’s not being recommended - by Google or AI search engines.Without structured, SEO-aware architecture, your product stays invisible.",
  },
  {
    icon: Smartphone,
    title: "A Frontend That Doesn’t Feel Like a Product",
    description:
      "Your app works, but it doesn’t feel polished or intuitive. Poor UX and slow interactions quietly push users away.",
  },
  {
    icon: BarChart4,
    title: "Speed That Breaks Trust",
    description:
      "Slow load times kill confidence. Users, search engines, and AI systems all favor fast, optimized experiences.",
  },
  {
    icon: Layout,
    title: "Built for Today, Not for Growth",
    description:
      "What started simple becomes fragile fast. Without proper architecture, every new feature feels risky and expensive.",
  },
  {
    icon: Code2,
    title: "An MVP That Can’t Scale",
    description:
      "You want to launch fast — but not rewrite everything later. Many MVPs fail because the foundation wasn’t built for scale.",
  },
  {
    icon: Globe,
    title: "Decisions Without Reliable Data",
    description:
      "Analytics are incomplete, inconsistent, or untrusted. Without clean tracking, you’re guessing instead of improving.",
  },
];

const ProblemSection = ({ className }: Props) => {
  return (
    <section className={cn("py-20 md:py-32 bg-background", className)}>
      <div className="container max-w-6xl">
        <SectionHeader
          name="The Reality"
          title="Common Problems I Help You Solve"
          description="If any of these sound familiar, you’re in the right place."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "p-10 flex flex-col items-center text-center border-orange-200/50",

                // Desktop (3 cols): Right border for 1,2, 4,5. Bottom border for 1,2,3
                "lg:border-r lg:border-dashed",
                (index + 1) % 3 === 0 && "lg:border-r-0", // No right border on 3rd, 6th...
                index < 3 && "lg:border-b lg:border-dashed", // Bottom border on first row

                // Tablet (2 cols): Right border for odd items. Bottom border for all except last 2?
                // Actually easier to just reset for tablet and apply specifically
                "max-lg:border-r max-lg:border-dashed",
                (index + 1) % 2 === 0 && "max-lg:border-r-0", // No right border on even items (2nd col)
                index < 4 && "max-lg:border-b max-lg:border-dashed", // Bottom border for first 4 items (2 rows)

                // Mobile (1 col): Bottom border for all except last
                "max-md:border-b max-md:border-dashed max-md:border-r-0",
                index === problems.length - 1 && "max-md:border-b-0"
              )}
            >
              <div className="mb-6 p-3 rounded-xl bg-orange-50 text-orange-600">
                <item.icon className="size-6" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
