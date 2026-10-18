import Reveal from "@/components/fx/Reveal";

const SectionHeading = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
  <Reveal className="mb-14 max-w-3xl">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>
    {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
  </Reveal>
);

export default SectionHeading;
