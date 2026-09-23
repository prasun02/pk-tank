import Link from "next/link";
import { ArrowRight, BarChart3, Boxes, Handshake, MessagesSquare, Network, ClipboardList, Users } from "lucide-react";
import { getService, problems } from "@/data/site-content";

const challengeIcons = [ClipboardList, BarChart3, Users, MessagesSquare, Network, Boxes, Handshake];

export function ChallengeTable() {
  return (
    <div className="challenge-table" role="table" aria-label="Business challenges and how PK-TANK helps">
      <div className="challenge-head" role="row">
        <span role="columnheader">The challenge</span>
        <span role="columnheader">How PK-TANK helps</span>
        <span role="columnheader">Service</span>
      </div>
      {problems.map((problem, index) => {
        const Icon = challengeIcons[index % challengeIcons.length];
        const service = getService(problem.serviceId);
        return (
          <div className="challenge-row" role="row" key={problem.title}>
            <div className="challenge-problem" role="cell">
              <span className="challenge-icon"><Icon aria-hidden="true" size={18} /></span>
              <div>
                <h3>{problem.title}</h3>
                <p>{problem.symptom}</p>
              </div>
            </div>
            <div className="challenge-help" role="cell">
              <ArrowRight className="challenge-arrow" aria-hidden="true" size={16} />
              <p><span className="challenge-label">How we help</span>{problem.help}</p>
            </div>
            <div className="challenge-service" role="cell">
              <Link href={`/services#${service.id}`}>
                {service.title} <ArrowRight aria-hidden="true" size={14} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
