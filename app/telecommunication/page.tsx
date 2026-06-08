import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Telecommunication Solutions | Greenwatt Global Ventures",
  description: "Electrical testing instruments and services for telecom towers, exchange buildings, data transmission facilities, and telecommunications infrastructure.",
};

const solutions = [
  {
    title: "Tower Earthing & Lightning Protection",
    icon: "⚡",
    items: [
      "Earth resistance measurement at tower base using fall-of-potential method",
      "Clamp-on earth resistance testing for quick periodic checks",
      "Lightning protection continuity testing — earth conductor and down conductor bonds",
      "Soil resistivity survey for earthing system design or upgrade",
      "Compliance with IS 3043 and TEC earthing standards",
    ],
  },
  {
    title: "Battery & DC Power Systems",
    icon: "🔋",
    items: [
      "DC battery system testing — internal resistance and capacity measurement",
      "Thermal imaging of rectifier/charger units and battery banks",
      "Insulation testing of DC feeders and equipment",
      "UPS and DC power distribution thermal surveys",
    ],
  },
  {
    title: "Substation & Grid Connection",
    icon: "🏭",
    items: [
      "Transformer diagnostic testing for telecom facility substations (winding resistance, oil BDV, turns ratio)",
      "Protection relay testing for incoming feeder and transformer protection",
      "CT/PT verification for revenue and protection metering",
      "Thermal imaging of HV/LV switchgear",
    ],
  },
  {
    title: "Fibre & Transmission Facilities",
    icon: "📡",
    items: [
      "Insulation resistance testing of power feeders in exchange buildings",
      "Earth integrity assessment for optical landing stations and internet exchange points",
      "Partial discharge surveys of HV equipment in large data-carrying hubs",
      "Energy meter verification for facility energy management",
    ],
  },
];

const products = [
  { name: "Insulation Testers", href: "/products/insulation-testers", desc: "Cable and equipment insulation resistance testing" },
  { name: "Thermal Imagers", href: "/products/thermal-imagers", desc: "Hot-spot detection in rectifiers, chargers, and switchgear" },
  { name: "Clamp Meters", href: "/products/clamp-meters", desc: "DC and AC current measurement at telecom sites" },
  { name: "Energy Meters", href: "/products/energy-meters", desc: "Reference energy meters for meter verification" },
  { name: "Winding Resistance Tester", href: "/products/winding-resistance-tester", desc: "Substation transformer diagnostics" },
  { name: "CT/PT Analyzer", href: "/products/ct-pt-analyzer", desc: "Metering CT and PT verification" },
];

export default function TelecommunicationPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Telecommunication"
        subtitle="Electrical testing instruments and field services for India's telecommunications infrastructure — from mobile towers to submarine cable landing stations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Telecommunication", href: "/telecommunication" }]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-14">

          {/* Intro */}
          <div className="max-w-3xl">
            <p className="text-[#54595F] leading-relaxed">
              India&apos;s telecommunications network — spanning mobile towers, optical fibre landing stations, internet exchange points, and broadcast transmission facilities — relies on robust, reliable electrical infrastructure. Power is the lifeblood of telecom: a single power failure can disrupt communications for millions of users. Green Watt provides electrical testing instruments and field services that help telecom infrastructure operators maintain power reliability and meet statutory safety requirements.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-2xl font-bold text-[#292929] mb-7">Testing Solutions for Telecom</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((sol) => (
                <div key={sol.title} className="bg-[#f9fafb] rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{sol.icon}</span>
                    <h3 className="font-bold text-[#292929]">{sol.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {sol.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#54595F]">
                        <span className="text-[#0B7F3B] font-bold mt-0.5 flex-shrink-0">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-2xl font-bold text-[#292929] mb-5">Recommended Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((p) => (
                <Link key={p.name} href={p.href} className="group bg-[#f9fafb] rounded-xl p-4 border border-gray-200 hover:border-[#0B7F3B] hover:shadow-sm transition-all">
                  <p className="font-bold text-[#292929] text-sm group-hover:text-[#0B7F3B] transition-colors mb-1">{p.name}</p>
                  <p className="text-xs text-[#54595F]">{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#0B7F3B] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Discuss Your Telecom Testing Needs</h3>
              <p className="text-green-100 text-sm">Our technical team can advise on instruments and services for your specific infrastructure.</p>
            </div>
            <Link href="/contact" className="flex-shrink-0 px-7 py-3 bg-white text-[#0B7F3B] font-bold rounded hover:bg-[#D9FFDE] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
