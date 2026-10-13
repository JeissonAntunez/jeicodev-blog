"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const resolveTheme = (value: string | null): Theme => value === "light" ? "light" : "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themePreference = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let initial: Theme = "dark";
    try { initial = resolveTheme(localStorage.getItem("blog-theme")); } catch { /* Storage is optional. */ }
    applyTheme(initial);
    setTheme(initial);
    const sync = (event: StorageEvent) => {
      if (event.key !== "blog-theme" && event.key !== null) return;
      const next = resolveTheme(event.newValue);
      applyTheme(next);
      setTheme(next);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try { localStorage.setItem("blog-theme", next); } catch { /* Switching still works without storage. */ }
  }

  const label = theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
  return <button className="theme-trigger" type="button" aria-label={label} title={label} onClick={toggle}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {theme === "dark" ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/></> : <path d="M20.6 14.2A9 9 0 0 1 9.8 3.4 9 9 0 1 0 20.6 14.2Z"/>}
    </svg>
    <span>{theme === "dark" ? "Claro" : "Oscuro"}</span>
  </button>;
}
