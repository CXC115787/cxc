
import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-5 pt-4 border border-gray-100 overflow-hidden">
      {/* 头部标题区 */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-1.5">
           <span className="w-1.5 h-1.5 bg-[#D9363E] rounded-full animate-pulse"></span>
           <span className="text-xs font-bold text-gray-400">善款公示</span>
        </div>
        <div className="flex items-center gap-1 text-gray-300 text-[9px] font-medium">
           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
           </svg>
           <span>截止至2025-12-31</span>
        </div>
      </div>

      {/* 核心数据区 - Flex 左右分栏 */}
      <div className="flex items-center mb-6 px-1">
         {/* 左侧：历史累计 (55%) */}
         <div className="w-[55%] pr-3">
            <h4 className="text-[10px] text-gray-400 mb-1 font-medium tracking-tight">历史累计捐赠 (元)</h4>
            <div className="flex items-baseline overflow-hidden">
                <span className="text-[26px] font-black tracking-tighter text-[#D9363E] leading-none">876,491,602</span>
                <span className="text-xs font-bold text-[#D9363E] opacity-60 ml-0.5">.31</span>
            </div>
         </div>

         {/* 中间分割线 */}
         <div className="w-[1px] h-8 bg-gray-100 self-center"></div>

         {/* 右侧：本年度 (45%) */}
         <div className="flex-1 pl-4">
            <h4 className="text-[10px] text-gray-400 mb-1 font-medium tracking-tight">本年度捐赠 (元)</h4>
            <div className="flex items-baseline overflow-hidden">
                <span className="text-xl font-black tracking-tighter text-gray-800 leading-none">146,491,602</span>
                <span className="text-[10px] font-bold text-gray-300 ml-0.5">.59</span>
            </div>
         </div>
      </div>

      {/* 底部动态通告栏 */}
      <div className="bg-[#FFFBF5] -mx-5 -mb-5 py-2.5 px-5 border-t border-orange-50/50 flex items-center gap-3">
         <div className="flex-shrink-0 flex items-center gap-1">
            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
            <span className="text-[10px] font-black text-orange-500 tracking-tighter">最新动态</span>
         </div>
         <div className="w-[1px] h-2.5 bg-orange-100"></div>
         <div className="flex-1 overflow-hidden h-4 relative flex items-center">
            <div className="absolute w-full animate-marquee whitespace-nowrap text-[10px] text-gray-500 font-medium">
               <span>爱心企业“一汽红旗”刚刚捐赠了 <span className="text-[#D9363E] font-bold">146,000</span> 元</span>
               <span className="mx-6 opacity-30">|</span>
               <span>王先生 刚刚通过月捐支持了“关爱留守儿童” <span className="text-[#D9363E] font-bold">100</span> 元</span>
               <span className="mx-6 opacity-30">|</span>
               <span>李女士 刚刚完成了第24次连续月捐...</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default StatsSection;
