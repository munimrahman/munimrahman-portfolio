import {
  ArrowRight,
  BarChart,
  Code,
  Layout,
  Settings,
  Sparkles,
} from "lucide-react";
import SectionHeader from "../Shared/SectionHeader";
import Link from "next/link";
import { Briefcase, Users, CheckCircle, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Next.js Website & Admin Dashboard",
    description:
      "I build SEO-friendly landing pages, marketing websites, and custom admin dashboards using Next.js — designed for speed, scalability, and long-term maintainability.",
    icon: Layout,
    features: [
      "Clean, scalable frontend architecture",
      "Custom UI systems for dashboards & tools",
      "Performance-focused rendering",
    ],
    cta: "Learn more",
    href: "/services/web-development",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "SaaS MVP Development",
    description:
      "I help founders turn ideas into production-ready SaaS MVPs with an architecture that won’t need a rewrite as the product grows.",
    icon: Code,
    features: [
      "MVP-focused feature planning",
      "Robust Auth & Database setup",
      "Scalable SaaS architecture",
    ],
    cta: "See how I build MVPs",
    href: "/services/saas-mvp",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Next.js SEO & Performance Optimization",
    description:
      "SEO for Next.js requires more than plugins. I optimize applications at the architecture level for visibility in Google and modern AI search engines.",
    icon: BarChart,
    features: [
      "Technical SEO for Next.js",
      "Core Web Vitals Optimization",
      "Structured Data & Sitemap",
    ],
    cta: "Improve your SEO",
    href: "/services/seo",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

const ServicesSection = ({ className }: { className?: string }) => {
  return (
    <section id="services" className={cn("", className)}>
      <div className="container">
        <SectionHeader
          name="Expertise"
          title="How I Can Help You"
          description="I focus on building scalable, performance-driven Next.js applications — not generic websites."
        />

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-6 md:p-8 rounded-lg md:rounded-xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
            >
              <div className="mb-6 md:mb-8 w-12 h-12 md:w-14 md:h-14 rounded-md md:rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <service.icon className="size-6 md:size-7" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 font-serif text-foreground">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="mb-8 space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm font-medium text-foreground/80"
                  >
                    <Sparkles className="size-4 mt-0.5 text-orange-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-border/50">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-wider text-orange-500 group-hover:text-foreground transition-colors"
                >
                  {service.cta}{" "}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}

          <div className="col-span-1 md:col-span-2 lg:col-span-3 group relative flex flex-col p-6 md:p-8 rounded-lg md:rounded-xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300">
            <div className="p-4 bg-orange-500/10 w-fit rounded-md md:rounded-lg text-orange-600 mb-6 group-hover:scale-110 transition-all duration-300">
              <Settings className="size-6" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 font-serif text-foreground">
              More Capabilities
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Depending on your project needs, I also help with headless CMS
              integration (Sanity, Strapi, Contentful),{" "}
              <Link href={"/"}>Facebook Conversion API</Link>, GA4 analytics
              setup, Next.js + Shopify storefronts, and ongoing performance
              optimization. These capabilities support scalable architecture,
              better tracking, and long-term growth across modern web and SaaS
              applications.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mt-8 animate-in slide-in-from-bottom-6 duration-700 fade-in fill-mode-both delay-300">
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
            <p className="text-sm font-medium text-muted-foreground/80 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
