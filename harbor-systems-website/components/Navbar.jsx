"use client";

import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact",  label: "Contact" },
  { href: "/demo",     label: "AI Demo" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/[0.06] bg-white/95 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-white/80 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
            <BrandLogo size="md" priority alt="Harbor Systems" />
          </div>
          <span className="font-display text-[1.05rem] font-semibold tracking-[0.07em] text-navy">
            Harbor Systems
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-navy text-white"
                    : "text-ink/65 hover:bg-navy/[0.06] hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="focus-ring ml-4 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy2 hover:shadow-md"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white text-navy transition-all duration-200 hover:bg-offwhite lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/[0.06] bg-white px-5 pb-6 pt-3 shadow-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors duration-150 ${
                  pathname === link.href
                    ? "bg-navy text-white"
                    : "text-ink hover:bg-offwhite"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-2xl bg-gold px-4 py-3 text-center font-bold text-navy"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
