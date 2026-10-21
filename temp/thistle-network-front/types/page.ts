export type PageHeaderContent = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/**
 * Editable copy for a simple page such as Gallery or News: the header
 * block, the message shown when there is no content, and SEO fields.
 */
export type PageContent = {
  header: PageHeaderContent;
  emptyMessage: string;
  seoTitle?: string;
  seoDescription?: string;
};
