import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Network, 
  Brain, 
  Music, 
  Globe, 
  Activity, 
  FileText, 
  Compass, 
  Award, 
  Cpu, 
  Layers, 
  Coins, 
  ShieldAlert, 
  Menu, 
  X, 
  CheckCircle, 
  Info, 
  ArrowRight, 
  User, 
  History, 
  Sparkles,
  Database,
  Volume2,
  ChevronRight,
  Bookmark,
  ExternalLink,
  Users,
  Search,
  MessageSquare,
  Plug,
  RefreshCw,
  BadgeCheck,
  Link,
  MessageCircle,
  Megaphone,
  Radio,
  Code2,
  GraduationCap,
  ShoppingCart,
  Trophy,
  ArrowLeftRight,
  Target,
  Boxes,
  BrainCircuit
} from "lucide-react";
import { CV, CustomizationSettings } from "../types";

interface FounderProfileProps {
  cvs?: CV[];
  onDownloadIncrement?: (id: string) => void;
  onContactClick?: () => void;
  customization?: CustomizationSettings;
}

// 1. Definition of the 5 expressions of the founder
interface IdentityDimension {
  id: "founder" | "heritage" | "creative" | "philosophical" | "builder";
  name: string;
  expressionName: string;
  role: string;
  motto: string;
  icon: React.ComponentType<any>;
  description: string;
  backgroundStory: string;
  colorClass: string;
  textColor: string;
  glowColor: string;
  philosophies: string[];
}

const IDENTITY_DIMENSIONS: IdentityDimension[] = [
  {
    id: "founder",
    name: "Founder Identity",
    expressionName: "Nwaora Chigozie",
    role: "Leadership, Execution & Vision Architect",
    motto: "Designing the systems that empower generations.",
    icon: Compass,
    colorClass: "from-cyan-500/10 to-blue-600/10 border-cyan-500/30",
    textColor: "text-cyan-400",
    glowColor: "shadow-cyan-500/10",
    description: "The primary leadership identity and coordinate anchor. Responsible for founding AfriWaid Studio, building operational organizations, and drafting the long-term master architecture of the Konsmik ecosystem.",
    backgroundStory: "Representing real-world leadership, responsibility, and system deployment. This identity translates high-level philosophical guidance, creative storytelling, and builder blueprints into institutional structures, legally compliant systems, and commercial networks designed to endure across generations.",
    philosophies: [
      "Technology is an empty vessel without human empathy and responsibility.",
      "A leader does not build products; they build environments where people can freely collaborate and self-improve.",
      "Legacies are measured not by code volume, but by the generational autonomy of the systems created."
    ]
  },
  {
    id: "heritage",
    name: "Heritage Identity",
    expressionName: "Nwogha Gabriel Chigozie",
    role: "Cultural Foundation, Lineage & Personal Origin",
    motto: "Remembering where the stream began to guide where it flows.",
    icon: History,
    colorClass: "from-amber-500/10 to-orange-600/10 border-amber-500/30",
    textColor: "text-amber-400",
    glowColor: "shadow-amber-500/10",
    description: "The heritage core representing ancestral lineage, family roots, and the historical reality of growing up in Nigeria. It connects the founder with the lived struggles, cultural wisdom, and social integrity of his community.",
    backgroundStory: "Every system needs a spiritual and cultural anchor. This identity embodies personal lived experiences, ancestral wisdom, and the ethical foundations that define the core 'Why' behind AfriWaid. It prevents the technology from drifting into hollow corporate mechanics.",
    philosophies: [
      "Innovation must remain rooted in human soil; otherwise, it becomes an abstract machine of extraction.",
      "Lineage is an ongoing conversation between historical lessons and future possibilities.",
      "The ultimate metric of growth is how much we strengthen the communities where our stories started."
    ]
  },
  {
    id: "creative",
    name: "Creative Identity",
    expressionName: "Shinnixstar",
    role: "Art, Music, Imagery & Deep Imagination",
    motto: "Imagination is the first stage of all real-world engineering.",
    icon: Music,
    colorClass: "from-purple-500/10 to-pink-600/10 border-purple-500/30",
    textColor: "text-purple-400",
    glowColor: "shadow-purple-500/10",
    description: "The artistic frequency responsible for musical composition, cinematic storytelling, and visual concepts. Represents the emotional layer of the human experience and the engine of pure conceptual dreaming.",
    backgroundStory: "Before structural formulas or databases existed, the founder's initial medium of exploration was sound and visual design. Operating under scientific and emotional harmonies, this creative channel represents the belief that high-fidelity design, elegant UI proportions, and poetic communication are critical pathways to human connection.",
    philosophies: [
      "Sound and light are raw forms of information structured to align with human frequencies.",
      "An engineer without a creative soul will build efficient prisons instead of liberating environments.",
      "Great software must feel like listening to a perfectly structured symphony—seamless, deep, and cohesive."
    ]
  },
  {
    id: "philosophical",
    name: "Philosophical Identity",
    expressionName: "Smai Chinnikstah",
    role: "Wisdom, Memory Acquisition & Cognitive Inquiry",
    motto: "Reflecting on system integrity, societal values, and the human condition.",
    icon: Brain,
    colorClass: "from-emerald-500/10 to-teal-600/10 border-emerald-500/30",
    textColor: "text-emerald-400",
    glowColor: "shadow-emerald-500/10",
    description: "The contemplative matrix exploring the deep questions of knowledge, human evolution, technology, ethics, and systems design. This expression creates the core ideological principles behind the ecosystem.",
    backgroundStory: "As systems scale, they create vast unintended social consequences. This intellectual layer acts as an ongoing research and analysis engine, examining history, human learning cycles, value networks, and philosophy to ensure every KI System operates as a net-positive growth catalyst.",
    philosophies: [
      "To build effective systems, you must first study the historical architecture of human civilization.",
      "True learning does not rely on accumulating static data, but on active, context-rich synthesis and adaptation.",
      "Technology is an amplifier of intent; code must be intentionally structured with clear moral constraints."
    ]
  },
  {
    id: "builder",
    name: "Builder Identity",
    expressionName: "ChigozieDeSmai",
    role: "Technical Engineering, Architecture & Strategy",
    motto: "Crafting mathematical solutions, database schemas, and digital structures.",
    icon: Cpu,
    colorClass: "from-blue-500/10 to-indigo-600/10 border-blue-500/30",
    textColor: "text-blue-400",
    glowColor: "shadow-blue-500/10",
    description: "The execution engine. Takes abstract dreams, creative stories, and ethical rules, translating them into databases, API channels, mathematical models, and deployment setups.",
    backgroundStory: "Where ideas meet physical logic. This is the hands-on engineer designing the database schemas, writing optimized routing controls, establishing low-latency networking, and ensuring that AfriWaid's apps build cleanly and run with exceptional pixel-level precision.",
    philosophies: [
      "A gorgeous design is a lie if the backend queries are slow or the code is structurally unmaintainable.",
      "Architectural honesty means rejecting pretend automation and establishing verified, robust server pipelines.",
      "The purest craft lies in simple, elegant, modular code blocks that other human builders can easily navigate."
    ]
  }
];

// 2. Definition of the 10 KI Systems
interface KiSystem {
  id: string;
  name: string;
  tagline: string;
  role: string;
  metaphor: string;
  description: string;
  purpose: string;
  connectedTo: string[];
  icon: React.ComponentType<any>;
  tier: "Foundational" | "Intelligence Layer" | "Exchange & Gateway";
}

