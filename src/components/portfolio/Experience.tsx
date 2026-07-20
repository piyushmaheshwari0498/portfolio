import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">03 — Experience</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              A track record across <span className="text-gradient">POS, warehousing, and super apps</span>.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={exp.company} delay={i * 100}>
                  <div
                    className={`relative grid md:grid-cols-2 gap-6 md:gap-10 ${
                      right ? "md:[&>*:first-child]:col-start-2" : ""
                    }`}
                  >
                    <div
                      className={`relative ${
                        right ? "md:pl-12" : "md:pr-12 md:text-right"
                      } pl-12 md:pl-0`}
                    >
                      <div
                        className={`absolute top-4 ${
                          right ? "left-0 md:-left-3" : "left-0 md:-right-3 md:left-auto"
                        } size-6 rounded-full glass grid place-items-center`}
                      >
                        <span className="size-2 rounded-full bg-accent" />
                      </div>
                      <div className="glass rounded-2xl p-6 tilt-card">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Briefcase className="size-3.5" />
                          {exp.period}
                        </div>
                        <div className="mt-2 text-lg font-semibold">{exp.role}</div>
                        <div className="text-sm text-accent">{exp.company}</div>
                        <ul
                          className={`mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed ${
                            right ? "" : "md:text-right"
                          }`}
                        >
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="flex gap-2 md:justify-start">
                              <span className="mt-2 size-1 rounded-full bg-accent shrink-0" />
                              <span className="text-left">{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div
                          className={`mt-5 flex flex-wrap gap-1.5 ${
                            right ? "" : "md:justify-end"
                          }`}
                        >
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] rounded-full border border-border px-2 py-1 text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
