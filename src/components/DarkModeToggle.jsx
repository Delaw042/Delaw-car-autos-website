import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Laptop } from "lucide-react";
import useDarkMode from "../Hooks/useDarkMode";

export default function DarkModeToggle() {
  const [theme, mode, setMode, cycleMode] = useDarkMode();

  const modeIcons = {
    light: <Sun className="text-orange-400 w-5 h-5" />,
    dark: <Moon className="text-yellow-300 w-5 h-5" />,
    system: <Laptop className="text-blue-400 w-5 h-5" />,
  };

  const labels = {
    light: "Light mode",
    dark: "Dark mode",
    system: "System mode",
  };

  return (
    <button
      onClick={cycleMode}
      className="relative flex items-center justify-center w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full shadow-md transition-transform hover:scale-110 focus:outline-none"
      aria-label={`Switch theme (${labels[mode]})`}
      title={labels[mode]}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {modeIcons[mode]}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
