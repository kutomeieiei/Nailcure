import React from 'react';
import { ViewState, Language } from '../types';
import { Activity, ArrowRight, ShieldAlert, HeartPulse, BookOpen, Sparkles } from 'lucide-react';
import { translations } from '../utils/translations';
import Button from './Button';

interface LandingPageProps {
  onNavigate: (view: ViewState) => void;
  lang: Language;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, lang }) => {
  const t = translations[lang].landing;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      {/* Hero Section */}
      <div className="text-center mb-24 space-y-6 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          {t.title}<span className="text-blue-600">{t.titleHighlight}</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed whitespace-pre-line">
          {t.subtitle}
        </p>
      </div>

      {/* Info Section 1 */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-24 animate-slide-up delay-100">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
             <div className="bg-white p-3 rounded-2xl shadow-sm text-blue-600">
               <HeartPulse size={28} />
             </div>
             <h3 className="text-2xl font-bold text-gray-900">
               {t.infoTitle}
             </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg pl-1">
            {t.infoDesc}
          </p>
        </div>
        <div className="w-full md:w-[400px] flex-shrink-0">
           <img 
             src={t.infoImage} 
             alt="Healthy Nails" 
             className="w-full h-64 md:h-72 object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
           />
        </div>
      </div>

      {/* Info Section 2 */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mb-24 animate-slide-up delay-200">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
             <div className="bg-white p-3 rounded-2xl text-blue-600 shadow-sm">
               <ShieldAlert size={28} />
             </div>
             <h3 className="text-2xl font-bold text-gray-900">
               {t.infoTitle2}
             </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg pl-1">
            {t.infoDesc2}
          </p>
        </div>
        <div className="w-full md:w-[400px] flex-shrink-0">
           <img 
             src={t.infoImage2} 
             alt="Nail Examination" 
             className="w-full h-64 md:h-72 object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
           />
        </div>
      </div>

      {/* Info Section 3 */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-12 animate-slide-up delay-300">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
             <div className="bg-white p-3 rounded-2xl shadow-sm text-indigo-600">
               <Sparkles size={28} />
             </div>
             <h3 className="text-2xl font-bold text-gray-900">
               {t.infoTitle3}
             </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg pl-1">
            {t.infoDesc3}
          </p>
        </div>
        <div className="w-full md:w-[400px] flex-shrink-0">
           <img 
             src={t.infoImage3} 
             alt="AI Technology" 
             className="w-full h-64 md:h-72 object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
           />
        </div>
      </div>

      {/* More Info Button */}
      <div className="max-w-5xl mx-auto flex justify-center md:justify-end mb-24 animate-slide-up delay-400">
        <Button 
          variant="outline" 
          onClick={() => onNavigate(ViewState.INFO)}
          className="rounded-full px-8 py-3 border-blue-200 text-blue-700 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm text-sm font-medium"
        >
          <BookOpen size={18} />
          {t.moreInfo}
        </Button>
      </div>

      {/* Single Feature Card: Analyzer */}
      <div className="max-w-3xl mx-auto animate-slide-up delay-500 pb-12">
        <div 
          onClick={() => onNavigate(ViewState.ANALYZER)}
          className="group relative bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center text-center"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-50 rounded-tr-full -ml-12 -mb-12 transition-transform group-hover:scale-110 opacity-80"></div>
          
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
              <Activity size={40} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">{t.analyzerTitle}</h3>
            <p className="text-gray-500 mb-8 text-lg max-w-lg leading-relaxed">
              {t.analyzerDesc}
            </p>
            <div className="flex items-center text-white font-semibold text-lg gap-2 bg-gray-900 px-10 py-4 rounded-full group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
              {t.start} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;