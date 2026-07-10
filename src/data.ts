import { Project, JournalEntry, Article, MediaItem, ServiceOffer, CV, ClientProfile, Inquiry, TrackedAnalytics, HomepageStats, TechStackItem, Testimonial, TeamMember, CustomizationSettings, ConsultationCard } from "./types";

export const INITIAL_CONSULTATION_CARDS: ConsultationCard[] = [
  {
    id: "consult-1",
    badge: "SOFTWARE",
    title: "Software, SaaS & Dashboard Builds",
    description: "Plan custom web applications, admin systems, client portals, API backends, analytics dashboards, and production-ready digital platforms.",
    ctaLabel: "Start Software Request",
    targetTab: "Services"
  },
  {
    id: "consult-2",
    badge: "AI",
    title: "AI Assistants, Automation & Intelligent Systems",
    description: "Map AI assistants, RAG knowledge bases, automation pipelines, multi-agent workflows, and intelligent decision support tools.",
    ctaLabel: "Consult AI Lab",
    targetTab: "AI Lab"
  },
  {
    id: "consult-3",
    badge: "KI SYSTEMS",
    title: "Decision Intelligence & KI Systems",
    description: "Construct mathematical decision loops, multi-criteria analysis dashboards, risk modeling, and verification control systems.",
    ctaLabel: "Request KI Consultation",
    targetTab: "Services"
  },
  {
    id: "consult-4",
    badge: "DESIGN",
    title: "Logo Design, Brand Identity & UI Systems",
    description: "Build logo marks, visual identity systems, typography, color palettes, brand guidelines, Figma prototypes, and high-fidelity UI layouts.",
    ctaLabel: "View Design Services",
    targetTab: "Services"
  },
  {
    id: "consult-5",
    badge: "MEDIA",
    title: "Video Editing, Reels & Motion Graphics",
    description: "Request cinematic editing, short-form reels, product explainers, subtitles, color grading, motion graphics, and launch visuals.",
    ctaLabel: "View Media Work",
    targetTab: "Media"
  },
  {
    id: "consult-6",
    badge: "WRITING",
    title: "Copywriting, Content & Technical Writing",
    description: "Shape persuasive website copy, landing pages, product messaging, SEO articles, technical documentation, and conversion-focused brand language.",
    ctaLabel: "Open Writing Hub",
    targetTab: "Publishing"
  },
  {
    id: "consult-7",
    badge: "RESEARCH",
    title: "Research, Strategy & Feasibility Reports",
    description: "Prepare product research, system architecture blueprints, competitor audits, launch strategy, technical feasibility, and innovation planning.",
    ctaLabel: "Request Strategy",
    targetTab: "Services"
  }
];

