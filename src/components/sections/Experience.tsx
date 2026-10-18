import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Rocket } from "lucide-react";
import Reveal from "@/components/fx/Reveal";
import Spotlight from "@/components/fx/Spotlight";
import SectionHeading from "./SectionHeading";
import { experiences, legacy } from "@/data/content";

const Tag = ({ children, tone = "cyan" }: { children: string; tone?: "cyan" | "amber" }) => (
  <span
    className={
      tone === "amber"
        ? "rounded-md border border-amber/20 bg-amber/[0.06] px-2 py-0.5 font-mono text-[11px] text-amber/90"
        : "rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
    }
  >
    {children}
  </span>
);

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading
        eyebrow="02 · Experience"
        title="From factory telemetry to frontier research."
        sub="Industrial ML, computer vision research, and LLM systems that people actually use."
      />

      <div ref={ref} className="relative pl-8 sm:pl-12">
        {/* Timeline rail with a scroll-driven fill */}
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-white/[0.08] sm:left-[11px]" aria-hidden="true" />
        <motion.div
          style={{ scaleY }}
          className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-cyan via-violet to-amber sm:left-[11px]"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={0.05} className="relative">
              <span
                className={`absolute -left-8 top-8 h-[15px] w-[15px] rounded-full border-2 border-background sm:-left-12 sm:h-[23px] sm:w-[23px] sm:border-[5px] ${
                  exp.current ? "animate-pulse-dot bg-cyan" : "bg-violet/80"
                }`}
                aria-hidden="true"
              />
              <Spotlight className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-white/[0.14] sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{exp.company}</h3>
                    <p className="mt-1 text-muted-foreground">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    {exp.current && (
                      <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-cyan">Now</span>
                    )}
                    {exp.period}
                  </div>
                </div>
                <p className="mt-5 text-lg font-medium text-foreground/95">
                  <span className="text-gradient">→</span> {exp.highlight}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-cyan/70" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          ))}

          {/* The founder chapter: kept in the story, styled as an archived entry */}
          <Reveal className="relative pt-6">
            <span
              className="absolute -left-8 top-14 grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-background bg-amber sm:-left-12 sm:h-[23px] sm:w-[23px] sm:border-[5px]"
              aria-hidden="true"
            />
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-amber/80">Legacy · Founder chapter</p>
            <Spotlight
              style={{ ["--spot" as string]: "var(--amber)" }}
              className="rounded-2xl border border-dashed border-amber/25 bg-gradient-to-br from-amber/[0.06] via-transparent to-transparent p-6 transition-colors duration-300 hover:border-amber/45 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber/10 text-amber">
                    <Rocket size={18} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{legacy.company}</h3>
                    <p className="text-muted-foreground">{legacy.role}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{legacy.period}</span>
              </div>
              <p className="mt-5 text-lg font-medium">{legacy.highlight}</p>
              <ul className="mt-4 space-y-2.5">
                {legacy.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                    <span className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-amber/70" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {legacy.tags.map((t) => (
                    <Tag key={t} tone="amber">
                      {t}
                    </Tag>
                  ))}
                </div>
                <a
                  href={legacy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-amber hover:text-amber/80"
                >
                  Visit Blaze
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
