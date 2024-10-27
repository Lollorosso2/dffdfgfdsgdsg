import React from 'react';
import { BookOpen } from 'lucide-react';

export const WordTile: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-purple-600">
        <BookOpen size={20} />
        <span className="font-semibold">Wort des Tages</span>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">Fernweh</h3>
        <p className="text-gray-600 text-sm italic mb-2">[fɛʁnveː]</p>
        <p className="text-gray-700">
          Das Verlangen, in die Ferne zu reisen; Sehnsucht nach fernen Orten und Ländern.
        </p>
      </div>
    </div>
  );
};