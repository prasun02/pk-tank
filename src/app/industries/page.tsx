import { CtaBand } from "@/components/cta-band";
import { industryIcons } from "@/components/industry-icons";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Industries",
  "PK-TANK supports retail, tailoring, technology, healthcare SMEs, education, distribution, project businesses and remote SaaS companies.",
  "/industries",
);

export default function IndustriesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Industries"
        title="Technology shaped for businesses where work must keep moving."
        description="Industry context matters. PK-TANK starts with the actual users, records, decisions, equipment and support expectations behind each workflow."
        index="03"
        cta
      />
      <section className="section shell">
        <SectionHeading
          index="01"
          kicker="Where we can help"
          title="Focused systems and technical capacity for growing operational teams."
        />
        <div className="industry-grid">
          {industries.map(([name, text], index) => {
            const Icon = industryIcons[index];
            return (
              <article key={name}>
                <div><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
                <h2>{name}</h2>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell split-callout">
          <div><p className="kicker">Scope with context</p><h2>Your industry is not a template.</h2></div>
          <div><p>Similar tools can support different businesses, but the workflow, terminology, responsibility and risk are rarely identical. Discovery identifies what must be standard, what should remain flexible and where specialist oversight is required.</p></div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
