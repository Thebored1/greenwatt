import { adminLogin } from "@/app/actions/admin";

export default function LoginForm({ error }: { error?: string }) {
  return (
    <form action={adminLogin} className="bg-white rounded-xl p-7 shadow-sm border border-gray-200 space-y-4">
      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </p>
      )}

      <div>
        <label className="block text-xs font-semibold text-[#292929] mb-1.5">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0B7F3B] focus:border-transparent"
          placeholder="Enter admin password"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 bg-[#0B7F3B] text-white font-semibold text-sm rounded hover:bg-[#027D32] transition-colors"
      >
        Sign in
      </button>
    </form>
  );
}
