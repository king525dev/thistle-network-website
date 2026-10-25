import Button from "@/components/ui/Button";
import type { AboutContent } from "@/types/home";

type AboutProps = {
  content: AboutContent;
};

/**
 * The "Who we are" header and the two cards. The page places this, and the FAQ,
 * inside one #about container, because the uploaded CSS scopes them there.
 */
export default function About({ content }: AboutProps) {
  return (
    <>
      <header className="about-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.header}</h2>
        <p>{content.description}</p>
        <Button href={content.aboutCta.link} variant="outline">
          {content.aboutCta.text}
        </Button>
      </header>

      <section className="about-grid">
        {content.cards.map((card) => (
          <div className="about-card reveal" key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Button href={card.cta.link} variant="primary">
              {card.cta.text}
            </Button>
          </div>
        ))}
      </section>
    </>
  );
}
