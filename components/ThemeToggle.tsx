"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="ml-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg text-white backdrop-blur transition hover:bg-white/30 active:scale-90"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
