import { createFileRoute, Link } from "@tanstack/react-router";
import cafeImg from "@/assets/cafe.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bothell Local Pulse" },
      { name: "description", content: "Bothell Local Pulse is a community-run guide to what's happening in Bothell, WA — complementing Begin at Bothell with smaller, more frequent local happenings." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">About</div>
      <h1 className="mt-1 font-display text-3xl font-bold sm:text-4xl">A neighborhood pulse, updated often.</h1>

      <img src={cafeImg} alt="A cozy local cafe in Bothell" width={1200} height={800} loading="lazy" className="mt-6 w-full rounded-xl object-cover" />

      <div className="prose prose-neutral mt-6 max-w-none text-foreground/85">
        <p className="text-lg leading-relaxed">
          <strong>Bothell Local Pulse</strong> is a small, community-run guide for everything happening
          in Bothell, Washington — tonight, this weekend, and the small things in between.
        </p>
        <p>
          It exists to complement{" "}
          <a href="https://beginatbothell.com" target="_blank" rel="noreferrer" className="text-primary underline">
            Begin at Bothell
          </a>
          , which does a great job helping people plan a visit. We focus on the rhythm of the
          week: the bluegrass jam tonight, the food trucks on Friday, the pop-up market on
          Saturday, the Chamber spotlight on Tuesday.
        </p>
        <h2 className="font-display">Who it's for</h2>
        <ul>
          <li>Bothell residents looking for something to do this week.</li>
          <li>Hotel staff who need a quick, current answer for guests.</li>
          <li>UW Bothell students and business travelers in town tonight.</li>
          <li>Local businesses and Chamber members sharing updates.</li>
        </ul>
        <h2 className="font-display">How it works</h2>
        <p>
          Anyone can <Link to="/submit" className="text-primary underline">submit a happening</Link>{" "}
          — no login needed. Volunteers review and post within a day. Each Friday morning,
          we send a short <Link to="/newsletter" className="text-primary underline">digest</Link>{" "}
          with the weekend's best.
        </p>
        <p className="text-sm text-muted-foreground">
          Begin at Bothell helps people <em>plan a visit</em>. Bothell Local Pulse helps people
          know what is happening <em>right now</em>.
        </p>
      </div>
    </div>
  );
}