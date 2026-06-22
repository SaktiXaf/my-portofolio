import { skills } from "../../data/skills";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { PortfolioEmptyState } from "./PortfolioEmptyState";

export function SkillsGrid() {
  if (!skills.length) {
    return <PortfolioEmptyState title="No additional skills have been added." />;
  }

  return (
    <section className="skills-grid" aria-label="Additional skills">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <Card className="skill-card" key={skill.id}>
            <span className={`skill-icon ${skill.id}`}>
              {skill.logo ? <img src={skill.logo} alt={`${skill.name} logo`} loading="lazy" /> : <Icon size={22} />}
            </span>
            <Badge>{skill.category}</Badge>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </Card>
        );
      })}
    </section>
  );
}
