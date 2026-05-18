import { Link } from "@tanstack/react-router";
import { MonitorSmartphone, Presentation } from "lucide-react";
import { setDemoMode, type DemoMode } from "@/hooks/use-demo-mode";

export function ModeToggle({ mode }: { mode: DemoMode }) {
  return (
    <div
      className="rounded-full border border-border bg-background p-1 shadow-sm"
      aria-label="Site mode"
    >
      <div className="grid grid-cols-2 gap-1">
        <Link
          to="/"
          search={{ mode: "web" }}
          onClick={() => setDemoMode("web")}
          className={[
            "inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-semibold transition sm:text-sm",
            mode === "web"
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:bg-secondary hover:text-foreground",
          ].join(" ")}
        >
          <MonitorSmartphone size={15} /> Web
        </Link>
        <Link
          to="/visitor-center"
          search={{ mode: "visitor" }}
          onClick={() => setDemoMode("visitor")}
          className={[
            "inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-semibold transition sm:text-sm",
            mode === "visitor"
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:bg-secondary hover:text-foreground",
          ].join(" ")}
        >
          <Presentation size={15} /> Visitor
        </Link>
      </div>
    </div>
  );
}
