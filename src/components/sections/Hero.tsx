import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import SignalField from "@/components/fx/SignalField";
import Magnetic from "@/components/fx/Magnetic";
import RotatingText from "@/components/RotatingText";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/content";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => (
  <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
    {/* Ambient color */}
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] animate-float rounded-full bg-cyan/20 blur-[140px]" />
      <div className="absolute -right-40 bottom-[-10%] h-[620px] w-[620px] animate-float rounded-full bg-violet/20 blur-[160px] [animation-delay:-9s]" />
      <div className="grid-bg absolute inset-0" />
    </div>
    <div className="absolute inset-0" aria-hidden="true">
      <SignalField />
    </div>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" aria-hidden="true" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

    <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8">
      <motion.div {...rise(0.1)} className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground sm:text-sm">
        <span className="relative h-2 w-2 animate-pulse-dot rounded-full bg-cyan" />
        ML co-op at Multimatic · CV research at Ontario Tech
      </motion.div>

      <motion.p {...rise(0.2)} className="eyebrow mt-8">
        {profile.name} · {profile.title}
      </motion.p>

      <motion.h1
        {...rise(0.3)}
        className="mt-4 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-7xl lg:text-[5.5rem]"
      >
        Machine learning for the <span className="text-gradient">physical world.</span>
      </motion.h1>

      <motion.p {...rise(0.45)} className="mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        I build models that <RotatingText items={profile.rotating} />
      </motion.p>

      <motion.div {...rise(0.6)} className="mt-10 flex flex-wrap items-center gap-3">
        <Magnetic>
          <a
            href="#experience"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan to-violet px-6 py-3.5 font-medium text-background shadow-[0_10px_40px_-10px_hsl(var(--cyan)/0.7)] transition-shadow hover:shadow-[0_10px_50px_-6px_hsl(var(--violet)/0.8)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            See the work
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href={profile.resumeUrl}
            download
            className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-medium transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            <Download size={18} /> Resume
          </a>
        </Magnetic>
        <div className="sm:ml-3">
          <SocialLinks />
        </div>
      </motion.div>
    </div>

    <motion.a
      href="#impact"
      aria-label="Scroll to impact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:flex"
    >
      Scroll
      <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        <ArrowDown size={14} />
      </motion.span>
    </motion.a>
  </section>
);

export default Hero;
