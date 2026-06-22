import { motion } from "framer-motion";
import type { PortfolioTab } from "./PortfolioTabs";
import { CertificateGrid } from "./CertificateGrid";
import { ProjectGrid } from "./ProjectGrid";
import { SkillsGrid } from "./SkillsGrid";
import { TechStackGrid } from "./TechStackGrid";

interface PortfolioTabContentProps {
  activeTab: PortfolioTab;
}

export function PortfolioTabContent({ activeTab }: PortfolioTabContentProps) {
  return (
    <motion.div
      key={activeTab}
      className="portfolio-content"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      role="tabpanel"
    >
      {activeTab === "projects" ? <ProjectGrid /> : null}
      {activeTab === "certificates" ? <CertificateGrid /> : null}
      {activeTab === "tech-stack" ? <TechStackGrid /> : null}
      {activeTab === "skills" ? <SkillsGrid /> : null}
    </motion.div>
  );
}
