import { motion } from "framer-motion";

/** Horizontal pipeline on desktop, vertical on mobile; the last node is emphasized. */
export const Pipeline = ({ steps }: { steps: { title: string; note: string }[] }) => (
  <ol className="flex flex-col gap-0 md:flex-row md:items-stretch">
    {steps.map((s, i) => {
      const last = i === steps.length - 1;
      return (
        <li key={s.title} className="flex flex-col md:flex-1 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={`flex-1 rounded-sm border p-4 md:h-full ${last ? "border-ink bg-ink text-paper" : "border-rule bg-white"}`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-60">Step {i + 1}</p>
            <p className="mt-1.5 text-sm font-medium leading-snug">{s.title}</p>
            <p className={`mt-1 text-xs leading-snug ${last ? "text-paper/70" : "text-graphite"}`}>{s.note}</p>
          </motion.div>
          {!last && (
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0, scaleY: 0 }}
              whileInView={{ scaleX: 1, scaleY: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
              className="mx-auto h-6 w-px origin-top bg-ink/40 md:mx-0 md:h-px md:w-5 md:origin-left"
            />
          )}
        </li>
      );
    })}
  </ol>
);

/** Two frozen experts composed into an unseen action, plus the reported accuracy gain. */
export const ZeroShot = () => (
  <div className="grid gap-6 md:grid-cols-2">
    <div className="rounded-sm border border-rule bg-white p-5">
      <p className="label">Architecture</p>
      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-sm">
        <div className="space-y-3">
          <div className="rounded-sm border border-rule p-3">
            <p className="font-medium">Video expert</p>
            <p className="text-xs text-graphite">frozen · verb: “fold”</p>
          </div>
          <div className="rounded-sm border border-rule p-3">
            <p className="font-medium">Image expert</p>
            <p className="text-xs text-graphite">frozen · object: “paper”</p>
          </div>
        </div>
        <svg width="28" height="96" viewBox="0 0 28 96" aria-hidden="true" className="text-ink/40">
          <path d="M0 24 C16 24 12 48 28 48 M0 72 C16 72 12 48 28 48" fill="none" stroke="currentColor" />
        </svg>
        <div className="rounded-sm border border-ink bg-ink p-3 text-paper">
          <p className="font-medium">“Folding paper”</p>
          <p className="text-xs text-paper/70">never seen in training</p>
        </div>
      </div>
    </div>
    <div className="rounded-sm border border-rule bg-white p-5">
      <p className="label">Verb accuracy on unseen actions</p>
      <div className="mt-6 space-y-5">
        {[
          { label: "Without video expert", value: 34, strong: false },
          { label: "With video expert", value: 64, strong: true },
        ].map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-sm">
              <span className={b.strong ? "font-medium" : "text-graphite"}>{b.label}</span>
              <span className="font-mono">{b.value}%</span>
            </div>
            <div className="mt-2 h-2 bg-rule/70">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${b.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full ${b.strong ? "bg-signal" : "bg-ink/40"}`}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-graphite">Ablation from the paper in preparation.</p>
    </div>
  </div>
);

/** Timeline showing the 2–4 step warning window ahead of a cascade. */
export const WarningWindow = () => {
  const steps = [-6, -5, -4, -3, -2, -1, 0];
  return (
    <div className="rounded-sm border border-rule bg-white p-5">
      <p className="label">Warning window</p>
      <div className="relative mt-8">
        <div className="grid grid-cols-7">
          {steps.map((t) => {
            const inWindow = t >= -4 && t <= -2;
            return (
              <div key={t} className="relative flex flex-col items-center">
                <div className={`h-10 w-full ${inWindow ? "bg-signal/15" : ""} ${t === -4 ? "border-l border-signal" : ""} ${t === -2 ? "border-r border-signal" : ""}`} />
                <span className={`mt-2 font-mono text-[11px] ${t === 0 ? "font-medium text-ink" : "text-graphite"}`}>
                  {t === 0 ? "fail" : `t${t}`}
                </span>
              </div>
            );
          })}
        </div>
        <div className="pointer-events-none absolute left-0 right-0 top-5 h-px bg-ink/40" aria-hidden="true" />
        <span className="absolute right-[7%] top-5 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-ink" aria-hidden="true" />
      </div>
      <p className="mt-5 text-sm text-graphite">
        GridSens raises its warning <span className="font-medium text-ink">2–4 time steps</span> before a cascading failure, replayed on real ERCOT load data from the February 2021 Texas storm.
      </p>
    </div>
  );
};
