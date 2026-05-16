"use client";

import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-white pt-28">
      <div className="absolute inset-0 mesh-bg opacity-80" />
      <div className="absolute left-1/2 top-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute right-[-10rem] top-40 h-[28rem] w-[28rem] rounded-full bg-navy/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/90 px-4 py-2 text-sm font-semibold text-navy shadow-soft">
            <BrandLogo size="sm" alt="" />
            Responsible AI for mission-driven teams
          </div>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-6xl">
            Operational intelligence that protects your mission.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Harbor Systems helps churches, nonprofits, and schools unify scattered tools, automate repetitive work, and give leaders clear insight without replacing the human judgment that makes the mission matter.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 font-bold text-white shadow-premium transition hover:-translate-y-1 hover:bg-navy2">
              Book a Consultation <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="focus-ring inline-flex items-center justify-center rounded-full border border-navy/12 bg-white px-6 py-3.5 font-bold text-navy shadow-soft transition hover:-translate-y-1 hover:border-gold/70">
              Explore Solutions
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-navy/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2"><ShieldCheck size={16} /> Privacy-first</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2">Integration over replacement</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-offwhite px-4 py-2">Built for non-technical teams</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-8 rounded-[2rem] bg-gold/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-navy p-6 shadow-premium">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(228,196,107,0.24),transparent_28rem)]" />
            <BrandLogo size="lg" priority className="relative mx-auto h-auto w-full max-w-[30rem] drop-shadow-2xl" />
            <div className="relative mt-4 grid gap-3 rounded-3xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60">Operational clarity</span>
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">Live system</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 w-4/5 rounded-full bg-gold" />
              </div>
              <p className="text-sm leading-6 text-white/70">One connected layer for data, workflows, dashboards, and AI-assisted insight.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
