import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem } from "@/components/Timeline";
import { experience, leadership } from "@/data/portfolio";
import { Crown } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Nikul Kumar" },
      {
        name: "description",
        content:
          "Work and community experience: Civora Nexus, Cognifyz, Google Student Ambassador, LetsUpgrade, Coding Blocks, Unstop, and GDG Udaipur.",
      },
      { property: "og:title", content: "Experience — Nikul Kumar" },
      {
        property: "og:description",
        content: "Internships, ambassadorships, and leadership roles.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Work, internships & community"
        description="Internships, ambassadorships, and the communities I'm part of."
      />
      <ol className="space-y-6">
        {experience.map((e) => (
          <TimelineItem key={e.role + e.org} item={e} />
        ))}
      </ol>

      <div className="mt-20">
        <SectionHeading eyebrow="Leadership" title="Building community" />
        <div className="rounded-2xl border border-primary/30 bg-card p-6 glow-ring">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
            <Crown className="size-3" /> Founder
          </div>
          <h3 className="text-xl font-semibold">
            {leadership.role} <span className="text-muted-foreground">· {leadership.org}</span>
          </h3>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{leadership.period}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {leadership.points.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
