import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Download, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const roles = [
  "Android Engineer",
  "Flutter Developer",
  "Offline-First Architect",
  "Firebase Specialist",
];

function useTyped(words: string[]) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, txt.length + 1);
        setTxt(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, Math.max(0, txt.length - 1));
        setTxt(next);
        if (next.length === 0) {
          setDel(false);
          setI((n) => n + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return txt;
}

export function Hero() {
  const typed = useTyped(roles);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  return (
    <section
      className="relative isolate flex flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[100svh] md:pt-40 md:pb-24"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
      }}
    >
      <div className="aurora" />
      <div className="grid-overlay" />
      <div
        className="pointer-events-none absolute -z-0 hidden size-[520px] rounded-full opacity-40 blur-3xl transition-transform duration-300 md:block"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.14 232 / 0.6), transparent 60%)",
          left: `calc(${mouse.x * 100}% - 260px)`,
          top: `calc(${mouse.y * 100}% - 260px)`,
        }}
      />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60"></span>
              <span className="relative inline-flex size-2 rounded-full bg-success"></span>
            </span>
            {profile.status}
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting{" "}
            <span className="text-gradient">production-grade</span>{" "}
            mobile products.
          </h1>

          <div className="mt-6 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 text-base text-muted-foreground sm:text-lg md:text-xl">
            <Sparkles className="size-4 self-center text-accent" />
            <span>
              I&apos;m <span className="text-foreground font-medium">{profile.name}</span>,
            </span>
            <span className="text-foreground font-medium">
              a {typed}
              <span className="caret" />
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <div className="flex justify-center gap-3 sm:contents">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            <div className="inline-flex items-center gap-2">
              <MapPin className="size-4" /> {profile.location}
            </div>
            <div>
              <span className="text-foreground font-medium">{profile.yearsExperience}+</span>{" "}
              years experience
            </div>
            <div>
              <span className="text-foreground font-medium">15+</span> apps shipped
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center md:mt-16">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="scroll-indicator inline-flex flex-col items-center gap-2 text-xs text-muted-foreground"
          >
            Scroll
            <span className="h-8 w-[1px] bg-gradient-to-b from-muted-foreground to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}
