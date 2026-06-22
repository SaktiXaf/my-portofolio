import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";
import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";
import { Seo } from "../../components/ui/Seo";
import { projects } from "../../data/projects";
import { statusLabel } from "../../lib/utils";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/#portfolio-projects");
  };

  return (
    <PageContainer>
      <Seo title={`${project.title} | Sakti Maximillian Selginov`} description={project.shortDescription} />
      <section className="container project-detail-page">
        <button className="back-button" type="button" onClick={goBack}>
          <ArrowLeft size={18} /> Back
        </button>
        <div className="project-detail-grid">
          <div className="project-detail-main">
            <Badge>{statusLabel[project.status]}</Badge>
            <h1>{project.title}</h1>
            <span className="project-title-line" />
            <p>{project.fullDescription}</p>

            <div className="project-stats">
              <Card className="stat-card">
                <strong>{project.technologies.length}</strong>
                <span>Technologies Used</span>
              </Card>
              <Card className="stat-card">
                <strong>{project.features.length}</strong>
                <span>Key Features</span>
              </Card>
              <Card className="stat-card">
                <strong>{project.completedYear ?? "Now"}</strong>
                <span>{project.status === "completed" ? "Completed" : "Timeline"}</span>
              </Card>
            </div>

            <div className="action-row">
              {project.liveDemoUrl ? (
                <a className="button button-primary" href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  Open Live Demo <ExternalLink size={18} />
                </a>
              ) : (
                <span className="disabled-action">Live demo is not available.</span>
              )}
              {project.repositoryUrl ? (
                <a className="button button-secondary" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                  View Repository <Github size={18} />
                </a>
              ) : (
                <span className="disabled-action">Repository is private.</span>
              )}
            </div>

            <div className="tech-used">
              <h2>Technologies Used</h2>
              <div className="badge-row">
                {project.technologies.map((tech) => (
                  <Badge key={tech.name}>{tech.name}</Badge>
                ))}
              </div>
            </div>

          </div>

          <aside className="project-detail-side">
            <a href={project.previewImage} target="_blank" rel="noopener noreferrer" className="project-preview-link">
              <img src={project.previewImage} alt={`${project.title} large preview`} />
            </a>
            <Card className="features-card">
              <h2>Key Features</h2>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>

        {project.repositoryProjects?.length ? (
          <div className="repo-projects-section">
            <h2>Project List</h2>
            <div className="repo-projects-grid">
              {project.repositoryProjects.map((repo) => (
                <Card className="repo-project-card" key={repo.name}>
                  <div>
                    <Badge>{repo.language}</Badge>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                  </div>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    Open Repository <ExternalLink size={16} />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </PageContainer>
  );
}
