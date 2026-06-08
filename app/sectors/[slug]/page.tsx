import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getSector, sectors } from "@/lib/sectors";
import { getProduct } from "@/lib/products";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: `${sector.name} | Greenwatt Global Ventures`,
    description: sector.tagline,
  };
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const relatedProducts = sector.products
    .map((s) => getProduct(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProduct>>[];

  return (
    <>
      <Navbar />
      <PageHero
        title={sector.name}
        subtitle={sector.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: sector.name, href: `/sectors/${sector.slug}` },
        ]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              <p className="text-[#54595F] leading-relaxed text-base">{sector.description}</p>

              {/* Applications */}
              <div>
                <h2 className="text-xl font-bold text-[#292929] mb-6 pb-2 border-b border-gray-100">
                  Key Applications
                </h2>
                <div className="space-y-5">
                  {sector.applications.map((app) => (
                    <div key={app.title} className="bg-[#f9fafb] rounded-xl p-6 border border-gray-100">
                      <h3 className="font-bold text-[#0B7F3B] text-sm uppercase tracking-wider mb-3">
                        {app.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {app.items.map((item) => (
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

              {/* Products for this sector */}
              {relatedProducts.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[#292929] mb-5 pb-2 border-b border-gray-100">
                    Products Used in This Sector
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedProducts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="flex items-center gap-3 bg-[#f9fafb] rounded-xl p-4 border border-gray-100 hover:border-[#0B7F3B] hover:shadow-sm transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#D9FFDE] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#0B7F3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#292929] group-hover:text-[#0B7F3B] transition-colors">
                            {p.name}
                          </p>
                          <p className="text-xs text-[#54595F]">{p.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Clients */}
              {sector.clients && sector.clients.length > 0 && (
                <div className="bg-[#0B7F3B] rounded-xl p-6 text-white">
                  <h2 className="text-lg font-bold mb-4">Clients in This Sector</h2>
                  <div className="flex flex-wrap gap-2">
                    {sector.clients.map((c) => (
                      <span key={c} className="bg-white/15 px-3 py-1 rounded-full text-xs font-medium text-green-50">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0B7F3B] rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Discuss Your Requirements</h3>
                <p className="text-green-100 text-sm mb-5">
                  Contact our technical team for application advice, product recommendations, or a service proposal.
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-3 bg-white text-[#0B7F3B] font-bold text-sm rounded hover:bg-[#D9FFDE] transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="bg-[#f9fafb] rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-[#292929] text-sm mb-3">All Sectors</h4>
                <ul className="space-y-2">
                  {sectors.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/sectors/${s.slug}`}
                        className={`text-xs flex items-center gap-1 transition-colors ${s.slug === slug ? "text-[#0B7F3B] font-bold" : "text-[#54595F] hover:text-[#0B7F3B]"}`}
                      >
                        <span className="text-[#0B7F3B]">›</span> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
