import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Admin Dashboard",
    description:
      "A high-performance admin dashboard with role-based access control, real-time data visualization, and seamless API integrations.",
    tags: ["React", "Tailwind CSS", "Recharts", "API Integration"],
    image: "/images/inventiro.png",
    lightBg: "#ffedd5", // Orange-100
    darkBg: "#1c1917", // Stone-900 (Warm dark)
    techStack: [
      {
        name: "React",
        icon: "",
      },
      {
        name: "Tailwind CSS",
        icon: "",
      },
      {
        name: "Recharts",
        icon: "",
      },
      {
        name: "API Integration",
        icon: "",
      },
    ],
    category: "Project",
  },
  {
    id: 2,
    title: "Enterprise SEO Platform",
    description:
      "Scalable architected Next.js site handling thousands of pages with perfect Core Web Vitals and programmatic SEO structure.",
    tags: ["Next.js", "SEO", "TypeScript", "Core Web Vitals"],
    image: "/images/demo-1.png",
    lightBg: "#f3f4f6", // Gray-100
    darkBg: "#18181b", // Zinc-950
    techStack: [
      {
        name: "Next.js",
        icon: "",
      },
      {
        name: "SEO",
        icon: "",
      },
      {
        name: "TypeScript",
        icon: "",
      },
      {
        name: "Core Web Vitals",
        icon: "",
      },
    ],
    category: "Project",
  },
  {
    id: 3,
    title: "E-commerce MVP",
    description:
      "Rapidly developed MVP for a fashion startup, featuring custom checkout flow, inventory management, and fast mobile performance.",
    tags: ["Shopify", "React", "Mobile-first", "Stripe"],
    image: "/images/voice-ink.png",
    lightBg: "#fee2e2", // Red-100
    darkBg: "#1c1917", // Stone-900
    techStack: [
      {
        name: "Shopify",
        icon: "",
      },
      {
        name: "React",
        icon: "",
      },
      {
        name: "Mobile-first",
        icon: "",
      },
      {
        name: "Stripe",
        icon: "",
      },
    ],
    category: "Project",
  },
  {
    id: 4,
    title: "Marketing Site Rebrand",
    description:
      "Complete overhaul of a legacy site to a modern, headless CMS powered Next.js application, resulting in 2x faster load times.",
    tags: ["Next.js", "Headless CMS", "Framer Motion", "Tailwind CSS"],
    image: "/images/link-admin.png",
    lightBg: "#e0f2fe", // Sky-100
    darkBg: "#0f172a", // Slate-900
    techStack: [
      {
        name: "Next.js",
        icon: "",
      },
      {
        name: "Headless CMS",
        icon: "",
      },
      {
        name: "Framer Motion",
        icon: "",
      },
      {
        name: "Tailwind CSS",
        icon: "",
      },
    ],
    category: "Case Study",
  },
];
