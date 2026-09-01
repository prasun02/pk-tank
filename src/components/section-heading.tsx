type SectionHeadingProps = {
  index?: string;
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index = "01", kicker, title, description }: SectionHeadingProps) {
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
