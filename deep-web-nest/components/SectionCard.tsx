import React from 'react';
import type { Section } from '../types';

interface SectionCardProps {
  section: Section;
}

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 text-center group cursor-pointer transform hover:scale-105 hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col items-center"
    >
      <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
        {section.icon}
      </div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {section.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        {section.description}
      </p>
    </div>
  );
};

export default SectionCard;
