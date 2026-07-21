import { Award } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">
              05 — Certifications
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Trained hands, <span className="text-gradient">tested craft</span>.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Formal training grounded in shipping real production systems.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="glass rounded-2xl p-5 tilt-card h-full">
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent">
                    <Award className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-pretty">{c.title}</div>
                    <div className="text-sm text-accent">{c.issuer}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.period}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
