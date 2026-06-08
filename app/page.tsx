import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ApplicationTool from "@/components/ApplicationTool";
import AboutSection from "@/components/AboutSection";
import TechPartners from "@/components/TechPartners";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
