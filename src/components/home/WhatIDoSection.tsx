import { Bot, Code2, Database } from "lucide-react";
import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";

const services = [
  {
    title: "Frontend Development",
    description: "Membuat tampilan website responsif dan modern dengan React/TypeScript.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description: "Membuat API, database, authentication, dan sistem CRUD.",
    icon: Database,
  },
  {
    title: "AI Automation",
    description: "Membuat workflow AI menggunakan n8n dan integrasi tools.",
    icon: Bot,
  },
];

export function WhatIDoSection() {
  return (
    <section className="what-i-do-section container" aria-label="What I do">
      <SectionTitle
        centered
        title="What I Do"
        description="Saya membantu membangun website, sistem backend, dan workflow automasi AI yang fungsional."
      />
      <div className="what-i-do-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card className="what-i-do-card" key={service.title}>
              <span className="what-i-do-icon">
                <Icon size={22} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
