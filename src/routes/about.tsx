import { createFileRoute, Link } from "@tanstack/react-router";

const mainStreetImage =
  "https://upload.wikimedia.org/wikipedia/commons/b/bf/Main_Street_eastbound_from_101st_Avenue_in_Bothell%2C_WA%2C_2019.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bothell Local Pulse" },
      {
        name: "description",
        content:
          "Bothell Local Pulse is a community-run guide to what's happening in Bothell, WA — complementing Begin at Bothell with smaller, more frequent local happenings.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">About</div>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">
            A practical weekly pulse for Bothell.
          </h1>
          <p className="mt-4 text-lg leading-8 text-foreground/85">
            Bothell Local Pulse is a small local guide for what is happening now, this week, and
            this weekend. It gives residents, hotel staff, students, visitors, and local businesses
            one quick place to scan current activity.
          </p>
          <p className="mt-4 leading-7 text-foreground/80">
            For hotels, the point is guest support, not a promise of new bookings. A future Chamber
            version could give participating hotels QR codes, quick recommendation pages, and simple
            usage reports that show guests are using local visitor resources.
          </p>
          <p className="mt-4 leading-7 text-foreground/80">
            The site complements{" "}
            <a
              href="https://beginatbothell.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary underline underline-offset-4"
            >
              Begin at Bothell
            </a>
            , which already helps people plan a broader visit. This project focuses on smaller, more
            frequent happenings like live music, library programs, Chamber events, pop ups, city
            meetings, and weekend markets.
          </p>
        </div>

        <figure className="overflow-hidden rounded-lg border border-border bg-card">
          <img
            src={mainStreetImage}
            alt="Main Street in Bothell, Washington"
            width={1600}
            height={1067}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-xs leading-5 text-muted-foreground">
            Photo: Main Street eastbound from 101st Avenue in Bothell, WA, 2019 by SounderBruce, via
            Wikimedia Commons, CC BY-SA 4.0.
          </figcaption>
        </figure>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-lg border border-border bg-card p-5">
          <h2 className="font-display text-xl font-bold">Who it's for</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/80">
            <li>Bothell residents looking for something nearby this week.</li>
            <li>Hotel staff who need fast recommendations for guests.</li>
            <li>UW Bothell students and business travelers looking for plans.</li>
            <li>Local businesses and Chamber members sharing updates.</li>
          </ul>
        </section>

        <section className="rounded-lg border border-border bg-card p-5">
          <h2 className="font-display text-xl font-bold">How it works</h2>
          <p className="mt-3 text-sm leading-6 text-foreground/80">
            Local events can be added through the{" "}
            <Link to="/submit" className="font-semibold text-primary underline underline-offset-4">
              submit page
            </Link>
            . For this demo, the event cards are hard coded from a spreadsheet so the Chamber can
            see how a real weekly guide could look before connecting a live data source.
          </p>
          <p className="mt-3 text-sm leading-6 text-foreground/80">
            A future version could send a short{" "}
            <Link
              to="/newsletter"
              className="font-semibold text-primary underline underline-offset-4"
            >
              weekly digest
            </Link>{" "}
            with the best upcoming events and local notes.
          </p>
        </section>

        <section className="rounded-lg border border-border bg-card p-5 md:col-span-2">
          <h2 className="font-display text-xl font-bold">How it supports hotel tax value</h2>
          <p className="mt-3 text-sm leading-6 text-foreground/80">
            Hotels shouldn't have to judge the Chamber only by feel. A live version could report
            hotel QR scans, guide views, event clicks, and common guest interests so the Chamber can
            show how visitor resources are being used by people during their stay.
          </p>
        </section>
      </div>

      <div className="mt-6 rounded-lg border border-dashed border-border bg-secondary/40 p-5 text-sm leading-6 text-foreground/80">
        Begin at Bothell helps people plan a visit. Bothell Local Pulse helps people know what is
        happening right now.
      </div>
    </div>
  );
}
