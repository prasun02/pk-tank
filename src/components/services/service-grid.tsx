import Link from "next/link";
import { ArrowRight, Check, MessageSquareText } from "lucide-react";
import { coreServices, serviceGroups } from "@/data/site-content";
import { serviceIcons } from "./service-icons";

type ServiceGridProps = {
  /** "page" links each card to its detail block on /services; "anchor" links within the current page. */
  linkMode?: "page" | "anchor";
  /** Number of deliverables shown per card. */
  itemCount?: number;
};

export function ServiceGrid({ linkMode = "page", itemCount = 3 }: ServiceGridProps) {
  return (
    <div className="service-grid">
      {serviceGroups.map((group) => (
        <div className="service-group" key={group.id}>
          <div className="service-group-label">
            <p>{group.label}</p>
            <span>{group.text}</span>
          </div>
          <div className="service-group-cards" data-group={group.id}>
            {coreServices.filter((service) => service.group === group.id).map((service) => {
              const Icon = serviceIcons[service.id];
              const href = linkMode === "page" ? `/services#${service.id}` : `#${service.id}`;
              return (
                <article className="service-card card card-interactive" key={service.id}>
                  <div className="service-card-top">
                    <span className="icon-tile"><Icon aria-hidden="true" size={20} /></span>
                    <span className="service-card-number">{service.number}</span>
                  </div>
                  <h3>
                    <Link href={href}>{service.title}</Link>
                  </h3>
                  <p>{service.summary}</p>
                  <ul>
                    {service.items.slice(0, itemCount).map((item) => (
                      <li key={item}><Check aria-hidden="true" size={14} strokeWidth={2.5} />{item}</li>
                    ))}
                  </ul>
                  <span className="service-card-more" aria-hidden="true">
                    {linkMode === "page" ? "Learn more" : "See details"} <ArrowRight size={15} />
                  </span>
                </article>
              );
            })}
            {group.id === "run" ? (
              <article className="service-card service-card-help card card-dark">
                <span className="icon-tile icon-tile-dark"><MessageSquareText aria-hidden="true" size={20} /></span>
                <h3>Not sure which service fits?</h3>
                <p>Describe the problem in plain language. We’ll map it to the right mix of software, support or project work, including B2B product and launch enablement.</p>
                <Link className="button button-small" href="/contact">
                  Discuss your project <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
