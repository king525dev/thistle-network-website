export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: "email" | "linkedin" | "instagram" | "other";
};

export type ContactConfig = {
  generalEmail?: string;
  employerEmail?: string;
  aspiringApprenticeEmail?: string;
  socialLinks?: SocialLink[];
};

export type FooterLink = {
  id: string;
  label: string;
  href: string;
};

export type FooterColumn = {
  id: string;
  heading: string;
  links: FooterLink[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  order?: number;
  published?: boolean;
};

export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export type RegistrationLinks = {
  currentApprentice: string;
  aspiringApprentice: string;
  employer?: string;
};

export type SiteConfig = {
  organisationName: string;
  tagline: string;
  description: string;
  contact: ContactConfig;
  navLinks: NavLink[];
  footerColumns: FooterColumn[];
  registrationLinks: RegistrationLinks;
};
