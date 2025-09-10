// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// type Theme = "dark" | "light" | "system";

// type ThemeProviderProps = {
//   children: React.ReactNode;
//   defaultTheme?: Theme;
//   storageKey?: string;
// };

// type ThemeProviderState = {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// };

// const initialState: ThemeProviderState = {
//   theme: "system",
//   setTheme: () => null,
// };

// const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// export function ThemeProvider({
//   children,
//   defaultTheme = "system",
//   storageKey = "gotendia-ui-theme",
//   ...props
// }: ThemeProviderProps) {
//   const [theme, setTheme] = useState<Theme>(
//     () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
//   );

//   useEffect(() => {
//     const root = window.document.documentElement;

//     root.classList.remove("light", "dark");

//     if (theme === "system") {
//       const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
//         .matches
//         ? "dark"
//         : "light";

//       root.classList.add(systemTheme);
//       return;
//     }

//     root.classList.add(theme);
//   }, [theme]);

//   const value = {
//     theme,
//     setTheme: (theme: Theme) => {
//       localStorage.setItem(storageKey, theme);
//       setTheme(theme);
//     },
//   };

//   return (
//     <ThemeProviderContext.Provider {...props} value={value}>
//       {children}
//     </ThemeProviderContext.Provider>
//   );
// }

// export const useTheme = () => {
//   const context = useContext(ThemeProviderContext);

//   if (context === undefined)
//     throw new Error("useTheme must be used within a ThemeProvider");

//   return context;
// };

// components/ThemeProvider.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "gotendia-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Initialize to defaultTheme only (no localStorage access here)
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // On mount (client) attempt to read stored theme
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(storageKey) as Theme | null;
      if (stored) {
        setThemeState(stored);
      }
    } catch (e) {
      // ignore localStorage errors (e.g. quota, private mode)
    }
  }, [storageKey]);

  // Apply theme classes to <html> and respond to system changes when needed
  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = window.document.documentElement;

    const applyThemeToRoot = (t: Theme) => {
      root.classList.remove("light", "dark");

      if (t === "system") {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        root.classList.add(prefersDark ? "dark" : "light");
        return;
      }

      root.classList.add(t);
    };

    applyThemeToRoot(theme);

    // If system, listen for changes to OS theme and update root class accordingly
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (theme !== "system") return;
      root.classList.remove("light", "dark");
      const dark = "matches" in e ? e.matches : mql.matches ?? false;
      root.classList.add(dark ? "dark" : "light");
    };

    // Support older browsers that use addListener
    try {
      if (typeof mql.addEventListener === "function") {
        // modern API
        (mql as MediaQueryList).addEventListener("change", handleChange as any);
      } else {
        // legacy
        (mql as MediaQueryList).addListener(handleChange as any);
      }
    } catch {
      // ignore if matchMedia listeners are not supported
    }

    return () => {
      try {
        if (typeof mql.removeEventListener === "function") {
          (mql as MediaQueryList).removeEventListener(
            "change",
            handleChange as any
          );
        } else {
          (mql as MediaQueryList).removeListener(handleChange as any);
        }
      } catch {
        // ignore
      }
    };
  }, [theme]);

  // Public setter that persists to localStorage (client-only)
  const setTheme = (t: Theme) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(storageKey, t);
      } catch {
        // ignore storage errors
      }
    }
    setThemeState(t);
  };

  const value: ThemeProviderState = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