export const INITIAL_CUSTOMIZATION: CustomizationSettings = {
  appName: "AFRIWAID STUDIO",
  appNickname: "AFRIWAID",
  tagline: "Empowering Digital Innovation",
  heroHeadline: "AFRIWAID STUDIO",
  heroSubtitle: "A world-class technology, portfolio, AI innovation, and client management node. We design high-scale Web applications, custom AI pipelines, and stunning cinematic visual experiences.",
  accentColor: "cyan",
  primaryCtaText: "Explore Showcase",
  secondaryCtaText: "Initiate AI Systems Lab",
  showAILab: true,
  showJournal: true,
  showMedia: true,
  showWriting: true,
  useMonochromeTerminalTheme: false,
  footerDescription: "Building robust software, decision intelligence MCDA models, and fine editorial papers globally.",
  logoType: "text",
  logoText: "A",
  logoUrl: "",
  statsSubtitle: "Enterprise Impact Metric Matrix",
  statsTitle: "AfriWaid Studio Performance Indication",
  techSubtitle: "TECHNOLOGY SPECIFICATION",
  techTitle: "Verified Hyper-engine Development Stack",
  techDescription: "Every product deployed by AfriWaid conforms to rigorous, type-safe paradigms. Here are our verified stack parameters:",
  aboutTagline: "METRICS & CORE PRINCIPLES",
  aboutTitle: "Bridging Cognitive Engineering with Aesthetic Rigor",
  aboutDescription: "AfriWaid is a premium, multi-module digital studio. We do not build generic portfolio templates. We design, deploy, and verify mission-critical cloud applications, neural agent frameworks, and high-fidelity global branding structures.",
  aboutMissionTitle: "Our Mission",
  aboutMissionDesc: "To build intelligent digital structures that allow organizations worldwide to seamlessly automate, audit, and display complex logistics pipelines and branding matrices without tech-debt decay.",
  aboutVisionTitle: "Our Vision",
  aboutVisionDesc: "To grow into a global, institutional tech studio that acts as a living showcase of multi-agent safety engineering, pixel-perfect user frameworks, and elite publishing workflows.",
  aboutPhilosophyTitle: "Our Innovation Philosophy",
  aboutPhilosophyDesc: "We believe that technology gains value only through absolute transparency. Unusable AI telemetry is a systematic pollutant. We focus on physical, human-verified loops, mathematical criteria weighting, and breathtaking visual controls.",
  servicesTagline: "Technical Capabilities & Service Matrix",
  servicesTitle: "Professional Digital Offerings",
  servicesDescription: "AfriWaid is built to handle enterprise projects. Explore our core engineering competencies, interactive knowledge disciplines, and pre-structured commercial execution models.",
  projectsTitle: "Technical Portfolio & Showcase",
  projectsSubtitle: "COMPLETE ARCHIVE OF INTELLECTUAL WORK",
  cvTitle: "Resume & CV Center",
  cvSubtitle: "OFFICIAL INSTANCE: CHOOSE PROFESSIONAL PATHWAY",
  aiLabTagline: "Neural Architecture & Design Lab",
  aiLabTitle: "Active AI & KI Innovation Playground",
  aiLabDescription: "Experiment directly with our server-side cognitive modules of AfriWaid. Consult our live systems analyst or tweak the decision criteria weight formulas dynamically.",
  writingTitle: "Writing & Analytics Hub",
  writingSubtitle: "Original research, deep technical deep-dives, and technical opinions",
  mediaTitle: "Media Production Hub",
  mediaSubtitle: "CINEMATIC DIGITAL ENG ENGAGEMENTS",
  journalTagline: "Active Developer Logs & System Milestones",
  journalTitle: "The AfriWaid Build Journal",
  journalDescription: "Follow our transparent engineering roadmap. We push frequent hot-fixes, core architectural developments, spatial animations, and machine learning structures to the active sandbox stack.",
  founderPortraitUrl: "",
  consultationCards: INITIAL_CONSULTATION_CARDS
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-1",
    createdAt: "2026-04-18",
    updatedAt: "2026-06-15",
    views: 412,
    overview: {
      id: "proj-1",
      name: "KonsAi Engine",
      subtitle: "Enterprise Agentic Process Automation Middleware",
      description: "An advanced orchestration middleware that connects enterprise databases with autonomous LLM agents to automate cross-departmental operations.",
      longSummary: "KonsAi Engine represents a landmark in enterprise agentic process automation. Operating as a secure pipeline conductor, it bridges high-capacity Google Gemini models with SQL metadata nodes and dynamic internal network streams. By mapping natural language actions into highly serialized executable jobs, the KonsAi engine allows automated systems to securely query data lakes, resolve logistic mismatches, and compile real-time latency diagnostics. Designed with a custom node graph visualizer in D3, supervisors retain continuous human-in-the-loop oversight to ensure absolute deterministic output and zero-trust security alignments.",
      status: "Active",
      category: "AI",
      industry: "Logistics & Supply Chain",
      owner: "Waid Soko",
      client: "AeroGlobal Logistics",
      startedDate: "2026-03-01",
      completedDate: "2026-04-18",
      currentVersion: "1.2.0",
      repositoryLinks: [
        { label: "GitHub", url: "https://github.com/afriwaid/waidpulse" },
        { label: "Documentation", url: "https://docs.afriwaid.com/waidpulse" }
      ],
      website: "https://waidpulse.afriwaid.com",
      license: "MIT",
      visibility: "Public",
      estimatedDevelopmentTime: "8 weeks",
      difficulty: "Advanced",
      projectSize: "Large",
      projectType: "Product",
      tags: ["Agentic AI", "Enterprise", "Automation", "D3 Visualizer"],
      technologies: ["React", "Express", "@google/genai", "TypeScript", "Tailwind CSS", "D3.js"],
      coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop",
      colorTheme: { primary: "#0891b2", secondary: "#0e7490", accent: "#06b6d4" }
    },
    problemTackled: {
      title: "Enterprise Database Integration Challenge",
      description: "Enterprise companies struggle to allow AI agents to safely access, process, and perform actions across disparate database engines without custom, fragile API bridges.",
      businessProblem: "Legacy systems operate in silos with no unified communication layer, requiring manual intervention for cross-system operations.",
      technicalProblem: "No standardized middleware exists to securely connect LLMs with diverse database engines while maintaining audit trails.",
      targetUsers: ["Operations Managers", "Data Engineers", "System Administrators"],
      painPoints: ["Manual data reconciliation", "Security vulnerabilities", "Slow response times"],
      industryChallenges: ["Data governance", "Compliance requirements", "System integration"],
      beforeAfter: {
        before: "Manual reconciliation of 3.5 hours per shipping reschedule",
        after: "Automated rescheduling in 12 minutes"
      },
      impact: "45% reduction in manual shipping rescheduling tasks"
    },
    solution: {
      summary: "KonsAi Engine is a secure orchestration middleware that bridges enterprise databases with autonomous LLM agents.",
      approach: "Server-side Express controller integrating Google Gemini models with SQL metadata nodes and dynamic network streams.",
      innovation: "Custom node graph visualizer in D3 for human-in-the-loop oversight and deterministic output.",
      technicalDecisions: "Strict JSON output schemas to prevent edge-case failures and ensure system reliability.",
      architectureChoices: "Node-based tracking interface with glassmorphism styles and animated indicator states.",
      expectedBenefits: "Automated cross-departmental operations with zero-trust security alignments."
    },
    features: [
      {
        id: "feat-1",
        title: "Dynamic Multi-Agent Orchestration",
        description: "Secure pipeline conductor for autonomous LLM agents",
        status: "Released",
        category: "Core"
      },
      {
        id: "feat-2",
        title: "Secure SQL and Vector Database Proxy Filters",
        description: "Database access layer with built-in security filters",
        status: "Released",
        category: "Security"
      },
      {
        id: "feat-3",
        title: "Real-time Operation Latency Dashboard",
        description: "D3-based visualization of system performance",
        status: "Released",
        category: "Monitoring"
      },
      {
        id: "feat-4",
        title: "Auto-generating Diagnostic Code Sandboxes",
        description: "Dynamic code generation for system debugging",
        status: "Released",
        category: "Development"
      },
      {
        id: "feat-5",
        title: "Custom System Prompt Injection Safeguards",
        description: "Controlled prompt injection with validation layers",
        status: "Released",
        category: "Security"
      }
    ],
    systemAssets: [
      {
        id: "asset-1",
        title: "Database Adapter Layer",
        description: "Core module for connecting to various database engines",
        priority: "Critical",
        category: "Backend",
        status: "Released"
      },
      {
        id: "asset-2",
        title: "Agent Orchestrator",
        description: "Manages multi-agent workflows and task distribution",
        priority: "Critical",
        category: "AI",
        status: "Released"
      }
    ],
    technologies: [
      {
        id: "tech-1",
        name: "TypeScript",
        version: "5.8",
        purpose: "Type-safe development across the stack",
        category: "Frontend",
        status: "Active"
      },
      {
        id: "tech-2",
        name: "React",
        version: "19",
        purpose: "UI component library",
        category: "Frontend",
        status: "Active"
      },
      {
        id: "tech-3",
        name: "Express",
        version: "4.18",
        purpose: "Backend server framework",
        category: "Backend",
        status: "Active"
      },
      {
        id: "tech-4",
        name: "@google/genai",
        version: "1.0",
        purpose: "Google Gemini AI integration",
        category: "AI",
        status: "Active"
      }
    ],
    architecture: {
      modules: ["Agent Orchestrator", "Database Proxy", "Security Layer", "Analytics"],
      services: ["Auth Service", "Data Sync Service", "Notification Service"],
      components: ["Node Graph Visualizer", "Latency Monitor", "Diagnostic Sandbox"],
      dataFlow: "Client Request -> Auth -> Agent Orchestrator -> Database Proxy -> AI Model -> Response",
      microservices: ["User Service", "Project Service", "Analytics Service"],
      dependencies: ["@google/genai", "pg", "redis", "d3"]
    },
    screenshots: [
      {
        id: "scr-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        title: "Agent Dashboard Overview",
        category: "UI"
      },
      {
        id: "scr-2",
        type: "image",
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        title: "Node Graph Visualization",
        category: "Architecture"
      },
      {
        id: "scr-3",
        type: "image",
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        title: "Latency Diagnostics Panel",
        category: "Monitoring"
      }
    ],
    timeline: [
      {
        id: "tl-1",
        date: "2026-03-01",
        title: "Project Kickoff",
        description: "Initial requirements gathering and team allocation",
        status: "Completed"
      },
      {
        id: "tl-2",
        date: "2026-03-15",
        title: "Architecture Design",
        description: "System architecture blueprint finalized",
        status: "Completed"
      },
      {
        id: "tl-3",
        date: "2026-04-18",
        title: "Beta Release",
        description: "Private beta with 3 early-adopter clients",
        status: "Completed"
      }
    ],
    developmentProcess: "Agile development with weekly sprints and continuous integration.",
    challenges: [
      {
        id: "ch-1",
        title: "Database Connection Pooling",
        description: "Managing concurrent connections across multiple database engines",
        severity: "High",
        status: "Resolved"
      }
    ],
    results: "Launched as a private beta with 3 early-adopter retail-logistics groups, WaidPulse automated 45% of manual shipping rescheduling tasks, dropping dispatch friction times from 3.5 hours to 12 minutes.",
    performanceMetrics: [
      { label: "Response Time", value: 120, unit: "ms", target: 100 },
      { label: "Uptime", value: 99.9, unit: "%" },
      { label: "Tasks Automated", value: 45, unit: "%" }
    ],
    security: {
      authentication: "JWT-based with multi-factor support",
      authorization: "Role-based access control",
      encryption: "AES-256 for data at rest, TLS 1.3 for transit",
      auditLogs: "Comprehensive operation logging",
      inputValidation: "Zod schema validation on all inputs"
    },
    integrations: [
      {
        id: "int-1",
        provider: "Google Gemini",
        description: "LLM API for natural language processing",
        status: "Active",
        apiVersion: "v1",
        authMethod: "API Key"
      }
    ],
    downloads: [
      {
        id: "dl-1",
        name: "WaidPulse API Documentation",
        type: "PDF",
        url: "/docs/waidpulse-api.pdf",
        description: "Complete API reference guide"
      }
    ],
    roadmap: [
      {
        id: "r-1",
        title: "Public Beta Release",
        description: "General availability with expanded feature set",
        status: "Planned",
        targetDate: "2026-07-15",
        priority: "High"
      }
    ],
    caseStudy: {
      executiveSummary: "KonsAi Engine reduced manual shipping rescheduling by 45% through autonomous multi-agent orchestration.",
      background: "Enterprise logistics pipelines require real-time coordination across multiple systems.",
      businessProblem: "Standard automation solutions fail due to exceptional conditions requiring adaptable reasoning.",
      research: "Analyzed 15,000 operational delay logs. 78% of bottlenecks resolved through cross-checking inventory databases.",
      development: "Express server-side controller integrating Gemini 3.5 models with structured JSON output schemas.",
      results: "45% automation of manual tasks, dispatch friction reduced from 3.5 hours to 12 minutes.",
      lessonsLearned: "Strict JSON output schemas prevent edge-case failures."
    },
    settings: {
      general: {
        slug: "waidpulse-ai-engine",
        isPublished: true,
        allowComments: true,
        enableAnalytics: true
      },
      seo: {
        metaTitle: "KonsAi Engine - Enterprise Agentic Automation",
        metaDescription: "Secure orchestration middleware connecting enterprise databases with autonomous LLM agents.",
        keywords: ["AI", "automation", "logistics", "enterprise"]
      },
      publishing: {
        publishDate: "2026-04-18"
      },
      permissions: {
        whoCanView: "public"
      }
    }
  },
  {
    id: "proj-2",
    createdAt: "2026-05-12",
    updatedAt: "2026-06-15",
    views: 310,
    overview: {
      id: "proj-2",
      name: "KonsOS",
      subtitle: "Multi-Criteria Decision Analysis Platform",
      description: "A secure cognitive platform applying multi-criteria decision analysis (MCDA) algorithms paired with semantic memory indexes to evaluate risk vectors.",
      longSummary: "KonsOS delivers a highly structured, audit-defensible decision ecosystem for enterprise portfolios and technology investments. Pairing classical Multi-Criteria Decision Analysis (MCDA) algorithms with rich semantic text index vectors, KonsOS allows executives to mathematically evaluate complex risks and evaluate alternative architectures.",
      status: "QA",
      category: "KI",
      industry: "Investment & Risk Management",
      owner: "Dr. Kenji Tanaka",
      startedDate: "2026-04-01",
      completedDate: "2026-05-12",
      currentVersion: "2.0.0-beta",
      license: "Proprietary",
      visibility: "Private",
      estimatedDevelopmentTime: "10 weeks",
      difficulty: "Expert",
      projectSize: "Enterprise",
      projectType: "System",
      tags: ["Decision Science", "Risk Analytics", "KI Architecture"],
      technologies: ["TypeScript", "Recharts", "Node.js", "Vector DB", "React-Flow"],
      coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
      logo: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=400&auto=format&fit=crop"
    },
    problemTackled: {
      title: "Investment Decision Complexity",
      description: "Corporate boards require audit-proof, mathematical validation for technology investments.",
      businessProblem: "Traditional investment evaluation lacks mathematical rigor and transparency.",
      technicalProblem: "No system combines AI with classical MCDA algorithms for deterministic risk evaluation.",
      targetUsers: ["Investment Committees", "Risk Managers", "Board Members"],
      painPoints: ["Subjective evaluations", "Poor traceability", "Inconsistent scoring"],
      industryChallenges: ["Regulatory compliance", "Audit requirements", "Complex dependencies"],
      impact: "Reduced screening duration by 92%"
    },
    solution: {
      summary: "KonsOS combines classical MCDA algorithms with semantic memory indexes for audit-defensible decisions.",
      approach: "Weighted decision loops backed by cognitive retrieval vectors.",
      innovation: "Interactive SVG dependency graphs with real-time scoring.",
      technicalDecisions: "State-first React architecture with Express endpoint for risk metrics.",
      architectureChoices: "Dual-engine approach guaranteeing mathematical transparency.",
      expectedBenefits: "Deterministic rigor for enterprise investment decisions."
    },
    features: [
      {
        id: "feat-1",
        title: "Interactive Matrix Scoring",
        description: "Real-time weighted scoring with visual feedback",
        status: "Released",
        category: "Analysis"
      },
      {
        id: "feat-2",
        title: "Semantic Memory Retrieval",
        description: "Search across legacy PDF reports and documents",
        status: "Released",
        category: "Search"
      },
      {
        id: "feat-3",
        title: "Audit Logs with SVG Graphs",
        description: "Dynamic dependency visualization for compliance",
        status: "Released",
        category: "Compliance"
      }
    ],
    systemAssets: [
      {
        id: "asset-1",
        title: "MCDA Engine",
        description: "Core decision analysis algorithms",
        priority: "Critical",
        category: "Backend",
        status: "Released"
      }
    ],
    technologies: [
      {
        id: "tech-1",
        name: "TypeScript",
        version: "5.8",
        purpose: "Type-safe development",
        category: "Frontend",
        status: "Active"
      },
      {
        id: "tech-2",
        name: "React Flow",
        version: "11.x",
        purpose: "Interactive node graphs",
        category: "Frontend",
        status: "Active"
      }
    ],
    architecture: {
      modules: ["Decision Engine", "Vector Store", "Audit Logger"],
      services: ["Auth Service", "Analysis Service"],
      components: ["Risk Matrix", "Dependency Graph", "Report Generator"],
      microservices: ["User Service", "Decision Service"],
      dependencies: ["langchain", "pgvector", "express"]
    },
    screenshots: [
      {
        id: "scr-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1543286386-7a38167f334c?q=80&w=800&auto=format&fit=crop",
        title: "Risk Matrix Dashboard",
        category: "UI"
      }
    ],
    timeline: [
      {
        id: "tl-1",
        date: "2026-04-01",
        title: "Project Initiation",
        description: "Requirements and scope definition",
        status: "Completed"
      },
      {
        id: "tl-2",
        date: "2026-05-12",
        title: "QA Phase",
        description: "User acceptance testing with pilot clients",
        status: "Completed"
      }
    ],
    developmentProcess: "State-first React architecture with real-time graph updates.",
    challenges: [
      {
        id: "ch-1",
        title: "Vector Similarity Search",
        description: "Optimizing semantic search performance",
        severity: "High",
        status: "Resolved"
      }
    ],
    results: "Reduced regulatory compliance auditing time from 20 business days to under six hours.",
    performanceMetrics: [
      { label: "Screening Speed", value: 92, unit: "%", target: 95 },
      { label: "Hidden Risks Found", value: 14, unit: "risks" }
    ],
    security: {
      authentication: "OAuth 2.0 with SSO support",
      authorization: "Granular role-based permissions",
      encryption: "AES-256 for sensitive data",
      auditLogs: "Complete decision trail logging",
      compliance: ["SOX", "GDPR"]
    },
    integrations: [
      {
        id: "int-1",
        provider: "Internal Analytics DB",
        description: "Data source for risk metrics",
        status: "Active",
        authMethod: "API Key"
      }
    ],
    downloads: [],
    roadmap: [],
    caseStudy: {
      executiveSummary: "KonsOS reduced regulatory compliance auditing from 20 days to 6 hours.",
      background: "Investment funds require mathematical validation for technology investments.",
      businessProblem: "Traditional evaluation lacks rigor and transparency for audit purposes.",
      research: "Mapped risk compliance to dependency models with weighted decision loops.",
      results: "92% reduction in screening duration, 14 hidden regulatory contradictions identified.",
      lessonsLearned: "AI + MCDA algorithms provide deterministic rigor enterprises demand."
    },
    settings: {
      general: {
        slug: "konsos",
        isPublished: true,
        allowComments: false,
        enableAnalytics: true
      },
      seo: {
        metaTitle: "KonsOS - Decision Intelligence Platform",
        metaDescription: "Multi-criteria decision analysis platform for enterprise risk evaluation.",
        keywords: ["MCDA", "risk", "decision science", "KI"]
      },
      permissions: {
        whoCanView: "authenticated"
      }
    }
  }
];

