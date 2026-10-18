import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/fx/Reveal";
import Section from "./Section";
import { founder, roles } from "@/data/content";

const Row = ({ period, role, org, detail }: { period: string; role: string; org: string; detail: string }) => (
  <div className="grid gap-2 py-7 md:grid-cols-[11rem_1fr] md:gap-8">
    <p className="font-mono text-xs leading-6 text-graphite">{period}</p>
    <div>
      <p className="font-medium">
        {role}, <span className="text-graphite">{org}</span>
      </p>
      <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-graphite">{detail}</p>
    </div>
  </div>
);

const Experience = () => (
  <Section id="experience" label="Experience">
    <Reveal>
      <div className="divide-y divide-rule border-y border-rule">
        {roles.map((r) => (
          <Row key={r.org + r.period} {...r} />
        ))}
      </div>
    </Reveal>

    <Reveal className="mt-16">
      <p className="label">Founder experience</p>
      <div className="mt-4 border-l-2 border-signal bg-white/60 py-1 pl-6 pr-4">
        <div className="grid gap-2 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
          <p className="font-mono text-xs leading-6 text-graphite">{founder.period}</p>
          <div>
            <p className="font-medium">
              {founder.role}, <span className="text-graphite">{founder.org}</span>
            </p>
            <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-graphite">{founder.detail}</p>
            <a
              href={founder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-1 text-sm font-medium"
            >
              <span className="link">blazefounder.app</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  </Section>
);

export default Experience;
