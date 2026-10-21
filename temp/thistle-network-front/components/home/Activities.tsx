import Container from "@/components/ui/Container";
import type { ReactNode } from "react";
import type { ActivitiesContent, ActivityIcon } from "@/types/home";

const icons: Record<ActivityIcon, ReactNode> = {
  career: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14.5 14a5 5 0 0 1 5.5 5" />
    </svg>
  ),
  events: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
  partnerships: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  visibility: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
      <path d="M4 19h16M9 8h6M9 12h6" />
    </svg>
  ),
};

type ActivitiesProps = {
  content: ActivitiesContent;
};

export default function Activities({ content }: ActivitiesProps) {
  return (
    <section className="activities on-dark">
      <Container>
        <div className="sec-head">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.heading}</h2>
        </div>
        <div className="act-grid">
          {content.items.map((activity) => (
            <div className="act-cell" key={activity.id}>
              <span className="icon">{icons[activity.icon]}</span>
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
