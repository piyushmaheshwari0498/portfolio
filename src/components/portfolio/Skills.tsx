import { skills } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[80%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">02 — Skills</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              A toolkit sharpened by <span className="text-gradient">production</span>, not tutorials.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every technology here is one I&apos;ve shipped into a real app used by real people.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 4) * 80}>
              <div className="group relative overflow-hidden rounded-2xl glass p-5 tilt-card h-full">
                <div
                  className={`absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br ${cat.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
                />
                <div className="relative">
                  <div
                    className={`inline-grid size-11 place-items-center rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-lg`}
                  >
                    <cat.icon className="size-5" />
                  </div>
                  <div className="mt-4 font-semibold">{cat.title}</div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {cat.items.map((it) => (
                      <li
                        key={it.name}
                        className="flex items-center justify-between text-sm"
                      >
                        <span>{it.name}</span>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {it.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marquee of tech names */}
        <div className="mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="marquee-track flex gap-6 whitespace-nowrap text-2xl md:text-3xl font-semibold text-muted-foreground">
            {[
              ...[
                "Flutter",
                "Android",
                "Kotlin",
                "Java",
                "Firebase",
                "Room DB",
                "SAP",
                "REST",
                "Clean Architecture",
                "MVVM",
                "Retrofit",
                "CCAvenue",
                "Google Maps",
                "Hive",
                "Star Printers",
                "Sunmi",
              ],
              ...[
                "Flutter",
                "Android",
                "Kotlin",
                "Java",
                "Firebase",
                "Room DB",
                "SAP",
                "REST",
                "Clean Architecture",
                "MVVM",
                "Retrofit",
                "CCAvenue",
                "Google Maps",
                "Hive",
                "Star Printers",
                "Sunmi",
              ],
            ].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-6">
                <span>{t}</span>
                <span className="size-1.5 rounded-full bg-accent/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
