import { createFileRoute } from "@tanstack/react-router";
import { businessNotes } from "@/data/events";
import { useDemoMode } from "@/hooks/use-demo-mode";

export const Route = createFileRoute("/business-notes")({
  head: () => ({
    meta: [
      { title: "Business Notes — Bothell Local Pulse" },
      {
        name: "description",
        content:
          "Short updates from Bothell businesses: new hours, weekly specials, pop-ups, live music, food trucks, and Chamber spotlights.",
      },
    ],
  }),
  component: NotesPage,
});

function NotesPage() {
  const mode = useDemoMode();
  const isVisitorMode = mode === "visitor";

  return (
    <div
      className={
        isVisitorMode ? "mx-auto max-w-7xl px-5 py-10 lg:px-8" : "mx-auto max-w-4xl px-4 py-8"
      }
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">Local</div>
      <h1
        className={
          isVisitorMode
            ? "mt-1 font-display text-5xl font-bold"
            : "mt-1 font-display text-3xl font-bold sm:text-4xl"
        }
      >
        {isVisitorMode ? "Local highlights" : "Business notes"}
      </h1>
      <p
        className={
          isVisitorMode
            ? "mt-3 max-w-3xl text-xl leading-8 text-foreground/80"
            : "mt-2 max-w-xl text-foreground/80"
        }
      >
        Quick updates from neighborhood businesses — new hours, specials, pop-ups, live music, and
        Chamber spotlights.
      </p>
      <div
        className={
          isVisitorMode
            ? "mt-6 rounded-xl border border-accent/40 bg-accent/10 p-6 text-base leading-7"
            : "mt-5 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm leading-6"
        }
      >
        <div className={isVisitorMode ? "font-display text-2xl font-bold" : "font-semibold"}>
          Future sponsored visibility
        </div>
        <p className="mt-1 text-foreground/80">
          A live version could include clearly labeled Chamber member spotlights or sponsor notes.
          Regular listings would still be curated for usefulness so the page doesn't feel pay to
          play.
        </p>
      </div>
      <ul className={isVisitorMode ? "mt-8 grid gap-5 md:grid-cols-2" : "mt-6 space-y-3"}>
        {businessNotes.map((n) => (
          <li
            key={n.id}
            className={
              isVisitorMode
                ? "rounded-xl border border-border bg-card p-6"
                : "flex flex-col gap-2 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
            }
          >
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={
                    isVisitorMode
                      ? "rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                      : "rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                  }
                >
                  {n.tag}
                </span>
                <span className="text-xs text-muted-foreground">{n.posted}</span>
              </div>
              <div
                className={
                  isVisitorMode ? "mt-3 font-display text-2xl font-bold" : "mt-1 font-semibold"
                }
              >
                {n.business}
              </div>
              <p
                className={
                  isVisitorMode
                    ? "mt-2 text-base leading-7 text-foreground/80"
                    : "text-sm text-foreground/80"
                }
              >
                {n.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-lg border border-dashed border-border bg-secondary/40 p-5 text-sm">
        Local business?{" "}
        <a className="font-semibold text-primary hover:underline" href="/submit">
          Post a note
        </a>{" "}
        — takes a minute, no login.
      </div>
    </div>
  );
}
