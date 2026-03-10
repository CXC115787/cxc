import React from 'react';
import { ChevronLeft, ChevronRight, ThumbsUp, MessageSquare, Heart } from 'lucide-react';
import { Project, ProjectUpdate } from '../types';

interface ProjectProgressListPageProps {
  onBack: () => void;
  onProjectClick?: (project: Project) => void;
  onUpdateClick?: (update: ProjectUpdate) => void;
  onThankYouLettersClick?: () => void;
}

// Extended interface for mock data purposes
interface ExtendedProjectUpdate extends ProjectUpdate {
  likes?: number;
  comments?: number;
}

interface ExtendedProject extends Project {
  updates: ExtendedProjectUpdate[];
}

const ProjectProgressListPage: React.FC<ProjectProgressListPageProps> = ({ onBack, onProjectClick, onUpdateClick, onThankYouLettersClick }) => {
  
  // Generate dummy historical updates for demonstration
  const generateHistoryUpdates = (count: number): ExtendedProjectUpdate[] => {
    return Array.from({ length: count }).map((_, index) => ({
      date: "2024.01.01",
      title: `往期项目执行进展汇报 - 第${count - index}期`,
      content: "感谢每一位捐赠人的支持，项目正在按计划稳步推进中。我们将持续关注受助群体的需求，确保每一份爱心都落到实处。",
      images: [],
      likes: 10 + Math.floor(Math.random() * 50),
      comments: Math.floor(Math.random() * 5)
    }));
  };

  // Mock data matching the ProfilePage data exactly
  const projects: ExtendedProject[] = [
    {
      id: 1,
      title: "女生加油计划",
      donatedAmount: "50.00",
      projectImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      organization: "中国社会福利基金会",
      updates: [
        {
          date: "2025.10.30",
          title: "女生加油计划项目10 月进展报告",
          content: "本月我们走访了3所山区学校，为200名适龄女生发放了卫生用品包，并开展了生理卫生知识讲座。孩子们脸上的笑容是我们最大的动力。",
          images: [
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300"
          ],
          likes: 110,
          comments: 1
        },
        {
          date: "2025.09.28",
          title: "开学季，一起来看看小丫...",
          content: "截至9月23日，女生加油计划在河南、湖南怀化、广西等地的23所学校，为在校女生共...",
          images: [
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=300"
          ],
          likes: 162,
          comments: 1
        },
        {
            date: "2025.08.15",
            title: "8月物资筹备情况汇报",
            content: "为了迎接新学期，志愿者们正在紧张地打包爱心物资。感谢每一位捐赠者的支持。",
            images: [],
            likes: 88,
            comments: 5
        },
        {
            date: "2025.07.20",
            title: "暑期特别探访活动",
            content: "暑假期间，我们要去探访几位特殊的受助女生，了解她们的生活近况。",
            images: [],
            likes: 120,
            comments: 8
        },
         {
            date: "2025.06.01",
            title: "六一儿童节快乐",
            content: "祝愿所有女生都能健康快乐成长！",
            images: [],
            likes: 200,
            comments: 20
        },
        // Add 100 dummy updates to simulate a large history
        ...generateHistoryUpdates(100)
      ]
    },
    {
      id: 2,
      title: "为Yoyo找到治愈方法",
      donatedAmount: "100.00",
      organization: "北京天使妈妈慈善基金会",
      projectImage: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=200",
      updates: [
        {
          date: "2025.10.11",
          title: "7月份帮扶了4名患儿",
          content: "在大家的帮助下，Yoyo顺利完成了第二阶段的治疗，目前各项指标趋于稳定。医生表示，如果有持续的康复训练，恢复希望很大。",
          images: [
              "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=300"
          ],
          likes: 45,
          comments: 0
        }
      ]
    },
    {
      id: 3,
      title: "福利院婴儿救助活动",
      donatedAmount: "5000.00",
      organization: "中国社会福利基金会",
      projectImage: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?auto=format&fit=crop&q=80&w=200",
      updates: [
        {
          date: "2025.10.17",
          title: "与肿瘤缠斗的男孩和不放手的父亲",
          content: "肿瘤医院的病房里，10岁的男孩正靠着枕头。他的右腿因为多次手术显得有些纤细，笑着对爸爸说“我能坚持”。",
          images: [
            "https://images.unsplash.com/photo-1538108149393-fbbd8189718c?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300"
          ],
          likes: 320,
          comments: 12
        }
      ]
    }
  ];

  // Custom Red Flower Icon Component
  const RedFlowerIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f44336" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" stroke="#f44336" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" fill="#ffebee" />
    </svg>
  );

  return (
    <div className="bg-[#f7f7f7] min-h-screen pb-10">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#fff5f5]/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-bold text-gray-800">项目进展</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#fff5f5] to-[#f7f7f7] px-6 pt-2 pb-6 flex justify-between items-center relative">
         <div>
            <h2 className="text-[#4e342e] font-bold text-lg flex items-center">
               我累计支持了 <span className="text-[#d32f2f] text-2xl mx-1.5 font-sans">{projects.length}</span> 个项目
            </h2>
         </div>
         
         {/* Envelope Card */}
         <div 
            onClick={onThankYouLettersClick}
            className="bg-[#fffbf0] border border-red-100 rounded-lg p-3 shadow-sm relative w-32 transform rotate-2 cursor-pointer active:scale-95 transition-transform hover:shadow-md"
         >
            <div className="absolute -top-2 -right-2 text-red-500 animate-pulse">
               <RedFlowerIcon />
            </div>
            <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#8d6e63]">
               <span>我的</span>
               <div className="w-3 h-3 bg-orange-300 rounded-full flex items-center justify-center text-[8px] text-white">
                 <ChevronRight size={8} />
               </div>
            </div>
            <div className="text-xs text-[#5d4037] mt-1 text-center font-medium">
               感谢来信
            </div>
            {/* Decoration lines */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-stripes-red-white rounded-b-lg opacity-50"></div>
         </div>
      </div>

      {/* Projects List */}
      <div className="px-4 space-y-4">
        {projects.map((project) => {
          // Logic: Display max 2 updates in preview. If more, show footer with TOTAL count.
          const displayedUpdates = project.updates.slice(0, 2);
          const hasMoreUpdates = project.updates.length > 2;

          return (
            <div key={project.id} className="bg-white rounded-2xl p-5 shadow-sm">
               
               {/* Project Header */}
               <div 
                  className="flex justify-between items-center mb-6 cursor-pointer"
                  onClick={() => onProjectClick && onProjectClick(project)}
               >
                   <div className="flex gap-3 items-center">
                      <img src={project.projectImage} className="w-10 h-10 rounded-lg object-cover" alt={project.title} />
                      <div>
                          <h3 className="font-bold text-gray-800 text-base flex items-center">
                              {project.title} <ChevronRight size={16} className="text-gray-300 ml-1" />
                          </h3>
                          <p className="text-gray-400 text-xs mt-0.5">捐出 <span className="text-gray-600 font-medium">{project.donatedAmount}</span> 元</p>
                      </div>
                   </div>
                   
                   <button className="bg-[#ef5350] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm shadow-red-100 active:scale-95 transition-transform">
                      再捐一笔
                   </button>
               </div>
               
               {/* Updates Timeline */}
               <div className="relative pl-2">
                  {/* Vertical Dotted Line */}
                  <div className="absolute left-[5px] top-2 bottom-4 w-[1px] border-l border-dashed border-gray-300"></div>

                  {displayedUpdates.map((update, index) => (
                      <div 
                          key={index} 
                          className="relative pl-6 mb-8 last:mb-2 cursor-pointer group"
                          onClick={() => onUpdateClick && onUpdateClick(update)}
                      >
                          {/* Flower Icon Node */}
                          <div className="absolute -left-[1px] top-1 bg-white">
                             <RedFlowerIcon />
                          </div>
                          
                          {/* Header: Date & Source */}
                          <div className="flex items-center gap-2 mb-2">
                             <span className="text-xs text-gray-400 font-mono">{update.date}</span>
                             <span className="text-xs text-gray-400 scale-75 transform origin-left">{project.organization} 发布</span>
                          </div>

                          {/* Content Area */}
                          <div className="flex gap-3">
                             {/* Text Content */}
                             <div className="flex-1">
                                <h4 className="text-gray-900 text-sm font-bold mb-1.5 line-clamp-1">{update.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                                   {update.content}
                                </p>
                             </div>

                             {/* Thumbnail Image (Right side) */}
                             {update.images.length > 0 && (
                                <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                   <img src={update.images[0]} className="w-full h-full object-cover" alt="thumbnail" />
                                </div>
                             )}
                          </div>
                      </div>
                  ))}
               </div>

               {/* Footer Link - Show TOTAL count if there are more than 2 updates */}
               {hasMoreUpdates && (
                 <div 
                    className="mt-2 pt-3 border-t border-gray-50 flex justify-center cursor-pointer"
                    onClick={() => onProjectClick && onProjectClick(project)}
                 >
                     <button className="text-xs text-gray-400 flex items-center gap-1 hover:text-gray-600">
                         查看更多 {project.updates.length} 条进展 <ChevronRight size={12} />
                     </button>
                 </div>
               )}
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default ProjectProgressListPage;