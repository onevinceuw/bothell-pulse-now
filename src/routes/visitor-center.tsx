import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { events, businessNotes, type PulseEvent } from "@/data/events";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Coffee,
  ExternalLink,
  Hotel,
  MapPin,
  Navigation,
  QrCode,
  Search,
  Sparkles,
  X,
} from "lucide-react";

const visitorCenterAddress = "10031 Main St Ste A, Bothell, WA 98011";

export const Route = createFileRoute("/visitor-center")({
  head: () => ({
    meta: [
      { title: "Visitor Center Mode — Bothell Local Pulse" },
      {
        name: "description",
        content:
          "A touch friendly visitor center entry point for Bothell Local Pulse, built from the same weekly events, hotel guide, and local business updates.",
      },
    ],
  }),
  component: VisitorCenterPage,
});

function getTimeSortValue(time: string) {
  const match = time.match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)/i);
  if (!match) return Number.MAX_SAFE_INTEGER;

  let hours = Number(match[1]);
  const minutes = Number(match[2] ?? 0);
  const meridiem = match[3].toUpperCase();

  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

function KioskTile({
  icon: Icon,
  label,
  detail,
  href,
}: {
  icon: typeof CalendarDays;
  label: string;
  detail: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex min-h-36 flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
          <Icon size={24} />
        </span>
        <ArrowRight
          size={22}
          className="text-muted-foreground transition group-hover:text-primary"
        />
      </div>
      <div>
        <div className="font-display text-2xl font-bold leading-tight">{label}</div>
        <p className="mt-2 text-base leading-6 text-foreground/75">{detail}</p>
      </div>
    </a>
  );
}

function getDirectionsUrl(event: PulseEvent) {
  const params = new URLSearchParams({
    api: "1",
    origin: visitorCenterAddress,
    destination: event.location,
    travelmode: "walking",
  });

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function RoutePreview({ event }: { event: PulseEvent }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-secondary/40 p-5">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="relative aspect-[16/10] min-h-64">
        <svg className="absolute inset-0 z-10 h-full w-full" viewBox="0 0 640 400" role="img">
          <title>Demo route from the visitor center to {event.name}</title>
          <filter id="route-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" floodColor="#0f3f2e" floodOpacity="0.28" stdDeviation="3" />
          </filter>
          <path
            d="M214 284 C282 248 302 204 352 190 S420 170 462 116"
            fill="none"
            filter="url(#route-shadow)"
            stroke="#d09a4a"
            strokeLinecap="round"
            strokeWidth="18"
          />
          <path
            d="M214 284 C282 248 302 204 352 190 S420 170 462 116"
            fill="none"
            stroke="#0f4f38"
            strokeDasharray="12 12"
            strokeLinecap="round"
            strokeWidth="7"
          />
          <circle cx="214" cy="284" r="10" fill="#0f4f38" />
          <circle cx="462" cy="116" r="10" fill="#0f4f38" />
        </svg>

        <div className="absolute bottom-8 left-6 z-20 max-w-56 rounded-xl bg-background p-4 shadow-md">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
            <MapPin size={16} /> Start
          </div>
          <div className="mt-1 text-lg font-bold leading-tight">Visit Bothell Visitor Center</div>
          <div className="mt-1 text-sm leading-5 text-foreground/70">{visitorCenterAddress}</div>
        </div>

        <div className="absolute right-6 top-6 z-20 max-w-56 rounded-xl bg-background p-4 shadow-md">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
            <Navigation size={16} /> Destination
          </div>
          <div className="mt-1 text-lg font-bold leading-tight">{event.name}</div>
          <div className="mt-1 text-sm leading-5 text-foreground/70">{event.location}</div>
        </div>
      </div>
    </div>
  );
}

