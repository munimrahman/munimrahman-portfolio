"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PageHero from "@/components/containers/Shared/PageHero";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";
import { ContactFormSectionV2 } from "@/components/containers/Shared/ContactFormSection";

const filterOptions = [
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
    image: "/images/portfolio.png",
    techStack: [
      { name: "Next.js", icon: "Zap" },
      { name: "Tailwind", icon: "Palette" },
      { name: "Motion", icon: "Activity" },
      { name: "React", icon: "Layers" },
      { name: "Node.js", icon: "Server" },
      { name: "Stripe", icon: "CreditCard" },
      { name: "TypeScript", icon: "Code" },
      { name: "Prisma", icon: "Database" },
      { name: "PostgreSQL", icon: "Table" },
    ],
    githubUrl: "",
    liveUrl: "",
    category: "Projects",
  },
  {
    id: 2,
    title: "Pro Peak Job Portal",
    description:
      "ProPeak is a developer-centric job portal connecting tech professionals with global job opportunities, company listings, and career resources in one intuitive platform.",
    image: "/images/pro-peak.png",
    techStack: [
      { name: "Tailwind", icon: "Layers" },
      { name: "React", icon: "Layers" },
      { name: "Redux", icon: "Layers" },
      { name: "Node.js", icon: "Server" },
      { name: "Express", icon: "Server" },
      { name: "MongoDB", icon: "CreditCard" },
      { name: "Mongoose", icon: "CreditCard" },
      { name: "JWT", icon: "CreditCard" },
    ],
    githubUrl: "",
    liveUrl: "https://pro-peak.netlify.app/",
    category: "Projects",
  },
];

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<number>(1);

  const handleTabClick = (filterId: number) => {
    setSelectedFilter(filterId);
    // Scroll the clicked tab into view
    const element = document.getElementById(`tab-${filterId}`);
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
            p.category ===
            filterOptions.find((f) => f.id === selectedFilter)?.name
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
      <div className="flex justify-center py-8 flex-nowrap lg:flex-wrap overflow-x-auto gap-3 w-full lg:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {filterOptions.map((item) => (
          <div key={item.id} id={`tab-${item.id}`} className="shrink-0">
            <button
              className={`text-sm lg:text-base border rounded-md px-6 py-2 cursor-pointer transition-all duration-300 whitespace-nowrap font-medium ${
                item.id === selectedFilter
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card text-primary/80 border-border hover:border-border hover:text-primary/80"
              }`}
              onClick={() => handleTabClick(item.id)}
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>

      {/* Project list */}
      <div className="container pb-20 md:pb-32">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  layout: { duration: 0.4 },
                }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ContactFormSectionV2 className="py-20 md:py-32 bg-card" />
    </div>
  );
};

export default ProjectsPage;
