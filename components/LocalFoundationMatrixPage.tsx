
import React from 'react';
import { ChevronLeft, Home, Building, Heart, HandHeart, School, Castle, Flame } from 'lucide-react';

interface LocalFoundationMatrixPageProps {
  onBack: () => void;
}

const LocalFoundationMatrixPage: React.FC<LocalFoundationMatrixPageProps> = ({ onBack }) => {
  
  const localFoundations = [
    { city: '安徽', type: '地方基金', status: 'view', bgColor: 'bg-red-50/50', icon: <HandHeart className="text-red-400" size={32} /> },
    { city: '临沂', type: '地方基金', status: 'view', bgColor: 'bg-yellow-50/50', icon: <Home className="text-yellow-400" size={32} fill="currentColor" /> },
    { city: '平顶山', type: '地方基金', status: 'view', bgColor: 'bg-blue-50/50', icon: <School className="text-blue-400" size={32} fill="currentColor" /> },
    { city: '镇江', type: '地方基金', status: 'building', bgColor: 'bg-pink-50/50', icon: <HandHeart className="text-pink-400" size={32} fill="currentColor" /> },
  ];

  const localFoundationCouncils = [
    { city: '安徽', type: '地方基金会', status: 'view', bgColor: 'bg-orange-50/50', icon: <Heart className="text-orange-400" size={32} fill="currentColor" /> },
    { city: '临沂', type: '地方基金会', status: 'view', bgColor: 'bg-blue-50/50', icon: <div className="text-blue-400 relative flex items-center justify-center w-10 h-10 border-2 border-current rounded-full"><Flame size={20} fill="currentColor" /></div> },
    { city: '平顶山', type: '地方基金会', status: 'view', bgColor: 'bg-cyan-50/50', icon: <Home className="text-cyan-400" size={32} fill="currentColor" /> },
    { city: '镇江', type: '地方基金会', status: 'building', bgColor: 'bg-rose-50/50', icon: <Heart className="text-rose-400" size={32} strokeWidth={3} /> },
  ];

  const MatrixCard: React.FC<{ item: any }> = ({ item }) => (
    <div className={`rounded-2xl p-4 flex justify-between items-center ${item.bgColor} relative overflow-hidden group active:scale-[0.98] transition-all h-24`}>
      <div className="z-10 flex flex-col justify-between h-full">
        <div>
          <h4 className="text-gray-800 font-bold text-base">{item.city}</h4>
          <p className="text-gray-400 text-[10px]">{item.type}</p>
        </div>
        <div className="flex">
          {item.status === 'view' ? (
            <button className="text-[10px] px-3 py-0.5 rounded-full font-medium bg-red-50 text-red-500 border border-red-100">
              去查看
            </button>
          ) : (
            <span className="text-[10px] text-gray-400 py-0.5">
              在建中
            </span>
          )}
        </div>
      </div>
      <div className="z-0 opacity-80 group-hover:scale-110 transition-transform duration-500">
        {item.icon}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="bg-white sticky top-0 z-50 flex items-center justify-between px-4 h-12">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-base font-medium text-gray-800">地方基金矩阵</h1>
        <div className="w-8"></div>
      </div>

      <div className="flex-1 overflow-y-auto pb-10">
        {/* Top Banner */}
        <div className="px-4 py-4">
           <div className="relative h-44 rounded-3xl overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-red-400 to-red-500"></div>
              
              {/* Graphic Decoration */}
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

        {/* Section 1: 地方基金 */}
        <div className="px-4 mt-2">
           <div className="bg-white rounded-3xl p-5 shadow-sm">
              <h3 className="text-gray-800 font-bold text-lg mb-4">地方基金</h3>
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
              <h3 className="text-gray-800 font-bold text-lg mb-4">地方基金会</h3>
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

export default LocalFoundationMatrixPage;
