import { skills } from "../../data/skills";
import { useState } from "react";
import { cx } from "../../lib/utils";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { PortfolioEmptyState } from "./PortfolioEmptyState";

export function SkillsGrid() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  if (!skills.length) {
    return <PortfolioEmptyState title="No additional skills have been added." />;
  }

  return (
    <section className="skills-grid" aria-label="Additional skills">
      {skills.map((skill) => {
        const Icon = skill.icon;
        const isExpanded = expandedSkill === skill.id;

        return (
          <Card
            className={cx("skill-card", isExpanded && "expanded")}
            key={skill.id}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            onClick={() => setExpandedSkill((current) => (current === skill.id ? null : skill.id))}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setExpandedSkill((current) => (current === skill.id ? null : skill.id));
              }
            }}
          >
            <span className={`skill-icon ${skill.id}`}>
              {skill.logo ? <img src={skill.logo} alt={`${skill.name} logo`} loading="lazy" /> : <Icon size={22} />}
            </span>
            <Badge>{skill.category}</Badge>
            <h3>{skill.name}</h3>
            <p className="skill-card-description">{skill.description}</p>
          </Card>
        );
      })}
    </section>
  );
}
