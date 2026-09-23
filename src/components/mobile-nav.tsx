"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { isActivePath, primaryNavigation } from "@/config/navigation";

export function MobileNav() {
  const pathname = usePathname();
  // The menu belongs to the route it was opened on, so navigating closes it without an effect.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const button = buttonRef.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const close = () => setOpenedOn(null);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        button?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current || !button) return;
      const focusable = [button, ...panelRef.current.querySelectorAll<HTMLElement>("a[href], button")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onViewportChange = (event: MediaQueryListEvent) => { if (event.matches) close(); };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onViewportChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onViewportChange);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const close = () => setOpenedOn(null);

  return (
    <div className="mobile-nav">
      <button
        ref={buttonRef}
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpenedOn(open ? null : pathname)}
      >
        {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>
      {open ? (
        <div className="mobile-menu" id="mobile-navigation" ref={panelRef}>
          <div className="shell mobile-menu-inner">
            <nav aria-label="Mobile navigation">
              <ul className="mobile-menu-links">
                {primaryNavigation.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} onClick={close} aria-current={isActivePath(pathname, href) ? "page" : undefined}>
                      {label}
                      <ArrowRight aria-hidden="true" size={18} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu-footer">
              <Link className="button button-large" href="/contact" onClick={close}>
                Discuss Your Project <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <p>Business Technology &amp; SaaS Solutions · Bangladesh · Remote worldwide</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
