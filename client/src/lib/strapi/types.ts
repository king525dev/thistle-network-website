/**
 * Raw Strapi 5 REST shapes (flattened: no `attributes`, string `documentId`).
 * Components carry only a numeric `id`. Empty fields arrive as `null`.
 * These types never leave lib/strapi - components only see types/*.ts.
 */

export type StrapiMedia = {
  id: number;
  documentId: string;
  url: string;
  width?: number | null;
  height?: number | null;
  alternativeText?: string | null;
  caption?: string | null;
};

export type StrapiEntity<TFields> = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
} & TFields;

export type StrapiComponent<TFields> = { id: number } & {
  [K in keyof TFields]?: TFields[K] | null;
};

export type StrapiCollectionResponse<TFields> = {
  data: StrapiEntity<TFields>[];
  meta: Record<string, unknown>;
};

export type StrapiSingleResponse<TFields> = {
  data: TFields | null;
  meta: Record<string, unknown>;
};

export type StrapiCtaFields = { text: string; link: string };
export type StrapiLinkFields = { text: string; link: string };
export type StrapiSocialFields = {
  text: string;
  link: string;
  platform: "instagram" | "linkedin" | "tiktok" | "email" | "other";
};
export type StrapiPageHeaderFields = { eyebrow: string; header: string; description: string };

export type StrapiHeroFields = {
  tagLine: string;
  header: string;
  description: string;
  primaryCtaText: string;
  heroLogo: StrapiMedia | null;
  thistleIcon: StrapiMedia | null;
};

export type StrapiJoinOptionFields = {
  optionTitle: string;
  optionDescription: string;
  optionLink: string;
  audienceKey: "current" | "aspiring";
};

export type StrapiHomePageFields = {
  hero: StrapiComponent<StrapiHeroFields>;
  joinModal: StrapiComponent<{
    modalTitle: string;
    modalDescription: string;
    options: StrapiComponent<StrapiJoinOptionFields>[];
  }>;
  registration: StrapiComponent<{
    eyebrow: string;
    header: string;
    steps: StrapiComponent<{ stepNumber: string; stepHeader: string; stepDescription: string }>[];
  }>;
  eventsSection: StrapiComponent<{ eyebrow: string; header: string; description: string }>;
  about: StrapiComponent<{
    eyebrow: string;
    header: string;
    description: string;
    aboutCta: StrapiComponent<StrapiCtaFields>;
    aboutGrid: StrapiComponent<{ title: string; description: string; cta: StrapiComponent<StrapiCtaFields> }>[];
  }>;
  faq: StrapiComponent<{
    eyebrow: string;
    header: string;
    description: string;
    items: StrapiComponent<{ question: string; answer: string }>[];
  }>;
  contact: StrapiComponent<{
    eyebrow: string;
    mailLink: string;
    socials: StrapiComponent<StrapiSocialFields>[];
  }>;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

export type StrapiHeroPhotoFields = {
  caption: string;
  order: number;
  image: StrapiMedia | null;
};

export type StrapiEventFields = {
  title: string;
  description: string;
  startDate: string;
  endDate?: string | null;
  location?: string | null;
  coverImage?: StrapiMedia | null;
  registrationUrl?: string | null;
  numberOfAttendees: number;
  gallery?: StrapiEntity<{ title: string; fullAlbumLink?: string | null }> | null;
  cta: StrapiComponent<StrapiCtaFields> | null;
  status: "upcoming" | "next" | "previous" | "past";
};

export type StrapiGalleryAlbumFields = {
  uid: string;
  title: string;
  date: string;
  tagline?: string | null;
  location?: string | null;
  attendeeCount?: number | null;
  event?: StrapiEntity<{ title: string; startDate: string }> | null;
  fullAlbumLink?: string | null;
  coverImage?: StrapiMedia | null;
  images?: StrapiMedia[] | null;
};

export type StrapiNewsPostFields = {
  authorHandle: string;
  avatar?: StrapiMedia | null;
  postedAt: string;
  newsType: "Announcement" | "Event";
  postBody: string;
  postImage?: StrapiMedia | null;
  pinned: boolean;
  likeCount: number;
  emojis?: StrapiComponent<{ emoji: string; count: number }>[] | null;
};

export type StrapiPageFields = {
  header: StrapiComponent<StrapiPageHeaderFields>;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

export type StrapiSiteSettingFields = {
  navLogo?: StrapiMedia | null;
  navLinks?: StrapiComponent<StrapiLinkFields>[] | null;
  navCta?: StrapiComponent<StrapiCtaFields> | null;
  footerLogo?: StrapiMedia | null;
  footerDescription?: string | null;
  footerSocials?: StrapiComponent<StrapiSocialFields>[] | null;
  footerColumns?: StrapiComponent<{
    header: string;
    links: StrapiComponent<StrapiLinkFields>[];
  }>[] | null;
};
