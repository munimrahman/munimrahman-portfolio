import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Briefcase,
  Users,
  CheckCircle,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { links } from "@/constants";

const AboutHeroSection = () => {
  return (
    <section className="container min-h-screen -mt-4 md:-mt-10 flex flex-col items-center justify-center py-12 md:py-16 relative overflow-hidden md:overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-x-20 items-center w-full z-10">
        {/* Block 1: Intro (Label + Heading) */}
        <div className="lg:col-span-3 space-y-6 md:space-y-8 animate-in slide-in-from-left-5 duration-700 fade-in fill-mode-both">
          {/* Label */}
          <div className="flex items-center gap-3 md:gap-4">
            <span className="h-0.5 w-8 md:w-12 bg-orange-500/50 rounded-full"></span>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-orange-500 uppercase">
              About Me
            </span>
            <span className="h-0.5 w-8 md:w-12 bg-orange-500/50 rounded-full"></span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-lustria tracking-tight text-foreground leading-[1.15] md:leading-[1.1]">
            Passionate <br />
            <span className="text-orange-400">Frontend Engineer</span>
          </h1>
        </div>

        {/* Block 2: Image Section (Responsive Positioning) */}
        <div className="lg:col-span-2 lg:row-span-2 lg:col-start-4 relative flex justify-center lg:justify-end animate-in fade-in duration-1000 delay-200 fill-mode-both">
          {/* Decorative Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 blur-[80px] md:blur-[100px] rounded-full -z-10 pointer-events-none"></div>

          {/* Decorative Border/Frame - Abstract shape */}
          <div className="relative w-full max-w-sm lg:max-w-112.5 aspect-square">
            {/* Top Right Box */}
            <div className="hidden md:block absolute -top-6 -right-6 w-16 h-16 border-t-2 border-r-2 border-orange-500/20 rounded-tr-3xl"></div>
            {/* Bottom Left Box */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-16 h-16 border-b-2 border-l-2 border-orange-500/20 rounded-bl-3xl"></div>

            <div className="relative w-full h-full overflow-hidden rounded-2xl md:rounded-[2rem] border border-orange-500/10 shadow-2xl shadow-orange-500/5">
              <Image
                src="/assets/images/munim.jpeg"
                alt="Munim Rahman"
                fill
                className="object-cover lg:hover:scale-105 transition-transform duration-700 lg:hover:rotate-1"
                priority
              />
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Block 3: Details (Description + CTA + Socials) */}
        <div className="lg:col-span-3 space-y-6 md:space-y-8 animate-in slide-in-from-left-5 duration-700 fade-in delay-100 fill-mode-both">
          {/* Description */}
          <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light w-full">
            <p>
              I’m Munim, a frontend developer specializing in React and Next.js,
              with a strong focus on performance, SEO, and scalable frontend
              architecture.
            </p>
            <p>
              I help startups and businesses build fast, modern web applications
              that are designed not just to look good, but to perform well and
              grow over time.
            </p>
          </div>

          {/* CTA & Socials */}
          <div className="flex flex-col gap-6 md:gap-8 pt-2">
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <button className="bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base font-medium flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-orange-500/20">
                <Mail size={16} className="md:size-4.5" />
                Contact Me
              </button>
              <button className="border border-border/50 px-6 md:px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base font-medium hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-all flex items-center gap-2">
                View Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-8">
              <Link
                href={links.github}
                target="_blank"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-orange-200 text-orange-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-100 transition-all duration-300"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href={links.linkedin}
                target="_blank"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-orange-200 text-orange-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-100 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href={links.twitter}
                target="_blank"
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-orange-200 text-orange-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-100 transition-all duration-300"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full mt-16 md:mt-20 animate-in slide-in-from-bottom-6 duration-700 fade-in fill-mode-both delay-300">
        {[
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
        ].map((stat, index) => (
          <div
            key={index}
            className="p-4 md:p-6 rounded-lg md:rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-md md:rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300">
              <stat.icon size={20} className="md:size-6" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-foreground mb-1">
              {stat.value}{" "}
              <span className="text-sm md:text-base font-normal text-muted-foreground">
                {stat.unit}
              </span>
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm font-medium text-muted-foreground/80 mt-1 md:mt-2 line-clamp-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHeroSection;
