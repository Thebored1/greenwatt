import { db } from "./db";

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
  if (filters?.team && filters?.unread) {
    return db<Submission[]>`
      select * from greenwatt_contact_submissions
      where team = ${filters.team} and is_read = false
      order by created_at desc
    `;
  }
  if (filters?.team) {
    return db<Submission[]>`
      select * from greenwatt_contact_submissions
      where team = ${filters.team}
      order by created_at desc
    `;
  }
  if (filters?.unread) {
    return db<Submission[]>`
      select * from greenwatt_contact_submissions
      where is_read = false
      order by created_at desc
    `;
  }
  return db<Submission[]>`
    select * from greenwatt_contact_submissions
    order by created_at desc
  `;
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
  await db`
    insert into greenwatt_contact_submissions
      (name, company, designation, email, phone, team, message)
    values
      (${data.name}, ${data.company}, ${data.designation},
       ${data.email}, ${data.phone}, ${data.team}, ${data.message})
  `;
}

export async function toggleRead(id: string, is_read: boolean): Promise<void> {
  await db`
    update greenwatt_contact_submissions
    set is_read = ${is_read}
    where id = ${id}
  `;
}
