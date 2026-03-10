import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { ThankYouLetter } from '../types';

interface ThankYouLettersPageProps {
  onBack: () => void;
  onLetterClick: (letter: ThankYouLetter) => void;
}

const ThankYouLettersPage: React.FC<ThankYouLettersPageProps> = ({ onBack, onLetterClick }) => {
  // Mock data based on the UI image
  const letters: ThankYouLetter[] = [
    {
      id: '1',
      date: '2025/10/17',
      content: '您的捐款已顺利抵达。这不仅仅是一笔款项，更是一颗种子，在我们共同关注的[领域，如：困境儿童关爱]领域里，种下了一个关于未来的可能性。',
      projectTitle: '福利院婴儿救助活动'
    },
    {
      id: '2',
      date: '2025/10/17',
      content: '您的捐款已顺利抵达。这不仅仅是一笔款项，更是一颗种子，在我们共同关注的[领域，如：困境儿童关爱]领域里，种下了一个关于未来的可能性。',
      projectTitle: '福利院婴儿救助活动'
    },
    {
      id: '3',
      date: '2025/10/17',
      content: '您的捐款已顺利抵达。这不仅仅是一笔款项，更是一颗种子，在我们共同关注的[领域，如：困境儿童关爱]领域里，种下了一个关于未来的可能性。',
      projectTitle: '福利院婴儿救助活动'
    }
  ];

  return (
    <div className="bg-[#fef7ec] min-h-screen pb-10">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#fef7ec] border-b border-orange-100/50">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-medium text-gray-800">收到的感谢信</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* List Content */}
      <div className="p-4 space-y-4">
        {letters.map((letter) => (
          <div key={letter.id} className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-xs text-gray-400 mb-3 font-mono">{letter.date}</div>
            
            <div className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
              {letter.content}
            </div>

            <div className="border-t border-gray-50 pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 mb-1">来自您支持过的项目</div>
                <div className="text-sm text-gray-800 font-medium">{letter.projectTitle}</div>
              </div>
              <button 
                onClick={() => onLetterClick(letter)}
                className="bg-[#ffe0b2] text-[#e65100] text-xs px-4 py-1.5 rounded-full font-medium hover:bg-orange-200 active:scale-95 transition-all"
              >
                去查看
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThankYouLettersPage;