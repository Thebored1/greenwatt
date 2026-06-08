import { getSupabase } from "./supabase";

export interface Submission {
  id: string;
  name: string;
  company: string | null;
  designation: string | null;
  email: string;
  phone: string | null;
  team: "Sales" | "Support" | "Demo" | null;
  message: string | null;
  is_read: boolean;
  created_at: string;
}

export async function getSubmissions(filters?: {
  team?: string;
  unread?: boolean;
}): Promise<Submission[]> {
  const db = getSupabase();
  let query = db
    .from("greenwatt_contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (filters?.team) query = query.eq("team", filters.team);
  if (filters?.unread) query = query.eq("is_read", false);

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as Submission[];
}

export async function insertSubmission(data: {
  name: string;
  company: string | null;
  designation: string | null;
  email: string;
  phone: string | null;
  team: string | null;
  message: string | null;
}): Promise<void> {
  const { error } = await getSupabase()
    .from("greenwatt_contact_submissions")
    .insert(data);
  if (error) throw error;
}

export async function toggleRead(id: string, is_read: boolean): Promise<void> {
  const { error } = await getSupabase()
    .from("greenwatt_contact_submissions")
    .update({ is_read })
    .eq("id", id);
  if (error) throw error;
}
