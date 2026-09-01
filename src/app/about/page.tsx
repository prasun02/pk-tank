import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About PK-TANK",
  "PK-TANK is a remote-first business technology company combining software, automation, managed support and technical project services.",
  "/about",
);

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About PK-TANK"
        title="Built From Cross-Functional Technology Experience"
        description="PK-TANK combines software thinking, technical support, business operations and project experience to solve connected business problems."
        index="05"
        cta
      />
      <section className="section shell">
        <div className="about-intro">
          <div><p className="kicker">Company first</p><h2>A practical technology company for work that crosses software and operations.</h2></div>
          <div>
            <p>Businesses rarely experience technology as separate categories. A software problem may also be a workflow problem. A support issue may expose weak documentation. A technical project may need better research, reporting or coordination.</p>
            <p>PK-TANK is structured around that reality: lead with software, SaaS and automation, then connect the technical support and project capacity needed to make the solution useful.</p>
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell mission-grid">
          <article><span>01</span><p className="kicker">Mission</p><h2>Reduce friction through practical technology.</h2><p>To help businesses reduce manual work, improve visibility, solve technology problems and execute projects more efficiently through practical and affordable technology.</p></article>
          <article><span>02</span><p className="kicker">Vision</p><h2>Become a trusted remote-first technology partner.</h2><p>To become a trusted remote-first technology solutions company serving local and international clients through software, SaaS, automation, managed support, technical project services and proprietary digital products.</p></article>
        </div>
      </section>
      <section className="section shell">
        <SectionHeading index="03" kicker="How PK-TANK works" title="Clear scope, honest status and responsibility matched to capability." />
        <div className="values-grid">
          {[
            ["Practical over impressive", "The useful workflow matters more than unnecessary technical complexity."],
            ["Evidence over claims", "Projects, experience and results are described with accurate status and without invented metrics."],
            ["Clarity over ambiguity", "Scope, exclusions, assumptions and responsibilities should be understood before delivery begins."],
            ["Support beyond launch", "Technology becomes valuable through adoption, documentation, troubleshooting and improvement."],
          ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="section founder-section">
        <div className="shell founder-grid">
          <div><p className="kicker">Founder context</p><h2>Experience informs the company. It does not replace the company.</h2></div>
          <div><p>PK-TANK’s direction is informed by cross-functional experience across web systems, technical troubleshooting, project documentation, business research and product/project coordination.</p><p>This site intentionally does not invent personal biography, credentials, client claims or licensed authority. Historical work is clearly labeled as “Founder’s Past Experience” where relevant.</p></div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
