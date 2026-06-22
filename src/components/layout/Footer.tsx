import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { socials } from "../../data/socials";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/#home">
            sakti.dev
          </Link>
          <a className="footer-email" href={`mailto:${profile.email}`} aria-label="Send email through Gmail">
            <Mail size={18} /> Gmail
          </a>
        </div>
        <div className="footer-socials" aria-label="Social links">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.platform}>
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
      <p className="copyright">&copy; 2026 Sakti Maximillian Selginov. All rights reserved.</p>
    </footer>
  );
}
