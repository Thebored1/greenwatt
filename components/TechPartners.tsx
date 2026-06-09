import Image from "next/image";

const partners = [
  { src: "/partner-40.jpeg", alt: "MULTI Measuring Instruments" },
  { src: "/partner-41.jpeg", alt: "OFIL Systems" },
  { src: "/partner-42.jpeg", alt: "SATIR" },
  { src: "/partner-43.jpeg", alt: "Hubbell Power Systems" },
  { src: "/partner-44.webp", alt: "FSHV" },
];

/*
  Repeat 4× so the track is always wider than any viewport.
  Each card uses mx-3 (margin, not gap) so every item is an identical
  fixed width — this makes translateX(-25%) land on an exact copy boundary
  and the loop is perfectly seamless.
*/
const allPartners = [...partners, ...partners, ...partners, ...partners];

export default function TechPartners() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="text-[#0B7F3B] text-xs font-bold uppercase tracking-widest mb-2">
          Trusted Principals
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#292929]">
          Our Technology Partners
        </h2>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max">
          {allPartners.map((p, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-52 h-32 mx-3 bg-white border border-gray-200 rounded-xl flex items-center justify-center px-6 py-4 shadow-sm hover:shadow-md hover:border-[#0B7F3B]/30 transition-all duration-300"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={180}
                height={90}
                style={{ width: "auto", height: "auto" }}
                className="object-contain max-h-20 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
