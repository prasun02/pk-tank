import Link from "next/link";
import { ArrowRight, Building2, Check, CircuitBoard, GraduationCap, Headset, HeartPulse, MonitorCog, PackageOpen, Scissors, Store } from "lucide-react";
import { industries } from "@/data/site-content";
import { managedSupportScope } from "@/data/home-content";

// Same order as the industries data and the icons used on the industries page.
const industryIcons = [Store, Scissors, CircuitBoard, HeartPulse, GraduationCap, PackageOpen, Building2, MonitorCog];

export function SupportAndIndustries() {
  return (
    <section className="home-section home-section-muted" aria-label="Managed support and industries">
      <div className="shell support-industries">
        <article className="support-panel card" aria-labelledby="support-heading">
          <div className="support-panel-head">
            <span className="icon-tile"><Headset aria-hidden="true" size={20} /></span>
            <div>
              <p className="section-eyebrow">Managed monthly support</p>
              <h2 id="support-heading">One technology partner for day-to-day needs</h2>
            </div>
          </div>
          <p className="support-lead">A single monthly arrangement can cover the software you use and the technical issues that interrupt your team.</p>
          <ul className="support-scope">
            {managedSupportScope.map((item) => <li key={item}><Check aria-hidden="true" size={15} strokeWidth={2.5} />{item}</li>)}
          </ul>
          <div className="support-actions">
            <Link className="button button-small" href="/pricing">
              Explore managed support <ArrowRight aria-hidden="true" size={15} />
            </Link>
            <Link className="text-link" href="/services#managed-it">What managed IT covers</Link>
          </div>
        </article>

        <div className="industries-panel">
          <p className="section-eyebrow">Industries</p>
          <h2 id="industries-heading">Where operations, service and technical work overlap</h2>
          <ul className="industry-chips">
            {industries.map(([name], index) => {
              const Icon = industryIcons[index] ?? Store;
              return (
                <li key={name}>
                  <Link href="/industries"><Icon aria-hidden="true" size={17} />{name}</Link>
                </li>
              );
            })}
          </ul>
          <Link className="text-link" href="/industries">How we adapt to each industry <ArrowRight aria-hidden="true" size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
