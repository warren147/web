"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LinkArrow } from "@/components/LinkArrow";
import { useTheme } from "@/components/ThemeProvider";
import { projects } from "@/data/projects";

export function ProjectsSection({ className = "" }: { className?: string }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { theme } = useTheme();
  const hoverTimeoutRef = useRef<number | null>(null);

  const scheduleHover = (id: string) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = window.setTimeout(() => {
      setHoveredId(id);
    }, 180);
  };

  const clearHover = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredId(null);
  };

  useEffect(() => () => clearHover(), []);

  return (
    <section id="projects" className={className}>
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            key="projects-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none fixed inset-0 z-[55] bg-background/10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <div className="space-y-6 border-b border-text-primary/10 pb-24">
        <p className="text-xs uppercase tracking-[0.35em] text-text-muted">Projects</p>
        <div
          className="grid gap-6 md:grid-cols-2"
          onMouseLeave={clearHover}
        >
          {projects.map((project) => {
            const isActive = hoveredId === project.id;
            const isDimmed = hoveredId !== null && !isActive;
            const cardShadowClass =
              theme === "bright"
                ? "shadow-none"
                : "shadow-[0_20px_60px_rgba(0,0,0,0.65)]";
            const detailShadowClass =
              theme === "bright"
                ? "shadow-none"
                : "shadow-[0_15px_40px_rgba(0,0,0,0.35)]";

            return (
              <motion.div
                key={project.id}
                layout
                transition={{
                  layout: { type: "spring", stiffness: 140, damping: 18 },
                  duration: 0.25,
                }}
                className={`relative flex flex-col rounded-[2rem] border border-text-primary/10 bg-background p-3 ${cardShadowClass} transition duration-300 self-start ${
                  isDimmed ? "blur-[2px] opacity-30" : "opacity-100"
                } ${isActive ? "bg-surface" : ""}`}
                onMouseEnter={() => scheduleHover(project.id)}
                onMouseLeave={clearHover}
                onFocus={() => scheduleHover(project.id)}
                onBlur={clearHover}
                tabIndex={0}
                style={{ zIndex: isActive ? 70 : 10 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-background">
                  {isActive && project.demo ? (
                    <video
                      key={project.id}
                      src={project.demo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={project.image.blurDataURL}
                      priority={project.id === projects[0].id}
                    />
                  )}
                </div>

                <div className="flex items-center justify-between px-2 pb-2 pt-4">
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 font-serif-italic text-2xl text-text-primary"
                  >
                    {project.title}
                    <LinkArrow />
                  </a>
                  <span className="text-xs uppercase tracking-[0.35em] text-text-muted">
                    {project.year}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      layout
                      key={`${project.id}-details`}
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        marginTop: 16,
                        transition: { duration: 0.35, ease: "easeOut" },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      }}
                      className="overflow-hidden px-2"
                    >
                    <div className={`rounded-[1.5rem] border border-text-primary/15 bg-background p-4 text-text-primary ${detailShadowClass}`}>
                        <div className="space-y-4 text-text-muted">
                          <p className="text-base leading-relaxed">{project.highlight}</p>
                          <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.35em]">Tech Stack</p>
                            <p className="mt-2 text-sm leading-relaxed">
                              {project.tech.join(" · ")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
