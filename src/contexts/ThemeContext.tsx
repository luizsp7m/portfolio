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

      setCurrentTheme("light");
    } else {
      Cookies.set("theme", "dark");
      document.body.classList.remove("light-theme");
      setCurrentTheme("dark");
    }
  }

  useLayoutEffect(() => {
    if (currentTheme === "dark") {
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
    }
  }, [currentTheme]);

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
