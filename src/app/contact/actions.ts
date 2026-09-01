"use server";

import "server-only";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const serviceTypes = [
  "Business Software",
  "SaaS / AI",
  "Website / Portal",
  "IT / Network",
  "Technical Project",
  "Product / Business Enablement",
  "Managed Monthly Support",
  "Not Sure Yet",
] as const;

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name must be 80 characters or fewer."),
  company: z.string().trim().max(120, "Company must be 120 characters or fewer."),
  country: z.string().trim().max(80, "Country must be 80 characters or fewer."),
  email: z.string().trim().email("Enter a valid email address.").max(160, "Email must be 160 characters or fewer."),
  phone: z.string().trim().max(40, "Phone must be 40 characters or fewer."),
  service_type: z.enum(serviceTypes, { error: "Choose a service type." }),
  budget_range: z.string().trim().max(80, "Budget must be 80 characters or fewer."),
  project_description: z.string().trim().min(20, "Please share at least 20 characters about the problem.").max(3000, "Project description must be 3,000 characters or fewer."),
  website: z.string().max(0, "Invalid submission."),
});

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
};

export const initialLeadFormState: LeadFormState = { status: "idle", message: "" };

function value(formData: FormData, key: string) {
  const entry = formData.get(key);
  return typeof entry === "string" ? entry : "";
}

export async function submitLead(_previousState: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const raw = {
    name: value(formData, "name"),
    company: value(formData, "company"),
    country: value(formData, "country"),
    email: value(formData, "email"),
    phone: value(formData, "phone"),
    service_type: value(formData, "service_type"),
    budget_range: value(formData, "budget_range"),
    project_description: value(formData, "project_description"),
    website: value(formData, "website"),
  };

  if (raw.website) {
    return { status: "success", message: "Thanks — your project enquiry has been received." };
  }

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const lead = {
    name: parsed.data.name,
    company: parsed.data.company,
    country: parsed.data.country,
    email: parsed.data.email,
    phone: parsed.data.phone,
    service_type: parsed.data.service_type,
    budget_range: parsed.data.budget_range,
    project_description: parsed.data.project_description,
  };

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert({
      name: lead.name,
      company: lead.company || null,
      country: lead.country || null,
      phone: lead.phone || null,
      email: lead.email,
      service_type: lead.service_type,
      budget_range: lead.budget_range || null,
      project_description: lead.project_description,
      source: "website",
    });

    if (error) throw error;
    return { status: "success", message: "Thanks — your project enquiry has been received. PK-TANK will review the details and follow up." };
  } catch (error) {
    console.error("Lead submission failed", error instanceof Error ? error.message : "Unknown server error");
    return { status: "error", message: "We couldn’t send your enquiry right now. Please try again shortly." };
  }
}
