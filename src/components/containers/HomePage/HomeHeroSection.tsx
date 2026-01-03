import Image from "next/image";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import Link from "next/link";
import ButtonPrimary from "@/components/ui/button/button-primary";
import ButtonSecondary from "@/components/ui/button/button-secondary";
import { links } from "@/constants";

const HomeHeroSection = () => {
  return (
    <section className="container relative -mt-24 md:-mt-16 flex flex-col min-h-screen items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-150 h-80 md:h-100 bg-accent/30 dark:bg-orange-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-4 md:mb-8">
          <div className="w-24 h-24 rounded-full border-4 border-card shadow-lg overflow-hidden">
            <Image
              src="/demo-pp.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-sm md:text-xl text-foreground font-light max-w-2xl leading-relaxed mb-4 md:mb-6">
          👋 Hi, I&apos;m Munim Rahman
        </p>
        <h1 className="text-3xl md:text-5xl font-lustria text-foreground mb-4 md:mb-6 leading-tight">
          Building Fast, <br className="md:hidden" /> Scalable Web Apps
        </h1>

        <h2 className="text-lg md:text-2xl text-muted-foreground font-light mb-6 md:mb-10 md:leading-relaxed max-w-4xl">
          I specialize in crafting fast, SEO-ready frontend experiences while
          understanding backend systems, APIs, and real-world production
          workflows.
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center gap-2 md:gap-6 opacity-60 text-sm md:text-base mb-6 md:mb-10">
          <span>Next Js</span>•<span>Node JS</span>•<span>Nest Js</span>•
          <span>SEO & Performance</span>
        </div>

        <div className="flex flex-row items-center gap-4 mb-6 md:mb-12">
          <ButtonPrimary href="/contact">🚀 Start a Project</ButtonPrimary>

          <ButtonSecondary href="/projects">View My Work</ButtonSecondary>
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

      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce opacity-80">
        <span className="text-sm font-light tracking-widest text-orange-400/80 uppercase">
          Scroll Down
        </span>
        <ChevronDown className="w-6 h-6 text-orange-400" />
      </div>
    </section>
  );
};

export default HomeHeroSection;
