import { createFileRoute } from "@tanstack/react-router";
import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { MapPin, Coffee, Utensils, Beer } from "lucide-react";

export const Route = createFileRoute("/hotel-guide")({
  head: () => ({
    meta: [
      { title: "Hotel Quick Guide — Bothell Local Pulse" },
      { name: "description", content: "A quick reference for hotel staff and guests in Bothell — what's open tonight, events in the next 48 hours, and staff picks." },
    ],
  }),
  component: HotelPage,
});

const openTonight = [
  { name: "Amaro Bistro", note: "Open till 10pm · live acoustic 6:30", icon: Utensils },
  { name: "Hop & Hound Pub", note: "Open till midnight · trivia at 8", icon: Beer },
  { name: "Riverwalk Coffee", note: "Open till 9pm · quiet seating", icon: Coffee },
  { name: "Vinason Pho & Grill", note: "Open till 9pm · pho & banh mi", icon: Utensils },
];

const staffPicks = [
  "10-min walk: Sammamish River Trail loop from downtown.",
  "Best quick dinner near hotels: Amaro or Vinason Pho.",
  "After 9pm: Hop & Hound for a pint, McMenamins for a nightcap.",
  "Rainy day: McMenamins soaking pool (book ahead).",
];

function HotelPage() {
  const next48 = events.filter((e) => e.when === "today" || e.when === "tonight").slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">For hotel staff & guests</div>
      <h1 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Hotel Quick Guide</h1>
      <p className="mt-2 max-w-2xl text-foreground/80">
        Print-friendly answers to "what's open?" and "what's on tonight?" — designed for front-desk recommendations.
      </p>

      <section className="mt-8">
        <h2 className="font-display text-xl font-bold">Open tonight</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {openTonight.map((o) => {
            const Icon = o.icon;
            return (
              <li key={o.name} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                <Icon size={18} className="mt-0.5 text-primary" />
                <div>
                  <div className="font-semibold">{o.name}</div>
                  <div className="text-sm text-muted-foreground">{o.note}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-bold">Next 48 hours</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {next48.map((e) => <EventCard key={e.id} event={e} compact />)}
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-sm font-semibold"><MapPin size={16} className="text-primary" /> Downtown directions</div>
          <p className="mt-2 text-sm text-foreground/80">
            From most Bothell hotels, downtown Main Street is a 5–10 minute drive or a short rideshare.
            Park free on Bothell Way side streets after 6pm.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-sm font-semibold">Staff picks</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
            {staffPicks.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>

      <div className="mt-8 rounded-lg border border-dashed border-border bg-secondary/40 p-5 text-sm">
        Planning a longer stay or full trip?{" "}
        <a href="https://beginatbothell.com" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">
          Begin at Bothell
        </a>{" "}
        has stays, itineraries, and seasonal trip-planning.
      </div>
    </div>
  );
}