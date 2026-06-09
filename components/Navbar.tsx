"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type MenuItem  = { label: string; href?: string };   // href absent = no page, render as text
type SubGroup  = { subTitle?: string; items: MenuItem[] };
type MegaMenuCategory = { title: string; groups: SubGroup[] };

const megaMenu: MegaMenuCategory[] = [
  {
    title: "PD, IR / UV",
    groups: [
      {
        items: [
          { label: "PD – HV Laboratory" },
          { label: "Partial Discharge Detector",  href: "/products/partial-discharge-detectors" },
          { label: "IR / Ultrasonic / UV Window" },
          { label: "Thermal Imager",              href: "/products/thermal-imagers" },
          { label: "Corona Camera" },
        ],
      },
    ],
  },
  {
    title: "Substation Testing Products",
    groups: [
      {
        subTitle: "Transformer Testing",
        items: [
          { label: "Winding Resistance Tester",           href: "/products/winding-resistance-tester" },
          { label: "Sweep Frequency Response Analyzer",   href: "/products/sfra-testing" },
          { label: "Transformer Turns Ratio Tester",      href: "/products/transformer-turns-ratio-tester" },
          { label: "TAN Delta",                           href: "/products/tan-delta-tester" },
        ],
      },
      {
        subTitle: "CT / PT Testing",
        items: [
          { label: "CT / PT Analyzer",           href: "/products/ct-pt-analyzer" },
          { label: "Online HV CT Ratio Tester" },
        ],
      },
      {
        subTitle: "Circuit Breaker Analysis",
        items: [
          { label: "Contact Resistance Tester" },
          { label: "Circuit Breaker Analyzer" },
        ],
      },
      {
        items: [
          { label: "Monster Jaw Clamp Meter" },
        ],
      },
    ],
  },
  {
    title: "AB Chance-Hot Line Tools",
    groups: [
      {
        subTitle: "Relay Testing",
        items: [
          { label: "Universal Relay Test Kit (K3063i)", href: "/products/relay-testing-equipment" },
          { label: "Universal Relay Test Kit (K68i)",   href: "/products/relay-testing-equipment" },
          { label: "Secondary Injection Kit",           href: "/products/relay-testing-equipment" },
        ],
      },
      {
        subTitle: "Meter Testing",
        items: [
          { label: "1 Ph Onsite Energy Meter Reference", href: "/products/energy-meters" },
          { label: "3 PH Onsite Energy Meter Reference", href: "/products/energy-meters" },
        ],
      },
      {
        subTitle: "Electrical Line Testing",
        items: [
          { label: "Insulation Tester",   href: "/products/insulation-testers" },
          { label: "Digital Multimeter",  href: "/products/multimeter" },
          { label: "Clamp Meter",         href: "/products/clamp-meters" },
        ],
      },
      {
        subTitle: "Earth / Ground Testing",
        items: [
          { label: "GERM Monitor" },
          { label: "Earth Tester" },
          { label: "Clamp Earth Tester" },
        ],
      },
      {
        subTitle: "DC Battery Testing",
        items: [
          { label: "Monitoring" },
          { label: "Capacity Testing" },
          { label: "Conductance and Resistance Testers" },
        ],
      },
      {
        subTitle: "Hipot Testing",
        items: [
          { label: "AC / DC Hipot", href: "/products/hipot-vlf-testers" },
          { label: "VLF",           href: "/products/hipot-vlf-testers" },
          { label: "Oil BDV Test Set", href: "/products/oil-bdv-tester" },
        ],
      },
    ],
  },
  {
    title: "Solar PV Testing Equipments",
    groups: [
      {
        items: [
          { label: "Solar PV Testing Equipment", href: "/products/solar-pv-testing" },
        ],
      },
    ],
  },
  {
    title: "Gas Detection Camera",
    groups: [
      {
        items: [
          { label: "Gas Detection Cameras", href: "/products/gas-detection-cameras" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled,           setScrolled]           = useState(false);
  const [productsOpen,       setProductsOpen]       = useState(false);
  const [activeCategory,     setActiveCategory]     = useState(megaMenu[0].title);
  const [expandedGroups,     setExpandedGroups]     = useState<Set<number>>(new Set([0]));
  const [mobileOpen,         setMobileOpen]         = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => clearTimeout(closeTimerRef.current), []);

  /* hover-delay helpers */
  const openMenu = useCallback(() => {
    clearTimeout(closeTimerRef.current);
    setProductsOpen(true);
  }, []);
  const startClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setProductsOpen(false), 150);
  }, []);
  const closeMenu = useCallback(() => {
    clearTimeout(closeTimerRef.current);
    setProductsOpen(false);
  }, []);

  /* switch left-panel category and reset accordion */
  const switchCategory = (title: string) => {
    setActiveCategory(title);
    setExpandedGroups(new Set([0]));
  };

  /* accordion toggle in right panel */
  const toggleGroup = (gi: number) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      next.has(gi) ? next.delete(gi) : next.add(gi);
      return next;
    });
  };

  const activeData = megaMenu.find(c => c.title === activeCategory) ?? megaMenu[0];

  /* helpers to decide if a group needs an accordion header */
  const hasSubGroups = activeData.groups.some(g => !!g.subTitle);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* ── Main nav bar ── */}
      <nav className="max-w-7xl mx-auto px-4 h-[80px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
          <Image
            src="/wp-uploads/2026/04/green-logo.png"
            alt="Greenwatt Global Ventures"
            width={160} height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          <Link
            href="/"
            onMouseEnter={closeMenu}
            className="px-3 py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B] transition-colors"
          >
            Home
          </Link>

          {/* Products trigger */}
          <button
            onMouseEnter={() => { openMenu(); switchCategory(megaMenu[0].title); }}
            onMouseLeave={startClose}
            className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
              productsOpen ? "text-[#0B7F3B]" : "text-[#292929] hover:text-[#0B7F3B]"
            }`}
          >
            Product &amp; Solutions
            <svg className={`w-3.5 h-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Link href="/about" onMouseEnter={closeMenu}
            className="px-3 py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B] transition-colors">
            About Us
          </Link>

          {/* No page — plain text */}
          <span onMouseEnter={closeMenu}
            className="px-3 py-2 text-sm font-medium text-[#292929] cursor-default select-none">
            Telecommunication
          </span>
          <span onMouseEnter={closeMenu}
            className="px-3 py-2 text-sm font-medium text-[#292929] cursor-default select-none">
            Industrial Automation
          </span>
        </div>

        {/* Right: social + CTA */}
        <div className="hidden lg:flex items-center gap-3" onMouseEnter={closeMenu}>
          {[
            { label: "Facebook", filled: true,
              svg: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
            { label: "X / Twitter", filled: false,
              svg: <path d="M4 4l16 16M20 4L4 20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> },
            { label: "Instagram", filled: false,
              svg: (<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></>) },
          ].map(s => (
            <a key={s.label} href="#" aria-label={s.label}
              className="w-7 h-7 flex items-center justify-center text-[#54595F] hover:text-[#0B7F3B] transition-colors">
              <svg className="w-4 h-4" fill={s.filled ? "currentColor" : "none"}
                viewBox="0 0 24 24" stroke={s.filled ? "none" : "currentColor"} strokeWidth={1.5}>
                {s.svg}
              </svg>
            </a>
          ))}
          <Link href="/contact"
            className="ml-1 px-5 py-2 bg-[#0B7F3B] text-white text-sm font-semibold rounded hover:bg-[#027D32] transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-[#292929]" aria-label="Toggle menu">
          {mobileOpen
            ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </nav>

      {/* ── Full-width Mega Menu ── */}
      {productsOpen && (
        <div
          className="dropdown-menu absolute left-0 right-0 top-full border-t-4 border-[#0B7F3B] bg-white shadow-2xl"
          onMouseEnter={openMenu}
          onMouseLeave={startClose}
        >
          <div className="flex" style={{ minHeight: 320 }}>

            {/* Left panel: category tabs */}
            <div className="w-72 bg-[#F7F7F7] border-r border-gray-200 flex-shrink-0 flex flex-col">
              {megaMenu.map(cat => (
                <button
                  key={cat.title}
                  onMouseEnter={() => switchCategory(cat.title)}
                  className={`w-full text-left px-6 py-4 text-sm font-medium border-l-[3px] transition-colors ${
                    activeCategory === cat.title
                      ? "bg-[#0B7F3B] text-white border-[#027D32]"
                      : "text-[#292929] border-transparent hover:bg-gray-100 hover:border-[#0B7F3B] hover:text-[#0B7F3B]"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
              <div className="mt-auto px-6 py-4 border-t border-gray-200">
                <Link href="/products" onClick={closeMenu}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#0B7F3B] hover:underline">
                  View All Products
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right panel */}
            <div className="flex-1 px-8 py-6 overflow-y-auto" style={{ maxHeight: 480 }}>
              <h3 className="text-xs font-bold text-[#0B7F3B] uppercase tracking-widest mb-4 pb-2 border-b-2 border-[#D9FFDE]">
                {activeData.title}
              </h3>

              {/* No sub-groups: simple flat list */}
              {!hasSubGroups ? (
                <ul className="space-y-1">
                  {activeData.groups[0].items.map(item => (
                    <li key={item.label}>
                      {item.href ? (
                        <Link href={item.href} onClick={closeMenu}
                          className="flex items-center gap-2.5 text-sm text-[#54595F] hover:text-[#0B7F3B] transition-colors py-1.5 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#0B7F3B] transition-colors flex-shrink-0" />
                          {item.label}
                        </Link>
                      ) : (
                        <span className="flex items-center gap-2.5 text-sm text-[#9CA3AF] py-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-200 flex-shrink-0" />
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                /* Accordion groups */
                <div className="space-y-1">
                  {activeData.groups.map((group, gi) => {
                    const isExpanded = expandedGroups.has(gi);

                    /* Group with no subTitle — render items inline (no header) */
                    if (!group.subTitle) {
                      return (
                        <div key={gi} className="py-1">
                          {group.items.map(item => (
                            <div key={item.label} className="flex items-center gap-2.5 px-3 py-1">
                              {item.href ? (
                                <Link href={item.href} onClick={closeMenu}
                                  className="text-sm text-[#54595F] hover:text-[#0B7F3B] transition-colors">
                                  {item.label}
                                </Link>
                              ) : (
                                <span className="text-sm text-[#9CA3AF]">{item.label}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      );
                    }

                    return (
                      <div key={gi}>
                        {/* Accordion header */}
                        <button
                          onClick={() => toggleGroup(gi)}
                          className={`w-full flex items-center gap-2 px-3 py-2.5 rounded text-sm font-semibold transition-colors ${
                            isExpanded
                              ? "text-[#0B7F3B]"
                              : "text-[#54595F] hover:text-[#0B7F3B]"
                          }`}
                        >
                          {isExpanded ? (
                            <span className="text-[#0B7F3B] font-bold text-base leading-none w-4 flex-shrink-0">—</span>
                          ) : (
                            <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                          {group.subTitle}
                        </button>

                        {/* Expanded items */}
                        {isExpanded && (
                          <div className="ml-4 mb-2 border border-gray-200 rounded bg-gray-50">
                            {group.items.map(item => (
                              <div key={item.label} className="border-b border-gray-100 last:border-0">
                                {item.href ? (
                                  <Link href={item.href} onClick={closeMenu}
                                    className="block px-4 py-2 text-sm text-[#54595F] hover:text-[#0B7F3B] hover:bg-white transition-colors">
                                    {item.label}
                                  </Link>
                                ) : (
                                  <span className="block px-4 py-2 text-sm text-[#9CA3AF]">
                                    {item.label}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]"
              onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex justify-between items-center py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]"
            >
              Product &amp; Solutions
              <svg className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileProductsOpen && (
              <div className="pl-4 space-y-4 pb-2">
                {megaMenu.map(cat => (
                  <div key={cat.title}>
                    <p className="text-xs font-bold text-[#0B7F3B] uppercase tracking-wider mb-1">{cat.title}</p>
                    {cat.groups.flatMap(g => g.items).map(item => (
                      item.href ? (
                        <Link key={item.label} href={item.href}
                          className="block py-0.5 text-xs text-[#54595F] hover:text-[#0B7F3B]"
                          onClick={() => setMobileOpen(false)}>
                          {item.label}
                        </Link>
                      ) : (
                        <span key={item.label} className="block py-0.5 text-xs text-[#9CA3AF]">
                          {item.label}
                        </span>
                      )
                    ))}
                  </div>
                ))}
                <Link href="/products" className="block text-xs font-semibold text-[#0B7F3B]"
                  onClick={() => setMobileOpen(false)}>
                  All Products →
                </Link>
              </div>
            )}

            <Link href="/about" className="block py-2 text-sm font-medium text-[#292929] hover:text-[#0B7F3B]"
              onClick={() => setMobileOpen(false)}>
              About Us
            </Link>

            <span className="block py-2 text-sm font-medium text-[#9CA3AF] cursor-default">
              Telecommunication
            </span>
            <span className="block py-2 text-sm font-medium text-[#9CA3AF] cursor-default">
              Industrial Automation
            </span>

            <Link href="/contact" className="block mt-2 text-center py-2 bg-[#0B7F3B] text-white text-sm font-semibold rounded"
              onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
