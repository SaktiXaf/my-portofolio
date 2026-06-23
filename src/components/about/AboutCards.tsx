import { BookOpen, Compass, GraduationCap, MapPin } from "lucide-react";
import { useState } from "react";
import { profile } from "../../data/profile";
import { cx } from "../../lib/utils";
import { Card } from "../ui/Card";

const aboutCards = [
  {
    title: "Education",
    value: "PPLG Student",
    description: "Focused on software development and game-related fundamentals.",
    icon: GraduationCap,
  },
  {
    title: "Current Focus",
    value: "Frontend + Backend",
    description: "Building responsive interfaces, API flows, and database-backed apps.",
    icon: Compass,
  },
  {
    title: "Experience",
    value: "Project Based",
    description: "Learning through portfolio projects, dashboards, and API practice.",
    icon: BookOpen,
  },
  {
    title: "Location",
    value: profile.location,
    description: "Open to collaboration, internships, and remote-friendly work.",
    icon: MapPin,
  },
];

export function AboutCards() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section className="about-cards" aria-label="Additional profile information">
      {aboutCards.map((item) => {
        const Icon = item.icon;
        const isExpanded = expandedCard === item.title;

        return (
          <Card
            className={cx("info-card", isExpanded && "expanded")}
            key={item.title}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            onClick={() => setExpandedCard((current) => (current === item.title ? null : item.title))}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setExpandedCard((current) => (current === item.title ? null : item.title));
              }
            }}
          >
            <Icon size={22} />
            <p>{item.title}</p>
            <h3>{item.value}</h3>
            <span className="info-card-description">{item.description}</span>
          </Card>
        );
      })}
    </section>
  );
}
