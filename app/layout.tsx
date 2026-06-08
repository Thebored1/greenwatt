import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Greenwatt Global Ventures – Advanced Electrical Testing Solutions",
  description:
    "Greenwatt provides innovative technology-driven solutions for power, energy and telecom sectors. Thermal imaging, solar PV testing, relay test kits, CT/PT analyzers and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
