import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/data/site-content";

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article className="work-card">
      <div className="work-visual" aria-hidden="true">
        <span>{item.accent}</span>
        <div className="work-lines"><i /><i /><i /></div>
      </div>
      <div className="work-card-body">
        <div className="work-labels"><span>{item.category}</span><span>{item.status}</span></div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <Link className="text-link" href={`/work/${item.slug}`}>
          View case study <ArrowUpRight aria-hidden="true" size={17} />
        </Link>
      </div>
    </article>
  );
}
