import React from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path><path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path><path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
);

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className="w-16 h-8 rounded-full bg-slate-200 dark:bg-gray-800 flex items-center justify-between p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
        aria-label="Toggle theme"
      >
        <div className={`transform transition-transform duration-300 ${theme === 'light' ? 'translate-x-0' : 'translate-x-8'}`}>
          <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-md">
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
