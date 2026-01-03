export interface TechStack {
  name: string;
  icon?: string; // Icon name from lucide-react or path
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: TechStack[];
  tags: string[];
  image: string;
  lightBg?: string;
  darkBg?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "Projects" | "Case Studies";
}
