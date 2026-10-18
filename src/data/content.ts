export const profile = {
  name: "Tarun Modekurty",
  title: "Machine Learning Engineer",
  focus: "Industrial AI & Computer Vision",
  location: "Oshawa, ON · open to relocate anywhere in Canada",
  email: "m.tarun1012@gmail.com",
  github: "https://github.com/TarunM1012",
  linkedin: "https://www.linkedin.com/in/tarun-modekurty/",
  resumeUrl: "/Tarun_Modekurty_Resume.pdf",
  summary:
    "I take ML from raw data to the factory floor: a weld-quality early-warning system on 3.75M production welds, a video model that beats the published state of the art at recognizing actions it has never seen, and the backend of an AI-compliance risk platform.",
  rotating: [
    "catch weld defects before inspection",
    "recognize actions they have never seen",
    "warn of grid failures before they cascade",
    "price AI-compliance risk in dollars",
  ],
};

export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
};

export const stats: Stat[] = [
  { value: 3.75, decimals: 2, suffix: "M", label: "production welds monitored", context: "Multimatic" },
  { value: 70, suffix: "%", label: "defect catch rate, minimal false alarms", context: "Multimatic" },
  { value: 3.1, decimals: 1, prefix: "+", label: "points over state of the art (Sth-com)", context: "Visual Computing Lab" },
  { value: 2100, suffix: "+", label: "compliance checkpoints scored", context: "METRIS" },
  { value: 75, suffix: "K+", label: "sales conversations mined", context: "Second Brain Labs" },
  { value: 1, prefix: "#", label: "of 15 teams, Cognitive Innovation", context: "GridSens" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlight: string;
  bullets: string[];
  tags: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Multimatic Dynamic Suspensions",
    role: "Application Engineering Co-op · ML & Industrial Data",
    period: "May 2026 – Present",
    current: true,
    highlight: "Weld-quality early-warning system across 3.75M production welds",
    bullets: [
      "Hired for SCADA data analysis; expanded the scope into an early-warning system covering 8 FANUC welding robots, now used by operators to prioritize inspections every shift.",
      "Found that high-frequency waveform data reveals weld defects before visual inspection: 70% catch rate with minimal false alarms, so operators can trust every alert.",
      "Built a daily “inspect these 30 first” list from a defect-risk model (AUC 0.81) trained on 984 labels hand-corrected with weld process engineers.",
      "Built the real-time MQTT telemetry pipeline from scratch on an air-gapped factory network, streaming live current and voltage waveforms to a dashboard the team uses daily.",
    ],
    tags: ["Time-series ML", "MQTT", "SCADA / Ignition", "Python", "SPC"],
  },
  {
    company: "Visual Computing Lab, Ontario Tech",
    role: "Research Assistant · Computer Vision",
    period: "Feb 2026 – Present",
    current: true,
    highlight: "Zero-shot action recognition, 3.1 points above the published SOTA. CVPR paper in preparation",
    bullets: [
      "Built a video model that recognizes actions it has never seen (e.g. “folding paper”) by pairing a frozen video expert for verbs with a frozen image expert for objects, fine-tuning no backbone.",
      "Ran controlled ablations, including swapping in RCORE’s own CLIP backbone, proving the gain comes from the architecture; the video expert nearly doubles unseen-verb accuracy (64% vs 34%).",
      "Trained and evaluated on 79K videos across 3 seeds on a national A100 cluster (Narval, SLURM).",
    ],
    tags: ["PyTorch", "CLIP", "Video Models", "SLURM / HPC", "A100"],
  },
  {
    company: "AI Hub, Durham College",
    role: "Research Associate",
    period: "Feb 2026 – May 2026",
    highlight: "29% better similar-defect search for manufacturing records",
    bullets: [
      "Benchmarked 3 embedding models on 630 manufacturing non-conformance and complaint records and recommended all-MiniLM-L6-v2 (0.1720 vs 0.1332 MRR).",
    ],
    tags: ["Embeddings", "Semantic Search", "Evaluation"],
  },
  {
    company: "METRIS by Sanjeevani AI",
    role: "AI Software Engineer",
    period: "Dec 2025 – Mar 2026",
    highlight: "“The FICO score for AI compliance”: full audits in under 40 minutes vs weeks",
    bullets: [
      "Led the FastAPI backend for an AI-governance platform scoring regulatory risk against 2,100+ checkpoints (EU AI Act, GDPR, ISO 42001, NIST).",
      "Designed the 35-agent engine that turns compliance gaps into a dollar-exposure estimate so risk leaders can prioritize fixes by impact; owned orchestration design.",
    ],
    tags: ["FastAPI", "LLM Agents", "LangGraph", "EU AI Act"],
  },
  {
    company: "Second Brain Labs",
    role: "Generative AI Engineering Intern",
    period: "May 2025 – Oct 2025",
    highlight: "1,800+ deal-winning objection patterns mined from 75K+ calls",
    bullets: [
      "Built a RAG tool that separated calls that closed from calls that didn’t, surfacing objection-handling patterns that powered a sales chatbot tailoring each reply to the prospect’s objection.",
    ],
    tags: ["RAG", "Sentence Transformers", "Pinecone", "AWS SageMaker"],
  },
];

