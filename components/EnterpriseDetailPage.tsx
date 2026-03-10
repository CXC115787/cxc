
import React from 'react';
import { ChevronLeft, BarChart3, Clock, Gift, Info, Building2 } from 'lucide-react';
import { Enterprise } from '../types';

interface EnterpriseDetailPageProps {
  enterprise?: Enterprise;
  onBack: () => void;
}

const EnterpriseDetailPage: React.FC<EnterpriseDetailPageProps> = ({ enterprise, onBack }) => {
  if (!enterprise) return null;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white sticky top-0 z-50 flex items-center justify-between px-4 h-12 border-b border-gray-100">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-base font-bold text-gray-800">企业专项基金详情</h1>
        <div className="w-8"></div>
      </div>

      <div className="flex-1 overflow-y-auto pb-10">
        {/* Top Visual Section */}
        <div className={`bg-gradient-to-br ${enterprise.bannerColor} h-40 relative flex items-end px-6 pb-6`}>
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <Building2 size={120} />
           </div>
           <div className="bg-white p-4 rounded-3xl shadow-xl flex items-center justify-center -mb-12 border-4 border-white">
              {enterprise.logo}
           </div>
        </div>

        {/* Enterprise Name Section */}
        <div className="pt-16 px-6 mb-6">
           <h2 className="text-2xl font-bold text-gray-900">{enterprise.name}</h2>
           <p className="text-gray-400 text-sm mt-1">{enterprise.fullName}</p>
           
           <div className="flex items-center gap-2 mt-4">
              <span className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full font-bold">数字化公益</span>
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full font-bold">社会责任领航员</span>
           </div>
        </div>

        {/* Core Stats */}
        <div className="px-6 grid grid-cols-3 gap-4 mb-8">
           <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-50">
              <p className="text-xs text-gray-400 mb-1">累计捐赠(元)</p>
              <p className="text-lg font-bold text-indigo-600">{enterprise.stats.totalAmount}</p>
           </div>
           <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-50">
              <p className="text-xs text-gray-400 mb-1">参与项目</p>
              <p className="text-lg font-bold text-gray-800">{enterprise.stats.projectCount}</p>
           </div>
           <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-50">
              <p className="text-xs text-gray-400 mb-1">捐赠天数</p>
              <p className="text-lg font-bold text-gray-800">{enterprise.stats.days}</p>
           </div>
        </div>

        {/* Enterprise Info Section */}
        <div className="px-6 mb-8">
           <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50">
              <h3 className="text-gray-800 font-bold text-base mb-4 flex items-center gap-2">
                 <Info size={18} className="text-indigo-500" /> 企业信息
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">
                 {enterprise.description}
              </p>
           </div>
        </div>

        {/* Donation Footprint Analysis (Analysis Preview) */}
        <div className="px-6 mb-8">
           <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50">
              <h3 className="text-gray-800 font-bold text-base mb-4 flex items-center gap-2">
                 <BarChart3 size={18} className="text-blue-500" /> 公益足迹分析
              </h3>
              <div className="space-y-4">
                 <div>
                    <div className="flex justify-between text-xs mb-1.5">
                       <span className="text-gray-500">职工关爱</span>
                       <span className="text-gray-800 font-bold">65%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-indigo-500 h-full w-[65%]"></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-xs mb-1.5">
                       <span className="text-gray-500">基础建设</span>
                       <span className="text-gray-800 font-bold">20%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-blue-400 h-full w-[20%]"></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-xs mb-1.5">
                       <span className="text-gray-500">应急救援</span>
                       <span className="text-gray-800 font-bold">15%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-red-400 h-full w-[15%]"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Donation History List */}
        <div className="px-6">
           <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50">
              <h3 className="text-gray-800 font-bold text-base mb-4 flex items-center gap-2">
                 <Gift size={18} className="text-pink-500" /> 捐赠记录
              </h3>
              <div className="space-y-6 relative">
                 <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-50"></div>
                 {enterprise.records.map((record, i) => (
                    <div key={i} className="flex gap-4 relative">
                       <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 z-10 border-2 border-white">
                          <Clock size={12} className="text-indigo-400" />
                       </div>
                       <div className="flex-1 pb-1">
                          <div className="flex justify-between items-start mb-1">
                             <h4 className="text-sm font-bold text-gray-800">{record.project}</h4>
                             <span className="text-red-500 font-bold text-sm">{record.amount}</span>
                          </div>
                          <p className="text-[10px] text-gray-400">{record.date}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDetailPage;
