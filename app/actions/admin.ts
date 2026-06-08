"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createSessionCookie, COOKIE_NAME } from "@/lib/admin-session";
import { toggleRead } from "@/lib/submissions";

export async function adminLogin(formData: FormData): Promise<void> {
  const password = formData.get("password") as string | null;

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login?error=Invalid+password.");
  }

  const sessionValue = await createSessionCookie();
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, sessionValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 8 * 60 * 60,
  });

  redirect("/admin/submissions");
}

export async function adminLogout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/admin/login");
}

export async function toggleReadAction(
  id: string,
  is_read: boolean
): Promise<void> {
  await toggleRead(id, is_read);
  revalidatePath("/admin/submissions");
}
