import Link from "next/link";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import ThistleLogo from "@/components/brand/ThistleLogo";
import Contact from "@/components/home/Contact";
import { socialIcon } from "@/components/home/social-icons";
import type { ContactContent } from "@/types/home";
import type { SiteContent } from "@/types/site";

type FooterProps = {
  site: SiteContent;
  /** Passed only on the homepage, so the contact band appears in the footer there and nowhere else. */
  contact?: ContactContent;
};

/**
 * Shared footer for every page: brand and social links, the footer columns,
 * and the copyright line.
 */
export default function Footer({ site, contact }: FooterProps) {
  return (
    <footer id="contact" className="site-footer">
      {contact && <Contact content={contact} />}
      <Container className="footer-main">
        <div className="brand-col">
          <div className="brand-logo">
            <ThistleLogo image={site.footerLogo} variant="footer" />
          </div>
          <p className="brand-desc">{site.footerDescription}</p>
          <div className="social-icons">
            {site.footerSocials.map((social) => {
              const icon = socialIcon(social.platform);
              return (
                <a key={social.id} className="social-icon" href={social.link} aria-label={social.text}>
                  {icon && <Icon name={icon} />}
                </a>
              );
            })}
          </div>
        </div>

        {site.footerColumns.map((column) => (
          <div className="link-col" key={column.id}>
            <h4>{column.header}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link.id}>
                  <Link href={link.link}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="footer-bottom">
        <span>© {new Date().getFullYear()} The Thistle Network. All rights reserved.</span>
        <span>Made by apprentices, for apprentices — Scotland.</span>
      </Container>
    </footer>
  );
}
