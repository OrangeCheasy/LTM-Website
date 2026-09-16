import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteIdentity } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liamthemo.com"),
  title: {
    default: `${siteIdentity.name} — ${siteIdentity.title}`,
    template: `%s | ${siteIdentity.name}`,
  },
  description:
    "Personal software developer portfolio featuring web applications, games, automation, tooling, experience, and technical projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-[var(--layout-gutter)] focus:z-[60] focus:rounded-[var(--radius-control)] focus:border focus:border-accent focus:bg-accent focus:px-4 focus:py-2 focus:text-metadata focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 scroll-mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
