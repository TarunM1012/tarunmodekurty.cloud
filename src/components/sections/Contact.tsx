import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import Reveal from "@/components/fx/Reveal";
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
    <section id="contact" className="mt-10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/60">Contact</p>
          <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-light leading-[1.08] tracking-[-0.02em] md:text-6xl">
            Working on something like this, or just want to talk ML? <em className="italic text-[#F0A374]">I’d love to hear from you.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-sm bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-[#F0A374]"
            >
              Say hello <ArrowUpRight size={16} />
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-sm border border-paper/25 px-5 py-3 font-mono text-sm transition-colors hover:border-paper/60"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied" : profile.email}
            </button>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col gap-6 border-t border-paper/15 pt-8 text-sm text-paper/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <div className="flex gap-6">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link hover:text-paper">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link hover:text-paper">
              GitHub
            </a>
            <a href={profile.resumeUrl} download className="link hover:text-paper">
              Résumé (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
