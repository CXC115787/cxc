import React from 'react';
import { ChevronLeft, Mail } from 'lucide-react';
import { ThankYouLetter } from '../types';

interface ThankYouLetterDetailPageProps {
  letter?: ThankYouLetter;
  onBack: () => void;
}

const ThankYouLetterDetailPage: React.FC<ThankYouLetterDetailPageProps> = ({ letter, onBack }) => {
  if (!letter) return null;

  return (
    <div className="bg-[#d32f2f] min-h-screen flex flex-col items-center pt-4 relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="p-2 -ml-2 text-white">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-medium text-white">感谢信详情</h1>
          <div className="w-8"></div>
        </div>
      </div>

      <div className="mt-16 w-full px-4 pb-10">
        {/* Letter Card */}
        <div className="bg-[#fffbf0] rounded-lg shadow-2xl p-8 relative min-h-[60vh]">
           {/* Stamp/Icon */}
           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md border-4 border-[#fffbf0]">
              <Mail className="text-[#d32f2f]" size={32} />
           </div>

           <div className="mt-6 text-center">
              <h2 className="text-xl font-bold text-[#5d4037] mb-2">感谢您的善举</h2>
              <p className="text-xs text-[#8d6e63]">{letter.date}</p>
           </div>

           <div className="mt-8 space-y-4">
              <p className="text-sm font-bold text-[#5d4037]">亲爱的捐赠人：</p>
              <p className="text-sm text-[#5d4037] leading-7 text-justify indent-8">
                 {letter.content}
              </p>
              <p className="text-sm text-[#5d4037] leading-7 text-justify indent-8">
                 您的爱心如同冬日里的暖阳，温暖了每一个受助者的心田。因为有您，世界变得更加美好。我们将继续努力，不负您的信任与重托。
              </p>
              <p className="text-sm text-[#5d4037] leading-7 text-justify indent-8">
                 再次感谢您对<span className="font-bold mx-1">{letter.projectTitle}</span>的支持！
              </p>
           </div>

           <div className="mt-12 text-right">
              <p className="text-sm font-bold text-[#5d4037]">中国职工发展基金会</p>
              <p className="text-xs text-[#8d6e63] mt-1">{letter.date}</p>
           </div>

           {/* Decorative Border */}
           <div className="absolute inset-2 border-2 border-[#d7ccc8] border-dashed rounded pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouLetterDetailPage;