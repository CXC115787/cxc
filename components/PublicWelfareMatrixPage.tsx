
import React from 'react';
import { ChevronLeft, Home, Heart, HandHeart, School, Flame, Briefcase, History } from 'lucide-react';
import { Enterprise } from '../types';

interface PublicWelfareMatrixPageProps {
  onBack: () => void;
  onEnterpriseClick: (enterprise: Enterprise) => void;
}

const PublicWelfareMatrixPage: React.FC<PublicWelfareMatrixPageProps> = ({ onBack, onEnterpriseClick }) => {
  
  const localFoundations = [
    { city: '安徽', type: '地方基金', bgColor: 'bg-red-50/50', icon: <HandHeart className="text-red-400" size={32} /> },
    { city: '临沂', type: '地方基金', bgColor: 'bg-yellow-50/50', icon: <Home className="text-yellow-400" size={32} fill="currentColor" /> },
    { city: '平顶山', type: '地方基金', bgColor: 'bg-blue-50/50', icon: <School className="text-blue-400" size={32} fill="currentColor" /> },
    { city: '镇江', type: '地方基金', bgColor: 'bg-pink-50/50', icon: <HandHeart className="text-pink-400" size={32} fill="currentColor" /> },
  ];

  const localFoundationCouncils = [
    { city: '安徽', type: '地方基金会', bgColor: 'bg-orange-50/50', icon: <Heart className="text-orange-400" size={32} fill="currentColor" /> },
    { city: '临沂', type: '地方基金会', bgColor: 'bg-blue-50/50', icon: <div className="text-blue-400 relative flex items-center justify-center w-10 h-10 border-2 border-current rounded-full"><Flame size={20} fill="currentColor" /></div> },
    { city: '平顶山', type: '地方基金会', bgColor: 'bg-cyan-50/50', icon: <Home className="text-cyan-400" size={32} fill="currentColor" /> },
    { city: '镇江', type: '地方基金会', bgColor: 'bg-rose-50/50', icon: <Heart className="text-rose-400" size={32} strokeWidth={3} /> },
  ];

  const enterpriseFundsData: Enterprise[] = [
    { 
      id: 'taiji',
      name: '太极股份', 
      fullName: '太极计算机股份有限公司',
      type: '专项基金', 
      logo: <Briefcase className="text-indigo-400" size={32} />,
      bannerColor: 'from-indigo-500 to-blue-400',
      description: '太极股份作为中国电子科技集团公司（CETC）的骨干企业，长期致力于通过信息技术服务民生，其专项基金主要聚焦于数字化公益、偏远地区职工信息化建设。',
      stats: { totalAmount: '1,200,000', projectCount: 12, days: 680 },
      records: [
        { project: '数字化职工关爱计划', amount: '¥200,000', date: '2025.10.15' },
        { project: '偏远小学网络教室援建', amount: '¥350,000', date: '2025.06.22' },
        { project: '抗洪灾区紧急救援', amount: '¥100,000', date: '2024.11.08' }
      ]
    },
    { 
      id: 'hongqi',
      name: '一汽红旗', 
      fullName: '中国第一汽车集团有限公司-红旗品牌',
      type: '爱尚基金', 
      logo: <Flame className="text-red-600" size={32} />,
      bannerColor: 'from-red-600 to-red-400',
      description: '红旗“爱尚”公益基金是由一汽红旗发起的专项公益基金，旨在支持职工教育、青少年体育发展及社会应急救援工作。',
      stats: { totalAmount: '2,850,000', projectCount: 24, days: 1200 },
      records: [
        { project: '红旗爱心助学金', amount: '¥63,160', date: '2025.10.12' },
        { project: '青少年体育梦想场', amount: '¥500,000', date: '2025.04.15' },
        { project: '乡村医生培训计划', amount: '¥120,000', date: '2024.12.01' }
      ]
    }
  ];

  const MatrixCard: React.FC<{ item: any; onClick?: () => void }> = ({ item, onClick }) => (
    <div 
        onClick={onClick}
        className={`rounded-2xl p-4 flex justify-between items-center ${item.bgColor || 'bg-gray-50/50'} relative overflow-hidden group active:scale-[0.98] transition-all h-24 cursor-pointer`}
    >
      <div className="z-10 flex flex-col justify-between h-full">
        <div>
          <h4 className="text-gray-800 font-bold text-base truncate w-24">{item.city || item.name}</h4>
          <p className="text-gray-400 text-[10px]">{item.type}</p>
        </div>
        <div className="text-[10px] text-gray-300">点击了解详情</div>
      </div>
      <div className="z-0 opacity-80 group-hover:scale-110 transition-transform duration-500">
        {item.icon || item.logo}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="bg-white sticky top-0 z-50 flex items-center justify-between px-4 h-12 shadow-sm">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-base font-bold text-gray-800 tracking-tight">公益矩阵</h1>
        <div className="w-8"></div>
      </div>

      <div className="flex-1 overflow-y-auto pb-10">
        <div className="px-4 py-4">
           <div className="relative h-44 rounded-3xl overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400"></div>
              <div className="absolute -bottom-6 -right-6 text-white opacity-20 transform -rotate-12">
                 <HandHeart size={200} strokeWidth={1} />
              </div>
              <div className="relative z-10 h-full p-8 flex flex-col justify-center">
                 <h2 className="text-white text-3xl font-bold leading-tight tracking-[0.1em] drop-shadow-lg">
                    心中常存感激<br />未来光明可期
                 </h2>
              </div>
           </div>
        </div>

        {/* Section: 企业专项基金 */}
        <div className="px-4 mt-2">
           <div className="bg-white rounded-3xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-800 font-bold text-lg flex items-center gap-2">
                   <div className="w-1 h-5 bg-indigo-500 rounded-full"></div>
                   企业专项基金
                </h3>
                <span className="text-[10px] text-gray-400">汇聚企业大爱</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {enterpriseFundsData.map((item) => (
                    <MatrixCard 
                        key={item.id} 
                        item={item} 
                        onClick={() => onEnterpriseClick(item)}
                    />
                 ))}
              </div>

              {/* Enterprise Donation Records Window */}
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3 px-1">
                   <History size={16} className="text-red-500" />
                   <h4 className="text-sm font-bold text-gray-700">最新企业捐赠动态</h4>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                   {enterpriseFundsData.flatMap(e => e.records.slice(0, 2)).sort((a,b) => b.date.localeCompare(a.date)).map((rec, i) => (
                      <div key={i} className="flex justify-between items-center text-xs pb-2 border-b border-gray-100 last:border-0 last:pb-0">
                         <div>
                            <span className="font-bold text-gray-800">{rec.project}</span>
                            <p className="text-[10px] text-gray-400 mt-0.5">{rec.date}</p>
                         </div>
                         <div className="text-right">
                            <span className="text-red-600 font-bold">{rec.amount}</span>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
           </div>
        </div>

        {/* Section 1: 地方基金 */}
        <div className="px-4 mt-4">
           <div className="bg-white rounded-3xl p-5 shadow-sm">
              <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center gap-2">
                 <div className="w-1 h-5 bg-red-500 rounded-full"></div>
                 地方基金
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 {localFoundations.map((item, idx) => (
                    <MatrixCard key={`foundation-${idx}`} item={item} />
                 ))}
              </div>
           </div>
        </div>

        {/* Section 2: 地方基金会 */}
        <div className="px-4 mt-4">
           <div className="bg-white rounded-3xl p-5 shadow-sm">
              <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center gap-2">
                 <div className="w-1 h-5 bg-orange-500 rounded-full"></div>
                 地方基金会
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 {localFoundationCouncils.map((item, idx) => (
                    <MatrixCard key={`council-${idx}`} item={item} />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PublicWelfareMatrixPage;