export const legacy = {
  company: "Blaze",
  role: "Co-founder & CTO",
  period: "Nov 2024 – Sep 2025",
  url: "https://blazefounder.app/",
  highlight: "Built and shipped a founder-matching platform to 50+ users",
  bullets: [
    "Full-stack platform connecting startup founders with co-founders and resources, with real-time matching and in-app messaging.",
    "Multi-factor matching (skills, location, interests), Stripe-powered subscription tiers, and the PostgreSQL schema, APIs and auth on React, Node.js and Supabase.",
  ],
  tags: ["React", "Node.js", "Supabase", "Stripe", "PostgreSQL"],
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  badge?: string;
  githubUrl?: string;
  liveUrl?: string;
  metric?: { value: string; label: string };
};

export const featuredProjects: Project[] = [
  {
    title: "GridSens",
    badge: "1st Place · 15 teams",
    tagline: "Cascading power-grid failure prediction",
    description:
      "A graph neural network that warns of cascading power-grid failures 2–4 time steps before they happen, demonstrated by replaying the 2021 Texas winter storm in simulation on real ERCOT load data.",
    tags: ["GNN", "PyTorch", "React", "FastAPI"],
    metric: { value: "73,650 MW", label: "peak load replayed" },
  },
  {
    title: "CodeGuard",
    tagline: "Multi-agent LLM code review",
    description:
      "A code reviewer where 3 local LLMs must agree before a finding is raised, cutting false positives. Semantic matching raised seeded security-bug detection from 1 of 7 to 7 of 7.",
    tags: ["DeepSeek Coder", "CodeLlama", "Qwen", "Ollama", "FastAPI"],
    githubUrl: "https://github.com/TarunM1012/codeguard",
    metric: { value: "7 / 7", label: "seeded bugs caught" },
  },
];

export const otherProjects: Project[] = [
  {
    title: "AI Stock Report Generator",
    tagline: "LLM market analysis",
    description: "Generates stock analysis and recommendations from real-time Polygon market data.",
    tags: ["OpenAI", "JavaScript", "Vercel"],
    liveUrl: "https://ai-stock-report-generator.vercel.app/",
    githubUrl: "https://github.com/TarunM1012/AI-stock-report-generator",
  },
  {
    title: "Handwritten Digit Classifier",
    tagline: "Neural net from scratch",
    description: "PyTorch MNIST classifier covering preprocessing, model design, training and evaluation.",
    tags: ["PyTorch", "Python"],
    githubUrl: "https://github.com/TarunM1012/handwritten-digit-classifier",
  },
  {
    title: "X Post Generator",
    tagline: "Prompt-to-post",
    description: "Generates posts from a prompt with adjustable tone and length.",
    tags: ["OpenAI", "Netlify"],
    liveUrl: "https://twitter-xbot.netlify.app",
    githubUrl: "https://github.com/TarunM1012/x-bot",
  },
  {
    title: "Airline Reservation System",
    tagline: "Graph routing",
    description: "Models flight routes as a graph and finds shortest paths with Dijkstra’s algorithm.",
    tags: ["Python", "Graphs", "Heaps"],
    githubUrl: "https://github.com/TarunM1012/Airline-Reservation",
  },
];

export const skills = [
  {
    group: "Machine Learning",
    items: ["PyTorch", "scikit-learn", "Time-series anomaly detection", "Computer vision", "GNNs", "RAG", "LLM agents (LangGraph)"],
  },
  {
    group: "Data & Systems",
    items: ["Python", "SQL", "FastAPI", "MQTT", "Docker", "AWS", "SLURM / HPC"],
  },
  {
    group: "Domain",
    items: ["Industrial telemetry", "SCADA (Ignition)", "Statistical process control", "EU AI Act", "ISO 42001", "NIST"],
  },
];

export const education = {
  degree: "B.Eng. Software Engineering (Co-op)",
  school: "Ontario Tech University",
  period: "Expected May 2028",
};

export const certification = {
  name: "Manual & Robotic Welding",
  issuer: "Multimatic, 2026",
  note: "Earned to understand the welds my models judge.",
};
