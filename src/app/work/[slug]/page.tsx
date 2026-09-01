import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ImageOff } from "lucide-react";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { workItems } from "@/data/site-content";
import { canonical } from "@/lib/site-url";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = workItems.find((entry) => entry.slug === slug);
  if (!item) return { title: "Work Not Found" };
  const url = canonical(`/work/${item.slug}`);
  return {
    title: item.title,
    description: item.summary,
    alternates: url ? { canonical: url } : undefined,
    openGraph: { title: item.title, description: item.summary, url, images: [] },
    twitter: { title: item.title, description: item.summary, images: [] },
  };
}

export default async function WorkDetailPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const item = workItems.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <main id="main-content">
      <section className="case-hero">
        <div className="shell">
          <Link className="back-link" href="/work"><ArrowLeft aria-hidden="true" size={16} /> Back to work</Link>
          <div className="case-hero-grid">
            <div>
              <div className="work-labels"><span>{item.category}</span><span>{item.status}</span></div>
              <h1>{item.title}</h1>
              <p>{item.summary}</p>
            </div>
            <div className="case-number" aria-hidden="true">{item.accent}</div>
          </div>
        </div>
      </section>

      <section className="section shell case-layout">
        <aside>
          <p className="kicker">Case study</p>
          <nav aria-label="Case study sections">
            {["Overview", "Problem", "Context", "Role", "Solution / Work", "Deliverables / Features", "Technologies / Tools", "Business Benefit", "Media"].map((label) => (
              <a href={`#${label.toLowerCase().replaceAll(" ", "-").replaceAll("/", "")}`} key={label}>{label}</a>
            ))}
          </nav>
        </aside>
        <article className="case-content">
          <section id="overview"><p className="case-label">Overview</p><h2>{item.title}</h2><p>{item.summary}</p></section>
          <section id="problem"><p className="case-label">Problem</p><h2>The operational challenge</h2><p>{item.problem}</p></section>
          <section id="context"><p className="case-label">Context</p><h2>Why this work was framed this way</h2><p>{item.context}</p></section>
          <section id="role"><p className="case-label">Role</p><h2>PK-TANK’s role in the work</h2><p>{item.role}</p></section>
          <section id="solution--work"><p className="case-label">Solution / Work</p><h2>The proposed approach</h2><p>{item.solution}</p></section>
          <section id="deliverables--features">
            <p className="case-label">Deliverables / Features</p><h2>What the concept includes</h2>
            <div className="case-checks">{item.deliverables.map((deliverable) => <div key={deliverable}><CheckCircle2 aria-hidden="true" size={18} />{deliverable}</div>)}</div>
          </section>
          <section id="technologies--tools">
            <p className="case-label">Technologies / Tools</p><h2>Technology approach</h2>
            <div className="tool-tags">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </section>
          <section id="business-benefit"><p className="case-label">Business Benefit</p><h2>Expected practical value</h2><p>{item.benefit}</p><p className="scope-note">This is a qualitative project benefit, not a published or verified performance outcome.</p></section>
          <section id="media">
            <p className="case-label">Media</p><h2>Project evidence is reviewed before publishing</h2>
            <div className="media-placeholder"><ImageOff aria-hidden="true" /><p>Interface captures or supporting documents will be added only when they are verified, publication-ready and free of confidential information.</p></div>
          </section>
          <div className="next-project"><p>Have a similar workflow or support challenge?</p><Link className="text-link" href="/contact">Discuss your project <ArrowRight aria-hidden="true" size={17} /></Link></div>
        </article>
      </section>
      <CtaBand />
    </main>
  );
}
