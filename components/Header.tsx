
import React from 'react';

const LogoEmblem: React.FC<{ className?: string, color?: string, textColor?: string }> = ({ className, color = "#e30013", textColor = "white" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {/* 徽标核心 */}
    <div className="flex-shrink-0 w-9 h-9 relative">
      <div className="absolute inset-0 bg-[#ffda00] rounded-full"></div>
      <div className="absolute inset-[2px] bg-[#e30013] rounded-full border border-[#ffda00]"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* 内部工字造型 */}
        <div className="w-5 h-5 border-2 border-[#ffda00] rounded-full flex items-center justify-center relative">
          <div className="absolute w-[2px] h-3 bg-[#ffda00]"></div>
          <div className="w-3 h-[2px] bg-[#ffda00]"></div>
        </div>
      </div>
    </div>
    {/* 文字部分 */}
    <div className="flex flex-col">
      <span className="text-sm font-black tracking-tight leading-none" style={{ color: textColor }}>中国职工发展基金会</span>
      <span className="text-[5px] mt-0.5 font-bold tracking-tighter opacity-90 uppercase leading-none" style={{ color: textColor }}>CHINA WORKER DEVELOPMENT FOUNDATION</span>
    </div>
  </div>
);

const Header: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 py-5 px-6 flex items-center bg-transparent">
       <LogoEmblem textColor="white" />
    </div>
  );
};

export default Header;
