import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "This Week" },
  { to: "/events", label: "Events" },
  { to: "/business-notes", label: "Business Notes" },
  { to: "/hotel-guide", label: "Hotel Guide" },
  { to: "/submit", label: "Submit" },
  { to: "/newsletter", label: "Newsletter" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
          <span className="font-display text-lg font-bold tracking-tight">
            Bothell <span className="text-primary">Local Pulse</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-secondary text-primary" }}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/70"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-border p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-2 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-secondary text-primary" }}
                className="rounded-md px-3 py-2.5 text-sm font-medium"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}