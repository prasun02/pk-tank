import { ArrowRight, Check, MapPin } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About PK-TANK",
  "PK-TANK is a remote-first business technology company combining software, automation, managed support and technical project services.",
  "/about",
);

const founderFocusAreas = [
  "Business software and workflow systems",
  "SaaS implementation and support",
  "AI-assisted business automation",
  "Next.js, React and TypeScript applications",
  "Supabase and PostgreSQL solutions",
  "IT and network troubleshooting",
  "Technical support and service operations",
  "Business process analysis",
  "Technical project coordination",
  "Product and B2B technology support",
  "Documentation, reporting and implementation support",
] as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="About PK-TANK" title="Built From Cross-Functional Technology Experience" description="PK-TANK combines software thinking, technical support, business operations and project experience to solve connected business problems." cta />
      <section className="section shell">
        <div className="about-intro">
          <div><p className="kicker">Company first</p><h2>A practical technology company for work that crosses software and operations.</h2></div>
          <div><p>Businesses rarely experience technology as separate categories. A software problem may also be a workflow problem. A support issue may expose weak documentation. A technical project may need better research, reporting or coordination.</p><p>PK-TANK is structured around that reality: lead with software, SaaS and automation, then connect the technical support and project capacity needed to make the solution useful.</p></div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell mission-grid">
          <article><p className="kicker">Mission</p><h2>Reduce friction through practical technology.</h2><p>To help businesses reduce manual work, improve visibility, solve technology problems and execute projects more efficiently through practical and affordable technology.</p></article>
          <article><p className="kicker">Vision</p><h2>Become a trusted remote-first technology partner.</h2><p>To become a trusted remote-first technology solutions company serving local and international clients through software, SaaS, automation, managed support, technical project services and proprietary digital products.</p></article>
        </div>
      </section>
      <section className="section shell">
        <SectionHeading kicker="How PK-TANK works" title="Clear scope, honest status and responsibility matched to capability." />
        <div className="values-grid">
          {[["Practical over impressive", "The useful workflow matters more than unnecessary technical complexity."], ["Evidence over claims", "Projects, experience and results are described with accurate status and without invented metrics."], ["Clarity over ambiguity", "Scope, exclusions, assumptions and responsibilities should be understood before delivery begins."], ["Support beyond launch", "Technology becomes valuable through adoption, documentation, troubleshooting and improvement."]].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="section founder-section" aria-labelledby="founder-heading">
        <div className="shell">
          <p className="kicker">Founder</p>
          <div className="founder-grid">
            <div className="founder-profile">
              <div className="founder-identity">
                <div className="founder-monogram" aria-hidden="true"><span>PS</span></div>
                <div><h2 id="founder-heading">Prasun Samadder</h2><p className="founder-role">Founder, PK-TANK</p><p className="founder-specialism">Business Technology &amp; SaaS Solutions Specialist</p></div>
              </div>
              <div className="founder-bio">
                <p>Prasun Samadder works across business operations, software systems, technical support, networking and technology project execution.</p>
                <p>His experience combines practical customer and service operations with business workflow analysis, technical troubleshooting, project coordination and the development of web-based business systems.</p>
                <p>Through PK-TANK, his focus is to help businesses replace disconnected or manual processes with practical digital solutions — including business software, SaaS workflows, AI-assisted support, dashboards, customer and order systems, HR operations, service workflows and technical support systems.</p>
                <p>His approach starts with understanding the actual business problem before selecting the technology. The objective is not simply to build software, but to create systems that are practical to operate, easier to manage and capable of growing with the business.</p>
              </div>
              <p className="founder-trust"><MapPin aria-hidden="true" />Based in Bangladesh <span aria-hidden="true">•</span> Supporting businesses locally and remotely</p>
              <div className="founder-actions"><Link className="button" href="/work">View Selected Work <ArrowRight size={16} aria-hidden="true" /></Link><Link className="button button-secondary" href="/contact">Discuss Your Project <ArrowRight size={16} aria-hidden="true" /></Link></div>
            </div>
            <div className="founder-details">
              <div className="founder-focus"><p className="founder-details-label">Areas of Focus</p><ul>{founderFocusAreas.map((area) => <li key={area}><Check aria-hidden="true" /><span>{area}</span></li>)}</ul></div>
              <figure className="founder-direction"><figcaption>Founder’s Direction</figcaption><blockquote>“Build practical technology that helps businesses work smarter, reduce manual effort and operate with better visibility.”</blockquote></figure>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