const KI_SYSTEMS: KiSystem[] = [
{
  id: "konsos",
  name: "KonsOS",
  tagline: "The Operating Sovereign",
  role: "Sovereign Operating Intelligence",
  metaphor: "The brain that coordinates the entire Konsmik ecosystem.",
  description: "The sovereign operating system of the Konsmik ecosystem. It coordinates logic, governance, orchestration, identities, KI systems, applications, infrastructure, and workflows, enabling every connected entity to function as one intelligent ecosystem.",
  purpose: "Provides the unified operating environment that governs, coordinates, and orchestrates every connected entity, ensuring consistency, interoperability, security, and intelligent system-wide operations.",
  connectedTo: [
    "womblayer",
    "konsgate",
    "konsnet",
    "konsmesh",
    "konsnod"
  ],
  icon: Layers,
  tier: "Foundational"
},
  {
  id: "womblayer",
  name: "WombLayer",
  tagline: "The Eternal Memory",
  role: "Memory, Storage & Backend Layer",
  metaphor: "The womb that stores, protects, and gives life to ecosystem data.",
  description: "The living backend and memory foundation of the Konsmik ecosystem. It stores identity records, files, media, histories, application data, system memory, and long-term knowledge used by connected entities.",
  purpose: "Provides secure data storage, media handling, backend services, historical memory, and synchronized records so every Konsmik entity can remember, retrieve, and build on trusted information.",
  connectedTo: [
    "konsos",
    "konsgate",
    "waideschain",
    "waidespruf",
    "waides_ki"
  ],
  icon: Database,
  tier: "Foundational"
},
{
  id: "konsnet",
  name: "KonsNet",
  tagline: "The Universal Network",
  role: "Universal Connectivity Layer",
  metaphor: "The digital bloodstream connecting every entity in the ecosystem.",
  description: "The universal network of the Konsmik ecosystem. It connects users, KI systems, applications, services, and infrastructure, enabling secure communication and continuous connectivity across all connected entities.",
  purpose: "Provides reliable communication, secure data transmission, service discovery, and network connectivity, allowing every Konsmik entity to exchange information and operate as one unified ecosystem.",
  connectedTo: [
    "konsos",
    "konsmesh",
    "konsgate",
    "konsnod"
  ],
  icon: Globe,
  tier: "Foundational"
},
{
  id: "konsmesh",
  name: "KonsMesh",
  tagline: "The Living Network Body",
  role: "Real-Time Synchronization Layer",
  metaphor: "The nervous system of the Konsmik ecosystem.",
  description: "The living synchronization layer of the Konsmik ecosystem. It coordinates real-time communication, state synchronization, event propagation, and intelligent interactions between connected entities.",
  purpose: "Enables every Konsmik entity to communicate, synchronize, react, and collaborate in real time, ensuring the ecosystem behaves as one living, responsive network.",
  connectedTo: [
    "konsos",
    "konsnet",
    "konsgate",
    "waides_ki",
    "shavoka_ki"
  ],
  icon: Network,
  tier: "Foundational"
},
{
  id: "waides_ki",
  name: "Waides KI",
  tagline: "The Trading Intelligence",
  role: "Market Intelligence & Decision System",
  metaphor: "The analytical mind that transforms market data into intelligent decisions.",
  description: "The trading intelligence of the Konsmik ecosystem. It analyzes market structure, sentiment, momentum, volatility, liquidity, and multiple data sources to generate disciplined forecasts, trading signals, market insights, and no-trade decisions.",
  purpose: "Empowers traders with AI-driven market intelligence, structured analysis, risk-aware decision support, and high-confidence trading opportunities across digital and financial markets.",
  connectedTo: [
    "konsos",
    "womblayer",
    "konsgate",
    "konsmesh",
    "waides_niuz",
    "waidtred"
  ],
  icon: Brain,
  tier: "Intelligence"
},
{
  id: "shavoka_ki",
  name: "Shavoka KI",
  tagline: "The Strategic Intelligence",
  role: "Strategic Analysis & Defense Intelligence",
  metaphor: "The guardian mind that protects and guides the ecosystem.",
  description: "The strategic intelligence of the Konsmik ecosystem. It analyzes risks, monitors system integrity, supports strategic decision-making, and strengthens the resilience, security, and long-term stability of connected entities.",
  purpose: "Provides intelligent defense, strategic awareness, risk analysis, operational protection, and decision support to help the ecosystem remain secure, adaptive, and resilient.",
  connectedTo: [
    "konsos",
    "konsgate",
    "konsnet",
    "konsmesh",
    "waidespruf",
    "waideschain"
  ],
  icon: ShieldAlert,
  tier: "Intelligence"
},
{
  id: "waides_niuz",
  name: "Waides Niuz",
  tagline: "The Information Engine",
  role: "Media & Intelligence System",
  metaphor: "The eyes and voice of the Konsmik ecosystem.",
  description: "The information engine of the Konsmik ecosystem. It gathers, structures, analyzes, and delivers news, insights, research, trends, and narratives that help users understand events, industries, markets, and the evolving digital world.",
  purpose: "Transforms information into meaningful intelligence, enabling users and connected KI systems to stay informed, discover opportunities, and make better decisions.",
  connectedTo: [
    "waides_ki",
    "betramaid_ki",
    "shavoka_ki",
    "konsgate"
  ],
  icon: FileText,
  tier: "Application"
},
{
  id: "waidtred",
  name: "WaidTred",
  tagline: "The Financial Core",
  role: "Financial & Transaction System",
  metaphor: "The heartbeat that keeps value moving across the ecosystem.",
  description: "The financial core of the Konsmik ecosystem. It powers payments, transfers, wallets, balances, funding, withdrawals, bill payments, and the secure movement of value between users, services, and connected entities.",
  purpose: "Provides a unified financial infrastructure that enables trusted transactions, digital commerce, and seamless value exchange throughout the Konsmik ecosystem.",
  connectedTo: [
    "webonyix",
    "waidespruf",
    "waideschain",
    "smaitredex",
    "waides_wealth_circle",
    "konsgate"
  ],
  icon: Coins,
  tier: "Economic"
},
{
  id: "konsnod",
  name: "KonsNod",
  tagline: "The Local Node Infrastructure",
  role: "Distributed Infrastructure System",
  metaphor: "The foundation that extends the ecosystem everywhere.",
  description: "The distributed node infrastructure of the Konsmik ecosystem. It provides regional deployment, hosting, compute resources, and infrastructure that bring connected services closer to users while improving resilience, scalability, and availability.",
  purpose: "Distributes the ecosystem across trusted nodes, enabling secure hosting, efficient resource management, regional expansion, and reliable access to connected Konsmik services.",
  connectedTo: [
    "konsos",
    "womblayer",
    "konsnet",
    "konsgate"
  ],
  icon: Activity,
  tier: "Foundational"
},
{
  id: "waides_wealth_circle",
  name: "Waides Wealth Circle",
  tagline: "The Collective Wealth Engine",
  role: "Collective Economic Growth System",
  metaphor: "The economic pulse that keeps value circulating throughout the ecosystem.",
  description: "The collective wealth engine of the Konsmik ecosystem. It enables individuals, businesses, and communities to build, circulate, and grow value together through coordinated economic participation, shared opportunities, and sustainable collaboration.",
  purpose: "Strengthens the ecosystem by encouraging collective wealth creation, value circulation, collaboration, and long-term economic growth across connected entities.",
  connectedTo: [
    "waidtred",
    "webonyix",
    "smaitredex",
    "waidespruf",
    "waideschain"
  ],
  icon: Users,
  tier: "Economic"
},
{
  id: "konsgate",
  name: "KonsGate",
  tagline: "The Central API Brain",
  role: "Universal Integration & Communication System",
  metaphor: "The universal plug that connects every entity into one intelligent ecosystem.",
  description: "The central integration layer of the Konsmik ecosystem. It provides a unified communication protocol that allows every entity to securely discover, connect, exchange data, and interact without requiring direct one-to-one integrations.",
  purpose: "Enables one integration to access the entire ecosystem, simplifying communication, orchestration, interoperability, and intelligent collaboration across all Konsmik entities.",
  connectedTo: [
    "konsos",
    "womblayer",
    "konsnet",
    "konsmesh",
    "waides_ki",
    "shavoka_ki",
    "waidtred",
    "webonyix",
    "waideschain",
    "waidespruf"
  ],
  icon: Plug,
  tier: "Foundational"
},
{
  id: "webonyix",
  name: "Webonyix",
  tagline: "The Transmutation Chamber",
  role: "Value Transmutation & Economic Reserve System",
  metaphor: "The heart that transforms potential value into usable value.",
  description: "The value transmutation system of the Konsmik ecosystem. It converts Smaionyix into Onyix, manages ecosystem reserves, regulates value transformation, and powers the economic foundation that supports connected entities.",
  purpose: "Provides a trusted mechanism for value transmutation, reserve management, economic stability, and the controlled distribution of usable ecosystem value.",
  connectedTo: [
    "waidtred",
    "waidespruf",
    "waideschain",
    "smaitredex",
    "konsgate"
  ],
  icon: RefreshCw,
  tier: "Economic"
},
{
  id: "waidespruf",
  name: "WaidesPruf",
  tagline: "The Proof System",
  role: "Verification & Trust System",
  metaphor: "The source of truth that validates every trusted action.",
  description: "The verification engine of the Konsmik ecosystem. It validates identity, ownership, transactions, assets, permissions, and ecosystem activities, generating trusted proofs that establish authenticity across connected entities.",
  purpose: "Provides cryptographic verification, proof of identity, proof of ownership, proof of transactions, and trusted validation for every verified action performed within the ecosystem.",
  connectedTo: [
    "waideschain",
    "webonyix",
    "waidtred",
    "womblayer",
    "konsgate"
  ],
  icon: BadgeCheck,
  tier: "Trust"
},
{
  id: "waideschain",
  name: "WaidesChain",
  tagline: "The Sovereign Chain",
  role: "Immutable Record & Trust Ledger",
  metaphor: "The unbreakable spine that preserves the truth of the ecosystem.",
  description: "The sovereign record system of the Konsmik ecosystem. It permanently records verified transactions, ownership, value movement, proofs, and critical ecosystem events, creating an immutable history that connected entities can trust.",
  purpose: "Provides transparent, tamper-resistant records for verification, auditing, accountability, and long-term trust across the entire Konsmik ecosystem.",
  connectedTo: [
    "waidespruf",
    "webonyix",
    "waidtred",
    "womblayer",
    "konsgate"
  ],
  icon: Link,
  tier: "Trust"
},
{
  id: "waidesmai",
  name: "WaidesMai",
  tagline: "The Identity & Communication System",
  role: "Social Identity & Messaging Platform",
  metaphor: "The voice that connects every user of the ecosystem.",
  description: "The social identity and communication system of the Konsmik ecosystem. It enables users to establish a unified digital identity, communicate securely, build trusted relationships, and interact seamlessly across connected entities.",
  purpose: "Provides unified identity, direct messaging, social interaction, contact discovery, and trusted communication, allowing users to stay connected throughout the entire Konsmik ecosystem.",
  connectedTo: [
    "konsos",
    "womblayer",
    "konsnet",
    "konsmesh",
    "konsgate",
    "waidespruf"
  ],
  icon: MessageCircle,
  tier: "Application"
},
{
  id: "waidespai",
  name: "WaidesPai",
  tagline: "The Social Boost Engine",
  role: "Attention & Visibility System",
  metaphor: "The amplifier that helps ideas, people, and opportunities reach the right audience.",
  description: "The attention and visibility engine of the Konsmik ecosystem. It powers promotions, advertising, content distribution, and audience targeting, helping users, businesses, and entities increase their reach across the ecosystem.",
  purpose: "Enables intelligent promotion, campaign management, audience engagement, and visibility growth, ensuring valuable content, products, and opportunities reach the right people at the right time.",
  connectedTo: [
    "waidesreach",
    "waidesmai",
    "waidesniuz",
    "waidtred",
    "konsgate"
  ],
  icon: Megaphone,
  tier: "Application"
},
{
  id: "waidesreach",
  name: "WaidesReach",
  tagline: "The Proof of Attention Engine",
  role: "Growth & Network Expansion System",
  metaphor: "The pulse that measures and expands influence across the ecosystem.",
  description: "The growth engine of the Konsmik ecosystem. It measures attention, tracks engagement, distributes campaigns, expands networks, and helps people, businesses, and communities grow their reach through trusted ecosystem interactions.",
  purpose: "Provides intelligent growth, audience expansion, campaign distribution, engagement insights, and proof of attention to help opportunities reach the right people across the ecosystem.",
  connectedTo: [
    "waidespai",
    "waidesmai",
    "waidesniuz",
    "waidtred",
    "konsgate"
  ],
  icon: Radio,
  tier: "Application"
},
{
  id: "konsdev",
  name: "KonsDev",
  tagline: "The Builder Engine",
  role: "Application Development & Automation System",
  metaphor: "The workshop where ideas become intelligent products.",
  description: "The builder engine of the Konsmik ecosystem. It enables the design, development, testing, automation, and deployment of applications, KI systems, workflows, and digital solutions that integrate seamlessly with the ecosystem.",
  purpose: "Accelerates the creation of connected applications, intelligent agents, internal tools, and digital services while ensuring they follow the standards, architecture, and interoperability of the Konsmik ecosystem.",
  connectedTo: [
    "konsos",
    "womblayer",
    "konsgate",
    "konsnet",
    "konsmesh"
  ],
  icon: Code2,
  tier: "Development"
},
{
  id: "waidesakademi",
  name: "Waides Akademi",
  tagline: "The Learning System",
  role: "Education & Skill Development Platform",
  metaphor: "The academy where knowledge becomes capability.",
  description: "The learning system of the Konsmik ecosystem. It empowers individuals to acquire knowledge, develop practical skills, earn verified achievements, and follow structured growth pathways that connect learning with real opportunities.",
  purpose: "Provides education, certifications, learning pathways, mentorship, and continuous skill development while integrating achievements across the Konsmik ecosystem.",
  connectedTo: [
    "waidesmai",
    "waidespruf",
    "womblayer",
    "konsgate",
    "waides_ki"
  ],
  icon: GraduationCap,
  tier: "Application"
},
{
  id: "waidsoko",
  name: "WaidSoko",
  tagline: "The Global Marketplace",
  role: "Commerce & Service Exchange Platform",
  metaphor: "The marketplace where opportunities become transactions.",
  description: "The marketplace of the Konsmik ecosystem. It enables individuals, businesses, and communities to discover, buy, sell, trade, and deliver products, services, and digital offerings through one connected commerce experience.",
  purpose: "Provides a trusted marketplace that connects buyers and sellers, supports digital and physical commerce, and integrates seamlessly with the ecosystem's identity, payment, verification, and communication systems.",
  connectedTo: [
    "waidtred",
    "waidespruf",
    "waidesmai",
    "konsgate",
    "womblayer"
  ],
  icon: ShoppingCart,
  tier: "Application"
},
{
  id: "betramaid_ki",
  name: "Betramaid KI",
  tagline: "The Sports Intelligence",
  role: "Sports Analysis & Prediction System",
  metaphor: "The analyst that uncovers patterns behind every match.",
  description: "The sports intelligence of the Konsmik ecosystem. It analyzes teams, players, form, statistics, historical performance, and contextual factors to generate structured insights, match analysis, and probability-based predictions.",
  purpose: "Empowers users with intelligent sports analysis, data-driven predictions, and contextual insights that support informed decision-making across sporting events.",
  connectedTo: [
    "waidesniuz",
    "konsgate",
    "womblayer",
    "shavoka_ki"
  ],
  icon: Trophy,
  tier: "Intelligence"
},
{
  id: "smaitredex",
  name: "SmaiTredEx",
  tagline: "The Exchange Layer",
  role: "Digital Asset Exchange System",
  metaphor: "The marketplace where ecosystem value flows through trusted exchange.",
  description: "The exchange system of the Konsmik ecosystem. It enables the secure trading and exchange of Smaionyix-related currencies, ecosystem assets, and approved digital values through a trusted and connected exchange environment.",
  purpose: "Provides a transparent, secure, and efficient marketplace for exchanging ecosystem assets while integrating with the ecosystem's financial, verification, and trust infrastructure.",
  connectedTo: [
    "waidtred",
    "webonyix",
    "waidespruf",
    "waideschain",
    "konsgate"
  ],
  icon: ArrowLeftRight,
  tier: "Economic"
},
{
  id: "maipaitred",
  name: "MaiPaiTred",
  tagline: "The Skill-Based Analytical Trading Center",
  role: "Prediction & Event Trading Platform",
  metaphor: "The arena where analysis meets opportunity.",
  description: "The skill-based analytical trading platform of the Konsmik ecosystem. It enables users to analyze momentum, trends, outcomes, and events, applying strategy and knowledge to participate in structured prediction and event-based markets.",
  purpose: "Provides an intelligent environment for analytical event trading, rewarding informed decision-making, strategic thinking, and disciplined participation through connected ecosystem services.",
  connectedTo: [
    "waides_ki",
    "waidtred",
    "webonyix",
    "waidespruf",
    "waideschain",
    "konsgate"
  ],
  icon: Target,
  tier: "Application"
},
{
  id: "konsmik",
  name: "Konsmik",
  tagline: "The Living Mirror",
  role: "Unified Ecosystem Experience",
  metaphor: "The window through which people experience the entire ecosystem.",
  description: "The central experience of the Konsmik ecosystem. It brings together every connected entity into one unified interface, allowing users to access intelligent services, digital tools, communication, learning, commerce, finance, and opportunities through a seamless connected experience.",
  purpose: "Provides a single, intelligent entry point into the ecosystem where people, businesses, and communities can discover, access, and interact with every connected Konsmik entity without fragmentation.",
  connectedTo: [
    "konsos",
    "konsgate",
    "waidesmai",
    "womblayer",
    "konsnet",
    "konsmesh",
    "waides_ki",
    "waidtred"
  ],
  icon: Compass,
  tier: "Experience"
},
{
  id: "stockpilot",
  name: "StockPilot",
  tagline: "The Smart Inventory Intelligence",
  role: "Inventory & Stock Management System",
  metaphor: "The navigator that keeps every business moving with confidence.",
  description: "An intelligent inventory and stock management system by WaidSoko. It helps businesses monitor inventory, track product movement, manage warehouses, optimize stock levels, and gain real-time insights for smarter operational decisions.",
  purpose: "Empowers businesses to manage inventory efficiently, reduce stock losses, automate stock operations, improve forecasting, and streamline the movement of products across their supply chain.",
  connectedTo: [
    "waidsoko",
    "waidtred",
    "waidespruf",
    "womblayer",
    "konsgate"
  ],
  icon: Boxes,
  tier: "Business"
},
{
  id: "ki_matrix",
  name: "KI Matrix",
  tagline: "The Intelligence Foundation",
  role: "Universal Intelligence Architecture",
  metaphor: "The living mind that gives intelligence to the entire ecosystem.",
  description: "The intelligence foundation of the Konsmik ecosystem. KI Matrix unifies reasoning, memory, learning, planning, verification, coordination, prediction, creativity, and autonomous decision-making into one adaptive intelligence architecture that powers every connected entity. It is model-independent, allowing external AI models and future intelligence systems to extend its capabilities without defining its identity.",
  purpose: "Provides a shared intelligence layer that enables every Konsmik entity to think, learn, reason, remember, coordinate, and evolve through one consistent intelligence architecture while remaining adaptable to future technologies.",
  connectedTo: [
    "konsos",
    "womblayer",
    "konsgate",
    "konsnet",
    "konsmesh",
    "waides_ki",
    "shavoka_ki",
    "betramaid_ki"
  ],
  icon: BrainCircuit,
  tier: "Sovereign"
},
];

