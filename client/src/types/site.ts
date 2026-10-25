import type { Cta, SocialLink } from "./common";
import type { Media } from "./media";

export type NavLink = {
  id: string;
  text: string;
  link: string;
};

export type FooterLink = NavLink;

export type FooterColumn = {
  id: string;
  header: string;
  links: FooterLink[];
};

export type SiteContent = {
  navLogo?: Media;
  navLinks: NavLink[];
  navCta: Cta;
  footerLogo?: Media;
  footerDescription: string;
  footerSocials: SocialLink[];
  footerColumns: FooterColumn[];
};
