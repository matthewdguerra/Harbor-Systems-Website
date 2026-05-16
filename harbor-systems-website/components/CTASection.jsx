import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-dark px-5 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">Start with clarity</p>
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Find the places where your team is losing time, then build systems that give it back.
          </h2>
        </div>
        <Link href="/contact" className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-bold text-navy shadow-premium transition hover:-translate-y-1 hover:bg-white">
          Begin the Conversation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
