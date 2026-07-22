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
  company: string;
  responsibilities: string[];
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
  lessons?: string[];
  future?: string[];
  github?: string;
  demo?: string;
  related?: { slug: string; label: string; description: string };
};

export const projects: Project[] = [
  {
    slug: "rue-catering-pos",
    company: "ASA Technologies",
    responsibilities: [
      "Built the RUE Catering POS as a Flutter tablet application for cashier / order-taking workflows",
      "Integrated the POS with the restaurant backend over REST APIs for menu, pricing, orders and payments",
      "Implemented offline-first order capture with a local Hive queue that replays to the backend on reconnect",
      "Integrated Star and Sunmi thermal printers for cashier receipts and split-payment flows",
      "Owned release management across 3 outlets, 100+ transactions/day per branch",
    ],
    name: "RUE Catering POS",
    tagline: "Flutter tablet POS for restaurant cashiers — talks to the backend over REST and streams orders into the kitchen ecosystem.",
    role: "Solo Mobile Engineer",
    duration: "2023 — Present",
    platform: "Flutter · Tablet",
    status: "In Production",
    categories: ["Flutter", "Firebase", "Enterprise"],
    tech: ["Flutter", "Dart", "REST APIs", "Hive", "Star Printers", "Sunmi"],
    cover: "linear-gradient(135deg,#2563EB,#38BDF8)",
    overview:
      "RUE Catering POS is a Flutter tablet application used by cashiers to take orders, apply discounts, split payments and print receipts. The POS communicates with the restaurant backend over REST APIs; the backend then writes each confirmed order into Firebase Realtime Database, where the separate native Android KOT application picks it up in the kitchen. The POS runs across three outlets and 100+ transactions per branch per day.",
    problem:
      "Cashiers needed a fast, offline-tolerant ordering terminal that could keep taking orders during Wi-Fi drops, reliably print thermal receipts, and hand each order off to the kitchen without manual coordination.",
    solution:
      "A Flutter POS that talks to the backend over REST for menu, pricing, orders and payments. Confirmed orders are pushed to the backend, which inserts them into Firebase Realtime Database for the KOT app to consume. A local Hive write-ahead queue keeps the POS working offline and replays orders once connectivity returns; status updates from KOT flow back through Firebase and are reflected in the POS in real time.",
    features: [
      "Cashier order entry, discounts, split payments and refunds",
      "REST API integration with the restaurant backend for menu, pricing and orders",
      "Offline-first order capture with automatic replay to the backend on reconnect",
      "Thermal receipt printing with Star & Sunmi hardware",
      "Live order status updates streamed back from the kitchen via Firebase",
      "Multi-outlet configuration and per-branch reporting",
    ],
    architecture: [
      "Flutter tablet application for the cashier workflow",
      "REST API client as the primary boundary with the backend",
      "Backend inserts each confirmed order into Firebase Realtime Database for the KOT app",
      "Offline-first Hive queue that replays pending orders on reconnect",
      "Firebase Realtime listeners for order status updates coming back from the kitchen",
      "Thermal printer abstraction over Star and Sunmi hardware",
    ],
    challenges: [
      "Guaranteeing exactly-once order delivery from an intermittently-connected POS to the backend",
      "Keeping cashier UX instant while the REST + Firebase round-trip completes in the background",
      "Zero-downtime menu and price updates without disrupting orders already in the kitchen",
      "Defensive hardware integration for thermal printers across vendors and firmware revisions",
    ],
    lessons: [
      "Treating the local Hive queue as the source of truth made intermittent connectivity a non-event",
      "A clean REST boundary between POS and backend kept the kitchen system free to evolve independently",
    ],
    related: {
      slug: "rue-kot-android",
      label: "RUE Kitchen Order Ticket (KOT)",
      description:
        "The native Android kitchen companion — listens to Firebase for orders sent by this POS, and drives the Kitchen, Head Chef and Dispatch workflows.",
    },
  },
  {
    slug: "rue-kot-android",
    company: "ASA Technologies",
    responsibilities: [
      "Built the native Android Kitchen Order Ticket (KOT) app in Kotlin",
      "Implemented Firebase Realtime listeners that stream new orders into the kitchen as soon as the backend inserts them",
      "Delivered role-based modules — Kitchen Login, Head Chef Login and Dispatch Login — on a single app",
      "Integrated REST APIs for stock and inventory synchronization with the restaurant backend",
      "Wired conditional automated receipt printing to 5+ kitchen displays / printers",
    ],
    name: "RUE Kitchen Order Ticket (KOT)",
    tagline: "Native Android kitchen companion — Firebase-driven order streaming with role-based Kitchen, Head Chef and Dispatch workflows.",
    role: "Android Engineer",
    duration: "2023 — Present",
    platform: "Android · Kitchen Display",
    status: "In Production",
    categories: ["Android", "Kotlin", "Firebase", "Enterprise"],
    tech: ["Kotlin", "Android SDK", "Firebase Realtime Database", "REST APIs", "Thermal Printers"],
    cover: "linear-gradient(135deg,#F97316,#EF4444)",
    overview:
      "RUE KOT is a native Android application that runs on kitchen displays and dispatch stations. It listens to Firebase Realtime Database for orders inserted by the backend (which receives them from the RUE Catering POS) and routes each order through role-based modules — Kitchen, Head Chef and Dispatch. It also synchronizes stock and inventory with the backend over REST APIs, and pushes order status updates back into Firebase so the POS reflects the kitchen state live.",
    problem:
      "The kitchen needed a dedicated Android system that could receive POS orders in real time, split responsibilities cleanly between kitchen staff, the head chef and dispatch, and keep stock in sync with the backend — without the POS having to know anything about kitchen workflows.",
    solution:
      "A native Android app with role-based logins (Kitchen, Head Chef, Dispatch) that subscribes to Firebase Realtime Database for incoming orders. Each role sees only the workflow it owns: Kitchen prepares tickets, Head Chef supervises and approves, Dispatch marks orders ready for pickup or delivery. Stock and inventory are reconciled with the backend over REST, and every status transition is written back to Firebase so the POS updates in real time.",
    features: [
      "Kitchen Login — live KOT tickets with new / in-progress / ready states",
      "Head Chef Login — supervision, approvals and station-level oversight",
      "Dispatch Login — ready-for-dispatch queue and hand-off status updates",
      "Real-time Firebase order stream from the backend (fed by the POS)",
      "API-based stock and inventory synchronization",
      "Conditional automated receipt printing routed to 5+ kitchen displays",
      "Order status updates synchronized back through Firebase to the POS",
    ],
    architecture: [
      "Native Android (Kotlin) application designed for kitchen displays",
      "Firebase Realtime Database listeners as the primary inbound channel for new orders",
      "REST API integration with the backend for stock and inventory synchronization",
      "Role-based authentication routing users to Kitchen, Head Chef or Dispatch modules",
      "Order status state machine (new → in progress → ready → dispatched) written back to Firebase",
      "Thermal printer abstraction for conditional per-station printing",
    ],
    challenges: [
      "Keeping the Firebase listener graph efficient with many concurrent kitchen displays",
      "Coordinating role-based views on the same order without conflicting writes",
      "Reconciling API-driven stock levels with high-frequency kitchen activity",
      "Ensuring status updates propagate back to the POS reliably even under load",
    ],
    lessons: [
      "Splitting POS (REST-first) and KOT (Firebase-first) into two focused apps kept each side simple",
      "Role-based modules on a single Android binary reduced deployment overhead in the kitchen",
    ],
    related: {
      slug: "rue-catering-pos",
      label: "RUE Catering POS",
      description:
        "The Flutter cashier terminal — captures orders and sends them to the backend, which then streams into this KOT app via Firebase.",
    },
  },
  {
    slug: "alhelli-warehouse-pda",
    company: "ASA Technologies",
    responsibilities: [
      "Built Kotlin PDA app with Room-backed offline goods-receipt flows",
      "Implemented resilient SAP sync layer with batched retries",
      "Handled hardware barcode triggers across rugged device generations",
    ],
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
    company: "ASA Technologies",
    responsibilities: [
      "Led Flutter Clean Architecture with per-feature modularization",
      "Implemented biometric-gated JWT (AES-GCM) secure token vault",
      "Delivered EN/AR RTL UI with region-aware API routing (KSA/Bahrain)",
    ],
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
    company: "Personal Project",
    responsibilities: [
      "Wrote custom video engine with health-checked CDN failover",
      "Built WorkManager-backed background download queue with pause/resume",
      "Integrated TMDB workflow automation for content ingestion",
    ],
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
    company: "Personal Project",
    responsibilities: [
      "Modeled immutable snapshot documents for audit-safe invoicing",
      "Wrapped Firebase transactions for correct inventory writes",
      "Shipped a reusable PDF engine for A4 + thermal formats",
    ],
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
    company: "Freelance Client",
    responsibilities: [
      "Delivered end-to-end Android app in a fixed 8-week engagement",
      "Integrated Google Maps discovery + multi-method payments",
      "Wired push notifications for booking and charging session events",
    ],
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

// Additional resume projects (from Interlink & CRDR tenures)
projects.push(
  {
    slug: "asa-attendance-app",
    name: "ASA Attendance & Tasks",
    company: "ASA Technologies",
    tagline: "End-to-end attendance and task management with real-time dashboards.",
    role: "Mobile Engineer",
    duration: "2024",
    platform: "Android · Flutter",
    status: "In Production",
    categories: ["Flutter", "Firebase", "Enterprise"],
    tech: ["Flutter", "Firebase", "REST", "Charts"],
    cover: "linear-gradient(135deg,#2563EB,#10B981)",
    overview:
      "An internal workforce app for attendance, task assignment, and manager dashboards, wired to Firebase for real-time reporting.",
    problem: "Managers needed live visibility into team status without spreadsheets.",
    solution: "Flutter client + Firestore listeners drive a reporting layer that updates as events arrive.",
    responsibilities: [
      "Built attendance capture and task modules end-to-end",
      "Wired real-time manager dashboards on Firestore",
      "Owned Play Store release process and versioning",
    ],
    features: ["Live attendance", "Task assignment", "Reporting dashboard", "Role-based access"],
    architecture: ["Firestore realtime data model", "Repository-per-feature Flutter modules"],
    challenges: ["Keeping realtime cost predictable at scale"],
    lessons: ["Denormalize aggressively for realtime dashboards"],
    future: ["Payroll integration", "Geo-fenced check-in"],
  },
  {
    slug: "forlim-popoli-ecommerce",
    name: "Forlim Popoli E-Commerce",
    company: "Interlink Consultant",
    tagline: "Full order lifecycle with CCAvenue split payments.",
    role: "Android Developer",
    duration: "2022",
    platform: "Android",
    status: "In Production",
    categories: ["Android", "Java", "Enterprise"],
    tech: ["Android", "Java", "CCAvenue", "REST"],
    cover: "linear-gradient(135deg,#EF4444,#F59E0B)",
    overview: "An Android e-commerce app with barcode article handling and split Pay Now / Pay Later flows.",
    problem: "The client needed flexible payment handling alongside barcode-based stock lookups.",
    solution: "CCAvenue split payment integration paired with a barcode-first catalog UX.",
    responsibilities: [
      "Delivered end-to-end order lifecycle screens",
      "Integrated CCAvenue split payment flows",
      "Handled barcode-driven article lookups",
    ],
    features: ["Cart & checkout", "Split payments", "Barcode article lookup", "Order history"],
    architecture: ["MVVM Android with Retrofit"],
    challenges: ["Reconciling split payment states across gateways"],
    lessons: ["Payment UIs live and die by clear failure states"],
    future: ["Loyalty program"],
  },
  {
    slug: "regal-fashion-sales",
    name: "Regal Fashion Field Sales",
    company: "Interlink Consultant",
    tagline: "Multi-branch stock unification for field sales teams.",
    role: "Android Developer",
    duration: "2022",
    platform: "Android",
    status: "In Production",
    categories: ["Android", "Java", "Enterprise"],
    tech: ["Android", "Java", "REST", "PDF"],
    cover: "linear-gradient(135deg,#6D28D9,#EF4444)",
    overview: "Field sales app unifying multi-branch stock with real-time inventory checks and automated client reports.",
    problem: "Reps had no reliable way to check stock across branches while on-site with clients.",
    solution: "Central inventory API surfaced through a lightweight Android UI with PDF reporting.",
    responsibilities: [
      "Built multi-branch stock lookup UI",
      "Automated PDF client reports",
      "Wired auth + role-scoped access",
    ],
    features: ["Cross-branch stock", "PDF reports", "Role-based access"],
    architecture: ["MVVM Android with cached inventory reads"],
    challenges: ["Keeping stock views fresh across flaky sales-floor networks"],
    lessons: ["Cache aggressively, invalidate loudly"],
    future: ["Offline mode"],
  },
  {
    slug: "connectexpress-tracking",
    name: "ConnectExpress Workforce Tracking",
    company: "Interlink Consultant",
    tagline: "Maps + geolocation for field-executive attendance at scale.",
    role: "Android Developer",
    duration: "2022",
    platform: "Android",
    status: "In Production",
    categories: ["Android", "Java", "Enterprise"],
    tech: ["Android", "Google Maps", "Geolocation", "REST"],
    cover: "linear-gradient(135deg,#10B981,#38BDF8)",
    overview: "Google Maps + geolocation app for field-executive attendance and location-stamped feedback capture.",
    problem: "Ops needed verifiable attendance and site-visit records from field teams.",
    solution: "Location-stamped attendance and feedback flows backed by Google Maps SDK.",
    responsibilities: [
      "Implemented Maps SDK integration and geofencing",
      "Built location-stamped feedback capture",
      "Optimized battery use for long field shifts",
    ],
    features: ["Geo-stamped attendance", "Map-based tracking", "Feedback capture"],
    architecture: ["Foreground service + WorkManager coordination"],
    challenges: ["Battery-safe location updates in the background"],
    lessons: ["Background location on Android is a policy problem, not a code problem"],
    future: ["Route optimization"],
  },
  {
    slug: "enterprise-suite",
    name: "Enterprise HRMS / PMS / Leave Suite",
    company: "CRDR Infotech",
    tagline: "Scalable Android apps across HR, project and leave management.",
    role: "Android Developer",
    duration: "2018 — 2019",
    platform: "Android",
    status: "In Production",
    categories: ["Android", "Java", "Enterprise"],
    tech: ["Android", "Java", "REST", "MySQL"],
    cover: "linear-gradient(135deg,#2563EB,#6D28D9)",
    overview: "Three enterprise Android products — HRMS, PMS, and Leave Management — delivered inside a 3-person agile team.",
    problem: "Client operations were spread across paper and desktop tools with no mobile access.",
    solution: "A shared Android foundation reused across three domain apps with per-tenant configuration.",
    responsibilities: [
      "Owned the mobile lifecycle for two major client deployments",
      "Built REST integrations against MySQL-backed services",
      "Introduced shared UI patterns reused across the three apps",
    ],
    features: ["HR self-service", "Project tracking", "Leave workflows", "Role-based access"],
    architecture: ["Modular Android app with shared network + auth layer"],
    challenges: ["Balancing per-tenant customization against a shared codebase"],
    lessons: ["Ship the shared foundation first, customize second"],
    future: ["Design refresh"],
  },
);

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Native" },
];

export const techStack = [
  "Flutter", "Dart", "Kotlin", "Java", "Android SDK", "Jetpack",
  "Firebase", "Firestore", "Room DB", "Hive", "SQLite",
  "REST", "Retrofit", "GraphQL basics",
  "Google Maps", "SAP Integration", "CCAvenue",
  "MVVM", "Clean Architecture", "Offline-First",
  "Git", "GitHub", "Android Studio", "Xcode basics",
  "Star Printers", "Sunmi Devices", "Barcode SDKs",
];

export const testimonials = [
  {
    name: "Placeholder Reviewer",
    role: "Engineering Manager",
    company: "Client — testimonial pending",
    quote:
      "Piyush owned the mobile stack end-to-end and consistently delivered releases that felt polished on day one. Real client quote coming soon.",
  },
  {
    name: "Placeholder Reviewer",
    role: "Product Lead",
    company: "Client — testimonial pending",
    quote:
      "Rare mix of native Android depth and Flutter fluency — turned around an offline-first POS in a fraction of the time we budgeted.",
  },
  {
    name: "Placeholder Reviewer",
    role: "Founder",
    company: "Freelance client — testimonial pending",
    quote:
      "Clear communication, tight scope, no surprises. Shipped exactly what we agreed and stayed available through launch.",
  },
];

export const faqs = [
  {
    q: "Are you available for freelance work?",
    a: "Yes — I take on short to medium Flutter or Android engagements, typically 4–12 weeks. Reach out via the contact form with a brief and rough timeline.",
  },
  {
    q: "Do you also work full-time roles?",
    a: "I'm open to senior mobile engineering roles — remote or based out of Navi Mumbai / Mumbai. I'm most useful on offline-first, POS, enterprise, or Firebase-heavy products.",
  },
  {
    q: "Which stack should I hire you for?",
    a: "Both native Android (Kotlin/Java) and Flutter are production-grade for me. If reliability, offline sync, or hardware integrations matter, I default to native; for shared codebases across iOS + Android, Flutter.",
  },
  {
    q: "Can you take a project from wireframe to Play Store?",
    a: "Yes — I've shipped several apps solo, including architecture, implementation, releases, and post-launch reliability. I can also plug into an existing team as a senior IC.",
  },
  {
    q: "What's your typical response time?",
    a: "Within 24 hours on weekdays. Contact form submissions land directly in my inbox.",
  },
];
