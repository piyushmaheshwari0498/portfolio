import { Download, GraduationCap, Briefcase, Globe2, Award, Sparkles } from "lucide-react";
import {
  profile,
  experiences,
  education,
  achievements,
  certifications,
  languages,
  techStack,
} from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section id="resume" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-accent">
                08 — Resume
              </div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                The full <span className="text-gradient">career at a glance</span>.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Interactive summary of experience, education, skills and achievements.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
            >
              <Download className="size-4" /> Download Resume PDF
            </a>
          </Reveal>
        </div>

        {/* Professional summary */}
        <Reveal>
          <div className="glass mt-10 rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
              <Sparkles className="size-4" /> Professional Summary
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {profile.summary}
            </p>
          </div>
        </Reveal>

        {/* Experience + Education */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                <Briefcase className="size-4" /> Experience
              </div>
              <ol className="mt-6 space-y-6">
                {experiences.map((e) => (
                  <li key={e.company} className="relative border-l border-border pl-5">
                    <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent" />
                    <div className="text-xs text-muted-foreground">{e.period}</div>
                    <div className="mt-1 text-sm font-semibold">{e.role}</div>
                    <div className="text-xs text-accent">{e.company}</div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="glass h-full rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                <GraduationCap className="size-4" /> Education
              </div>
              <ol className="mt-6 space-y-6">
                {education.map((e) => (
                  <li key={e.degree} className="relative border-l border-border pl-5">
                    <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary" />
                    <div className="text-xs text-muted-foreground">{e.period}</div>
                    <div className="mt-1 text-sm font-semibold text-pretty">{e.degree}</div>
                    <div className="text-xs text-accent">{e.school}</div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* Tech stack + Achievements */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-accent">
                Tech Stack
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="glass h-full rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                <Award className="size-4" /> Featured Achievements
              </div>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {achievements.map((a) => (
                  <li key={a.label} className="rounded-2xl border border-border bg-white/5 p-4">
                    <div className="text-2xl font-semibold text-gradient tabular-nums">
                      {a.value}
                      {a.suffix}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{a.label}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Languages + Certifications */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                <Globe2 className="size-4" /> Languages
              </div>
              <ul className="mt-5 space-y-3">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between text-sm">
                    <span>{l.name}</span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="glass h-full rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                <Award className="size-4" /> Certifications
              </div>
              <ul className="mt-5 space-y-4">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <div className="text-sm font-semibold text-pretty">{c.title}</div>
                    <div className="text-xs text-accent">{c.issuer}</div>
                    <div className="text-xs text-muted-foreground">{c.period}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
