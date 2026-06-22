import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types";
import { statusLabel } from "../../lib/utils";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <img className="project-thumbnail" src={project.thumbnail} alt={`${project.title} preview`} loading="lazy" />
      <div className="project-card-body">
        <div className="project-card-heading">
          <h3>{project.title}</h3>
          <Badge>{statusLabel[project.status]}</Badge>
        </div>
        <p>{project.shortDescription}</p>
        <div className="badge-row">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech.name}>{tech.name}</Badge>
          ))}
        </div>
        <div className="link-status">
          <span className={project.liveDemoUrl ? "available" : "unavailable"}>
            <ExternalLink size={15} />
            {project.liveDemoUrl ? "Live Demo Available" : "Live demo is not available."}
          </span>
          <span className={project.repositoryUrl ? "available" : "unavailable"}>
            <Github size={15} />
            {project.repositoryUrl ? "GitHub Repository Available" : "Repository is private."}
          </span>
        </div>
        <Link className="details-link" to={`/portfolio/project/${project.slug}`}>
          Details <ArrowRight size={17} />
        </Link>
      </div>
    </Card>
  );
}
