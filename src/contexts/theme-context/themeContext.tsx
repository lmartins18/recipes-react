import { createContext } from "react";

const defaultValue = {
  currentTheme: "light",
  changeCurrentTheme: (newTheme: "light" | "dark") => {newTheme},
};

export const ThemeContext = createContext(defaultValue);

