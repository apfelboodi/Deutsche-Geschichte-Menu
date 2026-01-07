
import React from 'react';
import LevelSelector from './components/LevelSelector';

const App: React.FC = () => {
  // All previous state and handlers are removed as the app now only serves as a link hub.
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <main className="container mx-auto p-4 md:p-6">
        <LevelSelector />
      </main>
    </div>
  );
};

export default App;
