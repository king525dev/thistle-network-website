import type { PageHeader as PageHeaderContent } from "@/types/common";

/** The page title block shared by Gallery and News (the uploaded `.page-header`). */
export default function PageHeader({ eyebrow, header, description }: PageHeaderContent) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{header}</h1>
      {description && <p className="page-intro">{description}</p>}
    </header>
  );
}
