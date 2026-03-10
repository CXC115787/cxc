import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface DonationCertificatePageProps {
  onBack: () => void;
}

const DonationCertificatePage: React.FC<DonationCertificatePageProps> = ({ onBack }) => {
  return (
    <div className="bg-[#e53935] min-h-screen relative flex flex-col overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="p-2 -ml-2 text-white">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-medium text-white">捐赠证书</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Top Text Area */}
      <div className="relative z-10 pt-20 px-6 mb-4">
         <h2 className="text-white text-2xl font-bold mb-2 flex items-center">
            感谢 您的加入，
         </h2>
         <p className="text-white/90 text-sm">让我们的公益社群又多了一份力量！</p>
         
         {/* Decorative Flower Top Right */}
         <div className="absolute top-10 right-0 transform translate-x-4 pointer-events-none">
            <div className="w-24 h-24 relative">
               <div className="absolute top-0 right-4 text-6xl drop-shadow-lg">🌼</div>
               <div className="absolute top-4 right-10 w-16 h-8 bg-[#388e3c] rounded-full transform -rotate-45 -z-10"></div>
            </div>
         </div>
      </div>

      {/* Envelope Container */}
      <div className="flex-1 relative w-full flex justify-center items-end px-4 pb-0 mt-4 overflow-visible">
         
        {/* Envelope Back (Behind Certificate) */}
        <div className="absolute bottom-0 w-[92%] h-[65%] bg-[#f3e5ca] rounded-t-sm shadow-2xl z-0 transform translate-y-1"></div>

        {/* Certificate Paper (Middle Layer) */}
        {/* Adjusted padding-bottom to push text up above the envelope line */}
        <div className="relative z-10 w-[85%] bg-[#fffcf5] rounded-t-lg shadow-inner pt-10 pb-32 px-6 text-center border-[1px] border-white box-border h-[460px] flex flex-col items-center">
             {/* Inner Border Decoration */}
             <div className="absolute inset-3 border border-[#e0c3a6]/50 rounded-lg pointer-events-none"></div>
             {/* Corner Lines Decoration */}
             <div className="absolute top-5 left-5 w-4 h-4 border-t-2 border-l-2 border-[#d7ccc8]"></div>
             <div className="absolute top-5 right-5 w-4 h-4 border-t-2 border-r-2 border-[#d7ccc8]"></div>

             {/* Ribbon Icon */}
             <div className="mb-4 relative">
                <div className="w-10 h-10 rounded-full bg-[#d32f2f] flex items-center justify-center text-white mx-auto shadow-md ring-4 ring-[#d32f2f]/20">
                   {/* Simplified Ribbon Icon SVG */}
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M12 2L12 22" stroke="white" strokeWidth="0" fill="white"/> 
                     {/* Abstract ribbon loop */}
                     <path d="M7 8 C7 8 12 12 17 8" stroke="white" />
                     <path d="M12 12 L12 18" stroke="white" />
                     <circle cx="12" cy="10" r="8" stroke="white" />
                   </svg>
                </div>
             </div>
             
             {/* Title */}
             <h3 className="text-[#8d6e63] font-bold text-lg mb-1 tracking-wider">捐款证书</h3>
             <p className="text-[#d7ccc8] text-[8px] tracking-[0.2em] uppercase mb-8">DONATION CERTIFICATE</p>

             {/* User Name */}
             <div className="text-[#d32f2f] text-3xl font-medium mb-8 font-serif tracking-wide border-b border-[#e0c3a6]/30 pb-2 inline-block px-8">
                张乐乐
             </div>

             {/* Description Text */}
             <div className="text-[#5d4037] text-sm leading-8 w-full">
                <p className="text-[#8d6e63] text-xs">感谢你为</p>
                <p className="font-bold text-[#4e342e] text-base my-1">“骑手爱心餐公益活动”</p>
                <p className="mt-2 text-[#8d6e63]">
                   成功捐赠了 <span className="text-[#d32f2f] text-xl font-bold mx-1">10.00</span> 元
                </p>
                <p className="text-[#a1887f] text-[10px] mt-4 opacity-80">感谢你，让世界更温暖！</p>
             </div>
        </div>

        {/* Envelope Front Pocket (Top Layer Overlay) */}
        {/* Reduced height to 30% as requested to reveal more certificate */}
        <div className="absolute bottom-0 w-[92%] h-[30%] z-20 pointer-events-none drop-shadow-xl">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                {/* Main V shape - Lighter beige */}
                <path d="M0,0 L50,40 L100,0 V50 H0 Z" fill="#f5deb3" />
                {/* Subtle shadow/fold lines */}
                <path d="M0,0 L50,40" stroke="#e0c3a6" strokeWidth="0.2" fill="none" />
                <path d="M100,0 L50,40" stroke="#e0c3a6" strokeWidth="0.2" fill="none" />
            </svg>
        </div>

      </div>

      {/* Bottom Actions Area */}
      {/* Beige background section for buttons */}
      <div className="bg-[#fdfbf7] w-full pb-8 pt-6 px-6 rounded-t-[2rem] relative z-30 -mt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
         <div className="flex flex-col gap-3 max-w-sm mx-auto">
            <button className="w-full bg-[#d32f2f] text-white py-3.5 rounded-full font-bold text-base shadow-lg shadow-red-200 hover:bg-red-700 active:scale-95 transition-all">
               保存证书
            </button>
            <button className="w-full bg-white text-[#d32f2f] py-3.5 rounded-full font-bold text-base shadow-sm border border-[#f3e5ca] hover:bg-gray-50 active:scale-95 transition-all">
               有进展告诉我
            </button>
         </div>
      </div>
    </div>
  );
};

export default DonationCertificatePage;