export const INITIAL_JOURNAL: JournalEntry[] = [
  {
    id: "j-1",
    title: "Deployed AfriWaid Studio Core v1.0",
    description: "Launched the primary platform framework integrating the Portfolio Showcase, Service Matrix, and CV Publish Center. Engineered on modern React 19.",
    date: "2026-06-10",
    category: "deployment",
    images: ["/src/assets/images/afriwaid_studio_v1_1781535074936.jpg"],
    links: [
      { label: "Live Projects Showcase", url: "#Projects" },
      { label: "Live Service Matrix", url: "#Services" }
    ]
  },
  {
    id: "j-2",
    title: "Released KonsAi Client Beta",
    description: "Seeded the secure progress monitor in the Client Portal enabling live progress tracking, downloadable deliverables, and automatic invoice audits.",
    date: "2026-06-11",
    category: "update",
    images: ["/src/assets/images/waidpulse_client_portal_1781535095143.jpg"],
    links: [
      { label: "Preview Client Portal", url: "#Client Access" }
    ]
  },
  {
    id: "j-3",
    title: "Integrated Server-Side Gemini Intelligence Matrix",
    description: "Completed API proxy routes leveraging `@google/genai` allowing users to consult an intelligent system analyst live in our AI Innovation Lab.",
    date: "2026-06-12",
    category: "ai",
    images: ["/src/assets/images/gemini_intelligence_1781535115050.jpg"],
    links: [
      { label: "Consult Gemini AI Lab", url: "#AI Lab" }
    ]
  },
  {
    id: "j-4",
    title: "Finished Brand Canvas & Cinematic Visuals",
    description: "Achieved pixel-perfect cosmic theme styling, dark grid aesthetics, and high-fidelity sliding transitions using motion/react.",
    date: "2026-06-13",
    category: "design",
    images: ["/src/assets/images/cosmic_design_1781535133337.jpg"],
    links: [
      { label: "Explore Media Hub", url: "#Media" }
    ]
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "The Rise of Orchestrated Agents in African Agritech",
    slug: "orchestrated-agents-african-agritech",
    description: "How decoupled multi-agent architectures are overcoming low-bandwidth constraints to optimize supply-distribution pipelines across Sub-Saharan networks.",
    content: `## The Agritech Supply Problem

Sub-Saharan supply lines suffer from severe information asymmetry. Smallholders struggle to reach wholesalers due to dynamic price fluctuations, sudden road disruptions, and siloed communication.

Classical mobile applications fail because they demand constant, high-speed internet connections and require agricultural managers to constantly input tabular inventory metrics.

### Enter Decentralized Agent Frameworks

By decoupling logic into a multi-agent framework on the backend (using systems like **KonsOS**), small queries can be processed offline. Compact SMS/USSD packets are sent to a cloud-based orchestrator, triggering a cascading system of micro-agents:

1. **Procurement Agent**: Constantly monitors wholesaler pricing signals using semantic search.
2. **Logistics Agent**: Audits local telemetry to establish route safety.
3. **Financial Agent**: Dynamically generates forward contract agreements.

These agents collaborate to deliver a single simple action notification to the smallholder. No heavy assets, no complex dashboard downloads—just deterministic, intelligent automation.`,
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    category: "Research",
    tags: ["Agritech", "Agentic AI", "Decoupled Architecture"],
    readingTime: "5 min read",
    date: "2026-06-08",
    metaTitle: "Decoupled Multi-Agent Systems in African Agritech | AfriWaid",
    metaDescription: "Explore how decentralized backend agent systems optimize agricultural logistics in low-bandwidth regions and remote farmlands.",
    keywords: ["Agritech", "AI Agents", "Decoupled Logic", "Logistics", "African Tech"],
    views: 145
  },
  {
    id: "art-2",
    title: "Constructing Resilient UI: Design Systems for Deep Enterprise Apps",
    slug: "resilient-ui-enterprise-design-systems",
    description: "A developer guide on building digital dashboards that balance density, micro-interactions, dark environments, and responsive layout guidelines.",
    content: `## The Illusion of Simplification

Many modern design systems focus on stripping away technical density. They replace core developer coordinates, database telemetry, and granular charts with massive, friendly cards.

While this works for standard consumer applications, it **completely fails** for enterprise platforms. Technicians, risk managers, and operations leads need *control*. Stripping details is a critical failure.

### Principles of 'Information Density with Elegance'

1. **Aesthetic Consistency & Monospacing**: Use high-contrast font weights paired with crisp mono fonts (like JetBrains Mono) for status lines, coordinates, and statistics.
2. **Acoustic and Visual Snapping**: Apply swift 150ms transitions (spring or linear) to make interfaces feel physically kinetic.
3. **Architectural Gridlines**: Outline borders with subtle divider lines (\`border-white/[0.06]\`) to create structural order without visible clutter.

This creates 'cinematic control decks' that are deeply functional, fast, and gorgeous to work inside.`,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    category: "Guides",
    tags: ["UI/UX", "Design Systems", "Web Engineering"],
    readingTime: "4 min read",
    date: "2026-06-11",
    metaTitle: "Enterprise Dark UI Design Systems | AfriWaid Studio",
    metaDescription: "Learn key strategies to balance layout density with beautiful, ergonomic dark UI components for professional tech applications.",
    keywords: ["UI Design", "Enterprise UI", "Tailwind CSS", "Design Systems"],
    views: 98
  },
  {
    id: "art-3",
    title: "Harmonizing Design & Logic: The AfriWaid Creative Flow",
    slug: "harmonizing-design-logic-creative-flow",
    description: "An inside look at our development philosophy where designers write clean CSS and software architects understand typography rhythm.",
    content: `## Bridging the Digital Divide

In traditional agencies, designers throw static Figma files over the wall, and engineers implement whatever is easiest. The product is compromised.

At **AfriWaid**, we treat design and code as the exact same system:

- **Typography as Code**: Every font style is a systematic token mapped across our layouts.
- **Motion as Physics**: We do not use arbitrary fade values. We define specific springs, dampening rates, and staggering scales.
- **Layout Integrity**: The interface must adjust gracefully from mobile phone touches to massive dual-head command dashboards.

This approach guarantees that what is approved in the blueprint stage is exactly what is delivered to the production environment, every single time.`,
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    category: "Opinions",
    tags: ["Agency Culture", "Methodology", "Software Engineering"],
    readingTime: "3 min read",
    date: "2026-06-12",
    metaTitle: "The AfriWaid Creative Flow | Engineering + Art",
    metaDescription: "Bridging the gap between pure code and high-end design. Read about our cohesive collaborative pipeline.",
    keywords: ["Agency Philosophy", "UI Engineering", "Figma to React", "Modern Agency"],
    views: 82
  }
];

