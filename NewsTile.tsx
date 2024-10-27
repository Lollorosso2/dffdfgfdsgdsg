import React from 'react';
import { Newspaper } from 'lucide-react';

export const NewsTile: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-blue-600 mb-2">
        <Newspaper size={20} />
        <span className="font-semibold">Aktuelle Nachrichten</span>
      </div>
      {[
        {
          title: "Neue Klimaschutzmaßnahmen vorgestellt",
          preview: "Bundesregierung präsentiert umfassendes Paket..."
        },
        {
          title: "Digitalisierung im Bildungswesen",
          preview: "Schulen erhalten zusätzliche Förderung für..."
        },
        {
          title: "Wirtschaftswachstum übertrifft Erwartungen",
          preview: "Positive Entwicklung im ersten Quartal..."
        }
      ].map((news, index) => (
        <div key={index} className="border-b border-gray-200 pb-2">
          <h3 className="font-medium text-gray-900">{news.title}</h3>
          <p className="text-sm text-gray-600">{news.preview}</p>
        </div>
      ))}
    </div>
  );
};