const CORE_PRINCIPLES = [
  {
    title: "Knowledge should empower people",
    description: "Information must be structured, accessible, and context-rich. Empty data buffers and gatekept resources stall human progress; structured learning triggers autonomy."
  },
  {
    title: "Technology should serve humanity",
    description: "We refuse to build technology that functions as digital slot machines. Systems must perform reliable work, preserve user mental clarity, and solve high-priority physical problems."
  },
  {
    title: "Collaboration creates stronger outcomes",
    description: "A single brilliant mind is a coordinate point; a connected network of builders is a resilient force. Coordinated minds produce exponential growth."
  },
  {
    title: "Innovation must create opportunity",
    description: "We do not write code for empty prestige. All innovation must clear pathways for employment, creative entrepreneurship, and community-wide leverage."
  },
  {
    title: "Learning must never stop",
    description: "Ecosystems that stagnate decay. Continuous feedback, training, documentation, and curious inquiry are the lifeblood of operational resilience."
  },
  {
    title: "Systems should be intentionally designed",
    description: "We reject random features. Spacing, data flows, database constraints, user roles, and animations must be masterfully drafted before building is initialized."
  },
  {
    title: "Progress is strongest when shared",
    description: "A centralized empire collapses under its own dry weight. True value distribution splits ownership and opportunity among all active pillars of the network."
  }
];

