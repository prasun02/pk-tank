import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  CheckCircle2,
  CloudCog,
  FileSearch,
  Gauge,
  Headphones,
  Layers3,
  Network,
  PackageCheck,
  Workflow,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";
import { industries, pastExperience, problems, services, solutions, workItems } from "@/data/site-content";

const capabilities = ["Software & SaaS", "AI Automation", "Managed IT", "Technical Project Support"];

const systemCards = [
  { icon: Blocks, title: "Connected workflows", text: "Customers, orders, stock and approvals in one practical system." },
  { icon: Bot, title: "AI-assisted support", text: "Structured knowledge and automation for faster, repeatable answers." },
  { icon: Network, title: "Technical operations", text: "Remote IT, network and product support that keeps work moving." },
  { icon: CloudCog, title: "Project enablement", text: "Research, documentation and coordination for technical delivery." },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Business Technology &amp; SaaS Solutions</div>
            <h1>Technology That Connects <em>Business, Software</em> &amp; Technical Operations</h1>
            <p>
              PK-TANK helps growing businesses digitize operations, automate repetitive work, solve IT problems
              and manage technology projects with practical software and technical support.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Discuss Your Project <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button button-secondary" href="/solutions">
                Explore Solutions
              </Link>
            </div>
            <div className="hero-proof">
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>Remote-first support for local and international businesses</span>
            </div>
          </div>

          <div className="operations-panel" aria-label="Connected operations overview">
            <div className="panel-topline">
              <span>Connected operations</span>
              <span className="live-pill"><i /> Operational</span>
            </div>
            <div className="system-map">
              <div className="core-node">
                <span>PK</span>
                <strong>Business<br />Core</strong>
              </div>
              {systemCards.map(({ icon: Icon, title }, index) => (
                <div className={`map-node node-${index + 1}`} key={title}>
                  <Icon aria-hidden="true" size={18} />
                  <span>{title}</span>
                </div>
              ))}
            </div>
            <div className="panel-metrics">
              <div><span>01</span><p>Plan the right system</p></div>
              <div><span>02</span><p>Build &amp; connect</p></div>
              <div><span>03</span><p>Support &amp; improve</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="capability-strip" aria-label="Core capabilities">
        <div className="shell capability-row">
          {capabilities.map((capability, index) => (
            <div key={capability}><span>0{index + 1}</span>{capability}</div>
          ))}
        </div>
      </section>

      <section className="intro-section shell">
        <SectionHeading
          index="01"
          kicker="One partner, connected capability"
          title="Practical technology, built around how your business actually works."
        />
        <div className="system-card-grid">
          {systemCards.map(({ icon: Icon, title, text }) => (
            <article className="system-card" key={title}>
              <Icon aria-hidden="true" size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <SectionHeading
            index="02"
            kicker="Problems we help organize"
            title="When operational friction becomes a daily cost, the right system creates room to work."
          />
          <div className="problem-grid">
            {problems.map((problem, index) => (
              <article className="problem-card" key={problem.title}>
                <span>0{index + 1}</span>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading
          index="03"
          kicker="Four service pillars"
          title="Software leads. Technical support and project execution complete the picture."
          description="PK-TANK brings digital systems, day-to-day technology support and project enablement into one practical service structure."
        />
        <div className="pillar-list">
          {services.map((service) => (
            <article id={service.id} key={service.id}>
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <Link className="icon-link" href={`/services#${service.id}`} aria-label={`Explore ${service.title}`}>
                <ArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="shell">
          <SectionHeading
            index="04"
            kicker="Featured solutions"
            title="Focused systems for the workflows growing businesses need to control."
          />
          <div className="solutions-grid">
            {solutions.map(([title, text], index) => {
              const SolutionIcon = [Layers3, PackageCheck, Workflow, Gauge, Headphones][index % 5];
              return (
                <article key={title}>
                  <SolutionIcon aria-hidden="true" size={22} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
          <Link className="button button-light section-button" href="/solutions">
            Explore all solutions <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading
          index="05"
          kicker="Featured work"
          title="Project concepts shaped around real operational and support problems."
          description="Status labels distinguish demonstrations and prototypes from verified company-delivered client work. No fabricated outcomes are presented."
        />
        <div className="work-grid">
          {workItems.map((item) => <WorkCard item={item} key={item.slug} />)}
        </div>
        <div className="center-action">
          <Link className="button button-secondary" href="/work">View all work</Link>
        </div>
      </section>

      <section className="section experience-section">
        <div className="shell">
          <div className="compact-heading">
            <p className="kicker">Selected Past Technical &amp; Business Experience</p>
            <p>Historical work is presented as the founder’s experience and is not implied to have been delivered under the current PK-TANK structure.</p>
          </div>
          <div className="experience-grid">
            {pastExperience.map(([title, status, text]) => (
              <article key={title}>
                <span>{status}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading
          index="06"
          kicker="Industries"
          title="Adaptable technology for businesses where operations, service and technical work overlap."
        />
        <div className="industry-mini-grid">
          {industries.map(([name], index) => (
            <Link href="/industries" key={name}><span>0{index + 1}</span>{name}<ArrowRight aria-hidden="true" size={16} /></Link>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <SectionHeading
            index="07"
            kicker="A practical process"
            title="Understand first. Build what matters. Support what follows."
          />
          <div className="process-grid">
            {[
              [FileSearch, "Discover", "Clarify the problem, users, current process, constraints and evidence."],
              [Workflow, "Shape", "Define a practical scope, workflow and delivery path before complexity grows."],
              [Blocks, "Build", "Implement the system, support structure or project deliverables in focused stages."],
              [Gauge, "Improve", "Review usage, resolve friction and prioritize the next useful improvement."],
            ].map(([Icon, title, text], index) => {
              const ProcessIcon = Icon as typeof FileSearch;
              return (
                <article key={title as string}>
                  <span>0{index + 1}</span>
                  <ProcessIcon aria-hidden="true" size={25} />
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section managed-section">
        <div className="shell managed-grid">
          <div className="managed-visual" aria-hidden="true">
            <div className="managed-core"><CloudCog size={36} /><span>Technology<br />Partner</span></div>
            <span className="managed-chip chip-one">Software</span>
            <span className="managed-chip chip-two">IT support</span>
            <span className="managed-chip chip-three">SaaS</span>
            <span className="managed-chip chip-four">Reporting</span>
          </div>
          <div>
            <p className="eyebrow"><span />Managed monthly support</p>
            <h2>One Technology Partner for Day-to-Day Needs</h2>
            <p>Monthly support can combine website and software care, SaaS support, user help, basic network troubleshooting, reports and small improvements.</p>
            <Link className="button" href="/pricing">Explore managed support <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
