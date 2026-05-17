import SectionWrapper from "./SectionWrapper";
import { Handshake, LockKeyhole, Map, Settings2, ShieldCheck, Users } from "lucide-react";

const items = [
  [LockKeyhole, "Privacy-first architecture",    "Your data stays yours. Systems are designed around private context, secure access, and clear governance."],
  [Users,       "AI that supports people",        "Automation handles repetitive routing and reporting so staff can spend more time on judgment, care, and relationships."],
  [Map,         "Mission-aligned implementation", "Every workflow is mapped around your values, terminology, roles, and operating realities."],
  [Handshake,   "Plain-language delivery",        "No technical team required. We build understandable systems and train your staff to use them confidently."],
  [ShieldCheck, "Transparent processes",          "No black boxes. Leaders know what each automation does, what data it touches, and where humans stay in control."],
  [Settings2,   "Ongoing optimization",           "Monthly review, monitoring, and refinement keep the system useful as your organization grows and changes."]
];

export default function TrustSection() {
  return (
    <SectionWrapper
      eyebrow="Ethics First"
      title="AI you can trust and explain to your board"
      description="Your caution around AI is wisdom. Harbor Systems is built for organizations that need reliability, clarity, and human-centered stewardship before novelty."
      white
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([Icon, title, text]) => (
          <div key={title} className="premium-card group">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/[0.14] text-navy transition-all duration-300 group-hover:bg-gold/25">
              <Icon size={21} />
            </div>
            <h3 className="text-[1.0625rem] font-bold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
