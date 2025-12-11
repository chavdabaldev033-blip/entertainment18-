import React, { useState, useEffect } from 'react';
import { SECTIONS } from './constants';
import SectionCard from './components/SectionCard';
import ThemeToggle from './components/ThemeToggle';

type Theme = 'light' | 'dark';

const AdPlaceholder = ({ position }: { position: 'left' | 'right' }) => (
  <div className={`fixed top-0 h-full w-40 hidden xl:flex items-center justify-center ${position === 'left' ? 'left-0' : 'right-0'}`}>
    <div className="bg-gray-200 dark:bg-gray-800 w-full h-3/4 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
      Ad Space
    </div>
  </div>
);

function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="relative min-h-screen text-gray-800 dark:text-gray-200 font-sans">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <AdPlaceholder position="left" />
      <AdPlaceholder position="right" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <header className="text-center mb-12 sm:mb-16">
          <a href="#" className="inline-block">
            <img 
              src={theme === 'dark' ? 'https://i.imgur.com/3Y2j1pQ.png' : 'https://i.imgur.com/e7s33n4.png'} 
              alt="Deep Web Nest Logo" 
              className="h-16 sm:h-20 md:h-24 mx-auto transition-all duration-300"
            />
          </a>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Your gateway to entertainment and tools
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SECTIONS.map((section) => (
              <SectionCard key={section.title} section={section} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
