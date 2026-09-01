"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Solutions", "/solutions"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["Industries", "/industries"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open ? (
        <div className="mobile-menu" id="mobile-navigation">
          <nav className="shell" aria-label="Mobile navigation">
            {links.map(([label, href], index) => (
              <Link href={href} key={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{label}
              </Link>
            ))}
            <Link className="button" href="/contact" onClick={() => setOpen(false)}>
              Discuss Your Project
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
