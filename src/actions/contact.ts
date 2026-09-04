"use server";

import { contactSchema } from "@/lib/contact-schema";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import type { ContactFormState } from "@/types/contact";

function formValue(formData: FormData, key: string) {
  const entry = formData.get(key);
  return typeof entry === "string" ? entry : "";
}

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formValue(formData, "name"), company: formValue(formData, "company"),
    country: formValue(formData, "country"), email: formValue(formData, "email"),
    phone: formValue(formData, "phone"), service_type: formValue(formData, "service_type"),
    budget_range: formValue(formData, "budget_range"),
    project_description: formValue(formData, "project_description"),
    website: formValue(formData, "website"),
  };

  if (raw.website) return { status: "success", message: "Thanks — your project enquiry has been received." };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return { status: "error", message: "Please check the highlighted fields and try again.", errors: parsed.error.flatten().fieldErrors };
  }

  const lead = parsed.data;

  try {
    const { error } = await getSupabaseAdmin().schema("public").from("leads").insert({
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

    if (error) return { status: "error", message: "We couldn’t send your enquiry right now. Please try again shortly." };

    return { status: "success", message: "Thanks — your project enquiry has been received. PK-TANK will review the details and follow up." };
  } catch {
    return { status: "error", message: "We couldn’t send your enquiry right now. Please try again shortly." };
  }
}
