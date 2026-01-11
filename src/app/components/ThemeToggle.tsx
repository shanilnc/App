import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE8D6] to-[#FFD4BF] dark:from-[#1F2937] dark:to-[#374151] shadow-md hover:shadow-lg transition-all duration-250 ease-in-out flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Sun className="w-5 h-5 text-[#FF8E53] transition-all duration-250" />
      ) : (
        <Moon className="w-5 h-5 text-[#60A5FA] transition-all duration-250" />
      )}
    </button>
  );
}