import { ArrowUpRight, Github } from "lucide-react";

interface Props {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  featured?: boolean;
}

export function ProjectCard({ name, tagline, description, tech, live, github, featured }: Props) {
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/50 hover:glow-ring ${
        featured ? "md:p-7" : ""
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-gradient">{tagline}</p>
          <h3 className="mt-1 text-xl font-semibold">{name}</h3>
        </div>
        {featured && (
          <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
            Featured
          </span>
        )}
      </div>
      <p className="flex-1 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Live <ArrowUpRight className="size-3.5" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-3.5" /> Code
          </a>
        )}
      </div>
    </article>
  );
}
