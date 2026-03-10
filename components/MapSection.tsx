
import React, { useState, useEffect } from 'react';
import { ChevronRight, Heart, Building2, HandHeart } from 'lucide-react';

interface MapSectionProps {
  onOpenMap?: () => void;
}

const MapSection: React.FC<MapSectionProps> = ({ onOpenMap }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [
    {
      title: "地方基金",
      subtext: "汇聚地方力量 助力职工发展",
      theme: "from-[#ff6b6b] to-[#ee5253]",
      icon: <HandHeart className="text-white/10" size={60} />
    },
    {
      title: "地方基金会",
      subtext: "公益同心 构建温暖服务圈",
      theme: "from-[#4834d4] to-[#686de0]",
      icon: <Heart className="text-white/10" size={60} fill="currentColor" />
    },
    {
      title: "爱心企业",
      subtext: "践行社会责任 彰显品牌担当",
      theme: "from-[#519a6b] to-[#3a7c50]",
      icon: <Building2 className="text-white/10" size={60} />
    }
  ];

  // 自动轮播逻辑
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="mt-4">
      {/* 1. 板块标题 - 修改颜色为黑色 */}
      <div className="relative flex justify-start items-center mb-5">
         <h3 className="text-xl font-black text-black">
           公益矩阵
         </h3>
         <button onClick={onOpenMap} className="absolute right-0 text-gray-400 text-[10px] flex items-center font-bold">
            查看 <ChevronRight size={12} />
         </button>
      </div>

      {/* 2. 轮播容器 - 高度减少，圆角改为 xl 以符合紧凑设计 */}
      <div className="relative overflow-hidden rounded-xl shadow-md h-24 group">
        <div 
          className="flex transition-transform duration-700 ease-out h-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div 
              key={index}
              onClick={onOpenMap}
              className={`flex-shrink-0 w-full h-full bg-gradient-to-br ${banner.theme} px-6 relative flex items-center justify-between cursor-pointer`}
            >
              {/* 背景装饰 - 移除实物照片，仅保留轻微的水印图标 */}
              <div className="absolute left-[60%] top-1/2 -translate-y-1/2 opacity-20 transform rotate-12 pointer-events-none">
                 {banner.icon}
              </div>
              
              {/* 左侧文字区 */}
              <div className="relative z-10">
                <h3 className="text-white text-lg font-black mb-0.5 tracking-tight drop-shadow-sm">
                  {banner.title}
                </h3>
                <p className="text-white/80 text-[10px] font-bold tracking-wide">
                  {banner.subtext}
                </p>
              </div>

              {/* 右侧按钮区 - 将“去看看”按钮移至右侧 */}
              <div className="relative z-10">
                <button className="bg-white/95 text-gray-800 px-4 py-1.5 rounded-lg flex items-center gap-1 w-max font-black text-[11px] shadow-lg active:scale-95 transition-all">
                  去看看 <ChevronRight size={12} className="text-[#d32f2f]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 状态指示点 - 位于底部中央 */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {banners.map((_, i) => (
            <div 
              key={i}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-white w-3' : 'bg-white/30'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapSection;
