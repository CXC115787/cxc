import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

interface MyClaimRecordsPageProps {
  onBack: () => void;
  onNavigateFeedback?: () => void;
}

const MyClaimRecordsPage: React.FC<MyClaimRecordsPageProps> = ({ onBack, onNavigateFeedback }) => {
  const [activeTab, setActiveTab] = useState<'reviewing' | 'issued'>('reviewing');

  return (
    <div className="bg-gray-50 min-h-screen">
       {/* Header */}
      <div className="bg-white sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 h-12 border-b border-gray-100">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-600">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-medium text-gray-800">我的申领记录</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white p-4">
         <div className="flex bg-gray-100 rounded-lg p-1">
            <button 
                onClick={() => setActiveTab('reviewing')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'reviewing' ? 'bg-white text-orange-500 shadow-sm' : 'text-gray-500'}`}
            >
                审核中
            </button>
            <button 
                onClick={() => setActiveTab('issued')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'issued' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500'}`}
            >
                已发放
            </button>
         </div>
      </div>

      {/* List Content */}
      <div className="p-4 space-y-4">
         {activeTab === 'reviewing' && (
             <div className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
                 <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                     <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="claim" />
                 </div>
                 <div className="flex-1 flex flex-col justify-between">
                     <div>
                         <span className="inline-block bg-orange-100 text-orange-600 text-[10px] px-2 py-0.5 rounded mb-2">待确认</span>
                         <h3 className="text-sm font-medium text-gray-800 line-clamp-2">助力残疾人每日早餐申领活动</h3>
                     </div>
                     <div className="flex justify-between items-center">
                         <span className="text-xs text-gray-400">金额: 50.00元</span>
                         <button 
                            onClick={onNavigateFeedback}
                            className="text-xs bg-red-50 border border-red-200 px-3 py-1 rounded-full text-red-600 font-bold active:scale-95 transition-transform"
                         >
                             去确认收货
                         </button>
                     </div>
                 </div>
             </div>
         )}
         
         {activeTab === 'reviewing' && (
             <div className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
                 <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                     <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="claim" />
                 </div>
                 <div className="flex-1 flex flex-col justify-between">
                     <div>
                        <div className="flex gap-2">
                             <span className="inline-block bg-orange-100 text-orange-600 text-[10px] px-2 py-0.5 rounded mb-2">审核中</span>
                             <span className="inline-block bg-blue-50 text-blue-500 text-[10px] px-2 py-0.5 rounded mb-2">急救包</span>
                        </div>
                         <h3 className="text-sm font-medium text-gray-800 line-clamp-2">家庭急救包申领活动</h3>
                     </div>
                     <div className="flex justify-between items-center">
                         <span className="text-xs text-gray-400">距结束: 12天</span>
                         <button className="text-xs border border-gray-200 px-3 py-1 rounded-full text-gray-600">
                             查看详情
                         </button>
                     </div>
                 </div>
             </div>
         )}

         {activeTab === 'issued' && (
             <div className="flex flex-col items-center justify-center pt-20 text-gray-400">
                 <p className="text-sm">暂无已发放的申领记录</p>
             </div>
         )}
      </div>
    </div>
  );
};

export default MyClaimRecordsPage;