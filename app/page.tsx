import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ApplicationTool from "@/components/ApplicationTool";
import AboutSection from "@/components/AboutSection";
import TechPartners from "@/components/TechPartners";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Greenwatt Global Ventures – Advanced Electrical Testing Solutions",
  description:
    "Greenwatt provides innovative technology-driven solutions for power, energy and telecom sectors in India. Thermal imaging, solar PV testing, relay test kits, CT/PT analyzers and more.",
  alternates: { canonical: "https://greenwatt.vercel.app" },
  openGraph: {
    url: "https://greenwatt.vercel.app",
    title: "Greenwatt Global Ventures – Advanced Electrical Testing Solutions",
    description:
      "Innovative technology-driven solutions for power, energy and telecom sectors in India.",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <ApplicationTool />
        <AboutSection />
        <TechPartners />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
