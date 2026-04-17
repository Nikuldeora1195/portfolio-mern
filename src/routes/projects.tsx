import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nikul Kumar" },
      {
        name: "description",
        content:
          "Selected projects: LearnMax MERN e-learning platform, RAG-based research assistant, AI Career Roadmap Generator, TechGenz site, Netflix EDA, and more.",
      },
      { property: "og:title", content: "Projects — Nikul Kumar" },
      {
        property: "og:description",
        content: "MERN, GenAI, and data projects with live links and source code.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of MERN, GenAI, and data projects — from production e-learning platforms to RAG research assistants."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
}
