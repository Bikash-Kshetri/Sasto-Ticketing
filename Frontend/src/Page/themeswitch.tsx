import React, { useState, useEffect } from "react";

const ThemeSwitch: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className={`flex items-center justify-between w-24 p-1 rounded-full cursor-pointer transition-colors duration-300 ${
        isDark ? "bg-gray-700" : "bg-yellow-400"
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`w-10 h-10 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-14" : "translate-x-0"
        } flex items-center justify-center`}
      >
        {isDark ? (
          <span role="img" aria-label="moon">
            🌙
          </span>
        ) : (
          <span role="img" aria-label="sun">
            ☀️
          </span>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitch;
