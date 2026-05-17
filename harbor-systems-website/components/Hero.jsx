"use client";

import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Users } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Privacy-first AI" },
  { icon: Zap,         label: "Integration over replacement" },
  { icon: Users,       label: "Built for non-technical teams" }
];

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] overflow-hidden bg-white pt-[72px]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 mesh-bg opacity-60" />

      {/* Glow blobs */}
      <div className="absolute left-1/2 top-0 h-[38rem] w-[56rem] -translate-x-1/2 rounded-full bg-gold/[0.12] blur-[96px]" />
      <div className="absolute right-[-8rem] top-[30%] h-[28rem] w-[28rem] rounded-full bg-navy/[0.07] blur-[80px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24 lg:px-8">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-white/90 px-4 py-2 text-sm font-semibold text-navy shadow-soft">
            <BrandLogo size="xs" alt="" />
            <span>Responsible AI for mission-driven teams</span>
          </div>

          <h1 className="max-w-[17ch] font-display text-[2.625rem] font-semibold leading-[1.1] tracking-[-0.01em] text-navy sm:text-[3.25rem] lg:text-[3.75rem]">
            Operational intelligence that protects your mission.
          </h1>

          <p className="mt-6 max-w-[50ch] text-lg leading-[1.75] text-muted sm:text-xl">
            Harbor Systems helps churches, nonprofits, and schools unify scattered tools, automate repetitive work, and give leaders clear insight — without replacing the human judgment that makes the mission matter.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-[0.9375rem] font-bold text-white shadow-premium transition-all duration-200 hover:-translate-y-1 hover:bg-navy2 hover:shadow-xl"
            >
              Book a Consultation <ArrowRight size={17} />
            </Link>
            <Link
              href="/services"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-3.5 text-[0.9375rem] font-semibold text-navy shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold/60"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-9 flex flex-wrap gap-2.5">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 text-sm font-medium text-ink/70"
              >
                <Icon size={14} className="text-gold" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right column — brand display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow behind card */}
          <div className="absolute inset-10 rounded-[2.5rem] bg-gold/20 blur-3xl" />

          {/* Main card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-navy shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_12%,rgba(200,168,75,0.22),transparent_56%)]" />

            {/* Lighthouse logo */}
            <div className="relative flex items-center justify-center p-10 pb-6">
              <BrandLogo size="lg" priority className="h-auto w-full max-w-[18rem] object-contain drop-shadow-2xl" />
            </div>

            {/* Status panel */}
            <div className="relative mx-5 mb-5 rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                  <span className="text-sm text-white/70">Operational clarity</span>
                </div>
                <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                  Live system
                </span>
              </div>
              <div className="mb-3 h-1.5 rounded-full bg-white/10">
                <div className="h-1.5 w-[78%] rounded-full bg-gold transition-all duration-500" />
              </div>
              <p className="text-sm leading-6 text-white/60">
                One connected layer for data, workflows, dashboards, and AI-assisted insight.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
