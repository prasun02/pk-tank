"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Headings, text blocks and cards that fade up as they enter the viewport.
const TARGETS = [
  ".section-heading",
  ".section-heading-compact",
  ".faq-layout > div:first-child",
  ".fit-grid > div",
  ".split-callout > div",
  ".about-intro > div",
  ".pricing-note",
  ".compact-heading",
  ".cta-band > div",
  ".contact-layout > *",
  ".founder-section > .shell > .kicker",
  ".founder-profile",
  ".founder-details",
  ".service-detail-intro",
  ".service-detail-body",
  ".solution-library-head",
  ".service-group-label",
  ".card",
  ".work-card",
  ".challenge-table",
  ".solution-group",
  ".process-steps > li",
  ".industry-grid > article",
  ".pricing-card",
  ".quote-grid > article",
  ".mission-grid > article",
  ".values-grid > article",
  ".experience-grid > article",
  ".faq-list",
  ".case-content > section",
  ".legal-content",
].join(",");

const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 4;

/**
 * Progressive enhancement: content is fully visible without JS. On mount, anything
 * already on screen is left alone; only elements below the fold are hidden and
 * revealed when scrolled into view. Skipped entirely for reduced-motion users.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.dataset.reveal = "shown";
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const viewportBottom = window.innerHeight;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter((el) => !el.dataset.reveal);

    for (const el of elements) {
      // Skip anything already on screen, and anything inside a block that reveals as a whole.
      if (el.getBoundingClientRect().top < viewportBottom) continue;
      if (el.parentElement?.closest("[data-reveal]")) continue;
      // Stagger siblings that share a grid/list parent.
      const siblings = el.parentElement ? elements.filter((other) => other.parentElement === el.parentElement) : [el];
      const step = Math.min(siblings.indexOf(el), MAX_STAGGER_STEPS);
      if (step > 0) el.style.setProperty("--reveal-delay", `${step * STAGGER_MS}ms`);
      el.dataset.reveal = "pending";
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
