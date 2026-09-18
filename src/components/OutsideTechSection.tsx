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
  const dragStateRef = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const track = trackRef.current;
    if (!track) return;

    dragStateRef.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
    };
    setIsDragging(true);
    track.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !dragStateRef.current.active) return;

    const track = trackRef.current;
    if (!track) return;

    const deltaX = event.clientX - dragStateRef.current.startX;
    track.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;
  }

  function endPointerDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !dragStateRef.current.active) return;

    dragStateRef.current.active = false;
    setIsDragging(false);

    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    const nearestIndex = Math.round(track.scrollLeft / track.clientWidth);
    scrollToPhoto(nearestIndex);
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
            title="Life beyond the screen"
            description="Outside of software, I spend my time cooking, training at the gym, exploring new places, fishing, trying good food, and making memories with my girlfriend and friends."
          />
          <p className="mt-4 max-w-xl text-small text-text-muted">
            A few snapshots from the people, places, food, and experiences that make up life outside the projects and code.
          </p>
        </div>

        <div className="min-w-0">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-metadata text-text-muted" aria-live="polite">
              Photo {activeIndex + 1} of {outsideTechPhotos.length}
            </p>
            <p className="hidden text-metadata text-text-muted sm:block">
              Swipe or drag to explore
            </p>
          </div>

          <div className="group relative">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={endPointerDrag}
              onPointerCancel={endPointerDrag}
              tabIndex={0}
              role="region"
              aria-label="Outside the Tech photo gallery"
              className={`no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl border border-border bg-surface-2 select-none ${isDragging ? "cursor-grabbing snap-none" : "cursor-grab"}`}
            >
            {outsideTechPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] w-full shrink-0 snap-center">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  draggable={false}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="pointer-events-none object-cover"
                />
              </div>
            ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToPhoto(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Show previous Outside the Tech photo"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-black/40 focus-visible:opacity-100 group-hover:opacity-100 disabled:pointer-events-none disabled:opacity-0"
            >
              <ChevronIcon direction="left" />
            </button>

            <button
              type="button"
              onClick={() => scrollToPhoto(activeIndex + 1)}
              disabled={activeIndex === outsideTechPhotos.length - 1}
              aria-label="Show next Outside the Tech photo"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-black/40 focus-visible:opacity-100 group-hover:opacity-100 disabled:pointer-events-none disabled:opacity-0"
            >
              <ChevronIcon direction="right" />
            </button>
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
