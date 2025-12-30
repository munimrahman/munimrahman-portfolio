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

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-full h-150 bg-linear-to-b from-orange-500/5 to-transparent -z-10 pointer-events-none" />

      <div className="container">
        <SectionHeader
          name="Expertise"
          title="How I Can Help You"
          description="I focus on building scalable, performance-driven Next.js applications — not generic websites."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
            >
              <div className="mb-8 w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <service.icon className="size-7" />
              </div>

              <h3 className="text-2xl font-bold mb-4 font-serif text-foreground">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-8 leading-relaxed h-20">
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
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-600 group-hover:text-foreground transition-colors"
                >
                  {service.cta}{" "}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}

          <div className="col-span-3 group relative flex flex-col p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300">
            <div className="p-4 bg-orange-500/10 w-fit rounded-xl text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              <Settings className="size-6" />
            </div>

            <h3 className="text-2xl font-bold mb-4 font-serif text-foreground">
              More Capabilities
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Depending on your project needs, I also help with headless CMS
              integration (Sanity, Strapi, Contentful), Facebook Conversion API
              and GA4 analytics setup, Next.js + Shopify storefronts, and
              ongoing performance optimization. These capabilities support
              scalable architecture, better tracking, and long-term growth
              across modern web and SaaS applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
