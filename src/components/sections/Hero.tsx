import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { current, profile } from "@/data/content";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => (
  <section id="top" className="mx-auto max-w-6xl px-6 pt-32 md:pt-40">
    <div className="grid gap-12 md:grid-cols-12">
      <div className="md:col-span-7">
        <motion.img
          {...fade(0)}
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={112}
          height={112}
          className="h-28 w-28 rounded-full object-cover ring-1 ring-rule"
        />
        <motion.h1
          {...fade(0.1)}
          className="mt-8 font-serif text-6xl font-light leading-[1.02] tracking-[-0.025em] md:text-7xl"
        >
          Hi, I’m <em className="italic text-signal">Tarun.</em>
        </motion.h1>
        <motion.p {...fade(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-graphite md:text-xl md:leading-relaxed">
          {profile.intro}
        </motion.p>
        <motion.div {...fade(0.3)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
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
        </motion.div>
      </div>

      <motion.aside {...fade(0.35)} className="md:col-span-4 md:col-start-9 md:pt-36" aria-label="What I’m up to">
        <p className="label">Right now</p>
        <p className="mt-3 font-serif text-xl font-light leading-snug">{profile.now}</p>
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {current.map((c) => (
            <li key={c.org} className="py-4">
              <p className="font-medium">{c.org}</p>
              <p className="mt-0.5 text-sm text-graphite">{c.role}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-graphite">
          Based in {profile.location}. {profile.relocation}.
        </p>
      </motion.aside>
    </div>
  </section>
);

export default Hero;