export const INITIAL_MEDIA: MediaItem[] = [
  {
    id: "med-1",
    title: "WaidPulse Launch Cinematic Video",
    description: "High-energy procedural cinematic rendering explaining the multi-agent middleware structure and developer interface.",
    category: "Videos",
    duration: "2:40",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    externalLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Template placeholder link
    views: 125
  },
  {
    id: "med-2",
    title: "Enterprise Multi-Agent Systems Deep Dive",
    description: "A comprehensive technical seminar mapping out database safeguard layers and runtime validation blocks.",
    category: "Interviews",
    duration: "15:10",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    externalLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    views: 240
  },
  {
    id: "med-3",
    title: "Crafting Spatial Motion Graphics",
    description: "Behind the scenes rendering loops showing our creative asset workflow in Blender and custom SVG code.",
    category: "Motion Graphics",
    duration: "1:12",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    externalLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    views: 110
  }
];

export const INITIAL_SERVICES: ServiceOffer[] = [
  {
    id: "srv-1",
    name: "Software Development",
    description: "We design, write, and audit high-performance software systems. From elegant SaaS applications to absolute-precision financial dashboards.",
    category: "Software Development",
    deliverables: [
      "Custom React & Next.js SaaS Web Applications",
      "Robust Express/Node.js Server Architectures",
      "Interactive analytics consoles styled with Recharts or D3.js",
      "Complete system audits & mobile-first UI scaling updates"
    ],
    process: [
      "Discovery & Technical Blueprinting",
      "Modular Architecture Design & Schema Mockups",
      "Agile Development with Weekly Client Deliverables",
      "Rigorous Verification, Load Testing, and Production Launch"
    ],
    estimatedTimeline: "4 to 12 weeks",
    portfolioExamples: [
      { name: "KonsAi Engine", projectId: "proj-1" },
      { name: "KonsOS", projectId: "proj-2" }
    ]
  },
  {
    id: "srv-2",
    name: "AI Solutions & Automation",
    description: "Integrate server-side agentic capabilities directly into your legacy software workflows. We construct reliable context retrievers and action controllers.",
    category: "AI Solutions",
    deliverables: [
      "Custom semantic search vectors & RAG databases",
      "Automated chat agents with safety-guard boundaries",
      "Document categorizers utilizing enterprise intelligence",
      "Developer-ready SDK microservice integration"
    ],
    process: [
      "Operational bottleneck auditing and feasibility check",
      "Safety safeguarding and data privacy design",
      "Agent training & strictly typed output schema design",
      "Vite/React integrated control dashboard deploy"
    ],
    estimatedTimeline: "6 to 8 weeks",
    portfolioExamples: [
      { name: "KonsAi Engine", projectId: "proj-1" }
    ]
  },
  {
    id: "srv-3",
    name: "Decision Intelligence Systems (KI)",
    description: "Construct scientific decision loops separate from model unpredictability. We specialize in Multi-Criteria Decision Analysis (MCDA) dashboards.",
    category: "KI Systems",
    deliverables: [
      "Risk calculation models incorporating mathematical weighting",
      "Interactive SVG node dependency flowcharts",
      "Structured boardroom diagnostic report generators"
    ],
    process: [
      "Mapping risk taxonomy & scoring standards",
      "Coding rigorous verification and matrix calculators",
      "Injecting semantic context storage",
      "Deploying interactive control matrix panels"
    ],
    estimatedTimeline: "8 to 10 weeks",
    portfolioExamples: [
      { name: "KonsOS", projectId: "proj-2" }
    ]
  },
  {
    id: "srv-4",
    name: "Logo Design & Brand Identity Studio",
    description: "For organizations seeking a premium, corporate aesthetic. We shape identity parameters, kinetic icons, and digital style guides.",
    category: "Logo Design",
    deliverables: [
      "Cinematic Logo Mark & Type pairing guidelines",
      "Corporate interactive stylebook built as a responsive web tool",
      "Custom vector assets (SVG) and motion asset codes",
      "Standard vector layout packages (Print & Web)"
    ],
    process: [
      "Brand positioning & visual moodboard workshop",
      "Custom vector draft iterations",
      "Motion prototype simulations",
      "Packaging and custom web canvas stylebook"
    ],
    estimatedTimeline: "3 to 5 weeks",
    portfolioExamples: [
      { name: "AfriWaid Brand Canvas", projectId: "proj-3" }
    ]
  }
];

