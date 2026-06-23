import type { LucideIcon } from "lucide-react";

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  description: string;
  location: string;
  email: string;
  photo: string;
  cv: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  problemSolved: string;
  fullDescription: string;
  thumbnail: string;
  previewImage: string;
  technologies: Technology[];
  features: string[];
  liveDemoUrl?: string;
  repositoryUrl?: string;
  status: "completed" | "in-progress" | "planned";
  completedYear?: number;
  featured: boolean;
  repositoryProjects?: RepositoryProject[];
}

export interface RepositoryProject {
  name: string;
  description: string;
  language: string;
  url: string;
}

export interface TechStack {
  id: string;
  name: string;
  slug: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
  level: "learning" | "familiar" | "comfortable" | "proficient" | (string & {});
}

export interface Skill {
  id: string;
  name: string;
  category: "Technical" | "Soft Skill";
  description: string;
  icon: LucideIcon;
  logo?: string;
}

export interface SocialLink {
  platform: "LinkedIn" | "Instagram" | "TikTok" | "GitHub";
  username: string;
  url: string;
  icon: LucideIcon;
}
