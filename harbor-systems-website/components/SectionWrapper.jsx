export default function SectionWrapper({
  eyebrow,
  title,
  description,
  children,
  dark = false,
  white = false,
  centered = true,
  className = ""
}) {
  const sectionClass = dark ? "section-dark" : white ? "section-white" : "section-light";

  return (
    <section className={`${sectionClass} px-5 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className={centered ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}>
            {eyebrow && (
              <p className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-gold" : "text-navy2/70"}`}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={`font-display text-3xl font-semibold leading-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>
                {title}
              </h2>
            )}
            <div className={centered ? "gold-line mx-auto mt-5" : "gold-line mt-5"} />
            {description && (
              <p className={`mt-6 text-base leading-8 sm:text-lg ${dark ? "text-white/70" : "text-muted"}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
