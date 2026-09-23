import Link from "next/link";
import { ArrowRight, Bot, Boxes, ChartNoAxesCombined, CircleUserRound, ClipboardCheck, Headphones, Package, Settings2, Sparkles, Wrench, type LucideIcon } from "lucide-react";
import { ChallengeTable } from "@/components/challenge-table";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { solutionGroups } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Business Software, AI & Managed Technology Solutions",
  "Explore practical PK-TANK solutions for orders, stock, HR, service, approvals, AI support, dashboards and technical operations.",
  "/solutions",
);

const icons: Record<string, LucideIcon> = {
  "Customer & Order": CircleUserRound,
  "Inventory & Stock": Package,
  "HR & Employee": Boxes,
  "Service / RMA": Wrench,
  "Requisition & Approval": ClipboardCheck,
  "Reporting Dashboards": ChartNoAxesCombined,
  "AI Support": Bot,
  "Managed IT": Headphones,
  "Technical Project Desk": Settings2,
  "Product Launch Support": Sparkles,
};

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

      <section className="home-section">
        <div className="shell">
          <SectionHeading
            variant="compact"
            index="01"
            kicker="Solution library"
            title="Ten focused solutions, grouped by what they help you run."
          />
          <div className="solution-library">
            {solutionGroups.map((group) => (
              <div className="solution-library-group" id={group.id} key={group.id}>
                <div className="solution-library-head">
                  <h2>{group.title}</h2>
                  <p>{group.text}</p>
                </div>
                <div className="solution-cards">
                  {group.items.map(([title, text]) => {
                    const Icon = icons[title];
                    return (
                      <article className="solution-card card" key={title}>
                        <span className="icon-tile"><Icon aria-hidden="true" size={19} /></span>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <Link className="text-link" href={`/contact?service=${encodeURIComponent(title)}`}>
                          Discuss this need <ArrowRight aria-hidden="true" size={15} />
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section section-muted">
        <div className="shell">
          <SectionHeading
            variant="compact"
            index="02"
            kicker="Problem-led scoping"
            title="Start from the problem. We map it to the right answer."
            description="The right first version solves a clear operational problem without unnecessary complexity."
          />
          <ChallengeTable />
        </div>
      </section>

      <section className="home-section">
        <div className="shell faq-layout">
          <div>
            <p className="kicker"><span className="section-number">03</span>Build or improve</p>
            <h2>New system, existing workflow or SaaS platform?</h2>
            <p>Recommendations depend on workflow, data, integration, responsibility and support requirements.</p>
            <Link className="text-link" href="/contact">
              Discuss your situation <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <FaqList />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
