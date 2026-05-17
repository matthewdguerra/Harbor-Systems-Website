import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-dark px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-[42rem]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold/80">
              Start with clarity
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-white sm:text-4xl">
              Find where your team is losing time. Build systems that give it back.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/55">
              No technical knowledge required. The first step is a focused conversation about your workflows, tools, and biggest operational frustrations.
            </p>
          </div>
          <Link
            href="/contact"
            className="focus-ring inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-[0.9375rem] font-bold text-navy shadow-premium transition-all duration-200 hover:-translate-y-1 hover:bg-gold-light hover:shadow-xl"
          >
            Begin the Conversation <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
