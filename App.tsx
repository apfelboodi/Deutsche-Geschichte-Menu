
import React, { useState, useCallback } from 'react';
import type { Level, StoryTopic, StoryContent } from './types';
import { getTopicsForLevel } from './data/topics';
import LevelSelector from './components/LevelSelector';
import TopicList from './components/TopicList';
import StoryViewer from './components/StoryViewer';

const App: React.FC = () => {
  const [level, setLevel] = useState<Level | null>(null);
  const [topics, setTopics] = useState<StoryTopic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<StoryTopic | null>(null);
  const [storyContent, setStoryContent] = useState<StoryContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLevelSelect = useCallback((selectedLevel: Level) => {
    setLevel(selectedLevel);
    setSelectedTopic(null);
    setStoryContent(null);
    setTopics(getTopicsForLevel(selectedLevel));
    setError(null);
  }, []);

  const handleTopicSelect = useCallback((topic: StoryTopic) => {
    if (!level) return;
    setSelectedTopic(topic);
    setError(null); // Reset error
    
    // If the story content is pre-defined in the topic
    if (topic.germanStory && topic.persianTranslation) {
        setStoryContent({
            germanStory: topic.germanStory,
            persianTranslation: topic.persianTranslation,
            audioUrl: topic.audioUrl,
        });
    } else {
        // Handle cases where the story text is missing
        setStoryContent(null);
        setError(`Die Geschichte für "${topic.germanTitle}" ist noch nicht verfügbar.`);
    }
  }, [level]);

  const handleBackToLevels = () => {
    setLevel(null);
    setTopics([]);
    setSelectedTopic(null);
    setStoryContent(null);
    setError(null);
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
    setStoryContent(null);
    setError(null);
  };
  
  const renderContent = () => {
    if (error) {
      // Main error for story generation
      return (
          <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-red-600 mb-2">Fehler beim Laden der Geschichte</h3>
              <p className="text-slate-700 bg-red-50 p-3 rounded-md mb-4 text-left" dir="ltr">
                  <code>{error}</code>
              </p>
              <button
                  onClick={selectedTopic ? handleBackToTopics : handleBackToLevels}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                  Zurück
              </button>
          </div>
      );
    }

    if (selectedTopic) {
        return <StoryViewer 
            storyContent={storyContent}
            onBack={handleBackToTopics} 
            topicTitle={selectedTopic.germanTitle}
            storyNumber={selectedTopic.id + 1}
            level={level!}
        />;
    }

    if (topics.length > 0) {
        return <TopicList 
            topics={topics}
            onTopicSelect={handleTopicSelect}
            onBack={handleBackToLevels}
            level={level!}
        />;
    }

    return <LevelSelector />;
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <main className="container mx-auto p-4 md:p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
