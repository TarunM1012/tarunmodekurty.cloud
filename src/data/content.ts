export const profile = {
  name: "Tarun Modekurty",
  title: "Machine Learning Engineer",
  focus: "Industrial AI & Computer Vision",
  location: "Oshawa, Ontario",
  relocation: "Open to relocating anywhere in Canada",
  email: "m.tarun1012@gmail.com",
  github: "https://github.com/TarunM1012",
  linkedin: "https://www.linkedin.com/in/tarun-modekurty/",
  resumeUrl: "/Tarun_Modekurty_Resume.pdf",
  photo: "/tarun.jpg",
  now: "Submitting my zero-shot compositional action recognition (ZS-CAR) paper to CVPR.",
  headline: "I build machine learning that holds up on the factory floor.",
  intro:
    "Software engineering co-op student at Ontario Tech. At Multimatic I turn raw plant data into tools for the production floor; in the Visual Computing Lab I research video models that recognize actions they have never seen. I earned a welding certification to understand the welds my models judge.",
};

export const current = [
  { org: "Multimatic Dynamic Suspensions", role: "Application Engineering Co-op, ML & Industrial Data" },
  { org: "Visual Computing Lab, Ontario Tech", role: "Research Assistant, Computer Vision" },
];

export const results = [
  { value: "3.75M", label: "production welds covered by a weld-quality early-warning system I built" },
  { value: "70%", label: "of weld defects caught before visual inspection, with minimal false alarms" },
  { value: "+3.1", label: "points over the published state of the art in zero-shot action recognition" },
  { value: "1st", label: "of 15 teams, Cognitive Innovation Competition, for GridSens" },
];

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  org: string;
  year: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  diagram: "weld" | "zeroshot" | "grid";
  link?: { href: string; label: string };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "weld-early-warning",
    index: "01",
    title: "Weld-quality early warning",
    org: "Multimatic Dynamic Suspensions",
    year: "2026",
    summary: "From a SCADA analysis brief to a system, now being evaluated by operators, that ranks which parts to inspect first.",
    problem:
      "Eight FANUC welding robots produce millions of welds. Defects were found by visual inspection after the fact, with no way to know which parts to check first.",
    approach:
      "Built a real-time MQTT pipeline on an air-gapped plant network to stream current and voltage waveforms. Showed that high-frequency waveform features reveal defects before inspection, and trained a defect-risk model on 984 labels hand-corrected with weld process engineers.",
    outcome:
      "A daily “inspect these 30 first” list, now being evaluated by operators each shift, and a live telemetry dashboard the team uses daily. Covers 3.75M production welds.",
    metrics: [
      { value: "3.75M", label: "welds" },
      { value: "70%", label: "catch rate" },
      { value: "0.81", label: "AUC" },
      { value: "8", label: "robots" },
    ],
    stack: ["Python", "MQTT", "Ignition SCADA", "scikit-learn", "Time-series features", "SPC"],
    diagram: "weld",
  },
  {
    id: "zero-shot-actions",
    index: "02",
    title: "Recognizing actions a model has never seen",
    org: "Visual Computing Lab, Ontario Tech",
    year: "2026",
    summary: "Zero-shot compositional action recognition (ZS-CAR). Paper being submitted to CVPR.",
    problem:
      "Video models fail on verb–object combinations absent from training, such as “folding paper”. The published state of the art on Sth-com is RCORE.",
    approach:
      "Paired a frozen video expert for verbs with a frozen image expert for objects, fine-tuning no backbone. Controlled ablations, including swapping in RCORE’s own CLIP backbone, isolate the gain to the architecture. Trained on 79K videos across 3 seeds on the Narval A100 cluster.",
    outcome:
      "3.1 points above RCORE on Sth-com at matched backbones; the video expert nearly doubles verb accuracy on unseen actions.",
    metrics: [
      { value: "+3.1", label: "pts vs SOTA" },
      { value: "64%", label: "unseen-verb acc." },
      { value: "79K", label: "videos" },
      { value: "3", label: "seeds" },
    ],
    stack: ["PyTorch", "CLIP", "SLURM", "A100"],
    diagram: "zeroshot",
  },
  {
    id: "gridsens",
    index: "03",
    title: "GridSens: early warning for grid cascades",
    org: "Cognitive Innovation Competition · 1st of 15",
    year: "2026",
    summary: "A graph neural network that warns of cascading power-grid failures before they happen.",
    problem:
      "Cascading failures spread faster than operators can react, as Texas saw in the February 2021 winter storm.",
    approach:
      "Trained a graph neural network on the grid’s topology to predict cascading failures, then replayed the 2021 storm in simulation on real ERCOT load data through a React and FastAPI dashboard.",
    outcome: "Warnings 2–4 time steps before failure in the replay. First place out of 15 teams.",
    metrics: [
      { value: "2–4", label: "steps early" },
      { value: "73,650", label: "MW peak load" },
      { value: "1st", label: "of 15 teams" },
    ],
    stack: ["Graph neural networks", "FastAPI", "React"],
    diagram: "grid",
  },
];

