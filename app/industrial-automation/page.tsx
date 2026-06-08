import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Industrial Automation | Greenwatt Global Ventures",
  description: "Electrical testing and measurement instruments for industrial automation, motor drives, control systems, and manufacturing electrical infrastructure.",
};

const solutions = [
  {
    title: "Motor & Drive Testing",
    icon: "⚙️",
    items: [
      "Motor winding resistance measurement for insulation and imbalance detection",
      "Insulation resistance testing of motor windings before energisation and during planned maintenance",
      "Thermal imaging of motor bodies, end-windings, and bearing housings for hot-spot detection",
      "Current measurement on motor feeders using clamp meters for load verification",
      "VFD (variable frequency drive) output measurement with low-pass filter clamp meters",
    ],
  },
  {
    title: "MCC & Switchgear",
    icon: "🔌",
    items: [
      "Thermal imaging of motor control centres (MCCs), contactors, and overload relays",
      "Insulation resistance testing of MCC bus sections and outgoing feeders",
      "Power quality measurement — voltage, current, harmonics, and power factor",
      "Protection relay testing for motor protection relays in industrial circuits",
      "Energy meter testing for process energy metering and loss reduction",
    ],
  },
  {
    title: "Cables & Earthing",
    icon: "🔗",
    items: [
      "Insulation resistance testing of power and control cables",
      "Hipot testing for newly installed HV and MV cables",
      "Earth integrity testing of plant earthing system and equipment bonding",
      "Partial discharge surveys of HV switchgear in large industrial facilities",
    ],
  },
  {
    title: "Substation & Utility Interface",
    icon: "🏭",
    items: [
      "Transformer maintenance testing (winding resistance, oil BDV, turns ratio, tan delta)",
      "Protection relay testing for 11 kV incoming feeder protection",
      "CT/PT verification for revenue and protection metering at grid connection point",
      "SFRA testing for power transformers after short-circuit events",
    ],
  },
];

const sectors = [
  "Steel and Metal Processing",
  "Cement and Building Materials",
  "Oil Refining and Petrochemicals",
  "Paper and Pulp Manufacturing",
  "Textile Manufacturing",
  "Pharmaceutical Manufacturing",
  "Food and Beverage Processing",
  "Mining and Minerals",
];

const products = [
  { name: "Thermal Imagers", href: "/products/thermal-imagers", desc: "MCC, motor, and switchgear hot-spot detection" },
  { name: "Insulation Testers", href: "/products/insulation-testers", desc: "Motor and cable insulation resistance testing" },
  { name: "Clamp Meters", href: "/products/clamp-meters", desc: "Motor load current and busbar measurement" },
  { name: "Winding Resistance Tester", href: "/products/winding-resistance-tester", desc: "Motor and transformer winding resistance" },
  { name: "Partial Discharge Detectors", href: "/products/partial-discharge-detectors", desc: "HV switchgear and cable PD surveys" },
  { name: "Energy Meters", href: "/products/energy-meters", desc: "Process energy metering verification" },
  { name: "Relay Testing Equipment", href: "/products/relay-testing-equipment", desc: "Industrial motor and feeder protection testing" },
  { name: "Hipot & VLF Testers", href: "/products/hipot-vlf-testers", desc: "Cable and switchgear withstand testing" },
];

export default function IndustrialAutomationPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Industrial Automation"
        subtitle="Electrical testing and measurement instruments for motor drives, control systems, MCCs, and industrial power distribution infrastructure."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industrial Automation", href: "/industrial-automation" }]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-14">

          {/* Intro */}
          <div className="max-w-3xl">
            <p className="text-[#54595F] leading-relaxed">
              Industrial facilities — from steel plants to pharmaceutical factories — rely on complex electrical infrastructure to power production processes. Maintaining the reliability of this infrastructure through preventive and predictive testing is essential to minimising unplanned downtime, protecting expensive drive systems, and ensuring safe working conditions. Green Watt provides the electrical testing instruments and field services that industrial maintenance and electrical engineering teams need.
            </p>
          </div>

          {/* Solutions grid */}
          <div>
            <h2 className="text-2xl font-bold text-[#292929] mb-7">Testing Solutions for Industrial Facilities</h2>
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

          {/* Industrial sectors */}
          <div className="bg-[#f9fafb] rounded-2xl p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-[#292929] mb-5">Industrial Sectors Served</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {sectors.map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-[#54595F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B7F3B] flex-shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-2xl font-bold text-[#292929] mb-5">Recommended Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((p) => (
                <Link key={p.name} href={p.href} className="group bg-[#f9fafb] rounded-xl p-4 border border-gray-200 hover:border-[#0B7F3B] hover:shadow-sm transition-all">
                  <p className="font-bold text-[#292929] text-sm group-hover:text-[#0B7F3B] transition-colors mb-1">{p.name}</p>
                  <p className="text-xs text-[#54595F]">{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Clients */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-xl font-bold text-[#292929] mb-3">Industrial Clients</h2>
              <p className="text-sm text-[#54595F] leading-relaxed mb-4">
                Green Watt&apos;s industrial clients include Adani Group, Jindal Group, L&T, Siemens India, ABB India, DLF, and many other leading industrial and infrastructure organisations across India.
              </p>
              <Link href="/clients" className="text-sm font-semibold text-[#0B7F3B] hover:underline">
                View All Clients →
              </Link>
            </div>
            <div className="bg-[#0B7F3B] rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Discuss Your Requirements</h3>
              <p className="text-green-100 text-sm mb-4">
                Tell us about your facility and testing challenges. Our engineers can advise on the right instruments and services.
              </p>
              <Link href="/contact" className="block text-center py-2.5 bg-white text-[#0B7F3B] font-bold text-sm rounded hover:bg-[#D9FFDE] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
