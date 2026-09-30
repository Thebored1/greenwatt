import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "News & Events",
  description: "News, exhibitions, and events from Green Watt — electrical testing and diagnostic solutions for India's power sector.",
  alternates: { canonical: `${SITE_URL}/news` },
};

const articles = [
  {
    slug: "elecrama",
    title: "Green Watt at ELECRAMA",
    tag: "Exhibition",
    excerpt:
      "Green Watt participates in ELECRAMA, India's largest electrical industry exhibition organised by IEEMA — showcasing relay test sets, thermal imagers, partial discharge detectors, transformer diagnostics, and solar PV testers.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="News & Events"
        subtitle="Exhibitions, product launches, and updates from Green Watt."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-[#0B7F3B] transition-all group"
              >
                <span className="inline-block text-xs font-semibold text-[#0B7F3B] bg-[#D9FFDE] px-2.5 py-1 rounded-full mb-3">
                  {article.tag}
                </span>
                <h2 className="font-bold text-[#292929] text-lg mb-2 group-hover:text-[#0B7F3B] transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-[#54595F] leading-relaxed mb-5">{article.excerpt}</p>
                <span className="text-xs font-semibold text-[#0B7F3B] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
