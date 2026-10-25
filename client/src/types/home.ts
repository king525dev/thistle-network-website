import type { Cta, PageHeader, SocialLink } from "./common";
import type { Media } from "./media";

export type HeroContent = {
  tagLine: string;
  header: string;
  description: string;
  primaryCtaText: string;
  logo?: Media;
  thistleIcon?: Media;
};

export type HeroPhoto = {
  id: string;
  caption: string;
  image: Media;
};

export type AudienceKey = "current" | "aspiring";

export type JoinOption = {
  id: string;
  optionTitle: string;
  optionDescription: string;
  optionLink: string;
  audienceKey: AudienceKey;
};

export type JoinModalContent = {
  modalTitle: string;
  modalDescription: string;
  options: JoinOption[];
};

export type RegistrationStep = {
  id: string;
  stepNumber: string;
  stepHeader: string;
  stepDescription: string;
};

export type RegistrationContent = PageHeader & {
  eyebrow: string;
  steps: RegistrationStep[];
};

export type AboutCard = {
  id: string;
  title: string;
  description: string;
  cta: Cta;
};

export type AboutContent = {
  eyebrow: string;
  header: string;
  description: string;
  aboutCta: Cta;
  cards: AboutCard[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqContent = {
  eyebrow: string;
  header: string;
  description: string;
  items: FaqItem[];
};

export type ContactContent = {
  eyebrow: string;
  mailLink: string;
  socials: SocialLink[];
};

export type EventsSectionContent = {
  eyebrow: string;
  header: string;
  description: string;
};

export type HomePageContent = {
  hero: HeroContent;
  heroPhotos: HeroPhoto[];
  joinModal: JoinModalContent;
  registration: RegistrationContent;
  eventsSection: EventsSectionContent;
  about: AboutContent;
  faq: FaqContent;
  contact: ContactContent;
  seoTitle?: string;
  seoDescription?: string;
};
