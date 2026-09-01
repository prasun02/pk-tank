import { PageHero } from "@/components/page-hero";
import { WorkFilter } from "@/components/work-filter";
import { pastExperience, workItems } from "@/data/site-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Work & Project Demonstrations",
  "Explore PK-TANK prototypes, demonstrations and accurately labeled founder experience across digital systems and technical work.",
  "/work",
);

export default function WorkPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Work"
        title="Clear project stories. Honest status. No invented outcomes."
        description="This collection separates PK-TANK projects, prototypes, demonstrations, internal products and the founder’s earlier experience so the context remains accurate."
        index="07"
        cta
      />
      <section className="section shell">
        <WorkFilter items={workItems} />
      </section>
      <section className="section experience-section">
        <div className="shell">
          <div className="compact-heading">
            <p className="kicker">Selected Past Technical &amp; Business Experience</p>
            <p>Historical experience is included for context and is not represented as work delivered under the current PK-TANK company structure.</p>
          </div>
          <div className="experience-grid">
            {pastExperience.map(([title, status, text]) => (
              <article key={title}><span>{status}</span><h2>{title}</h2><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
