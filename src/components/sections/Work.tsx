import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/fx/Reveal";
import Section from "./Section";
import { Pipeline, WarningWindow, ZeroShot } from "./Diagrams";
import { caseStudies, otherWork, type CaseStudy } from "@/data/content";

const weldSteps = [
  { title: "8 FANUC welding robots", note: "Current & voltage waveforms" },
  { title: "MQTT telemetry", note: "Real-time, air-gapped network" },
  { title: "Waveform features", note: "High-frequency defect signatures" },
  { title: "Defect-risk model", note: "AUC 0.81 · 984 expert labels" },
  { title: "Inspect these 30 first", note: "Daily priority list" },
];

const diagramFor = (d: CaseStudy["diagram"]) =>
  d === "weld" ? <Pipeline steps={weldSteps} /> : d === "zeroshot" ? <ZeroShot /> : <WarningWindow />;

const Study = ({ s }: { s: CaseStudy }) => (
  <article id={s.id} className="border-t border-rule pt-10 first:border-t-0 first:pt-0">
    <Reveal>
      <p className="font-mono text-xs text-graphite">
        {s.org} · {s.year}
      </p>
      <h3 className="mt-3 max-w-2xl text-balance font-serif text-3xl font-light tracking-[-0.01em] md:text-4xl">{s.title}</h3>
      <div className="mt-6 max-w-2xl space-y-4 text-[17px] leading-relaxed text-graphite">
        {s.story.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
      <p className="mt-6 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-ink">
        {s.numbers.map((n, i) => (
          <span key={n}>
            {i > 0 && <span className="mr-2 text-graphite">·</span>}
            {n}
          </span>
        ))}
      </p>
    </Reveal>

    <Reveal delay={0.05} className="mt-8">
      {diagramFor(s.diagram)}
    </Reveal>

    <Reveal delay={0.05}>
      <p className="mt-6 font-mono text-xs text-graphite">Built with {s.stack.join(", ")}</p>
    </Reveal>
  </article>
);

const Work = () => (
  <Section id="work" label="Things I’ve built" title="What I’ve been working on.">
    <div className="space-y-20">
      {caseStudies.map((s) => (
        <Study key={s.id} s={s} />
      ))}
    </div>

    <Reveal className="mt-24">
      <p className="label">Side projects</p>
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {otherWork.map((w) => (
          <li key={w.title}>
            <a
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1 py-5 transition-colors hover:bg-white/60 md:grid-cols-[14rem_1fr_auto] md:items-baseline md:gap-6"
            >
              <span className="font-medium">{w.title}</span>
              <span className="text-sm text-graphite">{w.detail}</span>
              <ArrowUpRight size={16} className="hidden text-graphite transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink md:block" />
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  </Section>
);

export default Work;
