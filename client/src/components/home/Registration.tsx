import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/mock/site";

type AudienceCard = {
  id: string;
  tag: string;
  heading: string;
  description: string;
  benefits: string[];
  ctaHref: string;
  variant: "primary" | "ghost";
};

const audienceCards: AudienceCard[] = [
  {
    id: "aspiring",
    tag: "For Aspiring Apprentices",
    heading: "Get application-ready",
    description:
      "Still at school or college and weighing up an apprenticeship? Get the insight, mentoring and confidence to apply well.",
    benefits: [
      "Apprenticeship-focused insight days with Scottish employers",
      "Mentoring and mock interviews from current apprentices",
      "Clear, honest guidance on pathways and providers",
    ],
    ctaHref: siteConfig.registrationLinks.aspiringApprentice,
    variant: "primary",
  },
  {
    id: "current",
    tag: "For Current Apprentices",
    heading: "Find your people",
    description:
      "Already on the job? Get matched to a WhatsApp group by industry and location, plus the social side university apprentices often miss out on.",
    benefits: [
      "Industry and regional WhatsApp groups",
      "Socials, trips and meet-ups across Scotland",
      "Financial literacy sessions built for early earners",
    ],
    ctaHref: siteConfig.registrationLinks.currentApprentice,
    variant: "ghost",
  },
];

export default function Registration() {
  return (
    <section className="audience" id="registration">
      <Container>
        <div className="sec-head">
          <p className="eyebrow">Two paths, one network</p>
          <h2>Whichever stage you&apos;re at, there&apos;s a place here.</h2>
        </div>

        <div className="audience-grid">
          {audienceCards.map((card) => (
            <div className={`a-card ${card.id}`} key={card.id}>
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
              <Button href={card.ctaHref} variant={card.variant}>
                Register to join
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
