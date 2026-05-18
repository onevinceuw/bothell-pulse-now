import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ModeSwitcher";
import { setDemoMode, useDemoMode } from "@/hooks/use-demo-mode";

const webNav = [
  { href: "/", label: "This Week" },
  { href: "/events", label: "Events" },
  { href: "/business-notes", label: "Business Notes" },
  { href: "/hotel-guide", label: "Hotel Guide" },
  { href: "/submit", label: "Submit" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" },
] as const;

const visitorNav = [
  { href: "/visitor-center?mode=visitor", label: "Home" },
  { href: "/visitor-center?mode=visitor#today", label: "Today" },
  { href: "/visitor-center?mode=visitor#food", label: "Food & Drink" },
  { href: "/hotel-guide?mode=visitor", label: "Near Hotels" },
  { href: "/business-notes?mode=visitor", label: "Local Highlights" },
  { href: "/events?mode=visitor", label: "Full Guide" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const mode = useDemoMode();
  const nav = mode === "visitor" ? visitorNav : webNav;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          to={mode === "visitor" ? "/visitor-center" : "/"}
          className="flex min-w-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
          <span className="truncate font-display text-lg font-bold tracking-tight">
            Bothell <span className="text-primary">Local Pulse</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => mode === "visitor" && setDemoMode("visitor")}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/70"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden shrink-0 md:block">
          <ModeToggle mode={mode} />
        </div>
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
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-2 py-2">
            <div className="px-1">
              <ModeToggle mode={mode} />
            </div>
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium"
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