export const INITIAL_CVS: CV[] = [
  {
    id: "cv-1",
    slug: "software-engineer",
    name: "Waid Soko",
    title: "Senior Full-Stack & AI Systems Engineer",
    summary: "Veteran technology architect with over 8 years of engineering experience. Specializes in building dense Express/React control dashboards, high-reliability server-side AI agent workflows using Gemini, and database schema controllers.",
    skills: [
      { category: "Languages", list: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "HTML/CSS"] },
      { category: "Frameworks & Libraries", list: ["React", "Express", "Node.js", "Vite", "Tailwind CSS", "D3.js", "Recharts", "Motion"] },
      { category: "AI & KI Eng", list: ["@google/genai", "Multi-Agent safety models", "MCDA Risk algorithms", "Vector DB embeddings"] },
      { category: "Cloud & Ops", list: ["GCP Cloud Run", "Docker", "Database schema migration", "Nginx web proxies"] }
    ],
    experience: [
      {
        company: "AfriWaid Studio",
        role: "Lead Systems Architect & Co-Founder",
        period: "2024 - Present",
        description: [
          "Spec'd and built the WaidPulse autonomous agentic middleware, decreasing client manual operations by 90%.",
          "Engineered high-performance real-time visualization frameworks in React 19.",
          "Consulted international logistics firms on implementing secure AI safety guards."
        ]
      },
      {
        company: "Vanguard Tech Laboratories",
        role: "Senior Full-Stack Engineer",
        period: "2021 - 2024",
        description: [
          "Developed complex asset tracking platforms serving over 40,000 active daily users.",
          "Led a team of 4 front-end engineers in designing a highly responsive custom React design system.",
          "Refactored heavy search modules, achieving a 400ms speed-load optimization."
        ]
      }
    ],
    education: [
      { institution: "African Institute of Science & Technology", degree: "M.S. in Software Systems Architecture", period: "2019 - 2021" },
      { institution: "Global Tech University", degree: "B.S. in Computer Science", period: "2015 - 2019" }
    ],
    certifications: [
      "Google Cloud Certified Professional Cloud Developer",
      "Enterprise Multi-Agent Safety Specialist Token"
    ],
    portfolioLinks: [
      { label: "Studio Website", url: "/" },
      { label: "WaidPulse Engine", url: "#" }
    ],
    isPublished: true,
    downloads: 142
  },
  {
    id: "cv-2",
    slug: "innovation-lead",
    name: "Waid Soko",
    title: "Digital Product & Innovation Strategist",
    summary: "Creative product specialist and technology director. Helps organizations worldwide design cinematic brand identities, optimize system architectures, and translate raw engineering capabilities into compelling digital presence.",
    skills: [
      { category: "Strategy", list: ["Product Positioning", "Corporate Innovation", "MCDA Risk audits", "Agile Roadmap design"] },
      { category: "Design Creative", list: ["Brand Strategy & Identity", "Art Direction", "UI/UX Architecture", "Motion Graphics in Blender"] },
      { category: "Frameworks Tools", list: ["Figma", "Tailwind CSS", "Motion", "Vite/React structure"] },
      { category: "Coordination", list: ["Enterprise Client Alignment", "Multi-team execution", "Technical Writing"] }
    ],
    experience: [
      {
        company: "AfriWaid Studio",
        role: "Product & Art Director",
        period: "2024 - Present",
        description: [
          "Helped tech startups re-contextualize their platforms, doubling inbound enterprise inquiry conversion rates.",
          "Authored comprehensive digital style guides and designed immersive kinetic vector animations.",
          "Orchestrated cross-functional developer and designer pipelines to ensure layout fidelity."
        ]
      },
      {
        company: "Nexus Digital Agency",
        role: "Creative Director",
        period: "2022 - 2024",
        description: [
          "Supervised visual development of 35 dynamic client marketing campaigns, generating over $4M in calculated sales.",
          "Pioneered in-house responsive web style systems, reducing designer-to-developer mockup times by 30%."
        ]
      }
    ],
    education: [
      { institution: "Creative Arts College of Design", degree: "B.A. in Digital Media & Art Direction", period: "2016 - 2020" }
    ],
    certifications: [
      "Agile Product Management Professional",
      "Human-Centered Spatial Design Specialization"
    ],
    portfolioLinks: [
      { label: "AfriWaid Portfolio", url: "/" }
    ],
    isPublished: true,
    downloads: 87
  }
];

