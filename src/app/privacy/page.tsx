import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";

const description =
  "Learn how PK-TANK collects, uses, stores and protects information submitted through pk-tank.com.";

export const metadata = pageMetadata("Privacy Policy", description, "/privacy");

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How PK-TANK collects, uses, stores and protects information submitted through our website."
        index="06"
      />
      <section className="section shell legal-content">
        <p className="legal-updated">Effective date: 2 September 2026</p>

        <p>PK-TANK respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains what information we collect through pk-tank.com, why we collect it, how we use it, and the choices available to you.</p>
        <p>By using this website or submitting information through our contact form, you acknowledge the practices described in this policy.</p>

        <h2>1. Information We Collect</h2>
        <p>When you contact PK-TANK through our website, we may collect information that you voluntarily provide, including:</p>
        <ul>
          <li>Your name</li>
          <li>Company or organization name</li>
          <li>Country</li>
          <li>Email address</li>
          <li>Phone or WhatsApp number</li>
          <li>Type of service you are interested in</li>
          <li>Approximate project budget</li>
          <li>Project requirements, business problems or other information included in your message</li>
        </ul>
        <p>We may also receive limited technical information automatically when you access the website, such as IP address, browser type, device information, request information and security or server logs. This information may be processed by our hosting and infrastructure providers as part of operating and protecting the website.</p>

        <h2>2. How We Use Your Information</h2>
        <p>PK-TANK uses information collected through the website to:</p>
        <ul>
          <li>Review and respond to enquiries</li>
          <li>Understand your project or business requirements</li>
          <li>Prepare discussions, proposals or quotations</li>
          <li>Communicate with you about requested services</li>
          <li>Maintain records of potential and existing client communications</li>
          <li>Improve our website, services and customer experience</li>
          <li>Detect abuse, spam, security threats or unauthorized activity</li>
          <li>Meet legal, accounting or regulatory obligations where applicable</li>
        </ul>
        <p>We do not use information submitted through the contact form for unrelated purposes.</p>

        <h2>3. How Contact Enquiries Are Stored</h2>
        <p>Information submitted through the PK-TANK contact form is processed through our website backend and stored in our business database.</p>
        <p>PK-TANK currently uses third-party technology providers, including services for website hosting, database infrastructure and application deployment. These providers may process limited information as necessary to deliver their services.</p>
        <p>We configure our systems so that sensitive administrative credentials are not intentionally exposed to website visitors.</p>

        <h2>4. Sharing of Personal Information</h2>
        <p>PK-TANK does not sell personal information.</p>
        <p>We may share limited information only when reasonably necessary with:</p>
        <ul>
          <li>Technology and hosting providers that support the operation of our website and systems</li>
          <li>Professional advisers or service providers where required for legitimate business activities</li>
          <li>Government, regulatory or legal authorities where disclosure is required by applicable law</li>
          <li>Parties involved in protecting PK-TANK, our clients, users or systems against fraud, abuse or security threats</li>
        </ul>
        <p>We do not provide contact-form information to third parties for their independent advertising or marketing purposes.</p>

        <h2>5. Data Security</h2>
        <p>PK-TANK uses reasonable technical and organizational measures to protect information handled through the website.</p>
        <p>These measures may include HTTPS encryption, access controls, server-side validation, database security controls, restricted administrative credentials, account security measures and monitoring for suspicious activity.</p>
        <p>However, no internet-based system can guarantee absolute security. Users should avoid submitting passwords, payment-card details, confidential credentials or other highly sensitive information through the general contact form.</p>

        <h2>6. Data Retention</h2>
        <p>We retain enquiry and business-contact information only for as long as reasonably necessary for purposes such as responding to enquiries, managing potential client relationships, maintaining business records, providing services, resolving disputes and meeting applicable legal or accounting requirements.</p>
        <p>Information that is no longer reasonably required may be deleted or anonymized.</p>

        <h2>7. Cookies and Analytics</h2>
        <p>PK-TANK may use essential technologies required for website functionality, security and performance.</p>
        <p>If analytics, advertising or other non-essential tracking technologies are introduced in the future, this Privacy Policy and any required cookie or consent mechanisms will be updated accordingly.</p>
        <p>PK-TANK does not currently claim to use advertising cookies unless such services are specifically enabled.</p>

        <h2>8. External Links</h2>
        <p>The PK-TANK website may contain links to third-party websites, platforms, demonstrations or services.</p>
        <p>PK-TANK is not responsible for the privacy practices, security or content of third-party websites. Visitors should review the privacy policies of those services before providing personal information.</p>

        <h2>9. Your Privacy Choices</h2>
        <p>Depending on your location and applicable law, you may have rights relating to your personal information, which may include requesting access, correction or deletion of information that PK-TANK holds about you.</p>
        <p>You may also ask us to stop using your information for future business communication where applicable.</p>
        <p>To make a privacy-related request, contact PK-TANK through the website&apos;s Contact page and clearly state that your message relates to a privacy request.</p>

        <h2>10. International Processing</h2>
        <p>PK-TANK is based in Bangladesh and may work with customers, technology providers and services located in other countries.</p>
        <p>As a result, information may be processed or stored in jurisdictions outside your country. Where applicable, we take reasonable steps to use reputable service providers and appropriate safeguards.</p>

        <h2>11. Children&apos;s Privacy</h2>
        <p>PK-TANK&apos;s website and business services are intended for businesses and professional users and are not specifically directed toward children.</p>
        <p>We do not knowingly seek to collect personal information from children through the general business enquiry form.</p>

        <h2>12. Changes to This Privacy Policy</h2>
        <p>PK-TANK may update this Privacy Policy when our website, services, technology providers or legal obligations change.</p>
        <p>When material changes are made, the updated policy will be published on this page and the effective date will be revised.</p>

        <h2>13. Contact PK-TANK</h2>
        <p>For questions about this Privacy Policy, your personal information or how PK-TANK handles website enquiries, contact us through:</p>
        <address className="legal-contact">
          <strong>PK-TANK</strong>
          <span>Business Technology &amp; SaaS Solutions</span>
          <span>Website: <a href="https://pk-tank.com">https://pk-tank.com</a></span>
          <span>Contact: <Link href="/contact">https://pk-tank.com/contact</Link></span>
        </address>
      </section>
    </main>
  );
}
