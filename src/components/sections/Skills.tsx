import { Award, GraduationCap } from "lucide-react";
import Reveal from "@/components/fx/Reveal";
import Spotlight from "@/components/fx/Spotlight";
import SectionHeading from "./SectionHeading";
import { certification, education, skills } from "@/data/content";

const Skills = () => (
  <section id="skills" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
    <SectionHeading eyebrow="04 · Toolkit" title="The stack behind the numbers." />

    <div className="grid gap-4 md:grid-cols-3">
      {skills.map((s, i) => (
        <Reveal key={s.group} delay={i * 0.08}>
          <Spotlight className="glass h-full rounded-2xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.group}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:text-cyan"
                >
                  {item}
                </span>
              ))}
            </div>
          </Spotlight>
        </Reveal>
      ))}
    </div>

    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <Reveal>
        <Spotlight className="glass flex h-full items-start gap-4 rounded-2xl p-6">
          <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
            <GraduationCap size={20} />
          </span>
          <div>
            <h3 className="font-semibold">{education.degree}</h3>
            <p className="text-muted-foreground">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground/70">{education.period}</p>
          </div>
        </Spotlight>
      </Reveal>
      <Reveal delay={0.08}>
        <Spotlight
          style={{ ["--spot" as string]: "var(--amber)" }}
          className="glass flex h-full items-start gap-4 rounded-2xl p-6"
        >
          <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-amber/10 text-amber">
            <Award size={20} />
          </span>
          <div>
            <h3 className="font-semibold">Certified: {certification.name}</h3>
            <p className="text-muted-foreground">{certification.issuer}</p>
            <p className="mt-1 text-sm text-muted-foreground/80">{certification.note}</p>
          </div>
        </Spotlight>
      </Reveal>
    </div>
  </section>
);

export default Skills;
