import { AboutCards } from "../../components/about/AboutCards";
import { AboutProfile } from "../../components/about/AboutProfile";
import { PageContainer } from "../../components/layout/PageContainer";
import { Seo } from "../../components/ui/Seo";

export function AboutPage() {
  return (
    <PageContainer>
      <Seo
        title="About | Sakti Maximillian Selginov"
        description="Learn about Sakti Maximillian Selginov, a PPLG student focused on frontend, backend, database, and modern web development."
      />
      <div className="container about-page">
        <AboutProfile />
        <AboutCards />
      </div>
    </PageContainer>
  );
}
