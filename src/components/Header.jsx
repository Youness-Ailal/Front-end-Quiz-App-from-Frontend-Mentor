import { useEffect, useState } from "react";
import "../styles/Header.scss";
import Logo from "./Logo";
import { motion } from "framer-motion";
function Header({ subject }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  function setDarkMode() {
    localStorage.setItem("theme", "dark");
  }
  function setLightMode() {
    localStorage.setItem("theme", "light");
  }
  const handleThemeToggle = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      newTheme === "light" ? setLightMode() : setDarkMode();
      // document.querySelector("body").setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <motion.header
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between flex-wrap">
      <Logo subject={subject}></Logo>
      <div className=" flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <label className="switch">
          <input
            onChange={handleThemeToggle}
            type="checkbox"
            defaultChecked={theme === "dark"}></input>
          <span className="slider"></span>
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
    </motion.header>
  );
}

export default Header;
