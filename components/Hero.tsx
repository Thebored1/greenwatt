"use client";
const VIDEO = "/wp-uploads/2026/04/Video-Project-14-1-1.mp4";
const POSTER = "/wp-uploads/2026/04/Untitled-1.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER}
          className="w-full h-full object-cover"
        >
          <source src={VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="text-[#7ed500] text-sm font-semibold uppercase tracking-widest mb-4">
            Pioneering the Test, Leading the Future
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Powering Reliability Through Advanced Testing Solutions
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            Bringing innovative technology driven solutions for power, energy and telecom sector in the country.
          </p>
          <a
            href="#products"
            className="inline-block px-8 py-3.5 bg-[#0B7F3B] text-white font-semibold text-sm uppercase tracking-wider rounded hover:bg-[#027D32] transition-colors shadow-lg"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
}
