import Image from "next/image";

const partners = [
  { src: "/partner-39.jpeg", alt: "Kingsine" },
  { src: "/partner-40.jpeg", alt: "MULTI Measuring Instruments" },
  { src: "/partner-41.jpeg", alt: "OFIL Systems" },
  { src: "/partner-42.jpeg", alt: "SATIR" },
  { src: "/partner-43.jpeg", alt: "Hubbell Power Systems" },
  { src: "/partner-44.webp", alt: "FSHV" },
];

/* duplicate for seamless loop */
const allPartners = [...partners, ...partners];

export default function TechPartners() {
  return (
    <section className="py-14 bg-[#0c0c0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-center text-white text-2xl md:text-3xl font-bold tracking-wide uppercase">
          Our Technology Partners
        </h2>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden">
        <div className="marquee-track flex gap-8 w-max">
          {allPartners.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-36 h-20 bg-white rounded-lg flex items-center justify-center px-4 py-3 shadow"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
