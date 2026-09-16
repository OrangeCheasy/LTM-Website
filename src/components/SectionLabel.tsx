/* Compatibility helper for legacy sections. New work should prefer SectionHeader. */
export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-metadata font-semibold tracking-wide text-accent">
      {children}
    </p>
  );
}
