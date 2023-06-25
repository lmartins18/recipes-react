import { useContext, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../../../contexts/theme-context";

export const ThemeToggleButton = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);
  const darkTheme = currentTheme === "dark";

  function changeTheme() {
    const newTheme = darkTheme ? "light" : "dark";
    changeCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    if (window) {
      const savedTheme = localStorage.getItem("theme") || "light";
      changeCurrentTheme(savedTheme as "light" | "dark");
    }
  }, []);

  return (
    <button onClick={changeTheme} title="Toggle Theme" className="text-inherit">
      {darkTheme ? (
        <BsFillMoonStarsFill id="theme-toggle-light-icon" />
      ) : (
        <BsFillSunFill id="theme-toggle-dark-icon" />
      )}
    </button>
  );
};
