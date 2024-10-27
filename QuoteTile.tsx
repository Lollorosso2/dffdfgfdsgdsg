import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteTile: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <Quote className="text-gray-400 mb-4" size={32} />
      <blockquote className="text-lg italic text-gray-700">
        "Der Weg ist das Ziel."
      </blockquote>
      <p className="text-right mt-2 text-gray-600">- Konfuzius</p>
    </div>
  );
};