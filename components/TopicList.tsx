
import React from 'react';
import type { StoryTopic, Level } from '../types';
import { ArrowLeftIcon } from './icons';
import { LEVEL_STYLES } from '../constants';

interface TopicListProps {
  topics: StoryTopic[];
  onTopicSelect: (topic: StoryTopic) => void;
  onBack: () => void;
  level: Level;
}

const TopicList: React.FC<TopicListProps> = ({ topics, onTopicSelect, onBack, level }) => {
  const styles = LEVEL_STYLES[level];

  return (
    <div className="animate-fade-in">
        <div className="flex items-center mb-8">
            <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-200 transition-colors mr-4">
                <ArrowLeftIcon />
            </button>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border-2 border-slate-200">
                <span className="font-bold text-slate-800 text-2xl">{level}</span>
            </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {topics.map((topic) => (
            <div
            key={topic.id}
            onClick={() => onTopicSelect(topic)}
            className={`p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl border-2 border-transparent transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-center text-center relative pt-8 ${styles.hoverBorder}`}
            >
            <div className={`absolute top-[-1rem] left-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md ${styles.solidBg} border-2 border-white`}>
              {topic.id + 1}
            </div>
            <p className="font-semibold text-slate-800" dir="ltr">{topic.germanTitle}</p>
            <p className="font-vazir text-slate-600 mt-1" dir="rtl">{topic.persianTitle}</p>
            </div>
        ))}
        </div>
    </div>
  );
};

export default TopicList;