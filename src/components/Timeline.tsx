interface Item {
  role?: string;
  org: string;
  title?: string;
  period: string;
  detail?: string;
  points?: string[];
}

export function TimelineItem({ item }: { item: Item }) {
  return (
    <li className="relative pl-8">
      <span className="absolute left-0 top-2 size-3 rounded-full bg-gradient-accent ring-4 ring-background" />
      <span className="absolute left-[5px] top-5 h-[calc(100%-0.75rem)] w-px bg-border" />
      <div className="rounded-xl border border-border/60 bg-card p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold">
            {item.role ?? item.title} <span className="text-muted-foreground">· {item.org}</span>
          </h3>
          <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
        </div>
        {item.detail && <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>}
        {item.points && (
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {item.points.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
