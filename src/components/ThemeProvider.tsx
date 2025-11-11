"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Theme = "dark" | "bright";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const TRANSITION_DURATION = 800;

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark";
  }
  const stored = window.localStorage.getItem("theme");
  return stored === "bright" ? "bright" : "dark";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetTheme, setTargetTheme] = useState<Theme>(theme);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(
    () => () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    },
    []
  );

  const toggleTheme = useCallback(() => {
    if (isTransitioning) {
      return;
    }

    const nextTheme = theme === "dark" ? "bright" : "dark";
    setTargetTheme(nextTheme);
    setIsTransitioning(true);

    const halfway = window.setTimeout(() => {
      setTheme(nextTheme);
    }, TRANSITION_DURATION / 2);

    const finish = window.setTimeout(() => {
      setIsTransitioning(false);
      timersRef.current = [];
    }, TRANSITION_DURATION);

    timersRef.current = [halfway, finish];
  }, [isTransitioning, theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
      <ThemeTransitionOverlay active={isTransitioning} targetTheme={targetTheme} />
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

function ThemeTransitionOverlay({
  active,
  targetTheme,
}: {
  active: boolean;
  targetTheme: Theme;
}) {
  const isBright = targetTheme === "bright";

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center"
          style={{
            backgroundColor: isBright ? "#ffffff" : "#000000",
            color: isBright ? "#000000" : "#ffffff",
          }}
        >
          <motion.div
            initial={{ scale: 0.4, rotate: isBright ? -20 : 20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-24 w-24 items-center justify-center text-current"
          >
            {isBright ? (
              <SunIcon className="h-16 w-16" />
            ) : (
              <MoonIcon className="h-16 w-16" />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}
