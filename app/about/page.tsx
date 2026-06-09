import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us | Greenwatt Global Ventures",
  description: "Founded by engineers with deep roots in India's power sector, Green Watt brings world-class electrical testing technology to Indian organisations.",
};

const partners = [
  { name: "OFIL Systems", desc: "UV corona cameras and SF6 gas detection cameras" },
  { name: "Satir", desc: "Thermal imaging cameras for electrical diagnostics" },
  { name: "AB Chance (Hubbell)", desc: "Electrical safety and live-line tools" },
  { name: "MULTI-JAPAN", desc: "Solar PV testing instruments" },
  { name: "Kisgen / Huaying", desc: "Transformer diagnostic and HV test equipment" },
];

const values = [
  {
    title: "Technical Depth",
    desc: "Our team comprises qualified electrical and instrumentation engineers who understand how the Indian grid operates, what standards apply (IS, IEC, CEA regulations), and how testing results translate into maintenance decisions.",
  },
  {
    title: "Trusted Global Principals",
    desc: "Green Watt is an authorised partner for internationally recognised brands — bringing the latest testing technology to the Indian market backed by genuine manufacturer support.",
  },
  {
    title: "Breadth of Portfolio",
    desc: "From simple clamp meters to sophisticated SFRA systems and VLF cable testing sets, Green Watt covers the full diagnostic lifecycle of electrical assets.",
  },
  {
    title: "Field Services",
    desc: "Beyond equipment supply, our engineers carry out on-site testing assignments — PD surveys, thermal imaging audits, earth integrity tests, relay calibration, and energy meter verification.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="About Greenwatt Global Ventures"
        subtitle="Founded by engineers with deep roots in India's power sector, with a mission to bring world-class electrical testing technology within reach of Indian organisations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]}
      />

      <main className="bg-white">
        {/* Who we are */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0B7F3B] text-xs font-bold uppercase tracking-widest mb-3 border-l-4 border-[#0B7F3B] pl-3">
                Who We Are
              </p>
              <h2 className="text-3xl font-bold text-[#292929] mb-5">
                Built by Engineers Driven by Innovation
              </h2>
              <p className="text-[#54595F] leading-relaxed mb-4">
                Greenwatt Global Ventures is a brain child of four professionals who, after working in the various domains of the Electrical industry for 10–15 years, came together to consolidate their vast experience and create a platform to provide solutions that are innovative and driven by the latest technology for power, energy, and telecom sectors pan India.
              </p>
              <p className="text-[#54595F] leading-relaxed mb-4">
                Headquartered in Gurugram, Haryana, we serve utilities, engineering contractors, and industrial clients who operate, maintain, or commission high-voltage and medium-voltage electrical infrastructure.
              </p>
              <p className="text-[#54595F] leading-relaxed">
                We provide E2E solutions — from initial consultation and equipment selection through to installation, commissioning, demonstration, and long-term technical support — ensuring every client gets maximum value from their investment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "15+", l: "Years Experience" },
                { v: "1.2K", l: "Projects Done" },
                { v: "100%", l: "Safety Compliance" },
                { v: "24/7", l: "Global Support" },
              ].map((s) => (
                <div key={s.l} className="bg-[#0B7F3B] rounded-xl py-8 px-6 text-center">
                  <p className="text-4xl font-bold text-white">{s.v}</p>
                  <p className="text-green-100 text-sm mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-14 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-[#0B7F3B] text-xs font-bold uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292929] leading-snug">
              To enhance the safety, reliability, and efficiency of India&apos;s electrical infrastructure by supplying precision testing instruments and delivering expert on-site testing services — helping our clients prevent failures before they happen.
            </h2>
          </div>
        </section>

        {/* What sets us apart */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-[#0B7F3B] text-xs font-bold uppercase tracking-widest mb-2">Our Differentiators</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#292929]">What Sets Us Apart</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-[#f9fafb] rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0B7F3B] text-sm uppercase tracking-wider mb-2">{v.title}</h3>
                  <p className="text-sm text-[#54595F] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-[#0B7F3B] text-xs font-bold uppercase tracking-widest mb-2">Our Partners</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#292929]">Trusted Global Principals</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partners.map((p) => (
                <div key={p.name} className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0B7F3B] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#292929] text-sm">{p.name}</p>
                    <p className="text-xs text-[#54595F] mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-[#0B7F3B]">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Ready to Work With Us?</h2>
            <p className="text-green-100 mb-6">
              Contact our team for product enquiries, service proposals, or technical application advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-7 py-3 bg-white text-[#0B7F3B] font-bold rounded hover:bg-[#D9FFDE] transition-colors">
                Contact Us
              </Link>
              <Link href="/products" className="px-7 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors">
                View Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
