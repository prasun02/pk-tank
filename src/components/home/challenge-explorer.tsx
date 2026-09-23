"use client";

import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, ChevronDown, Files, FolderKanban, MessagesSquare, PackageOpen, Router } from "lucide-react";
import { Fragment, useState } from "react";
import { challenges, type Challenge } from "@/data/home-content";

const challengeIcons: Record<Challenge["id"], typeof Files> = {
  "manual-work": Files,
  visibility: ChartNoAxesCombined,
  "support-workload": MessagesSquare,
  "it-interruptions": Router,
  "technical-projects": FolderKanban,
  "product-launches": PackageOpen,
};

// Single-open accordion. At desktop widths CSS lays the triggers out as a list beside the open panel.
export function ChallengeExplorer() {
  const [openId, setOpenId] = useState<Challenge["id"] | null>(challenges[0].id);

  const toggle = (id: Challenge["id"]) => {
    const sideBySide = window.matchMedia("(min-width: 960px)").matches;
    setOpenId((current) => (current === id && !sideBySide ? null : id));
  };

  return (
    <div className="challenge-explorer">
      {challenges.map((challenge) => {
        const Icon = challengeIcons[challenge.id];
        const open = openId === challenge.id;
        return (
          <Fragment key={challenge.id}>
            <h3 className="challenge-heading">
              <button
                className="challenge-trigger"
                type="button"
                id={`challenge-${challenge.id}-trigger`}
                aria-expanded={open}
                aria-controls={`challenge-${challenge.id}-panel`}
                onClick={() => toggle(challenge.id)}
              >
                <span className="challenge-icon"><Icon aria-hidden="true" size={18} /></span>
                <span className="challenge-trigger-text">{challenge.title}</span>
                <ChevronDown className="challenge-chevron" aria-hidden="true" size={18} />
              </button>
            </h3>
            <div
              className="challenge-panel"
              id={`challenge-${challenge.id}-panel`}
              role="region"
              aria-labelledby={`challenge-${challenge.id}-trigger`}
              hidden={!open}
            >
              <div className="challenge-flow">
                <div className="challenge-flow-before">
                  <p className="challenge-label">Today</p>
                  <ul>{challenge.before.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <span className="challenge-flow-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
                <div className="challenge-flow-after">
                  <p className="challenge-label">With PK-TANK</p>
                  <p>{challenge.after}</p>
                </div>
              </div>
              <p className="challenge-problem"><strong>The challenge:</strong> {challenge.problem}</p>
              <div className="challenge-columns">
                <div>
                  <p className="challenge-label">How PK-TANK helps</p>
                  <ol className="challenge-steps">
                    {challenge.help.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                </div>
                <div>
                  <p className="challenge-label">Typical systems</p>
                  <ul className="challenge-systems">
                    {challenge.systems.map((system) => <li key={system}>{system}</li>)}
                  </ul>
                </div>
              </div>
              <Link className="text-link challenge-link" href={challenge.link.href}>
                {challenge.link.label} <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
