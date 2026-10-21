export type Cta = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  supportingText: string;
};

export type AudienceKey = "aspiring" | "current";

export type AudienceCard = {
  id: string;
  audienceKey: AudienceKey;
  tag: string;
  heading: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  ctaUrl: string;
};

export type RegistrationContent = {
  eyebrow: string;
  heading: string;
  cards: AudienceCard[];
};

export type EventsSectionContent = {
  eyebrow: string;
  heading: string;
};

export type AboutContent = {
  eyebrow: string;
  lead: string;
  paragraphs: string[];
  tagline: string;
};

export type ActivityIcon =
  | "career"
  | "community"
  | "events"
  | "partnerships"
  | "visibility"
  | "education";

export type Activity = {
  id: string;
  title: string;
  description: string;
  icon: ActivityIcon;
};

export type ActivitiesContent = {
  eyebrow: string;
  heading: string;
  items: Activity[];
};

export type CommitteeContent = {
  eyebrow: string;
  heading: string;
  blurb: string;
};

export type ContactSectionContent = {
  eyebrow: string;
  heading: string;
};

export type HomePageContent = {
  hero: HeroContent;
  registration: RegistrationContent;
  eventsSection: EventsSectionContent;
  about: AboutContent;
  activities: ActivitiesContent;
  committee: CommitteeContent;
  contactSection: ContactSectionContent;
  seoTitle?: string;
  seoDescription?: string;
};
