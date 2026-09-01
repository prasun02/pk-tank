import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";

const navigation = [
  ["Home", "/"],
  ["Solutions", "/solutions"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["Industries", "/industries"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="PK-TANK home">
          <span className="brand-name">PK-TANK</span>
          <span className="brand-descriptor">Business Technology &amp; SaaS Solutions</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small header-cta" href="/contact">
          Discuss Your Project <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
