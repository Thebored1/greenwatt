import Image from "next/image";


const stats = [
  { value: "15", suffix: "+", label: "Years Experience" },
  { value: "1.2", suffix: "K", label: "Projects Done" },
  { value: "100", suffix: "%", label: "Safety Compliance" },
  { value: "24/", suffix: "7", label: "Global Support" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <div className="relative">
            <Image
              src="/wp-uploads/2026/04/Untitled-1.webp"
              alt="Greenwatt – Built by Engineers"
              width={560}
              height={500}
              className="rounded-xl object-cover w-full shadow-lg"
              unoptimized
            />
          </div>

          {/* Right: text */}
          <div>
            <p className="text-[#0B7F3B] text-xs font-bold uppercase tracking-widest mb-3 pb-2 border-l-4 border-[#0B7F3B] pl-3">
              About Greenwatt
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#292929] leading-tight mb-5">
              Built by Engineers Driven by Innovation
            </h2>
            <p className="text-[#54595F] text-sm leading-relaxed mb-4">
              Greenwatt Global Ventures is a brain child of four professionals, who after working in the various
              domains of Electrical industry for 10-15 years, came together to consolidate their vast experience
              to create a platform to provide solutions that are innovative and driven by latest technology, for
              power, energy and telecom sector pan India.
            </p>
            <p className="text-[#54595F] text-sm leading-relaxed mb-8">
              We provide E2E solutions that includes consulting, equipment installation and demonstration,
              Technical and application support for our products.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="border border-[#D9FFDE] rounded-lg p-4 bg-[#f9fafb]">
                  <p className="text-3xl font-bold text-[#0B7F3B] font-[family-name:var(--font-poppins)]">
                    {s.value}<span>{s.suffix}</span>
                  </p>
                  <p className="text-xs text-[#54595F] mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0B7F3B] text-white font-semibold text-sm rounded hover:bg-[#027D32] transition-colors"
            >
              Read Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
