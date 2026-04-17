import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups, certifications } from "@/data/portfolio";
import { BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Certifications — Nikul Kumar" },
      {
        name: "description",
        content:
          "Programming, analytics, cloud, and tools that Nikul Kumar uses — plus 12+ certifications from Deloitte, Google Cloud, Neo4j, IIT Kharagpur, and more.",
      },
      { property: "og:title", content: "Skills & Certifications — Nikul Kumar" },
      {
        property: "og:description",
        content: "MERN, GenAI, Python, Power BI, GCP, Docker — and certifications.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        description="A working toolkit across full-stack web, GenAI, data, and cloud."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
          >
            <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
          description="Programs and credentials from industry and academia."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4"
            >
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">{c.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
