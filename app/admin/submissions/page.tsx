import Link from "next/link";
import { getSubmissions } from "@/lib/submissions";
import ReadToggle from "./ReadToggle";

export const metadata = { title: "Submissions | Greenwatt Admin" };

const TEAM_COLORS: Record<string, string> = {
  Sales: "bg-green-100 text-green-800",
  Support: "bg-blue-100 text-blue-800",
  Demo: "bg-purple-100 text-purple-800",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(iso));
}

type SearchParams = Promise<{ team?: string; unread?: string }>;

export default async function SubmissionsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const teamFilter = params.team;
  const unreadOnly = params.unread === "1";

  let all: Awaited<ReturnType<typeof getSubmissions>> = [];
  let filtered: typeof all = [];
  let dbError: string | null = null;

  try {
    [all, filtered] = await Promise.all([
      getSubmissions(),
      getSubmissions({ team: teamFilter, unread: unreadOnly || undefined }),
    ]);
  } catch (err) {
    dbError =
      process.env.NODE_ENV === "development"
        ? String(err)
        : "Could not connect to the database. Check that NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in your Vercel environment variables, then redeploy.";
  }

  const totalUnread = all.filter((s) => !s.is_read).length;

  const tabs = [
    { label: "All", href: "/admin/submissions", active: !teamFilter && !unreadOnly },
    { label: "Sales", href: "/admin/submissions?team=Sales", active: teamFilter === "Sales" },
    { label: "Support", href: "/admin/submissions?team=Support", active: teamFilter === "Support" },
    { label: "Demo", href: "/admin/submissions?team=Demo", active: teamFilter === "Demo" },
    { label: "Unread", href: "/admin/submissions?unread=1", active: unreadOnly },
  ];

  return (
    <div className="space-y-6">
      {dbError && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          <strong className="font-semibold">Database error:</strong> {dbError}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#292929]">Contact Submissions</h1>
          <p className="text-sm text-[#54595F] mt-0.5">
            {all.length} total &middot;{" "}
            <span className="text-[#0B7F3B] font-semibold">{totalUnread} unread</span>
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-1.5">
        {tabs.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              tab.active
                ? "bg-[#0B7F3B] text-white"
                : "bg-white border border-gray-200 text-[#54595F] hover:border-[#0B7F3B] hover:text-[#0B7F3B]"
            }`}
          >
            {tab.label}
            {tab.label === "Unread" && totalUnread > 0 && (
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${tab.active ? "bg-white/20" : "bg-[#D9FFDE] text-[#0B7F3B]"}`}>
                {totalUnread}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-[#54595F] text-sm">No submissions found for this filter.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f9fafb] border-b border-gray-200">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#54595F] uppercase tracking-wider whitespace-nowrap">Date</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#54595F] uppercase tracking-wider">Name</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#54595F] uppercase tracking-wider">Company</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#54595F] uppercase tracking-wider">Email</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#54595F] uppercase tracking-wider whitespace-nowrap">Phone</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#54595F] uppercase tracking-wider">Team</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#54595F] uppercase tracking-wider">Message</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#54595F] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((sub) => (
                  <tr
                    key={sub.id}
                    className={`hover:bg-[#f9fafb] transition-colors ${
                      !sub.is_read ? "border-l-2 border-l-[#0B7F3B]" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-xs text-[#54595F] whitespace-nowrap">
                      {formatDate(sub.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-[#292929] whitespace-nowrap">{sub.name}</p>
                      {sub.designation && (
                        <p className="text-xs text-[#54595F] mt-0.5">{sub.designation}</p>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs text-[#54595F]">
                      {sub.company ?? <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${sub.email}`}
                        className="text-xs text-[#0B7F3B] hover:underline"
                      >
                        {sub.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-xs text-[#54595F] whitespace-nowrap">
                      {sub.phone ?? <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      {sub.team ? (
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            TEAM_COLORS[sub.team] ?? "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {sub.team}
                        </span>
                      ) : (
                        <span className="text-gray-300 text-xs">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs text-[#54595F] max-w-xs">
                      {sub.message ? (
                        <span title={sub.message}>
                          {sub.message.length > 70
                            ? sub.message.slice(0, 70) + "…"
                            : sub.message}
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <ReadToggle id={sub.id} initialIsRead={sub.is_read} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
