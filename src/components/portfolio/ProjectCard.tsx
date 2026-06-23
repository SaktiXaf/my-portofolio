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

        <div className="project-tech-line">
          {project.technologies.slice(0, 4).map((tech) => tech.name).join(", ")}
        </div>

        <p>{project.shortDescription}</p>

        <div className="project-problem">
          <span>Problem solved</span>
          <p>{project.problemSolved}</p>
        </div>

        <div className="project-feature-list">
          <span>Fitur utama</span>
          <ul>
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="badge-row">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech.name}>{tech.name}</Badge>
          ))}
        </div>

        <div className="project-action-row">
          {project.liveDemoUrl ? (
            <a className="project-action project-action-primary" href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} /> Live Demo
            </a>
          ) : null}
          {project.repositoryUrl ? (
            <a className="project-action" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
              <Github size={15} /> GitHub
            </a>
          ) : null}
        </div>

        <Link className="details-link" to={`/portfolio/project/${project.slug}`}>
          Details <ArrowRight size={17} />
        </Link>
      </div>
    </Card>
  );
}
