import { useSearchParams } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";
import { PortfolioHeader } from "../../components/portfolio/PortfolioHeader";
import { PortfolioTabContent } from "../../components/portfolio/PortfolioTabContent";
import { PortfolioTabs, portfolioTabs, type PortfolioTab } from "../../components/portfolio/PortfolioTabs";
import { Seo } from "../../components/ui/Seo";

const validTabs = portfolioTabs.map((tab) => tab.value);

export function PortfolioPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const activeTab = validTabs.includes(tabParam as PortfolioTab) ? (tabParam as PortfolioTab) : "projects";

  const handleTabChange = (tab: PortfolioTab) => {
    setSearchParams({ tab });
  };

  return (
    <PageContainer>
      <Seo
        title="Portfolio Showcase | Sakti Maximillian Selginov"
        description="Explore projects, technical expertise, and additional skills from Sakti Maximillian Selginov."
      />
      <section className="container portfolio-page">
        <PortfolioHeader />
        <PortfolioTabs activeTab={activeTab} onChange={handleTabChange} />
        <PortfolioTabContent activeTab={activeTab} />
      </section>
    </PageContainer>
  );
}
