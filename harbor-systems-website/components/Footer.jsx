import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-dark px-5 pb-8 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo size="md" />
            <span className="font-display text-lg font-semibold tracking-[0.08em] text-white">Harbor Systems</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Responsible AI, automation, and operational intelligence systems for organizations that want more time for mission-focused work.
          </p>
        </div>
        <FooterColumn title="Company" links={[["About", "/about"], ["Services", "/services"], ["AI Demo", "/demo"]]} />
        <FooterColumn title="Solutions" links={[["Operational Audits", "/services"], ["AI Assistants", "/demo"], ["Dashboards", "/services"]]} />
        <FooterColumn title="Start" links={[["Book Consultation", "/contact"], ["Contact", "/contact"], ["Home", "/"]]} />
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Harbor Systems LLC. All rights reserved.</span>
        <span>Palm Beach County, Florida</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">{title}</h3>
      <div className="space-y-3">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="block text-sm text-white/70 transition hover:text-gold">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
