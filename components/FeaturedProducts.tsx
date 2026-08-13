"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const BASE = "/wp-uploads";

const products = [
  {
    name: "Thermal Imager Camera",
    description:
      "Advanced thermal imaging solutions designed for accurate temperature analysis, fault detection, and preventive maintenance across industrial and electrical applications.",
    image: `${BASE}/2026/04/thermal-imaging-gas-infrared-camera-500x500-1.png`,
    features: ["-20°C to 2000°C", "IP67 Waterproof", "AI Object Tracking", "Remote Diagnostic"],
    icons: [
      `${BASE}/2026/05/noun-temperature-1979336.svg`,
      `${BASE}/2026/05/noun-waterproof-8221219.svg`,
      `${BASE}/2026/05/noun-ai-tracking-8015061.svg`,
      `${BASE}/2026/05/noun-remote-diagnostics-industrial-6362218.svg`,
    ],
  },
  {
    name: "Solar PV Testing Equipments",
    description:
      "GREENWATT brings the most advanced Solar PV Testing Equipments from MULTI-JAPAN, engineered for high-precision performance, reliability, and efficient solar asset diagnostics across diverse environments.",
    image: `${BASE}/2026/04/seaward-pv200-a-compact-solar-pv-tester-with-i-v-curve-tracing-500x500-1.png`,
    features: ["High-Accuracy PV Measurement", "I-V Curve Analysis", "Wide Environmental Adaptability", "Comprehensive Diagnostics"],
    icons: [
      `${BASE}/2026/05/noun-voltmeter-7913906.svg`,
      `${BASE}/2026/05/noun-chart-5205758.svg`,
      `${BASE}/2026/05/noun-environment-8236017.svg`,
      `${BASE}/2026/05/noun-voltmeter-7913906.svg`,
    ],
  },
  {
    name: "CT/PT/CVT Analyzer",
    description:
      "Advanced analyzer solutions for comprehensive testing and diagnostics of current transformers, potential transformers, and capacitive voltage transformers, ensuring accuracy, reliability, and compliance in power systems.",
    image: `${BASE}/2026/06/gw-ctpt-analyzer.jpg`,
    features: ["Comprehensive Transformer Testing", "High Measurement Accuracy", "Automated Test Routines", "Field-Ready & Portable"],
    icons: [
      `${BASE}/2026/04/noun-transformer-8081672.svg`,
      `${BASE}/2026/05/noun-accuracy-6711159.svg`,
      `${BASE}/2026/05/noun-automated-testing-7623114.svg`,
      `${BASE}/2026/05/noun-portability-6079607.svg`,
    ],
  },
  {
    name: "Relay Test Kit",
    description:
      "GREENWATT offers advanced relay testing and power calibration solutions designed for precise protection system validation, commissioning, and maintenance of electrical networks.",
    image: `${BASE}/2026/04/GW3063i_L_15D-GW-Kingsine-min-300x200-2.png`,
    features: ["3-Phase & Universal Testing Capability", "High Precision Calibration", "Automated Test Sequences", "Portable & Field-Ready Design"],
    icons: [
      `${BASE}/2026/04/noun-circuit-breaker-8352296.svg`,
      `${BASE}/2026/05/noun-calibration-7964371.svg`,
      `${BASE}/2026/05/noun-automated-testing-7623114.svg`,
      `${BASE}/2026/05/noun-portability-6079607.svg`,
    ],
  },
];

const INTERVAL = 2500;

export default function FeaturedProducts() {
  const [active,  setActive]  = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((i: number) => {
    setActive(i);
    setAnimKey(k => k + 1);
  }, []);

  const prev = useCallback(() =>
    goTo(active === 0 ? products.length - 1 : active - 1), [active, goTo]);

  const next = useCallback(() =>
    goTo(active === products.length - 1 ? 0 : active + 1), [active, goTo]);

  /* auto-advance — resets whenever active changes or pause toggles */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive(a => {
        const n = a === products.length - 1 ? 0 : a + 1;
        setAnimKey(k => k + 1);
        return n;
      });
    }, INTERVAL);
    return () => clearInterval(t);
  }, [paused, active]);

  const p = products[active];

  return (
    <section
      id="products"
      className="py-16 md:py-20 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-[#0B7F3B] text-xs font-bold uppercase tracking-widest mb-2">Spotlight Innovation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#292929]">Featured Solution</h2>
            <p className="text-[#54595F] text-sm mt-2 max-w-lg">
              Delivering precise, reliable, and efficient testing solutions for modern power system protection and calibration needs.
            </p>
          </div>
          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 border-2 border-[#0B7F3B] text-[#0B7F3B] rounded flex items-center justify-center hover:bg-[#0B7F3B] hover:text-white transition-colors"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border-2 border-[#0B7F3B] text-[#0B7F3B] rounded flex items-center justify-center hover:bg-[#0B7F3B] hover:text-white transition-colors"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slide — key forces re-mount → re-animation on every change */}
        <div
          key={animKey}
          className="carousel-slide grid md:grid-cols-2 gap-0 border border-gray-100 rounded-2xl overflow-hidden shadow-md"
        >
          {/* Image panel */}
          <div className="bg-[#f4f6f8] flex items-center justify-center p-10 md:p-14 min-h-[420px]">
            <Image
              src={p.image}
              alt={p.name}
              width={480}
              height={420}
              className="object-contain w-full max-h-[360px]"
              unoptimized
              priority
            />
          </div>

          {/* Content panel */}
          <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#292929] mb-3">{p.name}</h3>
            <p className="text-[#54595F] text-sm leading-relaxed mb-7">{p.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {p.features.map((f, i) => (
                <div
                  key={f}
                  className="flex items-center gap-3 bg-[#f9fafb] rounded-xl p-3.5 border border-gray-100"
                >
                  <Image
                    src={p.icons[i]}
                    alt={f}
                    width={28}
                    height={28}
                    style={{ width: 28, height: 28 }}
                    className="object-contain flex-shrink-0"
                    unoptimized
                  />
                  <span className="text-xs text-[#292929] font-medium leading-tight">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-[#0B7F3B] text-white text-sm font-semibold rounded hover:bg-[#027D32] transition-colors"
              >
                Take Enquiry
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 border-2 border-[#0B7F3B] text-[#0B7F3B] text-sm font-semibold rounded hover:bg-[#D9FFDE] transition-colors"
              >
                Full Specs
              </a>
            </div>
          </div>
        </div>

        {/* Dot / progress indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === active
                  ? "bg-[#0B7F3B] w-8"
                  : "bg-gray-300 w-2.5 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
