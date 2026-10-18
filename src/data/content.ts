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
  now: "Writing up my zero-shot compositional action recognition (ZS-CAR) paper, aiming for a CVPR submission.",
  intro:
    "I’m a software engineering student at Ontario Tech, and I like machine learning best once it leaves the notebook. These days that means teaching welding robots at Multimatic to flag bad welds before anyone has to look, and finishing a paper on video models that recognize actions they’ve never seen. I even trained as a welder, so I’d understand the welds my models judge.",
};

export const current = [
  { org: "Multimatic Dynamic Suspensions", role: "Application Engineering Co-op, ML & Industrial Data" },
  { org: "Visual Computing Lab, Ontario Tech", role: "Research Assistant, Computer Vision" },
];

export type CaseStudy = {
  id: string;
  title: string;
  org: string;
  year: string;
  story: string[];
  numbers: string[];
  stack: string[];
  diagram: "weld" | "zeroshot" | "grid";
};

export const caseStudies: CaseStudy[] = [
  {
    id: "weld-early-warning",
    title: "Teaching welding robots to flag their own bad welds",
    org: "Multimatic Dynamic Suspensions",
    year: "2026",
    story: [
      "I was hired to analyze SCADA data. Digging through it, I noticed something: the high-frequency current and voltage waveforms from our eight FANUC welding robots showed defects before visual inspection ever did.",
      "So I built a real-time MQTT pipeline on the plant’s air-gapped network, sat down with the weld process engineers to hand-correct 984 labels, and trained a defect-risk model on top. It now produces a daily “inspect these 30 first” list that operators are evaluating each shift.",
    ],
    numbers: ["3.75M welds", "70% of defects caught", "AUC 0.81", "8 robots"],
    stack: ["Python", "MQTT", "Ignition SCADA", "scikit-learn", "Time-series features", "SPC"],
    diagram: "weld",
  },
  {
    id: "zero-shot-actions",
    title: "Recognizing actions a model has never seen",
    org: "Visual Computing Lab, Ontario Tech",
    year: "2026",
    story: [
      "Video models struggle with verb–object pairs they never saw in training, like “folding paper”. My idea was to stop asking one model to learn both: a frozen video expert handles the verb, a frozen image expert handles the object, and no backbone gets fine-tuned.",
      "It beats RCORE, the published state of the art on Sth-com, by 3.1 points at matched backbones. I ran ablations, including swapping in RCORE’s own CLIP backbone, to make sure the gain comes from the architecture. I trained it on 79K videos across 3 seeds on the Narval A100 cluster, and I’m now writing it up, aiming for a CVPR submission.",
    ],
    numbers: ["+3.1 pts over SOTA", "64% vs 34% unseen-verb accuracy", "79K videos"],
    stack: ["PyTorch", "CLIP", "SLURM", "A100"],
    diagram: "zeroshot",
  },
  {
    id: "gridsens",
    title: "GridSens: seeing a blackout coming",
    org: "Cognitive Innovation Competition",
    year: "2026",
    story: [
      "Cascading grid failures spread faster than people can react, as Texas found out in February 2021. I built a graph neural network that warns of them 2–4 time steps before they happen.",
      "To test it, I replayed the 2021 winter storm in simulation on real ERCOT load data, behind a React and FastAPI dashboard. It took first place out of 15 teams.",
    ],
    numbers: ["2–4 steps of warning", "73,650 MW peak load replayed", "1st of 15 teams"],
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
  { year: "2026", title: "1st place of 15 teams", detail: "Cognitive Innovation Competition (GridSens)" },
  { year: "2026", title: "Weld trained, manual & robotic", detail: "Multimatic" },
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
