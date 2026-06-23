import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cx } from "../../lib/utils";

const links = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Portfolio", href: "/#portfolio", id: "portfolio" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname.startsWith("/portfolio") ? "portfolio" : "home");
      return;
    }

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === "/" && location.hash === `#${sectionId}`) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link to="/#home" className="brand" aria-label="Sakti portfolio home" onClick={() => handleNavClick("home")}>
          sakti.dev
        </Link>

        <div className="nav-links desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cx("nav-link", activeSection === link.id && "active")}
              aria-current={activeSection === link.id ? "page" : undefined}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cx("mobile-nav-link", activeSection === link.id && "active")}
              aria-current={activeSection === link.id ? "page" : undefined}
              onClick={() => {
                setOpen(false);
                handleNavClick(link.id);
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
