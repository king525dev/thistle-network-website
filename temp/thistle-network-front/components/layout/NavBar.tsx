import Link from "next/link";
import Container from "@/components/ui/Container";
import ThistleLogo from "@/components/brand/ThistleLogo";
import MobileNav from "./MobileNav";
import { siteConfig } from "@/data/mock/site";

export default function NavBar() {
  const registrationHref = "/#registration";

  return (
    <header className="site-header">
      <Container as="nav" className="nav-inner">
        <Link href="/" className="brand" aria-label={`${siteConfig.organisationName} home`}>
          <ThistleLogo />
        </Link>

        <ul className="nav-links">
          {siteConfig.navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <Link href={registrationHref} className="btn btn-primary">
            Register to join
          </Link>
        </div>

        <MobileNav navLinks={siteConfig.navLinks} registrationHref={registrationHref} />
      </Container>
    </header>
  );
}
