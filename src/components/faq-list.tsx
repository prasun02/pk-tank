import { Plus } from "lucide-react";
import { faqs } from "@/data/site-content";

export function FaqList() {
  return (
    <div className="faq-list">
      {faqs.map(({ question, answer }, index) => (
        <details key={question} open={index === 0}>
          <summary>
            <span>{question}</span>
            <Plus className="faq-toggle" aria-hidden="true" size={18} />
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
