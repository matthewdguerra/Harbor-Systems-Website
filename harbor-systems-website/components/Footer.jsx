import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";

const company = [["About", "/about"], ["Services", "/services"], ["AI Demo", "/demo"], ["Contact", "/contact"]];
const solutions = [["Operational Audits", "/services"], ["Workflow Automation", "/services"], ["AI Assistants", "/demo"], ["Leadership Dashboards", "/services"]];
const start = [["Book Consultation", "/contact"], ["Home", "/"], ["Services", "/services"]];

export default function Footer() {
  return (
    <footer className="section-dark px-5 pb-8 pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="group mb-5 flex items-center gap-3">
              <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
                <BrandLogo size="md" alt="Harbor Systems" />
              </div>
              <span className="font-display text-[1.05rem] font-semibold tracking-[0.07em] text-white">
                Harbor Systems
              </span>
            </Link>
            <p className="max-w-[28ch] text-sm leading-7 text-white/55">
              Responsible AI, automation, and operational intelligence for mission-driven organizations that want more time for what matters.
            </p>
            <div className="mt-6 text-xs text-white/35">
              Palm Beach County, Florida
            </div>
          </div>

          <FooterColumn title="Company" links={company} />
          <FooterColumn title="Solutions" links={solutions} />
          <FooterColumn title="Get Started" links={start} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Harbor Systems LLC. All rights reserved.</span>
          <span>Built for those who serve others.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold/80">{title}</h3>
      <div className="space-y-3">
        {links.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="block text-sm text-white/55 transition-colors duration-150 hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
