import React, { useState, useEffect } from 'react';
import { ChevronLeft, CheckCircle2, Camera, Mail, Star, ShieldCheck, Heart, Layout, Send, Image as ImageIcon, X } from 'lucide-react';
import { FeedbackTemplate } from '../types';

interface RecipientFeedbackPageProps {
  onBack: () => void;
}

const RecipientFeedbackPage: React.FC<RecipientFeedbackPageProps> = ({ onBack }) => {
  const [step, setStep] = useState<'confirm' | 'letter' | 'survey'>('confirm');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showLetterModal, setShowLetterModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('t1');
  const [customText, setCustomText] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [surveyComment, setSurveyComment] = useState('');

  const templates: FeedbackTemplate[] = [
    { id: 't1', name: '求学圆梦', content: '感谢您的支持，助我圆梦校园，我会努力学习回报社会。', bgClass: 'bg-blue-50 border-blue-100 text-blue-800' },
    { id: 't2', name: '雪中送炭', content: '您的善举如冬日暖阳，缓解了我家庭的燃眉之急。', bgClass: 'bg-orange-50 border-orange-100 text-orange-800' },
    { id: 't3', name: '感恩同行', content: '在这个困难的时刻，感谢您伸出的援手，温暖了我的心。', bgClass: 'bg-red-50 border-red-100 text-red-800' },
  ];

  const tags = ['审核效率高', '态度亲切', '操作简单', '流程透明', '响应及时'];

  const handleConfirmReceived = () => {
    // Simulate API Call
    setIsConfirmed(true);
    setTimeout(() => {
      setShowLetterModal(true);
    }, 600);
  };

  const handleSendLetter = () => {
    setShowLetterModal(false);
    setStep('survey');
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleFinish = () => {
    onBack();
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-10 flex flex-col">
      {/* Header */}
      <div className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-800">反馈回访</h1>
          <div className="w-8"></div>
        </div>
      </div>

      <div className="p-4 flex-1 space-y-6">
        
        {/* Step 1: Confirmation Card */}
        {step === 'confirm' && (
          <div className={`bg-white rounded-3xl p-6 shadow-lg border border-red-50 transition-all duration-500 transform ${isConfirmed ? 'opacity-50 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-bold mb-3">待确认</span>
                <h2 className="text-xl font-bold text-gray-800">助力残疾人每日早餐</h2>
              </div>
              <div className="bg-red-50 p-3 rounded-2xl text-[#d32f2f]">
                <Heart size={28} fill="currentColor" />
              </div>
            </div>

            <div className="space-y-4 mb-8">
               <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">申领金额</span>
                  <span className="text-2xl font-bold text-gray-800">50.00 <span className="text-sm font-normal">元</span></span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">单号</span>
                  <span className="text-gray-600 text-sm font-mono">CWDF-20250912</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">发放时间</span>
                  <span className="text-gray-600 text-sm">2025-09-12 14:20</span>
               </div>
            </div>

            {/* Evidence Upload Placeholder */}
            <div className="border-2 border-dashed border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center text-gray-400 mb-8 cursor-pointer hover:bg-gray-50 transition-colors">
               <Camera size={32} strokeWidth={1.5} className="mb-2" />
               <span className="text-xs">点击上传凭证（如收款截图/合影）</span>
            </div>

            <button 
              onClick={handleConfirmReceived}
              className="w-full bg-[#d32f2f] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-red-100 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              {isConfirmed ? <CheckCircle2 size={24} /> : '我已收到款项'}
            </button>
          </div>
        )}

        {/* Step 2 Indicator (Success state of confirmation) */}
        {isConfirmed && step === 'confirm' && (
          <div className="flex flex-col items-center justify-center py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <CheckCircle2 size={48} />
             </div>
             <p className="text-lg font-bold text-gray-800">确认成功！</p>
             <p className="text-gray-400 text-sm mt-1">正在为您生成感谢信模块...</p>
          </div>
        )}

        {/* Step 3: Satisfaction Survey (shown after letter) */}
        {step === 'survey' && (
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-50 animate-in zoom-in-95 duration-500">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-2">服务满意度评价</h2>
              <p className="text-gray-400 text-sm">您的声音对我们至关重要</p>
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star} 
                  onClick={() => setRating(star)}
                  className={`transition-all duration-300 ${rating >= star ? 'text-yellow-400 scale-110' : 'text-gray-200'}`}
                >
                  <Star size={40} fill={rating >= star ? 'currentColor' : 'none'} strokeWidth={1.5} />
                </button>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTags.includes(tag) ? 'bg-[#d32f2f] text-white' : 'bg-gray-50 text-gray-500 border border-gray-100'}`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Conditional Input for Low Rating */}
            {rating > 0 && rating <= 2 && (
              <div className="mb-6 animate-in slide-in-from-top-2 duration-300">
                <p className="text-xs text-red-500 mb-2">抱歉给您带来不好的体验，请告诉我们原因：</p>
                <textarea 
                  value={surveyComment}
                  onChange={(e) => setSurveyComment(e.target.value)}
                  placeholder="请输入您的反馈内容..."
                  className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-1 focus:ring-red-200 h-24"
                />
              </div>
            )}

            {/* Anonymity Hint */}
            <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mb-8">
              <ShieldCheck size={14} />
              <span>您的评价将匿名提交，请放心打分</span>
            </div>

            <button 
              onClick={handleFinish}
              className="w-full bg-[#d32f2f] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-red-100 active:scale-95 transition-all"
            >
              提交评价
            </button>
          </div>
        )}

      </div>

      {/* Thank You Letter Modal */}
      {showLetterModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex flex-col items-center justify-end">
          <div className="bg-white w-full max-w-md rounded-t-[2.5rem] p-6 pt-8 animate-in slide-in-from-bottom duration-500 flex flex-col max-h-[90vh]">
             
             {/* Header */}
             <div className="flex justify-between items-center mb-6 px-2">
                <div>
                   <h3 className="text-xl font-bold text-gray-800">写封感谢信</h3>
                   <p className="text-xs text-gray-400 mt-1">捐赠人正在等待您的回音</p>
                </div>
                <button onClick={() => setShowLetterModal(false)} className="bg-gray-100 p-2 rounded-full text-gray-400">
                   <X size={20} />
                </button>
             </div>

             {/* Template Selector */}
             <div className="flex overflow-x-auto gap-3 pb-6 px-2 no-scrollbar">
                {templates.map((t) => (
                   <button
                    key={t.id}
                    onClick={() => setSelectedTemplate(t.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all border-2 ${selectedTemplate === t.id ? 'bg-[#d32f2f] text-white border-[#d32f2f] shadow-lg shadow-red-100' : 'bg-white text-gray-500 border-gray-100'}`}
                   >
                    {t.name}
                   </button>
                ))}
             </div>

             {/* H5 Card Preview */}
             <div className="flex-1 overflow-y-auto px-2 space-y-6">
                <div className={`rounded-3xl p-6 shadow-sm border-2 relative transition-all duration-500 ${templates.find(t => t.id === selectedTemplate)?.bgClass}`}>
                   {/* Background Decoration */}
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Layout size={80} />
                   </div>

                   <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                         <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center">
                            <Mail size={16} />
                         </div>
                         <span className="text-xs font-bold uppercase tracking-widest opacity-60">Digital Gratitude</span>
                      </div>

                      <h4 className="text-lg font-bold mb-4">亲爱的捐赠人：</h4>
                      
                      <p className="text-sm leading-relaxed mb-6 font-medium">
                         {templates.find(t => t.id === selectedTemplate)?.content}
                      </p>

                      {customText && (
                        <p className="text-sm italic opacity-80 mb-6 border-l-2 border-current pl-3">
                           "{customText}"
                        </p>
                      )}

                      <div className="mt-10 flex flex-col items-end">
                         <p className="text-sm font-bold">受助人：陈*</p>
                         <p className="text-[10px] opacity-60 mt-1">项目：助力残疾人每日早餐</p>
                      </div>
                   </div>

                   {/* Corner Logo */}
                   <div className="absolute bottom-4 left-4">
                      <div className="w-6 h-6 bg-[#d32f2f] rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                         WDF
                      </div>
                   </div>
                </div>

                {/* Custom Input */}
                <div>
                   <label className="text-xs font-bold text-gray-400 mb-2 block ml-1">补充心里话 (可选)</label>
                   <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                      <ImageIcon size={20} className="text-gray-300" />
                      <input 
                        type="text" 
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        placeholder="说点心里话..." 
                        className="bg-transparent border-none outline-none text-sm w-full"
                      />
                   </div>
                </div>
             </div>

             {/* Footer Button */}
             <div className="pt-6 pb-2 px-2">
                <button 
                  onClick={handleSendLetter}
                  className="w-full bg-[#d32f2f] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-red-100 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <Send size={20} /> 发送感谢信
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipientFeedbackPage;