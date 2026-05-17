import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { events, categories, type Category } from "@/data/events";
import { EventCard } from "@/components/EventCard";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events in Bothell — Bothell Local Pulse" },
      { name: "description", content: "Agenda of upcoming events in Bothell: food & drink, live music, trivia, pop ups, civic, campus, family, and business." },
      { property: "og:title", content: "Events in Bothell" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [active, setActive] = useState<Category | "All">("All");
  const filtered = active === "All" ? events : events.filter((e) => e.category === active);
  const sorted = [...filtered].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">Agenda</div>
      <h1 className="mt-1 font-display text-3xl font-bold sm:text-4xl">All events</h1>
      <p className="mt-2 max-w-xl text-foreground/80">Filter by what you're in the mood for.</p>

      <div className="mt-5 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 sm:flex-wrap">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground/80 hover:bg-secondary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((e) => <EventCard key={e.id} event={e} />)}
      </div>

      {sorted.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">Nothing in that category yet — try another filter.</p>
      )}
    </div>
  );
}