export const INITIAL_CLIENTS: ClientProfile[] = [
  {
    id: "cl-1",
    name: "AeroGlobal Logistics",
    company: "AeroGlobal Inc.",
    email: "logistics@aeroglobal.com",
    assignedProjectName: "KonsAi Integrations",
    projectProgress: 65,
    progressLog: [
      { date: "2026-06-01", title: "Technical Discovery Completed", phase: "Research", status: "completed" },
      { date: "2026-06-05", title: "API Safe Guard Architecture Draft", phase: "Design", status: "completed" },
      { date: "2026-06-10", title: "Middleware Core Module Integration", phase: "Development", status: "active" },
      { date: "2026-06-25", title: "Staging Pipeline Load Testing", phase: "Testing", status: "planned" },
      { date: "2026-07-05", title: "System Hot-Deploy Deployment", phase: "Launch", status: "planned" }
    ],
    deliverables: [
      { id: "del-1", name: "System Requirements Blueprint.pdf", description: "Comprehensive analysis of AeroGlobal data structures and security safeguards.", status: "approved", fileName: "Requirements_Blueprint.pdf", fileSize: "2.4 MB" },
      { id: "del-2", name: "UX Design Interactive Map.sketch", description: "Interactive figma layout maps showing human visual monitoring dashboard.", status: "completed", fileName: "UX_Interactive_Map.fig", fileSize: "15.8 MB" },
      { id: "del-3", name: "Middleware Alpha Source Code.zip", description: "Initial module structure linking database adapters to Gemini function endpoints.", status: "pending", fileName: "WaidPulse_Alpha_Core.zip", fileSize: "4.1 MB" }
    ],
    proposals: [
      { id: "prop-1", title: "Phase 2 AI Integration Operations", date: "2026-06-02", value: "$45,000 USD", status: "Accepted" }
    ],
    invoices: [
      { id: "inv-1", invoiceNumber: "INV-2026-042", issueDate: "2026-06-02", dueDate: "2026-06-17", amount: "$15,000 USD", status: "Paid" },
      { id: "inv-2", invoiceNumber: "INV-2026-088", issueDate: "2026-06-12", dueDate: "2026-06-27", amount: "$30,000 USD", status: "Unpaid" }
    ],
    feedback: [
      "The node tracking mockups look extremely clear. Our compliance directors immediately understood how the model filters run."
    ]
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: "inq-1",
    name: "Sarah Jenkins",
    email: "sjenkins@kenyatechgroup.co.ke",
    organization: "Kenya Tech Group",
    message: "We are building an intra-day supply catalog for regional micro-vendors and want to implement an automated USSD-to-AI SMS routing scheduler using KonsOS MCDA algorithms. Please schedule an architecture review.",
    type: "service",
    serviceCategory: "Software Development",
    date: "2026-06-12",
    status: "new"
  },
  {
    id: "inq-2",
    name: "Dr. Amara Alao",
    email: "a.alao@pan-african-ai.org",
    organization: "Pan-African AI Council",
    message: "We would love to extend a partnership request to include AfriWaid's Lumina Research Matrix in our upcoming technology governance panel discussion in Cape Town.",
    type: "partnership",
    date: "2026-06-13",
    status: "new"
  }
];

