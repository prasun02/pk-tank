import type { ProjectScreenshot } from "@/components/work/project-screenshots";

export const workScreenshots: Record<string, readonly ProjectScreenshot[]> = {
  "tailoring-business-management-system": [
    { src: "/work/tailoring-business-management-system/tailor-dashboard.png", title: "Business Operations Dashboard", description: "A central view of orders, deliveries, production activity, customers, payments and overall tailoring-business performance.", alt: "Tailoring business management dashboard showing orders, production, customers, delivery and payment information", featured: true },
    { src: "/work/tailoring-business-management-system/tailor-new-order.png", title: "Structured New Order Workflow", description: "A guided order-entry process covering garment selection, measurements, design notes, customer information, payment and delivery details.", alt: "Tailoring software new order workflow with garment selection and measurement steps" },
    { src: "/work/tailoring-business-management-system/tailor-production.png", title: "Production & Delivery Tracking", description: "Production teams can follow garment status, assignments, priority, delivery deadlines and readiness from one operational view.", alt: "Tailoring production management screen showing garment orders, workers, deadlines and status" },
  ],
  "hr-management-platform": [
    { src: "/work/hr-management-platform/hrm-dashboard.png", title: "Central HR Operations Dashboard", description: "A management view of workforce size, attendance, late arrivals, pending leave and HR operational activity.", alt: "HR management system dashboard showing employees attendance leave and workforce operations", featured: true },
    { src: "/work/hr-management-platform/hrm-employees.png", title: "Employee Directory & Access", description: "Central employee records organize department, designation, branch, employment status and system-access information.", alt: "HR employee directory showing department designation branch status and access information" },
    { src: "/work/hr-management-platform/hrm-attendance.png", title: "Attendance Command Center", description: "A centralized attendance workspace designed for attendance monitoring, device management, employee enrollment and integration review.", alt: "HR attendance command center with attendance status device management and monitoring tools" },
  ],
  "ai-technical-support-platform": [
    { src: "/work/ai-technical-support-platform/ai-support-home.png", title: "AI-Assisted Support Interface", description: "A multilingual support interface that allows users to select a product category or describe a technical problem in natural language.", alt: "AI technical support platform home screen with product categories and multilingual support", featured: true },
    { src: "/work/ai-technical-support-platform/ai-support-slow-internet.png", title: "Structured Network Troubleshooting", description: "The system identifies the support topic, presents likely causes, suggests safe initial checks and asks targeted diagnostic questions.", alt: "AI support system troubleshooting a slow internet problem with causes safe checks and questions" },
    { src: "/work/ai-technical-support-platform/ai-support-printer.png", title: "Product-Specific Diagnostic Guidance", description: "The same support workflow can guide users through other technical categories such as printers using structured, safety-aware troubleshooting.", alt: "AI support system providing printer troubleshooting guidance and diagnostic questions" },
  ],
  "csp-requisition-stock-workflow": [
    { src: "/work/csp-requisition-stock-workflow/requisition-analytics.png", title: "Management Analytics", description: "A consolidated operational view of requisition ageing, approval backlog, RMA workload, TROUT processing, courier activity and pending demand.", alt: "Requisition management analytics dashboard showing backlog ageing workload and operational status", featured: true },
    { src: "/work/csp-requisition-stock-workflow/requisition-rma-trout.png", title: "RMA & TROUT Workflow", description: "The workflow provides visibility across approval, product arrangement, TROUT preparation, dispatch, receiving and pending reasons.", alt: "RMA and TROUT workflow showing requisition approval stock arrangement dispatch and receiving status" },
    { src: "/work/csp-requisition-stock-workflow/requisition-list.png", title: "End-to-End Requisition Visibility", description: "A structured requisition list brings approval, arrangement, TROUT, courier and overall status together in one searchable operational view.", alt: "Requisition management list showing approval arrangement TROUT courier and overall status" },
  ],
};
