import { motion } from "framer-motion";
import { ArrowUpRight, Github, Trophy } from "lucide-react";
import Reveal from "@/components/fx/Reveal";
import Spotlight from "@/components/fx/Spotlight";
import Tilt from "@/components/fx/Tilt";
import SectionHeading from "./SectionHeading";
import { featuredProjects, otherProjects, type Project } from "@/data/content";

/** Power-grid graph where a failure ripples outward from one node. */
const GridVisual = () => {
  const nodes = [
    [40, 50], [110, 30], [180, 60], [250, 35], [70, 120], [150, 115], [230, 125], [300, 95], [120, 180], [210, 185], [290, 170],
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [2, 6], [3, 7], [4, 5], [5, 6], [6, 7], [4, 8], [5, 8], [5, 9], [6, 9], [7, 10], [9, 10]];
  const order = [5, 2, 6, 1, 8, 9, 4, 3, 7, 0, 10];
  return (
    <svg viewBox="0 0 340 220" className="h-full w-full" aria-hidden="true">
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="hsl(var(--cyan) / 0.25)" strokeWidth="1" />
      ))}
      {nodes.map(([x, y], i) => {
        const step = order.indexOf(i);
        return (
          <g key={i}>
            <motion.circle
              cx={x}
              cy={y}
              r="14"
              fill="hsl(var(--amber) / 0.25)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 1.6, delay: step * 0.25, repeat: Infinity, repeatDelay: 2.4 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            />
            <motion.circle
              cx={x}
              cy={y}
              r="5"
              initial={{ fill: "hsl(188 95% 55%)" }}
              animate={{ fill: ["hsl(188 95% 55%)", "hsl(38 95% 58%)", "hsl(188 95% 55%)"] }}
              transition={{ duration: 1.6, delay: step * 0.25, repeat: Infinity, repeatDelay: 2.4 }}
            />
          </g>
        );
      })}
    </svg>
  );
};

/** Three reviewers converge; a finding is raised only on consensus. */
const ConsensusVisual = () => {
  const agents = [
    { x: 60, y: 50, label: "DeepSeek" },
    { x: 280, y: 50, label: "CodeLlama" },
    { x: 170, y: 190, label: "Qwen" },
  ];
  const cx = 170;
  const cy = 105;
  return (
    <svg viewBox="0 0 340 220" className="h-full w-full" aria-hidden="true">
      {agents.map((a, i) => (
        <g key={a.label}>
          <line x1={a.x} y1={a.y} x2={cx} y2={cy} stroke="hsl(var(--violet) / 0.25)" strokeDasharray="3 5" />
          <motion.circle
            cx={a.x}
            cy={a.y}
            r="3.5"
            fill="hsl(var(--violet))"
            initial={{ cx: a.x, cy: a.y, opacity: 0 }}
            animate={{ cx: [a.x, cx], cy: [a.y, cy], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, delay: i * 0.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeIn" }}
          />
          <circle cx={a.x} cy={a.y} r="16" fill="hsl(var(--violet) / 0.12)" stroke="hsl(var(--violet) / 0.5)" />
          <text x={a.x} y={a.y + (a.y > cy ? 32 : -24)} textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="10">
            {a.label}
          </text>
        </g>
      ))}
      <motion.circle
        cx={cx}
        cy={cy}
        r="20"
        fill="hsl(var(--cyan) / 0.12)"
        stroke="hsl(var(--cyan))"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, times: [0, 0.55, 1] }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="12" className="fill-cyan font-mono">
        3/3
      </text>
    </svg>
  );
};

const visuals: Record<string, () => JSX.Element> = { GridSens: GridVisual, CodeGuard: ConsensusVisual };

const Links = ({ p }: { p: Project }) => (
  <div className="flex items-center gap-4 text-sm">
    {p.liveUrl && (
      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
        Live <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    )}
    {p.githubUrl && (
      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
        <Github size={14} /> Code
      </a>
    )}
  </div>
);

const Projects = () => (
  <section id="projects" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
    <SectionHeading eyebrow="03 · Projects" title="Built to win, then built to last." />

    <div className="grid gap-6 lg:grid-cols-2">
      {featuredProjects.map((p, i) => {
        const Visual = visuals[p.title];
        return (
          <Reveal key={p.title} delay={i * 0.1}>
            <Tilt className="h-full">
              <Spotlight className="ring-gradient glass flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative h-56 border-b border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent p-4">
                  {Visual && <Visual />}
                  {p.badge && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-medium text-amber">
                      <Trophy size={12} /> {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow">{p.tagline}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
                  {p.metric && (
                    <div className="mt-6 flex items-baseline gap-3">
                      <span className="text-gradient text-3xl font-semibold tracking-tight">{p.metric.value}</span>
                      <span className="text-sm text-muted-foreground">{p.metric.label}</span>
                    </div>
                  )}
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Links p={p} />
                  </div>
                </div>
              </Spotlight>
            </Tilt>
          </Reveal>
        );
      })}
    </div>

    <Reveal className="mb-6 mt-20">
      <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Other builds</h3>
    </Reveal>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {otherProjects.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.06}>
          <Spotlight className="glass group flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14]">
            <p className="font-mono text-[11px] text-cyan/80">{p.tagline}</p>
            <h4 className="mt-1.5 font-semibold">{p.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="mt-auto pt-5">
              <Links p={p} />
            </div>
          </Spotlight>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Projects;
