import Link from "next/link";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import ThistleLogo from "@/components/brand/ThistleLogo";
import NewsletterForm from "./NewsletterForm";
import { siteConfig } from "@/data/mock/site";

const iconPaths: Record<string, ReactNode> = {
  email: (
    <path d="M4 4h16v12H7l-3 3V4Z" />
  ),
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.45-2.16 2.96V21H9z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </>
  ),
};

export default function Footer() {
  const { contact, footerColumns, organisationName } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="newsletter">
        <Container className="nl-grid">
          <div>
            <h3>Stay looped in</h3>
            <p>One email a month — events, insight days, and network news.</p>
          </div>
          <NewsletterForm />
        </Container>
      </div>

      <Container className="foot-main">
        <div className="foot-col">
          <div className="foot-brand">
            <ThistleLogo />
          </div>
          <p className="foot-desc">
            A community-led network for current and aspiring apprentices across Scotland.
          </p>
          <div className="foot-social">
            {contact.socialLinks?.map((social) => (
              <a key={social.id} href={social.href} aria-label={social.label}>
                <svg viewBox="0 0 24 24" fill={social.icon === "linkedin" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6">
                  {iconPaths[social.icon] ?? null}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div className="foot-col" key={column.id}>
            <h5>{column.heading}</h5>
            <ul>
              {column.links.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="foot-bottom">
        <span>© {new Date().getFullYear()} {organisationName}. All rights reserved.</span>
        <span>Made by apprentices, for apprentices — Scotland.</span>
      </Container>
    </footer>
  );
}
