import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/SectionWrapper";
import { CalendarCheck, ClipboardList, Compass } from "lucide-react";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <section className="section-dark px-5 pb-24 pt-[120px] lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold/80">Contact</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[3.25rem]">
              Begin with a clear discovery conversation.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              No technical knowledge required. The first step is simply understanding where your team is losing time, what tools you already use, and what clarity would help leadership most.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <SectionWrapper eyebrow="What to Expect" title="A practical, no-jargon first step" white>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [ClipboardList, "Discovery",    "Share your organization's workflows, tools, recurring reports, and biggest administrative frustrations."],
            [Compass,       "Recommendation", "Receive a clear view of automation opportunities, dashboard needs, and where AI could responsibly help."],
            [CalendarCheck, "Roadmap",      "Leave with a practical next-step path — whether that is a small workflow fix or a larger operational intelligence build."]
          ].map(([Icon, title, text]) => (
            <div key={title} className="premium-card">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/[0.14] text-navy">
                <Icon size={21} />
              </div>
              <h3 className="text-[1.0625rem] font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
