import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{
          x: theme === 'dark' ? 28 : 2,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-1 w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-black" />
        ) : (
          <Sun className="w-3 h-3 text-black" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

