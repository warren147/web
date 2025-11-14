"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LinkArrow } from "@/components/LinkArrow";

// const projects = [
//   {
//     id: "code chatbot",
//     name: "Code Chatbot",
//     description:
//       "Interactive chatbot leverages Retrieval-Augmented Generation (RAG), allowing users to discuss and analyze their code files.",
//     tech: ["React", "Next.js", "Typescript", "Pinecone", "OpenAI"],
//     year: "2024",
//     image: "/projects/chatbot_TN.jpg",
//     demo: "/projects/chatbot_demo.mov",
//   },
//   {
//     id: "voronoi diagram",
//     name: "Voronoi Diagram",
//     description:
//       "An application provides visual representation of the Voronoi Diagram given a set of points with multiple metrics.",
//     tech: ["Java", "JavaAWT"],
//     year: "2024",
//     image: "/projects/VC_TN.jpeg",
//     demo: "/projects/voronoi_demo.movpublic/projects/voronoi_demo.mov",
//   },
//   {
//     id: "labs-atlas",
//     name: "Labs Atlas",
//     description:
//       "Spatial review workflow for autonomy experiments with layered telemetry, label QA, and quick keyboard pilots.",
//     tech: ["Three.js", "Python", "PyTorch", "Redis"],
//     year: "2023",
//     image: "/projects/project-3.svg",
//     demo: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
//   },
//   {
//     id: "orbit-crm",
//     name: "Orbit CRM",
//     description:
//       "Trusted relationship tracker for early-stage teams, built with a cinematic interface and gentle, opinionated flows.",
//     tech: ["Next.js", "PlanetScale", "Tailwind", "Clerk"],
//     year: "2023",
//     image: "/projects/project-4.svg",
//     demo: "https://storage.googleapis.com/coverr-main/mp4/White-Windmills.mp4",
//   },
//   {
//     id: "signal-playbook",
//     name: "Signal Playbook",
//     description:
//       "Knowledge surface for sharing ops rituals, incident retros, and nuanced playbooks across distributed teams.",
//     tech: ["Remix", "SQLite", "Cloudflare Workers", "Shadcn"],
//     year: "2022",
//     image: "/projects/project-5.svg",
//     demo: "https://storage.googleapis.com/coverr-main/mp4/Drift.mp4",
//   },
// ];

const projects = [
  {
    id: "code-chatbot",
    name: "Code Chatbot",
    role: "Creator",
    year: "2024",
    tech: ["Next.js", "LangChain", "Pinecone", "OpenAI"],
    description:
      "Conversational overlay that lets engineers interrogate large repositories with natural language and inline code diffs.",
    metrics: ["10k+ LOC indexed", "2k+ monthly chats"],
    link: "https://github.com/warren147/code-chatbot",
    demo: "/projects/chatbot_demo.mov",
    image: "/projects/chatbot_TN.jpg",
  },
  {
    id: "voronoi-playground",
    name: "Voronoi Diagram Visualizer",
    role: "Product Engineer",
    year: "2024",
    tech: ["Java", "JavaAWT"],
    description:
      "An application provides visual representation of the Voronoi Diagram given a set of points with multiple metric.",
    metrics: ["60 FPS on mobile", "<35% GPU utilization"],
    link: "https://github.com/warren147/Voronoi_Diagram",
    demo: "/projects/voronoi_demo.mov",
    image: "/projects/test.png"
  },
  {
    id: "notiom",
    name: "Notiom",
    role: "Engineer",
    year: "2024",
    tech: ["React", "Typescript", "Node.js", "MongoDB"],
    description:
      "Developed a React web app that allows users save, edit, and share documents that are persisted to a MongoDB database.",
    metrics: ["150+ reusable presets", "Exports in <4s"],
    link: "https://github.com/warren147/Notiom",
    demo: "/projects/notiom_demo.mov",
    image: "/projects/notiom_TN.avif"
  },
  {
    id: "cube-simulator",
    name: "Cube Solver",
    role: "Engineer",
    year: "2024",
    tech: ["Python", "PyGame", "Tkinter"],
    description:
      "A Python GUI application using Tkinter that generates a solution to a 3 x 3 Rubik’s Cube with Kociemba’s algorithm.",
    metrics: ["<1s solve preview", "8x faster scrambles"],
    link: "https://github.com/warren147/cube_solver",
    demo: "/projects/cube_demo.mov",
    image: "/projects/rbSolver_TN.jpg"
  },
  {
    id: "pong-lab",
    name: "Pong",
    role: "Builder",
    year: "2023",
    tech: ["Java", "JavaAWT"],
    description:
      "Pong game for fun!",
    metrics: ["2 ms input latency", "Dynamic pitch mapping"],
    link: "https://github.com/warren147/Pong",
    demo: "/projects/pong_demo.mov",
    image: "/projects/Pong_TN.jpg"
  },
];


export function ProjectsSection({ className = "" }: { className?: string }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  useEffect(() => {
    const preloadLinks = projects.map((project) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = project.demo;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      preloadLinks.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

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
          className="divide-y divide-text-primary/10"
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
                className={`group relative flex flex-col gap-4 py-8 transition duration-300 ${
                  isDimmed ? "blur-[2px] opacity-30" : "opacity-100"
                }`}
                onMouseEnter={() => setHoveredId(project.id)}
                onFocus={() => setHoveredId(project.id)}
                onBlur={() => setHoveredId(null)}
                onMouseLeave={() => setHoveredId(null)}
                tabIndex={0}
                style={{ zIndex: isActive ? 70 : 10 }}
              >
                <div className="flex flex-col gap-4 px-2 md:flex-row md:items-center md:justify-between">
                  <a
                    href={project.link ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-3xl text-text-primary sm:text-4xl"
                  >
                    <span className="font-serif-italic leading-tight">{project.name}</span>
                    <LinkArrow className="h-5 w-5" />
                  </a>
                  <div className="flex flex-col gap-1 text-text-muted">
                    <span className="text-xs uppercase tracking-[0.35em]">{project.year}</span>
                  </div>
                </div>

                <motion.div
                  layout
                  initial={false}
                  animate={
                    isActive
                      ? { height: "auto", opacity: 1, marginTop: 12 }
                      : { height: 0, opacity: 0, marginTop: 0 }
                  }
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden px-2"
                >
                  {isActive && (
                    <div className="rounded-3xl border border-text-primary/10 bg-surface p-6 text-text-primary">
                      <div className="grid gap-6 md:grid-cols-[1.25fr,0.85fr]">
                        <div className="relative overflow-hidden rounded-2xl bg-background">
                          <div className="aspect-video">
                            <video
                              key={`${project.id}-video`}
                              src={project.demo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="auto"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="space-y-4 text-text-muted">
                          <p className="text-base leading-relaxed">{project.description}</p>
                          <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.35em]">Tech Stack</p>
                            <p className="mt-2 text-sm leading-relaxed">{project.tech.join(" · ")}</p>
                          </div>
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
