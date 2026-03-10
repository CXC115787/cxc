import React, { useState } from 'react';
import { ChevronLeft, Clock } from 'lucide-react';
import { ClaimItem } from '../types';

interface ClaimDetailPageProps {
  item?: ClaimItem;
  onBack: () => void;
}

const ClaimDetailPage: React.FC<ClaimDetailPageProps> = ({ item, onBack }) => {
  const [activeTab, setActiveTab] = useState('项目详情');

  // Default fallback data if no item is passed
  const displayItem = item || {
    title: '贫困儿童开学大礼包',
    deadline: '90天',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800'
  };

  const tabs = ['项目详情', '申领条件', '登记程序'];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 relative">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 h-14 flex items-center justify-between px-4 shadow-sm max-w-md mx-auto">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-700">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-medium text-gray-800">申领详情</h1>
        <div className="w-8"></div> {/* Spacer for centering */}
      </div>

      {/* Main Content Scrollable Area */}
      <div className="pt-14">
        {/* Hero Image */}
        <div className="h-64 w-full bg-gray-200">
          <img 
            src={displayItem.image} 
            alt={displayItem.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Status Card */}
        <div className="mx-4 -mt-8 relative z-10 bg-white rounded-xl shadow-sm overflow-hidden mb-4">
          <div className="bg-gradient-to-r from-pink-50 to-white p-4 pb-2">
            <h2 className="text-xl font-bold text-gray-800 mb-1">{displayItem.title}</h2>
            <div className="flex items-center text-xs text-gray-500">
              <span>距结束: </span>
              <span className="text-red-500 font-bold ml-1">{displayItem.deadline}</span>
            </div>
          </div>
          <div className="px-4 py-3 bg-white">
            <div className="flex justify-between text-xs py-1 border-b border-gray-50">
              <span className="text-gray-400">领取方式:</span>
              <span className="text-gray-600">中国职工发展基金会官方网站</span>
            </div>
            <div className="flex justify-between text-xs py-1 border-b border-gray-50">
              <span className="text-gray-400">开始时间:</span>
              <span className="text-gray-600 font-mono">2025/08/16 12:00:00</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span className="text-gray-400">结束时间:</span>
              <span className="text-gray-600 font-mono">2025/09/16 12:00:00</span>
            </div>
          </div>
        </div>

        {/* Tabs & Content */}
        <div className="bg-white min-h-[500px]">
          {/* Tabs Header */}
          <div className="flex border-b border-gray-100">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-sm font-medium relative ${
                  activeTab === tab ? 'text-gray-800' : 'text-gray-400'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-red-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content Body */}
          <div className="p-5 text-gray-600 text-sm leading-relaxed space-y-6">
            
            <section>
              <h3 className="font-bold text-gray-800 text-base mb-3">执行计划</h3>
              
              <div className="space-y-4">
                <p>
                  <span className="font-medium text-gray-700">帮扶地区：</span>
                  为宁夏回族自治区银川市。
                </p>
                <p>
                  <span className="font-medium text-gray-700">受助对象：</span>
                  为银川市6-18岁家庭经济困难的青少年及家庭经济困难的大学新生。
                </p>
                <p>
                  <span className="font-medium text-gray-700">受助人筛选标准（需满足以下任一条件）：</span>
                  原建档立卡贫困家庭学生，特困供养学生，孤儿（含事实孤儿），持证残疾学生，城市低保家庭或城市低保边缘家庭学生，低收入农户家庭学生，因遭受自然灾害、意外事件、重大疾病等突发情况导致家庭经济困难的学生。已享受同类资助项目的青少年及大学新生，原则上不再资助，避免重复帮扶。
                </p>
              </div>
            </section>

            <section>
              <h3 className="font-bold text-gray-800 text-base mb-3">执行机构介绍</h3>
              <p className="text-justify">
                宁夏青少年发展基金会是经中国青少年发展基金会授权，在宁夏范围内实施希望工程的唯一机构。旨在争取社会支持和捐赠，困难青少年顺利完成学业和健康成长，帮助农村学校改善办学条件，促进宁夏青少年工作和青少年社会教育、科技、文化、福利事业发展。
              </p>
            </section>

          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50 max-w-md mx-auto">
        <button className="w-full bg-[#d32f2f] text-white py-3 rounded-lg font-bold text-base hover:bg-red-700 active:scale-95 transition-all shadow-md shadow-red-100">
          我要申领
        </button>
      </div>
    </div>
  );
};

export default ClaimDetailPage;
