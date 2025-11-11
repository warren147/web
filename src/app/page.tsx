"use client";

import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";

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
                <p className="text-[1rem] leading-relaxed">{descriptionText}</p>
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
