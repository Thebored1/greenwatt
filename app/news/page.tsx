import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "News & Events | Greenwatt Global Ventures",
  description: "Latest news, events, and updates from Greenwatt Global Ventures.",
};

const articles = [
  {
    slug: "elecrama",
    title: "Green Watt at ELECRAMA — India's Premier Electrical Exhibition",
    excerpt: "Green Watt participates in ELECRAMA, India's largest electrical industry exhibition, showcasing its full portfolio of electrical testing equipment and diagnostic services with live instrument demonstrations.",
    date: "2026-01-15",
    category: "Events",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="News & Events"
        subtitle="Latest updates, exhibition participation, and announcements from Greenwatt Global Ventures."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }]}
      />

      <main className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group bg-[#f9fafb] rounded-xl overflow-hidden border border-gray-200 hover:border-[#0B7F3B] hover:shadow-md transition-all"
              >
                <div className="bg-[#0B7F3B] p-5">
                  <span className="text-xs font-bold text-[#D9FFDE] uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#54595F] mb-2">{article.date}</p>
                  <h3 className="font-bold text-[#292929] mb-3 group-hover:text-[#0B7F3B] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#54595F] leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <span className="text-xs font-semibold text-[#0B7F3B] mt-4 flex items-center gap-1">
                    Read More <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
