import Image from "next/image";
import Link from "next/link";

const BASE = "https://demo.virtualxcellence.com/greenwatt";

const quickLinks = ["Solutions", "Products", "Industries", "About Us", "Contact Us"];

const applications = [
  "AB Chance-Hot Line Tools",
  "CT/PT Analyzer",
  "Gas Detection Camera",
  "Industrial Automation",
  "Solar PV Testing Equipments",
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand */}
        <div>
          <Image
            src={`${BASE}/wp-content/uploads/2026/04/logo-white-foot.png`}
            alt="Greenwatt"
            width={150}
            height={48}
            className="h-10 w-auto object-contain mb-5"
            unoptimized
          />
          <p className="text-sm leading-relaxed mb-6">
            Bringing innovative technology driven solutions for power, energy and telecom sector in the country.
          </p>
          <div className="flex gap-3">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0B7F3B] hover:border-[#0B7F3B] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* X-Twitter */}
            <a href="#" aria-label="X-Twitter" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0B7F3B] hover:border-[#0B7F3B] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 300 300">
                <path d="M178.57 127.15L290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.1h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0B7F3B] hover:border-[#0B7F3B] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l}>
                <Link href="#" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#0B7F3B]">›</span> {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Applications */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Applications</h4>
          <ul className="space-y-2.5">
            {applications.map((a) => (
              <li key={a}>
                <Link href="#" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#0B7F3B]">›</span> {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Support */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Support</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <svg className="w-4 h-4 text-[#0B7F3B] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span><strong className="text-white">Greenwatt Global Ventures PVT. LTD</strong><br />Palam vihar, gurugram-122017, haryana</span>
            </li>
            <li className="flex gap-2.5">
              <svg className="w-4 h-4 text-[#0B7F3B] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 882 639 0074<br />0124 400 5408</span>
            </li>
            <li className="flex gap-2.5">
              <svg className="w-4 h-4 text-[#0B7F3B] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:sales@greenwatt.co.in" className="hover:text-white transition-colors">
                sales@greenwatt.co.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 px-4">
        <p className="text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Greenwatt Global Ventures PVT. LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
