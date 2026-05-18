import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export type DemoMode = "web" | "visitor";

const modeKey = "bothell-local-pulse-mode";

function getStoredMode(): DemoMode {
  if (typeof window === "undefined") return "web";
  return window.localStorage.getItem(modeKey) === "visitor" ? "visitor" : "web";
}

function getRequestedMode(pathname: string, href?: string): DemoMode | undefined {
  if (pathname === "/visitor-center") return "visitor";

  const query =
    href?.split("?")[1]?.split("#")[0] ??
    (typeof window === "undefined" ? "" : window.location.search.replace(/^\?/, ""));
  const params = new URLSearchParams(query);
  const mode = params.get("mode");
  if (mode === "visitor") return "visitor";
  if (mode === "web") return "web";
}

export function setDemoMode(mode: DemoMode) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(modeKey, mode);
  window.dispatchEvent(new CustomEvent("bothell-demo-mode-change", { detail: mode }));
}

export function useDemoMode() {
  const location = useLocation();
  const [mode, setMode] = useState<DemoMode>(
    () => getRequestedMode(location.pathname, location.href) ?? getStoredMode(),
  );

  useEffect(() => {
    const requestedMode = getRequestedMode(location.pathname, location.href);
    if (requestedMode) {
      setDemoMode(requestedMode);
      setMode(requestedMode);
      return;
    }

    setMode(getStoredMode());
  }, [location.href, location.pathname]);

  useEffect(() => {
    function handleModeChange(event: Event) {
      const nextMode = (event as CustomEvent<DemoMode>).detail;
      setMode(nextMode);
    }

    function handleStorageChange() {
      setMode(getStoredMode());
    }

    window.addEventListener("bothell-demo-mode-change", handleModeChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("bothell-demo-mode-change", handleModeChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return mode;
}
