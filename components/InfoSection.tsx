
import React, { useState } from 'react';
import { ChevronRight, ArrowRight, FileText, Image as ImageIcon } from 'lucide-react';

interface InfoSectionProps {
  onNavigateMatrix?: () => void;
}

const InfoSection: React.FC<InfoSectionProps> = ({ onNavigateMatrix }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'policy'>('news');

  const newsList = [
    { 
      title: '致社会各界爱心企业和爱心人士的感谢信', 
      date: '2025-01-20',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=300' 
    },
    { 
      title: '2025中国慢病防控适宜技术大会成功举办', 
      date: '2025-01-18',
      image: null // 模拟无封面图的情况
    },
  ];

  const policyList = [
    { title: '《中国职工发展基金会专项基金管理办法》', date: '2024-12-15' },
    { title: '关于支持“求学圆梦”公益项目的暂行规定', date: '2024-11-20' },
  ];

  return (
    <div className="space-y-6 pb-4">
      
      {/* 顶部标题与 Tabs */}
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-baseline">
          <button 
            onClick={() => setActiveTab('news')}
            className="group relative"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-1 h-5 bg-[#d32f2f] rounded-full transition-opacity ${activeTab === 'news' ? 'opacity-100' : 'opacity-0'}`}></div>
              <h3 className={`text-xl font-black transition-colors ${activeTab === 'news' ? 'text-black' : 'text-gray-300'}`}>新闻中心</h3>
            </div>
            <p className={`text-[9px] font-bold tracking-[0.2em] uppercase ml-3 transition-colors ${activeTab === 'news' ? 'text-gray-300' : 'text-gray-200'}`}>Foundation News</p>
          </button>

          <button 
            onClick={() => setActiveTab('policy')}
            className="group relative"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-1 h-5 bg-[#d32f2f] rounded-full transition-opacity ${activeTab === 'policy' ? 'opacity-100' : 'opacity-0'}`}></div>
              <h3 className={`text-xl font-black transition-colors ${activeTab === 'policy' ? 'text-black' : 'text-gray-300'}`}>政策文件</h3>
            </div>
            <p className={`text-[9px] font-bold tracking-[0.2em] uppercase ml-3 transition-colors ${activeTab === 'policy' ? 'text-gray-300' : 'text-gray-200'}`}>Policy Documents</p>
          </button>
        </div>
        
        <button className="text-gray-400 text-xs font-bold flex items-center gap-0.5">
          更多 <ChevronRight size={14} />
        </button>
      </div>

      {/* 内容区域 */}
      <div className="space-y-4">
        {activeTab === 'news' ? (
          <>
            {/* 焦点头条卡片 */}
            <div className="bg-white rounded-[32px] p-5 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform">
              <div className="flex gap-4">
                {/* 左侧大图 */}
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=300" 
                    className="w-full h-full object-cover" 
                    alt="featured" 
                  />
                  <div className="absolute top-0 left-0 bg-[#e30013] text-white text-[10px] px-2.5 py-1 font-black rounded-br-xl shadow-sm italic">HOT</div>
                </div>
                
                {/* 右侧文字内容 */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="text-[15px] font-black text-gray-800 leading-tight line-clamp-2 mb-2">
                      中国职工公益事业“十五五”发展规划研讨会召开
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2 opacity-80">
                      马璐书记强调要紧紧围绕职工群众最关心、最现实的利益问题。
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-300 font-bold font-mono">2025.01.24</span>
                    <div className="w-7 h-7 bg-red-50 text-[#d32f2f] rounded-full flex items-center justify-center shadow-sm">
                      <ArrowRight size={14} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 下方列表项 */}
            <div className="bg-white rounded-[32px] p-5 shadow-sm border border-gray-100 divide-y divide-gray-50">
              {newsList.map((item, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer py-4 first:pt-0 last:pb-0 active:opacity-60 transition-all">
                  <div className="flex-1 py-1">
                    <div className="text-[10px] text-gray-300 font-bold font-mono mb-2">{item.date}</div>
                    <h4 className="text-[14px] font-bold text-gray-800 leading-[1.5] line-clamp-2 group-hover:text-[#d32f2f] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  
                  {/* 右侧缩略图 或 占位图 */}
                  <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-[#f8f9fa] border border-gray-100 flex items-center justify-center relative">
                    {item.image ? (
                      <img src={item.image} className="w-full h-full object-cover" alt="news" />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1">
                        <ImageIcon size={18} className="text-gray-200" />
                        <span className="text-[8px] text-gray-300 font-black tracking-tight scale-75">cover</span>
                        {/* 底部小 Logo 装饰 */}
                        <div className="absolute bottom-1 right-1 w-3 h-3 bg-[#d32f2f]/10 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#d32f2f] rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* 政策文件列表展示 */
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 space-y-4">
             {policyList.map((policy, idx) => (
                <div key={idx} className="flex items-start gap-4 active:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors cursor-pointer">
                   <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText size={20} />
                   </div>
                   <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800 mb-1 leading-snug">{policy.title}</h4>
                      <div className="text-[10px] text-gray-400 font-mono">{policy.date}</div>
                   </div>
                </div>
             ))}
             <button className="w-full py-3 bg-gray-50 rounded-2xl text-[11px] text-gray-400 font-bold tracking-widest uppercase">
                View All Documents
             </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default InfoSection;
