import React from 'react';
import { ArrowLeft, CheckCircle, Heart, ShieldCheck, Stethoscope } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../utils/translations';

interface InfoViewProps {
  onBack: () => void;
  lang: Language;
}

const InfoView: React.FC<InfoViewProps> = ({ onBack, lang }) => {
  const t = translations[lang].infoPage;
  const commonT = translations[lang].common;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors group animate-fade-in"
      >
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
        {commonT.back}
      </button>

      {/* Header */}
      <div className="text-center mb-12 animate-slide-up">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
        <p className="text-xl text-gray-500 font-light">{t.subtitle}</p>
      </div>

      {/* Healthy Nails Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 mb-8 border border-blue-100 shadow-sm animate-slide-up delay-100">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
            <Heart size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{t.healthy.title}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{t.healthy.desc}</p>
          </div>
        </div>
      </div>

      {/* Common Diseases Grid */}
      <div className="mb-12 animate-slide-up delay-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Stethoscope className="text-purple-500" />
          {t.diseases.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.diseases.items.map((item, index) => (
            <div key={index} className="bg-purple-50/30 border border-purple-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
               <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Care Tips Section */}
      <div className="bg-green-50 rounded-3xl p-8 border border-green-100 animate-slide-up delay-300">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="text-green-600" size={28} />
          <h2 className="text-2xl font-semibold text-gray-900">{t.tips.title}</h2>
        </div>
        <ul className="space-y-4">
          {t.tips.list.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoView;