"use client";
import { useState } from "react";
import Image from "next/image";

const BASE = "https://demo.virtualxcellence.com/greenwatt/wp-content/uploads";

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
    image: `${BASE}/2026/04/Gemini-1.png`,
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
      "GREENWATT offers advanced relay testing and power calibration solutions, including MULTI-JAPAN technologies, designed for precise protection system validation, commissioning, and maintenance of electrical networks.",
    image: `${BASE}/2026/04/K3063i_L_15D-GW-Kingsine-min-300x200-2.png`,
    features: ["3-Phase & Universal Testing Capability", "High Precision Calibration", "Automated Test Sequences", "Portable & Field-Ready Design"],
    icons: [
      `${BASE}/2026/04/noun-circuit-breaker-8352296.svg`,
      `${BASE}/2026/05/noun-calibration-7964371.svg`,
      `${BASE}/2026/05/noun-automated-testing-7623114.svg`,
      `${BASE}/2026/05/noun-portability-6079607.svg`,
    ],
  },
];

export default function FeaturedProducts() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? products.length - 1 : a - 1));
  const next = () => setActive((a) => (a === products.length - 1 ? 0 : a + 1));

  const p = products[active];

  return (
    <section id="products" className="py-16 md:py-20 bg-white">
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
            <button onClick={prev} className="w-10 h-10 border-2 border-[#0B7F3B] text-[#0B7F3B] rounded flex items-center justify-center hover:bg-[#0B7F3B] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} className="w-10 h-10 border-2 border-[#0B7F3B] text-[#0B7F3B] rounded flex items-center justify-center hover:bg-[#0B7F3B] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Slide */}
        <div className="grid md:grid-cols-2 gap-0 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          {/* Image */}
          <div className="bg-[#f9fafb] flex items-center justify-center p-10 min-h-[320px]">
            <Image
              src={p.image}
              alt={p.name}
              width={360}
              height={280}
              className="object-contain max-h-60 w-auto"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 bg-white">
            <h3 className="text-xl md:text-2xl font-bold text-[#292929] mb-3">{p.name}</h3>
            <p className="text-[#54595F] text-sm leading-relaxed mb-6">{p.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-7">
              {p.features.map((f, i) => (
                <div key={f} className="flex items-center gap-2.5 bg-[#f9fafb] rounded-lg p-3 border border-gray-100">
                  <Image src={p.icons[i]} alt={f} width={26} height={26} className="object-contain flex-shrink-0" unoptimized />
                  <span className="text-xs text-[#292929] font-medium leading-tight">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="#contact" className="px-6 py-2.5 bg-[#0B7F3B] text-white text-sm font-semibold rounded hover:bg-[#027D32] transition-colors">
                Take Enquiry
              </a>
              <a href="#contact" className="px-6 py-2.5 border-2 border-[#0B7F3B] text-[#0B7F3B] text-sm font-semibold rounded hover:bg-[#D9FFDE] transition-colors">
                Full Specs
              </a>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {products.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? "bg-[#0B7F3B]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
