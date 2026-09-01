import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="shell not-found-grid">
        <div className="not-found-number" aria-hidden="true">404</div>
        <div>
          <p className="eyebrow"><span />Route not found</p>
          <h1>This page is outside the system.</h1>
          <p>The address may be outdated, incomplete or no longer available. Use the links below to return to a working route.</p>
          <div className="hero-actions">
            <Link className="button" href="/"><ArrowLeft aria-hidden="true" size={17} /> Back to home</Link>
            <Link className="button button-secondary" href="/contact">Contact PK-TANK <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
