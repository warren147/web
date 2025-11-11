"use client";

import { useTheme } from "@/components/ThemeProvider";

export function TopBar() {
  const { theme, toggleTheme } = useTheme();
  const isBright = theme === "bright";

  return (
    <header className="sticky top-0 z-50 border-b border-text-primary/10 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-3 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-text-muted sm:px-4 lg:px-6">
        <span className="font-display text-[0.8rem] text-text-primary tracking-[0.4em]">
          Bo-Wei Chang
        </span>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1 text-[0.75rem] tracking-[0.35em] text-text-muted sm:flex-row sm:items-center sm:gap-6">
            <span>CS+DS @ UC Berkeley</span>
            <span>San Francisco, CA</span>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isBright ? "dark" : "bright"} mode`}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
              isBright
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            <span className="sr-only">
              Toggle to {isBright ? "dark" : "bright"} mode
            </span>
            {isBright ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}
