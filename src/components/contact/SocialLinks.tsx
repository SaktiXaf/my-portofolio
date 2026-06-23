import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import { socials } from "../../data/socials";
import { Card } from "../ui/Card";

export function SocialLinks() {
  return (
    <div className="contact-info">
      <Card className="contact-card">
        <Mail size={22} />
        <p>Email</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </Card>
      <Card className="contact-card">
        <MapPin size={22} />
        <p>Location</p>
        <span>{profile.location}</span>
      </Card>
      <Card className="contact-card contact-active-card">
        <Mail size={22} />
        <p>Active Contact</p>
        <span>Form email, GitHub, LinkedIn, Instagram, dan TikTok tersedia.</span>
      </Card>
      <div className="connect-section">
        <h2>Connect With Me</h2>
        <div className="social-card-list">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a className="social-card card" key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer">
                <Icon size={22} />
                <span>
                  <strong>{social.platform}</strong>
                  <small>{social.username}</small>
                </span>
                <ArrowUpRight size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
