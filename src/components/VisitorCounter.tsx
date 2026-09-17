"use client";

import { useEffect, useState } from "react";

interface VisitorResponse {
  count: number | null;
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null | undefined>(undefined);

  useEffect(() => {
    let active = true;

    async function recordVisit() {
      try {
        const response = await fetch("/api/visitors", {
          method: "POST",
          credentials: "same-origin",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Visitor counter responded ${response.status}`);
        }

        const data = (await response.json()) as VisitorResponse;
        if (active) {
          setCount(typeof data.count === "number" ? data.count : null);
        }
      } catch {
        if (active) {
          setCount(null);
        }
      }
    }

    void recordVisit();

    return () => {
      active = false;
    };
  }, []);

  const label =
    count === undefined
      ? "Visitor count loading"
      : count === null
        ? "Visitor count unavailable"
        : `Visited by ${count.toLocaleString()} ${count === 1 ? "person" : "people"}`;

  return (
    <p
      className="text-caption text-text-muted"
      aria-live="polite"
      title="Anonymous browser-based approximation. No personal visitor identifiers are stored."
    >
      {label}
    </p>
  );
}
