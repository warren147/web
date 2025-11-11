"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LinkArrow } from "@/components/LinkArrow";

type Experience = {
  id: string;
  company: string;
  position: string;
  period: string;
  details: string;
  tech: string[];
  logo: string;
  link: string;
};

const experiences: Experience[] = [
  {
    id: "tiktok",
    company: "TikTok",
    position: "Incoming Software Engineer Intern",
    period: "Fall 2026",
    details:
      "PGC AI Platform Team",
    tech: [],
    logo: "/logos/tiktok_logo.jpeg",
    link: "https://www.tiktok.com/",
  },
  {
    id: "salesforce",
    company: "Salesforce",
    position: "Incoming Software Engineer Intern",
    period: "Summer 2026",
    details:
      "Sales Cloud",
    tech: [],
    logo: "/logos/salesforce_logo.jpeg",
    link: "https://www.salesforce.com/",
  },
  {
    id: "tsmc",
    company: "TSMC",
    position: "Software Engineer Intern", 
    period: "06/2025 - 08/2025",
    details:
      "Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline using LangGraph to translate Oracle SQL queries into Trino SQL, enabling seamless migration from a traditional Oracle-based data lakehouse to a Trino-powered architecture. Developed error-handling mechanisms and evaluation metrics to assess translation quality, achieving 97% execution accuracy and 93% result accuracy, significantly reducing manual query rewriting effort during migration.",
    tech: ["Python", "LangChain", "LangGraph", "Docker"],
    logo: "/logos/Tsmc.svg.png",
    link: "https://www.tsmc.com/english",
  },
  {
    id: "ls",
    company: "Lafayette Square",
    position: "Project Manager/Tech Lead",
    period: "01/2025 -  05/2025",
    details:
      "Led the development of a customizable report generation platform used for generating ESOP insights. Scoped UI and backend architecture, implemented a CI/CD pipeline to transform Snowflake-driven API endpoints into AWS Lambda functions, and configured API Gateway routing. Managed code quality and collaboration through GitLab workflows for efficient deployment.",
    tech: ["React", "Node.js", "Notion", "GitLab", "AWS", "CI/CD"],
    logo: "/logos/lafayettesquare_logo.jpeg",
    link: "https://www.lafayettesquare.com/",
  },
  {
    id: "curiocity",
    company: "Curiocity",
    position: "Software Engineer",
    period: "08/2024 - 12/2024",
    details:
      "Contributed to the development of a document editing platform that supports secure file upload, parsing, and user authentication. Implemented REST APIs with MongoDB and S3, integrated Google OAuth for user access, and built a file ingestion pipeline using LlamaParse to extract structured data from formats like PDF, PPTX, and HTML.",
    tech: ["Typescript", "React", "Node.js", "LlamaParse", "AWS"],
    logo: "/logos/curiocity.jpeg",
    link: "https://curiocity.rocks",
  },
  {
    id: "teachshare",
    company: "TeachShare",
    position: "Software Engineer",
    period: "06/2024 - 12/2024",
    details:
      "Enhanced a worksheet creation tool by implementing a PDF parsing pipeline using PyPDF2, PDFMiner, and NLTK. Integrated Polotno SDK into the React-based frontend to enable dynamic editing, and added support for editable imports from Google Slides and PDFs via Adobe Extract API. Built automated publishing pipelines using social media APIs.",
    tech: ["Python", "React", "Typescript", "NLTK", "Javascript"],
    logo: "/logos/teachsharecommunity_logo.jpeg",
    link: "https://www.teachshare.com/",
  },
  {
    id: "wing",
    company: "Wing Assistant",
    position: "Software Engineer Intern",
    period: "05/2024 - 08/2024",
    details:
      "Built a resume intelligence system integrating RAG pipelines and vector search. Retrieved and preprocessed resume data from Lever, embedded using Voyage AI, and stored in Pinecone for semantic search. Enabled ranked candidate matching with justification, improving accuracy and efficiency in hiring workflows.",
    tech: ["Python", "VoyageAI", "LangChain", "Pinecone"],
    logo: "/logos/wing.jpeg",
    link: "https://wingassistant.com/?gad_source=1&gclid=CjwKCAjwodC2BhAHEiwAE67hJDu4JeQBUiejzUYIvuJC7aE72T17QSrwwcrpuufqdB9DJPRLuzT6VhoCUEMQAvD_BwE",
  },
  {
    id: "ochy",
    company: "Ochy",
    position: "Software Engineer Intern",
    period: "01/2024 - 05/2024",
    details:
      "Developed a personalized video generation system using React, Node.js, and Remotion. Parsed structured JSON feedback to dynamically render highlight videos, and deployed a real-time video streaming pipeline using Google Pub/Sub to support low-latency content delivery.",
    tech: ["Typescript", "React", "GCP", "Pub/Sub", "React"],
    logo: "/logos/ochy_logo.jpeg",
    link: "https://www.ochy.io/",
  },
  {
    id: "acm",
    company: "Association for Computing Machinery(ACM)",
    position: "ML Intern",
    period: "06/2023 — 08/2023",
    details:
      "Worked on training custom datasets for traffic signal recognition, manually labeling over 4000 images using Roboflow. Implemented the model using YOLOv7, achieving an accuracy rate of 88.15%.",
    tech: ["Python", "PyTorch", "Tensorflow", "Roboflow"],
    logo: "/logos/association_for_computing_machinery_logo.jpeg",
    link: "https://www.acm.org/",
  },
];

type Props = {
  className?: string;
};

export function ExperienceSection({ className = "" }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
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
    <section id="experience" className={className}>
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            key="experience-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none fixed inset-0 z-[60] bg-background/10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <div className="space-y-6 border-b border-text-primary/10 pb-24">
        <p className="text-xs uppercase tracking-[0.35em] text-text-muted">Experience</p>
        <div
          className="divide-y divide-text-primary/10"
          onMouseLeave={() => {
            clearHover();
          }}
        >
          {experiences.map((experience) => {
            const isDimmed = hoveredId !== null && hoveredId !== experience.id;
            const isActive = hoveredId === experience.id;

            return (
              <motion.div
                key={experience.id}
                layout
                className={`group relative flex flex-col gap-4 py-8 transition duration-300 ${
                  isDimmed ? "blur-[2px] opacity-30" : "opacity-100"
                }`}
                onMouseEnter={() => {
                  scheduleHover(experience.id);
                }}
                onMouseLeave={clearHover}
                onFocus={() => {
                  scheduleHover(experience.id);
                }}
                onBlur={() => {
                  clearHover();
                }}
                style={{ zIndex: isActive ? 65 : 10 }}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 text-3xl text-text-primary sm:text-4xl"
                    >
                      <span className="font-serif-italic leading-tight">
                        {experience.company}
                      </span>
                      <LinkArrow className="h-5 w-5" />
                    </a>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-text-muted">
                      {experience.position}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.35em] text-text-muted md:text-right">
                    {experience.period}
                  </span>
                </div>

                <motion.div
                  layout
                  initial={false}
                  animate={
                    isActive
                      ? { height: "auto", opacity: 1, marginTop: 24 }
                      : { height: 0, opacity: 0, marginTop: 0 }
                  }
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="rounded-3xl bg-surface p-6 text-text-primary">
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex w-full flex-col gap-4 md:w-1/3">
                        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-surface p-2">
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            fill
                            sizes="64px"
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-text-muted">
                            Tech Stack
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-text-muted">
                            {experience.tech.join(" · ")}
                          </p>
                        </div>
                      </div>
                      <div className="md:flex-1">
                        <p className="text-base leading-relaxed text-text-muted">
                          {experience.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
