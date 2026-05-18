import { createFileRoute } from "@tanstack/react-router";
import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { useDemoMode } from "@/hooks/use-demo-mode";
import { BarChart3, MapPin, QrCode } from "lucide-react";

export const Route = createFileRoute("/hotel-guide")({
  head: () => ({
    meta: [
      { title: "Hotel Quick Guide — Bothell Local Pulse" },
      {
        name: "description",
        content:
          "A quick reference for hotel staff and guests in Bothell — what's open tonight, events in the next 48 hours, and staff picks.",
      },
    ],
  }),
  component: HotelPage,
});

const staffPicks = [
  "May 17: BBQ and Beer Pairing at Postdoc Brewing in Kenmore.",
  "May 17 and May 24: Bluegrass Jam and Concert at Copperworks Distilling Kenmore.",
  "May 20 and May 21: Food and drink listings at The Cottage in Bothell.",
  "May 23: Making Local Market at the Bothell City Hall parking lot.",
];

function HotelPage() {
  const mode = useDemoMode();
  const isVisitorMode = mode === "visitor";
  const next48 = events.filter((e) => e.date >= "2026-05-17" && e.date <= "2026-05-19").slice(0, 6);

  return (
    <div
      className={
        isVisitorMode ? "mx-auto max-w-7xl px-5 py-10 lg:px-8" : "mx-auto max-w-5xl px-4 py-8"
      }
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">
        For hotel staff & guests
      </div>
      <h1
        className={
          isVisitorMode
            ? "mt-1 font-display text-5xl font-bold"
            : "mt-1 font-display text-3xl font-bold sm:text-4xl"
        }
      >
        {isVisitorMode ? "Near hotels: quick guest answers" : "Hotel Quick Guide"}
      </h1>
      <p
        className={
          isVisitorMode
            ? "mt-3 max-w-3xl text-xl leading-8 text-foreground/80"
            : "mt-2 max-w-2xl text-foreground/80"
        }
      >
        A guest service tool hotels can point to when visitors ask what is happening nearby. It
        helps the Chamber show visible lodging tax value without promising to drive bookings.
      </p>

      <section
        className={
          isVisitorMode ? "mt-8 grid gap-5 lg:grid-cols-3" : "mt-6 grid gap-4 md:grid-cols-3"
        }
      >
        <div className="rounded-lg border border-border bg-card p-5">
          <QrCode size={18} className="text-primary" />
          <h2 className="mt-3 font-display text-lg font-bold">QR ready</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            A participating hotel could link guests here from a lobby sign, room card, or prearrival
            message.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <BarChart3 size={18} className="text-primary" />
          <h2 className="mt-3 font-display text-lg font-bold">Trackable value</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            Views, clicks, and QR usage can help show whether hotel guests are using Chamber visitor
            resources.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <MapPin size={18} className="text-primary" />
          <h2 className="mt-3 font-display text-lg font-bold">Local spending path</h2>
          <p className="mt-2 text-sm leading-6 text-foreground/80">
            The guide points guests toward nearby events, Main Street, and local businesses during
            their stay.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2
          className={
            isVisitorMode ? "font-display text-3xl font-bold" : "font-display text-xl font-bold"
          }
        >
          Next 48 hours from demo data
        </h2>
        <div
          className={
            isVisitorMode
              ? "mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
              : "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {next48.map((e) => (
            <EventCard key={e.id} event={e} compact={!isVisitorMode} />
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <MapPin size={16} className="text-primary" /> Downtown directions
          </div>
          <p className="mt-2 text-sm text-foreground/80">
            From most Bothell hotels, downtown Main Street is a 5–10 minute drive or a short
            rideshare. Park free on Bothell Way side streets after 6pm.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-sm font-semibold">Staff picks</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
            {staffPicks.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-border bg-card p-5">
        <h2 className="font-display text-xl font-bold">Pilot metrics hotels could see</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Hotel QR scans",
            "Guide page views",
            "Event source clicks",
            "Guest interest themes",
          ].map((metric) => (
            <div key={metric} className="rounded-md bg-secondary/50 p-3 text-sm font-medium">
              {metric}
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm leading-6 text-foreground/80">
          The goal isn't to make the Chamber responsible for hotel demand. The goal is to make the
          visitor support value more visible to hotels that help fund local tourism work.
        </p>
      </section>

      <div className="mt-8 rounded-lg border border-dashed border-border bg-secondary/40 p-5 text-sm">
        Planning a longer stay or full trip?{" "}
        <a
          href="https://beginatbothell.com"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          Begin at Bothell
        </a>{" "}
        has stays, itineraries, and seasonal trip-planning.
      </div>
    </div>
  );
}
