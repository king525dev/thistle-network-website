"use client";

import { useEffect } from "react";

/**
 * JavaScript fallback for the hero parallax. Browsers that support CSS
 * scroll-driven animations never run this (the CSS does the work). Other
 * browsers get the uploaded behaviour: the hero's layers are moved by the
 * scroll offset through the --hero-parallax-offset variable.
 */
export default function HeroParallaxFallback() {
  useEffect(() => {
    if (CSS.supports("animation-timeline", "scroll()")) return;
    const hero = document.getElementById("hero");
    if (!hero) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let framePending = false;

    const update = () => {
      framePending = false;
      if (reduceMotion.matches) {
        hero.style.removeProperty("--hero-parallax-offset");
        return;
      }
      const bounds = hero.getBoundingClientRect();
      if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
        hero.style.setProperty("--hero-parallax-offset", `${window.scrollY}px`);
      } else {
        hero.style.removeProperty("--hero-parallax-offset");
      }
    };

    const schedule = () => {
      if (framePending) return;
      framePending = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    reduceMotion.addEventListener("change", schedule);
    update();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduceMotion.removeEventListener("change", schedule);
    };
  }, []);

  return null;
}
