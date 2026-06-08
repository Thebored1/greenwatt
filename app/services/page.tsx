import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services | Greenwatt Global Ventures",
  description: "Professional on-site electrical testing and inspection services delivered by qualified electrical engineers across India.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Testing & Inspection Services"
        subtitle="Professional on-site electrical testing services delivered by qualified engineers equipped with calibrated instruments traceable to national standards."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Why choose */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {[
              { icon: "🎓", label: "Qualified Engineers", desc: "Electrical engineering backgrounds with hands-on HV testing experience" },
              { icon: "🔬", label: "Calibrated Instruments", desc: "Equipment traceable to national standards — confidence in every reading" },
              { icon: "📋", label: "Comprehensive Reports", desc: "Written reports with findings, photographs, and prioritised recommendations" },
              { icon: "🚀", label: "Rapid Mobilisation", desc: "Field teams deployable across India on short notice" },
              { icon: "⚖️", label: "Independent Assessment", desc: "Objective third-party evaluation for compliance and insurance purposes" },
              { icon: "🗺️", label: "Pan-India Coverage", desc: "Service delivery from Delhi NCR to South India and Eastern India" },
            ].map((item) => (
              <div key={item.label} className="bg-[#f9fafb] rounded-xl p-5 border border-gray-100">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-[#292929] text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-[#54595F] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {services.map((service) => (
              <div key={service.slug} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-[#0B7F3B] transition-all group">
                <div className="bg-[#0B7F3B] p-5">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#292929] text-lg mb-2 group-hover:text-[#0B7F3B] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#54595F] mb-3">{service.tagline}</p>
                  <p className="text-xs text-[#54595F] leading-relaxed mb-5 line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-semibold text-[#0B7F3B] flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[#0B7F3B] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Request a Service Proposal</h2>
            <p className="text-green-100 mb-6 max-w-lg mx-auto">
              Describe your site and testing requirements. We&apos;ll respond with a service scope and fee proposal within one working day.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-[#0B7F3B] font-bold rounded hover:bg-[#D9FFDE] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
