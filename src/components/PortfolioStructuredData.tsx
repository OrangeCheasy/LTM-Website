import { siteIdentity } from "@/data/site";
import { socialLinks } from "@/data/social";

const SITE_URL = "https://liamthemo.com";

export default function PortfolioStructuredData() {
  const sameAs = socialLinks.filter((link) => link.external).map((link) => link.href);

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: siteIdentity.name,
      url: SITE_URL,
      jobTitle: siteIdentity.title,
      homeLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Calgary",
          addressRegion: "Alberta",
          addressCountry: "CA",
        },
      },
      sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${siteIdentity.name} — ${siteIdentity.title}`,
      inLanguage: "en-CA",
      author: { "@id": `${SITE_URL}/#person` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
