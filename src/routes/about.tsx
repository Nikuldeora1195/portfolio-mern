import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem } from "@/components/Timeline";
import { education, achievements } from "@/data/portfolio";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nikul Kumar" },
      {
        name: "description",
        content:
          "Detail-oriented CSE student with top academic performance and certifications from Deloitte, Google, and IIT Kharagpur. Skilled in MERN, GenAI, Python, and data analytics.",
      },
      { property: "og:title", content: "About — Nikul Kumar" },
      {
        property: "og:description",
        content: "Profile, education, and achievements of Nikul Kumar.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg text-muted-foreground">
            I'm a detail-oriented CSE student with consistent top-3 academic performance and
            certifications from <span className="text-foreground">Deloitte</span>,{" "}
            <span className="text-foreground">Google</span>, and{" "}
            <span className="text-foreground">IIT Kharagpur</span>. I work across the MERN stack,
            GenAI (RAG, LangChain), Python, and Power BI — and I love shipping practical projects
            that combine clean engineering with real data.
          </p>
          <p className="mt-4 text-muted-foreground">
            Outside coursework I founded <span className="text-foreground">TechGenz</span>, my
            college's first tech community, and I've been a campus ambassador for Google, Unstop,
            LetsUpgrade, and Coding Blocks.
          </p>
        </div>
        <aside className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gradient">
            Quick facts
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>📍 Udaipur, India</li>
            <li>🎓 B.Tech CSE · CGPA 9.58</li>
            <li>💻 MERN · GenAI · Data</li>
            <li>🏆 HackAura 2025 Finalist</li>
            <li>🚀 Founder, TechGenz</li>
          </ul>
        </aside>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Education" title="Academic timeline" />
        <ol className="space-y-6">
          {education.map((e) => (
            <TimelineItem
              key={e.school}
              item={{ title: e.degree, org: e.school, period: e.period, detail: e.detail }}
            />
          ))}
        </ol>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Achievements" title="Highlights & recognitions" />
        <ul className="grid gap-3 md:grid-cols-2">
          {achievements.map((a) => (
            <li
              key={a}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 text-sm text-muted-foreground"
            >
              <Trophy className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
