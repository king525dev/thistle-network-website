import MobileNav from "./MobileNav";
import type { SiteContent } from "@/types/site";

type NavBarProps = {
  site: SiteContent;
};

/** Server wrapper: reads the site content and passes it to the client nav. */
export default function NavBar({ site }: NavBarProps) {
  return <MobileNav logo={site.navLogo} links={site.navLinks} cta={site.navCta} />;
}
