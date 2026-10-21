import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { HeroContent } from "@/types/home";

type HeroProps = {
  content: HeroContent;
};

export default function Hero({ content }: HeroProps) {
  return (
    <section className="hero">
      <Container className="hero-grid">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.headline}</h1>
          <p className="hero-sub">{content.description}</p>
          <div className="hero-ctas">
            <Button href={content.primaryCta.href} variant="primary">
              {content.primaryCta.label}
            </Button>
            <Button href={content.secondaryCta.href} variant="ghost">
              {content.secondaryCta.label}
            </Button>
          </div>
          <p className="hero-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 2" />
            </svg>
            {content.supportingText}
          </p>
        </div>

        <div className="hero-stage">
          <div className="logo-lockup">
            <div className="logo-frame">
              <Image
                src="/images/thistle-emblem.svg"
                alt="Thistle Network flower emblem"
                width={280}
                height={160}
                className="logo-static"
              />
            </div>
          </div>
          <div className="wordmark-lockup">
            <div className="line1">Thistle</div>
            <div className="line2">Network</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
