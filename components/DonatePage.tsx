
import React, { useState } from 'react';
import { User, Building2, Heart, Inbox } from 'lucide-react';
import { DonationProject } from '../types';

interface DonatePageProps {
  onBack?: () => void;
  onProjectClick?: (project: DonationProject) => void;
}

const DonatePage: React.FC<DonatePageProps> = ({ onProjectClick }) => {
  const [activeType, setActiveType] = useState<'individual' | 'enterprise'>('individual');
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = ["全部", "素质提升", "帮扶救助", "文体服务", "医疗健康", "应急救灾"];

  // Mock data with valid Unsplash images
  const projects: DonationProject[] = [
    {
      id: 1,
      title: '乡村振兴·产业帮扶',
      desc: '支持农村特色产业发展，带动农民增收致富',
      donors: 128,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400',
      tag: '产业帮扶'
    },
    {
      id: 2,
      title: '守护绿水青山',
      desc: '开展生态环境保护行动，共建美丽家园',
      donors: 56,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400',
      tag: '应急救灾'
    },
    {
      id: 3,
      title: '非遗文化传承',
      desc: '资助非遗传承人，保护和弘扬中华优秀传统文化',
      donors: 210,
      image: 'https://images.unsplash.com/photo-1583324894148-34153c8db3f5?auto=format&fit=crop&q=80&w=400',
      tag: '素质提升'
    },
    {
        id: 4,
        title: '关爱空巢老人',
        desc: '为独居老人提供生活照料 and 精神慰藉',
        donors: 342,
        image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=400',
        tag: '帮扶救助'
    }
  ];

  const filteredProjects = activeCategory === '全部' 
    ? projects 
    : projects.filter(p => p.tag === activeCategory);

  // Empty State Component - Removed the "返回全部项目" button
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center animate-in fade-in zoom-in-95 duration-500">
      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-6">
        <Inbox size={48} strokeWidth={1} />
      </div>
      <h3 className="text-gray-800 font-bold text-xl mb-2">暂无内容</h3>
      <p className="text-gray-400 text-sm tracking-widest">
        敬请期待
      </p>
    </div>
  );

  return (
    <div className="bg-[#f7f7f7] min-h-screen pb-24 flex flex-col">
      {/* Header */}
      <div className="bg-white sticky top-0 z-50">
        <div className="flex items-center justify-center px-4 h-14 border-b border-gray-100">
          <h1 className="text-lg font-bold text-gray-800">爱心捐赠</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Level 1: Donation Type Selector */}
        <div className="bg-white p-4 pb-2">
            <div className="grid grid-cols-2 gap-4">
                <div 
                    onClick={() => setActiveType('individual')}
                    className={`rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 relative overflow-hidden border-2 ${activeType === 'individual' ? 'bg-red-50 border-red-500 shadow-sm' : 'bg-white border-gray-100'}`}
                >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeType === 'individual' ? 'bg-red-200 text-red-600' : 'bg-gray-100 text-gray-400'}`}>
                        <User size={24} strokeWidth={2.5} />
                    </div>
                    <span className={`text-base font-bold ${activeType === 'individual' ? 'text-red-700' : 'text-gray-600'}`}>个人捐赠</span>
                </div>

                <div 
                    onClick={() => setActiveType('enterprise')}
                    className={`rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 relative overflow-hidden border-2 ${activeType === 'enterprise' ? 'bg-red-50 border-red-500 shadow-sm' : 'bg-white border-gray-100'}`}
                >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeType === 'enterprise' ? 'bg-red-200 text-red-600' : 'bg-gray-100 text-gray-400'}`}>
                        <Building2 size={24} strokeWidth={2.5} />
                    </div>
                    <span className={`text-base font-bold ${activeType === 'enterprise' ? 'text-red-700' : 'text-gray-600'}`}>企业捐赠</span>
                </div>
            </div>
        </div>

        {/* Level 2: Categories */}
        <div className="bg-white sticky top-14 z-40 px-2 border-b border-gray-100">
            <div className="flex overflow-x-auto space-x-6 px-4 no-scrollbar">
                {categories.map((cat) => (
                    <div key={cat} 
                        onClick={() => setActiveCategory(cat)}
                        className={`flex flex-col items-center flex-shrink-0 cursor-pointer pt-3 pb-3 relative`}
                    >
                        <span className={`text-[15px] transition-colors ${activeCategory === cat ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                            {cat}
                        </span>
                        {activeCategory === cat && (
                            <div className="absolute bottom-0 w-6 h-1 bg-[#e53935] rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Content Area */}
        <div className="p-4 space-y-5">
            
            {/* Featured Project Card - Hide when filtering unless it matches */}
            {activeCategory === '全部' && (
                <div 
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
                    onClick={() => onProjectClick && onProjectClick({
                        id: 'featured',
                        title: '骑手关爱项目',
                        desc: '让美好生活的守护者生活更美好',
                        image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?auto=format&fit=crop&q=80&w=800',
                        donors: 37
                    })}
                >
                    <div className="relative h-44 w-full">
                        <img 
                            src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?auto=format&fit=crop&q=80&w=800" 
                            alt="Rider" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute top-3 left-3 bg-[#e53935] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                            重点推荐
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                            <h3 className="font-bold text-xl mb-1">骑手关爱项目</h3>
                            <p className="text-white/90 text-xs line-clamp-1 mb-2">让美好生活的守护者生活更美好，为他们提供安全保障。</p>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="font-medium text-white/90">37人已捐</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 flex justify-between items-center bg-white">
                        <span className="text-xs text-gray-500 ml-1">传递温暖，从我做起</span>
                        <button className="bg-[#e53935] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg shadow-red-200 active:scale-95 transition-transform flex items-center gap-1.5">
                            <Heart size={14} fill="currentColor" /> 献爱心
                        </button>
                    </div>
                </div>
            )}

            {/* Project List / Empty State */}
            <div className="space-y-4">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => onProjectClick && onProjectClick(project)}
                        >
                            <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 relative bg-gray-100">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <h4 className="text-[15px] font-bold text-gray-800 mb-1.5 line-clamp-1">{project.title}</h4>
                                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{project.desc}</p>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs text-[#e53935] font-bold bg-red-50 px-2 py-1 rounded">
                                        {project.donors} <span className="text-gray-400 font-normal">捐款人次</span>
                                    </span>
                                    <button className="bg-[#e53935] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm active:scale-95 transition-all">
                                        献爱心
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <EmptyState />
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
