import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  index?: string;
  cta?: boolean;
};

export function PageHero({ eyebrow, title, description, index = "PK", cta = false }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div>
          <p className="eyebrow"><span />{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero-side">
          <span className="page-index">{index}</span>
          <p>{description}</p>
          {cta ? (
            <Link className="text-link" href="/contact">
              Discuss your project <ArrowRight aria-hidden="true" size={17} />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
