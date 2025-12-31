"use client";

import PageHero from "@/components/containers/Shared/PageHero";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";

const filter = [
  { id: 1, name: "All" },
  { id: 2, name: "Projects" },
  { id: 3, name: "Case Studies" },
];

const dummyProjects: Project[] = [
  {
    id: 1,
    title: "Modern Portfolio",
    description:
      "A high-performance personal portfolio built with Next.js 15, Tailwind CSS, and Framer Motion for smooth animations and a premium feel.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    techStack: [
      { name: "Next.js", icon: "Zap" },
      { name: "Tailwind", icon: "Palette" },
      { name: "Motion", icon: "Activity" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    category: "Projects",
  },
  {
    id: 2,
    title: "EcoShop E-commerce",
    description:
      "A sustainable e-commerce platform featuring a modern UI, Stripe integration, and a custom CMS for seamless product management.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
    techStack: [
      { name: "React", icon: "Layers" },
      { name: "Node.js", icon: "Server" },
      { name: "Stripe", icon: "CreditCard" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    category: "Projects",
  },
  {
    id: 3,
    title: "TaskFlow Manager",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop kanban boards, and detailed team productivity analytics.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
    techStack: [
      { name: "TypeScript", icon: "Code" },
      { name: "Prisma", icon: "Database" },
      { name: "PostgreSQL", icon: "Table" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    category: "Projects",
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    description:
      "Intelligent chatbot powered by OpenAI's GPT-4, capable of context-aware conversations and automated document summarization.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    techStack: [
      { name: "Python", icon: "Terminal" },
      { name: "OpenAI", icon: "Cpu" },
      { name: "FastAPI", icon: "Zap" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    category: "Projects",
  },
  {
    id: 5,
    title: "HomeHunt Portal",
    description:
      "Real estate searching platform with interactive maps, neighborhood statistics, and a virtual 3D tour for premium listings.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    techStack: [
      { name: "Next.js", icon: "Home" },
      { name: "Google Maps", icon: "Map" },
      { name: "Firebase", icon: "Flame" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    category: "Projects",
  },
];

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<number | null>(1);

  const handleFilterChange = (filterId: number | null) => {
    if (filterId === selectedFilter) return;
    setSelectedFilter(filterId);
  };

  const handleTabClick = (filterId: number | null) => {
    handleFilterChange(filterId);
    // Scroll the clicked tab into view
    const element = document.getElementById(`tab-${filterId ?? "all"}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const filteredProjects =
    selectedFilter === 1
      ? dummyProjects
      : dummyProjects.filter(
          (p) =>
            p.category === filter.find((f) => f.id === selectedFilter)?.name
        );

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Projects"
        heading="Projects &"
        headingWithColor="Case Studies"
        description="A showcase of my recent work, ranging from full-stack applications to creative frontend experiments and deep-dive case studies."
      />

      {/* Tabs */}
      <div className="container flex justify-center py-8 flex-nowrap lg:flex-wrap overflow-x-auto gap-3 w-full lg:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {filter.map((item) => (
          <div key={item.id} id={`tab-${item.id}`} className="shrink-0">
            <button
              className={`text-sm lg:text-base border-2 rounded-xl px-6 py-2.5 cursor-pointer transition-all duration-300 whitespace-nowrap font-medium ${
                item.id === selectedFilter
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-white text-foreground border-border hover:border-orange-300"
              }`}
              onClick={() => handleTabClick(item.id)}
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>

      {/* Project list */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
