import React from 'react';
import { ChevronLeft, Wallet, Heart } from 'lucide-react';
import { DonationProject } from '../types';

interface MonthlyDonatePageProps {
  onBack: () => void;
  onProjectClick?: (project: DonationProject) => void;
}

const MonthlyDonatePage: React.FC<MonthlyDonatePageProps> = ({ onBack, onProjectClick }) => {
  const projects: DonationProject[] = [
    {
      id: 1,
      title: '慈善募捐 | 赈济家庭箱筹备计划',
      desc: '帮助过渡安置期的受灾家庭维系一周基本生活',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=300',
      donors: 1023
    },
    {
      id: 2,
      title: '慈善募捐 | 乡村儿童图书室援建',
      desc: '为偏远地区的孩子们建立梦想的图书馆，让知识改变命运',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=300',
      donors: 856
    },
    {
      id: 3,
      title: '慈善募捐 | 孤寡老人暖冬行动',
      desc: '为独居老人送去过冬物资，让他们感受社会的温暖',
      image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&q=80&w=300',
      donors: 2140
    },
    {
      id: 4,
      title: '慈善募捐 | 关爱环卫工爱心餐',
      desc: '为城市美容师提供一份热乎乎的免费午餐',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=300',
      donors: 1023
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-100">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-medium text-gray-800">月捐</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-[#d32f2f] to-[#ef5350] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-4 translate-y-4"></div>
          
          <div className="relative z-10 flex items-center gap-2 mb-6">
            <Wallet size={20} />
            <h2 className="font-bold text-lg">我支持的月捐</h2>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">3<span className="text-xs font-normal ml-1">个</span></div>
              <div className="text-xs text-white/80 flex items-center justify-center">
                我的月捐 <ChevronLeft size={10} className="rotate-180 ml-0.5" />
              </div>
            </div>
            <div className="border-l border-white/20">
              <div className="text-2xl font-bold mb-1">10<span className="text-xs font-normal ml-1">个月</span></div>
              <div className="text-xs text-white/80">最高月数</div>
            </div>
            <div className="border-l border-white/20">
              <div className="text-2xl font-bold mb-1">13053<span className="text-xs font-normal ml-1">元</span></div>
              <div className="text-xs text-white/80">月捐总额</div>
            </div>
          </div>
          
          {/* 3D Hand Heart Illustration Placeholder - Using CSS/Icon for now */}
          <div className="absolute top-3 right-3 opacity-20">
             <Heart size={64} fill="white" />
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="px-4">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-bold text-gray-800">月捐项目</h3>
          <span className="text-xs text-gray-400">立即行动，把爱传递</span>
        </div>

        <div className="space-y-4">
          {projects.map(project => (
            <div 
                key={project.id} 
                className="bg-white rounded-xl p-3 shadow-sm flex gap-3 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onProjectClick && onProjectClick(project)}
            >
              <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0 relative">
                <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
                {/* Vertical Text Decoration */}
                <div className="absolute left-2 bottom-2 text-[10px] text-white/90 vertical-rl writing-vertical-rl tracking-widest h-16 opacity-80">
                   时光清浅
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-2 leading-tight">{project.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-red-500 font-medium">{project.donors} <span className="text-gray-400 font-normal">人次已捐款</span></span>
                  <button className="bg-red-50 text-red-600 text-xs px-3 py-1.5 rounded font-medium hover:bg-red-100 active:scale-95 transition-all">
                    献爱心
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyDonatePage;