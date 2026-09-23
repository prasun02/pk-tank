// Homepage presentation content. Wording is drawn from the existing service, solution and project copy.

export const coreServices = [
  {
    id: "custom-business-software",
    title: "Custom Business Software",
    summary: "Workflow systems built around how your team actually operates.",
    points: ["Orders, customers and stock", "HR, requisitions and approvals", "Dashboards and operational reports"],
    href: "/services#digital-business-systems",
  },
  {
    id: "saas-application-development",
    title: "SaaS Application Development",
    summary: "Multi-user web platforms with accounts, roles and dashboards.",
    points: ["Web applications and customer portals", "SaaS setup, configuration and onboarding", "Testing, documentation and training"],
    href: "/services#digital-business-systems",
  },
  {
    id: "ai-workflow-automation",
    title: "AI & Workflow Automation",
    summary: "Automate repetitive steps and turn support knowledge into guided answers.",
    points: ["AI knowledge and support assistants", "Guided troubleshooting flows", "Repeatable workflow automation"],
    href: "/solutions",
  },
  {
    id: "managed-it-support",
    title: "Managed IT & Technical Support",
    summary: "Remote support that keeps users, networks and SaaS tools working.",
    points: ["Remote user and computer support", "Router, Wi-Fi, LAN and DNS issues", "SaaS and technical product support"],
    href: "/services#managed-it",
  },
  {
    id: "technical-project-support",
    title: "Technical Project Support",
    summary: "Research, costing and documentation that keep technical projects on track.",
    points: ["Technical research and vendor comparison", "BOQ and structured costing assistance", "Progress and handover documents"],
    href: "/services#technical-project-support",
  },
] as const;

export type CoreServiceId = (typeof coreServices)[number]["id"];

export const challenges = [
  {
    id: "manual-work",
    title: "Too much manual work",
    problem: "Customer details, orders, stock and approvals are spread across paper, spreadsheets and chat messages.",
    before: ["Paper forms", "Separate spreadsheets", "Chat messages"],
    after: "One structured workflow",
    help: [
      "Map the current process and the people involved",
      "Build one system for records, status and approvals",
      "Add dashboards so progress is visible without asking",
    ],
    systems: ["Customer & Order", "Inventory & Stock", "Requisition & Approval"],
    link: { label: "See the tailoring management project", href: "/work/tailoring-business-management-system" },
  },
  {
    id: "visibility",
    title: "Poor operational visibility",
    problem: "Managers cannot see where orders, requests, people or projects stand without chasing updates.",
    before: ["Status held by individuals", "Reports built by hand"],
    after: "Role-based dashboards",
    help: [
      "Identify the decisions each role needs to make",
      "Connect operational records into one data model",
      "Deliver focused dashboards and reports per role",
    ],
    systems: ["Reporting Dashboards", "HR & Employee", "Requisition & Approval"],
    link: { label: "See the requisition workflow project", href: "/work/csp-requisition-stock-workflow" },
  },
  {
    id: "support-workload",
    title: "Repetitive support workload",
    problem: "The same support questions are answered every day, and troubleshooting knowledge lives in a few people’s heads.",
    before: ["Repeated questions", "Undocumented fixes"],
    after: "Guided, AI-assisted support",
    help: [
      "Organize support knowledge into a structured base",
      "Guide users through safe, step-by-step checks",
      "Keep escalation to a person for uncertain issues",
    ],
    systems: ["AI Support", "Service / RMA"],
    link: { label: "See the AI support platform project", href: "/work/ai-technical-support-platform" },
  },
  {
    id: "it-interruptions",
    title: "IT and network interruptions",
    problem: "Wi-Fi, router, LAN and SaaS problems interrupt work, and the same issues return because nobody records the fix.",
    before: ["Recurring outages", "Unrecorded fixes"],
    after: "Structured remote support",
    help: [
      "Diagnose user, router, Wi-Fi, LAN and SaaS issues remotely",
      "Document each fix so repeat issues resolve faster",
      "Combine support into a predictable monthly arrangement",
    ],
    systems: ["Managed IT"],
    link: { label: "Explore managed IT support", href: "/services#managed-it" },
  },
  {
    id: "technical-projects",
    title: "Disorganized technical projects",
    problem: "Vendor options, costs, progress and handover information are scattered, so decisions and delivery slow down.",
    before: ["Unclear vendor options", "Missing documentation"],
    after: "Organized project delivery",
    help: [
      "Research and compare technical options and vendors",
      "Prepare BOQ, costing and progress documentation",
      "Support handover with clear, structured reports",
    ],
    systems: ["Technical Project Desk"],
    link: { label: "Explore technical project support", href: "/services#technical-project-support" },
  },
  {
    id: "product-launches",
    title: "Difficult product launches",
    problem: "A technical product is ready, but product information, channel research and support planning are not.",
    before: ["Incomplete product information", "No support workflow"],
    after: "Prepared rollout",
    help: [
      "Research market and dealer or channel options",
      "Prepare product and proposal documentation",
      "Plan the support workflow before launch",
    ],
    systems: ["Product Launch Support"],
    link: { label: "Explore B2B technology enablement", href: "/services#business-enablement" },
  },
] as const;

export type Challenge = (typeof challenges)[number];

export const processSteps = [
  { title: "Discover", text: "Clarify the problem, users, current process and constraints.", outcome: "A clear problem statement" },
  { title: "Shape", text: "Define a practical scope and workflow before complexity grows.", outcome: "An agreed scope and workflow" },
  { title: "Build", text: "Implement the system or project deliverables in focused stages.", outcome: "A working system, delivered in stages" },
  { title: "Improve", text: "Review usage, resolve friction and plan the next useful step.", outcome: "Support and clear next priorities" },
] as const;

export const managedSupportScope = [
  "Website and software care",
  "SaaS and product support",
  "User help and troubleshooting",
  "Basic network troubleshooting",
  "Reports and small improvements",
  "Technical coordination",
] as const;
