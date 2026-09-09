"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import type { FaqItem } from "@/types/site";

type FAQProps = {
  items: FaqItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const visibleItems = items.filter((item) => item.published !== false);

  return (
    <section className="about" id="faq">
      <Container className="about-grid">
        <div>
          <p className="eyebrow">About the committee</p>
          <h2>Run by apprentices who&apos;ve been where you are.</h2>
          <p className="committee-blurb">
            Thistle Network is led by a small volunteer committee covering events, partnerships,
            communications and community management — supported by a pool of mentors from across
            Scottish industry.
          </p>
        </div>

        <div>
          <div className="faq">
            {visibleItems.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;

              return (
                <div className={`faq-item${isOpen ? " open" : ""}`} key={item.id}>
                  <h3>
                    <button
                      type="button"
                      className="faq-q"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                    >
                      {item.question}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="faq-a"
                    hidden={!isOpen}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
