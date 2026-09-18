import { warmEdgeBloom } from "@/lib/glow";

/*
  The reusable lit top edge used by project-card surfaces. The geometry lives
  here so callers can provide the gradient profile without duplicating the
  positioning and shadow treatment.

  INSET BY THE CORNER RADIUS. rounded-2xl is a 16px radius, and both mockups
  light exactly the straight segment between the two corner arcs — measured on
  the services card as x=157..521 against corners at 162 and 517. The light
  stops where the edge stops being straight rather than bending around it.

  -top-px, AND THE CARD MUST NOT BE overflow-hidden. Both follow from the same
  thing: an absolutely positioned child is laid out against the padding box, so
  at top-0 this sits *below* the card's own 1px top border and a grey hairline
  gets drawn over the light (measured: rgb(42,38,38) directly above the
  orange). Pulling it up by that 1px puts it on the border row instead. Cards
  that clip their overflow also crop the bloom away above the line, so a card
  using this needs its rounded corners enforced somewhere else — on the cover
  image's own wrapper, in ProjectCard's case.

  Decorative, so aria-hidden, and pointer-events-none so it never intercepts a
  click meant for the card it sits on.
*/

export default function LitEdge({
  image,
  className = "",
}: {
  /** The gradient image used for the illuminated edge. */
  image: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute -top-px left-4 right-4 h-px ${className}`}
      style={{ backgroundImage: image, boxShadow: warmEdgeBloom() }}
    />
  );
}
