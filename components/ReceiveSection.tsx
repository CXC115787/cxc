
import React from 'react';
import { Gift, FileEdit } from 'lucide-react';

interface ReceiveSectionProps {
  onClaimClick?: () => void;
  onNeedsClick?: () => void;
}

const ReceiveSection: React.FC<ReceiveSectionProps> = ({ onClaimClick, onNeedsClick }) => {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-3">我要领物资</h3>
      
      <div className="grid grid-cols-2 gap-3 h-32">
        {/* Left Card - Light Blue */}
        <div 
            onClick={onClaimClick}
            className="bg-[#e3f2fd] rounded-2xl p-4 relative overflow-hidden cursor-pointer flex flex-col justify-between"
        >
           <div className="relative z-10">
               <h4 className="text-[#1565c0] font-bold text-base mb-1">领取物资</h4>
               <p className="text-[#42a5f5] text-[10px] leading-tight pr-4">免费领取，来自社会爱心人士捐赠的物资</p>
           </div>
           
           <button className="bg-[#64b5f6] text-white text-xs px-4 py-1.5 rounded-full w-max font-medium relative z-10 shadow-sm">
               去领取
           </button>
           
           <div className="absolute bottom-1 right-2 text-[#bbdefb]">
               <Gift size={56} fill="currentColor" />
           </div>
        </div>

        {/* Right Card - Light Indigo/Purple */}
        <div 
            onClick={onNeedsClick}
            className="bg-[#ede7f6] rounded-2xl p-4 relative overflow-hidden cursor-pointer flex flex-col justify-between"
        >
           <div className="relative z-10">
               <h4 className="text-[#4527a0] font-bold text-base mb-1">我的需求</h4>
               <p className="text-[#7e57c2] text-[10px] leading-tight pr-4">反馈需求，让社会更了解我的急需</p>
           </div>
           
           <button className="bg-[#9575cd] text-white text-xs px-4 py-1.5 rounded-full w-max font-medium relative z-10 shadow-sm">
               去反馈
           </button>
           
           <div className="absolute bottom-1 right-2 text-[#d1c4e9]">
               <FileEdit size={56} fill="currentColor" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveSection;
