export const services = [
  {
    id: "digital-business-systems",
    number: "01",
    title: "Digital Business Systems",
    shortTitle: "Digital Systems",
    description:
      "Software, SaaS and automation designed around the way your people, information and decisions need to move.",
    items: [
      "Business software and workflow systems",
      "SaaS setup, configuration and onboarding",
      "AI knowledge and support automation",
      "Company websites and customer portals",
      "Dashboards, reporting and databases",
      "Testing, documentation and training",
    ],
  },
  {
    id: "managed-it",
    number: "02",
    title: "Managed IT & Technical Support",
    shortTitle: "Managed IT",
    description:
      "Practical remote support for users, networks and SaaS products—structured to reduce interruptions and repeat issues.",
    items: [
      "Remote user and computer support",
      "Router, Wi-Fi and LAN troubleshooting",
      "IP, DHCP and DNS issue support",
      "Printer and software troubleshooting",
      "SaaS and technical product support",
      "Issue testing and support documentation",
    ],
  },
  {
    id: "technical-project-support",
    number: "03",
    title: "Technical Project Support",
    shortTitle: "Project Support",
    description:
      "Research, comparison, documentation and reporting that give technical projects a clearer path from question to handover.",
    items: [
      "Technical research and vendor comparison",
      "BOQ and structured costing assistance",
      "Project, progress and handover documents",
      "Layouts and monitoring documentation",
      "IoT and monitoring software prototypes",
      "Structured troubleshooting reports",
    ],
  },
  {
    id: "business-enablement",
    number: "04",
    title: "B2B Technology & Project Enablement",
    shortTitle: "Business Enablement",
    description:
      "Commercial and operational support for introducing technical products and organizing the work around complex opportunities.",
    items: [
      "Technical product launch support",
      "Market and dealer/channel research",
      "Proposal and product documentation",
      "Tender-document organization",
      "Quotation and costing support",
      "Project coordination and support design",
    ],
  },
] as const;

export const problems = [
  {
    title: "Too much manual work",
    text: "Replace paper, disconnected spreadsheets and scattered messages with a structured workflow.",
  },
  {
    title: "Poor operational visibility",
    text: "Bring orders, stock, service, people and projects into clear role-appropriate dashboards.",
  },
  {
    title: "Repetitive support workload",
    text: "Turn recurring questions into usable knowledge, guided support and sensible automation.",
  },
  {
    title: "IT and network interruptions",
    text: "Diagnose day-to-day user, router, Wi-Fi, LAN and SaaS issues with structured follow-through.",
  },
  {
    title: "Disorganized technical projects",
    text: "Create order through research, comparison, documentation, reporting and handover support.",
  },
  {
    title: "Difficult product launches",
    text: "Prepare product information, research, support workflows and channel activity for a stronger rollout.",
  },
] as const;

export const solutions = [
  ["Customer & Order", "Organize customer records, quotations, orders, status and follow-up."],
  ["Inventory & Stock", "Track products, movement, levels and operational stock visibility."],
  ["HR & Employee", "Structure employee records, attendance, leave and essential HR workflows."],
  ["Service / RMA", "Manage support intake, service status, warranty and return workflows."],
  ["Requisition & Approval", "Move requests through role-based review, approval and fulfillment."],
  ["AI Support", "Build searchable knowledge and guided assistance for customers or internal teams."],
  ["Reporting Dashboards", "Turn operational records into focused reports and decision views."],
  ["Managed IT", "Combine day-to-day remote support, issue documentation and small improvements."],
  ["Technical Project Desk", "Add research, comparison, BOQ and documentation capacity when needed."],
  ["Product Launch Support", "Coordinate research, documentation and support planning for technical products."],
] as const;

export type WorkCategory =
  | "Digital Systems"
  | "IT & Technical"
  | "Technical Projects"
  | "Business Enablement";

export type WorkItem = {
  slug: string;
  title: string;
  category: WorkCategory;
  status: "PK-TANK Project" | "Founder’s Past Experience" | "Prototype" | "Internal Product" | "Demonstration" | "Research / Lab Project";
  summary: string;
  problem: string;
  context: string;
  role: string;
  solution: string;
  deliverables: readonly string[];
  tools: readonly string[];
  benefit: string;
  accent: string;
};

