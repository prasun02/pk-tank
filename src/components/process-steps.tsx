import { Blocks, FileSearch, Gauge, Workflow } from "lucide-react";
import { processSteps } from "@/data/site-content";

const stepIcons = [FileSearch, Workflow, Blocks, Gauge];

export function ProcessSteps() {
  return (
    <ol className="process-steps">
      {processSteps.map(([title, text], index) => {
        const Icon = stepIcons[index];
        return (
          <li key={title}>
            <span className="process-step-dot"><Icon aria-hidden="true" size={18} /></span>
            <div>
              <span className="process-step-number">Step {index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
