import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { events, businessNotes } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import heroImg from "@/assets/bothell-downtown.jpg";
import { ArrowRight, Building2, Sparkles } from "lucide-react";

const foodDrinkImage =
  "https://beginatbothell.com/wp-content/uploads/2019/03/caffe-ladro-coffee-shop-begin-at-bothell.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "This Week in Bothell — Bothell Local Pulse" },
      {
        name: "description",
        content:
          "What's happening in Bothell today, tonight, and this week. A local bulletin for events, civic updates, food and drink, pop ups, and community notes.",
      },
      { property: "og:title", content: "This Week in Bothell" },
      { property: "og:description", content: "Today, tonight, and this weekend in Bothell." },
    ],
  }),
  component: Index,
});

function Section({
  id,
  eyebrow,
  title,
  link,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  link?: { to: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </div>
          <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{title}</h2>
        </div>
        {link && (
          <Link
            to={link.to}
            className="hidden text-sm font-medium text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1"
          >
            {link.label} <ArrowRight size={14} />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

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

function Index() {
  const sortedEvents = [...events].sort(
    (a, b) => a.date.localeCompare(b.date) || getTimeSortValue(a.time) - getTimeSortValue(b.time),
  );
  const today = sortedEvents.filter((e) => e.date === "2026-05-17" && e.when !== "tonight");
  const tonight = sortedEvents.filter((e) => e.when === "tonight");
  const nextUp = sortedEvents.filter((e) => e.date >= "2026-05-18" && e.date <= "2026-05-21");
  const weekend = sortedEvents.filter((e) => e.date >= "2026-05-22" && e.date <= "2026-05-24");
  const foodAndBusiness = sortedEvents.filter(
    (e) =>
      e.date >= "2026-05-17" &&
      (e.category === "Food & Drink" || e.category === "Pop Up" || e.category === "Business"),
  );
  const communityHighlights = sortedEvents.filter(
    (e) => e.date >= "2026-05-17" && (e.category === "Civic" || e.category === "Family"),
  );

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
            <Sparkles size={12} className="text-accent" /> Demo data from May 15-24, 2026
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">
            What's happening in Bothell <span className="text-primary">right now</span>.
          </h1>
          <p className="mt-3 max-w-xl text-base text-foreground/80">
            A local pulse for tonight's plans, this weekend's pop-ups, and the small things
            happening on Main Street. Built to help hotel staff, visitors, and locals find timely
            options without replacing broader trip planning.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href="#today"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              See what's happening today <ArrowRight size={14} />
            </a>
            <Link
              to="/submit"
              className="rounded-md border border-border bg-background/80 px-4 py-2 text-sm font-semibold hover:bg-secondary"
            >
              Submit a happening
            </Link>
            <Link
              to="/hotel-guide"
              className="rounded-md border border-border bg-background/80 px-4 py-2 text-sm font-semibold hover:bg-secondary"
            >
              Hotel quick guide
            </Link>
          </div>
        </div>
      </section>

      <Section
        id="today"
        eyebrow="Today"
        title="Today's pulse"
        link={{ to: "/events", label: "All events" }}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {today.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Tonight" title="Plans for tonight">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tonight.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Coming Up" title="Next up this week">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nextUp.slice(0, 9).map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Weekend Watch" title="Friday through Sunday">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {weekend.slice(0, 9).map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Local Business" title="Food, drink & business highlights">
        <div className="grid gap-4 md:grid-cols-3">
          <figure className="hidden overflow-hidden rounded-lg border border-border bg-card md:block">
            <img
              src={foodDrinkImage}
              alt="Coffee from Caffe Ladro in Bothell"
              width={1200}
              height={800}
              loading="lazy"
              className="h-[calc(100%-3rem)] min-h-80 w-full object-cover"
            />
            <figcaption className="px-3 py-2 text-xs leading-4 text-muted-foreground">
              Photo: Caffe Ladro, via Begin at Bothell's dining guide.
            </figcaption>
          </figure>
          <div className="md:col-span-2 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-accent/40 bg-accent/10 p-4 sm:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                Sponsored local pick
              </div>
              <h3 className="mt-1 font-display text-lg font-bold">A visible member benefit</h3>
              <p className="mt-1 text-sm leading-6 text-foreground/80">
                A future version could reserve one clearly labeled spot for a Chamber member,
                sponsor, or hotel guest recommendation while keeping regular listings curated for
                local usefulness.
              </p>
            </div>
            {foodAndBusiness.slice(0, 6).map((e) => (
              <EventCard key={e.id} event={e} compact />
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Community" title="Civic, family & library highlights">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {communityHighlights.slice(0, 6).map((e) => (
            <EventCard key={e.id} event={e} compact />
          ))}
        </div>
      </Section>

      <Section eyebrow="Hotel Value" title="A guest tool hotels can point to">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-5">
            <Building2 size={18} className="text-primary" />
            <h3 className="mt-3 font-display text-lg font-bold">Front desk answers</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/80">
              Hotel teams can use one quick page when guests ask what is happening tonight or this
              weekend.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <Building2 size={18} className="text-primary" />
            <h3 className="mt-3 font-display text-lg font-bold">Visitor value proof</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/80">
              QR scans, guide views, and event clicks can help the Chamber show hotels that lodging
              tax dollars are supporting visitor experience.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <Building2 size={18} className="text-primary" />
            <h3 className="mt-3 font-display text-lg font-bold">Clear boundary</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/80">
              The Chamber doesn't promise bookings. It gives hotels a practical local guide that can
              make each stay feel better supported.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Sources"
        title="Where this week's listings came from"
        link={{ to: "/business-notes", label: "More notes" }}
      >
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {businessNotes.slice(0, 6).map((n) => (
            <li key={n.id} className="rounded-lg border border-border bg-card p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
                  {n.tag}
                </span>
                <span className="text-muted-foreground">{n.posted}</span>
              </div>
              <div className="mt-1.5 font-semibold">{n.business}</div>
              <p className="text-sm text-foreground/80">{n.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Newsletter + Submit CTA */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-primary p-6 text-primary-foreground">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              Friday digest
            </div>
            <h3 className="mt-1 font-display text-2xl font-bold">Get the weekly digest</h3>
            <p className="mt-2 text-sm opacity-90">
              One short email each Friday: the weekend's best, plus a business note and community
              reminder.
            </p>
            <Link
              to="/newsletter"
              className="mt-4 inline-flex items-center gap-1 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Sign me up <ArrowRight size={14} />
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              Got something happening?
            </div>
            <h3 className="mt-1 font-display text-2xl font-bold">Submit a happening</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Event, pop-up, special, or community note — share it in under a minute. No login
              required.
            </p>
            <Link
              to="/submit"
              className="mt-4 inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Submit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
