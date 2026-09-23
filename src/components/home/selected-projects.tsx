import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { workItems } from "@/data/site-content";
import { workScreenshots } from "@/data/work-screenshots";

const projectOrder = [
  "tailoring-business-management-system",
  "hr-management-platform",
  "csp-requisition-stock-workflow",
  "ai-technical-support-platform",
] as const;

export function SelectedProjects() {
  const projects = projectOrder.flatMap((slug) => {
    const item = workItems.find((entry) => entry.slug === slug);
    const shot = workScreenshots[slug]?.find((entry) => entry.featured) ?? workScreenshots[slug]?.[0];
    return item && shot ? [{ item, shot }] : [];
  });

  return (
    <section className="home-section" aria-labelledby="projects-heading">
      <div className="shell">
        <SectionHeader
          id="projects-heading"
          eyebrow="Selected work"
          title="Software systems shaped around real operational problems"
          lead="Each project is labelled with its current status, such as demonstration or prototype, so the context stays accurate."
          action={{ label: "View all work", href: "/work" }}
        />
        <ul className="project-grid">
          {projects.map(({ item, shot }, index) => (
            <li className={index === 0 ? "project-card project-card-featured" : "project-card"} key={item.slug}>
              <Link href={`/work/${item.slug}`} className="project-card-link">
                <span className="project-thumb">
                  <Image
                    src={shot.src}
                    width={1672}
                    height={941}
                    sizes={index === 0 ? "(min-width: 1024px) 620px, (min-width: 640px) 90vw, 100vw" : "(min-width: 1024px) 220px, (min-width: 640px) 45vw, 100vw"}
                    alt={shot.alt}
                  />
                </span>
                <div className="project-body">
                  <span className="project-tags"><span>{item.category}</span><span>{item.status}</span></span>
                  <h3 className="project-title">{item.title}</h3>
                  <span className="project-summary">{item.summary}</span>
                  <span className="project-more">View case study <ArrowUpRight aria-hidden="true" size={15} /></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="project-footnote">
          Looking for earlier technical and business experience? <Link href="/work#experience">See the founder’s past experience</Link>.
        </p>
      </div>
    </section>
  );
}
