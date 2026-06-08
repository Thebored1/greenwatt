const applications = [
  {
    title: "CT/PT & CVT",
    desc: "High-precision transformer testing systems for accuracy and reliability.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="32" r="20" /><path d="M32 12v8M32 44v8M12 32h8M44 32h8" />
        <circle cx="32" cy="32" r="8" fill="currentColor" fillOpacity="0.12" />
      </svg>
    ),
  },
  {
    title: "Power Transformer",
    desc: "Comprehensive diagnostic tools for insulation, winding, and performance analysis.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="20" width="20" height="24" rx="2" /><rect x="36" y="20" width="20" height="24" rx="2" />
        <path d="M28 26c4 0 4 12 8 12M28 38c4 0 4-12 8-12" />
      </svg>
    ),
  },
  {
    title: "Circuit Breaker",
    desc: "Timing, motion, and resistance analysis for mission-critical systems.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 32h10l4-12 8 24 4-12h6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="52" r="3" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Protective Relays",
    desc: "Secondary injection testing for protection system reliability and performance.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="12" y="12" width="40" height="40" rx="3" />
        <path d="M22 32l8 8 12-16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cables",
    desc: "Fault location and insulation testing for HV underground cables.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 30c8-14 40-14 48 0" strokeLinecap="round" />
        <path d="M8 36c8-14 40-14 48 0" strokeLinecap="round" />
        <path d="M8 42c8-14 40-14 48 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Lightning Arrester",
    desc: "Surge protection validation for atmospheric and switching conditions.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M36 8L20 34h14L28 56l20-30H34z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Oil Testing",
    desc: "Dielectric strength and gas analysis for insulating fluids.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8c0 0-20 20-20 32a20 20 0 0 0 40 0C52 28 32 8 32 8z" />
        <path d="M22 40a10 10 0 0 0 20 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Earthing System",
    desc: "Ground grid resistance and continuity testing for site safety.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8v30M20 26l12 12 12-12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 48h32M20 54h24M24 60h16" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ApplicationTool() {
  return (
    <section className="py-16 md:py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#0B7F3B] text-xs font-bold uppercase tracking-widest mb-2">Core Competencies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#292929]">Application Selection Tool</h2>
          <p className="text-[#54595F] text-sm mt-3 max-w-lg mx-auto">
            Select a category below to discover specialized testing equipment and solutions tailored to your sector&apos;s requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {applications.map((app) => (
            <a
              key={app.title}
              href="#contact"
              className="group bg-white rounded-xl p-6 flex flex-col items-center text-center gap-3 border border-gray-200 hover:border-[#0B7F3B] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-[#0B7F3B] group-hover:scale-110 transition-transform">
                {app.icon}
              </div>
              <h3 className="text-sm font-bold text-[#292929] group-hover:text-[#0B7F3B] transition-colors">
                {app.title}
              </h3>
              <p className="text-xs text-[#54595F] leading-relaxed">{app.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
