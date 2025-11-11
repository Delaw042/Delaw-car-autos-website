// Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import FadeSlideUnderlineLink from "./FadeSlideUnderlineLink";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // close mobile menu on scroll or resize (optional)
  useEffect(() => {
    const listener = () => setMenuOpen(false);
    window.addEventListener("scroll", listener);
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("scroll", listener);
      window.removeEventListener("resize", listener);
    };
  }, []);

  const links = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-heading font-extrabold tracking-wide text-red-600 dark:text-red-400">
          DCA
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-body">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              onSetActive={() => setActiveSection(to)}
            >
              <FadeSlideUnderlineLink
                color={darkMode ? "white" : "black"}
                hoverColor="red"
                center
                active={activeSection === to}
                className="text-lg font-medium"
              >
                {label}
              </FadeSlideUnderlineLink>
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="md:hidden text-2xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white dark:bg-gray-900 shadow-lg">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              onSetActive={() => setActiveSection(to)}
              onClick={() => setMenuOpen(false)}
            >
              <FadeSlideUnderlineLink
                color={darkMode ? "white" : "black"}
                hoverColor="red"
                center
                active={activeSection === to}
                className="text-lg font-semibold"
              >
                {label}
              </FadeSlideUnderlineLink>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
