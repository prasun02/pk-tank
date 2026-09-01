import Link from "next/link";
import { ArrowRight, Bot, Boxes, ChartNoAxesCombined, CircleUserRound, ClipboardCheck, Headphones, Package, Settings2, Sparkles, Wrench } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { problems, solutions } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Business Software, AI & Managed Technology Solutions",
  "Explore practical PK-TANK solutions for orders, stock, HR, service, approvals, AI support, dashboards and technical operations.",
  "/solutions",
);

const icons = [CircleUserRound, Package, Boxes, Wrench, ClipboardCheck, Bot, ChartNoAxesCombined, Headphones, Settings2, Sparkles];

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Solutions"
        title="Systems and support shaped around operational problems."
        description="Start with the bottleneck: scattered information, slow approvals, repeated support or unclear project work. We shape the technology around that problem."
        index="01"
        cta
      />

      <section className="section shell">
        <SectionHeading
          index="01"
          kicker="Digital operations"
          title="A practical solution set for customer, people, stock, service and support workflows."
        />
        <div className="solution-detail-grid">
          {solutions.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <article key={title}>
                <div className="card-icon"><Icon aria-hidden="true" size={23} /></div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <Link className="text-link" href={`/contact?service=${encodeURIComponent(title)}`}>
                  Discuss this need <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <SectionHeading
            index="02"
            kicker="Problem-led scoping"
            title="The right first version solves a clear operational problem without unnecessary complexity."
          />
          <div className="problem-list-compact">
            {problems.map((problem, index) => (
              <article key={problem.title}>
                <span>0{index + 1}</span><div><h3>{problem.title}</h3><p>{problem.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="split-callout">
          <div>
            <p className="kicker">Build or improve</p>
            <h2>New system, existing workflow or SaaS platform?</h2>
          </div>
          <div>
            <p>PK-TANK can help scope a focused build, configure an existing SaaS product, connect a repeatable process or improve an operational system already in use.</p>
            <p className="scope-note">Recommendations depend on workflow, data, integration, responsibility and support requirements.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
