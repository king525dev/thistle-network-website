/**
 * Raw Strapi REST response shapes.
 *
 * These types describe what comes back over the wire from Strapi
 * (e.g. the `data.attributes.*` nesting Strapi v4 uses). They should
 * never leak past `mappers.ts` - components must only ever see the
 * clean application types in `src/types`.
 *
 * Left minimal for the MVP since there is no live Strapi instance yet;
 * fill these in against the real content-type schemas when Strapi is
 * introduced.
 */

export type StrapiMediaAttributes = {
  url: string;
  width?: number;
  height?: number;
  alternativeText?: string;
  caption?: string;
};

export type StrapiMedia = {
  data: {
    id: number;
    attributes: StrapiMediaAttributes;
  } | null;
};

export type StrapiEntity<TAttributes> = {
  id: number;
  attributes: TAttributes;
};

export type StrapiCollectionResponse<TAttributes> = {
  data: StrapiEntity<TAttributes>[];
};

export type StrapiSingleResponse<TAttributes> = {
  data: StrapiEntity<TAttributes> | null;
};

export type StrapiNewsPostAttributes = {
  title?: string;
  body: string;
  publishedAt: string;
  pinned?: boolean;
  image?: StrapiMedia;
  author?: {
    data: StrapiEntity<{ name: string; profileImage?: StrapiMedia }> | null;
  };
};

export type StrapiGalleryAlbumAttributes = {
  title: string;
  date: string;
  tagline?: string;
  location?: string;
  attendeeCount?: number;
  coverImage?: StrapiMedia;
  images?: { data: StrapiEntity<StrapiMediaAttributes>[] };
};
