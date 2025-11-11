export type Project = {
  id: string;
  title: string;
  role: string;
  year: number;
  tech: string[];
  highlight: string;
  metrics: string[];
  link: string;
  image: {
    src: string;
    alt: string;
    blurDataURL: string;
  };
};

const blur =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4+fLlPwAHggMNdKCbYQAAAABJRU5ErkJggg==";

export const projects: Project[] = [
  {
    id: "code-chatbot",
    title: "Code Chatbot",
    role: "Creator",
    year: 2025,
    tech: ["Next.js", "RAG", "Pinecone"],
    highlight:
      "Natural language interface that lets engineers query massive repositories as if they were chatting with a teammate.",
    metrics: ["10k+ LOC indexed", "40% faster onboarding"],
    link: "https://github.com",
    image: {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      alt: "Screenshot of AI powered code chatbot UI",
      blurDataURL: blur,
    },
  },
  {
    id: "wing-ops",
    title: "Wing Ops Console",
    role: "Lead Engineer",
    year: 2024,
    tech: ["Next.js", "tRPC", "Postgres", "Tailwind"],
    highlight:
      "Mission control for Wing’s internal tools with live fleet telemetry, approvals, and runway level insights.",
    metrics: ["Managed 6 internal services", "99.95% uptime"],
    link: "https://example.com",
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Dashboard mock showing operations metrics",
      blurDataURL: blur,
    },
  },
  {
    id: "mlops-kit",
    title: "MLOps Kit",
    role: "Builder",
    year: 2023,
    tech: ["Python", "FastAPI", "Ray", "Docker"],
    highlight:
      "Composable toolkit for spinning up training pipelines with experiment tracking, auto-scaling, and guardrails.",
    metrics: ["65% faster model iteration", "Unified logging"],
    link: "https://example.com",
    image: {
      src: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      alt: "Developer workstation with graphs",
      blurDataURL: blur,
    },
  },
  {
    id: "studio-ui",
    title: "Studio UI System",
    role: "Product Engineer",
    year: 2022,
    tech: ["React", "Storybook", "Figma Tokens"],
    highlight:
      "Unified component library powering marketing sites, dashboards, and experiment sandboxes across teams.",
    metrics: ["75+ components", "Shared across 4 teams"],
    link: "https://example.com",
    image: {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "Component system grids on a screen",
      blurDataURL: blur,
    },
  },
];
