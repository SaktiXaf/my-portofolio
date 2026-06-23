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
      <div className="project-screenshot">
        <img className="project-thumbnail" src={project.thumbnail} alt={`${project.title} project screenshot`} loading="lazy" />
        <span>Project Screenshot</span>
      </div>
      <div className="project-card-body">
        <div className="project-card-heading">
          <h3>{project.title}</h3>
          <Badge>{statusLabel[project.status]}</Badge>
        </div>

        <p className="project-description">{project.shortDescription}</p>

        <div className="project-problem">
          <span>Problem solved</span>
          <p>{project.problemSolved}</p>
        </div>

        <div className="project-stack">
          <span>Tech stack</span>
          <div className="badge-row">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech.name}>{tech.name}</Badge>
            ))}
          </div>
        </div>

        <div className="project-feature-list">
          <span>Fitur utama</span>
          <ul>
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-action-row">
          {project.liveDemoUrl ? (
            <a className="project-action project-action-primary" href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} /> Live Demo
            </a>
          ) : (
            <span className="project-action project-action-disabled">
              <ExternalLink size={15} /> Live Demo
            </span>
          )}
          {project.repositoryUrl ? (
            <a className="project-action" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
              <Github size={15} /> GitHub
            </a>
          ) : (
            <span className="project-action project-action-disabled">
              <Github size={15} /> GitHub
            </span>
          )}
        </div>

        <Link className="details-link" to={`/portfolio/project/${project.slug}`}>
          Details <ArrowRight size={17} />
        </Link>
      </div>
    </Card>
  );
}
