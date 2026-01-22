import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AnalyzerView from './components/AnalyzerView';
import InfoView from './components/InfoView';
import { ViewState, Language } from './types';
import { translations } from './utils/translations';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [language, setLanguage] = useState<Language>('th');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'th' ? 'en' : 'th');
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.ANALYZER:
        return <AnalyzerView onBack={() => setCurrentView(ViewState.HOME)} lang={language} />;
      case ViewState.INFO:
        return <InfoView onBack={() => setCurrentView(ViewState.HOME)} lang={language} />;
      case ViewState.HOME:
      default:
        return <LandingPage onNavigate={setCurrentView} lang={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setCurrentView(ViewState.HOME)}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
            <span className="font-bold text-xl tracking-tight">NailCare <span className="text-blue-600">AI</span></span>
          </div>
          
          <div className="flex items-center gap-4">
             {currentView !== ViewState.HOME && (
               <button 
                 onClick={() => setCurrentView(ViewState.HOME)}
                 className="text-sm font-medium text-gray-500 hover:text-gray-900"
               >
                 {translations[language].common.home}
               </button>
             )}
             
             <button
               onClick={toggleLanguage}
               className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-200"
             >
               <img 
                 src={language === 'th' ? "https://flagcdn.com/w40/th.png" : "https://flagcdn.com/w40/gb.png"} 
                 alt={language === 'th' ? "Thai Flag" : "UK Flag"}
                 className="w-5 h-5 rounded-full object-cover shadow-sm"
               />
               {language.toUpperCase()}
             </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* The key prop triggers a re-render and animation when the view changes */}
        <div key={currentView} className="animate-fade-in">
          {renderView()}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>{translations[language].common.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;