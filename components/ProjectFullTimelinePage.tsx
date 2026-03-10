import React, { useState } from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { Project, ProjectUpdate } from '../types';

interface ProjectFullTimelinePageProps {
  project?: Project;
  onBack: () => void;
  onUpdateClick: (update: ProjectUpdate) => void;
}

const ProjectFullTimelinePage: React.FC<ProjectFullTimelinePageProps> = ({ project, onBack, onUpdateClick }) => {
  const [visibleCount, setVisibleCount] = useState(20);

  if (!project) return null;

  const handleLoadMore = () => {
    // Show all updates immediately
    setVisibleCount(project.updates.length);
  };

  const displayedUpdates = project.updates.slice(0, visibleCount);
  const hasMore = visibleCount < project.updates.length;

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-medium text-gray-800">项目全部进展</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Project Info Card */}
      <div className="bg-white p-5 mb-4 shadow-sm">
         <div className="flex gap-4 items-center">
             <img src={project.projectImage} className="w-16 h-16 rounded-lg object-cover" alt={project.title} />
             <div>
                 <h2 className="font-bold text-gray-900 text-lg mb-1">{project.title}</h2>
                 <p className="text-gray-500 text-xs">{project.organization || "中国职工发展基金会"}</p>
                 <div className="mt-2 text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded inline-block">
                    已捐助: {project.donatedAmount}元
                 </div>
             </div>
         </div>
      </div>

      {/* Timeline */}
      <div className="px-4">
        <div className="pl-4 border-l-2 border-gray-200 space-y-8 ml-2 py-2">
            {displayedUpdates.map((update, index) => (
                <div key={index} className="relative group cursor-pointer" onClick={() => onUpdateClick(update)}>
                    {/* Dot */}
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-red-400 rounded-full ring-4 ring-gray-50 group-hover:ring-red-100 transition-all"></div>
                    
                    {/* Card */}
                    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-xs text-gray-400 mb-2 font-mono">{update.date}</div>
                        <h4 className="text-gray-800 text-sm font-bold mb-2 leading-relaxed line-clamp-2">{update.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-3">
                            {update.content}
                        </p>
                        
                        {/* Images Preview */}
                        {update.images && update.images.length > 0 && (
                            <div className="flex gap-2 overflow-hidden">
                                {update.images.slice(0, 3).map((img, i) => (
                                    <img key={i} src={img} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" alt="update" />
                                ))}
                                {update.images.length > 3 && (
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                                        +{update.images.length - 3}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* Load More / End of List */}
        <div className="mt-8 text-center pb-8">
          {hasMore ? (
            <button 
              onClick={handleLoadMore}
              className="bg-white text-gray-500 text-xs px-4 py-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center mx-auto gap-1"
            >
              展示全部 <ChevronDown size={14} />
            </button>
          ) : (
            <span className="text-xs text-gray-300">没有更多内容了</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectFullTimelinePage;