/**
 * Application-level media type.
 *
 * This is intentionally decoupled from Strapi's raw media response shape
 * (`data.attributes.url`, formats, etc). The Strapi mapper layer is
 * responsible for turning a Strapi media object into this shape.
 */
export type Media = {
  id: string;
  url: string;
  width?: number;
  height?: number;
  alternativeText?: string;
  caption?: string;
};
