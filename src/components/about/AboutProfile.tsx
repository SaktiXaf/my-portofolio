import { ArrowRight, CheckCircle2, Download, Layers3 } from "lucide-react";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const focusItems = ["Responsive UI", "API flow", "Database logic", "Clean deployment"];
const processSteps = ["Research", "Prototype", "Build", "Refine"];

export function AboutProfile() {
  return (
    <section className="about-profile about-profile-distinct">
      <div className="about-copy">
        <p className="eyebrow">ABOUT ME</p>
        <h1>Learn while implementing.</h1>
        <div className="about-text">
          <p>
            Saya adalah pelajar jurusan Pengembangan Perangkat Lunak dan Gim yang memiliki minat dalam pengembangan
            website dan aplikasi.
          </p>
          <p>
            Saya berfokus pada pembuatan website yang responsif, memiliki tampilan modern, serta memberikan pengalaman
            pengguna yang nyaman. Saat ini saya terus mengembangkan kemampuan di bidang frontend, backend, database, dan
            software development.
          </p>
        </div>
        <blockquote>"Turning ideas into clean, modern, and meaningful digital experiences."</blockquote>
        <div className="hero-actions">
          <a className="button button-primary" href={profile.cv} download>
            <Download size={18} /> Download CV
          </a>
          <Button to="/#portfolio-projects" variant="secondary">
            View Projects <ArrowRight size={18} />
          </Button>
        </div>
      </div>

      <div className="about-workbench" aria-label="Development focus overview">
        <Card className="about-focus-card">
          <span className="about-focus-icon">
            <Layers3 size={24} />
          </span>
          <p>Current direction</p>
          <h2>Full-stack web fundamentals with a product mindset.</h2>
          <div className="about-focus-list">
            {focusItems.map((item) => (
              <span key={item}>
                <CheckCircle2 size={16} /> {item}
              </span>
            ))}
          </div>
        </Card>

        <div className="about-process" aria-label="Work process">
          {processSteps.map((step, index) => (
            <div className="about-process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
