import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <p className="brand-name">PK-TANK</p>
          <p className="footer-tagline">Business Technology &amp; SaaS Solutions</p>
          <p>Practical technology for connected business operations.</p>
        </div>
        <div className="footer-column">
          <p>Company</p>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className="footer-column">
          <p>Capabilities</p>
          <Link href="/solutions">Solutions</Link>
          <Link href="/services">Services</Link>
          <Link href="/services#managed-it">Managed IT</Link>
          <Link href="/services#technical-project-support">Project Support</Link>
        </div>
        <div className="footer-column">
          <p>Start a conversation</p>
          <Link href="/contact">Discuss Your Project</Link>
          <span>Bangladesh • Remote Worldwide</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} PK-TANK. All rights reserved.</p>
        <p>Build Smarter. Work Better.</p>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