export type Role = {
  period: string;
  role: string;
  org: string;
  detail: string;
};

export const roles: Role[] = [
  {
    period: "May 2026 – Present",
    role: "Application Engineering Co-op",
    org: "Multimatic Dynamic Suspensions",
    detail: "Weld-quality early warning across 8 robots and 3.75M welds; real-time telemetry on an air-gapped network.",
  },
  {
    period: "Feb 2026 – Present",
    role: "Research Assistant, Computer Vision",
    org: "Visual Computing Lab, Ontario Tech University",
    detail: "Zero-shot compositional action recognition, 3.1 points above the published state of the art.",
  },
  {
    period: "Feb – May 2026",
    role: "Research Associate",
    org: "AI Hub, Durham College",
    detail: "Benchmarked embedding models for similar-defect search on manufacturing records; recommendation improved MRR by 29%.",
  },
  {
    period: "Dec 2025 – Mar 2026",
    role: "AI Software Engineer",
    org: "METRIS by Sanjeevani AI",
    detail: "Led the FastAPI backend and designed a 35-agent engine scoring AI-compliance risk against 2,100+ checkpoints, in under 40 minutes.",
  },
  {
    period: "May – Oct 2025",
    role: "Generative AI Engineering Intern",
    org: "Second Brain Labs",
    detail: "RAG system over 75,000+ sales calls that surfaced 1,800+ objection-handling patterns that powered the sales team’s chatbot.",
  },
];

export const founder = {
  period: "Nov 2024 – Sep 2025",
  role: "Co-founder & CTO",
  org: "Blaze",
  url: "https://blazefounder.app/",
  detail:
    "Built and shipped a platform matching startup founders with co-founders: real-time matching and messaging, Stripe subscriptions, and the full React, Node.js and Supabase stack. 50+ registered users.",
};

export const recognition = [
  { year: "2026", title: "CVPR submission, in progress", detail: "Zero-shot compositional action recognition (ZS-CAR)" },
  { year: "2026", title: "1st place of 15 teams", detail: "Cognitive Innovation Competition (GridSens)" },
  { year: "2026", title: "Manual & robotic welding certification", detail: "Multimatic" },
];

export const otherWork = [
  {
    title: "CodeGuard",
    detail: "Multi-model code review where three local LLMs must agree before raising a finding; caught 7 of 7 seeded security bugs.",
    href: "https://github.com/TarunM1012/codeguard",
  },
  {
    title: "AI Stock Report Generator",
    detail: "LLM-generated equity reports from real-time Polygon market data.",
    href: "https://github.com/TarunM1012/AI-stock-report-generator",
  },
  {
    title: "Handwritten Digit Classifier",
    detail: "A PyTorch MNIST classifier built end to end.",
    href: "https://github.com/TarunM1012/handwritten-digit-classifier",
  },
];

export const skills = [
  { group: "Machine learning", items: "PyTorch, scikit-learn, time-series anomaly detection, computer vision, graph neural networks, RAG and LLM agents (LangGraph)" },
  { group: "Data & systems", items: "Python, SQL, FastAPI, MQTT, Docker, AWS, SLURM / HPC" },
  { group: "Domain", items: "Industrial telemetry, SCADA (Ignition), statistical process control, EU AI Act, ISO 42001, NIST" },
];

export const education = {
  degree: "B.Eng. Software Engineering (Co-op)",
  school: "Ontario Tech University",
  period: "Expected May 2028",
};
