import { Award, FileText, Download } from "lucide-react";
import { certifications, profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 md:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-accent">
                05 — Certifications
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Trained hands, <span className="text-gradient">tested craft</span>.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={i * 100}>
                  <div className="glass rounded-2xl p-5 tilt-card">
                    <div className="flex items-start gap-3">
                      <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent">
                        <Award className="size-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{c.title}</div>
                        <div className="text-sm text-accent">{c.issuer}</div>
                        <div className="text-xs text-muted-foreground mt-1">{c.period}</div>
                        <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Resume preview */}
          <Reveal delay={120}>
            <div id="resume" className="glass rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                  <FileText className="size-4" /> Resume
                </div>
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110 transition"
                >
                  <Download className="size-4" /> Download PDF
                </a>
              </div>

              <div className="mt-5 rounded-2xl border border-border overflow-hidden bg-black/40">
                <object
                  data={profile.resume}
                  type="application/pdf"
                  className="w-full h-[560px]"
                  aria-label="Piyush Maheshwari resume preview"
                >
                  <div className="p-8 text-sm text-muted-foreground">
                    Your browser can&apos;t display PDFs inline.{" "}
                    <a href={profile.resume} className="text-accent underline">
                      Download the resume
                    </a>
                    .
                  </div>
                </object>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
