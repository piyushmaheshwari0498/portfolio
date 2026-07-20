import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold shadow-lg shadow-primary/30 transition-transform group-hover:scale-105">
              PM
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">Piyush Maheshwari</div>
              <div className="text-xs text-muted-foreground leading-tight">Mobile Developer</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-9 place-items-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <Github className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-9 place-items-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110 transition"
            >
              <Download className="size-4" /> Resume
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden grid size-10 place-items-center rounded-lg hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3">
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                <Download className="size-4" /> Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
