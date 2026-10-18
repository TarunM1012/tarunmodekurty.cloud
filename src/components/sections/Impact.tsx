import CountUp from "@/components/fx/CountUp";
import Reveal from "@/components/fx/Reveal";
import Spotlight from "@/components/fx/Spotlight";
import SectionHeading from "./SectionHeading";
import { profile, stats } from "@/data/content";

const Impact = () => (
  <section id="impact" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
    <SectionHeading eyebrow="01 · Impact" title="Numbers from production, not notebooks." sub={profile.summary} />
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06} className="bg-background">
          <Spotlight className="group h-full p-8 transition-colors hover:bg-white/[0.015]">
            <div className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent transition-all duration-500 group-hover:from-cyan group-hover:to-violet">
                <CountUp value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
              </span>
            </div>
            <p className="mt-3 text-muted-foreground">{s.label}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">{s.context}</p>
          </Spotlight>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Impact;
