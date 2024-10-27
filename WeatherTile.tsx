import React from 'react';
import { Cloud, Sun, Thermometer } from 'lucide-react';

export const WeatherTile: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Sun className="text-yellow-500 mr-2" size={24} />
          <Cloud className="text-gray-400" size={24} />
        </div>
        <span className="text-3xl font-bold">22°C</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>Luftfeuchtigkeit</span>
          <span>65%</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Wind</span>
          <span>12 km/h</span>
        </div>
        <div className="flex items-center justify-between">
          <span>UV-Index</span>
          <span>Mittel</span>
        </div>
      </div>
    </div>
  );
};