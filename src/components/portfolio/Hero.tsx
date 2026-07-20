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
      className="relative isolate min-h-[100svh] overflow-hidden pt-32 md:pt-40"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
      }}
    >
      <div className="aurora" />
      <div className="grid-overlay" />
      <div
        className="pointer-events-none absolute -z-0 size-[520px] rounded-full opacity-40 blur-3xl transition-transform duration-300"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.14 232 / 0.6), transparent 60%)",
          left: `calc(${mouse.x * 100}% - 260px)`,
          top: `calc(${mouse.y * 100}% - 260px)`,
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60"></span>
                <span className="relative inline-flex size-2 rounded-full bg-success"></span>
              </span>
              {profile.status}
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
              Crafting{" "}
              <span className="text-gradient">production-grade</span>
              <br />
              mobile products.
            </h1>

            <div className="mt-6 flex items-center gap-2 text-lg md:text-xl text-muted-foreground">
              <Sparkles className="size-4 text-accent" />
              <span>
                I&apos;m <span className="text-foreground font-medium">{profile.name}</span>, a{" "}
              </span>
              <span className="text-foreground font-medium">
                {typed}
                <span className="caret" />
              </span>
            </div>

            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110 transition"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <Download className="size-4" /> Download Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
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

          {/* Phone visual */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl" />
            <div className="phone-mockup rotate-[-4deg] transition-transform duration-700 hover:rotate-0">
              <div className="phone-screen relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, oklch(0.30 0.10 265), oklch(0.20 0.08 232))",
                  }}
                />
                <div className="relative flex flex-col h-full p-5 text-white">
                  <div className="flex items-center justify-between text-[10px] opacity-70">
                    <span>9:41</span>
                    <span>•••••</span>
                  </div>
                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-widest opacity-60">
                      Today&apos;s Sales
                    </div>
                    <div className="mt-1 text-4xl font-semibold tabular-nums">
                      ₹ 84,320
                    </div>
                    <div className="mt-1 text-xs text-emerald-300">+12.4% vs yesterday</div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { l: "Orders", v: "128" },
                      { l: "Avg. Ticket", v: "₹ 658" },
                      { l: "Kitchen", v: "6" },
                      { l: "Sync", v: "Live" },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="rounded-xl bg-white/10 backdrop-blur px-3 py-2 border border-white/10"
                      >
                        <div className="text-[10px] uppercase opacity-60">{s.l}</div>
                        <div className="text-sm font-semibold">{s.v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto space-y-2">
                    {["Table 04 · KOT sent", "Table 12 · Paid", "Takeaway #221 · Ready"].map(
                      (row) => (
                        <div
                          key={row}
                          className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-xs"
                        >
                          <span>{row}</span>
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            {[
              { l: "Flutter", top: "8%", left: "-6%", d: 0 },
              { l: "Kotlin", top: "62%", left: "-10%", d: 300 },
              { l: "Firebase", top: "18%", right: "-8%", d: 150 },
              { l: "Room DB", top: "72%", right: "-6%", d: 450 },
            ].map((b, i) => (
              <div
                key={i}
                className="absolute glass rounded-full px-3 py-1.5 text-xs font-medium shadow-lg"
                style={{
                  top: b.top,
                  left: (b as any).left,
                  right: (b as any).right,
                  animation: `scroll-bounce 3.5s ease-in-out ${b.d}ms infinite`,
                }}
              >
                {b.l}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
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
