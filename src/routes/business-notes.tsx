import { createFileRoute } from "@tanstack/react-router";
import { businessNotes } from "@/data/events";

export const Route = createFileRoute("/business-notes")({
  head: () => ({
    meta: [
      { title: "Business Notes — Bothell Local Pulse" },
      { name: "description", content: "Short updates from Bothell businesses: new hours, weekly specials, pop-ups, live music, food trucks, and Chamber spotlights." },
    ],
  }),
  component: NotesPage,
});

function NotesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">Local</div>
      <h1 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Business notes</h1>
      <p className="mt-2 max-w-xl text-foreground/80">
        Quick updates from neighborhood businesses — new hours, specials, pop-ups, live music, and Chamber spotlights.
      </p>
      <ul className="mt-6 space-y-3">
        {businessNotes.map((n) => (
          <li key={n.id} className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">{n.tag}</span>
                <span className="text-xs text-muted-foreground">{n.posted}</span>
              </div>
              <div className="mt-1 font-semibold">{n.business}</div>
              <p className="text-sm text-foreground/80">{n.note}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-lg border border-dashed border-border bg-secondary/40 p-5 text-sm">
        Local business? <a className="font-semibold text-primary hover:underline" href="/submit">Post a note</a> — takes a minute, no login.
      </div>
    </div>
  );
}