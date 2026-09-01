import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="cta-section">
      <div className="shell cta-band">
        <div>
          <p className="eyebrow eyebrow-light"><span />Start with the business problem</p>
          <h2>Tell Us the Problem — Not the Technology</h2>
        </div>
        <div>
          <p>We’ll help clarify the workflow, support need or project challenge before recommending a practical way forward.</p>
          <Link className="button button-light" href="/contact">
            Discuss Your Project <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
