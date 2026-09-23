import Link from "next/link";
import { ArrowRight, Check, CircleAlert, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/services/service-grid";
import { serviceIcons } from "@/components/services/service-icons";
import { allServices, problems } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Software, SaaS, AI Automation, Managed IT & Technical Project Services",
  "PK-TANK services: custom business software, SaaS application development, AI & workflow automation, managed IT support and technical project support.",
  "/services",
);

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Services"
        title="Five core services across build, support and delivery."
        description="Software, SaaS platforms and automation to build with. Managed IT and technical project support to run and deliver. One partner with a clear line of responsibility."
        cta
      />

      {/* Keeps the former "Digital Business Systems" anchor working for existing links. */}
      <section className="home-section" id="digital-business-systems">
        <div className="shell">
          <SectionHeading
            variant="compact"
            kicker="Service overview"
            title="Find the right service at a glance."
            description="Each card jumps to its details: what’s included, why it matters and when it is a good fit."
          />
          <ServiceGrid linkMode="anchor" />
        </div>
      </section>

      <section className="service-details" aria-label="Service details">
        {allServices.map((service) => {
          const Icon = serviceIcons[service.id];
          const fits = problems.filter((problem) => problem.serviceId === service.id);
          return (
            <article className="service-detail" id={service.id} key={service.id}>
              <div className="shell service-detail-grid">
                <div className="service-detail-intro">
                  <div className="service-detail-meta">
                    <span className="icon-tile"><Icon aria-hidden="true" size={20} /></span>
                    <span>{service.number === "+" ? "Also available" : `Service ${service.number}`}</span>
                  </div>
                  <h2>{service.title}</h2>
                  <p className="service-lead">{service.summary}</p>
                  <div className="service-outcome">
                    <span>Why it matters</span>
                    <p>{service.outcome}</p>
                  </div>
                  <Link className="button button-small" href={`/contact?service=${encodeURIComponent(service.contactService)}`}>
                    Discuss this service <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
                <div className="service-detail-body">
                  <p className="service-detail-label">What’s included</p>
                  <ul className="service-items">
                    {service.items.map((item) => <li key={item}><Check aria-hidden="true" size={16} />{item}</li>)}
                  </ul>
                  {fits.length ? (
                    <>
                      <p className="service-detail-label">A good fit when</p>
                      <ul className="service-fit">
                        {fits.map((problem) => (
                          <li key={problem.title}>
                            <CircleAlert aria-hidden="true" size={16} />
                            <p><strong>{problem.title}.</strong> {problem.symptom}</p>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                  {service.id === "technical-project-support" ? (
                    <div className="notice-card">
                      <ShieldCheck aria-hidden="true" />
                      <p><strong>Scope notice</strong> Regulated or safety-critical final design and sign-off must be performed by appropriately qualified or licensed professionals where required.</p>
                    </div>
                  ) : null}
                  {service.id === "business-enablement" ? (
                    <p className="scope-note">Proposal and tender-document support is organizational and commercial assistance. It is not legal advice and does not guarantee tender or sales success.</p>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <CtaBand />
    </main>
  );
}
