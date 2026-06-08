"use client";
import { useState } from "react";

const testimonials = [
  {
    quote: "Greenwatt has consistently delivered high-quality testing equipment backed by strong technical expertise. Their team ensured seamless installation and provided excellent post-sales support.",
    author: "Senior Engineer",
    company: "Power Utility Company",
    initials: "SE",
  },
  {
    quote: "What stands out is their commitment to deadlines and customer requirements. From consultation to deployment, everything was handled professionally and efficiently.",
    author: "Project Manager",
    company: "Transmission Infrastructure Firm",
    initials: "PM",
  },
  {
    quote: "Greenwatt's ability to provide cutting-edge and cost-effective solutions helped us improve operational efficiency significantly. Their approach truly reflects innovation and industry knowledge.",
    author: "Operations Head",
    company: "Industrial Automation Company",
    initials: "OH",
  },
  {
    quote: "We appreciate their complete support—from product demonstration to application guidance. The team is knowledgeable, responsive, and always ready to help.",
    author: "Technical Lead",
    company: "Energy Sector Organization",
    initials: "TL",
  },
];

function QuoteIcon() {
  return (
    <svg className="w-10 h-10 text-[#D9FFDE] absolute bottom-4 right-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-16 md:py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#292929]">What Our Clients Say</h2>
        </div>

        {/* Desktop: show 2 side by side */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-6">
            {[testimonials[active], testimonials[(active + 1) % testimonials.length]].map((t, i) => (
              <div key={i} className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-100 overflow-hidden">
                <p className="text-[#54595F] text-sm leading-relaxed mb-6 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <hr className="border-[#D9FFDE] mb-4" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#0B7F3B] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#292929]">{t.author}</p>
                    <p className="text-xs text-[#54595F]">{t.company}</p>
                  </div>
                </div>
                <QuoteIcon />
              </div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-9 h-9 border-2 border-[#0B7F3B] text-[#0B7F3B] rounded flex items-center justify-center hover:bg-[#0B7F3B] hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-[#0B7F3B]" : "bg-gray-300"}`} />
            ))}
            <button onClick={next} className="w-9 h-9 border-2 border-[#0B7F3B] text-[#0B7F3B] rounded flex items-center justify-center hover:bg-[#0B7F3B] hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden">
          <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 overflow-hidden">
            <p className="text-[#54595F] text-sm leading-relaxed mb-5 relative z-10">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <hr className="border-[#D9FFDE] mb-4" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#0B7F3B] flex items-center justify-center text-white font-bold text-sm">
                {testimonials[active].initials}
              </div>
              <div>
                <p className="text-sm font-bold text-[#292929]">{testimonials[active].author}</p>
                <p className="text-xs text-[#54595F]">{testimonials[active].company}</p>
              </div>
            </div>
            <QuoteIcon />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? "bg-[#0B7F3B]" : "bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
