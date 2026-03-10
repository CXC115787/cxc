import React from 'react';
import { Bot, PenLine } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-24 right-4 flex space-x-3 z-40">
      {/* AI Bot */}
      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <Bot size={24} />
         </div>
      </div>
      
      {/* Feedback/Edit */}
      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
         <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white">
            <PenLine size={20} />
         </div>
      </div>
    </div>
  );
};

export default FloatingActions;
