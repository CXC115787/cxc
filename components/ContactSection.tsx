
import React from 'react';
import { Phone, Globe } from 'lucide-react';

const LogoDark: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center gap-2 mb-1">
      <div className="w-8 h-8 relative">
        <div className="absolute inset-0 bg-[#d32f2f] rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center relative">
            <div className="absolute w-[1px] h-2 bg-white"></div>
            <div className="w-2 h-[1px] bg-white"></div>
          </div>
        </div>
      </div>
      <span className="text-gray-900 text-lg font-black tracking-tight">中国职工发展基金会</span>
    </div>
    <span className="text-[6px] text-gray-400 font-bold tracking-[0.2em] uppercase">CHINA WORKER DEVELOPMENT FOUNDATION</span>
  </div>
);

const WeChatIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 1024 1024" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" 
      fill="currentColor"
    />
    <path 
      d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" 
      fill="currentColor"
    />
  </svg>
);

const FunctionalIcon: React.FC<{ icon: React.ReactNode, bgColor: string, iconColor: string }> = ({ icon, bgColor, iconColor }) => (
  <div className={`w-12 h-12 ${bgColor} rounded-2xl flex items-center justify-center ${iconColor} shadow-sm active:scale-95 transition-transform`}>
    {icon}
  </div>
);

const ContactSection: React.FC = () => {
  return (
    <div className="-mx-5 mb-5">
      <div className="bg-[#f5f5f5] pt-10 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <LogoDark />
          
          <div className="mt-4 mb-8 px-2">
            <p className="text-gray-500 text-xs font-bold tracking-[0.1em] leading-relaxed">
              服务职工、服务社会、服务发展，让职工生活更美好！
            </p>
          </div>

          <div className="space-y-4 text-gray-600 text-[12px] font-medium leading-relaxed">
            <div className="flex items-center justify-center gap-2">
               <span>工作时间：工作日 9:00-18:00</span>
            </div>
            <div className="flex items-center justify-center gap-2">
               <span>官方邮箱：zjz@china-wdf.org.cn</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4">
               <span>地&nbsp;&nbsp;址：北京市朝阳区广渠路42号院1号楼</span>
            </div>
            <div className="flex items-center justify-center gap-2">
               <span>邮&nbsp;&nbsp;编：100022</span>
            </div>
            <div className="flex items-center justify-center gap-2">
               <span>传&nbsp;&nbsp;真：010-8771 9675</span>
            </div>
          </div>

          <div className="mt-12 w-full">
            <p className="text-gray-800 font-bold text-sm mb-6">了解更多项目资讯，欢迎关注我们</p>
            
            <div className="flex justify-center gap-6">
              <FunctionalIcon 
                icon={<WeChatIcon size={24} />} 
                bgColor="bg-[#e8f5e9]" 
                iconColor="text-[#4caf50]" 
              />
              <FunctionalIcon 
                icon={<Phone size={24} fill="currentColor" />} 
                bgColor="bg-[#fff3e0]" 
                iconColor="text-[#ff9800]" 
              />
              <FunctionalIcon 
                icon={<Globe size={24} />} 
                bgColor="bg-[#e3f2fd]" 
                iconColor="text-[#2196f3]" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
