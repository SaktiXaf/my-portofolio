import { cx } from "../../lib/utils";

export const portfolioTabs = [
  { label: "Projects", value: "projects" },
  { label: "Tech Stack", value: "tech-stack" },
  { label: "Skills", value: "skills" },
  { label: "Certificates", value: "certificates" },
] as const;

export type PortfolioTab = (typeof portfolioTabs)[number]["value"];

interface PortfolioTabsProps {
  activeTab: PortfolioTab;
  onChange: (tab: PortfolioTab) => void;
}

export function PortfolioTabs({ activeTab, onChange }: PortfolioTabsProps) {
  return (
    <div className="portfolio-tabs-wrap">
      <div className="portfolio-tabs" role="tablist" aria-label="Portfolio sections">
        {portfolioTabs.map((tab) => (
          <button
            key={tab.value}
            className={cx("portfolio-tab", activeTab === tab.value && "active")}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.value}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
