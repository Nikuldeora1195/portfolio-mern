import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile, stats, projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import portrait from "@/assets/pfp image.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikul Kumar — Full Stack Developer (MERN) · Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Nikul Kumar — MERN full-stack developer, GenAI builder, and CSE student building production web apps and data tools.",
      },
      { property: "og:title", content: "Nikul Kumar — Full Stack Developer (MERN)" },
      {
        property: "og:description",
        content: "MERN, GenAI, and data — explore projects, experience, and certifications.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="reveal">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <Sparkles className="size-3 text-primary" />
                <span className="font-mono">{profile.role}</span>
              </div>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Hi, I'm <span className="text-gradient">Nikul Kumar</span>.
                <br />
                I build for the web.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                {profile.tagline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View Projects <ArrowRight className="size-4" />
                </Link>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                >
                  <Download className="size-4" /> Download Resume
                </a>
                <div className="ml-2 flex items-center gap-1">
                  <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
                    <Mail className="size-4" />
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
                    <Github className="size-4" />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
                    <Linkedin className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="reveal relative mx-auto hidden w-full md:block md:max-w-none">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-accent opacity-30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-2xl">
                <img
                  src={portrait}
                  alt="Nikul Kumar — Full Stack Developer"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-6">
                <p className="font-display text-2xl font-bold text-gradient md:text-3xl">{s.value}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured projects"
              description="A handful of things I've built recently across MERN, GenAI, and data."
            />
            <Link
              to="/projects"
              className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
            >
              All projects <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>
      {/* Explore Pages */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Navigation"
            title="Explore everything"
            description="Quick links to all sections of my portfolio."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              { path: "/about", label: "About Me", desc: "My journey" },
              { path: "/skills", label: "Skills", desc: "What I know" },
              { path: "/experience", label: "Experience", desc: "Where I've worked" },
              { path: "/projects", label: "Projects", desc: "What I've built" },
              { path: "/contact", label: "Contact", desc: "Get in touch" },
            ].map((route) => (
              <Link
                key={route.path}
                to={route.path as any}
                className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border/60 bg-card p-6 text-center transition-all hover:border-primary/50 hover:bg-muted/50"
              >
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{route.label}</div>
                <div className="text-xs text-muted-foreground">{route.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Let's build something <span className="text-gradient">great together</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to internships, freelance MERN projects, and collaborative GenAI builds.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