function EventDetailPanel({ event, onClose }: { event: PulseEvent; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-background/95 p-5 backdrop-blur">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-accent">
              Event details and directions
            </div>
            <h2 className="mt-1 font-display text-3xl font-bold leading-tight">{event.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary/20"
            aria-label="Close event details"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid gap-6 p-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-secondary-foreground">
                {event.category}
              </span>
              <span className="font-semibold text-primary">{event.time}</span>
              {event.cost ? <span className="text-foreground/70">{event.cost}</span> : null}
            </div>

            <div className="mt-5 grid gap-4 text-base leading-7 text-foreground/80">
              <div className="flex gap-3">
                <MapPin size={22} className="mt-1 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Destination</div>
                  <div>{event.location}</div>
                </div>
              </div>
              <p>{event.description}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={getDirectionsUrl(event)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-lg bg-primary px-5 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Open directions <ExternalLink size={18} className="ml-2" />
              </a>
              {event.link ? (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-border bg-card px-5 text-base font-semibold hover:bg-secondary"
                >
                  Event source <ExternalLink size={18} className="ml-2" />
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <RoutePreview event={event} />
            <div className="mt-3 rounded-xl border border-dashed border-border bg-secondary/40 p-4 text-sm leading-6 text-foreground/75">
              Demo map view assumes every route starts from the Visit Bothell Visitor Center. The
              button opens live directions in Google Maps for the selected event location.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TouchEventCard({ event, onSelect }: { event: PulseEvent; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group rounded-xl border border-border bg-card p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20"
    >
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-secondary-foreground">
          {event.category}
        </span>
        <span className="font-semibold text-primary">{event.time}</span>
      </div>
      <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{event.name}</h3>
      <div className="mt-3 flex gap-2 text-base leading-6 text-foreground/75">
        <MapPin size={18} className="mt-1 shrink-0 text-primary" />
        <span>{event.location}</span>
      </div>
      <p className="mt-3 line-clamp-3 text-base leading-7 text-foreground/80">
        {event.description}
      </p>
      <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
        Details and directions <ArrowRight size={16} className="ml-1 transition group-hover:ml-2" />
      </div>
    </button>
  );
}

function VisitorCenterPage() {
  const [selectedEvent, setSelectedEvent] = useState<PulseEvent | null>(null);
  const sortedEvents = [...events].sort(
    (a, b) => a.date.localeCompare(b.date) || getTimeSortValue(a.time) - getTimeSortValue(b.time),
  );
  const today = sortedEvents.filter((event) => event.date === "2026-05-17");
  const weekend = sortedEvents.filter(
    (event) => event.date >= "2026-05-22" && event.date <= "2026-05-24",
  );
  const foodAndDrink = sortedEvents.filter(
    (event) => event.category === "Food & Drink" || event.category === "Pop Up",
  );

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid min-h-[46vh] max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
              <Sparkles size={16} className="text-accent" /> Visit Bothell touchscreen mode
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              What should I do in Bothell right now?
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-primary-foreground/85">
              One shared guide for the visitor center screen, hotel guests, desktop planning, and
              phones. Choose here, then take the guide with you.
            </p>
          </div>
          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5">
            <div className="grid gap-5 sm:grid-cols-[9rem_1fr] sm:items-center">
              <div className="flex aspect-square items-center justify-center rounded-xl border border-primary-foreground/20 bg-primary-foreground text-primary shadow-sm">
                <QrCode size={82} />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Take it with you
                </div>
                <h2 className="mt-1 font-display text-3xl font-bold leading-tight">
                  Scan to open the mobile guide
                </h2>
                <p className="mt-3 text-lg leading-7 text-primary-foreground/85">
                  The touchscreen helps visitors choose. The phone guide helps them keep moving
                  through Bothell.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              <div className="rounded-lg bg-primary-foreground/10 px-3 py-2 text-sm font-semibold">
                Same weekly guide
              </div>
              <div className="rounded-lg bg-primary-foreground/10 px-3 py-2 text-sm font-semibold">
                Hotel friendly
              </div>
              <div className="rounded-lg bg-primary-foreground/10 px-3 py-2 text-sm font-semibold">
                Links to Begin at Bothell
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8" aria-label="Touch choices">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <KioskTile
            icon={CalendarDays}
            label="Happening today"
            detail="See current events and quick local options."
            href="#today"
          />
          <KioskTile
            icon={Coffee}
            label="Food and drink"
            detail="Find pop ups, pairings, markets, and local spots."
            href="#food"
          />
          <KioskTile
            icon={Hotel}
            label="Near hotels"
            detail="Open the quick guide for guests and front desks."
            href="/hotel-guide?mode=visitor"
          />
          <KioskTile
            icon={Building2}
            label="Local highlights"
            detail="See Chamber member visibility and business updates."
            href="/business-notes?mode=visitor"
          />
          <KioskTile
            icon={Search}
            label="Full event guide"
            detail="Browse the complete list in touchscreen mode."
            href="/events?mode=visitor"
          />
          <KioskTile
            icon={ExternalLink}
            label="Plan a full visit"
            detail="Use Begin at Bothell for broader trip planning."
            href="https://beginatbothell.com"
          />
        </div>
      </section>

      <section id="today" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Today</div>
          <h2 className="mt-1 font-display text-4xl font-bold">Start with what is happening now</h2>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {today.slice(0, 4).map((event) => (
            <TouchEventCard key={event.id} event={event} onSelect={() => setSelectedEvent(event)} />
          ))}
        </div>
      </section>

      <section id="food" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-accent">
              Food and local business
            </div>
            <h2 className="mt-1 font-display text-4xl font-bold">
              Point visitors toward local spending
            </h2>
          </div>
          <Link
            to="/submit"
            search={{ mode: "visitor" }}
            className="inline-flex min-h-12 items-center rounded-lg bg-primary px-5 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Submit a happening <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-accent/40 bg-accent/10 p-5">
            <div className="text-sm font-semibold uppercase tracking-wider text-accent">
              Featured local pick
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold">
              A labeled sponsor or member spotlight
            </h3>
            <p className="mt-3 text-base leading-7 text-foreground/80">
              The visitor center screen can make Chamber support visible while keeping regular
              listings useful and clearly curated.
            </p>
          </div>
          {foodAndDrink.slice(0, 2).map((event) => (
            <TouchEventCard key={event.id} event={event} onSelect={() => setSelectedEvent(event)} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-sm font-semibold uppercase tracking-wider text-accent">
              Weekend
            </div>
            <h2 className="mt-1 font-display text-3xl font-bold">Friday through Sunday</h2>
            <div className="mt-4 grid gap-3">
              {weekend.slice(0, 3).map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className="rounded-lg bg-secondary/50 p-4 text-left transition hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary/20"
                >
                  <div className="text-lg font-semibold">{event.name}</div>
                  <div className="mt-1 text-sm text-foreground/70">
                    {event.time} · {event.location}
                  </div>
                  <div className="mt-2 inline-flex items-center text-sm font-semibold text-primary">
                    Details and directions <ArrowRight size={15} className="ml-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-sm font-semibold uppercase tracking-wider text-accent">
              What this proves
            </div>
            <h2 className="mt-1 font-display text-3xl font-bold">One site, three doors</h2>
            <div className="mt-4 grid gap-3 text-base leading-7 text-foreground/80">
              <p>Desktop visitors can browse the full weekly guide.</p>
              <p>Phone visitors can use the same content while they move around Bothell.</p>
              <p>The visitor center screen can turn walk in questions into clear next steps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-xl border border-dashed border-border bg-secondary/40 p-5">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">
            Source notes
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {businessNotes.slice(0, 3).map((note) => (
              <div key={note.id} className="rounded-lg bg-background p-4">
                <div className="text-sm font-semibold text-primary">{note.tag}</div>
                <div className="mt-1 text-lg font-semibold">{note.business}</div>
                <p className="mt-1 text-sm leading-6 text-foreground/75">{note.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedEvent ? (
        <EventDetailPanel event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      ) : null}
    </div>
  );
}