export const INITIAL_ANALYTICS: TrackedAnalytics = {
  visitorsLast30Days: 1840,
  totalViews: 412 + 310 + 295 + 184,
  projectDownloads: 142 + 87,
  contactCount: 2,
  pageViews: [
    { path: "/", count: 854 },
    { path: "/projects", count: 489 },
    { path: "/services", count: 245 },
    { path: "/cv", count: 229 },
    { path: "/journal", count: 120 }
  ],
  topProjects: [
    { name: "KonsAi Engine", views: 412 },
    { name: "KonsOS", views: 310 },
    { name: "AfriWaid Brand Canvas", views: 295 }
  ],
  topArticles: [
    { title: "The Rise of Orchestrated Agents in African Agritech", views: 145 },
    { title: "Constructing Resilient UI: Design Systems for Deep Enterprise Apps", views: 98 }
  ]
};

// Local storage management utilities
export function getStoredData<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(`afriwaid_${key}`);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.warn(`Local storage read failed for key ${key}`, e);
    return defaultValue;
  }
}

export function setStoredData<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(`afriwaid_${key}`, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn(`Local storage write failed for key ${key}`, e);
    return false;
  }
}

export const INITIAL_HOMEPAGE_STATS: HomepageStats = {
  projectsCompleted: 24,
  applicationsBuilt: 18,
  aiSystemsDeveloped: 12,
  articlesPublished: 8,
  brandsCreated: 6,
  videosProduced: 15,
  clientsServed: 30
};

