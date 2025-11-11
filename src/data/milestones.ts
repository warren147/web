export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    year: "2025",
    title: "Launching Code Chatbot",
    description: "Helping engineers query sprawling repos with AI copilots.",
  },
  {
    year: "2024",
    title: "Wing Ops",
    description: "Reimagined runway tooling for pilots and dispatch.",
  },
  {
    year: "2023",
    title: "Pedagology DevOps",
    description: "Codified infra and observability for growing ML teams.",
  },
  {
    year: "2022",
    title: "WDB Builder",
    description: "Led student product teams shipping to real clients.",
  },
  {
    year: "2019",
    title: "First line of code",
    description: "Fell in love with automation and delightful UX.",
  },
];
