import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Projects — LiamTheMo";

export default async function Image() {
  return renderOgImage({
    title: "Projects",
    description:
      "Software, games, automation, and technical projects — the problem, what was built, and the evidence available for the result.",
  });
}
