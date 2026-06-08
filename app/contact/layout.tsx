import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Greenwatt Global Ventures. Reach our sales, support, or demo teams for electrical testing equipment, thermal imaging, solar PV testers, and more.",
  alternates: { canonical: "https://greenwatt.vercel.app/contact" },
  openGraph: {
    url: "https://greenwatt.vercel.app/contact",
    title: "Contact Greenwatt Global Ventures",
    description:
      "Reach our sales, support, or demo teams for electrical testing equipment enquiries.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
