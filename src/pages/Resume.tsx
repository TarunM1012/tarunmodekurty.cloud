import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { profile } from "@/data/content";

const Resume = () => (
  <div className="relative min-h-screen overflow-x-clip">
    <Navigation />
    <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-cyan/15 blur-[140px]" aria-hidden="true" />
    <div className="pointer-events-none absolute -right-40 top-40 h-[480px] w-[480px] rounded-full bg-violet/15 blur-[140px]" aria-hidden="true" />

    <main className="relative mx-auto max-w-5xl px-5 pb-20 pt-32 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-end justify-between gap-6"
      >
        <div>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} /> Back home
          </Link>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Resume</h1>
          <p className="mt-2 text-muted-foreground">
            {profile.title} · {profile.focus}
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium hover:border-white/20"
          >
            <ExternalLink size={16} /> Open
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-violet px-5 py-3 font-medium text-background transition-transform hover:scale-[1.03]"
          >
            <Download size={16} /> Download PDF
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="ring-gradient glass mt-10 overflow-hidden rounded-3xl p-2"
      >
        <object data={`${profile.resumeUrl}#view=FitH`} type="application/pdf" className="h-[80vh] w-full rounded-2xl bg-white">
          <div className="p-10 text-center text-muted-foreground">
            Your browser can’t preview PDFs here.{" "}
            <a href={profile.resumeUrl} className="text-cyan underline">
              Download the resume
            </a>{" "}
            instead.
          </div>
        </object>
      </motion.div>
    </main>
  </div>
);

export default Resume;
