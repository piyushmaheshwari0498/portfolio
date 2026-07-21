import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">
              09 — FAQ
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Questions I get <span className="text-gradient">a lot</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group glass rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-pretty text-sm font-medium sm:text-base">
                    {f.q}
                  </span>
                  <ChevronDown className="size-4 shrink-0 text-accent transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
