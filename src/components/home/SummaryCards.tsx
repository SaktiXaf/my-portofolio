import { ArrowUpRight, BrainCircuit, Code2, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { skills } from "../../data/skills";
import { techStacks } from "../../data/tech-stacks";
import { Card } from "../ui/Card";

const summary = [
  {
    label: "Projects",
    value: `${projects.length}+`,
    href: "/#portfolio-projects",
    icon: Layers3,
  },
  {
    label: "Tech Stack",
    value: `${techStacks.length}+`,
    href: "/#portfolio-tech-stack",
    icon: Code2,
  },
  {
    label: "Skills",
    value: `${skills.length}+`,
    href: "/#portfolio-skills",
    icon: Sparkles,
  },
  {
    label: "Year Learning",
    value: "1+",
    href: "/#about",
    icon: BrainCircuit,
  },
];

export function SummaryCards() {
  return (
    <section className="container summary-section" aria-label="Quick portfolio summary">
      <div className="summary-grid">
        {summary.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.label} to={item.href} className="summary-link">
              <Card className="summary-card">
                <span className="summary-icon">
                  <Icon size={22} />
                </span>
                <span className="summary-value">{item.value}</span>
                <span className="summary-label">{item.label}</span>
                <ArrowUpRight className="summary-arrow" size={18} />
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
