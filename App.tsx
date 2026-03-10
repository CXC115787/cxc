
import React, { useState } from 'react';
import Header from './components/Header';
import StatsSection from './components/StatsSection'; 
import MapSection from './components/MapSection';
import HomeBanner from './components/HomeBanner'; 
import InfoSection from './components/InfoSection'; 
import ContactSection from './components/ContactSection';
import BottomNav from './components/BottomNav';
import FloatingActions from './components/FloatingActions';
import ClaimPage from './components/ClaimPage';
import ClaimDetailPage from './components/ClaimDetailPage';
import ProfilePage from './components/ProfilePage';
import DonationRecordsPage from './components/DonationRecordsPage';
import MyClaimRecordsPage from './components/MyClaimRecordsPage';
import DonationCertificatePage from './components/DonationCertificatePage';
import ProjectProgressListPage from './components/ProjectProgressListPage';
import ProjectFullTimelinePage from './components/ProjectFullTimelinePage';
import ProjectUpdateDetailPage from './components/ProjectUpdateDetailPage';
import ThankYouLettersPage from './components/ThankYouLettersPage';
import ThankYouLetterDetailPage from './components/ThankYouLetterDetailPage';
import DonatePage from './components/DonatePage';
import MonthlyDonatePage from './components/MonthlyDonatePage';
import DonationProjectDetailPage from './components/DonationProjectDetailPage';
import RecipientFeedbackPage from './components/RecipientFeedbackPage';
import MyNeedsFeedbackPage from './components/MyNeedsFeedbackPage';
import DonationProcessPage from './components/DonationProcessPage';
import MapFullPage from './components/MapFullPage';
import PublicWelfareMatrixPage from './components/PublicWelfareMatrixPage';
import EnterpriseDetailPage from './components/EnterpriseDetailPage';
import ProjectsCarousel from './components/ProjectsCarousel';
import { PageType, ClaimItem, Project, ProjectUpdate, ThankYouLetter, DonationProject, Enterprise } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedClaimItem, setSelectedClaimItem] = useState<ClaimItem | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [selectedUpdate, setSelectedUpdate] = useState<ProjectUpdate | undefined>(undefined);
  const [selectedLetter, setSelectedLetter] = useState<ThankYouLetter | undefined>(undefined);
  const [selectedDonationProject, setSelectedDonationProject] = useState<DonationProject | undefined>(undefined);
  const [selectedEnterprise, setSelectedEnterprise] = useState<Enterprise | undefined>(undefined);

  const handleClaimItemClick = (item: ClaimItem) => {
    setSelectedClaimItem(item);
    setCurrentPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project_full_timeline');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnterpriseClick = (enterprise: Enterprise) => {
    setSelectedEnterprise(enterprise);
    setCurrentPage('enterprise_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] relative max-w-md mx-auto shadow-2xl overflow-hidden font-sans text-gray-800">
      
      {/* Home Page Content */}
      {currentPage === 'home' && (
        <>
          {/* 增加 pb-20 确保滚动到底部时，ContactSection 底部预留 20px 间距后刚好在导航栏上方 */}
          <div className="relative pb-20">
            <Header />
            
            <HomeBanner />
            
            {/* 将 space-y-10 减少为 space-y-8 */}
            <div className="px-5 space-y-8 -mt-24 relative z-20">
                <StatsSection />
            
                <ProjectsCarousel 
                  onDonateClick={() => setCurrentPage('donate_home')}
                  onClaimClick={() => setCurrentPage('claim')}
                />

                <MapSection onOpenMap={() => setCurrentPage('map_full')} />
                
                <InfoSection onNavigateMatrix={() => setCurrentPage('public_welfare_matrix')} />
                
                <ContactSection />
            </div>
          </div>
          <FloatingActions />
          <BottomNav activePage={currentPage} onNavigate={setCurrentPage} />
        </>
      )}

      {/* Routing Logic */}
      {currentPage === 'public_welfare_matrix' && <PublicWelfareMatrixPage onBack={() => setCurrentPage('home')} onEnterpriseClick={handleEnterpriseClick} />}
      {currentPage === 'enterprise_detail' && <EnterpriseDetailPage enterprise={selectedEnterprise} onBack={() => setCurrentPage('public_welfare_matrix')} />}
      {currentPage === 'map_full' && <MapFullPage onBack={() => setCurrentPage('home')} />}
      {currentPage === 'donation_process' && <DonationProcessPage onBack={() => setCurrentPage('home')} onGoDonate={() => setCurrentPage('donate_home')} />}
      {currentPage === 'claim' && <><ClaimPage onItemClick={handleClaimItemClick} /><BottomNav activePage={currentPage} onNavigate={setCurrentPage} /></>}
      {currentPage === 'my_needs_feedback' && <MyNeedsFeedbackPage onBack={() => setCurrentPage('home')} />}
      {currentPage === 'detail' && <ClaimDetailPage item={selectedClaimItem} onBack={() => setCurrentPage('claim')} />}
      {currentPage === 'donate_home' && <><DonatePage onBack={() => setCurrentPage('home')} onProjectClick={(p) => { setSelectedDonationProject(p); setCurrentPage('donation_project_detail'); }} /><BottomNav activePage={currentPage} onNavigate={setCurrentPage} /></>}
      {currentPage === 'monthly_donate_home' && <><MonthlyDonatePage onBack={() => setCurrentPage('home')} onProjectClick={(p) => { setSelectedDonationProject(p); setCurrentPage('donation_project_detail'); }} /><BottomNav activePage={currentPage} onNavigate={setCurrentPage} /></>}
      {currentPage === 'donation_project_detail' && <DonationProjectDetailPage project={selectedDonationProject} onBack={() => setCurrentPage('donate_home')} />}
      {currentPage === 'profile' && <><ProfilePage onNavigate={setCurrentPage} onProjectClick={handleProjectClick} onUpdateClick={(u) => { setSelectedUpdate(u); setCurrentPage('project_progress_detail'); }} /><BottomNav activePage={currentPage} onNavigate={setCurrentPage} /></>}
      {currentPage === 'recipient_feedback' && <RecipientFeedbackPage onBack={() => setCurrentPage('my_claims')} />}
      {currentPage === 'my_donations' && <DonationRecordsPage onBack={() => setCurrentPage('profile')} onViewCertificate={() => setCurrentPage('donation_certificate')} />}
      {currentPage === 'donation_certificate' && <DonationCertificatePage onBack={() => setCurrentPage('my_donations')} />}
      {currentPage === 'my_claims' && <MyClaimRecordsPage onBack={() => setCurrentPage('profile')} onNavigateFeedback={() => setCurrentPage('recipient_feedback')} />}
      {currentPage === 'project_progress_list' && <ProjectProgressListPage onBack={() => setCurrentPage('profile')} onProjectClick={handleProjectClick} onUpdateClick={(u) => { setSelectedUpdate(u); setCurrentPage('project_progress_detail'); }} onThankYouLettersClick={() => setCurrentPage('thank_you_letters')} />}
      {currentPage === 'project_full_timeline' && <ProjectFullTimelinePage project={selectedProject} onBack={() => setCurrentPage('project_progress_list')} onUpdateClick={(u) => { setSelectedUpdate(u); setCurrentPage('project_progress_detail'); }} />}
      {currentPage === 'project_progress_detail' && <ProjectUpdateDetailPage update={selectedUpdate} onBack={() => setCurrentPage('project_full_timeline')} />}
      {currentPage === 'thank_you_letters' && <ThankYouLettersPage onBack={() => setCurrentPage('project_progress_list')} onLetterClick={(l) => { setSelectedLetter(l); setCurrentPage('thank_you_letter_detail'); }} />}
      {currentPage === 'thank_you_letter_detail' && <ThankYouLetterDetailPage letter={selectedLetter} onBack={() => setCurrentPage('thank_you_letters')} />}

    </div>
  );
};

export default App;
