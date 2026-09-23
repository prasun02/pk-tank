import type { ReactNode } from "react";

type SectionHeadingProps = {
  index?: string;
  kicker: string;
  title: string;
  description?: string;
  /** "compact" stacks kicker and title with a smaller h2 and an optional action on the right. */
  variant?: "default" | "compact";
  action?: ReactNode;
};

export function SectionHeading({ index = "01", kicker, title, description, variant = "default", action }: SectionHeadingProps) {
  if (variant === "compact") {
    return (
      <div className="section-heading-compact">
        <div>
          <p className="kicker"><span className="section-number">{index}</span>{kicker}</p>
          <h2>{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </div>
        {action ? <div className="section-heading-action">{action}</div> : null}
      </div>
    );
  }

  return (
    <div className="section-heading">
      <div>
        <span className="section-number">{index}</span>
        <p className="kicker">{kicker}</p>
      </div>
      <div>
        <h2>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
    </div>
  );
}
