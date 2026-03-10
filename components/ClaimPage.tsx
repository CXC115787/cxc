import React, { useState } from 'react';
import { ClaimItem } from '../types';

interface ClaimPageProps {
  onItemClick?: (item: ClaimItem) => void;
}

const ClaimPage: React.FC<ClaimPageProps> = ({ onItemClick }) => {
  const categories = ["全部", "素质提升", "帮扶救助", "文体服务", "医疗健康"];
  const [activeTab, setActiveTab] = useState("全部");

  const handleItemClick = (title: string, deadline: string, image: string) => {
    if (onItemClick) {
      onItemClick({
        id: Math.random().toString(36).substr(2, 9),
        title,
        deadline,
        image
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-b from-red-600 to-red-500 p-6 pt-12 pb-20 relative overflow-hidden">
        <div className="relative z-10 w-2/3">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">物资申领</h1>
            <p className="text-white/90 text-sm font-light">这不是施舍，是来自社会的拥抱</p>
            <p className="text-white/90 text-sm font-light">按需申领，传递暖意！</p>
        </div>
        
        {/* Decorative Gift Boxes */}
        <div className="absolute top-8 -right-4 w-48 h-48 z-0">
             <img 
               src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=500" 
               className="w-full h-full object-contain drop-shadow-2xl opacity-90 mix-blend-hard-light transform rotate-[-10deg]"
               alt="Gift Boxes"
             />
             <div className="absolute top-0 right-10 text-yellow-300 text-2xl animate-pulse">✨</div>
             <div className="absolute bottom-10 left-4 text-yellow-300 text-xl animate-pulse delay-75">✦</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white pt-2 rounded-t-3xl -mt-6 relative z-20 px-4 shadow-sm border-b border-gray-100">
         <div className="flex overflow-x-auto space-x-8 pb-2 no-scrollbar">
            {categories.map((cat) => (
                <div key={cat} 
                     onClick={() => setActiveTab(cat)}
                     className={`flex flex-col items-center flex-shrink-0 cursor-pointer group`}>
                    <span className={`py-2 text-[15px] ${activeTab === cat ? 'text-red-600 font-bold' : 'text-gray-500 group-hover:text-gray-700'}`}>
                      {cat}
                    </span>
                    {activeTab === cat && <div className="w-6 h-1 bg-red-600 rounded-full mb-1"></div>}
                </div>
            ))}
         </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Grid Section (Top 2 items) */}
        <div className="grid grid-cols-2 gap-3">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className="h-32 bg-gray-100 relative group">
                     <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="stationery"/>
                </div>
                <div className="p-3 flex flex-col flex-1 justify-between">
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-1">爱心助学文具包</h3>
                        <p className="text-xs text-gray-400 mb-2">距结束: 122天</p>
                    </div>
                    <button 
                        onClick={() => handleItemClick('爱心助学文具包', '122天', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800')}
                        className="w-full bg-[#d32f2f] text-white text-xs py-2 rounded font-medium shadow-md hover:bg-red-700 active:scale-95 transition-all">
                        我要申领
                    </button>
                </div>
            </div>
             {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
                <div className="h-32 bg-gray-100 relative group">
                     <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="books"/>
                </div>
                <div className="p-3 flex flex-col flex-1 justify-between">
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-1">儿童绘本百科图书</h3>
                        <p className="text-xs text-gray-400 mb-2">距结束: 122天</p>
                    </div>
                    <button 
                        onClick={() => handleItemClick('儿童绘本百科图书', '122天', 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800')}
                        className="w-full bg-[#d32f2f] text-white text-xs py-2 rounded font-medium shadow-md hover:bg-red-700 active:scale-95 transition-all">
                        我要申领
                    </button>
                </div>
            </div>
        </div>

        {/* List Section */}
        <div className="space-y-3">
             {/* List Item 1 */}
             <div className="bg-white rounded-xl p-3 shadow-sm flex gap-3">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1626202158866-4e5c5c6437b6?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="flour"/>
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm mb-1">爱心救助 | 金沙河面粉</h3>
                        <p className="text-xs text-gray-500 leading-tight line-clamp-2">帮助过渡安置期的受灾家庭维系一周基本生活</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                        <span className="text-xs text-gray-400">距结束: 89 天</span>
                        <button 
                            onClick={() => handleItemClick('爱心救助 | 金沙河面粉', '89天', 'https://images.unsplash.com/photo-1626202158866-4e5c5c6437b6?auto=format&fit=crop&q=80&w=800')}
                            className="bg-red-50 text-red-600 text-xs px-3 py-1.5 rounded font-medium hover:bg-red-100 active:scale-95 transition-all">
                            我要申领
                        </button>
                    </div>
                </div>
             </div>
             
             {/* List Item 2 */}
             <div className="bg-white rounded-xl p-3 shadow-sm flex gap-3">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="first aid"/>
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm mb-1">爱心救助 | 赈济家庭急救包</h3>
                        <p className="text-xs text-gray-500 leading-tight line-clamp-2">帮助过渡安置期的受灾家庭维系一周基本生活</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                        <span className="text-xs text-gray-400">距结束: 80 天</span>
                        <button 
                            onClick={() => handleItemClick('爱心救助 | 赈济家庭急救包', '80天', 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800')}
                            className="bg-red-50 text-red-600 text-xs px-3 py-1.5 rounded font-medium hover:bg-red-100 active:scale-95 transition-all">
                            我要申领
                        </button>
                    </div>
                </div>
             </div>

             {/* List Item 3 */}
             <div className="bg-white rounded-xl p-3 shadow-sm flex gap-3">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="clothing"/>
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm mb-1">爱心救助 | 赈济家庭新生儿服装</h3>
                        <p className="text-xs text-gray-500 leading-tight line-clamp-2">帮助过渡安置期的受灾家庭维系一周基本生活</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                        <span className="text-xs text-gray-400">距结束: 120 天</span>
                        <button 
                             onClick={() => handleItemClick('爱心救助 | 赈济家庭新生儿服装', '120天', 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800')}
                            className="bg-red-50 text-red-600 text-xs px-3 py-1.5 rounded font-medium hover:bg-red-100 active:scale-95 transition-all">
                            我要申领
                        </button>
                    </div>
                </div>
             </div>

             {/* List Item 4 */}
             <div className="bg-white rounded-xl p-3 shadow-sm flex gap-3">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="milk"/>
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm mb-1">爱心救助 | 赈济儿童营养牛奶</h3>
                        <p className="text-xs text-gray-500 leading-tight line-clamp-2">帮助过渡安置期的受灾家庭维系一周基本生活</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                        <span className="text-xs text-gray-400">距结束: 33 天</span>
                        <button 
                             onClick={() => handleItemClick('爱心救助 | 赈济儿童营养牛奶', '33天', 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800')}
                            className="bg-red-50 text-red-600 text-xs px-3 py-1.5 rounded font-medium hover:bg-red-100 active:scale-95 transition-all">
                            我要申领
                        </button>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimPage;