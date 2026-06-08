"use server";

export type ContactResult =
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContact(
  formData: FormData
): Promise<ContactResult> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();

  if (!name || !email) {
    return { status: "error", message: "Name and email are required." };
  }

  // TODO: replace with real DB insert when storage is chosen
  // const payload = {
  //   name,
  //   email,
  //   company: (formData.get("company") as string | null)?.trim() || null,
  //   designation: (formData.get("designation") as string | null)?.trim() || null,
  //   phone: (formData.get("phone") as string | null)?.trim() || null,
  //   team: (formData.get("team") as string | null) || null,
  //   message: (formData.get("message") as string | null)?.trim() || null,
  // }

  return { status: "success" };
}
