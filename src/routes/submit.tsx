import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories } from "@/data/events";
import { useDemoMode } from "@/hooks/use-demo-mode";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/submit")({
  head: () => ({
    meta: [
      { title: "Submit a happening — Bothell Local Pulse" },
      {
        name: "description",
        content:
          "Share an event, pop-up, special, or community note happening in Bothell. No login required.",
      },
    ],
  }),
  component: SubmitPage,
});

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      {hint && <span className="ml-2 text-xs text-muted-foreground">{hint}</span>}
      <div className="mt-1">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-card px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function SubmitPage() {
  const mode = useDemoMode();
  const isVisitorMode = mode === "visitor";
  const [sent, setSent] = useState(false);
  return (
    <div
      className={
        isVisitorMode ? "mx-auto max-w-4xl px-5 py-10 lg:px-8" : "mx-auto max-w-2xl px-4 py-8"
      }
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">Submit</div>
      <h1
        className={
          isVisitorMode
            ? "mt-1 font-display text-5xl font-bold"
            : "mt-1 font-display text-3xl font-bold sm:text-4xl"
        }
      >
        {isVisitorMode ? "Add a local happening" : "Share a happening"}
      </h1>
      <p
        className={
          isVisitorMode
            ? "mt-3 max-w-3xl text-xl leading-8 text-foreground/80"
            : "mt-2 text-foreground/80"
        }
      >
        Event, pop-up, special, or community note. Volunteers review submissions and post them
        within a day. No account needed.
      </p>

      <div
        className={
          isVisitorMode
            ? "mt-6 rounded-xl border border-border bg-secondary/40 p-6 text-base leading-7 text-foreground/80"
            : "mt-5 rounded-lg border border-border bg-secondary/40 p-4 text-sm leading-6 text-foreground/80"
        }
      >
        Basic local submissions should stay simple. A future Chamber version could also offer
        clearly labeled featured placement or newsletter inclusion for members and sponsors.
      </div>

      {sent ? (
        <div className="mt-8 rounded-lg border border-moss/40 bg-moss/10 p-6 text-center">
          <CheckCircle2 className="mx-auto text-moss" />
          <h2 className="mt-2 font-display text-xl font-bold">Thanks — got it.</h2>
          <p className="mt-1 text-sm text-foreground/80">
            A volunteer will review and publish within 24 hours. You'll get a confirmation email.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-4 text-sm font-medium text-primary hover:underline"
          >
            Submit another
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className={
            isVisitorMode
              ? "mt-8 grid gap-5 rounded-xl border border-border bg-card p-6"
              : "mt-6 grid gap-4 rounded-lg border border-border bg-card p-5"
          }
        >
          <Field label="Event name">
            <input required maxLength={120} className={inputCls} placeholder="Food Truck Friday" />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Date">
              <input required type="date" className={inputCls} />
            </Field>
            <Field label="Time">
              <input required className={inputCls} placeholder="6:30 PM" />
            </Field>
          </div>
          <Field label="Location">
            <input
              required
              maxLength={160}
              className={inputCls}
              placeholder="Main Street courtyard"
            />
          </Field>
          <Field label="Host / business">
            <input required maxLength={120} className={inputCls} placeholder="Cedar Makers Co-op" />
          </Field>
          <Field label="Category">
            <select required className={inputCls} defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Short description" hint="2–3 sentences">
            <textarea
              required
              maxLength={500}
              rows={4}
              className={inputCls}
              placeholder="What is it, who's it for, and one detail people should know."
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Cost" hint="optional">
              <input maxLength={60} className={inputCls} placeholder="Free, $5, varies" />
            </Field>
            <Field label="Link" hint="optional">
              <input type="url" className={inputCls} placeholder="https://" />
            </Field>
          </div>
          <Field label="Contact email" hint="not published">
            <input
              required
              type="email"
              maxLength={120}
              className={inputCls}
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Interested in featured placement?" hint="optional">
            <select className={inputCls} defaultValue="">
              <option value="">No preference</option>
              <option value="member">Chamber member spotlight</option>
              <option value="sponsor">Sponsor or newsletter placement</option>
              <option value="hotel">Hotel guest recommendation</option>
            </select>
          </Field>
          <button
            type="submit"
            className={
              isVisitorMode
                ? "mt-2 inline-flex min-h-14 items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
                : "mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            }
          >
            Submit happening
          </button>
        </form>
      )}
    </div>
  );
}
