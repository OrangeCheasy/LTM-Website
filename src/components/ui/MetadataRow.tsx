import { cn } from "@/lib/cn";

export interface MetadataItem {
  label: string;
  value: string;
}

interface MetadataRowProps {
  items: readonly MetadataItem[];
  className?: string;
}

export default function MetadataRow({ items, className }: MetadataRowProps) {
  return (
    <dl className={cn("flex flex-wrap gap-x-6 gap-y-2", className)}>
      {items.map((item) => (
        <div key={`${item.label}-${item.value}`} className="flex items-baseline gap-2">
          <dt className="text-metadata font-medium text-text-muted">{item.label}</dt>
          <dd className="text-metadata text-text-secondary">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
