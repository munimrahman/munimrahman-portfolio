import { cookies } from "next/headers";

export type Theme = "light" | "dark" | "system";

export async function getServerTheme(): Promise<Theme> {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");

  if (theme && ["light", "dark", "system"].includes(theme.value)) {
    return theme.value as Theme;
  }

  return "system";
}

export function getSystemTheme(): "light" | "dark" {
  // Default to light for SSR, will be corrected on client-side
  return "light";
}
