import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/data/site-content";
import { workScreenshots } from "@/data/work-screenshots";

// Default sizes suit the two-column /work grid; the homepage passes its four-column sizes.
const defaultSizes = "(min-width: 1200px) 590px, (min-width: 700px) 50vw, 100vw";

export function WorkCard({ item, sizes = defaultSizes }: { item: WorkItem; sizes?: string }) {
  const shots = workScreenshots[item.slug];
  const screenshot = shots?.find((shot) => shot.featured) ?? shots?.[0];

  return (
    <article className="work-card">
      {screenshot ? (
        <div className="work-shot">
          <div className="browser-bar" aria-hidden="true">
            <span className="browser-dots"><i /><i /><i /></span>
            <span className="browser-address">{screenshot.title}</span>
          </div>
          <Image
            src={screenshot.src}
            width={1672}
            height={941}
            sizes={sizes}
            alt={screenshot.alt}
          />
        </div>
      ) : (
        <div className="work-visual" aria-hidden="true">
          <span>{item.accent}</span>
          <div className="work-lines"><i /><i /><i /></div>
        </div>
      )}
      <div className="work-card-body">
        <div className="work-labels"><span>{item.category}</span><span>{item.status}</span></div>
        <h3>
          <Link href={`/work/${item.slug}`}>{item.title}</Link>
        </h3>
        <p>{item.summary}</p>
        <span className="text-link" aria-hidden="true">
          View case study <ArrowUpRight size={17} />
        </span>
      </div>
    </article>
  );
}
