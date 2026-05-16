export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-offwhite px-5">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-navy/15 border-t-gold" aria-label="Loading page" />
    </div>
  );
}
