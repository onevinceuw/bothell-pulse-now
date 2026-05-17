import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { events, businessNotes, communityBoard } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import heroImg from "@/assets/bothell-downtown.jpg";
import foodImg from "@/assets/food-trucks.jpg";
import musicImg from "@/assets/bluegrass.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "This Week in Bothell — Bothell Local Pulse" },
      { name: "description", content: "What's happening in Bothell today, tonight, and this weekend. Live music, food trucks, trivia, pop ups, civic, and campus." },
      { property: "og:title", content: "This Week in Bothell" },
      { property: "og:description", content: "Today, tonight, and this weekend in Bothell." },
    ],
  }),
  component: Index,
});

function Section({ id, eyebrow, title, link, children }: { id?: string; eyebrow: string; title: string; link?: { to: string; label: string }; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">{eyebrow}</div>
          <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{title}</h2>
        </div>
        {link && (
          <Link to={link.to} className="hidden text-sm font-medium text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1">
            {link.label} <ArrowRight size={14} />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

function Index() {
  const today = events.filter((e) => e.when === "today");
  const tonight = events.filter((e) => e.when === "tonight");
  const weekend = events.filter((e) => e.when === "weekend");
  const food = events.filter((e) => e.category === "Food & Drink" || e.category === "Pop Up");
  const music = events.filter((e) => e.category === "Live Music" || e.category === "Trivia");

  return (
    <div>
      {/* Compact intro with background image */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImg}
          alt="Downtown Bothell at dusk"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground/80">
            <Sparkles size={12} className="text-accent" /> Updated this morning · Saturday, May 17
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">
            What's happening in Bothell <span className="text-primary">right now</span>.
          </h1>
          <p className="mt-3 max-w-xl text-base text-foreground/80">
            A local pulse for tonight's plans, this weekend's pop-ups, and the small things happening on Main Street.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="#today" className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              See what's happening today <ArrowRight size={14} />
            </a>
            <Link to="/submit" className="rounded-md border border-border bg-background/80 px-4 py-2 text-sm font-semibold hover:bg-secondary">
              Submit a happening
            </Link>
            <Link to="/hotel-guide" className="rounded-md border border-border bg-background/80 px-4 py-2 text-sm font-semibold hover:bg-secondary">
              Hotel quick guide
            </Link>
          </div>
        </div>
      </section>

      <Section id="today" eyebrow="Today" title="Today in Bothell" link={{ to: "/events", label: "All events" }}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {today.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      </Section>

      <Section eyebrow="Tonight" title="Tonight near downtown">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tonight.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      </Section>

      <Section eyebrow="Weekend" title="This weekend">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {weekend.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      </Section>

      <Section eyebrow="Eat" title="Food trucks & pop ups">
        <div className="grid gap-4 md:grid-cols-3">
          <img src={foodImg} alt="Food trucks lined up on Main Street" width={1200} height={800} loading="lazy" className="hidden h-full w-full rounded-lg object-cover md:block" />
          <div className="md:col-span-2 grid gap-3 sm:grid-cols-2">
            {food.slice(0, 4).map((e) => <EventCard key={e.id} event={e} compact />)}
          </div>
        </div>
      </Section>

      <Section eyebrow="Listen & Play" title="Live music & trivia">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 grid gap-3 sm:grid-cols-2">
            {music.slice(0, 4).map((e) => <EventCard key={e.id} event={e} compact />)}
          </div>
          <img src={musicImg} alt="Live bluegrass jam at dusk" width={1200} height={800} loading="lazy" className="hidden h-full w-full rounded-lg object-cover md:block" />
        </div>
      </Section>

      <Section eyebrow="Local" title="Business notes" link={{ to: "/business-notes", label: "More notes" }}>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {businessNotes.slice(0, 6).map((n) => (
            <li key={n.id} className="rounded-lg border border-border bg-card p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">{n.tag}</span>
                <span className="text-muted-foreground">{n.posted}</span>
              </div>
              <div className="mt-1.5 font-semibold">{n.business}</div>
              <p className="text-sm text-foreground/80">{n.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Neighbors" title="Community board">
        <div className="grid gap-3 md:grid-cols-3">
          {communityBoard.map((p) => (
            <div key={p.id} className="rounded-lg border border-dashed border-border bg-secondary/30 p-4">
              <h3 className="font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-foreground/80">{p.body}</p>
              <div className="mt-2 text-xs text-muted-foreground">— {p.by}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Newsletter + Submit CTA */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-primary p-6 text-primary-foreground">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Friday digest</div>
            <h3 className="mt-1 font-display text-2xl font-bold">Get the weekly digest</h3>
            <p className="mt-2 text-sm opacity-90">One short email each Friday: the weekend's best, plus a business note and community reminder.</p>
            <Link to="/newsletter" className="mt-4 inline-flex items-center gap-1 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90">
              Sign me up <ArrowRight size={14} />
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Got something happening?</div>
            <h3 className="mt-1 font-display text-2xl font-bold">Submit a happening</h3>
            <p className="mt-2 text-sm text-foreground/80">Event, pop-up, special, or community note — share it in under a minute. No login required.</p>
            <Link to="/submit" className="mt-4 inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Submit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
