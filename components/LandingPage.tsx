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
      <div className="text-center mb-12 space-y-6 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          {t.title}<span className="text-blue-600">{t.titleHighlight}</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed whitespace-pre-line">
          {t.subtitle}
        </p>
      </div>

      {/* Info Box Section 1 */}
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-8 mb-6 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up delay-100">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-white p-2.5 rounded-xl shadow-md text-blue-600">
               <HeartPulse size={24} />
             </div>
             <h3 className="text-xl font-semibold text-gray-900">
               {t.infoTitle}
             </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {t.infoDesc}
          </p>
        </div>
        <div className="w-full md:w-80 flex-shrink-0">
           <img 
             src={t.infoImage} 
             alt="Healthy Nails" 
             className="w-full h-48 md:h-full min-h-[200px] object-cover rounded-2xl shadow-md border border-gray-100"
           />
        </div>
      </div>

      {/* Info Box Section 2 */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row-reverse items-center gap-8 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up delay-200">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 shadow-sm">
               <ShieldAlert size={24} />
             </div>
             <h3 className="text-xl font-semibold text-gray-900">
               {t.infoTitle2}
             </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {t.infoDesc2}
          </p>
        </div>
        <div className="w-full md:w-80 flex-shrink-0">
           <img 
             src={t.infoImage2} 
             alt="Nail Examination" 
             className="w-full h-48 md:h-full min-h-[200px] object-cover rounded-2xl shadow-md"
           />
        </div>
      </div>

      {/* Info Box Section 3 */}
      <div className="max-w-5xl mx-auto bg-indigo-50 rounded-3xl p-8 border border-indigo-100 flex flex-col md:flex-row items-center gap-8 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up delay-300">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-white p-2.5 rounded-xl shadow-md text-indigo-600">
               <Sparkles size={24} />
             </div>
             <h3 className="text-xl font-semibold text-gray-900">
               {t.infoTitle3}
             </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {t.infoDesc3}
          </p>
        </div>
        <div className="w-full md:w-80 flex-shrink-0">
           <img 
             src={t.infoImage3} 
             alt="AI Technology" 
             className="w-full h-48 md:h-full min-h-[200px] object-cover rounded-2xl shadow-md border border-indigo-100"
           />
        </div>
      </div>

      {/* More Info Button - Right Aligned Under Box */}
      <div className="max-w-5xl mx-auto flex justify-end mb-16 animate-slide-up delay-400">
        <Button 
          variant="outline" 
          onClick={() => onNavigate(ViewState.INFO)}
          className="rounded-full px-6 py-2.5 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm text-sm"
        >
          <BookOpen size={18} />
          {t.moreInfo}
        </Button>
      </div>

      {/* Single Feature Card: Analyzer */}
      <div className="max-w-2xl mx-auto animate-slide-up delay-500">
        <div 
          onClick={() => onNavigate(ViewState.ANALYZER)}
          className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center text-center"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
          
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 text-blue-600 shadow-sm">
              <Activity size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.analyzerTitle}</h3>
            <p className="text-gray-500 mb-6 text-base max-w-lg">
              {t.analyzerDesc}
            </p>
            <div className="flex items-center text-blue-600 font-semibold text-base group-hover:gap-2 transition-all mt-auto bg-blue-50 px-8 py-3 rounded-full group-hover:bg-blue-600 group-hover:text-white">
              {t.start} <ArrowRight size={18} className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;