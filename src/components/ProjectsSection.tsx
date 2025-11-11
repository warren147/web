"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LinkArrow } from "@/components/LinkArrow";
import { useTheme } from "@/components/ThemeProvider";

const projects = [
  {
    id: "mission-control",
    name: "Mission Control",
    description:
      "Command center that lets Wing ops orchestrate airspace, manage fleets, and keep autonomy in sync with human reviews.",
    tech: ["Next.js", "TypeScript", "Postgres", "Framer Motion"],
    year: "2024",
    image: "/projects/project-1.svg",
    demo: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
  },
  {
    id: "sprint-rooms",
    name: "Sprint Rooms",
    description:
      "Realtime dashboard for Berkeley build pods to host critiques, track experiments, and archive live collaboration notes.",
    tech: ["React", "Node.js", "Supabase", "WebSockets"],
    year: "2024",
    image: "/projects/project-2.svg",
    demo: "https://storage.googleapis.com/coverr-main/mp4/Night-Lights.mp4",
  },
  {
    id: "labs-atlas",
    name: "Labs Atlas",
    description:
      "Spatial review workflow for autonomy experiments with layered telemetry, label QA, and quick keyboard pilots.",
    tech: ["Three.js", "Python", "PyTorch", "Redis"],
    year: "2023",
    image: "/projects/project-3.svg",
    demo: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
  },
  {
    id: "orbit-crm",
    name: "Orbit CRM",
    description:
      "Trusted relationship tracker for early-stage teams, built with a cinematic interface and gentle, opinionated flows.",
    tech: ["Next.js", "PlanetScale", "Tailwind", "Clerk"],
    year: "2023",
    image: "/projects/project-4.svg",
    demo: "https://storage.googleapis.com/coverr-main/mp4/White-Windmills.mp4",
  },
  {
    id: "signal-playbook",
    name: "Signal Playbook",
    description:
      "Knowledge surface for sharing ops rituals, incident retros, and nuanced playbooks across distributed teams.",
    tech: ["Remix", "SQLite", "Cloudflare Workers", "Shadcn"],
    year: "2022",
    image: "/projects/project-5.svg",
    demo: "https://storage.googleapis.com/coverr-main/mp4/Drift.mp4",
  },
];

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
                  {isActive ? (
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
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority={project.id === projects[0].id}
                    />
                  )}
                </div>

                <div className="flex items-center justify-between px-2 pb-2 pt-4">
                  <a
                    href={project.demo ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 font-serif-italic text-2xl text-text-primary"
                  >
                    {project.name}
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
                          <p className="text-base leading-relaxed">{project.description}</p>
                          <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.35em]">Tech Stack</p>
                            <p className="mt-2 text-sm leading-relaxed">
                              {project.tech.join(" · ")}
                            </p>
                          </div>
                          <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.35em]">Created</p>
                            <p className="mt-2 text-sm">{project.year}</p>
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
