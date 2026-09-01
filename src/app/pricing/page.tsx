import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { pricingPlans } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Pricing",
  "Starting prices for PK-TANK digital launch, business systems and managed technology support, plus quote-based technical services.",
  "/pricing",
);

const quoteServices = ["AI / SaaS Implementation", "Remote Technical Operations", "Technical Project Desk", "Product Launch / Business Enablement"];

export default function PricingPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Pricing"
        title="Clear starting points. Scope-aware proposals."
        description="Use these packages as planning ranges. Final pricing depends on workflow, risk, integrations, data, service level and responsibility."
        index="04"
        cta
      />
      <section className="section shell">
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article className={plan.featured ? "pricing-card pricing-featured" : "pricing-card"} key={plan.name}>
              {plan.featured ? <span className="popular-label">Most common system start</span> : null}
              <p className="plan-name">{plan.name}</p>
              <h2>{plan.label}</h2>
              <p className="price-prefix">{plan.suffix}</p>
              <p className="price">{plan.price}</p>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-features">
                {plan.features.map((feature) => <div key={feature}><Check aria-hidden="true" size={17} />{feature}</div>)}
              </div>
              <Link className={plan.featured ? "button" : "button button-secondary"} href={`/contact?budget=${encodeURIComponent(plan.label)}`}>
                Discuss this package <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-navy">
        <div className="shell">
          <SectionHeading index="02" kicker="Quote-based services" title="Complex work needs a scope before it needs a price." />
          <div className="quote-grid">
            {quoteServices.map((service, index) => (
              <article key={service}><span>0{index + 1}</span><h3>{service}</h3><p>Quoted after a focused discussion of needs, inputs, dependencies and responsibility.</p></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="pricing-note">
          <div><p className="kicker">Important</p><h2>Starting price is not a fixed quote.</h2></div>
          <p>Every engagement receives an agreed scope. Integrations, migrations, data preparation, travel, third-party subscriptions, specialized compliance and extended support may be quoted separately where relevant.</p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
