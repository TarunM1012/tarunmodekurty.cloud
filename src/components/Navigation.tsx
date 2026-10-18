import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/content";
import { cn } from "@/lib/utils";

const links = [
  { id: "work", name: "Work" },
  { id: "experience", name: "Experience" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const href = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-rule bg-paper/90 backdrop-blur" : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-serif text-xl tracking-tight">
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.id} href={href(l.id)} className="link text-sm text-graphite transition-colors hover:text-ink">
              {l.name}
            </a>
          ))}
          <Link
            to="/resume"
            className="rounded-sm border border-ink px-3.5 py-1.5 text-sm transition-colors hover:bg-ink hover:text-paper"
          >
            Résumé
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-rule px-6 pb-6 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.id}
              href={href(l.id)}
              onClick={() => setOpen(false)}
              className="block border-b border-rule py-4 font-serif text-2xl"
            >
              {l.name}
            </a>
          ))}
          <Link to="/resume" onClick={() => setOpen(false)} className="mt-6 block rounded-sm bg-ink py-3 text-center text-paper">
            Résumé
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
