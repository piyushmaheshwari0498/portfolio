import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold shadow-lg shadow-primary/30">
            PM
          </div>
          <div className="text-sm">
            <div className="font-semibold">{profile.name}</div>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} — Designed & built with care.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-9 place-items-center rounded-lg glass hover:bg-white/10 transition"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-lg glass hover:bg-white/10 transition"
          >
            <Github className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-lg glass hover:bg-white/10 transition"
          >
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
