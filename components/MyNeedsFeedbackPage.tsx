import React, { useState } from 'react';
import { ChevronLeft, Camera, AlertTriangle, CheckCircle2, Heart, HelpCircle, Utensils, Stethoscope, GraduationCap, Home } from 'lucide-react';

interface MyNeedsFeedbackPageProps {
  onBack: () => void;
}

type NeedCategory = 'living' | 'medical' | 'education' | 'emergency' | 'other';

const MyNeedsFeedbackPage: React.FC<MyNeedsFeedbackPageProps> = ({ onBack }) => {
  const [category, setCategory] = useState<NeedCategory>('living');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState<'normal' | 'urgent' | 'immediate'>('normal');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { id: 'living', name: '生活物资', icon: <Utensils size={20} />, color: 'bg-orange-50 text-orange-600 border-orange-200' },
    { id: 'medical', name: '医疗救助', icon: <Stethoscope size={20} />, color: 'bg-red-50 text-red-600 border-red-200' },
    { id: 'education', name: '子女教育', icon: <GraduationCap size={20} />, color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { id: 'emergency', name: '突发困难', icon: <AlertTriangle size={20} />, color: 'bg-purple-50 text-purple-600 border-purple-200' },
    { id: 'other', name: '其他需求', icon: <HelpCircle size={20} />, color: 'bg-gray-50 text-gray-600 border-gray-200' },
  ];

  const handleSubmit = () => {
    // Simulate API Call
    setIsSubmitted(true);
    // Auto-return after 3 seconds
    setTimeout(() => {
        onBack();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-lg shadow-green-100">
          <CheckCircle2 size={56} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">提交成功</h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          您的需求已提交至基金会审核。<br />
          工作人员核实后将尽快通过电话或短信与您联系，请保持通讯畅通。
        </p>
        <div className="flex items-center gap-2 text-[#d32f2f] font-bold">
          <Heart size={20} fill="currentColor" />
          <span>中国职工发展基金会</span>
        </div>
        <button 
          onClick={onBack}
          className="mt-12 text-gray-400 text-sm border-b border-gray-200"
        >
          即刻返回首页
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20 flex flex-col">
      {/* Header */}
      <div className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-800">填写需求反馈</h1>
          <div className="w-8"></div>
        </div>
      </div>

      <div className="p-4 flex-1 space-y-6">
        
        {/* Category Selector */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#d32f2f] rounded-full"></span>
            请选择需求类别
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id as NeedCategory)}
                className={`flex items-center gap-2 p-3 rounded-2xl border-2 transition-all ${category === cat.id ? `${cat.color} border-current shadow-sm` : 'bg-white border-gray-100 text-gray-400'}`}
              >
                {cat.icon}
                <span className="text-sm font-bold">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Input */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#d32f2f] rounded-full"></span>
            需求详细描述
          </h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="请详细描述您目前面临的困难或急需的物资（如：因伤住院急需轮椅、家中孩子开学缺少书包等）..."
            className="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-1 focus:ring-red-100 h-40 resize-none leading-relaxed"
          />
          
          <div className="mt-4 flex items-center gap-4">
             <button className="flex flex-col items-center justify-center w-20 h-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 active:scale-95 transition-transform">
                <Camera size={24} strokeWidth={1.5} />
                <span className="text-[10px] mt-1">上传图片</span>
             </button>
             <p className="text-[10px] text-gray-400 flex-1">
                提示：上传现场照片或相关证明材料（如医院诊断、残疾证等）有助于加快审核进度。
             </p>
          </div>
        </div>

        {/* Urgency Level */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#d32f2f] rounded-full"></span>
            紧急程度
          </h3>
          <div className="flex gap-3">
            <button 
                onClick={() => setUrgency('normal')}
                className={`flex-1 py-3 rounded-xl text-xs font-bold border-2 transition-all ${urgency === 'normal' ? 'bg-green-50 border-green-500 text-green-700' : 'bg-white border-gray-100 text-gray-400'}`}
            >
                普通
            </button>
            <button 
                onClick={() => setUrgency('urgent')}
                className={`flex-1 py-3 rounded-xl text-xs font-bold border-2 transition-all ${urgency === 'urgent' ? 'bg-orange-50 border-orange-500 text-orange-700' : 'bg-white border-gray-100 text-gray-400'}`}
            >
                紧急
            </button>
            <button 
                onClick={() => setUrgency('immediate')}
                className={`flex-1 py-3 rounded-xl text-xs font-bold border-2 transition-all ${urgency === 'immediate' ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-gray-100 text-gray-400'}`}
            >
                特急
            </button>
          </div>
        </div>

        {/* Note */}
        <div className="flex items-start gap-2 px-2 text-gray-400 text-[10px] leading-relaxed">
            <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" />
            <p>
                温馨提示：您提交的个人信息（手机号、身份信息）将严格加密存储，仅供基金会帮扶审核使用。提交后请耐心等待，我们会在3-5个工作日内完成初步评估。
            </p>
        </div>

      </div>

      {/* Submit Button */}
      <div className="bg-white p-4 sticky bottom-0 border-t border-gray-100 max-w-md mx-auto w-full z-40">
        <button 
          onClick={handleSubmit}
          disabled={!description.trim()}
          className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${description.trim() ? 'bg-[#d32f2f] text-white shadow-red-100 active:scale-95' : 'bg-gray-200 text-gray-400 shadow-none cursor-not-allowed'}`}
        >
          提交需求反馈
        </button>
      </div>
    </div>
  );
};

export default MyNeedsFeedbackPage;