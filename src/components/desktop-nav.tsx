"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, primaryNavigation } from "@/config/navigation";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="desktop-nav" aria-label="Main navigation">
      {primaryNavigation.map(({ label, href }) => (
        <Link href={href} key={href} aria-current={isActivePath(pathname, href) ? "page" : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
