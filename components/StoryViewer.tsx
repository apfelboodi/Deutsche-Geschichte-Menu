
import React, { useState } from 'react';
import type { StoryContent, Level } from '../types';
import { ArrowLeftIcon } from './icons';
import { LEVEL_STYLES } from '../constants';

interface StoryViewerProps {
  storyContent: StoryContent | null;
  onBack: () => void;
  topicTitle: string;
  storyNumber: number;
  level: Level;
}

const AudioPlayer: React.FC<{ audioUrl?: string }> = ({ audioUrl }) => {
    if (!audioUrl) {
        return null; // Don't render anything if there's no audio URL
    }
    return (
        <div className="mb-6">
            <audio controls src={audioUrl} className="w-full rounded-lg">
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

const TranslateButton: React.FC<{onClick: () => void}> = ({ onClick }) => (
    <button 
        onClick={onClick}
        className="px-4 py-2 rounded-lg text-sm font-bold font-vazir bg-yellow-300 text-yellow-900 hover:bg-yellow-400 transition-colors flex-shrink-0"
    >
       ترجمه فارسی
    </button>
);


const StoryViewer: React.FC<StoryViewerProps> = ({ storyContent, onBack, topicTitle, storyNumber, level }) => {
    const [showTranslation, setShowTranslation] = useState(false);
    const styles = LEVEL_STYLES[level];

    const toggleTranslation = () => setShowTranslation(prev => !prev);

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-4xl mx-auto animate-fade-in">
            <div className="relative mb-8">
                <div className="absolute top-0 left-0">
                    <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                       <ArrowLeftIcon />
                    </button>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md ${styles.solidBg} border-2 border-white`}>
                            {storyNumber}
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-slate-200">
                            <span className="font-bold text-slate-800 text-lg">{level}</span>
                        </div>
                    </div>
                    <div className={`inline-block p-3 px-6 rounded-lg border-2 ${styles.border} ${styles.bg}`}>
                        <h2 className={`text-2xl font-bold ${styles.text}`} dir="ltr">{topicTitle}</h2>
                    </div>
                </div>
            </div>

            {storyContent ? (
                <div>
                    <div className="text-right mb-4">
                        <TranslateButton onClick={toggleTranslation} />
                    </div>
                    
                    <AudioPlayer audioUrl={storyContent.audioUrl} />

                    <div dir="ltr" className="text-left mb-6">
                        <p className="text-lg leading-relaxed whitespace-pre-wrap text-slate-800 text-justify">{storyContent.germanStory}</p>
                    </div>
                    
                    <div className="text-right mb-6 border-t pt-6">
                        <TranslateButton onClick={toggleTranslation} />
                    </div>

                    {showTranslation && (
                        <div className="border-t pt-6 animate-fade-in">
                            <div dir="rtl" className="text-right font-vazir">
                                <p className="text-lg leading-relaxed whitespace-pre-wrap text-slate-800 text-justify">{storyContent.persianTranslation}</p>
                            </div>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default StoryViewer;
