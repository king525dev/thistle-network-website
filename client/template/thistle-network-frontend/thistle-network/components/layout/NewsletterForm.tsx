"use client";

import { useState, type FormEvent } from "react";

/**
 * Newsletter signup UI only - there is no subscription backend yet.
 * Submitting shows a local confirmation state; nothing is persisted or
 * sent anywhere. Swap the `handleSubmit` body for a real API call once
 * a newsletter provider is chosen.
 */
export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "subscribed">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("subscribed");
    event.currentTarget.reset();
  }

  return (
    <form className="nl-form" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input id="newsletter-email" type="email" placeholder="your@email.com" required />
      <button type="submit" className="btn btn-primary">
        {status === "subscribed" ? "Subscribed ✓" : "Subscribe"}
      </button>
    </form>
  );
}
