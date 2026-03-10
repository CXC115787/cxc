import React from 'react';
import { ChevronLeft, Target, CreditCard, Award, ScrollText, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface DonationProcessPageProps {
  onBack: () => void;
  onGoDonate: () => void;
}

const DonationProcessPage: React.FC<DonationProcessPageProps> = ({ onBack, onGoDonate }) => {
  const steps = [
    {
      icon: <Target className="text-red-500" size={24} />,
      title: "选择项目",
      desc: "浏览公益项目，了解受助人群的需求 with 项目目标，选择您想要支持的事业。",
      bgColor: "bg-red-50"
    },
    {
      icon: <ScrollText className="text-orange-500" size={24} />,
      title: "填写信息",
      desc: "输入捐款金额。您可以选择单笔捐赠，或开启月捐计划，让爱心细水长流。",
      bgColor: "bg-orange-50"
    },
    {
      icon: <CreditCard className="text-blue-500" size={24} />,
      title: "安全支付",
      desc: "通过微信、支付宝等安全渠道完成支付。资金将直接进入基金会专项账户。",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Award className="text-yellow-600" size={24} />,
      title: "反馈与证书",
      desc: "实时获取电子捐赠证书。项目执行后，您将收到感谢信及执行进展反馈。",
      bgColor: "bg-yellow-50"
    }
  ];

  const faqs = [
    { q: "我的捐款会用到哪里？", a: "每一笔资金都根据项目专款专用，且在官网定期公示账目。" },
    { q: "可以开具捐赠票据吗？", a: "支持。您可以在“个人中心-我的捐款记录”中，选择对应订单点击“申请开票”，填写信息后我们将为您开具电子捐赠票据。" },
    { q: "月捐可以随时取消吗？", a: "可以。月捐完全自愿，您可以在任何时候在月捐管理中暂停或取消。" }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-24 flex flex-col">
      {/* Header */}
      <div className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-800">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-800">捐赠指引</h1>
          <div className="w-8"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#d32f2f] to-[#e53935] p-8 text-white relative overflow-hidden mb-6">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">简单三步，传递温暖</h2>
            <p className="text-white/80 text-sm leading-relaxed">
              中国职工发展基金会确保您的每一份善意都能精准触达需要帮助的职工及其家庭。
            </p>
          </div>
          <Heart className="absolute -bottom-4 -right-4 text-white/10" size={120} fill="currentColor" />
        </div>

        {/* The Process Timeline */}
        <div className="px-6 mb-10">
          <h3 className="text-gray-800 font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#d32f2f] rounded-full"></span>
            捐赠流程
          </h3>
          
          <div className="space-y-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gray-100"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 relative z-10">
                <div className={`w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center border-4 border-white shadow-sm flex-shrink-0`}>
                  {step.icon}
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-gray-800 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Trust Us Section */}
        <div className="px-4 mb-10">
           <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50">
             <h3 className="text-center font-bold text-gray-800 mb-6">我们的承诺</h3>
             <div className="grid grid-cols-2 gap-6">
               <div className="text-center">
                 <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-2">
                   <ShieldCheck className="text-green-600" size={24} />
                 </div>
                 <h5 className="text-sm font-bold text-gray-800">透明公示</h5>
                 <p className="text-[10px] text-gray-400 mt-1">账目清晰，实时可查</p>
               </div>
               <div className="text-center">
                 <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-2">
                   <CheckCircle2 className="text-[#d32f2f]" size={24} />
                 </div>
                 <h5 className="text-sm font-bold text-gray-800">精准帮扶</h5>
                 <p className="text-[10px] text-gray-400 mt-1">一对一匹配，直接到人</p>
               </div>
             </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="px-6 mb-8">
           <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#d32f2f] rounded-full"></span>
            常见疑问
          </h3>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-4">
                <div className="text-sm font-bold text-gray-800 mb-2">Q: {f.q}</div>
                <div className="text-xs text-gray-500 leading-relaxed">A: {f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="bg-white p-4 sticky bottom-0 border-t border-gray-100 max-w-md mx-auto w-full z-40">
        <button 
          onClick={onGoDonate}
          className="w-full bg-[#d32f2f] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-red-100 active:scale-95 transition-all"
        >
          立即献一份爱心
        </button>
      </div>
    </div>
  );
};

export default DonationProcessPage;