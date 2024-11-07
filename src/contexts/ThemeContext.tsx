import Cookies from "js-cookie";

import { createContext, ReactNode, useLayoutEffect, useState } from "react";

interface ThemeContextProps {
  isLightTheme: boolean;
  handleToggleLightTheme: () => void;
}

interface ThemeProviderProps {
  defaultTheme: "dark" | "light";
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ defaultTheme, children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">(
    defaultTheme
  );

  function handleToggleLightTheme() {
    if (currentTheme === "dark") {
      Cookies.set("theme", "light");
      document.body.classList.add("light-theme");
      setCurrentTheme("light");
    } else {
      Cookies.set("theme", "dark");
      document.body.classList.remove("light-theme");
      setCurrentTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme: currentTheme === "light",
        handleToggleLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
