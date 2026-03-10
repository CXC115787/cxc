
import React from 'react';
import { Heart, Gift, ChevronRight } from 'lucide-react';

interface ProjectItem {
  id: number;
  type: 'donation' | 'claim';
  title: string;
  desc: string;
  image: string;
  status: string;
  buttonText: string;
}

interface ProjectsCarouselProps {
  onDonateClick?: (projectId?: string | number) => void;
  onClaimClick?: (projectId?: string | number) => void;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ onDonateClick, onClaimClick }) => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      type: 'donation',
      title: "乡村医生巡诊包",
      desc: "助力乡村医生坚守在一线，让医疗服务服务到群众健康的“最后一…",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
      status: "筹款中",
      buttonText: "立即捐赠"
    },
    {
      id: 2,
      type: 'donation',
      title: "记忆包裹",
      desc: "即便记忆会消失，但爱不会。关注认知障碍群体，为他们送去一份关怀。",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      status: "筹款中",
      buttonText: "立即捐赠"
    },
    {
      id: 3,
      type: 'claim',
      title: "求学圆梦计划",
      desc: "助力一线职工素质提升，帮助有志青年完成学业梦想。",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
      status: "申领中",
      buttonText: "立即申领"
    }
  ];

  const brandRed = "#d32f2f";
  const brandCyan = "#00a8b1";

  return (
    <div className="py-2">
      {/* 1. 栏目标题 - 居左 & 红色 */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: brandRed }}></div>
        <h3 className="text-xl font-black text-gray-900 tracking-tight">
          公益项目
        </h3>
      </div>

      {/* 2. 纵向卡片轮播 - 保持大图样式 */}
      <div className="-mx-5">
        <div className="flex overflow-x-auto gap-5 px-5 pb-8 no-scrollbar snap-x snap-mandatory">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex-shrink-0 w-[260px] bg-white rounded-[32px] overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-50 snap-center active:scale-[0.98] transition-transform"
              onClick={() => project.type === 'donation' ? onDonateClick?.(project.id) : onClaimClick?.(project.id)}
            >
              {/* 图片区域 */}
              <div className="relative h-[300px]">
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover"
                  alt={project.title}
                />
                {/* 状态标签 */}
                <div className="absolute top-0 left-4 bg-black/40 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-b-lg font-bold">
                  {project.status}
                </div>
              </div>

              {/* 文字与按钮区域 */}
              <div className="p-6">
                <h3 className="text-lg font-black mb-2 leading-none" style={{ color: project.type === 'donation' ? brandRed : brandCyan }}>
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-6 font-medium">
                  {project.desc}
                </p>

                <button 
                  className="w-full py-3.5 rounded-full text-white font-bold text-sm shadow-lg active:opacity-90 transition-all"
                  style={{ 
                    backgroundColor: project.type === 'donation' ? brandRed : brandCyan, 
                    boxShadow: `0 8px 20px -6px ${project.type === 'donation' ? brandRed : brandCyan}66` 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    project.type === 'donation' ? onDonateClick?.(project.id) : onClaimClick?.(project.id);
                  }}
                >
                  {project.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 底部双功能按钮 - 完美还原截图样式 */}
      <div className="grid grid-cols-2 gap-4 mt-2">
        {/* 去帮他 */}
        <button 
          onClick={() => onDonateClick?.()}
          className="bg-white rounded-[32px] p-4 flex items-center gap-3 shadow-md shadow-gray-200/40 border border-gray-50 active:bg-gray-50 transition-all group"
        >
          <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#d32f2f] flex-shrink-0 group-hover:scale-105 transition-transform">
            <Heart size={24} fill="currentColor" />
          </div>
          <div className="text-left overflow-hidden">
            <div className="text-gray-800 text-[15px] font-black flex items-center gap-0.5">
              去帮他 <ChevronRight size={14} className="text-gray-300" />
            </div>
            <p className="text-[11px] text-gray-400 font-bold truncate">爱心捐赠列表</p>
          </div>
        </button>

        {/* 去领取 */}
        <button 
          onClick={() => onClaimClick?.()}
          className="bg-white rounded-[32px] p-4 flex items-center gap-3 shadow-md shadow-gray-200/40 border border-gray-50 active:bg-gray-50 transition-all group"
        >
          <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-[#00a8b1] flex-shrink-0 group-hover:scale-105 transition-transform">
            <div className="relative">
                <Gift size={24} fill="currentColor" />
            </div>
          </div>
          <div className="text-left overflow-hidden">
            <div className="text-gray-800 text-[15px] font-black flex items-center gap-0.5">
              去领取 <ChevronRight size={14} className="text-gray-300" />
            </div>
            <p className="text-[11px] text-gray-400 font-bold truncate">暖心申领列表</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
