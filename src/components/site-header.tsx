import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="PK-TANK home">
          <span className="brand-mark" aria-hidden="true">PK</span>
          <span className="brand-text">
            <span className="brand-name">PK-TANK</span>
            <span className="brand-descriptor">Business Technology &amp; SaaS Solutions</span>
          </span>
        </Link>
        <DesktopNav />
        <div className="header-actions">
          <Link className="button button-small header-cta" href="/contact">
            Discuss Your Project <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
