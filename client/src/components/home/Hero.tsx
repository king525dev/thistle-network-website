import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/mock/site";

export default function Hero() {
  return (
    <section className="hero">
      <Container className="hero-grid">
        <div>
          <p className="eyebrow">{siteConfig.tagline}</p>
          <h1>Connecting apprentices across Scotland</h1>
          <p className="hero-sub">{siteConfig.description}</p>
          <div className="hero-ctas">
            <Link href="/#registration" className="btn btn-primary">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 20v-6M12 4v2M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              Register to join
            </Link>
            <Link href="/#events" className="btn btn-ghost">
              See our events
            </Link>
          </div>
          <p className="hero-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 2" />
            </svg>
            Free to join · WhatsApp access is granted after registration
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
