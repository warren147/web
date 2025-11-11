"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageTransition({ children }: Props) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const lastRenderedPath = useRef(pathname);
  const LOADER_DURATION = 1500;

  useEffect(() => {
    if (lastRenderedPath.current === pathname) {
      return;
    }

    const frame = requestAnimationFrame(() => setIsAnimating(true));
    const timer = setTimeout(() => {
      setDisplayedChildren(children);
      lastRenderedPath.current = pathname;
      setIsAnimating(false);
    }, LOADER_DURATION);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname, children]);

  return (
    <div className="relative min-h-screen">
      {!isAnimating && displayedChildren}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-background"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 text-2xl font-display text-accent">
                WC
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
                Loading next chapter
              </p>
              <div className="h-1 w-48 overflow-hidden rounded-full bg-text-primary/10">
                <motion.span
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="block h-full w-1/2 bg-accent"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
