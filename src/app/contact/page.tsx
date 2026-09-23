import { CheckCircle2, Clock3, Globe2, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact — Discuss Your Project",
  "Tell PK-TANK the business, software, IT or technical project problem you need to solve.",
  "/contact",
);

function mapService(value?: string | string[]) {
  const text = Array.isArray(value) ? value[0] : value;
  if (!text) return "";
  if (/ai|saas/i.test(text)) return "SaaS / AI";
  if (/website|portal/i.test(text)) return "Website / Portal";
  if (/managed/i.test(text)) return "Managed Monthly Support";
  if (/it|network/i.test(text)) return "IT / Network";
  if (/project/i.test(text)) return "Technical Project";
  if (/business enablement|product/i.test(text)) return "Product / Business Enablement";
  if (/software|digital|system|order|inventory|stock|hr|service|requisition|dashboard/i.test(text)) return "Business Software";
  return "";
}

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const query = await searchParams;
  const defaultService = mapService(query.service);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title="Tell Us the Problem — Not the Technology"
        description="Describe what is slowing the business down, where information gets lost or what technical work needs clearer support. We’ll start there."
      />
      <section className="section shell contact-layout">
        <aside>
          <p className="kicker">A useful first message</p>
          <h2>Share the current situation in plain language.</h2>
          <p>You do not need a technical specification. The most useful starting details are the current process, people involved, recurring problem, available data and desired outcome.</p>
          <div className="contact-points">
            <div><Globe2 aria-hidden="true" /><p><strong>Remote-first</strong><span>Bangladesh • Remote Worldwide</span></p></div>
            <div><Clock3 aria-hidden="true" /><p><strong>Scope before proposal</strong><span>Requirements and responsibility are clarified first.</span></p></div>
            <div><ShieldCheck aria-hidden="true" /><p><strong>Private enquiry flow</strong><span>Submissions go through server-side validation.</span></p></div>
          </div>
          <div className="contact-expectation"><CheckCircle2 aria-hidden="true" /><p>PK-TANK will review the enquiry and use the information only for relevant follow-up and scoping.</p></div>
        </aside>
        <ContactForm defaultService={defaultService} />
      </section>
    </main>
  );
}
