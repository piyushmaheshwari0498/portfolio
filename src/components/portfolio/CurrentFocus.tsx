import { Rocket, Briefcase, Handshake } from "lucide-react";
import { Reveal } from "./Reveal";

const focus = [
  {
    icon: Rocket,
    title: "Current focus",
    body: "Shipping offline-first Flutter systems and Android-Firebase realtime backends for enterprise clients.",
  },
  {
    icon: Briefcase,
    title: "Open to full-time",
    body: "Senior mobile roles — remote or Navi Mumbai / Mumbai — where reliability and craft matter.",
  },
  {
    icon: Handshake,
    title: "Freelance projects",
    body: "Short-cycle Flutter or Android engagements: MVPs, integrations, or reliability rescues.",
  },
];

export function CurrentFocus() {
  return (
    <section id="focus" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">
              08 — Availability
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              What I&apos;m building <span className="text-gradient">right now</span>.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="glass tilt-card flex h-full items-start gap-3 rounded-2xl p-6">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent">
                  <f.icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold">{f.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
