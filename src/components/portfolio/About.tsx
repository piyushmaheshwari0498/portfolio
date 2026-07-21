import { GraduationCap, Globe2, Target, Coffee } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile, education } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">01 — About</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Six years of shipping <span className="text-gradient">mobile products</span> that
              hold up in the real world.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {profile.bio.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: Target,
                title: "Current focus",
                body: "Building offline-first Flutter systems and native Android integrations for enterprise clients.",
              },
              {
                icon: Globe2,
                title: "Languages",
                body: "English (Professional), Hindi (Native).",
              },
              {
                icon: Coffee,
                title: "Working style",
                body: "Solo end-to-end delivery, tight feedback loops, ruthless focus on reliability.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="glass rounded-2xl p-5 tilt-card">
                  <div className="flex items-start gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent">
                      <c.icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{c.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <Reveal>
          <div className="mt-20 flex items-center gap-3">
            <GraduationCap className="size-5 text-accent" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100}>
              <div className="glass rounded-2xl p-5 h-full tilt-card">
                <div className="text-xs text-muted-foreground">{e.period}</div>
                <div className="mt-1 font-semibold">{e.degree}</div>
                <div className="mt-1 text-sm text-muted-foreground">{e.school}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
