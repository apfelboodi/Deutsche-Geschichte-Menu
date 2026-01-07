
import React from 'react';
import { LEVELS, LEVEL_STYLES } from '../constants';
import type { Level } from '../types';

interface LevelSelectorProps {
  onLevelSelect: (level: Level) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ onLevelSelect }) => {
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
          return (
            <button
              key={level}
              onClick={() => onLevelSelect(level)}
              className={`p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 font-bold ${styles.bg} ${styles.hoverBg} ${styles.text} ${styles.border} ${styles.ring}`}
            >
              <span className="text-4xl">{level}</span>
            </button>
          )
        })}
      </div>
    </div>
  );
};

export default LevelSelector;