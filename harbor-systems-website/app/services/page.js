import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-dark px-5 pb-24 pt-[120px] lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold/80">Services</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[3.25rem]">
            AI systems that actually fit how your organization works.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/60">
            From operational audits to connected dashboards and private AI assistants, each engagement is designed around your existing tools, staff capacity, and mission priorities.
          </p>
        </div>
      </section>

      <SectionWrapper
        eyebrow="Capabilities"
        title="A complete operational intelligence layer"
        description="The system connects data, automates repetitive work, gives leaders real-time visibility, and helps staff retrieve answers faster — all without replacing existing tools."
        white
      >
        <ServicesGrid />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Delivery Model"
        title="Engagements are structured in three stages"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Audit", "A one-to-two week discovery phase that maps systems, data movement, reporting needs, and automation opportunities across your organization."],
            ["Implementation", "A focused build phase for workflows, dashboards, integrations, AI assistants, role-based access, reporting automation, and staff training."],
            ["Retainer", "Ongoing support for maintenance, monitoring, optimization, prompt refinement, monthly reporting, and leadership review."]
          ].map(([title, text]) => (
            <div key={title} className="premium-card">
              <h3 className="font-display text-xl font-semibold text-navy">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Technology"
        title="Proven tools, carefully connected"
        description="Harbor Systems works with CRMs, donor databases, accounting tools, attendance systems, email platforms, spreadsheets, scheduling systems, form tools, and document repositories. The goal is a single operational flow — not another silo."
        dark
      />

      <CTASection />
    </>
  );
}
