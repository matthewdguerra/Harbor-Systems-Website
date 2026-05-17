import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="section-dark px-5 pb-24 pt-[120px] lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold/80">About Harbor Systems</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[3.25rem]">
            Built around stewardship, simplicity, and operational clarity.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Harbor Systems LLC exists to help mission-driven organizations eliminate administrative overload, improve communication, and reclaim measurable time for work that serves people.
          </p>
        </div>
      </section>

      <SectionWrapper
        eyebrow="Mission"
        title="Responsible AI for good organizations"
        description="The mission is to empower faith-based and mission-driven organizations to run efficiently and sustainably through smart systems, automation, and AI that remains understandable to non-technical staff."
        white
      >
        <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-gold/25 bg-gold/[0.07] p-10 text-center">
          <p className="font-display text-2xl leading-relaxed text-navy">
            &ldquo;Technology is only worth implementing when it clearly serves human capacity, reduces burnout, or increases organizational effectiveness.&rdquo;
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Operating Philosophy"
        title="Three principles guide every build"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Simplicity over complexity", "Every system should be understandable, usable, and maintainable by the organization it serves — not just the people who built it."],
            ["Integration over replacement", "Harbor connects and enhances CRMs, donor systems, email platforms, spreadsheets, and school tools instead of forcing a rip-and-replace project."],
            ["Stewardship over novelty", "AI is introduced when it improves clarity, saves time, and keeps people in control. Novelty alone is never a reason to implement."]
          ].map(([title, text]) => (
            <div key={title} className="premium-card">
              <h3 className="text-[1.0625rem] font-bold text-navy">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Brand Story"
        title="Why the lighthouse"
        description="The Harbor name and lighthouse identity signal safety, guidance, reliability, and clear navigation — a fixed point of clarity in complex operational terrain. The systems-thinking and AI infrastructure focus is reflected in the precision of the mark itself."
        dark
      />

      <CTASection />
    </>
  );
}
