import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DonationRecordsPageProps {
  onBack: () => void;
  onViewCertificate?: () => void;
}

const DonationRecordsPage: React.FC<DonationRecordsPageProps> = ({ onBack, onViewCertificate }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 h-12 border-b border-gray-100">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-600">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-medium text-gray-800">捐款记录</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Summary Header */}
      <div className="bg-orange-50 p-6 flex items-center justify-between">
         <div className="flex items-center space-x-2">
            <h2 className="text-gray-700 font-medium text-sm">我的捐款记录</h2>
         </div>
         <button className="text-xs bg-white text-orange-500 px-3 py-1 rounded-full border border-orange-200 shadow-sm">
            捐款票据
         </button>
      </div>

      {/* Stats Row */}
      <div className="bg-white p-6 grid grid-cols-3 gap-4 mb-2 shadow-sm">
         <div className="text-center">
            <div className="text-xl font-bold text-gray-800">3<span className="text-xs font-normal ml-0.5">个</span></div>
            <div className="text-xs text-gray-400 mt-1">捐款项目</div>
         </div>
         <div className="text-center border-l border-r border-gray-100">
            <div className="text-xl font-bold text-gray-800">10<span className="text-xs font-normal ml-0.5">笔</span></div>
            <div className="text-xs text-gray-400 mt-1">捐款笔数</div>
         </div>
         <div className="text-center">
            <div className="text-xl font-bold text-gray-800">13053<span className="text-xs font-normal ml-0.5">元</span></div>
            <div className="text-xs text-gray-400 mt-1">月捐总额</div>
         </div>
      </div>

      {/* List Content */}
      <div className="pb-8">
        {/* Year Group 2025 */}
        <div className="sticky top-12 bg-gray-50 px-4 py-2 text-sm font-bold text-gray-800 z-10">
           2025年
        </div>
        
        <div className="bg-white mx-4 rounded-xl shadow-sm overflow-hidden mb-4">
           {/* Item 1 */}
           <div className="p-4 border-b border-gray-50">
              <div className="flex justify-between items-start mb-2">
                 <span className="text-xs text-gray-400">2025年10月7日</span>
                 <ChevronRight size={14} className="text-gray-300" />
              </div>
              <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-2">
                    <h3 className="text-sm text-gray-800 font-medium">关爱留守儿童公益活动</h3>
                    <span className="text-[10px] border border-orange-200 text-orange-500 px-1 rounded">月捐扣款</span>
                 </div>
                 <div className="text-base font-bold text-gray-800">150.00 <span className="text-xs font-normal">元</span></div>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-xs text-gray-400">单号: 8901829203</span>
                 <button 
                    onClick={onViewCertificate}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 active:scale-95 transition-transform"
                 >
                    查看证书
                 </button>
              </div>
           </div>

           {/* Item 2 */}
           <div className="p-4 border-b border-gray-50">
              <div className="flex justify-between items-start mb-2">
                 <span className="text-xs text-gray-400">2025年9月7日</span>
                 <ChevronRight size={14} className="text-gray-300" />
              </div>
              <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-2">
                    <h3 className="text-sm text-gray-800 font-medium">关爱留守儿童公益活动</h3>
                    <span className="text-[10px] border border-orange-200 text-orange-500 px-1 rounded">月捐扣款</span>
                 </div>
                 <div className="text-base font-bold text-gray-800">150.00 <span className="text-xs font-normal">元</span></div>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-xs text-gray-400">单号: 8901829203</span>
                 <button 
                    onClick={onViewCertificate}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 active:scale-95 transition-transform"
                 >
                    查看证书
                 </button>
              </div>
           </div>

            {/* Item 3 */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                 <span className="text-xs text-gray-400">2025年8月7日</span>
                 <ChevronRight size={14} className="text-gray-300" />
              </div>
              <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-2">
                    <h3 className="text-sm text-gray-800 font-medium">关爱留守儿童公益活动</h3>
                    <span className="text-[10px] border border-red-200 text-red-500 px-1 rounded">单笔扣款</span>
                 </div>
                 <div className="text-base font-bold text-gray-800">150.00 <span className="text-xs font-normal">元</span></div>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-xs text-gray-400">单号: 8901829203</span>
                 <button 
                    onClick={onViewCertificate}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 active:scale-95 transition-transform"
                 >
                    查看证书
                 </button>
              </div>
           </div>
        </div>

        {/* Year Group 2024 */}
        <div className="sticky top-12 bg-gray-50 px-4 py-2 text-sm font-bold text-gray-800 z-10">
           2024年
        </div>
        
        <div className="bg-white mx-4 rounded-xl shadow-sm overflow-hidden mb-4">
           {/* Item 1 */}
           <div className="p-4 border-b border-gray-50">
              <div className="flex justify-between items-start mb-2">
                 <span className="text-xs text-gray-400">2025年10月7日</span>
                 <ChevronRight size={14} className="text-gray-300" />
              </div>
              <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-2">
                    <h3 className="text-sm text-gray-800 font-medium">关爱留守儿童公益活动</h3>
                    <span className="text-[10px] border border-orange-200 text-orange-500 px-1 rounded">月捐扣款</span>
                 </div>
                 <div className="text-base font-bold text-gray-800">150.00 <span className="text-xs font-normal">元</span></div>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-xs text-gray-400">单号: 8901829203</span>
                 <button 
                    onClick={onViewCertificate}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 active:scale-95 transition-transform"
                 >
                    查看证书
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DonationRecordsPage;