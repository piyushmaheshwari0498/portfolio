import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Github, ExternalLink, Play } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";
import { projects } from "@/lib/portfolio-data";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const p = loaderData.project;
    const url = `/projects/${params.slug}`;
    return {
      meta: [
        { title: `${p.name} — Piyush Maheshwari` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} — Piyush Maheshwari` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${p.name} — Piyush Maheshwari` },
        { name: "twitter:description", content: p.tagline },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.name,
            description: p.tagline,
            about: p.overview,
            creator: { "@type": "Person", name: "Piyush Maheshwari" },
            keywords: p.tech.join(", "),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <div className="text-5xl font-bold">404</div>
        <div className="mt-2 text-muted-foreground">Project not found</div>
        <Link to="/" className="mt-6 inline-block text-accent underline">
          Back to home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const router = Route.useRouteContext();
    void router;
    return (
      <div className="min-h-screen grid place-items-center p-6">
        <div className="text-center">
          <div className="text-xl font-semibold">Something went wrong</div>
          <div className="mt-2 text-sm text-muted-foreground">{error.message}</div>
          <button onClick={reset} className="mt-4 rounded bg-primary px-4 py-2 text-sm">
            Try again
          </button>
        </div>
      </div>
    );
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "responsibilities", label: "Responsibilities" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "features", label: "Key Features" },
    { id: "architecture", label: "Architecture" },
    { id: "challenges", label: "Challenges" },
    ...(project.lessons && project.lessons.length > 0
      ? [{ id: "lessons", label: "Lessons Learned" }]
      : []),
    ...(project.future && project.future.length > 0
      ? [{ id: "future", label: "Future Improvements" }]
      : []),
  ];

  return (
    <main className="relative">
      <div
        className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-primary to-accent origin-left"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
      <Nav />

      {/* Hero banner */}
      {/* <section
        className="relative isolate pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
        style={{ background: project.cover }}
      > */}
      <section className="relative isolate pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: project.cover }}
          />
        )}

        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
      </section>

      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="container-x relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to all projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full glass px-3 py-1">{project.status}</span>
          <span className="rounded-full glass px-3 py-1">{project.platform}</span>
          <span className="rounded-full glass px-3 py-1">{project.duration}</span>
          <span className="rounded-full glass px-3 py-1">{project.role}</span>
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.tagline}</p>

        <div className="mt-4 text-sm text-muted-foreground">
          <span className="text-accent">{project.company}</span> · {project.duration}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="text-[11px] rounded-full glass px-2.5 py-1 text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Github className="size-4" /> View Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110 transition"
            >
              <ExternalLink className="size-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </section>

      {/* Phone mockup gallery */ }
  <section className="py-16 md:py-20">
    <div className="container-x">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] text-accent">Preview</div>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
          Screens from the app
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Screenshots are illustrative — mockups shown pending final captures.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="mx-auto max-w-[240px]">
              <div className="phone-mockup">
                <div className="phone-screen relative">
                  <div className="absolute inset-0" style={{ background: project.cover }} />
                  <div className="relative flex flex-col h-full p-4 text-white">
                    <div className="text-[10px] uppercase opacity-70 tracking-widest">
                      {project.name}
                    </div>
                    <div className="mt-2 text-xl font-semibold">
                      {["Dashboard", "Details", "Actions"][i]}
                    </div>
                    <div className="mt-4 space-y-2">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <div key={k} className="h-8 rounded-lg bg-white/10" />
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between text-[10px] opacity-70">
                      <span>Screen {i + 1} / 3</span>
                      <Play className="size-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))} */}
        {project.gallery?.map((image, index) => (
  <Reveal key={index} delay={index * 100}>
    <div className="mx-auto max-w-[260px]">
      <div className="phone-mockup">
        <div className="phone-screen">
          <img
            src={image}
            alt={`${project.name} Screen ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </Reveal>
))}
      </div>
    </div>
  </section>

  {/* Content with sidebar TOC */ }
  <section className="py-16">
    <div className="container-x grid gap-10 lg:grid-cols-[240px_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-28">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Contents</div>
          <ul className="mt-4 space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <article className="space-y-14 max-w-3xl">
        <Section id="overview" title="Overview">
          <p>{project.overview}</p>
        </Section>

        <Section id="responsibilities" title="Responsibilities">
          <ul className="space-y-2">
            {project.responsibilities.map((f: string) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="problem" title="Problem Statement">
          <p>{project.problem}</p>
        </Section>

        <Section id="solution" title="Solution">
          <p>{project.solution}</p>
        </Section>

        <Section id="features" title="Key Features">
          <ul className="space-y-2">
            {project.features.map((f: string) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="architecture" title="Architecture">
          <ul className="space-y-2">
            {project.architecture.map((f: string) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="challenges" title="Challenges">
          <ul className="space-y-2">
            {project.challenges.map((f: string) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2 size-1.5 rounded-full bg-destructive shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>

        {project.lessons && project.lessons.length > 0 && (
          <Section id="lessons" title="Lessons Learned">
            <ul className="space-y-2">
              {project.lessons.map((f: string) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-success shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.future && project.future.length > 0 && (
          <Section id="future" title="Future Improvements">
            <ul className="space-y-2">
              {project.future.map((f: string) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </article>
    </div>
  </section>

  {/* Related Project */ }
  {
    project.related && (
      <section className="py-16 border-t border-border">
        <div className="container-x">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Related Project</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Works together with
            </h2>
          </Reveal>
          <Reveal>
            <Link
              to="/projects/$slug"
              params={{ slug: project.related.slug }}
              className="mt-6 block glass rounded-2xl p-6 tilt-card group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {project.related.label}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {project.related.description}
                  </p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    )
  }

  {/* Prev/Next */ }
      <section className="py-16 border-t border-border">

        <div className="container-x grid gap-4 sm:grid-cols-2">
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="glass rounded-2xl p-6 tilt-card group"
          >
            <div className="text-xs text-muted-foreground inline-flex items-center gap-2">
              <ArrowLeft className="size-3" /> Previous project
            </div>
            <div className="mt-2 text-lg font-semibold group-hover:text-accent transition-colors">
              {prev.name}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{prev.tagline}</div>
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="glass rounded-2xl p-6 tilt-card group text-right"
          >
            <div className="text-xs text-muted-foreground inline-flex items-center gap-2 justify-end w-full">
              Next project <ArrowRight className="size-3" />
            </div>
            <div className="mt-2 text-lg font-semibold group-hover:text-accent transition-colors">
              {next.name}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{next.tagline}</div>
          </Link>
        </div>
      </section>

      <Footer />
    </main >
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div id={id} className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-4 text-base text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </Reveal>
  );
}
