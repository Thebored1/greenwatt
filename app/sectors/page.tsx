import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { sectors } from "@/lib/sectors";

export const metadata = {
  title: "Sectors | Greenwatt Global Ventures",
  description: "Electrical testing solutions across power substations, solar PV, transmission lines, oil & gas, data centres, telecom, and aerospace.",
};

const sectorIcons: Record<string, string> = {
  "power-substations": "🏭",
  "solar-pv-plant": "☀️",
  "transmission-line": "⚡",
  "oil-gas": "🛢️",
  "data-center": "🖥️",
  "telecom": "📡",
  "aerospace": "✈️",
};

export default function SectorsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Sectors We Serve"
        subtitle="Green Watt's products and services are applied across India's key industries where reliable, safe electrical infrastructure is critical."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sectors", href: "/sectors" }]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="group bg-[#f9fafb] rounded-xl overflow-hidden border border-gray-200 hover:border-[#0B7F3B] hover:shadow-md transition-all"
              >
                <div className="bg-[#0B7F3B] p-6 flex items-center gap-3">
                  <span className="text-3xl">{sectorIcons[sector.slug] ?? "⚡"}</span>
                  <h3 className="text-white font-bold text-lg group-hover:text-[#D9FFDE] transition-colors">
                    {sector.name}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#54595F] mb-3">{sector.tagline}</p>
                  <p className="text-xs text-[#54595F] leading-relaxed mb-4 line-clamp-3">
                    {sector.description}
                  </p>
                  <span className="text-xs font-semibold text-[#0B7F3B] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore Solutions
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Cross-sector capabilities */}
          <div className="bg-[#f9fafb] rounded-2xl p-8 border border-gray-100 mb-10">
            <h2 className="text-xl font-bold text-[#292929] mb-5">Cross-Sector Capabilities</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: "Thermal Imaging", d: "Applies wherever there are energised electrical connections that can degrade — substations, solar plants, industrial facilities, and data centres." },
                { t: "Earth Integrity Testing", d: "Required at every type of facility — from small telecom towers to large EHV substations and industrial plants." },
                { t: "Insulation Testing", d: "Fundamental to the maintenance of any electrical system — cables, motors, transformers, and switchgear across all sectors." },
                { t: "Energy Meter Verification", d: "Relevant wherever metered energy is bought or sold — utilities, industrial consumers, solar plants, and commercial buildings." },
              ].map((item) => (
                <div key={item.t} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0B7F3B] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-[#292929]">{item.t}</p>
                    <p className="text-xs text-[#54595F] mt-0.5">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-block px-8 py-3 bg-[#0B7F3B] text-white font-bold rounded hover:bg-[#027D32] transition-colors">
              Discuss Your Sector Requirements
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