export default function FounderProfile({ cvs = [], onDownloadIncrement, onContactClick, customization }: FounderProfileProps) {
  const [activeTab, setActiveTab] = useState<"journey" | "studio" | "ecosystem" | "principles" | "vision">("journey");
  
  // Interactive Identity state
  const [selectedId, setSelectedId] = useState<"founder" | "heritage" | "creative" | "philosophical" | "builder">("founder");
  
  // Interactive KI System state
  const [selectedKi, setSelectedKi] = useState<string>("konsos");
  
  // Interactive Network search state
  const [searchQuery, setSearchQuery] = useState("");
  const [systemFilter, setSystemFilter] = useState<"All" | "Foundational" | "Intelligence Layer" | "Exchange & Gateway">("All");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Canvas animation for the ecosystem visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes definition
    const nodeCount = 42;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    const colors = [
      "rgba(6, 182, 212, 0.4)",  // Cyan
      "rgba(147, 51, 234, 0.4)", // Purple
      "rgba(59, 130, 246, 0.4)",  // Blue
      "rgba(16, 185, 129, 0.4)",  // Emerald
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.01 + Math.random() * 0.015
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw global space grids
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodeCount; i++) {
        const nodeA = nodes[i];
        for (let j = i + 1; j < nodeCount; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            const alpha = (1 - distance / 110) * 0.12;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // Draw & update nodes
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        node.pulse += node.pulseSpeed;
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.75;

        // Draw node aura glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.5, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, currentRadius * 2.5);
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color.replace("0.4", "0.80");
        ctx.fill();

        // Update positions
        node.x += node.vx;
        node.y += node.vy;

        // Bounce boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const currentIdentity = IDENTITY_DIMENSIONS.find(id => id.id === selectedId)!;
  const activeKiDetail = KI_SYSTEMS.find(sys => sys.id === selectedKi)!;

  // Filter systems list based on Search & Category selections
  const filteredKiSystems = KI_SYSTEMS.filter(sys => {
    const matchesSearch = sys.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sys.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sys.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = systemFilter === "All" || sys.tier === systemFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-16 text-slate-800 dark:text-neutral-100 font-sans" id="founder-profile-system">
      
      {/* SECTION: HERO CONTAINER with Live Ecosystem Nodes backdrop */}
      <div className="relative left-1/2 w-[min(96vw,1720px)] -translate-x-1/2 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-neutral-800/80 bg-neutral-950 p-6 md:p-14 text-white min-h-[560px] flex flex-col justify-between shadow-xl">
        <div className="absolute inset-0 z-0">
          <canvas ref={canvasRef} className="w-full h-full block opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.15),transparent_60%)] z-10" />
        </div>

        <div className="relative z-20 space-y-2 text-left self-start mt-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/35 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping shrink-0" />
            Ecosystem Core Anchor
          </span>
        </div>

        <div className="relative z-20 max-w-4xl lg:max-w-[58%] space-y-6 text-left my-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300">
              Nwoara Chigozie
            </h1>
            <h2 className="text-lg md:text-xl font-mono text-cyan-400 font-bold tracking-wider">
              Founder of AfriWaid Studio
            </h2>
            <p className="text-xs md:text-sm font-sans font-medium text-purple-400 tracking-widest uppercase">
              Builder • Creator • Visionary • Ecosystem Architect
            </p>
          </div>

          <p className="text-slate-300 text-sm md:text-lg leading-relaxed font-sans max-w-2xl border-l-2 border-purple-500/50 pl-4 py-1 italic">
            “Building systems, opportunities, and ecosystems designed to empower people, strengthen communities, and contribute to the future.”
          </p>
        </div>

        {/* CTA BUTTONS ROW */}
        <div className="relative z-20 flex flex-wrap gap-2.5 font-mono text-[10px] uppercase tracking-wider lg:max-w-[58%]">
          <button
            onClick={() => setActiveTab("journey")}
            className={`px-5 py-3 rounded-xl border font-bold transition duration-200 flex items-center gap-1.5 cursor-pointer hover:scale-103 ${
              activeTab === "journey"
                ? "bg-cyan-500 text-black border-cyan-400 font-extrabold shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                : "bg-white/5 text-white border-white/10 hover:bg-white/10"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Founder Journey</span>
          </button>

          <button
            onClick={() => setActiveTab("ecosystem")}
            className={`px-5 py-3 rounded-xl border font-bold transition duration-200 flex items-center gap-1.5 cursor-pointer hover:scale-103 ${
              activeTab === "ecosystem"
                ? "bg-purple-600 text-white border-purple-500 font-extrabold shadow-[0_0_20px_rgba(147,51,234,0.35)]"
                : "bg-white/5 text-white border-white/10 hover:bg-white/10"
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>KI Systems Map</span>
          </button>

          {cvs && cvs.length > 0 && (
            <button
              onClick={() => {
                const firstCv = cvs.find(c => c.isPublished) || cvs[0];
                if (firstCv && onDownloadIncrement) {
                  onDownloadIncrement(firstCv.id);
                  // Dynamic print simulation representing clean CV retrieval
                  window.print();
                }
              }}
              className="px-5 py-3 rounded-xl bg-white/5 text-slate-300 border border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20 transition cursor-pointer flex items-center gap-1.5 font-bold"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Download CV</span>
            </button>
          )}

          {onContactClick && (
            <button
              onClick={onContactClick}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 hover:to-purple-500/30 hover:text-white transition cursor-pointer flex items-center gap-1.5 font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Founder</span>
            </button>
          )}
        </div>

        <div className="relative z-20 mt-8 lg:absolute lg:bottom-10 lg:right-10 lg:top-10 lg:mt-0 lg:w-[36%]">
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-3 shadow-[0_0_40px_rgba(147,51,234,0.16)] backdrop-blur-sm">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_55%)]" />
            {customization?.founderPortraitUrl ? (
              <img
                src={customization.founderPortraitUrl}
                alt="Nwogha Chigozie, Founder of AfriWaid Studio"
                className="relative z-10 h-full min-h-[336px] w-full rounded-2xl object-cover object-center"
              />
            ) : (
              <div className="relative z-10 flex h-full min-h-[336px] flex-col items-center justify-center rounded-2xl border border-dashed border-cyan-400/30 bg-black/20 text-center">
                <User className="mb-4 h-14 w-14 text-cyan-300/70" />
                <p className="text-sm font-bold text-white">Founder portrait slot</p>
                <p className="mt-2 max-w-xs text-xs leading-5 text-slate-400">
                  Upload the founder image.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MINI INTERNAL NAV BAR */}
      <div className="flex border-b border-slate-200 dark:border-neutral-800 pb-1.5 overflow-x-auto no-scrollbar gap-1 text-[10px] md:text-xs font-mono tracking-wider uppercase font-bold">
        {[
          { id: "journey", label: "Twelve Expressions Journey", icon: User },
          { id: "studio", label: "AfriWaid Purpose", icon: Globe },
          { id: "ecosystem", label: "The KI Systems Matrix", icon: Network },
          { id: "principles", label: "Core Principles", icon: Compass },
          { id: "vision", label: "Vision & Living Legacy", icon: Award }
        ].map((sec) => {
          const Icon = sec.icon;
          const isActive = activeTab === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveTab(sec.id as any)}
              className={`px-4 py-2 flex items-center gap-2 whitespace-nowrap border-b-2 transition cursor-pointer ${
                isActive
                  ? "border-cyan-500 dark:border-cyan-400 text-cyan-500 dark:text-cyan-400 font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:text-neutral-400 dark:hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </div>

      {/* MAIN TAB SWITCHBOARDS */}
      <AnimatePresence mode="wait">
        
        {/* TAB 1: ONE FOUNDER. MULTIPLE EXPRESSIONS. */}
        {activeTab === "journey" && (
          <motion.div
            key="journey"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-slate-50 dark:bg-black p-6 md:p-8 rounded-2xl border border-slate-200/80 dark:border-neutral-850 space-y-4 text-left">
              <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono uppercase font-bold block">IMPORTANT SPECIFICATION</span>
              <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white uppercase tracking-tight">One Founder. Multiple Expressions.</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans max-w-4xl">
                Nwaora Chigozie is a Nigerian ecosystem architect, innovator, creative thinker, and founder of AfriWaid Studio.
                Throughout his journey, different names and identities have emerged to represent different dimensions of his work, creativity, philosophy, and thinking.
                <strong> These are NOT separate individuals; they are different expressions of ONE founder</strong>, beautifully coordinating to form a single, robust system of identity and vision.
              </p>
            </div>

            {/* IDENTITY SWITCH PANEL */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              {/* Left Side menu selector */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[10px] text-slate-400 dark:text-neutral-500 font-mono uppercase block font-bold tracking-widest pl-1">
                  Identity Layers Selector
                </span>
                
                <div className="space-y-2">
                  {IDENTITY_DIMENSIONS.map((dim) => {
                    const Icon = dim.icon;
                    const isSelected = selectedId === dim.id;
                    return (
                      <button
                        key={dim.id}
                        onClick={() => setSelectedId(dim.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition duration-200 flex items-center gap-4 cursor-pointer hover:scale-[1.01] ${
                          isSelected
                            ? "bg-cyan-500/10 border-cyan-500 dark:border-cyan-400 text-slate-950 dark:text-white"
                            : "bg-white dark:bg-zinc-950 border-slate-200 dark:border-neutral-900 text-slate-600 dark:text-neutral-400 hover:bg-slate-50 dark:hover:bg-zinc-900"
                        }`}
                        id={`identity-btn-${dim.id}`}
                      >
                        <div className={`p-2 rounded-xl shrink-0 ${
                          isSelected ? "bg-cyan-500/20 text-cyan-500" : "bg-slate-100 dark:bg-zinc-900 text-slate-400"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] text-slate-400 dark:text-neutral-500 font-mono font-bold block uppercase tracking-wider">
                            {dim.name}
                          </span>
                          <span className="text-xs font-display font-bold block dark:text-white leading-snug">
                            {dim.expressionName}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-zinc-400 block truncate font-mono">
                            {dim.role}
                          </span>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-slate-300 dark:text-neutral-700 transition-transform ${isSelected ? "rotate-90 text-cyan-400" : ""}`} />
                      </button>
                    );
                  })}
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-purple-500/15 rounded-2xl">
                  <span className="text-[9px] text-purple-600 dark:text-purple-400 font-mono font-bold uppercase block tracking-widest mb-1.5">Ecosystem Formula</span>
                  <p className="font-mono text-[11px] leading-relaxed text-slate-600 dark:text-zinc-400">
                    Five identities. One person. One vision. One integrated ecosystem.
                  </p>
                </div>
              </div>

              {/* Right Side Dimension Display Card */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdentity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.15 }}
                    className={`h-full min-h-[420px] bg-white dark:bg-zinc-950 border border-slate-200 dark:border-neutral-900 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden`}
                  >
                    {/* Shadow overlay glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />

                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-neutral-900 pb-4">
                        <div className="space-y-1">
                          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono font-bold uppercase tracking-widest">
                            {currentIdentity.name}
                          </span>
                          <h4 className="text-2xl font-display font-black text-slate-900 dark:text-white leading-none">
                            {currentIdentity.expressionName}
                          </h4>
                        </div>
                        <div className={`p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400`}>
                          {React.createElement(currentIdentity.icon, { className: "w-6 h-6 animate-pulse" })}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs font-mono text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">
                          Role Context: {currentIdentity.role}
                        </p>
                        <p className="text-sm font-sans font-medium text-slate-800 dark:text-neutral-100 bg-slate-50 dark:bg-black/30 p-3 rounded-xl border border-slate-200/50 dark:border-neutral-900/50">
                          {currentIdentity.motto}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Functional Role & Identity Structure</h5>
                        <p className="text-xs text-slate-600 dark:text-zinc-350 leading-relaxed font-sans">
                          {currentIdentity.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Philosophical Foundation & Narrative</h5>
                        <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-sans">
                          {currentIdentity.backgroundStory}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-neutral-900 space-y-3 relative z-10">
                      <h5 className="text-[9px] font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">Active Thinking Axioms:</h5>
                      <div className="space-y-2 font-sans text-xs">
                        {currentIdentity.philosophies.map((phil, idx) => (
                          <div key={idx} className="flex gap-2 text-slate-600 dark:text-zinc-400">
                            <span className="text-cyan-500 select-none">•</span>
                            <span>{phil}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: WHAT IS AFRIWAID STUDIO? */}
        {activeTab === "studio" && (
          <motion.div
            key="studio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-8 text-left"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-neutral-800 bg-gradient-to-br from-slate-900 via-slate-950 to-neutral-950 p-8 md:p-12 text-white shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" />
              <div className="max-w-4xl space-y-4 relative z-10">
                <span className="px-3 py-1 bg-white/10 border border-white/25 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase">
                  First of all...
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight leading-none text-white">
                  What is AfriWaid Studio?
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                  AfriWaid Studio is a premium technology, creative, and innovation studio founded by Nwaora Chigozie. It serves as the central creation hub where ideas are transformed into modern digital experiences, from websites and web applications to intelligent systems, digital media, branding, and scalable technology solutions. Through a multidisciplinary team of developers, designers, creatives, and strategists, AfriWaid Studio delivers secure, production-ready products that help individuals, businesses, startups, and organizations bring their visions to life.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-neutral-900 bg-white dark:bg-zinc-950 space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-black text-slate-900 dark:text-white uppercase tracking-tight">Our Core Purpose</h4>
                <p className="text-slate-600 dark:text-zinc-400 text-xs leading-relaxed font-sans">
                  The primary objective of AfriWaid Studio is to design, implement, and deploy meaningful software systems that fundamentally improve how people learn, connect, communicate, collaborate, and access economic opportunities globally.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-neutral-900 bg-white dark:bg-zinc-950 space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-black text-slate-900 dark:text-white uppercase tracking-tight">Ecosystem Gateway Principle</h4>
                <p className="text-slate-600 dark:text-zinc-400 text-xs leading-relaxed font-sans">
                  No system in AfriWaid is designed as an isolated commercial monolith. Every research project, database structure, and application begins its lifecycle here in the studio, moving incrementally to join a wider family of connected systems.
                </p>
              </div>
            </div>

            {/* TWO GRAPHIC COLUMNS FOR FUNCTIONAL ROLES */}
            <div className="space-y-4">
              <span className="text-[10px] text-slate-400 dark:text-neutral-500 font-mono font-bold uppercase block tracking-widest pl-1">
                Functional Roles of AfriWaid Studio
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  {
                    title: "Product Development Studio",
                    desc: "Engineering highly optimized, clean websites, SaaS platforms, databases, and responsive client dashboards with meticulous code craft.",
                    tag: "DEPLOYMENT NODE"
                  },
                  {
                    title: "System Architecture Lab",
                    desc: "Modeling spatial data structures, weighted decision matrices, algorithmic scoring networks, and multi-agent operations.",
                    tag: "THEORY NODE"
                  },
                  {
                    title: "Creative Innovation Hub",
                    desc: "Fusing music structures, artistic visual hierarchies, video production, and comprehensive brand narratives.",
                    tag: "AESTHETIC NODE"
                  },
                  {
                    title: "Long-Term Ecosystem Builder",
                    desc: "Drafting, funding, testing, and supporting the expansive components of the unified future Konsmik civilization.",
                    tag: "LEGACY NODE"
                  }
                ].map((role, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-slate-200 dark:border-neutral-900 bg-slate-50 dark:bg-black/40 text-left space-y-3 flex flex-col justify-between hover:border-cyan-500/20 transition">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 px-2 py-0.5 border border-cyan-500/10 rounded font-bold">
                        {role.tag}
                      </span>
                      <h5 className="font-display font-bold text-slate-900 dark:text-white text-sm tracking-tight pt-1.5 leading-tight">
                        {role.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-sans leading-relaxed flex-grow">
                      {role.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: THE KI SYSTEMS MATRIX & Konsmik Map */}
        {activeTab === "ecosystem" && (
          <motion.div
            key="ecosystem"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-8 text-left"
          >
            {/* INTRODUCING Konsmik & CORE CLARIFICATION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Introduction */}
              <div className="bg-slate-50 dark:bg-black/40 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-neutral-900 space-y-4">
                <span className="text-[10px] text-purple-600 dark:text-purple-400 font-mono uppercase tracking-widest font-extrabold block">
                  Future-Oriented Paradigm
                </span>
                <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  What is Konsmik?
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                  Konsmik is an integrated digital growth ecosystem that bridges fragmented digital experiences by connecting people, technology, knowledge, intelligence, and opportunities into one seamless ecosystem. Through interconnected AI, digital services, and shared infrastructure, Konsmik empowers individuals, businesses, and communities to learn, collaborate, create, innovate, and grow.
                </p>
                <div className="p-3.5 bg-cyan-500/5 border border-cyan-500/10 rounded-xl space-y-1">
                  <span className="text-[9px] text-cyan-600 dark:text-cyan-400 font-mono uppercase tracking-wider font-extrabold block">
                    FOUNDATIONAL AXIO:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 font-sans leading-relaxed italic">
                    “People grow better when systems are connected.”
                  </p>
                </div>
              </div>

              {/* CRITICAL WARNING LAYOUT - No assumptions, clear bounds */}
              <div className="bg-red-500/5 p-6 md:p-8 rounded-2xl border border-red-500/25 space-y-4">
                <span className="text-[10px] text-red-600 dark:text-red-400 font-mono uppercase tracking-widest font-black block flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  CRITICAL WORLDVIEW CLARIFICATION
                </span>
                <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                  Konsmik Civilization is not designed to replace existing digital platforms. It is designed to connect them.
                </h4>
                
                <div className="grid grid-cols-2 gap-4 font-sans text-xs">
                  <div className="bg-red-500/10 p-3 rounded-xl border border-red-500/20 space-y-1.5">
                    <span className="font-mono text-[9px] text-red-600 dark:text-red-400 uppercase font-black block">Konsmik is NOT:</span>
                    <ul className="space-y-1 text-[11px] text-slate-700 dark:text-zinc-300">
                      <li>❌ A political government</li>
                      <li>❌ A structured religion</li>
                      <li>❌ A political movement</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 space-y-1.5">
                    <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 uppercase font-black block">Konsmik IS:</span>
                    <ul className="space-y-1 text-[11px] text-slate-700 dark:text-zinc-300">
                      <li>✓ A digital growth ecosystem</li>
                      <li>✓ A network of connected apps</li>
                      <li>✓ A development framework</li>
                    </ul>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-neutral-500 leading-relaxed font-sans">
                       Today’s digital world is fragmented. People move between disconnected apps to learn, create, collaborate, work, trade, earn, and grow, often rebuilding their identity, data, reputation, payments, and progress on every platform.   </p>
              </div>
            </div>

            {/* KI SYSTEMS INTERACTIVE ARCHITECTURE CONSOLE */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 dark:border-neutral-800 pb-2">
                <div>
                  <h3 className="text-xl font-display font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    The KI Systems Matrix
                  </h3>
                  <p className="text-[10px] text-slate-400 dark:text-neutral-450 font-mono font-bold uppercase tracking-wider">
                    ecosystem components • interaction map
                  </p>
                  <p className="text-xs text-slate-500 dark:text-neutral-500 italic mt-0.5">
                    Note: These are explicitly designated as <strong>KI Systems</strong> (Konsmik Intelligence systems), built purely to support human workflow coordination.
                  </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-1 bg-slate-100 dark:bg-zinc-900 p-1 border border-slate-200 dark:border-neutral-800 rounded-lg">
                  {(["All", "Foundational", "Intelligence Layer", "Exchange & Gateway"] as const).map(f => (
                    <button
                      key={f}
                      onClick={() => setSystemFilter(f)}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition ${
                        systemFilter === f
                          ? "bg-slate-900 text-white dark:bg-white dark:text-zinc-950 font-bold"
                          : "text-slate-600 dark:text-neutral-400 hover:text-slate-950 dark:hover:text-white"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* SEARCH FILTER BOX */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-500" />
                <input
                  type="text"
                  placeholder="Query system files, connections, or descriptions (e.g. 'gateway', 'security')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-neutral-800 rounded-2xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 placeholder-slate-400 dark:placeholder-zinc-600 shadow-xs"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans">
                {/* Systems GRID (7 Columns) */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[480px] overflow-y-auto pr-1">
                  {filteredKiSystems.length === 0 ? (
                    <div className="col-span-2 text-center py-10 border border-dashed border-slate-200 dark:border-neutral-850 rounded-2xl text-slate-400 text-xs font-mono">
                      No matching KI systems located in directory queries.
                    </div>
                  ) : (
                    filteredKiSystems.map((sys) => {
                      const Icon = sys.icon;
                      const isSelected = selectedKi === sys.id;
                      return (
                        <button
                          key={sys.id}
                          onClick={() => setSelectedKi(sys.id)}
                          className={`w-full text-left p-4 rounded-xl border transition flex flex-col justify-between h-36 relative overflow-hidden group hover:scale-[1.015] cursor-pointer ${
                            isSelected
                              ? "bg-purple-500/10 border-purple-500 text-slate-950 dark:text-white shadow-[0_0_15px_rgba(147,51,234,0.15)]"
                              : "bg-white dark:bg-zinc-950 border-slate-200 dark:border-neutral-900 hover:border-cyan-500/20 text-slate-700 dark:text-neutral-300"
                          }`}
                          id={`ki-sys-btn-${sys.id}`}
                        >
                          <div className="space-y-1 w-full">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-sans font-bold block text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                                {sys.name}
                              </span>
                              <div className={`p-1.5 rounded-lg shrink-0 ${
                                isSelected ? "bg-purple-500/20 text-purple-400" : "bg-slate-50 dark:bg-zinc-900 text-slate-400"
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                            </div>
                            <span className="text-[8px] font-mono text-slate-400 block truncate">
                              [{sys.role}]
                            </span>
                            <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-sans leading-snug line-clamp-2 pt-1 transition-colors group-hover:text-slate-800 dark:group-hover:text-white">
                              {sys.tagline}
                            </p>
                          </div>

                          <div className="w-full flex items-center justify-between pt-2 border-t border-slate-100 dark:border-neutral-900 text-[8px] font-mono font-bold uppercase">
                            <span className="text-cyan-600 dark:text-cyan-400">
                              Tier: {sys.tier}
                            </span>
                            <span className="text-slate-400 flex items-center gap-1">
                              View Profile <ChevronRight className="w-2.5 h-2.5" />
                            </span>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>

                {/* Selected KI Detailed Blueprint (5 Columns) */}
                <div className="lg:col-span-5 h-[480px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeKiDetail.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-neutral-900 rounded-3xl p-6 h-full flex flex-col justify-between shadow-lg relative overflow-hidden"
                    >
                      <div className="space-y-5">
                        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-neutral-900 pb-4">
                          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 border border-purple-500/20">
                            {React.createElement(activeKiDetail.icon, { className: "w-5 h-5" })}
                          </div>
                          <div>
                            <span className="px-2 py-0.5 bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 text-[8px] font-mono font-bold uppercase rounded">
                              {activeKiDetail.tier} System
                            </span>
                            <h4 className="text-xl font-display font-black text-slate-900 dark:text-white uppercase leading-none mt-1">
                              {activeKiDetail.name}
                            </h4>
                          </div>
                        </div>

                        <div className="space-y-4 text-xs font-sans">
                          <div className="space-y-1">
                            <span className="text-[9px] text-slate-400 font-mono uppercase font-bold block tracking-widest leading-none">
                              Conceptual Role
                            </span>
                            <p className="text-slate-600 dark:text-zinc-300 font-medium bg-slate-50 dark:bg-black/40 p-2.5 rounded-lg border border-slate-200/40 dark:border-neutral-900">
                              {activeKiDetail.role}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="text-[9px] text-slate-400 font-mono uppercase font-bold block tracking-widest leading-none">
                              Explanation & Context
                            </span>
                            <p className="text-slate-500 dark:text-zinc-400 leading-relaxed text-[11px]">
                              {activeKiDetail.description}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="text-[9px] text-slate-400 font-mono uppercase font-bold block tracking-widest leading-none">
                              Functional Purpose
                            </span>
                            <p className="text-slate-500 dark:text-zinc-400 leading-relaxed text-[11px]">
                              {activeKiDetail.purpose}
                            </p>
                          </div>

                          <div className="space-y-1 leading-none pt-1">
                            <span className="text-[9px] text-cyan-600 dark:text-cyan-400 font-mono uppercase font-bold tracking-widest block mb-1">
                              Connected Ecosystem Links
                            </span>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {activeKiDetail.connectedTo.map(connId => {
                                const matched = KI_SYSTEMS.find(s => s.id === connId);
                                return matched ? (
                                  <button
                                    key={connId}
                                    onClick={() => setSelectedKi(connId)}
                                    className="px-2.5 py-1 bg-slate-100 hover:bg-cyan-500/10 hover:text-cyan-400 dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 rounded-md border border-slate-200 dark:border-neutral-850 text-[9px] font-mono transition cursor-pointer font-bold"
                                  >
                                    → {matched.name}
                                  </button>
                                ) : null;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 dark:border-neutral-900 pt-3 flex items-center justify-between text-[8px] font-mono text-slate-400 uppercase font-bold">
                        <span>METAPHOR: {activeKiDetail.metaphor}</span>
                        <span className="inline-block px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 rounded font-bold">ACTIVE REGISTRY</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: CORE PRINCIPLES */}
        {activeTab === "principles" && (
          <motion.div
            key="principles"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-6 text-left"
          >
            <div className="border-b border-slate-200 dark:border-neutral-800 pb-3">
              <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white uppercase tracking-tight">Ecosystem Core Laws</h3>
              <p className="text-slate-500 dark:text-zinc-400 text-xs font-sans">
                The strict guiding matrix governing how Nwoora Chigozie builds systems across AfriWaid Studio and the Konsmik framework.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CORE_PRINCIPLES.map((princ, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200 dark:border-neutral-900 bg-white dark:bg-zinc-950 flex flex-col justify-between hover:border-purple-500/20 transition h-52 group shadow-xs">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 px-2 py-0.5 border border-cyan-500/10 rounded font-bold">
                        LAW-{(idx + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <h5 className="font-display font-black text-sm text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                      {princ.title}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-sans leading-relaxed">
                      {princ.description}
                    </p>
                  </div>
                  <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider block font-bold pt-2 border-t border-slate-100 dark:border-neutral-900/40">
                    Rule verification active
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 5: VISION & LIVING LEGACY STATEMENT */}
        {activeTab === "vision" && (
          <motion.div
            key="vision"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-8 text-left"
          >
            {/* Mission & Vision blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              <div className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-neutral-900 p-6 md:p-8 rounded-3xl space-y-4 shadow-lg flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-500">
                    <Compass className="w-5 h-5 animate-spin-slow" />
                  </div>
                  <h4 className="text-xl font-display font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none pt-2">
                    Official Founder Mission
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-350 leading-relaxed leading-relaxed font-sans pb-4">
                    To build highly modular, structured digital systems, accessible learning frameworks, and localized commerce platforms that systematically help individuals and localized regional communities learn, grow, share resource values, collaborate across digital borders, and actively design an equitable future.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-55 bg-cyan-500/5 -mx-6 md:-mx-8 p-4 -mb-6 md:-mb-8 rounded-b-3xl">
                  <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider font-extrabold">STATUS: DEPLOYMENT ACTIVE</span>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-neutral-900 p-6 md:p-8 rounded-3xl space-y-4 shadow-lg flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-500">
                    <Award className="w-5 h-5 animate-pulse" />
                  </div>
                  <h4 className="text-xl font-display font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none pt-2">
                    Official Founder Vision
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-350 leading-relaxed leading-relaxed font-sans pb-4">
                    To establish a durable, centuries-lasting digital ecosystem where secure software, modular knowledge frameworks, creative art values, context-rich intelligence systems, and basic human welfare directives bind seamlessly together in order to elevate and sustain human latent potentials across generations.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-55 bg-purple-500/5 -mx-6 md:-mx-8 p-4 -mb-6 md:-mb-8 rounded-b-3xl">
                  <span className="text-[9px] font-mono text-purple-400 uppercase tracking-wider font-extrabold">STATUS: MASTER TARGET LOCK</span>
                </div>
              </div>
            </div>

            {/* THE LIVING LEGACY ARCHIVE BOARD */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-neutral-800 bg-neutral-950 p-6 md:p-12 text-white shadow-xl mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-neutral-950 to-cyan-950/20 z-0" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.1),transparent_60%)] z-0" />
              
              <div className="relative z-10 max-w-4xl space-y-6">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest text-slate-300">
                    Ecosystem Legacy Statement
                  </span>
                  <h4 className="text-2xl md:text-3xl font-display font-black tracking-tight leading-snug uppercase">
                    The Ultimate Creation Axiom
                  </h4>
                </div>

                <p className="text-slate-300 text-sm md:text-lg leading-relaxed font-sans italic border-l-2 border-cyan-400/50 pl-4 py-1">
                  “The goal is not simply to build applications. The goal is to build living systems that continue creating value long after their creator is gone. Every initiative within AfriWaid Studio and Konsmik exists to contribute to that long-term vision.”
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[9px] text-zinc-500 uppercase tracking-widest leading-none font-semibold">
                  <span>Nwogha Chigozie • Founder, AfriWaid Studio</span>
                  <span className="text-cyan-400 font-extrabold">This is the beginning of Konsmik Civilization.</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
