import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { RegistrationContent } from "@/types/home";

type RegistrationProps = {
  content: RegistrationContent;
};

export default function Registration({ content }: RegistrationProps) {
  return (
    <section className="audience" id="registration">
      <Container>
        <div className="sec-head">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.heading}</h2>
        </div>

        <div className="audience-grid">
          {content.cards.map((card) => (
            <div className={`a-card ${card.audienceKey}`} key={card.id}>
              <span className="a-tag">{card.tag}</span>
              <h3>{card.heading}</h3>
              <p>{card.description}</p>
              <ul className="a-list">
                {card.benefits.map((benefit) => (
                  <li key={benefit}>
                    <span className="dot" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button href={card.ctaUrl} variant={card.audienceKey === "aspiring" ? "primary" : "ghost"}>
                {card.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
