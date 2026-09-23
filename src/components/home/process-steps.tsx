import { Blocks, FileSearch, Gauge, PencilRuler } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { processSteps } from "@/data/home-content";

const stepIcons = [FileSearch, PencilRuler, Blocks, Gauge];

export function ProcessSteps() {
  return (
    <section className="home-section home-section-dark" aria-labelledby="process-heading">
      <div className="shell">
        <SectionHeader
          id="process-heading"
          tone="dark"
          eyebrow="How we work"
          title="Understand the business problem first. Build the technology second."
          lead="Four clear stages, so you always know what happens next and what you receive."
        />
        <ol className="process-track">
          {processSteps.map(({ title, text, outcome }, index) => {
            const Icon = stepIcons[index];
            return (
              <li className="process-step" key={title}>
                <div className="process-marker">
                  <span className="process-number">{index + 1}</span>
                  <Icon aria-hidden="true" size={18} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <p className="process-outcome"><span>You receive</span>{outcome}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
