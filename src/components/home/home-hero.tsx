import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CircleCheck, ClipboardList, Cloud, Headset, LayoutDashboard, Workflow } from "lucide-react";

const offerings = [
  { icon: LayoutDashboard, title: "Business Software", text: "Workflow systems for orders, stock, HR and approvals", target: "custom-business-software" },
  { icon: Cloud, title: "SaaS Applications", text: "Web platforms with users, roles and dashboards", target: "saas-application-development" },
  { icon: Workflow, title: "AI Automation", text: "AI-assisted support and workflow automation", target: "ai-workflow-automation" },
  { icon: Headset, title: "Managed IT", text: "Remote user, network and SaaS support", target: "managed-it-support" },
  { icon: ClipboardList, title: "Technical Project Support", text: "Research, BOQ, documentation and handover", target: "technical-project-support" },
] as const;

// Mirrors the approval-to-receiving flow shown in the CSP requisition project screens.
const workflowSteps = [
  { label: "Request submitted", state: "done" },
  { label: "Manager approval", state: "done" },
  { label: "Stock arrangement", state: "active" },
  { label: "Dispatch", state: "pending" },
  { label: "Receiving", state: "pending" },
] as const;

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Business Technology &amp; SaaS Solutions</p>
          <h1 id="hero-heading">
            Technology That Connects <em>Business, Software</em> &amp; Technical Operations
          </h1>
          <p className="hero-lead">
            PK-TANK helps growing businesses digitize operations, automate repetitive work, resolve IT problems and
            deliver technology projects — with practical software and dependable technical support.
          </p>
          <div className="hero-actions">
            <Link className="button button-large" href="/contact">
              Discuss Your Project <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-large button-ghost-dark" href="/work">
              View Our Work
            </Link>
          </div>
          <p className="hero-principle">
            <CircleCheck aria-hidden="true" size={18} />
            Understand the business problem first. Build the technology second.
          </p>
        </div>

        <figure className="hero-visual">
          <div className="hero-stage">
            <div className="browser-frame browser-frame-main">
              <div className="browser-bar" aria-hidden="true">
                <span className="browser-dots"><i /><i /><i /></span>
                <span className="browser-address">Requisition &amp; Stock Workflow</span>
              </div>
              <Image
                src="/work/csp-requisition-stock-workflow/requisition-analytics.png"
                width={1672}
                height={941}
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 46vw, (min-width: 640px) 680px, calc(100vw - 32px)"
                loading="eager"
                fetchPriority="high"
                alt="Requisition management analytics dashboard showing backlog ageing, workload and operational status"
              />
            </div>

            <div className="browser-frame browser-frame-secondary">
              <div className="browser-bar" aria-hidden="true">
                <span className="browser-dots"><i /><i /><i /></span>
                <span className="browser-address">HR Management Platform</span>
              </div>
              <Image
                src="/work/hr-management-platform/hrm-dashboard.png"
                width={1672}
                height={941}
                sizes="(min-width: 1024px) 320px, 360px"
                alt="HR management dashboard showing employees, attendance and pending leave"
              />
            </div>

            <div className="hero-flow card card-dark" aria-hidden="true">
              <p className="hero-flow-label">Workflow</p>
              <p className="hero-flow-title">Requisition to delivery</p>
              <ol>
                {workflowSteps.map(({ label, state }) => (
                  <li data-state={state} key={label}>
                    <span className="hero-flow-marker">{state === "done" ? <Check size={11} strokeWidth={3} /> : null}</span>
                    {label}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <figcaption>Interface screens from PK-TANK requisition and HR platform projects</figcaption>
        </figure>
      </div>

      <div className="hero-offerings">
        <div className="shell">
          <h2 className="sr-only">What PK-TANK provides</h2>
          <ul>
            {offerings.map(({ icon: Icon, title, text, target }) => (
              <li key={title}>
                <a href={`#service-${target}`}>
                  <span className="icon-tile icon-tile-dark"><Icon aria-hidden="true" size={19} /></span>
                  <span>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
