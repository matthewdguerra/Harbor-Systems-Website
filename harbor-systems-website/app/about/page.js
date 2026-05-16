import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="section-dark px-5 pb-20 pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">About Harbor Systems</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Built around stewardship, simplicity, and operational clarity.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
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
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-gold/30 bg-gold/10 p-8 text-center shadow-soft">
          <p className="font-display text-2xl leading-relaxed text-navy">
            Technology is only worth implementing when it clearly serves human capacity, reduces burnout, or increases organizational effectiveness.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Operating Philosophy"
        title="Three principles guide every build"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Simplicity over complexity", "Every system should be understandable, usable, and maintainable by the organization it serves."],
            ["Integration over replacement", "Harbor connects and enhances CRMs, donor systems, email platforms, spreadsheets, and school tools instead of forcing a rip-and-replace project."],
            ["Stewardship over novelty", "AI is introduced when it improves clarity, saves time, and keeps people in control."]
          ].map(([title, text]) => (
            <div key={title} className="premium-card">
              <h3 className="text-lg font-bold text-navy">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Brand Story"
        title="Why the lighthouse"
        description="The Harbor name and lighthouse identity signal safety, guidance, reliability, and clear navigation. The circuitry inside the mark reinforces the company's systems-thinking and AI infrastructure focus."
        dark
      />

      <CTASection />
    </>
  );
}
