
import React, { useState } from 'react';
import { ChevronLeft, Share2, Heart, MessageCircle, Phone, Globe, Mail, Copy, User } from 'lucide-react';
import { DonationProject } from '../types';

interface DonationProjectDetailPageProps {
  project?: DonationProject;
  onBack: () => void;
}

const DonationProjectDetailPage: React.FC<DonationProjectDetailPageProps> = ({ project, onBack }) => {
  const [activeTab, setActiveTab] = useState('detail');

  // Fallback mock data if no project is passed, defaulting to the "Rider" project from screenshots
  const displayProject = project || {
    id: 0,
    title: '骑手职工子女成长救助',
    image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?auto=format&fit=crop&q=80&w=800',
    donors: 13053,
    desc: '受助对象为6-18岁骑手家庭经济困难的青少年及家庭经济困难的大学新生'
  };

  const tabs = [
    { id: 'detail', label: '项目详情' },
    { id: 'records', label: '捐款明细' },
    { id: 'progress', label: '项目进展' },
    { id: 'enterprise', label: '企业捐赠' }
  ];

  // Mock Donation Records
  const donationRecords = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    name: '周奇奇',
    amount: '128',
    time: '2025/11/09 22:43:66',
  }));

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* Header (White Background) */}
      <div className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center justify-between px-4 h-12">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-medium text-gray-800">捐款详情</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-56 bg-gray-200">
        <img 
          src={displayProject.image} 
          alt={displayProject.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Info Card */}
      <div className="bg-white px-4 py-5 mb-3">
         <h2 className="text-xl font-bold text-gray-800 mb-2">{displayProject.title}</h2>
         <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            {displayProject.desc}
         </p>

         <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs">
               <span className="text-gray-400">项目发起方:</span>
               <span className="text-gray-600">中国职工发展基金会</span>
            </div>
            <div className="flex justify-between text-xs">
               <span className="text-gray-400">项目受益对象:</span>
               <span className="text-gray-600">6-18岁职工子女</span>
            </div>
            <div className="flex justify-between text-xs">
               <span className="text-gray-400">项目实施范围:</span>
               <span className="text-gray-600">银川市</span>
            </div>
         </div>

         {/* Stats Block */}
         <div className="bg-[#fff5f5] rounded-lg p-4 flex">
            <div className="flex-1 text-center border-r border-red-100">
               <div className="text-[#c62828] text-xl font-bold mb-1">12910</div>
               <div className="text-xs text-gray-400">捐款金额(元)</div>
            </div>
            <div className="flex-1 text-center">
               <div className="text-[#c62828] text-xl font-bold mb-1">13053</div>
               <div className="text-xs text-gray-400">捐款人次</div>
            </div>
         </div>
      </div>

      {/* Tabs */}
      <div className="bg-white sticky top-12 z-40 shadow-sm mb-3">
         <div className="flex px-2">
            {tabs.map(tab => (
               <div 
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`flex-1 py-3 text-center text-sm relative cursor-pointer ${activeTab === tab.id ? 'text-gray-800 font-bold' : 'text-gray-500'}`}
               >
                  {tab.label}
                  {activeTab === tab.id && (
                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-800 rounded-full"></div>
                  )}
               </div>
            ))}
         </div>
      </div>

      {/* Tab Content */}
      <div className="px-4">
         
         {/* Project Details */}
         {activeTab === 'detail' && (
            <div className="bg-white rounded-xl p-5 shadow-sm space-y-6 min-h-[300px]">
               <section>
                  <h3 className="font-bold text-gray-800 mb-3 text-base">执行计划</h3>
                  <div className="text-sm text-gray-600 leading-7 text-justify space-y-4">
                     <p>
                        <span className="text-gray-500 block mb-1">帮扶地区：</span>
                        为宁夏回族自治区银川市。
                     </p>
                     <p>
                        <span className="text-gray-500 block mb-1">受助对象：</span>
                        为银川市6-18岁家庭经济困难的青少年及家庭经济困难的大学新生。
                     </p>
                     <p>
                        <span className="text-gray-500 block mb-1">受助人筛选标准：</span>
                        原建档立卡贫困家庭学生，特困供养学生，孤儿（含事实孤儿），持证残疾学生，城市低保家庭或城市低保边缘家庭学生，低收入农户家庭学生，因遭受自然灾害、意外事件、重大疾病等突发情况导致家庭经济困难的学生。
                     </p>
                  </div>
               </section>
               <section>
                  <h3 className="font-bold text-gray-800 mb-3 text-base">执行机构介绍</h3>
                  <p className="text-sm text-gray-600 leading-7 text-justify">
                     宁夏青少年发展基金会是经中国青少年发展基金会授权，在宁夏范围内实施希望工程的唯一机构。旨在争取社会支持和捐赠，困难青少年顺利完成学业和健康成长，帮助农村学校改善办学条件，促进宁夏青少年工作和青少年社会教育、科技、文化、福利事业发展。
                  </p>
               </section>
            </div>
         )}

         {/* Donation Records */}
         {activeTab === 'records' && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden min-h-[300px]">
               {donationRecords.map((record, index) => (
                  <div key={record.id} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#d32f2f] flex items-center justify-center text-white">
                           <User size={20} fill="currentColor" />
                        </div>
                        <div>
                           <div className="text-sm font-medium text-gray-800 mb-0.5">{record.name}</div>
                           <div className="text-[10px] text-gray-400">{record.time}</div>
                        </div>
                     </div>
                     <div className="text-sm text-gray-800 font-medium">
                        捐赠{record.amount}元
                     </div>
                  </div>
               ))}
            </div>
         )}

         {/* Project Progress */}
         {activeTab === 'progress' && (
            <div className="bg-white rounded-xl p-5 shadow-sm min-h-[300px]">
               <div className="border-l border-dashed border-gray-300 ml-1.5 space-y-8 pl-6 py-2">
                  {/* Item 1 */}
                  <div className="relative">
                     <div className="absolute -left-[29px] top-1 w-2.5 h-2.5 bg-[#ef5350] rounded-full"></div>
                     <div className="text-xs text-gray-800 font-bold mb-2">2025/10/17</div>
                     <div className="text-sm text-gray-700 font-medium mb-2">与肿瘤缠斗的男孩和不放手的父亲</div>
                     <p className="text-xs text-gray-500 leading-relaxed mb-3">
                        肿瘤医院的病房里，10岁的男孩正靠着枕头。他的右腿因为多次手术显得有些纤细，笑着对爸爸说“我能坚持”。
                     </p>
                     <div className="flex gap-2 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1538108149393-fbbd8189718c?auto=format&fit=crop&q=80&w=200" className="w-24 h-24 object-cover rounded-lg" alt="progress" />
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200" className="w-24 h-24 object-cover rounded-lg" alt="progress" />
                        <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=200" className="w-24 h-24 object-cover rounded-lg" alt="progress" />
                     </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative">
                     <div className="absolute -left-[29px] top-1 w-2.5 h-2.5 bg-[#ef5350]/30 rounded-full"></div>
                     <div className="text-xs text-gray-800 font-bold mb-2">2025/10/17</div>
                     <div className="text-sm text-gray-700 font-medium mb-2">超早产宝宝的求生之路</div>
                     <p className="text-xs text-gray-500 leading-relaxed mb-3">
                        医院的保温箱里，一个体重不足1500克的男婴正在与死神博弈。这个提前10周降临的小生命，带着9项并发症闯入人间。
                     </p>
                     <div className="flex gap-2 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=200" className="w-24 h-24 object-cover rounded-lg" alt="progress" />
                        <img src="https://images.unsplash.com/photo-1584515933487-779824d29609?auto=format&fit=crop&q=80&w=200" className="w-24 h-24 object-cover rounded-lg" alt="progress" />
                     </div>
                  </div>
               </div>
            </div>
         )}

         {/* Enterprise Donation */}
         {activeTab === 'enterprise' && (
            <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-600 pl-2">联系我们</h3>
                
                {/* WeChat */}
                <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <MessageCircle size={20} fill="currentColor" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-800">官方微信</h4>
                        <p className="text-xs text-gray-400">基金会官方公众号</p>
                    </div>
                    <button className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-full">
                        立即添加
                    </button>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Phone size={20} fill="currentColor" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-800">联系电话</h4>
                        <p className="text-xs text-gray-400">010-8771 9682</p>
                    </div>
                    <button className="bg-orange-500 text-white text-xs px-3 py-1.5 rounded-full">
                        立即拨打
                    </button>
                </div>

                {/* Website */}
                <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Globe size={20} />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-800">官方网址</h4>
                        <p className="text-xs text-gray-400 truncate w-32">china-wdf.org.cn</p>
                    </div>
                    <button className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full">
                        立即前往
                    </button>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Mail size={20} />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-800">联系邮箱</h4>
                        <p className="text-xs text-gray-400 truncate w-32">zjz@china-wdf.org.cn</p>
                    </div>
                    <button className="text-gray-400 text-xs px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200">
                        复制
                    </button>
                </div>

                <div className="h-4"></div>
                <h3 className="text-sm font-medium text-gray-600 pl-2">银行汇款</h3>
                
                <div className="bg-white rounded-xl p-5 shadow-sm space-y-3">
                    <div className="text-xs flex">
                        <span className="text-gray-500 w-16">户名：</span>
                        <span className="text-gray-800 select-all">中国职工发展基金会</span>
                    </div>
                    <div className="text-xs flex">
                        <span className="text-gray-500 w-16">账户：</span>
                        <span className="text-gray-800 select-all">11050111157000000020</span>
                    </div>
                    <div className="text-xs flex">
                        <span className="text-gray-500 w-16">开户行：</span>
                        <span className="text-gray-800">中国建设银行股份有限公司北京广渠门支行</span>
                    </div>
                </div>
            </div>
         )}

      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 z-50 border-t border-gray-100 max-w-md mx-auto">
         <button className="w-full bg-[#d32f2f] text-white py-3.5 rounded-md font-medium text-base hover:bg-red-700 active:scale-95 transition-all">
            献爱心
         </button>
      </div>
    </div>
  );
};

export default DonationProjectDetailPage;
