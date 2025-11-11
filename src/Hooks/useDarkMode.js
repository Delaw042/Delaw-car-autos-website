import { useEffect, useState } from "react";

export default function useDarkMode(defaultMode = null) {
  // returns [theme, mode, setMode, cycleMode]
  // theme = 'dark' or 'light' (for class on <html>), mode = 'dark'|'light'|'system'
  const stored = localStorage.getItem("site_theme_mode");
  const [mode, setMode] = useState(stored || defaultMode || "system");
  const [theme, setTheme] = useState(() => {
    if (stored === "dark") return "dark";
    if (stored === "light") return "light";
    // follow system
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const apply = (m) => {
      if (m === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("site_theme_mode", "dark");
        setTheme("dark");
      } else if (m === "light") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("site_theme_mode", "light");
        setTheme("light");
      } else {
        // system
        localStorage.removeItem("site_theme_mode");
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
          document.documentElement.classList.add("dark");
          setTheme("dark");
        } else {
          document.documentElement.classList.remove("dark");
          setTheme("light");
        }
      }
    };

    apply(mode);

    const listener = (e) => {
      if (mode === "system") {
        const prefersDark = e.matches;
        if (prefersDark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      }
    };

    const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    mq && mq.addListener && mq.addListener(listener);
    return () => mq && mq.removeListener && mq.removeListener(listener);
  }, [mode]);

  const cycleMode = () => {
    setMode((m) => (m === "light" ? "dark" : m === "dark" ? "system" : "light"));
  };

  return [theme, mode, setMode, cycleMode];
}
