import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories } from "@/data/events";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/submit")({
  head: () => ({
    meta: [
      { title: "Submit a happening — Bothell Local Pulse" },
      { name: "description", content: "Share an event, pop-up, special, or community note happening in Bothell. No login required." },
    ],
  }),
  component: SubmitPage,
});

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      {hint && <span className="ml-2 text-xs text-muted-foreground">{hint}</span>}
      <div className="mt-1">{children}</div>
    </label>
  );
}

const inputCls = "w-full rounded-md border border-input bg-card px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function SubmitPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">Submit</div>
      <h1 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Share a happening</h1>
      <p className="mt-2 text-foreground/80">
        Event, pop-up, special, or community note. Volunteers review submissions and post them within a day. No account needed.
      </p>

      {sent ? (
        <div className="mt-8 rounded-lg border border-moss/40 bg-moss/10 p-6 text-center">
          <CheckCircle2 className="mx-auto text-moss" />
          <h2 className="mt-2 font-display text-xl font-bold">Thanks — got it.</h2>
          <p className="mt-1 text-sm text-foreground/80">A volunteer will review and publish within 24 hours. You'll get a confirmation email.</p>
          <button onClick={() => setSent(false)} className="mt-4 text-sm font-medium text-primary hover:underline">Submit another</button>
        </div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mt-6 grid gap-4 rounded-lg border border-border bg-card p-5"
        >
          <Field label="Event name"><input required maxLength={120} className={inputCls} placeholder="Food Truck Friday" /></Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Date"><input required type="date" className={inputCls} /></Field>
            <Field label="Time"><input required className={inputCls} placeholder="6:30 PM" /></Field>
          </div>
          <Field label="Location"><input required maxLength={160} className={inputCls} placeholder="Main Street courtyard" /></Field>
          <Field label="Host / business"><input required maxLength={120} className={inputCls} placeholder="Cedar Makers Co-op" /></Field>
          <Field label="Category">
            <select required className={inputCls} defaultValue="">
              <option value="" disabled>Choose one</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Short description" hint="2–3 sentences">
            <textarea required maxLength={500} rows={4} className={inputCls} placeholder="What is it, who's it for, and one detail people should know." />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Cost" hint="optional"><input maxLength={60} className={inputCls} placeholder="Free, $5, varies" /></Field>
            <Field label="Link" hint="optional"><input type="url" className={inputCls} placeholder="https://" /></Field>
          </div>
          <Field label="Contact email" hint="not published">
            <input required type="email" maxLength={120} className={inputCls} placeholder="you@example.com" />
          </Field>
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Submit happening
          </button>
        </form>
      )}
    </div>
  );
}