"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LinkArrow } from "@/components/LinkArrow";

const projects = [
  {
    id: "code chatbot",
    name: "Code Chatbot",
    description:
      "Interactive chatbot leverages Retrieval-Augmented Generation (RAG), allowing users to discuss and analyze their code files.",
    tech: ["React", "Next.js", "Typescript", "Pinecone", "OpenAI"],
    year: "2024",
    image: "/projects/chatbot_TN.jpg",
    demo: "/projects/chatbot_demo.mov",
  },
  {
    id: "voronoi diagram",
    name: "Voronoi Diagram",
    description:
      "An application provides visual representation of the Voronoi Diagram given a set of points with multiple metrics.",
    tech: ["Java", "JavaAWT"],
    year: "2024",
    image: "/projects/VC_TN.jpeg",
    demo: "/projects/voronoi_demo.movpublic/projects/voronoi_demo.mov",
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
          onMouseLeave={() => setHoveredId(null)}
        >
          {projects.map((project) => {
            const isActive = hoveredId === project.id;
            const isDimmed = hoveredId !== null && !isActive;

            return (
              <motion.div
                key={project.id}
                layout
                transition={{
                  layout: { type: "spring", stiffness: 140, damping: 18 },
                  duration: 0.25,
                }}
                className={`relative flex flex-col rounded-[2rem] border border-text-primary/10 bg-background p-3 transition duration-300 self-start ${
                  isDimmed ? "blur-[2px] opacity-30" : "opacity-100"
                } ${isActive ? "bg-surface" : ""}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onFocus={() => setHoveredId(project.id)}
                onBlur={() => setHoveredId(null)}
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

                <motion.div
                  layout
                  initial={false}
                  animate={
                    isActive
                      ? { height: "auto", opacity: 1, marginTop: 16 }
                      : { height: 0, opacity: 0, marginTop: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden px-2 pb-2"
                >
                  {isActive && (
                    <div className="rounded-[1.5rem] border border-text-primary/10 bg-surface p-4 text-text-primary">
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
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
