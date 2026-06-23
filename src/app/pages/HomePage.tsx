import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AboutCards } from "../../components/about/AboutCards";
import { AboutProfile } from "../../components/about/AboutProfile";
import { ContactForm } from "../../components/contact/ContactForm";
import { SocialLinks } from "../../components/contact/SocialLinks";
import { HeroSection } from "../../components/home/HeroSection";
import { SummaryCards } from "../../components/home/SummaryCards";
import { WhatIDoSection } from "../../components/home/WhatIDoSection";
import { PageContainer } from "../../components/layout/PageContainer";
import { OrderSection } from "../../components/order/OrderSection";
import { PortfolioHeader } from "../../components/portfolio/PortfolioHeader";
import { PortfolioTabContent } from "../../components/portfolio/PortfolioTabContent";
import { PortfolioTabs, type PortfolioTab } from "../../components/portfolio/PortfolioTabs";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Seo } from "../../components/ui/Seo";
import { profile } from "../../data/profile";

const revealTransition = { duration: 0.65, ease: "easeOut" } as const;

const portfolioHashTabs: Record<string, PortfolioTab> = {
  "portfolio-projects": "projects",
  "portfolio-certificates": "certificates",
  "portfolio-tech-stack": "tech-stack",
  "portfolio-skills": "skills",
};

interface ScrollSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

function ScrollSection({ id, className, children }: ScrollSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 42, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={revealTransition}
    >
      {children}
    </motion.section>
  );
}

function ScrollEffects() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.22, 0.38, 0.18]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <motion.div className="scroll-grid-layer" style={{ y: gridY, opacity: gridOpacity }} aria-hidden="true" />
    </>
  );
}

export function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<PortfolioTab>("projects");

  useEffect(() => {
    const hash = location.hash.replace("#", "") || "home";
    const portfolioTab = portfolioHashTabs[hash];
    const sectionId = portfolioTab ? "portfolio" : hash;
    const target = document.getElementById(sectionId);

    if (portfolioTab) {
      setActiveTab(portfolioTab);
    }

    if (!target) {
      return;
    }

    const timeout = window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [location.hash]);

  const handlePortfolioTabChange = (tab: PortfolioTab) => {
    setActiveTab(tab);
    navigate(`/#portfolio-${tab}`);
  };

  return (
    <PageContainer>
      <Seo
        title="Sakti Maximillian Selginov | Web Developer & AI Builder"
        description="Portfolio of Sakti Maximillian Selginov, a Web Developer and AI Builder focused on React, TypeScript, PHP, Node.js, SQL, Python, and n8n."
      />
      <ScrollEffects />

      <ScrollSection id="home" className="one-page-section intro-section">
        <HeroSection />
        <SummaryCards />
        <WhatIDoSection />
      </ScrollSection>

      <ScrollSection id="about" className="one-page-section about-page-section">
        <div className="container about-page">
          <AboutProfile />
          <AboutCards />
        </div>
      </ScrollSection>

      <ScrollSection id="portfolio" className="one-page-section portfolio-page-section">
        <div className="container portfolio-page">
          <PortfolioHeader />
          <PortfolioTabs activeTab={activeTab} onChange={handlePortfolioTabChange} />
          <PortfolioTabContent activeTab={activeTab} />
        </div>
      </ScrollSection>

      <ScrollSection id="order" className="one-page-section order-page-section">
        <OrderSection />
      </ScrollSection>

      <ScrollSection id="contact" className="one-page-section contact-page-section">
        <div className="container contact-page">
          <SectionTitle
            title="Contact Me"
            description="Punya ide project, butuh website, atau ingin diskusi soal AI automation? Hubungi saya lewat form di bawah."
          />
          <div className="contact-grid">
            <SocialLinks />
            <ContactForm />
          </div>
        </div>
      </ScrollSection>
    </PageContainer>
  );
}
