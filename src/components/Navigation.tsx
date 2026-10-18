import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Download, Menu, X } from "lucide-react";
import { profile } from "@/data/content";
import { cn } from "@/lib/utils";

const sections = [
  { id: "impact", name: "Impact" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

const useActiveSection = (enabled: boolean) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [enabled]);
  return active;
};

const Navigation = ({ onOpenCommand }: { onOpenCommand?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const active = useActiveSection(onHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full items-center justify-between rounded-2xl px-4 transition-all duration-500",
          scrolled ? "glass bg-background/70 h-14 max-w-4xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]" : "h-16 max-w-6xl border border-transparent"
        )}
      >
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Home">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <defs>
              <linearGradient id="nav-g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="hsl(var(--cyan))" />
                <stop offset="1" stopColor="hsl(var(--violet))" />
              </linearGradient>
            </defs>
            <path
              d="M6 38 L18 38 L24 20 L32 50 L39 14 L46 38 L58 38"
              fill="none"
              stroke="url(#nav-g)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-500 group-hover:[stroke-dasharray:6_4]"
            />
          </svg>
          <span className="font-semibold tracking-tight">Tarun Modekurty</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={href(s.id)}
              className={cn(
                "relative rounded-lg px-3 py-1.5 text-sm transition-colors",
                active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active === s.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {s.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {onOpenCommand && (
            <button
              onClick={onOpenCommand}
              className="flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
              aria-label="Open command menu"
            >
              <Command size={12} /> K
            </button>
          )}
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen((o) => !o)}
          className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass absolute inset-x-4 top-20 rounded-2xl p-2 md:hidden"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={href(s.id)}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {s.name}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 font-medium text-background"
            >
              <Download size={16} /> Download resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
