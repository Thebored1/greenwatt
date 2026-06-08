import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Green Watt at ELECRAMA | Greenwatt Global Ventures",
  description: "Green Watt participates in ELECRAMA, India's largest electrical industry exhibition organised by IEEMA.",
};

export default function ElecramaPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Green Watt at ELECRAMA"
        subtitle="India's Premier Electrical Industry Exhibition"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: "ELECRAMA", href: "/news/elecrama" },
        ]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          <article className="prose-custom space-y-8">

            <div>
              <p className="text-[#54595F] leading-relaxed text-base">
                Green Watt participates in <strong className="text-[#292929]">ELECRAMA</strong>, India&apos;s largest electrical industry exhibition organised by the Indian Electrical and Electronics Manufacturers&apos; Association (IEEMA). ELECRAMA is held every two years and attracts exhibitors and visitors from across the global power and electrical equipment industry — making it the premier platform for Green Watt to showcase its latest instruments, meet existing clients, and connect with new customers from across the Indian power sector.
              </p>
            </div>

            <div className="bg-[#f9fafb] rounded-xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#292929] mb-3">About ELECRAMA</h2>
              <p className="text-[#54595F] text-sm leading-relaxed">
                ELECRAMA is held at Bharat Mandapam (New Delhi) or similar large convention venues and typically spans four to five days. The exhibition draws participation from utilities, EPC contractors, industrial buyers, and electrical engineering professionals from all segments of India&apos;s power sector — generation, transmission, distribution, and industrial. With tens of thousands of visitors and hundreds of exhibitors, it is the most important trade event in the Indian electrical calendar.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#292929] mb-4 pb-2 border-b border-gray-100">
                Green Watt&apos;s Presence at ELECRAMA
              </h2>
              <p className="text-[#54595F] text-sm leading-relaxed mb-4">
                At ELECRAMA, Green Watt presents its full portfolio of electrical testing equipment and diagnostic services, with live instrument demonstrations and technical application presentations. Visitors to the Green Watt stand can:
              </p>
              <ul className="space-y-2">
                {[
                  "See live demonstrations of instruments including relay test sets, thermal imagers, partial discharge detectors, transformer diagnostic equipment, and solar PV testers",
                  "Speak with Green Watt's technical team about specific testing challenges and receive application guidance",
                  "Meet representatives from Green Watt's principal partners — Kingsine, OFIL Systems, Satir, and AB Chance — when present at the show",
                  "Learn about new products and upcoming technology developments",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#54595F]">
                    <span className="text-[#0B7F3B] font-bold mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#292929] mb-4 pb-2 border-b border-gray-100">
                Key Products Showcased
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Relay Testing", link: "/products/relay-testing-equipment", desc: "Kingsine K3063i and K68i protection relay test systems" },
                  { name: "Partial Discharge", link: "/products/partial-discharge-detectors", desc: "Penta-PD multi-channel detection system" },
                  { name: "Thermal Imaging", link: "/products/thermal-imagers", desc: "Satir range of infrared cameras" },
                  { name: "UV Corona Cameras", link: "/products/gas-detection-cameras", desc: "OFIL UV corona detection cameras" },
                  { name: "Transformer Diagnostics", link: "/products/sfra-testing", desc: "TTR, winding resistance, SFRA, tan delta, oil BDV" },
                  { name: "Solar PV Testing", link: "/products/solar-pv-testing", desc: "MCM1600PV and MIS-PV range" },
                  { name: "CT/PT Analyzer", link: "/products/ct-pt-analyzer", desc: "Automated CT and PT testing" },
                  { name: "Energy Meters", link: "/products/energy-meters", desc: "Reference energy meters for field verification" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="group bg-[#f9fafb] rounded-xl p-4 border border-gray-100 hover:border-[#0B7F3B] transition-colors"
                  >
                    <p className="font-bold text-[#292929] text-sm group-hover:text-[#0B7F3B] transition-colors">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#54595F] mt-0.5">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#0B7F3B] rounded-xl p-6 text-white">
              <h2 className="text-lg font-bold mb-2">Connect With Us at ELECRAMA</h2>
              <p className="text-green-100 text-sm leading-relaxed mb-4">
                Green Watt welcomes discussions with utility engineers, O&amp;M contractors, testing laboratories, and EPC companies at its exhibition stand. Prior appointment requests are welcome for technical discussions and product demonstrations.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-2.5 bg-white text-[#0B7F3B] font-bold text-sm rounded hover:bg-[#D9FFDE] transition-colors"
              >
                Request a Meeting
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
