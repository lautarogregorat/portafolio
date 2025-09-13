import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  const handleToggle = () => {
    console.log('Toggle clicked, current theme:', theme); // DEBUG
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        <motion.div
          key="sun"
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : 180,
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Sun className="w-6 h-6 text-yellow-400" />
        </motion.div>
        
        <motion.div
          key="moon"
          initial={false}
          animate={{
            rotate: theme === 'light' ? 0 : -180,
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Moon className="w-6 h-6 text-blue-400" />
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: theme === 'dark' 
            ? '0 0 20px rgba(251, 191, 36, 0.3)' 
            : '0 0 20px rgba(59, 130, 246, 0.3)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};