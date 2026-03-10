
import React, { useState } from 'react';
import { ChevronLeft, Search, MapPin, Navigation2, Phone, Clock, Info, X } from 'lucide-react';
import { MapPoint } from '../types';

interface MapFullPageProps {
  onBack: () => void;
}

const MapFullPage: React.FC<MapFullPageProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);

  const categories = ['全部', '爱心驿站', '捐赠网点', '帮扶中心', '爱心餐点'];

  const points: MapPoint[] = [
    {
      id: '1',
      name: '中国职工发展基金会总部',
      type: 'center',
      lat: 40,
      lng: 50,
      address: '北京市东城区建国门内大街7号',
      distance: '1.2km',
      status: 'open'
    },
    {
      id: '2',
      name: '工会户外劳动者爱心驿站',
      type: 'station',
      lat: 60,
      lng: 30,
      address: '银川市兴庆区解放东街',
      distance: '2.5km',
      status: 'open'
    },
    {
      id: '3',
      name: '公益物资产区收集点',
      type: 'box',
      lat: 20,
      lng: 70,
      address: '西夏区北京西路120号',
      distance: '4.8km',
      status: 'open'
    },
    {
        id: '4',
        name: '骑手爱心餐厅 (金凤店)',
        type: 'station',
        lat: 35,
        lng: 85,
        address: '金凤区正源北街新百大卖场旁',
        distance: '0.8km',
        status: 'open'
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'center': return 'text-red-600';
      case 'station': return 'text-orange-500';
      case 'box': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  const getFilteredPoints = () => {
    if (activeCategory === '全部') return points;
    if (activeCategory === '爱心驿站') return points.filter(p => p.type === 'station');
    if (activeCategory === '帮扶中心') return points.filter(p => p.type === 'center');
    if (activeCategory === '捐赠网点') return points.filter(p => p.type === 'box');
    return points;
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col overflow-hidden relative">
      {/* Top Search & Nav */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4 space-y-3 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 active:scale-95 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex-1 bg-white h-10 rounded-full shadow-lg flex items-center px-4 gap-2 border border-gray-100">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="寻找附近的公益点..." 
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex overflow-x-auto gap-2 no-scrollbar pointer-events-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold shadow-md transition-all ${activeCategory === cat ? 'bg-[#d32f2f] text-white' : 'bg-white text-gray-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Map Content (Simulated with dynamic markers on image) */}
      <div className="flex-1 relative bg-[#e5e7eb] overflow-hidden">
        {/* Base Map Image */}
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
          alt="Full Map" 
          className="w-full h-full object-cover opacity-80"
        />

        {/* Dynamic Markers */}
        {getFilteredPoints().map((point) => (
          <div 
            key={point.id}
            onClick={() => setSelectedPoint(point)}
            className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer group"
            style={{ left: `${point.lng}%`, top: `${point.lat}%` }}
          >
            <div className={`relative flex flex-col items-center ${selectedPoint?.id === point.id ? 'scale-125' : 'scale-100'} transition-transform duration-300`}>
                <div className="absolute -top-12 bg-white px-2 py-1 rounded shadow-lg border border-gray-100 whitespace-nowrap hidden group-hover:block transition-all">
                    <span className="text-[10px] font-bold text-gray-800">{point.name}</span>
                </div>
                <div className={`p-1.5 rounded-full bg-white shadow-xl ${getTypeColor(point.type)}`}>
                   <MapPin size={24} fill="currentColor" stroke="white" strokeWidth={1} />
                </div>
                {/* Ping animation for selected */}
                {selectedPoint?.id === point.id && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-400/30 rounded-full animate-ping pointer-events-none"></div>
                )}
            </div>
          </div>
        ))}

        {/* Floating User Location Button */}
        <div className="absolute bottom-32 right-4 flex flex-col gap-3">
            <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-blue-500 active:scale-95">
                <Navigation2 size={20} fill="currentColor" />
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-600 active:scale-95">
                <Info size={20} />
            </button>
        </div>
      </div>

      {/* Selected Point Detail Card (Bottom Sheet) */}
      {selectedPoint && (
        <div className="absolute bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-300">
           <div className="bg-white rounded-t-3xl shadow-2xl p-6 relative">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPoint(null)}
                className="absolute top-4 right-4 text-gray-300 p-1"
              >
                <X size={20} />
              </button>

              <div className="flex justify-between items-start mb-4">
                 <div className="pr-8">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${selectedPoint.type === 'station' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'}`}>
                            {selectedPoint.type === 'station' ? '爱心驿站' : '帮扶机构'}
                        </span>
                        <h3 className="text-lg font-bold text-gray-800">{selectedPoint.name}</h3>
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                        <MapPin size={12} className="mr-1" />
                        <span>{selectedPoint.address}</span>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-red-500 font-bold text-sm">{selectedPoint.distance}</div>
                    <div className="text-[10px] text-green-500 flex items-center justify-end mt-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div> 开放中
                    </div>
                 </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                 <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-50 rounded-xl text-gray-700 font-bold text-sm active:scale-95 transition-all">
                    <Phone size={18} /> 咨询
                 </button>
                 <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#d32f2f] text-white rounded-xl font-bold text-sm shadow-lg shadow-red-100 active:scale-95 transition-all">
                    <Navigation2 size={18} fill="currentColor" /> 到这去
                 </button>
              </div>

              {/* Details Expandable */}
              <div className="mt-6 border-t border-gray-50 pt-4">
                 <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-2">
                        <Clock size={14} /> <span>服务时间: 09:00 - 18:00</span>
                    </div>
                    <button className="text-blue-500 font-medium">详情介绍 ></button>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Overlay for search suggestions or other modal states */}
    </div>
  );
};

export default MapFullPage;
