/**
 * Raw Strapi REST response shapes (Strapi 5).
 *
 * Strapi 5 flattens its REST responses: there is no more `data.attributes`
 * wrapper, and every entity is identified by a string `documentId` instead
 * of (only) a numeric `id`. Relations and media are objects/arrays of the
 * same flattened shape, nested directly under the field name - and they
 * are NOT included unless you ask for them with `?populate=...`.
 *
 * These raw types should never leak past `mappers.ts` - components must
 * only ever see the clean application types in `types/`.
 *
 * See: https://docs.strapi.io/cms/api/rest
 */

export type StrapiMedia = {
  id: number;
  documentId: string;
  url: string;
  width?: number;
  height?: number;
  alternativeText?: string;
  caption?: string;
};

export type StrapiEntity<TFields> = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
} & TFields;

export type StrapiCollectionResponse<TFields> = {
  data: StrapiEntity<TFields>[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiSingleResponse<TFields> = {
  data: StrapiEntity<TFields> | null;
  meta: Record<string, unknown>;
};

export type StrapiAuthorFields = {
  name: string;
  profileImage?: StrapiMedia;
};

export type StrapiNewsPostFields = {
  title?: string;
  body: string;
  publishedAt: string;
  pinned?: boolean;
  image?: StrapiMedia;
  author?: StrapiEntity<StrapiAuthorFields>;
};

export type StrapiGalleryAlbumFields = {
  title: string;
  date: string;
  tagline?: string;
  location?: string;
  attendeeCount?: number;
  coverImage?: StrapiMedia;
  images?: StrapiMedia[];
};

/**
 * Components (the Strapi kind) only carry a numeric `id`, no `documentId`.
 * Every field is optional because an editor may leave a block empty, and
 * empty optional fields come back from Strapi as `null`.
 */
export type StrapiComponent<TFields> = { id: number } & {
  [K in keyof TFields]?: TFields[K] | null;
};

export type StrapiCtaFields = {
  label: string;
  href: string;
};

export type StrapiTextItemFields = {
  text: string;
};

export type StrapiPageHeaderFields = {
  eyebrow: string;
  title: string;
  description: string;
};

export type StrapiHeroFields = {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: StrapiComponent<StrapiCtaFields>;
  secondaryCta: StrapiComponent<StrapiCtaFields>;
  supportingText: string;
};

export type StrapiAudienceCardFields = {
  audienceKey: "aspiring" | "current";
  tag: string;
  heading: string;
  description: string;
  benefits: StrapiComponent<StrapiTextItemFields>[];
  ctaLabel: string;
  ctaUrl: string;
};

export type StrapiRegistrationFields = {
  eyebrow: string;
  heading: string;
  cards: StrapiComponent<StrapiAudienceCardFields>[];
};

export type StrapiSectionHeadingFields = {
  eyebrow: string;
  heading: string;
};

export type StrapiAboutFields = {
  eyebrow: string;
  lead: string;
  paragraphs: StrapiComponent<StrapiTextItemFields>[];
  tagline: string;
};

export type StrapiActivityFields = {
  title: string;
  description: string;
  icon: "career" | "community" | "events" | "partnerships" | "visibility" | "education";
};

export type StrapiActivitiesFields = {
  eyebrow: string;
  heading: string;
  items: StrapiComponent<StrapiActivityFields>[];
};

export type StrapiCommitteeFields = {
  eyebrow: string;
  heading: string;
  blurb: string;
};

export type StrapiHomePageFields = {
  hero: StrapiComponent<StrapiHeroFields>;
  registration: StrapiComponent<StrapiRegistrationFields>;
  eventsSection: StrapiComponent<StrapiSectionHeadingFields>;
  about: StrapiComponent<StrapiAboutFields>;
  activitiesSection: StrapiComponent<StrapiActivitiesFields>;
  committee: StrapiComponent<StrapiCommitteeFields>;
  contactSection: StrapiComponent<StrapiSectionHeadingFields>;
  seoTitle: string;
  seoDescription: string;
};

export type StrapiSimplePageFields = {
  header: StrapiComponent<StrapiPageHeaderFields>;
  emptyMessage: string;
  seoTitle: string;
  seoDescription: string;
};
