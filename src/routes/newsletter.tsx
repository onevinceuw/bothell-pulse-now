import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Weekly Digest — Bothell Local Pulse" },
      { name: "description", content: "One short email each Friday: the weekend's top happenings in Bothell, a business note, a community reminder, and a sponsor spot." },
    ],
  }),
  component: NewsletterPage,
});

function NewsletterPage() {
  const [done, setDone] = useState(false);
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">Friday digest</div>
      <h1 className="mt-1 font-display text-3xl font-bold sm:text-4xl">The weekly Bothell pulse</h1>
      <p className="mt-2 text-foreground/80">
        One email each Friday morning. Quick to read, easy to forward, no spam.
      </p>

      <form
        onSubmit={(e) => { e.preventDefault(); setDone(true); }}
        className="mt-6 rounded-xl border border-border bg-card p-5"
      >
        {done ? (
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 text-moss" />
            <div>
              <div className="font-semibold">You're on the list.</div>
              <div className="text-sm text-muted-foreground">Check your inbox for a quick confirmation.</div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                required type="email" maxLength={120}
                placeholder="you@example.com"
                className="w-full rounded-md border border-input bg-background py-2.5 pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Get the digest
            </button>
          </div>
        )}
      </form>

      <section className="mt-10">
        <h2 className="font-display text-xl font-bold">What's inside a typical issue</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
          <div className="border-b border-border bg-secondary/50 px-5 py-3 text-sm font-semibold">
            Sample · Friday, May 16
          </div>
          <div className="divide-y divide-border">
            {[
              { eyebrow: "Top happenings", body: "Bluegrass Jam · Food Truck Friday · State of the City · Cedar Makers Pop Up" },
              { eyebrow: "Business note", body: "Cedar & Salt Bakery is now open Sundays — cardamom buns out by 9am." },
              { eyebrow: "Community reminder", body: "Sammamish River Trail cleanup volunteers needed, Saturday 9am." },
              { eyebrow: "Sponsor spot", body: "This week's local sponsor: Northshore Cycles — free tune-up clinic Saturday." },
            ].map((row) => (
              <div key={row.eyebrow} className="px-5 py-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">{row.eyebrow}</div>
                <div className="mt-0.5 text-sm text-foreground/85">{row.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}