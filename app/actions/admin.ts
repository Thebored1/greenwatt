"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  createSessionCookie,
  verifySessionCookie,
  timingSafeEqual,
  COOKIE_NAME,
} from "@/lib/admin-session";
import { toggleRead } from "@/lib/submissions";

// Server actions are reachable by direct POST from any route, so the /admin
// proxy doesn't protect them — each admin action must check the session itself
async function isAuthenticated(): Promise<boolean> {
  const cookieValue = (await cookies()).get(COOKIE_NAME)?.value;
  return cookieValue ? verifySessionCookie(cookieValue) : false;
}

export async function adminLogin(formData: FormData): Promise<void> {
  const password = formData.get("password") as string | null;
  const expected = process.env.ADMIN_PASSWORD;

  if (!password || !expected || !timingSafeEqual(password, expected)) {
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
  if (!(await isAuthenticated())) throw new Error("Unauthorized");
  await toggleRead(id, is_read);
  revalidatePath("/admin/submissions");
}
