import Link from "next/link";
import { ArrowRight, Check, CloudCog } from "lucide-react";
import { ChallengeTable } from "@/components/challenge-table";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { HomeHero } from "@/components/home/home-hero";
import { industryIcons } from "@/components/industry-icons";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/services/service-grid";
import { WorkCard } from "@/components/work-card";
import { industries, pastExperience, solutionGroups, workItems } from "@/data/site-content";

const managedIncludes = [
  "Website and software care",
  "SaaS and user support",
  "Basic network troubleshooting",
  "Reports and small improvements",
];

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />

      <section className="home-section" id="services">
        <div className="shell">
          <SectionHeading
            variant="compact"
            kicker="What we do"
            title="Five core services. One accountable technology partner."
            description="We build the systems your business runs on, then help keep them, and your wider technology, running smoothly."
            action={
              <Link className="button button-secondary button-small" href="/services">
                All service details <ArrowRight aria-hidden="true" size={16} />
              </Link>
            }
          />
          <ServiceGrid />
        </div>
      </section>

      <section className="home-section section-muted" id="how-we-help">
        <div className="shell">
          <SectionHeading
            variant="compact"
            kicker="Challenge → Solution"
            title="Recognize the problem. See how it gets solved."
            description="Start with what is slowing the business down. Each common challenge maps to a practical answer and the service that delivers it."
          />
          <ChallengeTable />
        </div>
      </section>

      <section className="home-section section-navy">
        <div className="shell">
          <SectionHeading
            variant="compact"
            kicker="Solutions we build"
            title="Focused systems for the workflows growing businesses depend on."
            action={
              <Link className="button button-light button-small" href="/solutions">
                Explore all solutions <ArrowRight aria-hidden="true" size={16} />
              </Link>
            }
          />
          <div className="solution-groups">
            {solutionGroups.map((group) => (
              <div className="solution-group" data-wide={group.items.length > 2 ? "" : undefined} key={group.id}>
                <p className="solution-group-title">{group.title}</p>
                <p className="solution-group-text">{group.text}</p>
                <ul>
                  {group.items.map(([title, text]) => (
                    <li key={title}>
                      <Link href={`/solutions#${group.id}`}>
                        <strong>{title}</strong>
                        <span>{text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="shell">
          <SectionHeading
            variant="compact"
            kicker="Featured work"
            title="Real interfaces from our projects and prototypes."
            description="Status labels separate demonstrations and prototypes from delivered client work. No outcomes are invented."
            action={
              <Link className="button button-secondary button-small" href="/work">
                View all work <ArrowRight aria-hidden="true" size={16} />
              </Link>
            }
          />
          <div className="work-grid work-grid-compact">
            {workItems.map((item) => (
              <WorkCard item={item} key={item.slug} sizes="(min-width: 1100px) 290px, (min-width: 700px) 50vw, 100vw" />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section section-muted" id="process">
        <div className="shell">
          <SectionHeading
            variant="compact"
            kicker="How we work"
            title="Understand first. Build what matters. Support what follows."
          />
          <ProcessSteps />
          <div className="managed-strip card">
            <div className="managed-strip-intro">
              <span className="icon-tile"><CloudCog aria-hidden="true" size={20} /></span>
              <div>
                <p className="managed-strip-kicker">After launch</p>
                <h3>Managed monthly support from one technology partner</h3>
              </div>
            </div>
            <ul>
              {managedIncludes.map((item) => (
                <li key={item}><Check aria-hidden="true" size={14} strokeWidth={2.5} />{item}</li>
              ))}
            </ul>
            <Link className="button button-small" href="/pricing">
              Explore managed support <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="shell">
          <div className="fit-grid">
            <div>
              <p className="kicker">Where we fit</p>
              <h2>Built for teams where operations, service and technical work overlap.</h2>
              <p className="fit-intro">Industry context shapes every system: the users, records, decisions and support expectations behind each workflow.</p>
              <p className="fit-label">Industries we support</p>
              <ul className="industry-chips">
                {industries.map(([name], index) => {
                  const Icon = industryIcons[index];
                  return (
                    <li key={name}>
                      <Link href="/industries"><Icon aria-hidden="true" size={16} />{name}</Link>
                    </li>
                  );
                })}
              </ul>
              <Link className="text-link fit-link" href="/industries">
                How we adapt to each industry <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <div className="experience-panel">
              <p className="fit-label">Selected past technical &amp; business experience</p>
              <ul className="experience-list">
                {pastExperience.map(([title, status, text]) => (
                  <li key={title}>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                    <span>{status}</span>
                  </li>
                ))}
              </ul>
              <p className="experience-note">Historical work is presented as the founder’s experience and is not implied to have been delivered under the current PK-TANK structure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section section-muted" id="faq">
        <div className="shell faq-layout">
          <div>
            <p className="kicker">Common questions</p>
            <h2>Quick answers before you get in touch.</h2>
            <p>Still unsure? Describe the situation in plain language and we’ll help clarify the next step.</p>
            <Link className="text-link" href="/contact">
              Ask a question <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <FaqList />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
