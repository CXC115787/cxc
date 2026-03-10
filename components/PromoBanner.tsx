
import React from 'react';
import { Home } from 'lucide-react';

interface PromoBannerProps {
  onLearnMore?: () => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ onLearnMore }) => {
  return (
    <div className="mt-6 mb-2">
      <div className="bg-gradient-to-r from-[#ff8a65] to-[#ff5252] rounded-xl p-5 relative overflow-hidden flex items-center justify-between shadow-md">
         {/* Text */}
         <div className="relative z-10 text-white">
            <h3 className="font-bold text-lg mb-1">爱心捐助·一键直达</h3>
            <p className="text-white/90 text-xs mb-3">只需三步，您的善举就能温暖他人</p>
            <button 
                onClick={onLearnMore}
                className="bg-white text-[#d32f2f] text-xs px-4 py-1.5 rounded-full font-bold shadow-sm"
            >
                了解详情
            </button>
         </div>
         
         {/* Illustration */}
         <div className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
             <div className="bg-[#ff5252] p-2 rounded-full">
                 <Home size={32} className="text-white" fill="currentColor" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent rounded-full pointer-events-none"></div>
         </div>
         
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
         <div className="absolute bottom-0 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default PromoBanner;
