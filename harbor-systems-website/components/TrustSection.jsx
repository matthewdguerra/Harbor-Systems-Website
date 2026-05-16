import SectionWrapper from "./SectionWrapper";
import { Handshake, LockKeyhole, Map, Settings2, ShieldCheck, Users } from "lucide-react";

const items = [
  ["Privacy-first architecture", "Your data stays yours. Systems are designed around private context, secure access, and clear governance.", LockKeyhole],
  ["AI supports people", "Automation handles repetitive routing and reporting so staff can spend more time on judgment, care, and relationships.", Users],
  ["Mission-aligned implementation", "Every workflow is mapped around your values, terminology, roles, and operating realities.", Map],
  ["Plain-language delivery", "No technical team required. We build understandable systems and train your staff to use them confidently.", Handshake],
  ["Transparent processes", "No black boxes. Leaders know what each automation does, what data it touches, and where humans stay in control.", ShieldCheck],
  ["Ongoing optimization", "Monthly review, monitoring, and refinement keep the system useful as your organization changes.", Settings2]
];

export default function TrustSection() {
  return (
    <SectionWrapper
      eyebrow="Ethics First"
      title="AI You Can Trust"
      description="Your caution around AI is wisdom. Harbor Systems is built for organizations that need reliability, clarity, and human-centered stewardship before novelty."
      white
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([title, text, Icon]) => (
          <div key={title} className="premium-card">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-navy">
              <Icon size={23} />
            </div>
            <h3 className="text-lg font-bold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
