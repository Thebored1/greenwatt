import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { productCategories } from "@/lib/products";

export const metadata = {
  title: "Products | Greenwatt Global Ventures",
  description: "Comprehensive range of electrical testing and diagnostic instruments for power utilities, contractors, and industrial operators.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Products & Solutions"
        subtitle="Comprehensive electrical testing and diagnostic instruments sourced from globally certified manufacturers, supported by in-house application engineers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-14">

          {productCategories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-8 bg-[#0B7F3B] rounded-full" />
                <h2 className="text-2xl font-bold text-[#292929]">{cat.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.items.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group bg-[#f9fafb] rounded-xl p-5 border border-gray-200 hover:border-[#0B7F3B] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-semibold text-[#0B7F3B] uppercase tracking-wider bg-[#D9FFDE] px-2.5 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#292929] mb-2 group-hover:text-[#0B7F3B] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#54595F] leading-relaxed mb-4 line-clamp-2">
                      {product.tagline}
                    </p>
                    <span className="text-xs font-semibold text-[#0B7F3B] flex items-center gap-1">
                      View Details
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="bg-[#0B7F3B] rounded-2xl p-8 md:p-10 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Can&apos;t Find What You Need?</h2>
            <p className="text-green-100 mb-6 max-w-lg mx-auto">
              Our technical team can advise on the right instrument for your application and source specialised equipment from our global network.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-[#0B7F3B] font-bold rounded hover:bg-[#D9FFDE] transition-colors"
            >
              Speak to Our Team
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
