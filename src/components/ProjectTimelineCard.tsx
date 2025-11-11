"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
  index: number;
  total: number;
};

export function ProjectTimelineCard({ project, index, total }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="flex h-full flex-col justify-between rounded-3xl border border-surface-muted bg-surface p-8"
    >
      <header className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-text-subtle">
          {project.year}
        </p>
        <div className="flex items-center gap-3 text-sm text-text-muted">
          <span className="font-medium text-accent">#{index + 1}</span>
          <span className="h-px w-10 bg-surface-muted" aria-hidden />
          <span>
            {index + 1} / {total}
          </span>
        </div>
        <h3 className="font-display text-3xl text-text-primary">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted">{project.highlight}</p>
      </header>

      <ul className="mt-6 space-y-2 text-sm text-text-muted">
        {project.metrics.map((metric) => (
          <li key={metric} className="flex items-center gap-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
            {metric}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((stack) => (
          <span
            key={stack}
            className="rounded-full border border-surface-muted px-3 py-1 text-xs font-medium text-text-muted"
          >
            {stack}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={project.link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-soft"
        >
          View details
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </motion.article>
  );
}
