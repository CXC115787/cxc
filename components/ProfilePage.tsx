import React from 'react';
import { ChevronRight, HeartHandshake, Coins, MessageSquareText } from 'lucide-react';
import { PageType, Project, ProjectUpdate } from '../types';

interface ProfilePageProps {
  onNavigate: (page: PageType) => void;
  onProjectClick?: (project: Project) => void;
  onUpdateClick?: (update: ProjectUpdate) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate, onProjectClick, onUpdateClick }) => {
  
  // Helper to generate dummy history for consistency with ProjectProgressListPage
  const generateHistoryUpdates = (count: number): ProjectUpdate[] => {
    return Array.from({ length: count }).map((_, index) => ({
      date: "2024.01.01",
      title: `往期项目执行进展汇报 - 第${count - index}期`,
      content: "感谢每一位捐赠人的支持，项目正在按计划稳步推进中。我们将持续关注受助群体的需求，确保每一份爱心都落到实处。",
      images: [],
    }));
  };

  // Mock data for projects and their timeline updates
  const mockProjects: Project[] = [
    {
      id: 1,
      title: "女生加油计划",
      donatedAmount: "50.00",
      organization: "中国社会福利基金会",
      projectImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      updates: [
        {
          date: "2025.10.30",
          title: "女生加油计划项目10 月进展报告",
          content: "本月我们走访了3所山区学校，为200名适龄女生发放了卫生用品包，并开展了生理卫生知识讲座。",
          images: [
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300"
          ]
        },
        ...generateHistoryUpdates(5)
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 relative">
      {/* Header Section with Gradient & Wave */}
      <div className="bg-gradient-to-b from-[#d32f2f] to-[#e53935] pt-12 pb-24 px-6 relative overflow-hidden">
        
        {/* User Info */}
        <div className="relative z-10 flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm overflow-hidden p-1">
             <div className="w-full h-full bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full flex items-center justify-center">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full" />
             </div>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold mb-1">陈陈</h2>
            <p className="text-white/70 text-xs font-mono">ID: 08038010</p>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Main Content Card - Overlapping Header */}
      <div className="px-4 -mt-16 relative z-10 space-y-4">
        
        {/* My Records Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-[#b71c1c] px-4 py-3">
             <h3 className="text-white font-medium text-lg">我的公益记录</h3>
          </div>

          <div className="p-5 flex items-center">
             <div className="flex-1 flex justify-between items-center pr-2 cursor-pointer active:opacity-70" onClick={() => onNavigate('my_donations')}>
                <div>
                   <div className="flex items-center text-gray-800 text-base font-medium mb-2">
                      我的捐款 <ChevronRight size={16} className="text-gray-400 ml-1" />
                   </div>
                   <div className="text-gray-400 text-sm">1000<span className="text-xs ml-0.5">元</span></div>
                </div>
                <div className="w-10 h-10 bg-[#d32f2f] text-white rounded-xl flex items-center justify-center shadow-md">
                    <Coins size={20} />
                </div>
             </div>
             <div className="w-[1px] h-10 bg-gray-100 mx-4"></div>
             <div className="flex-1 flex justify-between items-center pl-2 cursor-pointer active:opacity-70" onClick={() => onNavigate('my_monthly')}>
                <div>
                   <div className="flex items-center text-gray-800 text-base font-medium mb-2">
                      我的月捐 <ChevronRight size={16} className="text-gray-400 ml-1" />
                   </div>
                   <div className="text-gray-400 text-sm">10<span className="text-xs ml-0.5">次</span></div>
                </div>
                <div className="w-10 h-10 bg-[#d32f2f] text-white rounded-xl flex items-center justify-center shadow-md">
                    <HeartHandshake size={20} />
                </div>
             </div>
          </div>
        </div>

        {/* Feedback Subsystem Entry - NEW */}
        <div 
            onClick={() => onNavigate('recipient_feedback')}
            className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between border-l-4 border-red-500 cursor-pointer active:scale-95 transition-transform"
        >
            <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-lg text-red-500">
                    <MessageSquareText size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 text-sm">受助反馈</h4>
                    <p className="text-[10px] text-gray-400">确认收款并发送感谢信</p>
                </div>
            </div>
            <div className="flex items-center">
                <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full font-bold mr-2">1条待办</span>
                <ChevronRight size={16} className="text-gray-300" />
            </div>
        </div>

        {/* Menu List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
           <div className="flex justify-between items-center p-4 border-b border-gray-50">
             <h3 className="font-bold text-gray-800 text-base">我的申领记录</h3>
             <button onClick={() => onNavigate('my_claims')} className="text-xs text-gray-400 flex items-center">
                更多 <ChevronRight size={14} />
             </button>
           </div>
           <div className="p-4 grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg cursor-pointer" onClick={() => onNavigate('my_claims')}>
                  <div className="flex justify-between items-start mb-2">
                     <span className="bg-orange-100 text-orange-600 text-[10px] px-1.5 py-0.5 rounded">待确认</span>
                  </div>
                  <div className="text-xs text-gray-700 font-medium line-clamp-2">助力残疾人每日早餐申领活动</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg cursor-pointer" onClick={() => onNavigate('my_claims')}>
                  <div className="flex justify-between items-start mb-2">
                     <span className="bg-gray-200 text-gray-500 text-[10px] px-1.5 py-0.5 rounded">已发放</span>
                  </div>
                  <div className="text-xs text-gray-700 font-medium line-clamp-2">困难职工子女助学包</div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;