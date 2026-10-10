/**
 * Central portfolio data — generated from Gourav Kumar Ojha's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Gourav Kumar Ojha',
  displayName: 'Gourav Kumar Ojha',
  firstName: 'GOURAV',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN OJHA ORIGINAL',
  role: 'AI/ML Developer',
  tagline: ['AI/ML Developer', 'GenAI & LLMs', 'Cloud-Native'],
  intro:
    'AI/ML Developer with hands-on experience architecting production-grade GenAI applications, cloud-native microservices, and distributed data pipelines. ISRO research collaborator, 3× Hackathon Winner, and co-founder of a defence-tech AI startup. Delivered 60% efficiency gains and 98% accuracy across enterprise-grade AI systems.',
  location: 'Bhilai, Chhattisgarh',
  email: 'kumargouravojha@gmail.com',
  phone: '+91 6207001498',
  links: {
    linkedin: 'https://www.linkedin.com/in/gourav-kumar-ojha-13853b290/',
    github: 'https://github.com/RazzGourav',
  },
  resumePdf: '/assets/GouravKumarOjha_AIML.pdf',
  portrait: {
    src: '/assets/Gourav_Kumar_Ojha_Headshot_720.webp',
    srcSet: '/assets/Gourav_Kumar_Ojha_Headshot_420.webp 420w, /assets/Gourav_Kumar_Ojha_Headshot_720.webp 720w, /assets/Gourav_Kumar_Ojha_Headshot_1100.webp 1100w',
    alt: 'Portrait of Gourav Kumar Ojha',
  },
  interests: ['Agentic AI', 'Cloud Computing (GCP)', 'Distributed Systems'],
};

export const education = [
  {
    school: 'Rungta College of Engineering and Technology',
    place: 'Bhilai',
    degree: 'Bachelor of Technology — Computer Science (Artificial Intelligence)',
    period: 'August 2023 – Present',
    score: 'GPA 7.8/10',
  },
];

export const experience = [
  {
    company: 'Indian Institute of Remote Sensing (ISRO)',
    role: 'Research Collaborator – Martian Dust Storm Analysis',
    place: 'Dehradun (Remote)',
    period: 'Aug 2025 – May 2026',
    points: [
      'Achieved 90–95% dust storm detection accuracy by architecting a distributed, cloud-native Python data pipeline (Pandas, NumPy) processing 10TB+ across MRO/MCS, Curiosity (REMS/SAM), and Hubble datasets.',
      'Reduced multi-instrument data reconciliation errors by debugging ML model outputs in Jupyter notebooks and implementing structured failure-recovery and root-cause-analysis workflows across 4 Martian years of atmospheric data.',
    ],
  },
  {
    company: 'AstraTech (Defence-Tech Startup)',
    role: 'Co-Founder & AI Engineer',
    place: 'Rungta Business Incubation RIU, Bhilai (Remote)',
    period: 'Jan 2026 – Jul 2026',
    points: [
      'Improved sensor-fault detection speed by 30–40% by architecting a microservices-based, security-first embedded AI system with real-time sensor fusion (LWIR, mmWave, seismic) and a distributed CI/CD release-management pipeline.',
      'Reduced deployment defects across releases by applying full-SDLC agile delivery and design-thinking-driven requirements analysis; design patent filed (Patent Pending).',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Live link for deployed projects */
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'setudrishti',
    title: 'SetuDrishti',
    year: '2026',
    genre: 'AI • NLP • Healthcare',
    logline: 'An AI-powered clinical decision support system with multi-modal deep learning and RAG-based EHR retrieval.',
    stack: ['PyTorch', 'HuggingFace', 'LangChain', 'FastAPI', 'PostgreSQL', 'Docker'],
    build: [
      'Achieved 98% diagnostic accuracy by architecting a full-stack, cloud-native NLP and multi-modal deep learning platform with RAG-based EHR retrieval and role-based authentication built as independently deployable microservices.',
      'Reached 85% model accuracy across patient cohorts by building a distributed SHAP/LIME evaluation harness measuring output quality, defect detection rate, and consistency.',
    ],
    features: [
      'Multi-modal deep learning diagnosis',
      'RAG-based EHR retrieval',
      'SHAP/LIME explainability harness',
      'Role-based authentication',
      'Cloud-native microservices',
    ],
    metrics: [
      { value: '98%', label: 'diagnostic accuracy' },
      { value: '85%', label: 'model accuracy across cohorts' },
      { value: 'RAG', label: 'EHR retrieval' },
      { value: 'SHAP', label: 'explainability layer' },
    ],
    github: 'https://github.com/RazzGourav/SetuDrishti',
    live: 'https://setu-drishti-hpmu.vercel.app/',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'lumen-ai',
    title: 'LUMEN AI',
    year: '2026',
    genre: 'GenAI • Fintech • Multi-Agent',
    logline: 'An enterprise financial assistant powered by distributed multi-agent RAG on GCP managed services.',
    stack: ['GCP', 'Vertex AI', 'BigQuery', 'LangChain', 'Python'],
    build: [
      'Cut test turnaround by 60% by architecting a distributed, multi-agent RAG microservices pipeline on GCP managed services (Vertex AI, BigQuery) with version-controlled prompt deployment and full observability tracing.',
      'Reduced root-cause-analysis time by 10% by building a security-first, cloud-native structured logging and tracing layer for transparent multi-agent execution.',
    ],
    features: [
      'Multi-agent RAG pipeline',
      'GCP Vertex AI & BigQuery integration',
      'Version-controlled prompt deployment',
      'Full observability tracing',
      'Structured logging layer',
    ],
    metrics: [
      { value: '60%', label: 'faster test turnaround' },
      { value: '10%', label: 'faster root-cause-analysis' },
      { value: 'GCP', label: 'managed services' },
      { value: 'RAG', label: 'multi-agent pipeline' },
    ],
    github: 'https://github.com/RazzGourav/LUMEN-AI',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'hiremind-ai',
    title: 'HireMind AI',
    year: '2026',
    genre: 'AI • HR-Tech • Microservices',
    logline: 'An enterprise candidate intelligence platform with hybrid semantic retrieval and deterministic explainability.',
    stack: ['Python', 'FastAPI', 'FAISS', 'Docker', 'Prometheus'],
    build: [
      'Delivered ~34ms startup and ~120ms retrieval latency at 12.5 RPS / 320MB peak memory by architecting a full-stack, containerized microservices platform using Hybrid Semantic Retrieval and a deterministic Explainability Engine.',
      'Cut deployment vulnerabilities by 30% by implementing a security-first, multi-stage Docker release-management pipeline with Prometheus observability and distributed monitoring.',
    ],
    features: [
      'Hybrid Semantic Retrieval (FAISS)',
      'Deterministic Explainability Engine',
      '~34ms startup, ~120ms retrieval latency',
      'Multi-stage Docker pipeline',
      'Prometheus observability',
    ],
    metrics: [
      { value: '34ms', label: 'startup latency' },
      { value: '120ms', label: 'retrieval latency' },
      { value: '12.5', label: 'RPS throughput' },
      { value: '30%', label: 'fewer deployment vulns' },
    ],
    github: 'https://github.com/RazzGourav/HireMind-AI',
    live: 'https://hire-mind-ai-nu.vercel.app/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'guardgen',
    title: 'GuardGen',
    year: '2025',
    genre: 'GenAI • Research • NLP',
    logline: 'A hybrid extractive-generative research assistant producing citation-grounded academic drafts.',
    stack: ['Python', 'LangChain', 'NLP', 'LLM'],
    build: [
      'Produced citation-grounded academic research drafts rated 100% plagiarism-free and 86–90% AI-content-free by architecting a hybrid extractive-generative pipeline that prioritizes real human-written academic sources.',
      'Bridged the gap between raw LLM output and responsible academic writing by combining retrieval-based extraction with generative synthesis to structurally ground every claim in verified sources.',
    ],
    features: [
      'Hybrid extractive-generative pipeline',
      'Citation-grounded drafts',
      '100% plagiarism-free output',
      '86–90% AI-content-free',
      'Retrieval-based source verification',
    ],
    metrics: [
      { value: '100%', label: 'plagiarism-free' },
      { value: '86–90%', label: 'AI-content-free' },
      { value: 'RAG', label: 'hybrid pipeline' },
    ],
    github: 'https://github.com/RazzGourav/GuardGen',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'k8s-woocommerce',
    title: 'Multi-Tenant WooCommerce on K8s',
    year: '2025',
    genre: 'DevOps • Kubernetes • SaaS',
    logline: 'On-demand provisioning of fully isolated, quota-enforced WooCommerce stores on Kubernetes.',
    stack: ['Kubernetes', 'Docker', 'Helm', 'CI/CD'],
    build: [
      'Enabled on-demand provisioning of fully isolated, quota-enforced WooCommerce stores on Kubernetes, capping each tenant at 5 pods, 500m/2-core CPU, 512Mi/2Gi memory, 2 PVCs, and 10Gi storage with complete automated cleanup.',
      'Prevented resource-exhaustion incidents cluster-wide by implementing per-container LimitRanges so containers without explicit limits still receive safe default caps.',
    ],
    features: [
      'Multi-tenant Kubernetes orchestration',
      'ResourceQuota enforcement per tenant',
      'Per-container LimitRanges',
      'Automated cleanup on deletion',
      'Fully isolated stores',
    ],
    metrics: [
      { value: '5 pods', label: 'per-tenant cap' },
      { value: '10Gi', label: 'storage per tenant' },
      { value: '0', label: 'resource-exhaustion incidents' },
    ],
    github: 'https://github.com/RazzGourav/kubernetes-store-platform',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'isro-research',
    title: 'Research Collaborator',
    org: 'ISRO (IIRS)',
    detail: 'Collaborated with Indian Institute of Remote Sensing on Martian Dust Storm Analysis; paper under review at Elsevier.',
    laurel: 'ISRO Collaboration',
  },
  {
    id: 'esummit-winner',
    title: '1st Place — Startup Pitching',
    org: 'E-Summit, Vyom Cultural Fest, RISU',
    detail: 'Won top prize pitching AstraTech in a Shark Tank-style competition, awarded by Padma Shri Anand Kumar.',
    laurel: '1st Place',
  },
  {
    id: 'hacksprint-winner',
    title: '1st Place — Hack-Sprint Hackathon',
    org: 'GDG on Campus RCET & Infinity Coders',
    detail: 'Led Team Alien X to build an AI-powered real-time Sepsis & Deterioration Monitoring System in a 12-hour sprint.',
    laurel: '1st Place',
  },
  {
    id: '3x-hackathon',
    title: '3× Regional AI Hackathon Winner',
    org: 'SetuDrishti, HireMind AI, Blockchain Voting',
    detail: 'Three regional AI hackathon wins — SetuDrishti, HireMind AI, and Blockchain Voting System (2024–present).',
    laurel: '3× Winner',
  },
  {
    id: 'college-showcase',
    title: 'College Project Showcase Winner',
    org: 'RCET',
    detail: 'Won the college project showcase competition, August 2025.',
    laurel: 'Showcase Winner',
  },
  {
    id: 'astratech-patent',
    title: 'Design Patent Filed',
    org: 'AstraTech',
    detail: 'Defence-tech embedded AI system — design patent pending.',
    laurel: 'Patent Pending',
  },
  {
    id: 'gssoc',
    title: 'Open Source Contributor',
    org: 'GSSoC 2024',
    detail: 'Built ML modules across multiple repos, delivering 15–20% performance improvements.',
    laurel: 'GSSoC 2024',
  },
  {
    id: 'isro-internship',
    title: 'Research Intern — Supernova Cosmology',
    org: 'India Space Week',
    detail: 'Estimated Hubble Constant from JWST/HST Type Ia Supernovae data; published findings on Hubble tension.',
    laurel: 'Space Week',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Coding Spoon', name: 'Generative AI, Agentic Systems & MLOps Deployment', link: '#' },
  { issuer: 'Postman', name: 'API Expert', link: '#' },
  { issuer: 'Google', name: 'Cloud Skills Boost – GCP & Applied ML', link: '#' },
  { issuer: 'Microsoft', name: 'Azure Fundamentals (AZ-900)', link: '#' },
  { issuer: 'AICTE', name: 'AI & ML Fundamentals', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is the primary language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Go', mono: 'Go', note: 'Working Knowledge' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'C/C++', mono: 'C+' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'ml-ai',
    title: 'ML / AI',
    subtitle: 'GenAI, LLMs & Deep Learning',
    skills: [
      { name: 'LangChain', mono: 'Lc' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'HuggingFace', mono: 'Hf' },
      { name: 'SHAP/LIME', mono: 'Sl' },
      { name: 'OpenCV', mono: 'Cv' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'GCP · Kubernetes · CI/CD',
    skills: [
      { name: 'GCP (Vertex AI, BigQuery)', mono: 'Gc' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'CI/CD', mono: 'Ci' },
      { name: 'Prometheus', mono: 'Pr' },
      { name: 'Git', mono: 'Gt' },
    ],
  },
  {
    id: 'web-db',
    title: 'Web & DB',
    subtitle: 'APIs, full-stack & databases',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'React', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Vector DBs', mono: 'Vd' },
    ],
  },
  {
    id: 'practices',
    title: 'Engineering Practices',
    subtitle: 'Security-first & design thinking',
    skills: [
      { name: 'Microservices', mono: 'Ms' },
      { name: 'Distributed Computing', mono: 'Dc' },
      { name: 'Security-First', mono: 'Sf' },
      { name: 'Test Automation', mono: 'Ta' },
      { name: 'Design Thinking', mono: 'Dt' },
      { name: 'Root Cause Analysis', mono: 'Rc' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'Cloud Computing (GCP)', mono: 'Gc' },
      { name: 'Distributed Systems', mono: 'Ds' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['SetuDrishti', 'LUMEN AI', 'HireMind AI', 'ISRO Research'],
  Go: ['Working knowledge per resume'],
  TypeScript: ['Full-stack development'],
  LangChain: ['SetuDrishti', 'LUMEN AI', 'GuardGen'],
  RAG: ['SetuDrishti', 'LUMEN AI', 'GuardGen'],
  'Agentic AI': ['LUMEN AI multi-agent pipeline', 'Coding Spoon certification'],
  TensorFlow: ['ML/AI projects'],
  PyTorch: ['SetuDrishti — multi-modal deep learning'],
  'Scikit-learn': ['Data pipelines & ML models'],
  HuggingFace: ['SetuDrishti'],
  'SHAP/LIME': ['SetuDrishti — explainability harness'],
  FastAPI: ['SetuDrishti', 'HireMind AI'],
  Docker: ['SetuDrishti', 'HireMind AI', 'K8s WooCommerce'],
  Kubernetes: ['Multi-Tenant WooCommerce on K8s'],
  'GCP (Vertex AI, BigQuery)': ['LUMEN AI', 'Google Cloud Skills Boost'],
  'CI/CD': ['AstraTech — distributed release pipeline'],
  Prometheus: ['HireMind AI — observability'],
  PostgreSQL: ['SetuDrishti'],
  MongoDB: ['Web & DB stack'],
  React: ['Full-stack development'],
  'Next.js': ['Full-stack development'],
  Microservices: ['SetuDrishti', 'LUMEN AI', 'HireMind AI', 'AstraTech'],
  'Security-First': ['HireMind AI', 'AstraTech', 'LUMEN AI'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2023 – Present',
    synopsis: 'B.Tech in Computer Science (AI) at Rungta College of Engineering and Technology, Bhilai.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'B.Tech in Computer Science (Artificial Intelligence) at RCET, Bhilai — GPA 7.8/10.',
        tags: ['B.Tech', 'AI', 'GPA 7.8'],
        runtime: 'Aug 2023 – Present',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Open Source Contributor',
        description: 'GSSoC 2024 — Built ML modules across multiple repos, delivering 15–20% performance improvements.',
        tags: ['GSSoC', 'Open Source', 'ML'],
        runtime: 'Oct–Nov 2024',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Into the Cosmos',
    period: '2025 – 2026',
    synopsis: 'Research internships at India Space Week and ISRO — from supernovae to Martian dust storms.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Stargazer',
        description: 'Research Intern — Supernova Cosmology Project, India Space Week. Estimated Hubble Constant from JWST/HST Type Ia Supernovae data.',
        tags: ['JWST', 'Cosmology', 'Hubble Constant'],
        runtime: 'Jun–Jul 2025',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'The ISRO Collaborator',
        description: 'Research Collaborator at IIRS (ISRO) — 90–95% dust storm detection accuracy across 10TB+ of multi-instrument Martian data.',
        tags: ['ISRO', 'Mars', 'Data Pipeline'],
        runtime: 'Aug 2025 – May 2026',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Showcase Winner',
        description: 'Won the college project showcase competition at RCET, August 2025.',
        tags: ['Showcase', 'Winner'],
        runtime: 'Aug 2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Five Originals — clinical AI, financial agents, HR intelligence, research assistants, and Kubernetes orchestration.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Healer',
        description: 'SetuDrishti — AI-Powered Clinical Decision Support System with 98% diagnostic accuracy and RAG-based EHR retrieval.',
        tags: ['NLP', 'PyTorch', 'LangChain', 'Healthcare'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Agent Builder',
        description: 'LUMEN AI — Enterprise Financial Assistant with distributed multi-agent RAG on GCP, cutting test turnaround by 60%.',
        tags: ['GCP', 'Vertex AI', 'Multi-Agent'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Recruiter\'s Architect',
        description: 'HireMind AI — ~34ms startup and ~120ms retrieval latency with Hybrid Semantic Retrieval and deterministic Explainability Engine.',
        tags: ['FastAPI', 'FAISS', 'Docker'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S03 E04',
        title: 'The Scholar',
        description: 'GuardGen — 100% plagiarism-free, 86–90% AI-content-free citation-grounded academic research drafts.',
        tags: ['LLM', 'RAG', 'Academic Research'],
        runtime: '2025',
        palette: violet,
      },
      {
        code: 'S03 E05',
        title: 'The Orchestrator',
        description: 'Multi-Tenant WooCommerce on Kubernetes — on-demand provisioning of fully isolated, quota-enforced stores.',
        tags: ['Kubernetes', 'Docker', 'Multi-Tenant'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The Startup Arc',
    period: '2026',
    synopsis: 'Co-founding AstraTech, winning hackathons, and competing on the national stage.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Co-Founder',
        description: 'AstraTech — Defence-tech AI startup. Sensor fusion (LWIR, mmWave, seismic), microservices architecture, design patent filed.',
        tags: ['Defence-Tech', 'Startup', 'Patent'],
        runtime: 'Jan–Jul 2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Shark Tank Victor',
        description: '1st Place at E-Summit Startup Pitching (Vyom Cultural Fest, RISU), awarded by Padma Shri Anand Kumar.',
        tags: ['1st Place', 'Startup Pitching', 'AstraTech'],
        runtime: 'Mar 2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Sprint Champion',
        description: '1st Place at Hack-Sprint Hackathon (GDG on Campus RCET) — AI-powered real-time Sepsis & Deterioration Monitoring in a 12-hour sprint.',
        tags: ['1st Place', 'Hackathon', 'Healthcare AI'],
        runtime: 'Mar 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring Agentic AI, Cloud Computing (GCP), and Distributed Systems. Paper under review at Elsevier.',
        tags: ['Agentic AI', 'GCP', 'Distributed Systems', 'Elsevier'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The ISRO chapter', title: 'ISRO Research Collaborator', detail: '90–95% accuracy · 10TB+ data pipeline', palette: crimson },
  { label: 'The AI Original', title: 'SetuDrishti', detail: '98% diagnostic accuracy · RAG + NLP', palette: amber },
  { label: 'The enterprise play', title: 'LUMEN AI', detail: '60% faster test turnaround · GCP', palette: ocean },
  { label: 'Defence-tech startup', title: 'AstraTech (Co-Founder)', detail: 'Patent Pending · Sensor Fusion', palette: violet },
  { label: 'The Shark Tank moment', title: '1st Place — E-Summit', detail: 'Awarded by Padma Shri Anand Kumar', palette: crimson },
  { label: '3× Hackathon Winner', title: 'Hack-Sprint & Regionals', detail: 'SetuDrishti, HireMind AI, Blockchain', palette: jade },
  { label: 'The speed demon', title: 'HireMind AI', detail: '34ms startup · 120ms retrieval', palette: ocean },
  { label: 'Open source', title: 'GSSoC 2024', detail: '15–20% performance improvements', palette: amber },
  { label: 'Cloud credential', title: 'Azure AZ-900 & GCP', detail: 'Microsoft + Google certified', palette: violet },
  { label: 'Current focus', title: 'Agentic AI & Distributed Systems', detail: 'with Cloud Computing (GCP)', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CS (AI)',
    lines: ['Rungta College of Engineering and Technology, Bhilai', 'August 2023 – Present'],
    chips: ['GPA 7.8/10'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['Go, TypeScript, C/C++ · LangChain, RAG, PyTorch', 'GCP, Docker, Kubernetes · FastAPI, PostgreSQL, FAISS'],
    chips: ['Python', 'LangChain', 'GCP', 'Docker', 'Kubernetes', 'FastAPI'],
  },
  {
    kicker: 'Research',
    title: 'The ISRO Arc',
    lines: ['Research Collaborator — IIRS (ISRO), Dehradun', '90–95% Martian dust storm detection · 10TB+ data pipeline', 'Paper under review at Elsevier'],
  },
  {
    kicker: 'Startup',
    title: 'AstraTech',
    lines: ['Co-Founder & AI Engineer — Defence-Tech Startup', 'Sensor fusion (LWIR, mmWave, seismic)', 'Design patent filed (Patent Pending)'],
  },
  {
    kicker: 'Projects',
    title: 'Five Originals',
    lines: ['SetuDrishti — 98% diagnostic accuracy', 'LUMEN AI — 60% faster turnaround on GCP', 'HireMind AI — 34ms startup, 120ms retrieval'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['ISRO Research Collaborator', '1st Place — E-Summit Startup Pitching', '3× Regional AI Hackathon Winner'],
  },
  {
    kicker: 'Certified',
    title: `${5} Certifications`,
    lines: ['Coding Spoon (GenAI & MLOps) · Postman API Expert', 'Google Cloud Skills Boost · Microsoft AZ-900 · AICTE'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Agentic AI · Cloud Computing (GCP) · Distributed Systems'],
  },
];

export type ProfileId = 'gourav' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'gourav',
    name: 'Gourav',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & research', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
