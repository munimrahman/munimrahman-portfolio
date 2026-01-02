"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Project } from "@/types/project";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

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
      className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-300 p-4 sm:p-6 shadow-sm hover:shadow-md"
    >
      {/* Project Image */}
      <div className="relative aspect-video rounded-xl overflow-hidden h-52 sm:h-72 md:h-80 lg:h-96">
        <figure className="w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col grow gap-4 sm:gap-6 pt-5 sm:pt-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.category === "Case Studies" && (
              <Link
                href="#"
                className="text-primary text-sm font-medium flex items-center gap-1 group/link shrink-0"
                aria-label="Case Study"
              >
                <span>View Case Study</span>
                <LucideIcons.ArrowRight className="w-3.5 h-3.5 sm:w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            )}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-auto">
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
                  className="flex items-center gap-1.5 bg-muted border border-border px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-medium text-foreground/80"
                >
                  {tech.icon && (
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                  )}
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4 sm:w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
