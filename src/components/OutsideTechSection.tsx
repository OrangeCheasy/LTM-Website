"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui";

const outsideTechPhotos = [
  {
    src: "/homepage/outside-tech/photo-01.avif",
    alt: "Liam smiling and holding a small fish he caught, with grassy hills and a blue sky behind him.",
  },
  {
    src: "/homepage/outside-tech/photo-02.avif",
    alt: "Liam at the gym on a bench press with a training partner.",
  },
  {
    src: "/homepage/outside-tech/photo-03.avif",
    alt: "Liam adding fresh herbs to a bowl of pho at a restaurant.",
  },
  {
    src: "/homepage/outside-tech/photo-04.avif",
    alt: "A moment from Liam's life outside technology.",
  },
  {
    src: "/homepage/outside-tech/photo-05.avif",
    alt: "A moment from Liam's life outside technology.",
  },
  {
    src: "/homepage/outside-tech/photo-06.avif",
    alt: "A moment from Liam's life outside technology.",
  },
  {
    src: "/homepage/outside-tech/photo-07.avif",
    alt: "A moment from Liam's life outside technology.",
  },
  {
    src: "/homepage/outside-tech/photo-08.avif",
    alt: "A moment from Liam's life outside technology.",
  },
  {
    src: "/homepage/outside-tech/photo-09.avif",
    alt: "A moment from Liam's life outside technology.",
  },
  {
    src: "/homepage/outside-tech/photo-10.avif",
    alt: "A moment from Liam's life outside technology.",
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

export default function OutsideTechSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToPhoto(index: number) {
    const track = trackRef.current;
    if (!track) return;

    const nextIndex = Math.max(0, Math.min(index, outsideTechPhotos.length - 1));
    track.scrollTo({ left: nextIndex * track.clientWidth, behavior: "smooth" });
    setActiveIndex(nextIndex);
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;

    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex(Math.max(0, Math.min(nextIndex, outsideTechPhotos.length - 1)));
  }

  return (
    <Section
      id="outside-tech"
      spacing="compact"
      aria-labelledby="outside-tech-heading"
      className="scroll-mt-24 border-t border-border/70"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-12">
        <div>
          <SectionHeader
            id="outside-tech-heading"
            eyebrow="Outside the Tech"
            title="Life away from the keyboard"
            description="When I am away from a computer I am powerlifting, out fishing, hiking or camping somewhere in Alberta, or out chasing good food."
          />
          <p className="mt-4 max-w-xl text-small text-text-muted">
            Swipe through a few moments from outside the projects and code.
          </p>
        </div>

        <div className="min-w-0">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-metadata text-text-muted" aria-live="polite">
              Photo {activeIndex + 1} of {outsideTechPhotos.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToPhoto(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Show previous Outside the Tech photo"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-text-muted hover:text-text disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() => scrollToPhoto(activeIndex + 1)}
                disabled={activeIndex === outsideTechPhotos.length - 1}
                aria-label="Show next Outside the Tech photo"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-accent bg-accent text-bg transition-colors hover:border-accent-hover hover:bg-accent-hover disabled:cursor-not-allowed disabled:border-border disabled:bg-surface-2 disabled:text-text-muted disabled:opacity-50"
              >
                <ChevronIcon direction="right" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            tabIndex={0}
            role="region"
            aria-label="Outside the Tech photo gallery"
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl border border-border bg-surface-2"
          >
            {outsideTechPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] w-full shrink-0 snap-center">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2" aria-label="Choose a gallery photo">
            {outsideTechPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => scrollToPhoto(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-6 bg-accent" : "w-2 bg-border hover:bg-text-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
