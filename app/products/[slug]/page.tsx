import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Greenwatt Global Ventures`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <PageHero
        title={product.name}
        subtitle={product.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name, href: `/products/${product.slug}` },
        ]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Product image + description */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {product.image && (
                  <div className="bg-[#f9fafb] rounded-xl p-8 flex items-center justify-center min-h-[240px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={320}
                      height={240}
                      className="object-contain max-h-56 w-auto"
                      unoptimized
                    />
                  </div>
                )}
                <div className={product.image ? "" : "md:col-span-2"}>
                  {product.brand && (
                    <span className="text-xs font-bold text-[#0B7F3B] uppercase tracking-widest bg-[#D9FFDE] px-3 py-1 rounded-full mb-3 inline-block">
                      {product.brand}
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-[#292929] mb-3">{product.name}</h2>
                  <p className="text-[#54595F] text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>

              {/* Key features */}
              <div>
                <h2 className="text-xl font-bold text-[#292929] mb-5 pb-2 border-b border-gray-100">
                  Key Features
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 bg-[#f9fafb] rounded-lg p-3.5 border border-gray-100">
                      <span className="w-5 h-5 rounded-full bg-[#0B7F3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-[#54595F] leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-xl font-bold text-[#292929] mb-5 pb-2 border-b border-gray-100">
                  Applications
                </h2>
                <ul className="space-y-2">
                  {product.applications.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-[#54595F]">
                      <span className="text-[#0B7F3B] font-bold mt-0.5">›</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              {product.specs && product.specs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[#292929] mb-5 pb-2 border-b border-gray-100">
                    Technical Specifications
                  </h2>
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specs.map((s, i) => (
                          <tr key={s.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}>
                            <td className="py-3 px-4 font-semibold text-[#292929] w-2/5">{s.label}</td>
                            <td className="py-3 px-4 text-[#54595F]">{s.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA */}
              <div className="bg-[#0B7F3B] rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Enquire About This Product</h3>
                <p className="text-green-100 text-sm mb-5">
                  Request a quote, arrange a product demonstration, or speak to our technical team.
                </p>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="block text-center py-3 bg-white text-[#0B7F3B] font-bold text-sm rounded hover:bg-[#D9FFDE] transition-colors"
                >
                  Take Enquiry
                </Link>
                <Link
                  href="/contact"
                  className="block text-center py-3 border border-white/40 text-white font-medium text-sm rounded hover:bg-white/10 transition-colors mt-2"
                >
                  Contact Us
                </Link>
              </div>

              {/* Category */}
              <div className="bg-[#f9fafb] rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-[#292929] text-sm mb-3">Category</h4>
                <span className="text-sm text-[#0B7F3B] font-medium">{product.category}</span>
              </div>

              {/* All products link */}
              <div className="bg-[#f9fafb] rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-[#292929] text-sm mb-3">Explore All Products</h4>
                <Link href="/products" className="text-sm text-[#0B7F3B] hover:underline font-medium">
                  View Full Product Range →
                </Link>
              </div>

              {/* Sectors used in */}
              <div className="bg-[#f9fafb] rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-[#292929] text-sm mb-3">Related Services</h4>
                <ul className="space-y-1.5">
                  {[
                    { label: "Relay Testing Service", href: "/services/relay-testing" },
                    { label: "Thermal Imaging Surveys", href: "/services/thermal-imaging-services" },
                    { label: "Earth Integrity Testing", href: "/services/earth-integrity-testing" },
                    { label: "PD Detection Service", href: "/services/partial-discharge-detection" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-xs text-[#54595F] hover:text-[#0B7F3B] transition-colors flex items-center gap-1">
                        <span className="text-[#0B7F3B]">›</span> {s.label}
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
