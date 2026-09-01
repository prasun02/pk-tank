export const serviceTypes = [
  "Business Software",
  "SaaS / AI",
  "Website / Portal",
  "IT / Network",
  "Technical Project",
  "Product / Business Enablement",
  "Managed Monthly Support",
  "Not Sure Yet",
] as const;

export const budgetRanges = [
  "Under BDT 15,000",
  "BDT 15,000 ? 40,000",
  "BDT 40,000 ? 100,000",
  "BDT 100,000+",
  "Monthly support",
  "Need guidance",
] as const;

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
};

export const initialLeadFormState: LeadFormState = {
  status: "idle",
  message: "",
};
