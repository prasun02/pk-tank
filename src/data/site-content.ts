export type ServiceId =
  | "custom-business-software"
  | "saas-application-development"
  | "ai-workflow-automation"
  | "managed-it"
  | "technical-project-support"
  | "business-enablement";

export type ContactServiceType =
  | "Business Software"
  | "SaaS / AI"
  | "IT / Network"
  | "Technical Project"
  | "Product / Business Enablement";

export type Service = {
  id: ServiceId;
  number: string;
  title: string;
  group: "build" | "run";
  summary: string;
  outcome: string;
  items: readonly string[];
  contactService: ContactServiceType;
};

// The five core services lead the site; B2B enablement is offered alongside them.
export const coreServices: readonly Service[] = [
  {
    id: "custom-business-software",
    number: "01",
    title: "Custom Business Software",
    group: "build",
    summary: "Workflow systems for orders, stock, HR, service and approvals, shaped around how your team already works.",
    outcome: "One structured record replaces paper, disconnected spreadsheets and scattered messages.",
    items: [
      "Customer, order and inventory systems",
      "Requisition and approval workflows",
      "Dashboards, reporting and databases",
      "Company websites and customer portals",
      "Service / RMA and HR workflows",
      "Testing, documentation and training",
    ],
    contactService: "Business Software",
  },
  {
    id: "saas-application-development",
    number: "02",
    title: "SaaS Application Development",
    group: "build",
    summary: "Web platforms with users, roles and dashboards, plus setup and onboarding for SaaS products you already use.",
    outcome: "Teams and customers work in one shared, role-aware platform instead of separate tools.",
    items: [
      "Multi-user web platforms with roles",
      "Admin panels and role-based portals",
      "SaaS setup, configuration and onboarding",
      "Access, data preparation and testing",
      "Troubleshooting and user documentation",
      "Training for day-to-day users",
    ],
    contactService: "SaaS / AI",
  },
  {
    id: "ai-workflow-automation",
    number: "03",
    title: "AI & Workflow Automation",
    group: "build",
    summary: "AI-assisted support, knowledge search and automated steps that cut repetitive work, with human follow-up kept in place.",
    outcome: "Repeat questions and routine steps become consistent, faster and easier to hand over.",
    items: [
      "Knowledge and support assistants",
      "FAQ automation and document search",
      "Workflow integration between tools",
      "Guardrailed AI-assisted responses",
      "Clear escalation to people",
      "Support knowledge organization",
    ],
    contactService: "SaaS / AI",
  },
  {
    id: "managed-it",
    number: "04",
    title: "Managed IT & Technical Support",
    group: "run",
    summary: "Remote support for users, networks and SaaS products, structured to reduce interruptions and repeat issues.",
    outcome: "Day-to-day technology problems get diagnosed, fixed and documented instead of recurring.",
    items: [
      "Remote user and computer support",
      "Router, Wi-Fi and LAN troubleshooting",
      "IP, DHCP and DNS issue support",
      "Printer and software troubleshooting",
      "SaaS and technical product support",
      "Issue testing and support documentation",
    ],
    contactService: "IT / Network",
  },
  {
    id: "technical-project-support",
    number: "05",
    title: "Technical Project Support",
    group: "run",
    summary: "Research, comparison, BOQ assistance and documentation that take technical projects from question to handover.",
    outcome: "Projects gain a clear evidence trail, structured costing and complete handover documents.",
    items: [
      "Technical research and vendor comparison",
      "BOQ and structured costing assistance",
      "Project, progress and handover documents",
      "Layouts and monitoring documentation",
      "IoT and monitoring software prototypes",
      "Structured troubleshooting reports",
    ],
    contactService: "Technical Project",
  },
];

export const enablementService: Service = {
  id: "business-enablement",
  number: "+",
  title: "B2B Technology & Project Enablement",
  group: "run",
  summary: "Commercial and operational support for introducing technical products and organizing complex opportunities.",
  outcome: "Technical products reach the market with documentation, research and support readiness in place.",
  items: [
    "Technical product launch support",
    "Market and dealer/channel research",
    "Proposal and product documentation",
    "Tender-document organization",
    "Quotation and costing support",
    "Project coordination and support design",
  ],
  contactService: "Product / Business Enablement",
};

export const serviceGroups = [
  { id: "build", label: "Build digital systems", text: "Software, platforms and automation for how work moves." },
  { id: "run", label: "Run & deliver technology", text: "Support and project capacity that keeps work moving." },
] as const;

export const allServices: readonly Service[] = [...coreServices, enablementService];

export function getService(id: ServiceId) {
  return allServices.find((service) => service.id === id)!;
}

