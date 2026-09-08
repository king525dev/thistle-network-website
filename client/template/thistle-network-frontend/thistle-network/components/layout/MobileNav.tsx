"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavLink } from "@/types/site";

type MobileNavProps = {
  navLinks: NavLink[];
  registrationHref: string;
};

/**
 * Accessible hamburger menu for small screens. This is the only part of
 * the header that needs client-side state - everything else in NavBar
 * renders on the server.
 */
export default function MobileNav({ navLinks, registrationHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div id="mobile-nav-panel" className="mobile-nav-panel">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={registrationHref} className="btn btn-primary" onClick={() => setOpen(false)}>
            Register to join
          </Link>
        </div>
      )}
    </div>
  );
}
