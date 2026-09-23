import Link from "next/link";
import { ArrowRight, Check, ClipboardList, Cloud, Headset, LayoutDashboard, MessageSquareText, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { coreServices, type CoreServiceId } from "@/data/home-content";

const serviceIcons: Record<CoreServiceId, typeof LayoutDashboard> = {
  "custom-business-software": LayoutDashboard,
  "saas-application-development": Cloud,
  "ai-workflow-automation": Workflow,
  "managed-it-support": Headset,
  "technical-project-support": ClipboardList,
};

export function ServicesOverview() {
  return (
    <section className="home-section" id="services" aria-labelledby="services-heading">
      <div className="shell">
        <SectionHeader
          id="services-heading"
          eyebrow="What we do"
          title="Five core services, one accountable technology partner"
          lead="Build the system, automate the repeatable work, and keep the technology behind it supported."
          action={{ label: "All services", href: "/services" }}
        />
        <ul className="service-grid">
          {coreServices.map(({ id, title, summary, points, href }) => {
            const Icon = serviceIcons[id];
            return (
              <li className="service-card card card-interactive" id={`service-${id}`} key={id}>
                <span className="icon-tile"><Icon aria-hidden="true" size={20} /></span>
                <h3>{title}</h3>
                <p>{summary}</p>
                <ul className="service-points">
                  {points.map((point) => <li key={point}><Check aria-hidden="true" size={15} strokeWidth={2.5} />{point}</li>)}
                </ul>
                <Link className="service-card-link" href={href}>
                  Learn more<span className="sr-only"> about {title}</span> <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </li>
            );
          })}
          <li className="service-card service-card-cta card card-dark">
            <span className="icon-tile icon-tile-dark"><MessageSquareText aria-hidden="true" size={20} /></span>
            <h3>Not sure which service fits?</h3>
            <p>Describe the problem in plain language. We’ll recommend the right mix of software, automation and support.</p>
            <Link className="button button-small" href="/contact">
              Discuss Your Project <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </li>
        </ul>
        <p className="service-footnote">
          Also available: <Link href="/services#business-enablement">B2B technology &amp; project enablement</Link> for product
          launches, proposals and project coordination.
        </p>
      </div>
    </section>
  );
}
