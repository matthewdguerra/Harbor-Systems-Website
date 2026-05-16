"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="premium-card text-center">
        <p className="font-display text-2xl font-semibold text-navy">Thank you.</p>
        <p className="mt-4 text-muted">Your message is ready for follow-up. Harbor Systems will use the details to prepare a focused discovery conversation.</p>
      </div>
    );
  }

  return (
    <form
      className="premium-card"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First Name" name="firstName" placeholder="Jane" />
        <Field label="Last Name" name="lastName" placeholder="Smith" />
        <Field label="Organization Name" name="organization" placeholder="Hope Community Church" className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-bold text-navy/70">Organization Type</label>
          <select className="focus-ring w-full rounded-2xl border border-navy/10 bg-offwhite px-4 py-3 text-ink">
            <option>Nonprofit / Charity</option>
            <option>Church / Faith Organization</option>
            <option>Private / Charter School</option>
            <option>Other Mission-Driven Organization</option>
          </select>
        </div>
        <Field label="Email Address" name="email" type="email" placeholder="jane@example.org" className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-bold text-navy/70">Biggest Operational Challenge</label>
          <textarea
            className="focus-ring min-h-36 w-full resize-y rounded-2xl border border-navy/10 bg-offwhite px-4 py-3 text-ink"
            placeholder="Tell us where your team spends the most time on repetitive tasks..."
          />
        </div>
      </div>
      <button className="focus-ring mt-6 w-full rounded-full bg-navy px-6 py-3.5 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-navy2">
        Request Discovery Call
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-navy/70">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="focus-ring w-full rounded-2xl border border-navy/10 bg-offwhite px-4 py-3 text-ink" />
    </div>
  );
}
