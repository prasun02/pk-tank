import "server-only";
import { z } from "zod";
import { serviceTypes } from "@/app/contact/form-state";

export const leadSchema = z.object({
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
