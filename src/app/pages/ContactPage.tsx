import { ContactForm } from "../../components/contact/ContactForm";
import { SocialLinks } from "../../components/contact/SocialLinks";
import { PageContainer } from "../../components/layout/PageContainer";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Seo } from "../../components/ui/Seo";

export function ContactPage() {
  return (
    <PageContainer>
      <Seo
        title="Contact | Sakti Maximillian Selginov"
        description="Send a project, collaboration, or connection message to Sakti Maximillian Selginov."
      />
      <section className="container contact-page">
        <SectionTitle
          title="Contact Me"
          description="Punya ide project, butuh website, atau ingin diskusi soal AI automation? Hubungi saya lewat form di bawah."
        />
        <div className="contact-grid">
          <SocialLinks />
          <ContactForm />
        </div>
      </section>
    </PageContainer>
  );
}
