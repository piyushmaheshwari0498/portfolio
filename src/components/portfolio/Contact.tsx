import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Phone } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { profile } from "@/lib/portfolio-data";
import { sendContactMessage } from "@/lib/contact.functions";
import { Reveal } from "./Reveal";

export function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const sendMessage = useServerFn(sendContactMessage);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setSent(false);
    if (!state.name.trim() || !state.email.trim() || !state.message.trim()) {
      setErr("Please fill out every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      setErr("Please enter a valid email.");
      return;
    }
    try {
      setSending(true);
      await sendMessage({ data: state });
      setSent(true);
      setState({ name: "", email: "", message: "" });
    } catch (e) {
      console.error(e);
      setErr("Couldn't send your message. Please try again or email directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="aurora opacity-40" />
      </div>

      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-accent">06 — Contact</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                Let&apos;s build something <span className="text-gradient">users love</span>.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Open to freelance projects and full-time roles. Drop a note and I&apos;ll get
                back within 24 hours.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {[
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: profile.location },
                { icon: Github, label: "github.com/piyushmaheshwari0498", href: profile.github },
                {
                  icon: Linkedin,
                  label: "linkedin.com/in/piyush-maheshwari-093bb1157",
                  href: profile.linkedin,
                },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 60}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl glass px-4 py-3 hover:bg-white/10 transition"
                    >
                      <c.icon className="size-4 text-accent" />
                      <span className="text-sm">{c.label}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl glass px-4 py-3">
                      <c.icon className="size-4 text-accent" />
                      <span className="text-sm">{c.label}</span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-3xl p-6 md:p-8 space-y-4"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs text-muted-foreground">Your name</span>
                  <input
                    type="text"
                    value={state.name}
                    onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                    className="mt-1 w-full rounded-xl bg-black/30 border border-border px-4 py-3 text-sm outline-none focus:border-accent transition"
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="block">
                  <span className="text-xs text-muted-foreground">Email</span>
                  <input
                    type="email"
                    value={state.email}
                    onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                    className="mt-1 w-full rounded-xl bg-black/30 border border-border px-4 py-3 text-sm outline-none focus:border-accent transition"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs text-muted-foreground">Message</span>
                <textarea
                  rows={5}
                  value={state.message}
                  onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                  className="mt-1 w-full rounded-xl bg-black/30 border border-border px-4 py-3 text-sm outline-none focus:border-accent transition resize-none"
                  placeholder="Tell me about your project…"
                />
              </label>

              {err && <div className="text-xs text-destructive">{err}</div>}
              {sent && (
                <div className="text-xs text-success">
                  Message sent — thanks for reaching out! I&apos;ll reply within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="size-4" /> {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
