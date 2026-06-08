import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getService, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `https://greenwatt.vercel.app/services/${slug}`;
  return {
    title: service.name,
    description: service.tagline,
    alternates: { canonical: url },
    openGraph: { url, title: service.name, description: service.tagline },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <PageHero
        title={service.name}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Description */}
              <div>
                <p className="text-[#54595F] leading-relaxed text-base">{service.description}</p>
              </div>

              {/* Scope sections */}
              <div>
                <h2 className="text-xl font-bold text-[#292929] mb-6 pb-2 border-b border-gray-100">
                  Service Scope
                </h2>
                <div className="space-y-6">
                  {service.scope.map((section) => (
                    <div key={section.title} className="bg-[#f9fafb] rounded-xl p-6 border border-gray-100">
                      <h3 className="font-bold text-[#0B7F3B] text-sm uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[#54595F]">
                            <span className="text-[#0B7F3B] font-bold mt-0.5 flex-shrink-0">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="text-xl font-bold text-[#292929] mb-5 pb-2 border-b border-gray-100">
                  What You Receive
                </h2>
                <ul className="space-y-2.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#0B7F3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-[#54595F]">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why choose */}
              <div className="bg-[#0B7F3B] rounded-xl p-7 text-white">
                <h2 className="text-lg font-bold mb-4">Why Choose Green Watt Field Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Qualified electrical engineers with HV testing experience",
                    "Calibrated instruments traceable to national standards",
                    "Comprehensive written reports with photographs",
                    "Rapid mobilisation across India",
                    "Independent third-party assessment",
                    "Pan-India service coverage",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-green-100">
                      <span className="text-[#D9FFDE] font-bold flex-shrink-0">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0B7F3B] rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Request a Service Proposal</h3>
                <p className="text-green-100 text-sm mb-5">
                  Tell us about your site and requirements. We&apos;ll respond with a service scope and fee proposal within one working day.
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-3 bg-white text-[#0B7F3B] font-bold text-sm rounded hover:bg-[#D9FFDE] transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="bg-[#f9fafb] rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-[#292929] text-sm mb-3">All Services</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Earth Integrity Testing", href: "/services/earth-integrity-testing" },
                    { label: "Energy Meter Testing", href: "/services/energy-meter-testing" },
                    { label: "Relay Testing", href: "/services/relay-testing" },
                    { label: "Thermal Imaging Surveys", href: "/services/thermal-imaging-services" },
                    { label: "Partial Discharge Detection", href: "/services/partial-discharge-detection" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className={`text-xs flex items-center gap-1 transition-colors ${s.href === `/services/${slug}` ? "text-[#0B7F3B] font-bold" : "text-[#54595F] hover:text-[#0B7F3B]"}`}
                      >
                        <span className="text-[#0B7F3B]">›</span> {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f9fafb] rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-[#292929] text-sm mb-2">Coverage</h4>
                <p className="text-xs text-[#54595F] leading-relaxed">
                  Delhi NCR, Maharashtra, Karnataka, Tamil Nadu, Gujarat, Eastern India and all major industrial centres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
