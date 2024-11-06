import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextProps {
  isLightTheme: boolean;
  handleToggleLightTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  function handleToggleLightTheme() {
    document.body.classList.toggle("light-theme");
    setIsLightTheme((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        handleToggleLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
