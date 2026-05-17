import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="font-display text-xl font-bold">Bothell Local Pulse</div>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            A community-run pulse of what's happening in Bothell, WA — updated often, made for locals,
            students, hotel guests, and anyone in town tonight.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Planning a full Bothell visit? Head to{" "}
            <a href="https://beginatbothell.com" className="underline hover:text-foreground" target="_blank" rel="noreferrer">
              Begin at Bothell
            </a>{" "}
            for trip planning, stays, and itineraries.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Browse</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">This Week</Link></li>
            <li><Link to="/events" className="hover:text-foreground">Events</Link></li>
            <li><Link to="/business-notes" className="hover:text-foreground">Business Notes</Link></li>
            <li><Link to="/hotel-guide" className="hover:text-foreground">Hotel Guide</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Take part</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/submit" className="hover:text-foreground">Submit a happening</Link></li>
            <li><Link to="/newsletter" className="hover:text-foreground">Weekly digest</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bothell Local Pulse · Made with care in the Pacific Northwest
      </div>
    </footer>
  );
}