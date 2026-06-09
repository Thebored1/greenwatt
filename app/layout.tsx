import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const SITE_URL = "https://greenwatt.vercel.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Greenwatt Global Ventures – Advanced Electrical Testing Solutions",
    template: "%s | Greenwatt Global Ventures",
  },
  description:
    "Greenwatt provides innovative technology-driven solutions for power, energy and telecom sectors. Thermal imaging, solar PV testing, relay test kits, CT/PT analyzers and more.",
  keywords: [
    "electrical testing solutions",
    "thermal imaging",
    "solar PV testing",
    "relay testing",
    "CT PT analyzer",
    "power sector",
    "energy testing equipment",
    "Greenwatt",
    "India",
  ],
  authors: [{ name: "Greenwatt Global Ventures PVT. LTD." }],
  creator: "Greenwatt Global Ventures PVT. LTD.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Greenwatt Global Ventures",
    title: "Greenwatt Global Ventures – Advanced Electrical Testing Solutions",
    description:
      "Innovative technology-driven solutions for power, energy and telecom sectors — thermal imaging, solar PV testing, relay test kits, CT/PT analyzers.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Greenwatt Global Ventures" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenwatt Global Ventures – Advanced Electrical Testing Solutions",
    description:
      "Innovative technology-driven solutions for power, energy and telecom sectors.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Greenwatt Global Ventures PVT. LTD.",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/greenwatt-logo.png` },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-882-639-0074",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Palam Vihar",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122017",
        addressCountry: "IN",
      },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Greenwatt Global Ventures PVT. LTD.",
      url: SITE_URL,
      telephone: "+91-882-639-0074",
      email: "sales@greenwatt.co.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Palam Vihar",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122017",
        addressCountry: "IN",
      },
      openingHours: "Mo-Fr 09:30-18:30",
      priceRange: "$$",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${roboto.variable}`}>{children}</body>
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6a27f12f8705f01c35098fc3/1jqm0c8nq';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
    </html>
  );
}
