import Link from "next/link";

interface Crumb { label: string; href: string }

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  dark?: boolean;
}

export default function PageHero({ title, subtitle, breadcrumbs, dark = false }: Props) {
  return (
    <section className={`pt-28 pb-14 ${dark ? "bg-[#0c0c0c]" : "bg-[#0B7F3B]"}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs mb-4 text-green-200/70">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-green-100 mt-3 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
