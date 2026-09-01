import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy",
  "How PK-TANK handles information submitted through this website.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Privacy"
        title="A straightforward approach to website enquiries."
        description="This notice explains the information the PK-TANK website is designed to collect and why. It should be reviewed before production launch and updated for the final business and hosting setup."
        index="06"
      />
      <section className="section shell legal-content">
        <p className="legal-updated">Draft for launch review • Last updated 24 August 2026</p>
        <h2>Information submitted through the contact form</h2>
        <p>The contact form may collect your name, company, country, email address, phone or WhatsApp number, service interest, budget range and project description. This information is used to understand and respond to your enquiry.</p>
        <h2>How information is handled</h2>
        <p>Enquiry data is intended to be stored in a private Supabase database and accessed only for legitimate business follow-up, project scoping and related communication. The public website is not designed to allow visitors to read, edit or delete lead records.</p>
        <h2>Service providers</h2>
        <p>The production website may use hosting, database and technical service providers needed to operate the site. Their final details and any required cross-border data wording should be confirmed before launch.</p>
        <h2>Retention and requests</h2>
        <p>Information should be kept only as long as reasonably needed for enquiry follow-up, business records and applicable obligations. A verified contact channel for privacy requests must be added before production launch.</p>
        <h2>Security and limitations</h2>
        <p>Reasonable technical safeguards are built into the lead flow, including server-side validation, restricted database access and spam reduction. No internet transmission or storage system can be guaranteed completely secure.</p>
        <h2>Changes</h2>
        <p>This notice may be updated as the website, service providers and business practices are finalized. Material updates should be reflected by revising the date above.</p>
        <div className="notice-card"><p><strong>Manual launch task</strong> Add a verified business contact channel and obtain appropriate local legal review if required for the production jurisdiction and operating model.</p></div>
      </section>
    </main>
  );
}
