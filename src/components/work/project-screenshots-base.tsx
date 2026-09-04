"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export type ProjectScreenshot = { src: string; title: string; description: string; alt: string; featured?: boolean };

export function ProjectScreenshots({ screenshots }: { screenshots: readonly ProjectScreenshot[] }) {
  const [active, setActive] = useState<ProjectScreenshot | null>(null);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    const overflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = overflow; previousFocus?.focus(); };
  }, [active]);

  return <>
    <div className="project-screenshots">
      {screenshots.map((shot) => <figure className={shot.featured ? "project-screen project-screen-featured" : "project-screen"} key={shot.src}>
        <button className="project-screen-trigger" type="button" onClick={() => setActive(shot)} aria-label={`Enlarge ${shot.title}`}>
          <span className="project-screen-image"><Image src={shot.src} width={1672} height={941} sizes={shot.featured ? "(max-width: 1024px) calc(100vw - 40px), 780px" : "(max-width: 700px) calc(100vw - 40px), (max-width: 1024px) calc(50vw - 30px), 380px"} alt={shot.alt} /></span>
          <span className="project-screen-expand"><Expand size={16} aria-hidden="true" /> Enlarge</span>
        </button>
        <figcaption><h3>{shot.title}</h3><p>{shot.description}</p></figcaption>
      </figure>)}
    </div>
    {active ? <div className="screenshot-lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
      <div className="screenshot-lightbox-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="screenshot-lightbox-header"><div><p>Product screen</p><h2 id={titleId}>{active.title}</h2></div><button ref={closeRef} type="button" onClick={() => setActive(null)} aria-label="Close enlarged screenshot"><X aria-hidden="true" /></button></div>
        <div className="screenshot-lightbox-image"><Image src={active.src} width={1672} height={941} sizes="96vw" alt={active.alt} /></div>
        <p className="screenshot-lightbox-description">{active.description}</p>
      </div>
    </div> : null}
  </>;
}
