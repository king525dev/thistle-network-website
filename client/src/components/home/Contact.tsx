import Container from "@/components/ui/Container";
import type { ContactConfig } from "@/types/site";

type ContactProps = {
  contact: ContactConfig;
};

export default function Contact({ contact }: ContactProps) {
  return (
    <section className="contact" id="contact">
      <Container className="contact-inner">
        <p className="eyebrow eyebrow-center">Get in touch</p>
        <h2>Say hello.</h2>
        {contact.generalEmail && (
          <a className="contact-email" href={`mailto:${contact.generalEmail}`}>
            {contact.generalEmail}
          </a>
        )}
        {contact.socialLinks && contact.socialLinks.length > 0 && (
          <div className="contact-socials">
            {contact.socialLinks
              .filter((link) => link.icon !== "email")
              .map((link) => (
                <a className="contact-social" key={link.id} href={link.href} aria-label={link.label}>
                  {link.label}
                </a>
              ))}
          </div>
        )}
      </Container>
    </section>
  );
}
