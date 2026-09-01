"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { submitContact } from "@/actions/contact";
import { budgetRanges, initialContactFormState, serviceTypes } from "@/lib/contact-form";

function FieldError({ errors }: { errors?: string[] }) {
  return errors?.[0] ? <span className="field-error">{errors[0]}</span> : null;
}

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initialContactFormState);

  if (state.status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" />
        <p className="kicker">Enquiry received</p>
        <h2>Thank you for the clear starting point.</h2>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" action={formAction} noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name <span>*</span></label>
          <input id="name" name="name" type="text" required maxLength={80} autoComplete="name" aria-describedby={state.errors?.name ? "name-error" : undefined} />
          <span id="name-error"><FieldError errors={state.errors?.name} /></span>
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" maxLength={120} autoComplete="organization" />
          <FieldError errors={state.errors?.company} />
        </div>
        <div className="field">
          <label htmlFor="country">Country</label>
          <input id="country" name="country" type="text" maxLength={80} autoComplete="country-name" />
          <FieldError errors={state.errors?.country} />
        </div>
        <div className="field">
          <label htmlFor="email">Email <span>*</span></label>
          <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" />
          <FieldError errors={state.errors?.email} />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" />
          <FieldError errors={state.errors?.phone} />
        </div>
        <div className="field">
          <label htmlFor="service_type">Service type <span>*</span></label>
          <select id="service_type" name="service_type" required defaultValue={defaultService}>
            <option value="" disabled>Select a service</option>
            {serviceTypes.map((choice) => <option value={choice} key={choice}>{choice}</option>)}
          </select>
          <FieldError errors={state.errors?.service_type} />
        </div>
        <div className="field field-full">
          <label htmlFor="budget_range">Budget range</label>
          <select id="budget_range" name="budget_range" defaultValue="">
            <option value="">Select a range (optional)</option>
            {budgetRanges.map((choice) => <option value={choice} key={choice}>{choice}</option>)}
          </select>
          <FieldError errors={state.errors?.budget_range} />
        </div>
        <div className="field field-full">
          <label htmlFor="project_description">Project description <span>*</span></label>
          <textarea id="project_description" name="project_description" rows={7} required minLength={20} maxLength={3000} placeholder="Tell us what is happening now, who is affected and what a better outcome would look like." />
          <div className="field-meta"><FieldError errors={state.errors?.project_description} /><span>Maximum 3,000 characters</span></div>
        </div>
      </div>
      <div className="form-submit">
        <p>By submitting, you agree that PK-TANK may use these details to respond to your enquiry. See the <a href="/privacy">privacy notice</a>.</p>
        <button className="button" type="submit" disabled={pending}>
          {pending ? "Sending..." : "Send Project Enquiry"} <ArrowRight aria-hidden="true" size={18} />
        </button>
      </div>
      {state.status === "error" ? <p className="form-message" role="alert">{state.message}</p> : null}
    </form>
  );
}
