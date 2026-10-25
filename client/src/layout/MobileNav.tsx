"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThistleLogo from "@/components/brand/ThistleLogo";
import type { Cta } from "@/types/common";
import type { Media } from "@/types/media";
import type { NavLink } from "@/types/site";

type MobileNavProps = {
  logo?: Media;
  links: NavLink[];
  cta: Cta;
};

/**
 * The whole site header, as a client component, because it owns two pieces
 * of state: the mobile menu, and whether the nav is visible.
 *
 * Visibility follows the uploaded design: the nav is hidden while the hero is
 * on screen and fades in once the hero has fully left. An IntersectionObserver
 * does this, instead of a scroll listener, so it costs nothing per frame.
 */
export default function MobileNav({ logo, links, cta }: MobileNavProps) {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const hero = document.getElementById("hero");
    if (!nav || !hero) return;

    const setVisible = (visible: boolean) => {
      nav.classList.toggle("is-visible", visible);
      nav.setAttribute("aria-hidden", String(!visible));
      if (visible) nav.removeAttribute("inert");
      else {
        nav.setAttribute("inert", "");
        setOpen(false);
      }
    };

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 });
    observer.observe(hero);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      ref={navRef}
      className="site-nav"
      id="siteNav"
      aria-label="Main navigation"
      aria-hidden="true"
      inert
    >
      <div className="site-nav-inner">
        <Link className="nav-brand" href="/#hero" aria-label="Thistle Network home">
          <ThistleLogo image={logo} variant="nav" priority />
        </Link>

        <button
          className="nav-menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="siteNavLinks"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`site-nav-links${open ? " is-open" : ""}`} id="siteNavLinks">
          {links.map((link) => (
            <Link key={link.id} href={link.link} onClick={close}>
              {link.text}
            </Link>
          ))}
          <Link className="nav-register" href={cta.link} onClick={close}>
            {cta.text} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
