import React from 'react';
import { GripHorizontal } from 'lucide-react';

interface DashboardTileProps {
  title: string;
  children: React.ReactNode;
}

export const DashboardTile: React.FC<DashboardTileProps> = ({ title, children }) => {
  return (
    <div className="h-full w-full">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        <div className="cursor-move">
          <GripHorizontal className="text-gray-400" size={20} />
        </div>
      </div>
      <div className="p-4 h-[calc(100%-4rem)] overflow-auto">
        {children}
      </div>
    </div>
  );
};