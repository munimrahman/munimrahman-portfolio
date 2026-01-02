import Image from "next/image";

export interface CaseStudyCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  lightBg: string;
  darkBg: string;
}

import { useTheme } from "@/providers/ThemeProvider";
import ButtonPrimary from "./ui/button/button-primary";

export function CaseStudyCard({
  title,
  description,
  tags,
  image,
  lightBg,
  darkBg,
}: CaseStudyCardProps) {
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const cardBackground = isDark ? darkBg : lightBg;
  return (
    <div
      className="rounded-2xl md:rounded-3xl px-6 py-8 md:px-10 md:py-14 max-w-6xl mx-auto overflow-hidden"
      style={{ backgroundColor: cardBackground }}
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Content */}
        <div className="flex flex-col h-full justify-between gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-3xl font-medium text-foreground tracking-tight">
              {title}
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          <ButtonPrimary href="/" className="w-fit px-6 py-3">
            View case study
          </ButtonPrimary>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="relative rounded-lg md:rounded-2xl overflow-hidden aspect-4/3 shadow-sm">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-foreground/10 bg-background/50 backdrop-blur-sm shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
