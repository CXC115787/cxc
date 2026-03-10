import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { ProjectUpdate } from '../types';

interface ProjectUpdateDetailPageProps {
  update?: ProjectUpdate;
  onBack: () => void;
}

const ProjectUpdateDetailPage: React.FC<ProjectUpdateDetailPageProps> = ({ update, onBack }) => {
  if (!update) return null;

  return (
    <div className="bg-white min-h-screen pb-10">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-medium text-gray-800">进展详情</h1>
          <div className="w-8"></div>
        </div>
      </div>

      <div className="p-5">
        {/* Title Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{update.title}</h2>
        <div className="text-xs text-gray-400 mb-6 font-mono">{update.date}</div>

        {/* Content */}
        <div className="text-gray-700 text-sm leading-7 text-justify whitespace-pre-line mb-6">
          {update.content || "暂无详细文字描述。"}
        </div>

        {/* Images */}
        {update.images && update.images.length > 0 && (
          <div className="space-y-3">
            {update.images.map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-sm">
                <img src={img} alt={`update-img-${index}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectUpdateDetailPage;
