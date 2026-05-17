"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (submitted) {
    return (
      <div className="premium-card text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-navy">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-gold">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-display text-2xl font-semibold text-navy">Thank you.</p>
        <p className="mt-4 text-sm leading-7 text-muted">
          Your message has been received. Harbor Systems will review the details and reach out to schedule a focused discovery conversation.
        </p>
      </div>
    );
  }

  function validate(form) {
    const data = Object.fromEntries(new FormData(form));
    const next = {};
    if (!data.firstName?.trim()) next.firstName = "Required";
    if (!data.lastName?.trim())  next.lastName  = "Required";
    if (!data.organization?.trim()) next.organization = "Required";
    if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "Valid email required";
    if (!data.challenge?.trim()) next.challenge = "Required";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(e.target);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  return (
    <form className="premium-card" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First Name"   name="firstName"   placeholder="Jane"                 error={errors.firstName} />
        <Field label="Last Name"    name="lastName"    placeholder="Smith"                error={errors.lastName} />
        <Field
          label="Organization Name"
          name="organization"
          placeholder="Hope Community Church"
          className="sm:col-span-2"
          error={errors.organization}
        />
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-navy/65">Organization Type</label>
          <select
            name="type"
            className="focus-ring w-full rounded-2xl border border-black/[0.08] bg-offwhite px-4 py-3 text-sm text-ink"
          >
            <option>Nonprofit / Charity</option>
            <option>Church / Faith Organization</option>
            <option>Private / Charter School</option>
            <option>Other Mission-Driven Organization</option>
          </select>
        </div>
        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@example.org"
          className="sm:col-span-2"
          error={errors.email}
        />
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-navy/65">Biggest Operational Challenge</label>
          <textarea
            name="challenge"
            className={`focus-ring min-h-36 w-full resize-y rounded-2xl border bg-offwhite px-4 py-3 text-sm text-ink ${
              errors.challenge ? "border-red-400" : "border-black/[0.08]"
            }`}
            placeholder="Tell us where your team spends the most time on repetitive tasks..."
          />
          {errors.challenge && <p className="mt-1.5 text-xs text-red-500">{errors.challenge}</p>}
        </div>
      </div>
      <button
        type="submit"
        className="focus-ring mt-6 w-full rounded-full bg-navy px-6 py-3.5 text-[0.9375rem] font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy2 hover:shadow-md"
      >
        Request Discovery Call
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, className = "", error }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-navy/65">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`focus-ring w-full rounded-2xl border bg-offwhite px-4 py-3 text-sm text-ink ${
          error ? "border-red-400" : "border-black/[0.08]"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
