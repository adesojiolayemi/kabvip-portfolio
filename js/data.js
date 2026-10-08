/* Centralized site configuration & project data */

const siteConfig = {
  name: "Emmanuel Olayemi ADESOJI",
  professionalTitle: "Full-Stack Developer · Product Builder · Product Engineer",
  phone: "+234 806 731 6379",
  email: "adesojiolayemi@gmail.com",
  location: "Nigeria",
  linkedin: "https://www.linkedin.com/in/emmanuel-olayemi-adesoji-799b5385/",
  github: "https://github.com/adesojiolayemi",
  brand: "KABVIP™",
  brandPhilosophy: "Ideas. Conversations. Perspective."
};

const capabilities = [
  {
    title: "Product Development",
    items: ["Product ideation", "MVP development", "Product architecture", "Feature planning", "User-flow thinking", "Product iteration"]
  },
  {
    title: "Software Engineering",
    items: ["Frontend development", "Full-stack development", "Responsive web applications", "Progressive Web Apps", "API integration", "Authentication", "Database integration", "Deployment"]
  },
  {
    title: "AI & Intelligent Systems",
    items: ["AI-assisted products", "AI search", "Conversational systems", "Intelligent workflows", "AI-powered user experiences", "AI-assisted creative workflows"]
  },
  {
    title: "Business Technology",
    items: ["Customer enquiry systems", "Workflow automation", "Operational systems", "Business process digitization", "Internal tools"]
  },
  {
    title: "Creative Technology",
    items: ["Game development", "Interactive experiences", "Digital storytelling", "Experimental products", "AI-assisted media production"]
  }
];

