import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";
import { Seo } from "../../components/ui/Seo";

export function NotFoundPage() {
  return (
    <PageContainer>
      <Seo title="Page Not Found | Sakti Maximillian Selginov" description="The requested page could not be found." />
      <section className="container not-found-page">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link className="button button-primary" to="/#portfolio-projects">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
      </section>
    </PageContainer>
  );
}
