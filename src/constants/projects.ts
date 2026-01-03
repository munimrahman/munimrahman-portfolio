import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Inventiro - Inventory & POS Solution",
    description:
      "An enterprise SaaS platform for managing supply chains with multi-warehouse control, e-commerce syncing, POS, and real-time inventory.",
    tags: ["Next.js", "PrimeReact", "Redux Toolkit", "Tailwind CSS"],
    image: "/assets/images/inventiro.png",
    lightBg: "#fff7ed", // Warm Orange-50 (Premium look)
    darkBg: "#1c1917", // Stone-900 (Warm dark)
    techStack: [
      {
        name: "Next.js",
        icon: "", // You can add React/Next icon name here
      },
      {
        name: "PrimeReact",
        icon: "", // Enterprise UI components
      },
      {
        name: "Chart.js",
        icon: "", // For real-time data visualization
      },
      {
        name: "RBAC",
        icon: "", // Role-Based Access Control
      },
    ],
    category: "Projects",
  },
  {
    id: 2,
    title: "Pro Peak – MERN Job Portal",
    description:
      "A MERN stack job portal with JWT authentication, scalable CRUD architecture, Redux state management, and planned real-time features like chat.",
    tags: ["Tailwind CSS", "React", "Redux Toolkit", "Express"],
    image: "/assets/images/pro-peak.png",
    lightBg: "#f3f4f6", // Slate-50
    darkBg: "#18181b", // Slate-950
    techStack: [
      {
        name: "React",
        icon: "",
      },
      {
        name: "Redux Toolkit",
        icon: "",
      },
      {
        name: "Node.js",
        icon: "",
      },
      {
        name: "Express",
        icon: "",
      },
      {
        name: "MongoDB",
        icon: "",
      },
      {
        name: "Mongoose",
        icon: "",
      },
      {
        name: "JWT Authentication",
        icon: "",
      },
      {
        name: "Tailwind CSS",
        icon: "",
      },
      {
        name: "DaisyUI",
        icon: "",
      },
    ],
    category: "Projects",
  },
  {
    id: 3,
    title: "Voice Ink - Voice AI Platform",
    description:
      "An advanced AI-powered transcription and audio analysis platform that converts meetings, lectures, and voice notes into highly accurate text with smart speaker detection and 90+ language support.",
    tags: ["Next.js", "Tailwind CSS", "AI Transcription", "Wavesurfer.js"],
    image: "/assets/images/voice-ink.png", // আপনার ইমেজ পাথ অনুযায়ী ঠিক করে নিন
    lightBg: "#fee2e2", // Soft Indigo-50 (প্রজেক্টের থিমের সাথে সামঞ্জস্যপূর্ণ)
    darkBg: "#1c1917", // Deep Midnight (Modern AI feel)
    techStack: [
      {
        name: "Next.js",
        icon: "",
      },
      {
        name: "Tailwind CSS",
        icon: "",
      },
      {
        name: "Wavesurfer.js",
        icon: "",
      },
      {
        name: "Radix UI",
        icon: "",
      },
    ],
    category: "Projects",
  },
  {
    id: 4, // You can adjust the ID as needed
    title: "Event & City Guide Admin",
    description:
      "A sophisticated administrative ecosystem built to manage an event-centric mobile platform. It features comprehensive listing moderation, event lifecycle management, and a robust role-based access control system.",
    tags: ["Next.js 15", "Redux Toolkit", "Tailwind CSS", "TypeScript"],
    image: "/assets/images/link-admin.png",
    lightBg: "#e0f2fe", // Blue-50 (Matches your primary blue theme)
    darkBg: "#0f172a", // Zinc-950 (Your current dark mode background)
    techStack: [
      {
        name: "Next.js 15",
        icon: "", // Add Next.js icon URL/component here
      },
      {
        name: "Redux Toolkit",
        icon: "", // Add Redux icon URL/component here
      },
      {
        name: "Tailwind CSS 4",
        icon: "", // Add Tailwind icon URL/component here
      },
      {
        name: "Shadcn UI",
        icon: "", // Add Shadcn icon URL/component here
      },
    ],
    category: "Projects",
  },
];
