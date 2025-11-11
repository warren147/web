export type Project = {
  id: string;
  title: string;
  role: string;
  year: number;
  tech: string[];
  highlight: string;
  metrics?: string[];
  link: string;
  demo?: string;
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
    year: 2024,
    tech: ["Next.js", "LangChain", "Pinecone", "OpenAI"],
    highlight:
      "Conversational overlay that lets engineers interrogate large repositories with natural language and inline code diffs.",
    metrics: ["10k+ LOC indexed", "2k+ monthly chats"],
    link: "https://github.com/warren147/code-chatbot",
    demo: "/projects/chatbot_demo.mov",
    image: {
      src: "/projects/chatbot_TN.jpg",
      alt: "Screens from the code chatbot interface",
      blurDataURL: blur,
    },
  },
  {
    id: "voronoi-playground",
    title: "Voronoi Diagram Visualizer",
    role: "Product Engineer",
    year: 2024,
    tech: ["Java", "JavaAWT"],
    highlight:
      "An application provides visual representation of the Voronoi Diagram given a set of points with multiple metric.",
    metrics: ["60 FPS on mobile", "<35% GPU utilization"],
    link: "https://github.com/warren147/Voronoi_Diagram",
    demo: "/projects/voronoi_demo.mov",
    image: {  
      src: "/projects/test.png",
      alt: "Voronoi diagram rendered on a gradient background",
      blurDataURL: blur,
    },
  },
  {
    id: "notiom",
    title: "Notiom",
    role: "Engineer",
    year: 2024,
    tech: ["React", "Typescript", "Node.js", "MongoDB"],
    highlight:
      "Developed a React web app that allows users save, edit, and share documents that are persisted to a MongoDB database.",
    metrics: ["150+ reusable presets", "Exports in <4s"],
    link: "https://github.com/warren147/Notiom",
    demo: "/projects/notiom_demo.mov",
    image: {
      src: "/projects/notiom_TN.avif",
      alt: "Collage of animated frames from Notiom",
      blurDataURL: blur,
    },
  },
  {
    id: "cube-simulator",
    title: "Cube Solver",
    role: "Engineer",
    year: 2024,
    tech: ["Python", "PyGame", "Tkinter"],
    highlight:
      "A Python GUI application using Tkinter that generates a solution to a 3 x 3 Rubik’s Cube with Kociemba’s algorithm.",
    metrics: ["<1s solve preview", "8x faster scrambles"],
    link: "https://github.com/warren147/cube_solver",
    demo: "/projects/cube_demo.mov",
    image: {
      src: "/projects/rbSolver_TN.jpg",
      alt: "Rubik’s cube rendered with dramatic lighting",
      blurDataURL: blur,
    },
  },
  {
    id: "pong-lab",
    title: "Pong",
    role: "Builder",
    year: 2023,
    tech: ["Java", "JavaAWT"],
    highlight:
      "Pong game for fun!",
    metrics: ["2 ms input latency", "Dynamic pitch mapping"],
    link: "https://github.com/warren147/Pong",
    demo: "/projects/pong_demo.mov",
    image: {
      src: "/projects/Pong_TN.jpg",
      alt: "Stylized pong interface with gradients",
      blurDataURL: blur,
    },
  },
];
