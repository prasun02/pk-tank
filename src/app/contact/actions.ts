"use server";

import "server-only";
import type { LeadFormState } from "@/app/contact/form-state";
import { leadSchema } from "@/app/contact/validation";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

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
      status: "new",
    });

    if (error) throw error;
    return { status: "success", message: "Thanks — your project enquiry has been received. PK-TANK will review the details and follow up." };
  } catch (error) {
    console.error("Lead submission failed", error instanceof Error ? error.message : "Unknown server error");
    return { status: "error", message: "We couldn’t send your enquiry right now. Please try again shortly." };
  }
}