// Challenge → how PK-TANK helps → which service covers it.
export const problems: readonly { title: string; symptom: string; help: string; serviceId: ServiceId }[] = [
  {
    title: "Too much manual work",
    symptom: "Orders, requests and records live in paper, spreadsheets and chat threads.",
    help: "A structured workflow system with one shared record for every order, request or job.",
    serviceId: "custom-business-software",
  },
  {
    title: "Poor operational visibility",
    symptom: "No clear view of where orders, stock, service, people or projects stand.",
    help: "Role-appropriate dashboards and reports built directly from operational records.",
    serviceId: "custom-business-software",
  },
  {
    title: "Teams need one shared platform",
    symptom: "Staff, partners or customers each work in separate tools with no common access.",
    help: "A web platform with users, roles and dashboards, or setup of the SaaS you already use.",
    serviceId: "saas-application-development",
  },
  {
    title: "Repetitive support workload",
    symptom: "The same questions are answered again and again from memory.",
    help: "Searchable knowledge and AI-assisted guidance, with uncertain issues escalated to people.",
    serviceId: "ai-workflow-automation",
  },
  {
    title: "IT and network interruptions",
    symptom: "User, router, Wi-Fi, LAN or SaaS issues keep stalling daily work.",
    help: "Remote diagnosis with structured follow-through, documented so issues stop repeating.",
    serviceId: "managed-it",
  },
  {
    title: "Disorganized technical projects",
    symptom: "Research, costing and documents are scattered across people and files.",
    help: "Research, vendor comparison, BOQ assistance, progress reporting and handover documents.",
    serviceId: "technical-project-support",
  },
  {
    title: "Difficult product launches",
    symptom: "A technical product lacks documentation, market research or support readiness.",
    help: "Product documentation, market and channel research, and support-workflow planning.",
    serviceId: "business-enablement",
  },
];

export const solutionGroups = [
  {
    id: "operations",
    title: "Operations systems",
    text: "Structured records and workflows for the core of the business.",
    items: [
      ["Customer & Order", "Organize customer records, quotations, orders, status and follow-up."],
      ["Inventory & Stock", "Track products, movement, levels and operational stock visibility."],
      ["HR & Employee", "Structure employee records, attendance, leave and essential HR workflows."],
      ["Service / RMA", "Manage support intake, service status, warranty and return workflows."],
      ["Requisition & Approval", "Move requests through role-based review, approval and fulfillment."],
      ["Reporting Dashboards", "Turn operational records into focused reports and decision views."],
    ],
  },
  {
    id: "support",
    title: "AI & technical support",
    text: "Faster answers and fewer interruptions for teams and customers.",
    items: [
      ["AI Support", "Build searchable knowledge and guided assistance for customers or internal teams."],
      ["Managed IT", "Combine day-to-day remote support, issue documentation and small improvements."],
    ],
  },
  {
    id: "projects",
    title: "Projects & launches",
    text: "Extra technical capacity when a project or product needs structure.",
    items: [
      ["Technical Project Desk", "Add research, comparison, BOQ and documentation capacity when needed."],
      ["Product Launch Support", "Coordinate research, documentation and support planning for technical products."],
    ],
  },
] as const;

export const processSteps = [
  ["Discover", "Clarify the problem, users, current process, constraints and evidence."],
  ["Shape", "Define a practical scope, workflow and delivery path before complexity grows."],
  ["Build", "Implement the system, support structure or project deliverables in focused stages."],
  ["Improve", "Review usage, resolve friction and prioritize the next useful improvement."],
] as const;

export const faqs = [
  {
    question: "Do we need a technical specification before contacting PK-TANK?",
    answer: "No. Describe the current process, the people involved, the recurring problem and the outcome you want. Requirements and responsibilities are clarified before any proposal.",
  },
  {
    question: "Do you build new systems or improve what we already use?",
    answer: "Both. PK-TANK can scope a focused new build, configure an existing SaaS product, connect a repeatable process or improve a system already in use. The recommendation depends on your workflow, data, integrations and support needs.",
  },
  {
    question: "Is AI used to replace our support team?",
    answer: "No. AI assists with finding knowledge and guiding routine answers. Uncertain or sensitive issues stay visible for human follow-up.",
  },
  {
    question: "Can you keep supporting us after launch?",
    answer: "Yes. Managed monthly support can combine website and software care, SaaS support, user help, basic network troubleshooting, reports and small improvements.",
  },
  {
    question: "How is pricing decided?",
    answer: "Websites and focused business systems have published starting prices. Complex or technical work is quoted after scoping, because it needs a clear scope before it needs a price.",
  },
  {
    question: "Do you work with clients outside Bangladesh?",
    answer: "Yes. PK-TANK is remote-first: based in Bangladesh and working with clients remotely worldwide.",
  },
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
