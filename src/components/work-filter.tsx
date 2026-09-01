"use client";

import { useState } from "react";
import { WorkCard } from "@/components/work-card";
import type { WorkCategory, WorkItem } from "@/data/site-content";

type Filter = "All" | WorkCategory;

const filters: readonly Filter[] = ["All", "Digital Systems", "IT & Technical", "Technical Projects", "Business Enablement"];

export function WorkFilter({ items }: { items: readonly WorkItem[] }) {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="filter-row" role="group" aria-label="Filter work by category">
        {filters.map((filter) => (
          <button
            className={active === filter ? "active" : ""}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="work-grid" aria-live="polite">
        {visible.map((item) => <WorkCard item={item} key={item.slug} />)}
      </div>
      {visible.length === 0 ? <p className="empty-state">No published work is currently listed in this category.</p> : null}
    </div>
  );
}
