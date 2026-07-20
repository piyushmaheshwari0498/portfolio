import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, projectFilters } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(filter) || p.tech.includes(filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-accent">04 — Projects</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Selected work, <span className="text-gradient">from POS to OTT</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A tour through the products I&apos;ve shipped — enterprise systems, freelance
                apps, and personal experiments.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3 py-1.5 text-xs transition-all border ${
                    filter === f
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-accent/50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative block overflow-hidden rounded-3xl glass tilt-card h-full"
              >
                <div
                  className="relative h-56 md:h-64 overflow-hidden"
                  style={{ background: p.cover }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_80%_80%,white,transparent_60%)]" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div className="text-white/90">
                      <div className="text-[11px] uppercase tracking-widest opacity-70">
                        {p.status} · {p.platform}
                      </div>
                      <div className="mt-1 text-2xl font-semibold drop-shadow">{p.name}</div>
                    </div>
                    <div className="grid size-10 place-items-center rounded-full bg-white/20 backdrop-blur border border-white/30 text-white transition-transform group-hover:scale-110 group-hover:rotate-45">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] rounded-full border border-border px-2 py-1 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {p.role} · {p.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-accent group-hover:translate-x-1 transition-transform">
                      View details <ArrowUpRight className="size-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <span>Looking for source code?</span>
            <a
              href="https://github.com/piyushmaheshwari0498"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 hover:bg-white/10 transition"
            >
              <Github className="size-4" /> Browse GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
