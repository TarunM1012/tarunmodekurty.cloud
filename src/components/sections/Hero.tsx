import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { current, profile, results } from "@/data/content";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => (
  <section id="top" className="mx-auto max-w-6xl px-6 pt-36 md:pt-44">
    <motion.p {...fade(0)} className="label">
      {profile.title} · {profile.focus}
    </motion.p>

    <motion.h1
      {...fade(0.1)}
      className="mt-6 max-w-4xl text-balance font-serif text-5xl font-light leading-[1.04] tracking-[-0.025em] sm:text-6xl md:text-7xl"
    >
      I build machine learning that holds up on the <em className="italic text-signal">factory floor.</em>
    </motion.h1>

    <div className="mt-12 grid gap-10 md:grid-cols-12">
      <motion.div {...fade(0.2)} className="md:col-span-7">
        <p className="max-w-xl text-lg leading-relaxed text-graphite">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal"
          >
            Say hello
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href={profile.resumeUrl} download className="group inline-flex items-center gap-2 text-sm font-medium">
            <span className="link">Download résumé</span>
            <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </motion.div>

      <motion.aside {...fade(0.3)} className="md:col-span-4 md:col-start-9" aria-label="About me right now">
        <div className="flex items-center gap-4">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={72}
            height={72}
            className="h-[72px] w-[72px] rounded-full object-cover ring-1 ring-rule"
          />
          <div>
            <p className="label">Now</p>
            <p className="mt-1 text-sm leading-snug">{profile.now}</p>
          </div>
        </div>
        <p className="label mt-8">Currently</p>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {current.map((c) => (
            <li key={c.org} className="py-4">
              <p className="font-medium">{c.org}</p>
              <p className="mt-0.5 text-sm text-graphite">{c.role}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-graphite">
          {profile.location}. {profile.relocation}.
        </p>
      </motion.aside>
    </div>

    <motion.dl {...fade(0.4)} className="mt-20 grid grid-cols-2 border-t border-ink md:mt-28 md:grid-cols-4">
      {results.map((r, i) => (
        <div
          key={r.value}
          className={`py-8 pr-6 ${i % 2 === 1 ? "pl-6 border-l border-rule" : ""} ${i >= 2 ? "border-t border-rule md:border-t-0" : ""} ${
            i === 2 ? "md:border-l md:pl-6" : ""
          }`}
        >
          <dt className="sr-only">{r.label}</dt>
          <dd>
            <span className="block font-serif text-5xl font-light tracking-[-0.03em] md:text-6xl">{r.value}</span>
            <span className="mt-3 block text-sm leading-snug text-graphite">{r.label}</span>
          </dd>
        </div>
      ))}
    </motion.dl>
  </section>
);

export default Hero;
