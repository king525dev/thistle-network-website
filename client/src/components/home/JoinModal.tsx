"use client";

import { useRef } from "react";
import Icon from "@/components/ui/Icon";
import type { JoinModalContent } from "@/types/home";

type JoinModalProps = {
  content: JoinModalContent;
  ctaText: string;
};

/**
 * The "Join the Network" button and its dialog. The dialog is the browser's
 * native <dialog>: showModal() gives a focus trap, Escape to close, and the
 * inert background, with no library. A click on the backdrop closes it.
 */
export default function JoinModal({ content, ctaText }: JoinModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button className="primary-cta" id="openModalBtn" type="button" aria-haspopup="dialog" onClick={open}>
        {ctaText}
      </button>

      <dialog
        ref={dialogRef}
        id="joinDialog"
        aria-labelledby="joinDialogTitle"
        aria-describedby="joinDialogDescription"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="modal-content">
          <button className="modal-close" id="closeModalBtn" type="button" aria-label="Close" onClick={close}>
            <Icon name="modalClose" />
          </button>
          <h2 id="joinDialogTitle">{content.modalTitle}</h2>
          <p id="joinDialogDescription">{content.modalDescription}</p>

          <div className="options-grid">
            {content.options.map((option) => (
              <a
                key={option.id}
                href={option.optionLink}
                className="option-btn"
                onClick={(event) => {
                  if (option.optionLink === "#") event.preventDefault();
                }}
              >
                <div className="option-icon">
                  <Icon name={option.audienceKey === "current" ? "optionCurrent" : "optionAspiring"} />
                </div>
                <span className="option-title">{option.optionTitle}</span>
                <span className="option-desc">{option.optionDescription}</span>
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
