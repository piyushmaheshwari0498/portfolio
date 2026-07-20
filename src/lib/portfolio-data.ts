import {
  Smartphone,
  Layers,
  Database,
  Cloud,
  GitBranch,
  Wrench,
  Code2,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Piyush Maheshwari",
  title: "Mobile Application Developer",
  subtitle: "Android · Flutter · Firebase",
  location: "Navi Mumbai, Maharashtra, India",
  email: "maheshwaripiyush99.pm40@gmail.com",
  phone: "+91 70215 07179",
  yearsExperience: 6,
  github: "https://github.com/piyushmaheshwari0498",
  linkedin: "https://www.linkedin.com/in/piyush-maheshwari-093bb1157",
  resume: "/Piyush_Maheshwari_Resume.pdf",
  status: "Open to freelance & full-time opportunities",
  summary:
    "Results-oriented Mobile Application Developer with 6+ years designing and deploying scalable Android (Java/Kotlin) and Flutter applications. Specialized in offline-first architecture, Firebase real-time systems, and performance-critical integrations — from POS and OTT platforms to SAP-integrated enterprise mobility.",
  bio: [
    "I build production-grade mobile products end-to-end. Over the last six years I've shipped POS systems that process 100+ transactions per branch per day, warehouse PDA apps synced with SAP, OTT streaming platforms with custom video engines, and multi-region super apps supporting dual-language UI and biometric auth.",
    "I care deeply about the details — offline-first sync, transactional integrity, hardware integrations with thermal printers and barcode scanners, and interfaces that feel instant. My work bridges native Android and Flutter, and I've often been the solo engineer taking a product from wireframe to store.",
  ],
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  description: string;
  items: { name: string; level: "Expert" | "Advanced" | "Proficient" }[];
};

