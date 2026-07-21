import { useEffect, useRef, useState } from "react";
import { achievements } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();
            const dur = 1400;
            const step = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-x">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <Reveal key={a.label} delay={i * 80}>
                <div className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-semibold text-gradient">
                    <Counter value={a.value} suffix={a.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{a.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
