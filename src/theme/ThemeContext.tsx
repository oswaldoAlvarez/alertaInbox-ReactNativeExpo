import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { Appearance } from "react-native";
import { darkColors, lightColors } from "./colors";

const defaultTheme = Appearance.getColorScheme() ?? "light";

export const ThemeContext = createContext({
  theme: defaultTheme,
  colors: lightColors,
  toggleTheme: () => {},
  isDark: defaultTheme === "dark",
});

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const value = useMemo(
    () => ({
      theme,
      colors: theme === "dark" ? darkColors : lightColors,
      toggleTheme,
      isDark: theme === "dark",
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useThemeToggle = () => useContext(ThemeContext);
