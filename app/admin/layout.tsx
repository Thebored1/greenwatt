import Link from "next/link";
import { cookies } from "next/headers";
import { adminLogout } from "@/app/actions/admin";
import { verifySessionCookie, COOKIE_NAME } from "@/lib/admin-session";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(COOKIE_NAME)?.value;
  const isAuthenticated = cookieValue
    ? await verifySessionCookie(cookieValue)
    : false;

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {isAuthenticated && (
        <header className="bg-[#0B7F3B] text-white">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-bold text-sm tracking-wide">
                GREENWATT{" "}
                <span className="text-green-300 font-normal">Admin</span>
              </span>
              <Link
                href="/admin/submissions"
                className="text-sm text-green-100 hover:text-white transition-colors"
              >
                Submissions
              </Link>
            </div>
            <form action={adminLogout}>
              <button
                type="submit"
                className="text-xs text-green-200 hover:text-white border border-green-500 hover:border-white px-3 py-1.5 rounded transition-colors"
              >
                Log out
              </button>
            </form>
          </div>
        </header>
      )}
      <main className={isAuthenticated ? "max-w-7xl mx-auto px-4 py-8" : ""}>
        {children}
      </main>
    </div>
  );
}
