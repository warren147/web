"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-text-primary/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-lg tracking-tight text-text-primary"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            WC
          </div>
          Bo-Wei Chang
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors duration-200",
                  isActive
                    ? "bg-text-primary/10 text-text-primary"
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((line) => (
              <span
                key={line}
                className={cn(
                  "block h-0.5 w-7 origin-center rounded-full bg-text-primary transition-all",
                  open && line === 1 && "opacity-0",
                  open && line === 0 && "translate-y-[7px] rotate-45",
                  open && line === 2 && "-translate-y-[7px] -rotate-45"
                )}
              />
            ))}
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-text-primary/5 bg-background/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base transition-colors duration-200",
                      isActive
                        ? "bg-text-primary/10 text-text-primary"
                        : "text-text-muted hover:text-text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
