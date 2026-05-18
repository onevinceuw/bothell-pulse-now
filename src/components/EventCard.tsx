import type { PulseEvent } from "@/data/events";
import { Calendar, Clock, MapPin } from "lucide-react";

const categoryColor: Record<string, string> = {
  "Food & Drink": "bg-cedar/15 text-cedar",
  "Live Music": "bg-accent/20 text-accent-foreground",
  Trivia: "bg-river/15 text-river",
  "Pop Up": "bg-moss/15 text-moss",
  Civic: "bg-primary/10 text-primary",
  Campus: "bg-river/15 text-river",
  Family: "bg-moss/15 text-moss",
  Business: "bg-cedar/15 text-cedar",
};

function getSourceLabel(link?: string) {
  if (!link) return "Excel demo row";
  if (link.includes("bothellkenmorechamber.org")) return "Chamber";
  if (link.includes("kcls.bibliocommons.com")) return "KCLS";
  if (link.includes("mcmenamins.com")) return "McMenamins";
  if (link.includes("findkenmore.org")) return "Find Kenmore";
  if (link.includes("kenmorewa.gov")) return "City of Kenmore";
  if (link.includes("thecottagebothell.com")) return "The Cottage";
  if (link.includes("events12.com")) return "Events12";
  if (link.includes("cityoflfp.gov")) return "City/Regional";
  return "Source row";
}

export function EventCard({ event, compact = false }: { event: PulseEvent; compact?: boolean }) {
  const dateLabel = new Date(event.date + "T12:00:00").toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-card p-4 transition hover:border-primary/40 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold leading-snug text-card-foreground">
          {event.name}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${categoryColor[event.category] ?? "bg-secondary text-secondary-foreground"}`}
        >
          {event.category}
        </span>
      </div>
      <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          {dateLabel}
        </div>
        <div className="flex items-center gap-1">
          <Clock size={12} />
          {event.time}
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={12} />
          {event.location}
        </div>
      </dl>
      {!compact && <p className="mt-3 text-sm text-foreground/80">{event.description}</p>}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs font-medium text-foreground/70">{getSourceLabel(event.link)}</span>
        {event.link ? (
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-3 py-1 text-xs font-medium text-foreground hover:bg-secondary"
          >
            Source
          </a>
        ) : (
          <button className="rounded-md border border-border px-3 py-1 text-xs font-medium text-foreground hover:bg-secondary">
            Source
          </button>
        )}
      </div>
    </article>
  );
}
