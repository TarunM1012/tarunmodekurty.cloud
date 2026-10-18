import Reveal from "@/components/fx/Reveal";
import Section from "./Section";
import { education, recognition, skills } from "@/data/content";

const About = () => (
  <Section id="about" label="Recognition & skills">
    <div className="grid gap-16 lg:grid-cols-2">
      <Reveal>
        <p className="label text-ink">Recognition</p>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {recognition.map((r) => (
            <li key={r.title} className="grid grid-cols-[3.5rem_1fr] gap-4 py-5">
              <span className="font-mono text-xs leading-6 text-graphite">{r.year}</span>
              <span>
                <span className="block font-medium">{r.title}</span>
                <span className="block text-sm text-graphite">{r.detail}</span>
              </span>
            </li>
          ))}
          <li className="grid grid-cols-[3.5rem_1fr] gap-4 py-5">
            <span className="font-mono text-xs leading-6 text-graphite">2028</span>
            <span>
              <span className="block font-medium">{education.degree}</span>
              <span className="block text-sm text-graphite">
                {education.school} · {education.period}
              </span>
            </span>
          </li>
        </ul>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="label text-ink">Skills</p>
        <dl className="mt-4 divide-y divide-rule border-y border-rule">
          {skills.map((s) => (
            <div key={s.group} className="py-5">
              <dt className="font-medium">{s.group}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-graphite">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </Section>
);

export default About;
