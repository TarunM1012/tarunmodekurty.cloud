import { useState } from "react";
import { ArrowUpRight, Check, Copy, MapPin } from "lucide-react";
import Magnetic from "@/components/fx/Magnetic";
import Reveal from "@/components/fx/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/content";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8">
      <Reveal>
        <div className="ring-gradient relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-gradient-to-br from-cyan/[0.08] via-background to-violet/[0.1] px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          <p className="eyebrow relative">05 · Contact</p>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
            Have messy real-world data? <span className="text-gradient">Let’s make it useful.</span>
          </h2>
          <p className="relative mt-5 inline-flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} /> {profile.location}
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3.5 font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Say hello <ArrowUpRight size={18} />
              </a>
            </Magnetic>
            <button
              onClick={copy}
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3.5 font-mono text-sm transition-colors hover:border-white/20"
            >
              {copied ? <Check size={16} className="text-cyan" /> : <Copy size={16} />}
              {copied ? "Copied" : profile.email}
            </button>
          </div>
          <div className="relative mt-10 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </Reveal>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="hidden font-mono text-xs sm:block">
          Press <kbd className="rounded border border-white/15 px-1.5 py-0.5">⌘K</kbd> to navigate
        </p>
      </footer>
    </section>
  );
};

export default Contact;
