import { profileContent } from "@/data/profile";
import { siteIdentity } from "@/data/site";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = `${siteIdentity.name} — ${siteIdentity.title}`;

export default async function Image() {
  return renderOgImage({
    title: `${siteIdentity.name} — ${siteIdentity.title}`,
    description: profileContent.intro,
  });
}
