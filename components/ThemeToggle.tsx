"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function toggle() {
    const el = document.documentElement;
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    el.dataset.theme = nextTheme;
    if (nextTheme === "dark") {
      el.classList.add("dark");
    } else {
      el.classList.remove("dark");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Switch theme"
      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--pill)] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}