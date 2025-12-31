"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Project } from "@/types/project";
import * as LucideIcons from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-[#151514] border border-[#44403c] rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-orange-400/50 transition-colors duration-300"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col grow gap-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-[#a8a29e] line-clamp-2 text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (LucideIcons as any)[
              tech.icon || "Code"
            ] as React.FC<LucideIcons.LucideProps>;
            return (
              <div
                key={index}
                className="flex items-center gap-1.5 bg-[#292524] border border-[#44403c] px-3 py-1.5 rounded-lg text-xs font-medium text-orange-200"
              >
                {tech.icon && <Icon className="w-3.5 h-3.5" />}
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center justify-end gap-3 pt-4 border-t border-[#44403c]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#292524] text-white hover:bg-orange-400 hover:text-black transition-all duration-300 border border-[#44403c]"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#292524] text-white hover:bg-orange-400 hover:text-black transition-all duration-300 border border-[#44403c]"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
