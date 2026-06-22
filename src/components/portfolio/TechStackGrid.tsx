import { useMemo, useState } from "react";
import { techStacks } from "../../data/tech-stacks";
import { cx } from "../../lib/utils";
import type { TechStack } from "../../types";
import { Card } from "../ui/Card";
import { PortfolioEmptyState } from "./PortfolioEmptyState";

const filters: Array<{ label: string; value: "all" | TechStack["category"] }> = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Database", value: "database" },
  { label: "Tools", value: "tools" },
];

export function TechStackGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const filteredStacks = useMemo(
    () => (filter === "all" ? techStacks : techStacks.filter((tech) => tech.category === filter)),
    [filter],
  );

  if (!techStacks.length) {
    return <PortfolioEmptyState title="No technologies have been added." />;
  }

  return (
    <section aria-label="Tech stack">
      <div className="filter-pills" role="group" aria-label="Filter tech stack">
        {filters.map((item) => (
          <button
            key={item.value}
            className={cx("filter-pill", filter === item.value && "active")}
            type="button"
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tech-grid">
        {filteredStacks.map((tech, index) => (
          <Card className="tech-card" key={tech.id} style={{ animationDelay: `${index * 45}ms` }}>
            <span className={`tech-icon ${tech.category} ${tech.slug}`}>
              <img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" />
            </span>
            <h3>{tech.name}</h3>
            <p>{tech.level}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
