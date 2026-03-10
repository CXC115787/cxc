
import React from 'react';
import { HeartHandshake, Heart, ClipboardList } from 'lucide-react';

interface DonateSectionProps {
  onDonateClick?: () => void;
  onMonthlyClick?: () => void;
  onRecordClick?: () => void;
}

const DonateSection: React.FC<DonateSectionProps> = ({ 
  onDonateClick, 
  onMonthlyClick, 
  onRecordClick
}) => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-3">我要献爱心</h3>
      
      <div className="flex gap-3 h-44">
         {/* Left Large Card - Yellow/Orange */}
         <div 
            onClick={onDonateClick}
            className="w-[55%] bg-[#fff8e1] rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer"
         >
            <div className="relative z-10">
               <h4 className="text-[#e65100] font-bold text-lg mb-1">去帮他</h4>
               <p className="text-[#ff9800] text-xs">让善意，不止于心动</p>
            </div>
            
            <button className="bg-[#ffb74d] text-white text-xs px-4 py-1.5 rounded-full w-max font-medium relative z-10 shadow-sm">
               去捐助
            </button>

            {/* Icon Decor */}
            <div className="absolute bottom-2 right-2 text-[#ffe082]">
               <HeartHandshake size={64} fill="currentColor" />
            </div>
         </div>

         {/* Right Column */}
         <div className="flex-1 flex flex-col gap-3">
            {/* Monthly Donate - Light Purple */}
            <div 
                onClick={onMonthlyClick}
                className="flex-1 bg-[#f3e5f5] rounded-2xl p-4 relative overflow-hidden cursor-pointer flex flex-col justify-center"
            >
               <div className="relative z-10">
                   <h4 className="text-[#7b1fa2] font-bold text-sm mb-0.5">月捐</h4>
                   <p className="text-[#ab47bc] text-[10px] mb-2">让爱心，成为一份习惯</p>
                   <button className="bg-[#ce93d8] text-white text-[10px] px-3 py-1 rounded-full font-medium shadow-sm">
                     去捐助
                   </button>
               </div>
               <div className="absolute bottom-2 right-2 text-[#e1bee7]">
                   <Heart size={36} fill="currentColor" />
               </div>
            </div>

            {/* My Donations - Light Peach/Red */}
            <div 
                onClick={onRecordClick}
                className="flex-1 bg-[#fbe9e7] rounded-2xl p-4 relative overflow-hidden cursor-pointer flex flex-col justify-center"
            >
               <div className="relative z-10">
                   <h4 className="text-[#d84315] font-bold text-sm mb-0.5">我的捐赠</h4>
                   <p className="text-[#ff7043] text-[10px] mb-2">详细记录</p>
                   <button className="bg-[#ff8a65] text-white text-[10px] px-3 py-1 rounded-full font-medium shadow-sm">
                     去查看
                   </button>
               </div>
               <div className="absolute bottom-2 right-2 text-[#ffccbc]">
                   <ClipboardList size={36} />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DonateSection;
