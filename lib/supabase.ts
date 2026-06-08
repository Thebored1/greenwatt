import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Lazy singleton — created on first request, never at build/import time
let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error(
        "Missing Supabase env vars: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel → Settings → Environment Variables, then redeploy."
      );
    }
    _client = createClient(url, key, { auth: { persistSession: false } });
  }
  return _client;
}
