"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://demo.virtualxcellence.com/greenwatt";

const megaMenu = [
  {
    title: "PD, IR / UV",
    items: [
      { label: "Thermal Imagers", href: "/products/thermal-imagers" },
      { label: "Gas Detection Cameras", href: "/products/gas-detection-cameras" },
      { label: "Partial Discharge Detectors", href: "/products/partial-discharge-detectors" },
    ],
  },
  {
    title: "Transformer Diagnostics",
    items: [
      { label: "CT/PT Analyzer", href: "/products/ct-pt-analyzer" },
      { label: "Transformer Turns Ratio Tester", href: "/products/transformer-turns-ratio-tester" },
      { label: "Winding Resistance Tester", href: "/products/winding-resistance-tester" },
      { label: "SFRA Testing", href: "/products/sfra-testing" },
      { label: "Tan Delta Tester", href: "/products/tan-delta-tester" },
      { label: "Oil BDV Tester", href: "/products/oil-bdv-tester" },
    ],
  },
  {
    title: "Protection & Relay",
    items: [
      { label: "Relay Testing Equipment", href: "/products/relay-testing-equipment" },
    ],
  },
  {
    title: "Solar PV Testing",
    items: [
      { label: "Solar PV Testing Equipment", href: "/products/solar-pv-testing" },
    ],
  },
  {
    title: "HV & Insulation",
    items: [
      { label: "Insulation Testers", href: "/products/insulation-testers" },
      { label: "Hipot & VLF Testers", href: "/products/hipot-vlf-testers" },
    ],
  },
  {
    title: "Metering & Clamps",
    items: [
      { label: "Energy Meters", href: "/products/energy-meters" },
      { label: "Clamp Meters", href: "/products/clamp-meters" },
      { label: "Digital Multimeter", href: "/products/multimeter" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 h-[80px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={`${BASE}/wp-content/uploads/2026/04/green-logo.png`}
            alt="Greenwatt"
            width={160}
            height={50}
            className="h-12 w-auto object-contain"
            unoptimized
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          <Link href="/" className="px-3 py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B] transition-colors">
            Home
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B] transition-colors"
            >
              Product &amp; Solutions
              <svg className={`w-3.5 h-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {productsOpen && (
              <div
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[860px] bg-white shadow-2xl border-t-2 border-[#0B7F3B] z-50 p-6"
              >
                <div className="grid grid-cols-3 gap-6">
                  {megaMenu.map((cat) => (
                    <div key={cat.title}>
                      <h4 className="text-xs font-bold text-[#0B7F3B] uppercase tracking-wider mb-2 pb-1.5 border-b border-[#D9FFDE]">
                        {cat.title}
                      </h4>
                      <ul className="space-y-1.5">
                        {cat.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setProductsOpen(false)}
                              className="text-xs text-[#54595F] hover:text-[#0B7F3B] transition-colors block py-0.5"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <Link
                    href="/products"
                    onClick={() => setProductsOpen(false)}
                    className="text-xs font-semibold text-[#0B7F3B] hover:underline"
                  >
                    View All Products →
                  </Link>
                  <div className="flex gap-4 text-xs text-[#54595F]">
                    <Link href="/sectors" onClick={() => setProductsOpen(false)} className="hover:text-[#0B7F3B]">Sectors</Link>
                    <Link href="/services" onClick={() => setProductsOpen(false)} className="hover:text-[#0B7F3B]">Services</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="px-3 py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B] transition-colors">
            About Us
          </Link>
          <Link href="/telecommunication" className="px-3 py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B] transition-colors">
            Telecommunication
          </Link>
          <Link href="/industrial-automation" className="px-3 py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B] transition-colors">
            Industrial Automation
          </Link>
        </div>

        {/* Right: social + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {[
            {
              label: "Facebook",
              svg: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
              filled: true,
            },
            {
              label: "X-Twitter",
              svg: <path d="M4 4l16 16M20 4L4 20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />,
              filled: false,
            },
            {
              label: "Instagram",
              svg: (
                <>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </>
              ),
              filled: false,
            },
          ].map((s) => (
            <a key={s.label} href="#" aria-label={s.label}
              className="w-7 h-7 flex items-center justify-center text-[#54595F] hover:text-[#0B7F3B] transition-colors">
              <svg className="w-4 h-4" fill={s.filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke={s.filled ? "none" : "currentColor"} strokeWidth={1.5}>
                {s.svg}
              </svg>
            </a>
          ))}
          <Link
            href="/contact"
            className="ml-1 px-5 py-2 bg-[#0B7F3B] text-white text-sm font-semibold rounded hover:bg-[#027D32] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-[#292929]">
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]" onClick={() => setMobileOpen(false)}>Home</Link>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex justify-between items-center py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]"
            >
              Product &amp; Solutions
              <svg className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileProductsOpen && (
              <div className="pl-4 space-y-3 pb-2">
                {megaMenu.map((cat) => (
                  <div key={cat.title}>
                    <p className="text-xs font-bold text-[#0B7F3B] uppercase tracking-wider mb-1">{cat.title}</p>
                    {cat.items.map((item) => (
                      <Link key={item.href} href={item.href} className="block py-0.5 text-xs text-[#54595F] hover:text-[#0B7F3B]" onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link href="/products" className="block text-xs font-semibold text-[#0B7F3B]" onClick={() => setMobileOpen(false)}>All Products →</Link>
              </div>
            )}
            <Link href="/about" className="block py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/telecommunication" className="block py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]" onClick={() => setMobileOpen(false)}>Telecommunication</Link>
            <Link href="/industrial-automation" className="block py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]" onClick={() => setMobileOpen(false)}>Industrial Automation</Link>
            <Link href="/services" className="block py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link href="/sectors" className="block py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]" onClick={() => setMobileOpen(false)}>Sectors</Link>
            <Link href="/clients" className="block py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]" onClick={() => setMobileOpen(false)}>Clients</Link>
            <Link href="/contact" className="block mt-2 text-center py-2 bg-[#0B7F3B] text-white text-sm font-semibold rounded" onClick={() => setMobileOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
