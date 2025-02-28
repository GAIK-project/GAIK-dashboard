"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function enableGuestMode() {
  const cookieStore = await cookies();

  // Set guest mode cookie
  cookieStore.set("guest-mode", "true", {
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });

  // Set default model cookie
  cookieStore.set("model-id", "gpt-4o-mini", {
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  // Redirect to home page
  redirect("/");
}
