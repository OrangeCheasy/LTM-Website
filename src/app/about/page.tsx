import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionLabel from "@/components/SectionLabel";

/*
  About remains a compact trust page. Phase 6 gives the existing personal
  interest content a deliberate, linkable home at /about#outside-tech without
  moving hobby content onto the professional homepage.
*/

export const metadata: Metadata = {
  title: "About",
  description:
    "A computer science student in Calgary who builds automation, spreadsheets and websites, and fixes computers in person — how fast I reply and how I work.",
  openGraph: {
    type: "website",
    title: "About",
    description:
      "A computer science student in Calgary who builds automation, spreadsheets and websites, and fixes computers in person.",
  },
};

const facts: {
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "I answer quickly.",
    description:
      "Usually the same day. If a day passes with no reply, send it again rather than assuming the answer is no.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.6" />
        <path d="M12 7.5V12l3.2 1.9" />
      </>
    ),
  },
  {
    title: "I am in Calgary, Alberta.",
    description:
      "Anything needing hands on the hardware — repairs, printers, a setup in your office — happens in person around the city. Automation, spreadsheets, websites and Roblox work are remote, and for those it does not matter where you are.",
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.8" r="2.4" />
      </>
    ),
  },
  {
    title: "I am studying full time.",
    description:
      "So I take on work I can finish properly rather than as much of it as possible. If a deadline is not going to work, you will hear that from me before you commit to anything, not afterwards.",
    icon: (
      <>
        <path d="M12 6.5c-1.6-1.1-3.6-1.6-5.5-1.4a1 1 0 0 0-.9 1v11.4a1 1 0 0 0 1.1 1c1.8-.2 3.7.3 5.3 1.4 1.6-1.1 3.5-1.6 5.3-1.4a1 1 0 0 0 1.1-1V6.1a1 1 0 0 0-.9-1c-1.9-.2-3.9.3-5.5 1.4Z" />
        <path d="M12 6.5v13" />
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8">
          <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <SectionLabel>About</SectionLabel>
              <h1 className="mt-2 max-w-[20ch] text-h1 text-text">
                Who you would be hiring
              </h1>
              <p className="mt-4 max-w-[56ch] text-body text-text-muted">
                My name is Liam. I have been building and fixing computers in
                person since I was a kid, and now I am also a computer science
                student in Calgary getting paid to do more of the same —
                scripts that kill repetitive work, spreadsheets that stop
                needing to be babysat, sites, and hands-on repairs for people
                who would rather not deal with it themselves.
              </p>
            </div>
            <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-2xl border border-border sm:w-56">
              <Image
                src="/about/fish.webp"
                alt="Liam smiling and holding a small fish he caught, with grassy hills and a blue sky behind him."
                fill
                sizes="(min-width: 640px) 14rem, 10rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
        <div className="border-t border-border pt-8">
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
            {facts.map((fact) => (
              <div key={fact.title} className="sm:px-6 sm:first:pl-0">
                <div className="flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-accent"
                  >
                    {fact.icon}
                  </svg>
                  <h2 className="text-h3 text-text">{fact.title}</h2>
                </div>
                <p className="mt-3 text-small text-text-muted">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="outside-tech"
          className="mt-10 scroll-mt-24 border-t border-border pt-8"
        >
          <SectionLabel>Outside the Tech</SectionLabel>
          <h2 className="mt-2 text-h2 text-text">Life away from the keyboard</h2>

          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[42ch] text-small text-text-muted">
              When I am away from a computer I am powerlifting, out fishing,
              hiking or camping somewhere in Alberta, or out chasing good food.
            </p>
            <div className="grid shrink-0 grid-cols-2 gap-3 sm:w-64">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
                <Image
                  src="/about/gym.webp"
                  alt="Liam at the gym on a bench press with a training partner."
                  fill
                  sizes="8rem"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
                <Image
                  src="/about/food.webp"
                  alt="Liam adding fresh herbs to a bowl of pho at a restaurant."
                  fill
                  sizes="8rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection secondary={{ href: "/projects", label: "See the work" }} />
    </>
  );
}