export const workItems: readonly WorkItem[] = [
  {
    slug: "tailoring-business-management-system",
    title: "Tailoring Business Management System",
    category: "Digital Systems",
    status: "Demonstration",
    summary: "A structured operating concept for customer measurements, orders, production status and delivery follow-up.",
    problem: "Tailoring businesses often coordinate customer details, measurements, job status and payments across paper records and messages.",
    context: "This demonstration explores how a focused business system can organize a tailoring workflow without forcing the business into a generic retail tool.",
    role: "Workflow definition, information architecture, interface design and system demonstration.",
    solution: "A role-aware workspace that connects customer records, measurement profiles, order items, production stages and delivery status.",
    deliverables: ["Customer and measurement records", "Order and item workflow", "Production status view", "Delivery and payment tracking", "Operational dashboard concept"],
    tools: ["Web application", "Structured relational data", "Role-based workflows", "Reporting interface"],
    benefit: "The concept shows how one operational record can reduce duplicate entry and make job status easier to understand.",
    accent: "01",
  },
  {
    slug: "csp-requisition-stock-workflow",
    title: "CSP Requisition & Stock Workflow",
    category: "Digital Systems",
    status: "Prototype",
    summary: "A prototype for moving internal requests through approval, fulfillment and stock visibility.",
    problem: "Requisitions can become difficult to trace when requests, approvals and stock decisions are handled through separate messages or sheets.",
    context: "The prototype focuses on a clear request-to-fulfillment path suitable for an operational team that needs accountability without excessive complexity.",
    role: "Process mapping, approval logic, prototype structure and dashboard design.",
    solution: "A requisition workflow connecting request details, approval states, issued quantities, stock movement and history.",
    deliverables: ["Request entry and review", "Approval status workflow", "Stock issue records", "Activity history", "Summary dashboard"],
    tools: ["Workflow prototype", "Structured database model", "Role-based access concept", "Dashboard UI"],
    benefit: "The prototype demonstrates how teams can see where a request stands and keep fulfillment connected to stock records.",
    accent: "02",
  },
  {
    slug: "hr-management-platform",
    title: "HR Management Platform",
    category: "Digital Systems",
    status: "Demonstration",
    summary: "A practical HR workspace concept for essential employee information and routine people operations.",
    problem: "Small and growing organizations often manage employee records, attendance and leave in disconnected files.",
    context: "This demonstration is intentionally focused on core HR visibility rather than presenting an enterprise HR suite.",
    role: "Feature scoping, data structure, interface design and workflow demonstration.",
    solution: "A central workspace for employee profiles, attendance, leave requests, documents and management summaries.",
    deliverables: ["Employee directory", "Attendance overview", "Leave request workflow", "Document record concept", "Management summary"],
    tools: ["Web interface", "Structured employee records", "Approval workflow", "Reporting views"],
    benefit: "The concept illustrates a clearer single source for routine employee administration and management visibility.",
    accent: "03",
  },
  {
    slug: "ai-technical-support-platform",
    title: "AI Technical Support Platform",
    category: "IT & Technical",
    status: "Prototype",
    summary: "A support prototype that combines structured troubleshooting knowledge with guided AI-assisted responses.",
    problem: "Support teams repeatedly answer similar questions while important troubleshooting context stays scattered across documents and individual experience.",
    context: "The prototype explores a controlled support experience where AI assists with retrieval and guidance rather than replacing responsible technical judgment.",
    role: "Support-flow design, knowledge organization, prompt behavior, interface prototyping and safe escalation paths.",
    solution: "A guided support desk that captures the issue, retrieves relevant knowledge, suggests practical checks and keeps escalation available.",
    deliverables: ["Issue intake flow", "Knowledge-assisted response concept", "Troubleshooting steps", "Escalation path", "Support history interface"],
    tools: ["AI-assisted retrieval", "Structured support knowledge", "Web application prototype", "Guardrailed response flow"],
    benefit: "The prototype shows how repeat support can become more consistent while keeping uncertain or sensitive issues visible for human follow-up.",
    accent: "04",
  },
] as const;

export const pastExperience = [
  ["Technical product deployment", "Founder’s Past Experience", "Product inspection, coordination, documentation and handover support."],
  ["Network & device troubleshooting", "Founder’s Past Experience", "Practical investigation across routers, interfaces, devices and operating environments."],
  ["Business research & proposals", "Founder’s Past Experience", "Market research, proposal preparation and B2B project coordination."],
  ["Monitoring & sensor exploration", "Research / Lab Project", "Sensor, microprocessor and monitoring-interface experimentation."],
] as const;

export const industries = [
  ["Retail & Service", "Orders, inventory, customers, service workflows and practical dashboards."],
  ["Fashion / Tailoring", "Measurement-led orders, production stages, delivery and customer records."],
  ["IT & Technology", "SaaS operations, product support, knowledge systems and remote technical workflows."],
  ["Healthcare SMEs", "Administrative workflows, service coordination and operational visibility—outside regulated clinical systems unless appropriately scoped."],
  ["Education", "Portals, internal workflows, records, approvals and reporting for growing institutions."],
  ["Distribution", "Stock movement, requisitions, dealer information, orders and reporting."],
  ["Engineering / Project Businesses", "Research, documentation, BOQ assistance, project tracking and handover support."],
  ["SaaS / Remote Technology Companies", "User support, testing, onboarding, documentation and technical operations capacity."],
] as const;

export const pricingPlans = [
  {
    name: "START",
    label: "Digital Launch",
    price: "BDT 15,000",
    suffix: "starting from",
    description: "A credible digital foundation for a business ready to present itself professionally and capture enquiries.",
    features: ["Professional business website", "Responsive implementation", "Contact form", "Basic SEO setup", "Deployment support", "Basic post-launch support"],
    featured: false,
  },
  {
    name: "GROW",
    label: "Business System",
    price: "BDT 40,000",
    suffix: "starting from",
    description: "A focused operational system for a workflow that needs users, structure, data and visibility.",
    features: ["Users and roles", "Database and workflow", "Operational dashboard", "Essential reports", "Deployment", "Basic training"],
    featured: true,
  },
  {
    name: "MANAGED",
    label: "Technology Partner",
    price: "BDT 3,000",
    suffix: "starting from / month",
    description: "Ongoing practical support that can combine digital, user, technical and coordination needs.",
    features: ["Website and software support", "User help", "Minor updates", "Basic IT/network assistance", "Technical coordination", "Regular support relationship"],
    featured: false,
  },
] as const;
