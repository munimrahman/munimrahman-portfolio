export interface TechStack {
  name: string;
  icon?: string; // Icon name from lucide-react or path
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: TechStack[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
}
