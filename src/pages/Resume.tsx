import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { profile } from "@/data/content";

const Resume = () => (
  <div className="min-h-screen">
    <Navigation />
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-graphite hover:text-ink">
        <ArrowLeft size={14} /> Home
      </Link>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-8">
        <div>
          <h1 className="font-serif text-5xl font-light tracking-[-0.02em]">Résumé</h1>
          <p className="mt-2 text-graphite">
            {profile.title} · {profile.focus}
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-ink px-4 py-2.5 text-sm transition-colors hover:bg-ink hover:text-paper"
          >
            Open <ArrowUpRight size={15} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2.5 text-sm text-paper transition-colors hover:bg-signal"
          >
            Download PDF <ArrowDown size={15} />
          </a>
        </div>
      </div>
      <object
        data={`${profile.resumeUrl}#view=FitH`}
        type="application/pdf"
        className="mt-10 h-[85vh] w-full rounded-sm border border-rule bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
      >
        <p className="p-10 text-center text-graphite">
          Your browser can’t preview PDFs here.{" "}
          <a href={profile.resumeUrl} className="underline">
            Download the résumé
          </a>{" "}
          instead.
        </p>
      </object>
    </main>
  </div>
);

export default Resume;
