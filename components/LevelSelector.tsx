
import React from 'react';
import { LEVELS, LEVEL_STYLES } from '../constants';
import type { Level } from '../types';

interface LevelSelectorProps {}

const LEVEL_URLS: Record<Level, string> = {
  A1: 'https://apfel.ir/geschichten-a1',
  A2: 'https://apfel.ir/geschichten-a2',
  B1: 'https://apfel.ir/geschichten-b1',
  B2: 'https://apfel.ir/geschichten-b2',
};

const LevelSelector: React.FC<LevelSelectorProps> = () => {
  const handleLevelClick = (url: string) => {
    window.location.href = url;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, url: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLevelClick(url);
    }
  };

  return (
    <div className="text-center p-4 pt-8 md:pt-12">
      <img 
        src="https://apfel.ir/1740922p.png" 
        alt="German Story Reader Banner" 
        className="mx-auto mb-4 w-[70px]"
      />
      <div className="mb-10">
        <h1 className="text-xl font-semibold text-slate-700">Willst du eine Geschichte?</h1>
        <p className="text-slate-500 mt-1">Wähle einfach dein Niveau.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {LEVELS.map((level) => {
          const styles = LEVEL_STYLES[level];
          const url = LEVEL_URLS[level];
          return (
            <div
              key={level}
              onClick={() => handleLevelClick(url)}
              onKeyDown={(e) => handleKeyDown(e, url)}
              role="button"
              tabIndex={0}
              className={`cursor-pointer block text-center p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 font-bold ${styles.bg} ${styles.hoverBg} ${styles.text} ${styles.border} ${styles.ring}`}
            >
              <span className="text-4xl">{level}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default LevelSelector;
