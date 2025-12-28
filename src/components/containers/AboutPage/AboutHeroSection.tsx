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

const AboutHeroSection = () => {
  return (
    <section className="container min-h-screen -mt-10 flex flex-col items-center justify-center py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center w-full z-10">
        {/* Left Content */}
        <div className="lg:col-span-3 space-y-8 animate-in slide-in-from-left-5 duration-700 fade-in">
          {/* Label */}
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-12 bg-orange-500/50 rounded-full"></span>
            <span className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase">
              About Me
            </span>
            <span className="h-0.5 w-12 bg-orange-500/50 rounded-full"></span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
            Passionate <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-600">
              Frontend Engineer
            </span>
          </h1>

          {/* Description */}
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed w-full">
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
          <div className="flex flex-col gap-8 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-orange-500/20">
                <Mail size={18} />
                Contact Me
              </button>
              <button className="border border-border/50 px-8 py-3.5 rounded-full font-medium hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-all flex items-center gap-2">
                View Resume
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-orange-200/50 text-orange-500 hover:text-orange-600 hover:border-orange-500 hover:bg-orange-100/50 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-orange-200/50 text-orange-500 hover:text-orange-600 hover:border-orange-500 hover:bg-orange-100/50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-orange-200/50 text-orange-500 hover:text-orange-600 hover:border-orange-500 hover:bg-orange-100/50 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image/Visual */}
        <div className="lg:col-span-2 relative flex justify-center lg:justify-end animate-in slide-in-from-right-5 duration-1000 fade-in delay-200">
          {/* Decorative Glows - Subtler version matching Home Page */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

          {/* Decorative Border/Frame - Abstract shape */}
          <div className="relative w-full max-w-112.5 aspect-square">
            {/* Top Right Box */}
            <div className="absolute -top-6 -right-6 w-16 h-16 border-t-2 border-r-2 border-orange-500/20 rounded-tr-3xl"></div>
            {/* Bottom Left Box */}
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-2 border-l-2 border-orange-500/20 rounded-bl-3xl"></div>

            <div className="relative w-full h-full overflow-hidden rounded-[2rem] border border-orange-500/10 shadow-2xl shadow-orange-500/5">
              <Image
                src="/images/about.avif"
                alt="Munim Rahman"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 hover:rotate-1"
              />
              {/* Overlay Gradient for depth - Reduced opacity */}
              <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mt-24 animate-in slide-in-from-bottom-6 duration-700 fade-in fill-mode-both delay-300">
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
            className="p-6 rounded-3xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              <stat.icon size={24} />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-1">
              {stat.value}{" "}
              <span className="text-base font-normal text-muted-foreground">
                {stat.unit}
              </span>
            </h3>
            <p className="text-sm font-medium text-muted-foreground/80 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHeroSection;
