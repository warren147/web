"use client";

import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:warrenbluechg@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M4 6.75A1.75 1.75 0 015.75 5h12.5A1.75 1.75 0 0120 6.75v10.5A1.75 1.75 0 0118.25 19H5.75A1.75 1.75 0 014 17.25z"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M5 7l7 5 7-5"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/warren-chang-215644229/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M4.5 9h3v10.5h-3zM5.97 4.5a1.76 1.76 0 110 3.52 1.76 1.76 0 010-3.52zm4.53 4.5h2.88v1.46h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.55 1.97 3.55 4.53v5.55h-3v-4.92c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58v5.01h-3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/warren147",
    icon: (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.3.68.9.68 1.82 0 1.31-.01 2.37-.01 2.69 0 .27.18.58.69.48A10 10 0 0012 2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/warren_chang_tw/?hl=en",
    icon: (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          ry="5"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="3.2"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
];

const descriptionText = (
  <>
    I&apos;m Bo-Wei(Warren) Chang, studying computer science and data science at UC Berkeley.
    {" "}
    I&apos;ve always been very interested about technology and its potential to make this world
    a better place.
    {" "}
    Whether it&apos;s developing innovative software solutions or exploring the potential of AI
    and machine learning, I am driven by a deep passion to use technology as a force for
    good.
    <br />
    <br />
    Outside of school and work, I really enjoy playing golf and video games.
    {" "}
    Golf is a sport that challenges me to think strategically and stay calm under pressure,
    which are skills that translate well into my work and school.
    {" "}
    Video games, on the other hand, fuel my creativity and problem-solving skills.
    {" "}
    Whether I&apos;m on the golf course or immersed in a game, I&apos;m always looking for ways to
    push myself, learn new things, and have fun along the way!
  </>
);

const containerClass = "mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary">
      <div className="space-y-16 pb-20 pt-10">
        <section id="introduction" className="pt-2">
          <div className={containerClass}>
            <div className="space-y-6 border-b border-text-primary/10 pb-10">
              <div className="space-y-3">
                <p className="text-[0.8rem] text-xs tracking-[0.35em] text-text-muted">
                  ABOUT
                </p>
                <div className="space-y-4">
                  <p className="text-[1rem] leading-relaxed">{descriptionText}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http") ? "noreferrer noopener" : undefined
                        }
                        aria-label={link.label}
                        className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-text-primary/25 text-text-primary transition hover:border-text-primary hover:bg-text-primary/10"
                      >
                        <span className="sr-only">{link.label}</span>
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <ProjectsSection className={containerClass} />
        </div>

        <div>
          <ExperienceSection className={containerClass} />
        </div>
      </div>
    </div>
  );
}
