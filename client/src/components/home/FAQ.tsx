"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import type { FaqContent } from "@/types/home";

type FAQProps = {
  content: FaqContent;
};

/**
 * Accessible accordion. Only one answer is open at a time. Each question is a
 * real <button> with aria-expanded and aria-controls, and each answer is a
 * labelled region. Opening and closing is local state; no library.
 */
export default function FAQ({ content }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="about-faq" id="faq" aria-label="Frequently asked questions">
      <div className="faq-intro">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.header}</h2>
        <p>{content.description}</p>
      </div>

      <div className="faq">
        {content.items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div className={`faq-item reveal${isOpen ? " open" : ""}`} key={item.id}>
              <button
                className="faq-q"
                type="button"
                id={`faq-q-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                {item.question}
                <Icon name="faqPlus" />
              </button>
              <div className="faq-a" id={`faq-a-${item.id}`} role="region" aria-labelledby={`faq-q-${item.id}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
