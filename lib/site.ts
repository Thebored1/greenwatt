import type { Metadata } from "next";

// Canonical public URL — used for metadata, sitemap, robots, and links in emails
export const SITE_URL = "https://greenwatt.vercel.app";

// A page that sets its own `openGraph` replaces the parent's entirely (including
// the generated app/opengraph-image), so spread these shared fields back in
export const sharedOpenGraph = {
  type: "website",
  locale: "en_IN",
  siteName: "Greenwatt Global Ventures",
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Greenwatt Global Ventures" }],
} satisfies Metadata["openGraph"];
