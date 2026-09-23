import { CtaBand } from "@/components/cta-band";
import { ChallengeExplorer } from "@/components/home/challenge-explorer";
import { HomeHero } from "@/components/home/home-hero";
import { ProcessSteps } from "@/components/home/process-steps";
import { SelectedProjects } from "@/components/home/selected-projects";
import { ServicesOverview } from "@/components/home/services-overview";
import { SupportAndIndustries } from "@/components/home/support-industries";
import { SectionHeader } from "@/components/ui/section-header";

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <ServicesOverview />

      <section className="home-section home-section-muted" aria-labelledby="challenges-heading">
        <div className="shell">
          <SectionHeader
            id="challenges-heading"
            eyebrow="How we help"
            title="Common business problems, and how PK-TANK solves them"
            lead="Choose the challenge that sounds familiar to see what changes and which systems are typically involved."
            action={{ label: "Explore all solutions", href: "/solutions" }}
          />
          <ChallengeExplorer />
        </div>
      </section>

      <SelectedProjects />
      <ProcessSteps />
      <SupportAndIndustries />
      <CtaBand />
    </main>
  );
}
