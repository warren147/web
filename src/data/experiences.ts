export type Experience = {
  company: string;
  role: string;
  dates: string;
  highlights: string[];
  logoText: string;
};

export const experiences: Experience[] = [
  {
    company: "TSMC",
    role: "Software Engineer, Internal Tools",
    dates: "2024 — Present",
    highlights: [
      "Led rebuild of ops console used by 200+ pilots",
      "Shipped workflow engine that clears reviews 2x faster",
    ],
    logoText: "W",
  },
  {
    company: "Pedagology",
    role: "DevOps & Platform",
    dates: "2023 — 2024",
    highlights: [
      "Containerized ML scoring infra with zero downtime deploys",
      "Reduced cloud spend by 28% via autoscaling + observability",
    ],
    logoText: "P",
  },
  {
    company: "WDB Projects",
    role: "Lead Engineer",
    dates: "2022 — 2023",
    highlights: [
      "Mentored a team of 15 student engineers shipping client work",
      "Rolled out design system used across 12 partner orgs",
    ],
    logoText: "W",
  },
  {
    company: "DataSci Lab",
    role: "Research Fellow",
    dates: "2021 — 2022",
    highlights: [
      "Built experimentation harness for multimodal models",
      "Published reproducible pipelines and benchmarks",
    ],
    logoText: "D",
  },
];
