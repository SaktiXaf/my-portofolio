import { BookOpen, Compass, GraduationCap, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
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
  return (
    <section className="about-cards" aria-label="Additional profile information">
      {aboutCards.map((item) => {
        const Icon = item.icon;
        return (
          <Card className="info-card" key={item.title}>
            <Icon size={22} />
            <p>{item.title}</p>
            <h3>{item.value}</h3>
            <span>{item.description}</span>
          </Card>
        );
      })}
    </section>
  );
}
