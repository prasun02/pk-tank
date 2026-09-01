import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Software, Managed IT & Technical Project Services",
  "PK-TANK services span digital business systems, managed IT, technical project support and B2B technology enablement.",
  "/services",
);

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Services"
        title="Technology capability that spans build, support and execution."
        description="Four connected service pillars let a growing business solve software, operations, technical support and project challenges with a clearer line of responsibility."
        index="02"
        cta
      />
      <section className="service-sections">
        {services.map((service, serviceIndex) => (
          <article className="service-section" id={service.id} key={service.id}>
            <div className="shell service-section-grid">
              <div className="service-side">
                <span>{service.number}</span>
                <p>{service.shortTitle}</p>
              </div>
              <div className="service-content">
                <h2>{service.title}</h2>
                <p className="service-lead">{service.description}</p>
                <div className="service-items">
                  {service.items.map((item) => <div key={item}><Check aria-hidden="true" size={17} />{item}</div>)}
                </div>
                {serviceIndex === 2 ? (
                  <div className="notice-card">
                    <ShieldCheck aria-hidden="true" />
                    <p><strong>Scope notice</strong> Regulated or safety-critical final design and sign-off must be performed by appropriately qualified or licensed professionals where required.</p>
                  </div>
                ) : null}
                {serviceIndex === 3 ? (
                  <p className="scope-note">Proposal and tender-document support is organizational and commercial assistance. It is not legal advice and does not guarantee tender or sales success.</p>
                ) : null}
                <Link className="text-link" href={`/contact?service=${encodeURIComponent(service.shortTitle)}`}>
                  Discuss this service <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </main>
  );
}
