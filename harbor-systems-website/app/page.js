import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import ServicesGrid from "@/components/ServicesGrid";
import TrustSection from "@/components/TrustSection";
import { ArrowRight, Building2, Church, GraduationCap } from "lucide-react";
import Link from "next/link";

const audiences = [
  {
    title: "Nonprofits",
    icon: Building2,
    text: "Reduce reporting drag, connect donor and program data, and create impact visibility for leadership and supporters.",
    points: ["Donor follow-up workflows", "Impact reporting automation", "Volunteer coordination"]
  },
  {
    title: "Churches & Faith Organizations",
    icon: Church,
    text: "Streamline visitor follow-up, volunteer scheduling, ministry communication, giving insights, and internal operations.",
    points: ["Planning Center workflows", "Member engagement", "Leadership dashboards"]
  },
  {
    title: "Schools & Academies",
    icon: GraduationCap,
    text: "Support admissions, advancement, compliance, communications, and operations without disrupting existing school systems.",
    points: ["Administrative automation", "Role-based portals", "Operational alerts"]
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />

      <SectionWrapper
        eyebrow="Who We Help"
        title="Built for organizations that serve others"
        description="Harbor Systems focuses on churches, faith-based nonprofits, Christian schools, and community institutions with small teams and growing operational complexity."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {audiences.map(({ title, icon: Icon, text, points }) => (
            <div key={title} className="premium-card">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/[0.14] text-navy">
                <Icon size={21} />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
              <div className="mt-5 space-y-2 border-t border-black/[0.05] pt-5">
                {points.map((point) => (
                  <p key={point} className="flex items-center gap-2.5 text-sm font-medium text-navy/70">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Solutions"
        title="Operational transformation, simplified"
        description="Harbor Systems starts with what you already use, connects what is fragmented, and adds AI only where it clearly improves capacity, clarity, or stewardship."
        white
      >
        <ServicesGrid />
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy transition-all duration-150 hover:text-navy2"
          >
            View all services <ArrowRight size={15} />
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Process"
        title="A calm path from scattered operations to clear systems"
        description="A practical delivery model: audit first, implement carefully, then optimize through long-term partnership."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["01", "Operational Intelligence Audit", "Map workflows, software, reporting habits, manual tasks, bottlenecks, and automation opportunities across your organization."],
            ["02", "System Implementation", "Build dashboards, data pipelines, AI assistants, notifications, and workflow automation around your existing tools."],
            ["03", "Ongoing Optimization", "Monitor reliability, refine prompts, improve reports, and meet regularly so the system stays aligned with your mission."]
          ].map(([number, title, text]) => (
            <div key={title} className="premium-card">
              <p className="font-display text-3xl font-semibold text-gold/70">{number}</p>
              <h3 className="mt-5 text-[1.0625rem] font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
