export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-offwhite">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-navy/10 border-t-gold" aria-label="Loading" />
        <p className="text-sm text-muted">Loading&hellip;</p>
      </div>
    </div>
  );
}
