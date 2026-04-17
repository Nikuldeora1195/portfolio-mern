import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";
import { ArrowUpRight, Github, Globe, Linkedin, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nikul Kumar" },
      {
        name: "description",
        content:
          "Get in touch with Nikul Kumar — email, phone, GitHub, and LinkedIn. Open to internships, freelance MERN projects, and GenAI collaborations.",
      },
      { property: "og:title", content: "Contact — Nikul Kumar" },
      {
        property: "og:description",
        content: "Reach out via email, phone, GitHub, or LinkedIn.",
      },
    ],
  }),
  component: ContactPage,
});

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "nikuldeora1195@gmail.com",
    href: "mailto:nikuldeora1195@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91-7742455123", href: "tel:+917742455123" },
  { icon: Github, label: "GitHub", value: "github.com", href: "https://github.com/" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nikulkumarmali",
    href: "https://linkedin.com/in/nikulkumarmali/",
  },
  { icon: Globe, label: "Portfolio", value: "nikul.dev", href: "#" },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="Open to internships, freelance MERN projects, and collaborative GenAI builds. The fastest way to reach me is email."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/50 hover:glow-ring"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
                <c.icon className="size-5" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-0.5 text-sm font-medium">{c.value}</p>
              </div>
            </div>
            <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border/60 bg-card p-8 text-center">
        <h3 className="text-2xl font-semibold">
          Prefer email? <span className="text-gradient">Drop me a line.</span>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">I usually reply within a day.</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" /> {profile.email}
        </a>
      </div>
    </div>
  );
}
