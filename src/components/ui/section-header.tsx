import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  action?: { label: string; href: string };
  tone?: "light" | "dark";
};

export function SectionHeader({ id, eyebrow, title, lead, action, tone = "light" }: SectionHeaderProps) {
  return (
    <div className={tone === "dark" ? "section-header section-header-dark" : "section-header"}>
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
      {action ? (
        <Link className="section-action" href={action.href}>
          {action.label} <ArrowRight aria-hidden="true" size={16} />
        </Link>
      ) : null}
    </div>
  );
}