const projects = [
  {
    id: "decodra",
    title: "DECODRA™",
    category: "Barcode & QR Intelligence · PWA · Product Development",
    tagline: "Scan. Decode. Discover.",
    description: "A barcode and QR scanner PWA that turns a phone camera into a product-discovery tool.",
    status: "MVP / LIVE",
    statusClass: "status-mvp",
    liveUrl: "https://decodra.netlify.app/",
    githubUrl: null,
    technologies: ["React", "TypeScript", "Vite", "PWA", "BarcodeDetector", "Browser Camera APIs", "Service Worker", "OpenLibrary", "Netlify"],
    problem: "People encounter barcodes and QR codes constantly, but decoding them rarely leads to useful product context or discovery.",
    solution: "A mobile-first Progressive Web App that uses the device camera and modern browser APIs to scan multiple barcode formats, then surfaces relevant product intelligence.",
    outcome: "A deployed, installable PWA that turns a phone camera into a practical product-discovery tool.",
    features: ["Barcode & QR scanning", "Multiple format support", "Camera integration", "PWA installation", "Product lookup via public APIs", "Mobile-first design"],
    next: "Planned, not yet shipped: more data sources, deeper discovery and AI-assisted features.",
    featured: true
  },
  {
    id: "destiny-farm",
    title: "Destiny Pig Farm Manager",
    category: "Agricultural Technology · PWA",
    tagline: "Turning agricultural operations into structured digital workflows.",
    description: "A digital farm-management platform designed to help pig farmers manage livestock, feeding and farm operations.",
    status: "MVP / LIVE",
    statusClass: "status-mvp",
    liveUrl: "https://destinyfarm.netlify.app/",
    githubUrl: null,
    technologies: ["React", "PWA", "Authentication", "AI Search", "Voice Input", "Multilingual", "Netlify"],
    problem: "Farm operations often rely on paper, memory or fragmented tools that do not scale with real agricultural workflows.",
    solution: "A mobile-first digital farm management system covering pig management, feed calculation, invoices, glossary, AI-assisted search and voice input.",
    outcome: "A deployed, working agricultural technology platform that digitizes core farm operational tasks.",
    features: ["Pig management", "Feed calculation", "Invoices", "AI-assisted search", "Glossary", "Multilingual support", "AI voice input", "Authentication", "PWA installation"],
    next: "In development: expanded livestock modules. Roadmap items are not presented as live features.",
    featured: true
  },
  {
    id: "jtad-prints",

    title: "JTAD Prints AI",
    category: "AI · Business Technology · Automation",
    tagline: "Reducing the distance between customer enquiry and business response.",
    description: "A business workflow and customer enquiry system with conversational interface, admin management and email notifications.",
    status: "MVP / LIVE",
    statusClass: "status-mvp",
    liveUrl: "https://jtadprintsai.netlify.app/",
    githubUrl: null,
    technologies: ["React", "Supabase", "Edge Functions", "Resend", "Authentication", "Netlify"],
    problem: "Customer enquiries often get lost between channels, delaying response and weakening business follow-up.",
    solution: "A conversational enquiry system that captures customer intent, stores records, supports admin management and triggers email notifications.",
    outcome: "A live MVP that shortens the path from enquiry to business action.",
    features: ["Customer enquiries", "Conversational interface", "Admin management", "Email notifications", "Customer records", "Conversations & messages", "Enquiry management"],
    next: "Richer automation rules and deeper CRM-style workflows.",
    featured: true
  },
  {
    id: "kabvip",
    title: "KABVIP™",
    category: "Community / Publishing · Product Engineering",
    tagline: "Ideas. Conversations. Perspective.",
    description: "A digital publishing and community platform for ideas, conversations and perspective. The frontend product experience is complete; backend implementation is the next stage.",
    status: "FRONTEND COMPLETE / BACKEND IN DEVELOPMENT",
    statusClass: "status-building",
    liveUrl: null,
    githubUrl: null,
    technologies: ["React", "Modular Architecture", "UI → Services → Data"],
    problem: "Most publishing tools either over-simplify content or tightly couple the interface to backend infrastructure, limiting evolution.",
    solution: "An architecture that separates UI, services and data so the platform can grow from publishing into memberships, courses, events and community features without rewriting the foundation.",
    outcome: "A completed frontend product experience with a defined UI → services → data architecture. Not yet a production community platform: the backend is in development.",
    features: ["Articles & essays", "Short thoughts", "Discussions", "Accounts", "Comments & replies", "Reactions & saves", "Notifications", "Newsletters", "Search", "Categories & tags", "Multimedia readiness"],
    next: "Planned, not built: production backend and database, real authentication, then memberships, courses, digital products and events.",
    featured: true
  },
  {
    id: "logic-empire",
    title: "Logic Empire",
    category: "Games / Interactive Products",
    tagline: "Building interactive experiences, not just business interfaces.",
    description: "An interactive game project focused on gameplay logic, interaction systems and visual engagement.",
    status: "MVP / LIVE",
    statusClass: "status-mvp",
    liveUrl: "https://logicempire.netlify.app/",
    githubUrl: null,
    technologies: ["Game Logic", "Interaction Systems", "Visual Experience", "Deployment"],
    problem: "Technology portfolios often stay inside business interfaces and miss the creative range of interactive systems.",
    solution: "A playable interactive experience that exercises game mechanics, user engagement and creative problem solving.",
    outcome: "A live experimental product that demonstrates range beyond conventional application software.",
    features: ["Gameplay logic", "Interaction systems", "Visual experience", "User engagement"],
    next: "Further experimentation with mechanics and narrative layers.",
    featured: true
  },
  {
    id: "soul-ascent",
    title: "Soul Ascent",
    category: "Experimental Technology · Interactive Experience",
    tagline: "Technology can be a medium for ideas, emotion and experience.",
    description: "A creative technology experience exploring interactive design, digital storytelling and experimental user experience.",
    status: "MVP / LIVE",
    statusClass: "status-mvp",
    liveUrl: "https://soulascent.netlify.app/",
    githubUrl: null,
    technologies: ["Interactive Design", "Digital Storytelling", "Creative Development"],
    problem: "Not every product needs to be an enterprise system — technology is also a medium for ideas and experience.",
    solution: "An interactive creative piece that prioritizes atmosphere, storytelling and experimental interaction over conventional business UI patterns.",
    outcome: "A live creative technology experience that expands the portfolio's range.",
    features: ["Interactive design", "Digital storytelling", "Experimental UX"],
    next: "Continued creative experimentation.",
    featured: true
  }
];

const games = [
  { title: "Mind Empire", description: "Game logic and strategic interaction systems." },
  { title: "Kingdom Journey Series", description: "Narrative-driven progression and world exploration." },
  { title: "Runner Game", description: "Real-time interaction and timing-based mechanics." },
  { title: "Treasure of Forgotten Jungle", description: "Exploration, discovery and visual storytelling." }
];

const processSteps = [
  { num: "00", title: "Understand the problem and the user", desc: "Who is struggling, with what, and what does success look like?" },
  { num: "01", title: "Define the simplest useful solution", desc: "Scope an MVP that solves the core problem first." },
  { num: "02", title: "Design the experience", desc: "Map the user flow, priorities and architecture." },
  { num: "03", title: "Build iteratively", desc: "Ship working slices of the interface and core logic." },
  { num: "04", title: "Test", desc: "Check function, usability, responsiveness and edge cases." },
  { num: "05", title: "Observe", desc: "Watch how the product is actually used." },
  { num: "06", title: "Improve using evidence", desc: "Let observed behaviour, not assumption, set priorities." },
  { num: "07", title: "Deploy", desc: "Move it into a real, usable environment." },
  { num: "08", title: "Scale when justified", desc: "Add complexity only when usage earns it." }
];