export const skills: SkillCategory[] = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    accent: "from-[oklch(0.58_0.22_265)] to-[oklch(0.78_0.14_232)]",
    description: "Native Android & cross-platform Flutter, shipped to production.",
    items: [
      { name: "Flutter · Dart", level: "Expert" },
      { name: "Android · Kotlin", level: "Expert" },
      { name: "Android · Java", level: "Expert" },
      { name: "Android SDK", level: "Expert" },
    ],
  },
  {
    title: "Architecture",
    icon: Layers,
    accent: "from-[oklch(0.78_0.14_232)] to-[oklch(0.70_0.16_160)]",
    description: "Patterns that keep large mobile codebases maintainable.",
    items: [
      { name: "MVVM", level: "Expert" },
      { name: "Clean Architecture", level: "Advanced" },
      { name: "Offline-First", level: "Expert" },
      { name: "Modular Design", level: "Advanced" },
    ],
  },
  {
    title: "Data & Storage",
    icon: Database,
    accent: "from-[oklch(0.70_0.16_160)] to-[oklch(0.78_0.14_232)]",
    description: "Local persistence and relational back-ends.",
    items: [
      { name: "Room DB", level: "Expert" },
      { name: "SQLite", level: "Expert" },
      { name: "Hive", level: "Advanced" },
      { name: "MySQL · Oracle", level: "Proficient" },
    ],
  },
  {
    title: "Cloud & Backend",
    icon: Cloud,
    accent: "from-[oklch(0.58_0.22_265)] to-[oklch(0.70_0.16_160)]",
    description: "Realtime systems and cloud-connected apps.",
    items: [
      { name: "Firebase Firestore", level: "Expert" },
      { name: "Firebase Messaging", level: "Advanced" },
      { name: "Crashlytics", level: "Advanced" },
      { name: "Google Maps SDK", level: "Advanced" },
    ],
  },
  {
    title: "APIs & Integrations",
    icon: Zap,
    accent: "from-[oklch(0.78_0.14_232)] to-[oklch(0.58_0.22_265)]",
    description: "Third-party systems, payments, and hardware.",
    items: [
      { name: "REST · Retrofit", level: "Expert" },
      { name: "SAP Integration", level: "Advanced" },
      { name: "CCAvenue Payments", level: "Advanced" },
      { name: "POS Hardware (Sunmi, Star)", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Delivery",
    icon: Wrench,
    accent: "from-[oklch(0.70_0.16_160)] to-[oklch(0.58_0.22_265)]",
    description: "The everyday toolchain shipping releases.",
    items: [
      { name: "Git · GitHub", level: "Expert" },
      { name: "Android Studio", level: "Expert" },
      { name: "Software Testing", level: "Advanced" },
      { name: "CI Basics", level: "Proficient" },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    accent: "from-[oklch(0.58_0.22_265)] to-[oklch(0.78_0.14_232)]",
    description: "Core languages I write daily.",
    items: [
      { name: "Kotlin", level: "Expert" },
      { name: "Dart", level: "Expert" },
      { name: "Java", level: "Expert" },
      { name: "C / C++", level: "Proficient" },
    ],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    accent: "from-[oklch(0.78_0.14_232)] to-[oklch(0.70_0.16_160)]",
    description: "Collaborative workflows and release hygiene.",
    items: [
      { name: "Git Flow", level: "Expert" },
      { name: "PR Reviews", level: "Advanced" },
      { name: "Branching Strategy", level: "Advanced" },
      { name: "Semantic Releases", level: "Proficient" },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "ASA Technologies",
    role: "Mobile Application Developer (Android & Flutter)",
    period: "Dec 2022 — Present",
    bullets: [
      "Architected and deployed the RUE Catering POS System (Flutter) with offline-first architecture and real-time backend sync — zero downtime across 3 outlets, 100+ daily transactions per branch.",
      "Built a native Android Kitchen Order Ticket (KOT) system using Firebase live streaming, with conditional automated receipt printing routed to 5+ kitchen displays.",
      "Engineered the Alhelli Warehouse PDA app — offline-first Android with Room DB and SAP integration for barcode-driven stock intake, goods receipt, and verification.",
      "Delivered the Inwani Real Estate Super App (Flutter) with Clean Architecture, dual-language UI (EN/AR), multi-region API routing (KSA/Bahrain), and JWT (AES-GCM) biometric auth.",
      "Led the ASA App — an end-to-end attendance and task-management suite with real-time reporting dashboards.",
    ],
    tech: ["Flutter", "Kotlin", "Firebase", "Room DB", "SAP", "REST"],
  },
  {
    company: "Interlink Consultant",
    role: "Android Developer",
    period: "Sep 2021 — Nov 2022",
    bullets: [
      "Developed the Forlim Popoli E-Commerce App with end-to-end order lifecycle, barcode article handling, and CCAvenue split payments (Pay Now / Pay Later).",
      "Built the Regal Fashion Field Sales App to unify multi-branch stock, enabling real-time inventory checks and automated client reports.",
      "Designed ConnectExpress Workforce Tracking — Google Maps + geolocation for field-executive attendance and location-stamped feedback capture at scale.",
      "Shipped enterprise modules across SeaConnector, Kay Jewels, KMS Billing, and C-RISH Pharma.",
    ],
    tech: ["Android", "Java", "Kotlin", "Google Maps", "CCAvenue", "REST"],
  },
  {
    company: "CRDR Infotech Pvt Ltd",
    role: "Android Developer",
    period: "Mar 2018 — Sep 2019",
    bullets: [
      "Delivered scalable enterprise applications — HRMS, PMS, and Leave Management — inside a 3-person agile team.",
      "Owned the mobile lifecycle for two major client deployments with robust REST API integrations.",
    ],
    tech: ["Android", "Java", "REST", "MySQL"],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  duration: string;
  platform: string;
  status: "Live" | "In Production" | "Freelance" | "Personal";
  categories: string[];
  tech: string[];
  cover: string; // gradient
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  challenges: string[];
  lessons: string[];
  future: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "rue-catering-pos",
    name: "RUE Catering POS",
    tagline: "Offline-first Flutter POS running 3 outlets, 100+ tx/day/branch.",
    role: "Solo Mobile Engineer",
    duration: "2023 — Present",
    platform: "Android · Tablet",
    status: "In Production",
    categories: ["Flutter", "Firebase", "Enterprise"],
    tech: ["Flutter", "Dart", "Firebase Firestore", "Hive", "Star Printers"],
    cover: "linear-gradient(135deg,#2563EB,#38BDF8)",
    overview:
      "A production POS suite deployed across three catering outlets. Built with an offline-first core so cashiers keep taking orders even when the network drops, then reconcile transactions the moment connectivity returns.",
    problem:
      "The outlets needed a single POS that survives flaky Wi-Fi, prints thermal receipts reliably, and gives the head office real-time visibility into sales.",
    solution:
      "A Flutter tablet app backed by a local Hive queue and a Firestore sync engine. Every transaction is written locally first, then replayed against the cloud with conflict resolution and retry.",
    features: [
      "Offline-first order capture with automatic sync",
      "Real-time menu, price, and modifier updates from head office",
      "Thermal receipt printing with Star & Sunmi hardware",
      "Split payments, discounts, and refund workflows",
      "Per-outlet analytics dashboard for management",
    ],
    architecture: [
      "MVVM + Repository pattern with a sync-aware repository layer",
      "Local write-ahead queue in Hive, replayed to Firestore",
      "Thermal printer abstraction supporting multiple vendors",
    ],
    challenges: [
      "Guaranteeing exactly-once transaction sync across intermittent connectivity",
      "Zero-downtime menu updates without disrupting active orders",
    ],
    lessons: [
      "Offline-first is a UX decision as much as an architectural one",
      "Hardware integrations demand defensive coding and long timeouts",
    ],
    future: ["Kitchen display integration", "Loyalty program", "iPad support"],
  },
  {
    slug: "alhelli-warehouse-pda",
    name: "Alhelli Warehouse PDA",
    tagline: "SAP-integrated Android app for high-volume warehouse scanning.",
    role: "Android Engineer",
    duration: "2023",
    platform: "Android · Rugged PDA",
    status: "In Production",
    categories: ["Android", "Kotlin", "Enterprise"],
    tech: ["Kotlin", "Room DB", "SAP", "REST", "Barcode SDK"],
    cover: "linear-gradient(135deg,#10B981,#38BDF8)",
    overview:
      "An offline-first Android app running on rugged warehouse PDAs. Handles goods receipt, stock intake, and verification with barcode scanning — even inside cold storage where connectivity is unreliable.",
    problem:
      "Warehouse operators needed to scan and reconcile stock against SAP without depending on live network access.",
    solution:
      "A Kotlin app with Room-backed local state, background sync workers, and a resilient SAP integration layer that batches uploads.",
    features: [
      "High-volume barcode scanning with hardware trigger support",
      "Offline goods receipt & verification workflows",
      "SAP integration for stock reconciliation",
      "Per-user audit trail",
    ],
    architecture: [
      "Clean Architecture with domain-driven use cases",
      "Room DB as the source of truth; SAP is a synced projection",
      "WorkManager for reliable background uploads",
    ],
    challenges: [
      "Mapping SAP's transactional model onto an offline mobile client",
      "Handling barcode hardware variations across device generations",
    ],
    lessons: [
      "Treat the local database as the source of truth for field apps",
      "Ship a diagnostic screen with every enterprise release",
    ],
    future: ["RFID support", "Voice-picking workflows"],
  },
  {
    slug: "inwani-super-app",
    name: "Inwani Real Estate Super App",
    tagline: "Multi-region Flutter super app with biometric JWT auth.",
    role: "Lead Flutter Engineer",
    duration: "2024",
    platform: "Android · iOS",
    status: "In Production",
    categories: ["Flutter", "Enterprise"],
    tech: ["Flutter", "Clean Architecture", "JWT (AES-GCM)", "REST"],
    cover: "linear-gradient(135deg,#38BDF8,#2563EB)",
    overview:
      "A modular Flutter super app for real estate discovery, listings, and transactions across Saudi Arabia and Bahrain. Fully bilingual (English/Arabic) with dynamic API routing per region.",
    problem:
      "One app had to serve two regulatory regions, two languages, and multiple product surfaces without forking the codebase.",
    solution:
      "A modular Clean Architecture with per-feature packages, a region-aware API gateway, and full RTL support for Arabic.",
    features: [
      "Bilingual EN/AR UI with true RTL layout",
      "Dynamic region routing (KSA / Bahrain)",
      "Biometric-gated JWT auth with AES-GCM encryption",
      "Modular feature-package structure",
    ],
    architecture: [
      "Feature-package modularization",
      "Region-aware repository layer",
      "Secure token vault with biometric unlock",
    ],
    challenges: [
      "Keeping visual parity between LTR and RTL flows",
      "Coordinating regional API contract differences behind one UI",
    ],
    lessons: [
      "Design tokens save you when supporting RTL",
      "Modularization pays back the moment a second region ships",
    ],
    future: ["Web companion", "Push-driven property alerts"],
  },
  {
    slug: "nuvix-ott",
    name: "NUVIX OTT Streaming",
    tagline: "Flutter streaming platform with custom video engine.",
    role: "Solo Developer",
    duration: "2024",
    platform: "Android",
    status: "Personal",
    categories: ["Flutter", "Personal"],
    tech: ["Flutter", "Custom Player", "TMDB API", "Background Downloads"],
    cover: "linear-gradient(135deg,#6D28D9,#2563EB)",
    overview:
      "A Flutter-based OTT platform with a custom video engine, smart server failover, and a resilient background download manager supporting pause/resume and local storage optimization.",
    problem:
      "Off-the-shelf players didn't handle multi-CDN failover or robust background downloads well enough for a real streaming experience.",
    solution:
      "A custom player wrapper with health-checked source switching, plus a WorkManager-backed download engine with a fault-tolerant queue.",
    features: [
      "Custom video engine with CDN failover",
      "Background downloads with pause/resume",
      "TMDB-powered content workflow automation",
      "Local storage optimization",
    ],
    architecture: [
      "Player service isolated behind a source-agnostic interface",
      "Download queue persisted locally, resumed on boot",
    ],
    challenges: [
      "Detecting stalled streams fast enough to failover invisibly",
      "Balancing storage use against user download history",
    ],
    lessons: ["Streaming is a network engineering problem, not a UI one"],
    future: ["Chromecast", "Watch-together"],
  },
  {
    slug: "smartbill-pos",
    name: "SmartBill POS & Invoicing",
    tagline: "High-integrity Flutter POS with immutable financial records.",
    role: "Solo Developer",
    duration: "2024",
    platform: "Android",
    status: "Personal",
    categories: ["Flutter", "Firebase", "Personal"],
    tech: ["Flutter", "Firebase Transactions", "PDF Engine"],
    cover: "linear-gradient(135deg,#F59E0B,#EF4444)",
    overview:
      "A POS and invoicing system built with Flutter + Firebase, featuring transactional inventory, an immutable snapshot document model for audit integrity, and dynamic PDF generation for both A4 invoices and thermal shipping labels.",
    problem:
      "Small businesses needed a POS that could survive audit scrutiny — no editable historical records, no drift between inventory and receipts.",
    solution:
      "Firebase transactions guarantee inventory correctness; every issued document is written as an immutable snapshot; PDFs are re-generated deterministically from those snapshots.",
    features: [
      "Real-time inventory with transactional writes",
      "Immutable document snapshots for audit trail",
      "A4 invoice + thermal label PDF engine",
    ],
    architecture: [
      "Snapshot-per-issue document store",
      "PDF templating engine with reusable layout primitives",
    ],
    challenges: ["Designing an audit model without adding UI friction"],
    lessons: ["Immutability is the cheapest correctness guarantee you can buy"],
    future: ["Multi-currency", "GST reporting"],
  },
  {
    slug: "servicekeeda-ev",
    name: "ServiceKeeda EV Charging",
    tagline: "Freelance Android app for EV station discovery and booking.",
    role: "Freelance Android Developer",
    duration: "2023",
    platform: "Android",
    status: "Freelance",
    categories: ["Android", "Java", "Freelance"],
    tech: ["Android", "Google Maps", "Payment Gateway", "Notifications"],
    cover: "linear-gradient(135deg,#10B981,#2563EB)",
    overview:
      "A full-featured Android app for discovering, booking, and paying for EV charging sessions. Includes spatial filtering, a multi-method payment flow, and session analytics.",
    problem: "EV drivers needed a single app for discovery, booking, and payment.",
    solution:
      "Google Maps for spatial filtering, a wallet + credit + net-banking payment flow, and a booking-history + notification layer.",
    features: [
      "Map-based station discovery with filters",
      "Wallet, credit, and net-banking payments",
      "Charging analytics & booking history",
      "Push notifications for session events",
    ],
    architecture: [
      "MVVM Android with Retrofit-based service layer",
      "Payment abstraction supporting multiple methods",
    ],
    challenges: ["Reliable payment reconciliation across gateways"],
    lessons: ["Freelance projects reward tight scope and clear acceptance criteria"],
    future: ["Live station occupancy", "Route planning with charging stops"],
  },
];

export const achievements = [
  { label: "Years of experience", value: 6, suffix: "+" },
  { label: "Production apps shipped", value: 15, suffix: "+" },
  { label: "Enterprise clients served", value: 10, suffix: "+" },
  { label: "Daily POS transactions handled", value: 300, suffix: "+" },
];

export const certifications = [
  {
    title: "Comprehensive Technical Training",
    issuer: "Seed Infotech",
    period: "Jul 2014 — Apr 2017",
    detail: "C, C++, Java, Android, Oracle DBA, Software Testing.",
  },
  {
    title: "Certificate Course in Basic Programming (CCBP)",
    issuer: "Academy of Information Technology (YCP)",
    period: "Apr 2014 — Jun 2014",
    detail: "Foundational programming and problem-solving.",
  },
];

export const education = [
  {
    degree: "Master in Computer Science",
    school: "Bir Tikendrajit University",
    period: "Pursuing",
  },
  {
    degree: "B.Tech, Computer Science Engineering",
    school: "Kalinga University",
    period: "Jul 2018 — Jun 2021",
  },
  {
    degree: "Diploma in Computer Science",
    school: "Kalinga University",
    period: "Jul 2015 — Jun 2018",
  },
];

export const projectFilters = [
  "All",
  "Flutter",
  "Android",
  "Kotlin",
  "Java",
  "Firebase",
  "Enterprise",
  "Freelance",
  "Personal",
];
