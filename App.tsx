import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { DashboardTile } from './components/DashboardTile';
import { WeatherTile } from './components/WeatherTile';
import { NewsTile } from './components/NewsTile';
import { QuoteTile } from './components/QuoteTile';
import { RecipeTile } from './components/RecipeTile';
import { WordTile } from './components/WordTile';
import { ChatTile } from './components/ChatTile';

const defaultLayout = [
  { i: 'weather', x: 0, y: 0, w: 2, h: 2 },
  { i: 'news', x: 2, y: 0, w: 2, h: 3 },
  { i: 'quote', x: 0, y: 2, w: 2, h: 1 },
  { i: 'recipe', x: 4, y: 0, w: 2, h: 2 },
  { i: 'word', x: 4, y: 2, w: 2, h: 1 },
  { i: 'chat', x: 0, y: 3, w: 6, h: 2 }
];

function App() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      const containerWidth = document.getElementById('grid-container')?.offsetWidth || 1200;
      setWidth(containerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto" id="grid-container">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Mein Dashboard</h1>
        <GridLayout
          className="layout"
          layout={defaultLayout}
          cols={6}
          rowHeight={150}
          width={width}
          isDraggable={true}
          isResizable={true}
          margin={[16, 16]}
          containerPadding={[0, 0]}
        >
          <div key="weather" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <DashboardTile title="Wetter">
              <WeatherTile />
            </DashboardTile>
          </div>
          <div key="news" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <DashboardTile title="Nachrichten">
              <NewsTile />
            </DashboardTile>
          </div>
          <div key="quote" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <DashboardTile title="Zitat des Tages">
              <QuoteTile />
            </DashboardTile>
          </div>
          <div key="recipe" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <DashboardTile title="Rezept des Tages">
              <RecipeTile />
            </DashboardTile>
          </div>
          <div key="word" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <DashboardTile title="Wort des Tages">
              <WordTile />
            </DashboardTile>
          </div>
          <div key="chat" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <DashboardTile title="Chat GPT">
              <ChatTile />
            </DashboardTile>
          </div>
        </GridLayout>
      </div>
    </div>
  );
}

export default App;