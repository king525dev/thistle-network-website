import Container from "@/components/ui/Container";
import type { AboutContent } from "@/types/home";

type AboutProps = {
  content: AboutContent;
};

export default function About({ content }: AboutProps) {
  return (
    <section className="aims" id="about">
      <Container className="aims-inner">
        <p className="eyebrow eyebrow-center">{content.eyebrow}</p>
        <p className="lead">{content.lead}</p>
        {content.paragraphs.map((paragraph) => (
          <p className="body-text" key={paragraph}>
            {paragraph}
          </p>
        ))}
        <p className="tagline">{content.tagline}</p>
      </Container>
    </section>
  );
}
