import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = profile.nav.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-white/[0.07] bg-background/80 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Badavath Sandeep — home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 font-heading text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden font-heading text-sm font-semibold sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {profile.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-[13px] transition-colors",
                  active === item.id ? "bg-white/[0.07] text-white" : "text-muted-foreground hover:text-white"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href="#resume" size="sm" variant="outline" className="hidden sm:inline-flex">
            Resume
          </Button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-white xl:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/[0.07] xl:hidden">
          <ul className="container-x grid max-h-[calc(100dvh-5rem)] gap-1 overflow-y-auto py-4">
            {[...profile.nav, { id: "resume", label: "Resume" }].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-sm",
                    active === item.id ? "bg-white/[0.07] text-white" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
