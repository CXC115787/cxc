
import React from 'react';
import { Home, Heart, FileText, User } from 'lucide-react';
import { PageType } from '../types';

interface BottomNavProps {
  activePage?: PageType;
  onNavigate?: (page: PageType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage = 'home', onNavigate }) => {
  const handleNav = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isProfileActive = activePage === 'profile' || activePage === 'my_donations' || activePage === 'my_claims' || activePage === 'my_monthly';
  const isDonateActive = activePage === 'donate_home' || activePage === 'monthly_donate_home';

  const NavItem = ({ icon: Icon, label, isActive, onClick }: { icon: any, label: string, isActive: boolean, onClick: () => void }) => (
    <button 
        onClick={onClick} 
        className="flex flex-col items-center justify-center w-full py-1.5"
    >
        <div className={`mb-0.5 ${isActive ? 'text-[#d32f2f]' : 'text-gray-400'}`}>
             <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
        </div>
        <span className={`text-[10px] font-medium ${isActive ? 'text-[#d32f2f]' : 'text-gray-400'}`}>{label}</span>
    </button>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-between items-center z-50 max-w-md mx-auto h-14 pb-safe">
      <NavItem icon={Home} label="首页" isActive={activePage === 'home'} onClick={() => handleNav('home')} />
      <NavItem icon={Heart} label="捐赠" isActive={isDonateActive} onClick={() => handleNav('donate_home')} />
      <NavItem icon={FileText} label="申领" isActive={activePage === 'claim'} onClick={() => handleNav('claim')} />
      <NavItem icon={User} label="我的" isActive={isProfileActive} onClick={() => handleNav('profile')} />
    </div>
  );
};

export default BottomNav;