const philosophy = [
  "Build before you overcomplicate.",
  "Solve the real problem, not the imaginary one.",
  "Good UI is communication, not decoration.",
  "Architecture should serve the product.",
  "Ship. Test. Learn. Improve.",
  "Data beats assumption.",
  "Technology should create leverage."
];

const currentlyBuilding = [
  {
    project: "Destiny Farm Manager",
    status: "MVP / LIVE",
    workingOn: "Live agricultural workflows — livestock tracking, feed calculation and AI-assisted tools.",
    next: "Expanded livestock modules and operational refinements."
  },
  {
    project: "KABVIP™ Platform",
    status: "BACKEND IN PROGRESS",
    workingOn: "Backend and data infrastructure behind the completed frontend.",
    next: "Production backend integration, then real accounts, discussions and notifications."
  },
  {
    project: "JTAD Prints AI",
    status: "MVP / LIVE",
    workingOn: "Enquiry management and response automation improvements.",
    next: "Richer admin tools and notification rules."
  },
  {
    project: "Decodra™",
    status: "MVP / LIVE",
    workingOn: "Product discovery depth and scanning reliability.",
    next: "Additional data sources and discovery workflows."
  }
];

const techStack = [
  { group: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Responsive UI", "Progressive Web Apps"] },
  { group: "Backend / Data", items: ["Supabase", "Firebase", "APIs", "Authentication", "Database design", "Server-side functions"] },
  { group: "Product & Engineering", items: ["Product thinking", "UX/UI", "System architecture", "API integration", "Deployment", "Debugging", "Performance"] },
  { group: "AI", items: ["AI API integration", "AI-assisted product development", "AI-powered interfaces", "AI search", "Workflow automation"] }
];

// Case-study depth. Each claim maps to the live deployment, owner-confirmed status or listed technologies.
const caseStudies = {
  decodra: {
    decisions: ["Built as a PWA on the device camera and browser APIs, so scanning works from a phone without an app-store install.", "Mobile-first layout, because scanning happens with a phone in hand.", "AI features and extra data sources were deliberately held back from the MVP."],
    mvp: { included: "Scanning, multiple code formats, camera access, installable PWA, product lookup.", later: "More data sources, deeper discovery, AI-assisted features." },
    evidence: "Live deployment: decodra.netlify.app"
  },
  "destiny-farm": {
    problem: "Built from first-hand experience running a pig-farming operation: records, feed quantities and invoices were scattered across paper, memory and separate tools.",
    decisions: ["Mobile-first PWA, because farm work happens away from a desk.", "Feed calculation sits alongside livestock records, so quantities are worked out where the animals are tracked.", "Voice input and multilingual support were included for use in real farm conditions."],
    mvp: { included: "Pig management, feed calculation, invoices, glossary, AI-assisted search, voice input, authentication.", later: "Expanded livestock modules." },
    evidence: "Live deployment: destinyfarm.netlify.app"
  },
  "jtad-prints": {
    decisions: ["Supabase for data and authentication, with Edge Functions and Resend to send email notifications.", "An admin area so the business can act on enquiries, not only collect them.", "Richer automation and CRM-style workflows were left out of the MVP."],
    mvp: { included: "Customer chat, enquiry and conversation records, admin login and dashboard, email notifications.", later: "Richer automation rules and CRM-style workflows." },
    evidence: "Live deployment: jtadprintsai.netlify.app"
  },
  kabvip: {
    features: ["Frontend architecture", "Public website", "Publishing and community UI", "Authentication UI", "Admin / CMS interface", "Responsive experience", "PWA / frontend infrastructure"],
    inDev: ["Production backend", "Production database", "Real authentication infrastructure", "Production data layer", "Backend integrations"],
    decisions: ["Frontend-first: the full product experience was built before the backend, so the UX could be settled first.", "UI → services → data separation, so the backend can be connected without rewriting the interface."],
    constraint: "Staged build: the backend comes after the frontend, so the product is not yet operational as a community platform.",
    evidence: "Owner-confirmed status: frontend complete, backend in development. No live product link yet."
  }
};
projects.forEach((p) => Object.assign(p, caseStudies[p.id]));
