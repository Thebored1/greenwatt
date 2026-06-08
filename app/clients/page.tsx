import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Our Clients | Greenwatt Global Ventures",
  description: "Trusted by NTPC, NPCIL, L&T, Adani, Indian Railways, PGCIL and many more of India's leading power sector organisations.",
};

const clientGroups = [
  {
    title: "Power Generation",
    clients: [
      { name: "NTPC", desc: "National Thermal Power Corporation — India's largest power generating utility" },
      { name: "NPCIL", desc: "Nuclear Power Corporation of India — nuclear power stations across India" },
      { name: "NEEPCO", desc: "North Eastern Electric Power Corporation — hydroelectric and thermal generation" },
      { name: "OHPC", desc: "Odisha Hydro Power Corporation — hydroelectric generation in Odisha" },
    ],
  },
  {
    title: "Transmission & Distribution",
    clients: [
      { name: "PGCIL (PowerGrid)", desc: "National transmission system operator" },
      { name: "PTCUL", desc: "Power Transmission Corporation of Uttarakhand" },
      { name: "HVNL", desc: "Haryana Vidyut Prasaran Nigam — state transmission in Haryana" },
      { name: "UPPTCL", desc: "Uttar Pradesh Power Transmission Corporation" },
      { name: "BSES", desc: "BSES Rajdhani and BSES Yamuna — Delhi distribution companies" },
      { name: "HPL", desc: "Power distribution and metering" },
    ],
  },
  {
    title: "EPC & Engineering",
    clients: [
      { name: "L&T", desc: "Larsen & Toubro — India's largest engineering and construction conglomerate" },
      { name: "Sterlite Power", desc: "Power transmission EPC and asset developer" },
      { name: "Siemens India", desc: "Electrical engineering and automation" },
      { name: "ABB India", desc: "Power and automation technology" },
      { name: "Andritz", desc: "Hydro and industrial equipment" },
      { name: "Voith", desc: "Hydro turbine and industrial equipment" },
    ],
  },
  {
    title: "Industrial & Infrastructure",
    clients: [
      { name: "Adani Group", desc: "Power, ports, and infrastructure" },
      { name: "Jindal Group", desc: "Steel and power" },
      { name: "DLF", desc: "Real estate and commercial infrastructure" },
      { name: "Jyoti Structures", desc: "Power sector EPC" },
    ],
  },
  {
    title: "Public Sector & Government",
    clients: [
      { name: "Indian Railways", desc: "Traction substation and railway electrification maintenance" },
      { name: "BSF", desc: "Border Security Force — military facility electrical infrastructure" },
    ],
  },
  {
    title: "Technology Partners",
    clients: [
      { name: "AB Chance (Hubbell)", desc: "Electrical safety and live-line tools" },
      { name: "Kingsine", desc: "Protection relay test equipment" },
      { name: "OFIL Systems", desc: "UV corona and gas detection cameras (Israel)" },
      { name: "Satir", desc: "Thermal imaging cameras" },
      { name: "MULTI-JAPAN", desc: "Solar PV testing instruments" },
    ],
  },
];

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Clients"
        subtitle="Trusted by India's leading power utilities, EPC contractors, and industrial organisations for over a decade of reliable service."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients", href: "/clients" }]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[#54595F] leading-relaxed">
              Green Watt is privileged to count among its clients some of the most important organisations in India&apos;s power generation, transmission, distribution, and industrial sectors. The relationships we have built over the years reflect our commitment to technical quality, reliable product support, and professional field service delivery.
            </p>
          </div>

          {/* Client groups */}
          <div className="space-y-10 mb-14">
            {clientGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-1 h-6 bg-[#0B7F3B] rounded-full" />
                  <h2 className="text-xl font-bold text-[#292929]">{group.title}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.clients.map((client) => (
                    <div key={client.name} className="bg-[#f9fafb] rounded-xl p-4 border border-gray-100 flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#D9FFDE] flex items-center justify-center flex-shrink-0 font-bold text-[#0B7F3B] text-xs">
                        {client.name.substring(0, 2)}
                      </div>
                      <div>
                        <p className="font-bold text-[#292929] text-sm">{client.name}</p>
                        <p className="text-xs text-[#54595F] mt-0.5 leading-relaxed">{client.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0B7F3B] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Join Our Growing Client Base</h2>
            <p className="text-green-100 mb-6 max-w-lg mx-auto">
              Whether you are a utility, EPC contractor, industrial facility, or testing laboratory — Green Watt has the instruments and expertise to support your electrical testing needs.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-[#0B7F3B] font-bold rounded hover:bg-[#D9FFDE] transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
