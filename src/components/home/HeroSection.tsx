import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="hero-section container">
      <div className="hero-content">
        <p className="eyebrow">HELLO, I'M</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="hero-description">{profile.description}</p>
        <div className="hero-actions">
          <Button to="/#portfolio-projects">
            View Projects <ArrowRight size={18} />
          </Button>
          <a className="button button-secondary" href={profile.cv} download>
            <Download size={18} /> Download CV
          </a>
          <a className="button button-ghost" href="https://github.com/SaktiXaf?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Github size={18} /> GitHub Profile
          </a>
        </div>
        <div className="hero-socials" aria-label="Highlighted social links">
          <a href="https://github.com/SaktiXaf?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sakti-selginov-3b364a343" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Profile visual">
        <div className="profile-glow" />
        <img src={profile.photo} alt={`${profile.name} profile portrait placeholder`} />
      </div>
    </section>
  );
}
