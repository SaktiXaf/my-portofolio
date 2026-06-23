import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { PortfolioEmptyState } from "./PortfolioEmptyState";

export function ProjectGrid() {
  if (!projects.length) {
    return <PortfolioEmptyState title="No projects available yet." message="New projects will be added soon." />;
  }

  return (
    <section className="portfolio-grid project-grid" aria-label="Projects">
      {projects.length > 1 ? (
        <span className="project-carousel-hint" aria-hidden="true">
          Geser
        </span>
      ) : null}
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
