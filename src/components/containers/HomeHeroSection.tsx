import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

const HomeHeroSection = () => {
  return (
    <section className="container relative -mt-16 flex flex-col min-h-screen items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-accent/30 dark:bg-orange-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-8">
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
        <p className="text-lg md:text-xl text-foreground font-light max-w-2xl leading-relaxed mb-6">
          👋 Hi, I&apos;m Munim Rahman
        </p>
        <h1 className="text-5xl font-lustria text-foreground mb-6 leading-tight">
          Building Fast, Scalable Web Apps
        </h1>

        <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed max-w-4xl">
          I specialize in crafting fast, SEO-ready frontend experiences while
          understanding backend systems, APIs, and real-world production
          workflows.
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center gap-6 opacity-60 text-sm md:text-base mb-10">
          <span>Next Js</span>•<span>Node JS</span>•<span>Nest Js</span>•
          <span>SEO & Performance</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all">
            🚀 Start a Project
          </button>

          <button className="border border-border px-8 py-4 rounded-full font-medium hover:bg-muted transition-all">
            View My Work
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-orange-200 text-orange-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-100 transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-orange-200 text-orange-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-100 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-orange-200 text-orange-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-100 transition-all duration-300"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
