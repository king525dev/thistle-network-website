import Container from "@/components/ui/Container";

export type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/**
 * Reusable header used by Gallery, News, and future pages (Events,
 * Resources, ...).
 */
export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="page-hero">
      <Container>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </Container>
    </section>
  );
}
