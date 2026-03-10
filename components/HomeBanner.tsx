
import React from 'react';

const HomeBanner: React.FC = () => {
  const slideData = {
    title: '服务与发展',
    subtext: '让 职 工 生 活 更 美 好',
    bgImg1: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600',
    bgImg2: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600',
  };

  return (
    <div className="relative w-full h-[520px] overflow-hidden bg-[#e30a1b]">
      {/* Primary Collage Style Banner */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex">
            <div className="w-[52%] h-full relative">
                <img 
                  src={slideData.bgImg1}
                  className="w-full h-full object-cover"
                  alt="Service"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#e30a1b]/60 to-transparent"></div>
            </div>
            <div className="w-[48%] h-full relative">
                <img 
                  src={slideData.bgImg2}
                  className="w-full h-full object-cover"
                  alt="Help"
                />
                <div className="absolute inset-0 bg-[#e30a1b]/80 mix-blend-multiply"></div>
            </div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center pt-32">
           <div className="text-center">
               <div className="text-white/80 text-[11px] tracking-[0.5em] mb-3 uppercase font-light">SERVICE & DEVELOPMENT</div>
               <h1 className="text-white text-6xl font-bold tracking-tight leading-tight drop-shadow-2xl italic font-serif">
                  {slideData.title}
               </h1>
               <div className="mt-5 bg-[#f0cf85]/90 backdrop-blur-sm text-[#d32f2f] px-8 py-2 rounded-full text-sm font-bold shadow-xl border border-white/20">
                  {slideData.subtext}
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
