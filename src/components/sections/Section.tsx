import type { ReactNode } from "react";
import Reveal from "@/components/fx/Reveal";

/** Editorial section: a rule, a small label in the left column, content on the right. */
const Section = ({ id, label, title, children }: { id: string; label: string; title?: string; children: ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl px-6">
    <div className="grid gap-8 border-t border-rule py-20 md:grid-cols-12 md:py-28">
      <Reveal className="md:col-span-3">
        <p className="label">{label}</p>
      </Reveal>
      <div className="min-w-0 md:col-span-9">
        {title && (
          <Reveal>
            <h2 className="mb-12 max-w-2xl text-balance font-serif text-4xl font-light leading-[1.1] tracking-[-0.015em] md:text-5xl">
              {title}
            </h2>
          </Reveal>
        )}
        {children}
      </div>
    </div>
  </section>
);

export default Section;
