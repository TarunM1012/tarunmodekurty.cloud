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
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="font-mono text-xs text-graphite">
          {s.index} · {s.org}
        </p>
        <p className="font-mono text-xs text-graphite">{s.year}</p>
      </div>
      <h3 className="mt-3 font-serif text-3xl font-light tracking-[-0.01em] md:text-4xl">{s.title}</h3>
      <p className="mt-3 max-w-2xl text-lg text-graphite">{s.summary}</p>
    </Reveal>

    <Reveal delay={0.05}>
      <dl
        className={`mt-8 grid grid-cols-2 gap-px border border-rule bg-rule [&>*:last-child:nth-child(odd)]:col-span-2 sm:[&>*:last-child:nth-child(odd)]:col-span-1 ${
          s.metrics.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
        }`}
      >
        {s.metrics.map((m) => (
          <div key={m.label} className="bg-paper px-4 py-4">
            <dt className="sr-only">{m.label}</dt>
            <dd>
              <span className="block font-serif text-3xl font-light tracking-tight">{m.value}</span>
              <span className="mt-1 block text-xs text-graphite">{m.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>

    <Reveal delay={0.05} className="mt-8">
      {diagramFor(s.diagram)}
    </Reveal>

    <Reveal delay={0.05}>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {[
          ["Problem", s.problem],
          ["Approach", s.approach],
          ["Outcome", s.outcome],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="label text-ink">{k}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-graphite">{v}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 font-mono text-xs text-graphite">{s.stack.join("  ·  ")}</p>
    </Reveal>
  </article>
);

const Work = () => (
  <Section id="work" label="Selected work" title="Three systems, from the plant floor to the research lab.">
    <div className="space-y-20">
      {caseStudies.map((s) => (
        <Study key={s.id} s={s} />
      ))}
    </div>

    <Reveal className="mt-24">
      <p className="label">Also built</p>
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