export const INITIAL_TECH_STACK: TechStackItem[] = [
  {
    id: "tech-1",
    badge: "TS",
    name: "TypeScript 5.8",
    description: "Rigorous static analysis"
  },
  {
    id: "tech-2",
    badge: "RE",
    name: "React 19 & Vite",
    description: "Atomic virtual layout rendering"
  },
  {
    id: "tech-3",
    badge: "PG",
    name: "PostgreSQL 17",
    description: "Durable relational database model"
  },
  {
    id: "tech-4",
    badge: "DO",
    name: "Docker Containers",
    description: "Hermetic multi-platform deployments"
  },
  {
    id: "tech-5",
    badge: "NX",
    name: "Node & Express",
    description: "Backend database pipeline"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Amara Okonkwo",
    clientCompany: "Vanguard Agritech Systems",
    clientRole: "Managing Director",
    rating: 5,
    text: "AfriWaid completely re-architected our local supply allocation pipeline. Their strict attention to network resilience and gorgeous, functional dashboards made the tool an instant hit with our ground managers.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    category: "Software Development",
    isPublished: true
  },
  {
    id: "test-2",
    clientName: "David Mensah",
    clientCompany: "AeroGlobal Logistics",
    clientRole: "VP of Product",
    rating: 5,
    text: "The motion graphics and custom interactive guidebooks produced by AfriWaid's creative node elevated our platform's global launch. It bridged complex engineering with cinematic luxury narrative.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    category: "Video Production",
    isPublished: true
  },
  {
    id: "test-3",
    clientName: "Elise Dubois",
    clientCompany: "Alpha Cognitive Capital",
    clientRole: "Head of Risk Analysis",
    rating: 5,
    text: "Implementing AfriWaid's KonsOS MCDA algorithms reduced our regulatory compliance auditing time from 20 business days to under six hours. Symmetrical, clean, and mathematically rigorous.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    category: "AI Solutions",
    isPublished: true
  }
];

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Alasiri Waid",
    role: "Founder & Lead Architect",
    teamType: "Management Core",
    bio: "Pioneering the intersection of server-side intelligence flows and rich cinematic interfaces.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    skills: ["AI Systems", "Multi-criteria Decision Analysis", "React & Node.js"],
    expertiseTags: ["Founder", "Architect", "Systems Director"],
    linkedin: "https://linkedin.com/in/alasiri-waid",
    github: "https://github.com/alasiriwaid",
    twitter: "https://twitter.com/alasiriwaid"
  },
  {
    id: "team-2",
    name: "Kofi Boateng",
    role: "Senior Systems Engineer",
    teamType: "Development Team",
    bio: "Specialist in robust real-time synchronizations, scalable local databases, and PostgreSQL query architectures.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    skills: ["PostgreSQL", "Hermetic Docker", "Prisma ORM", "TypeScript"],
    expertiseTags: ["Engineering", "Infrastructure", "Query Architect"],
    linkedin: "https://linkedin.com/in/kofi-boateng",
    github: "https://github.com/kofiboateng"
  },
  {
    id: "team-3",
    name: "Sade Adebayo",
    role: "Cinematic Visuals Lead",
    teamType: "Creative Node",
    bio: "Translates high-tech architecture into luxury narratives, dynamic motion graphics, and portrait social media reels.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    skills: ["After Effects", "Blender 3D", "Davinci Resolve", "Brand Identity"],
    expertiseTags: ["Luxury Media", "Luxury UI", "Art Direction"],
    linkedin: "https://linkedin.com/in/sade-adebayo",
    twitter: "https://twitter.com/sadevisuals"
  },
  {
    id: "team-4",
    name: "Dr. Kenji Tanaka",
    role: "AI Safety Researcher",
    teamType: "Intelligence Node",
    bio: "Focuses on cognitive verification constraints, token conservation systems, and strict structured JSON routing validation.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    skills: ["Google GenAI", "Cognitive Systems", "JSON Verification Graphs"],
    expertiseTags: ["Ethics & Safety", "Research Science", "Verification Algos"],
    github: "https://github.com/drkenjitantaka"
  }
];

export interface AfriWaidDB {
  projects: Project[];
  articles: Article[];
  journal: JournalEntry[];
  cvs: CV[];
  clients: ClientProfile[];
  inquiries: Inquiry[];
  analytics: TrackedAnalytics;
  services: ServiceOffer[];
  media: MediaItem[];
  homepageStats: HomepageStats;
  techStack: TechStackItem[];
  testimonials: Testimonial[];
  teamMembers: TeamMember[];
  customization: CustomizationSettings;
}

export function loadInitialData(): AfriWaidDB {
  const projects = getStoredData<Project[]>("projects", INITIAL_PROJECTS);
  const articles = getStoredData<Article[]>("articles", INITIAL_ARTICLES);
  let journal = getStoredData<JournalEntry[]>("journal", INITIAL_JOURNAL);
  
  // Dynamic update of default entries to use newly generated high-precision images and preview links
  journal = journal.map(entry => {
    const defaultMatch = INITIAL_JOURNAL.find(df => df.id === entry.id);
    if (defaultMatch) {
      const updated = { ...entry };
      if (!entry.images || entry.images.length === 0 || entry.images.some(img => img.includes("unsplash.com"))) {
        updated.images = defaultMatch.images;
      }
      if (!entry.links || entry.links.length === 0 || entry.links.length < defaultMatch.links!.length) {
        updated.links = defaultMatch.links;
      }
      return updated;
    }
    return entry;
  });

  const cvs = getStoredData<CV[]>("cvs", INITIAL_CVS);
  const clients = getStoredData<ClientProfile[]>("clients", INITIAL_CLIENTS);
  const inquiries = getStoredData<Inquiry[]>("inquiries", INITIAL_INQUIRIES);
  const analytics = getStoredData<TrackedAnalytics>("analytics", INITIAL_ANALYTICS);
  const services = getStoredData<ServiceOffer[]>("services", INITIAL_SERVICES);
  const media = getStoredData<MediaItem[]>("media", INITIAL_MEDIA);
  const homepageStats = getStoredData<HomepageStats>("homepageStats", INITIAL_HOMEPAGE_STATS);
  const techStack = getStoredData<TechStackItem[]>("techStack", INITIAL_TECH_STACK);
  const testimonials = getStoredData<Testimonial[]>("testimonials", INITIAL_TESTIMONIALS);
  const teamMembers = getStoredData<TeamMember[]>("teamMembers", INITIAL_TEAM_MEMBERS);
  const customization = getStoredData<CustomizationSettings>("customization", INITIAL_CUSTOMIZATION);

  return {
    projects,
    articles,
    journal,
    cvs,
    clients,
    inquiries,
    analytics,
    services,
    media,
    homepageStats,
    techStack,
    testimonials,
    teamMembers,
    customization
  };
}

export function saveInitialData(db: AfriWaidDB): boolean {
  const results = [
    setStoredData("projects", db.projects),
    setStoredData("articles", db.articles),
    setStoredData("journal", db.journal),
    setStoredData("cvs", db.cvs),
    setStoredData("clients", db.clients),
    setStoredData("inquiries", db.inquiries),
    setStoredData("analytics", db.analytics),
    setStoredData("services", db.services),
    setStoredData("media", db.media),
    setStoredData("homepageStats", db.homepageStats),
    setStoredData("techStack", db.techStack),
    setStoredData("testimonials", db.testimonials),
    setStoredData("teamMembers", db.teamMembers),
    setStoredData("customization", db.customization),
  ];

  return results.every(Boolean);
}
