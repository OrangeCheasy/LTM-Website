import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}
