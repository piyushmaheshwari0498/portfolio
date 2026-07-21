import { Quote } from "lucide-react";
import { testimonials } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">
              07 — Testimonials
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              What collaborators <span className="text-gradient">say</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="glass tilt-card flex h-full flex-col rounded-2xl p-6">
                <Quote className="size-6 text-accent" aria-hidden />
                <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
