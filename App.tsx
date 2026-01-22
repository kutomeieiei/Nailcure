import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AnalyzerView from './components/AnalyzerView';
import InfoView from './components/InfoView';
import { ViewState, Language } from './types';
import { translations, resolveDriveUrl } from './utils/translations';
import { Facebook, Twitter, Linkedin, Instagram, Link2, Check} from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [language, setLanguage] = useState<Language>('th');
  const [copied, setCopied] = useState(false);

  // TODO: Paste your Google Drive link for the logo here
  const LOGO_DRIVE_LINK = "https://drive.google.com/file/d/1tdrhgQQeKKq6mMF4E6SV0Qv1z4mv_2qI/view?usp=drive_link"; 
  
  // Use resolveDriveUrl to handle drive links properly, fallback to placeholder if empty
  const logoSrc = LOGO_DRIVE_LINK 
    ? resolveDriveUrl(LOGO_DRIVE_LINK) 
    : "https://placehold.co/100x100/2563eb/ffffff?text=N";

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'th' ? 'en' : 'th');
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "มาดูสุขภาพเล็บของคุณได้ที่ NailMentor กันเถอะ";
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank', 'width=600,height=400');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`, '_blank', 'width=600,height=400');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank', 'width=600,height=400');
        break;
      case 'instagram':
        // Instagram doesn't support direct web share URLs. 
        // Try native share (mobile) or fallback to copy.
        if (navigator.share) {
            navigator.share({
                title: 'NailMentor',
                text: text,
                url: url,
            }).catch((err) => console.log('Error sharing:', err));
        } else {
            handleCopyLink();
            alert('Link copied! Open Instagram to share.');
        }
        break;
      case 'copy':
        handleCopyLink();
        break;
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  const SocialButton = ({ icon, onClick, label }: { icon: React.ReactNode, onClick: () => void, label: string }) => (
    <button 
      onClick={onClick}
      title={label}
      className="p-3 rounded-full bg-white text-gray-500 shadow-sm border border-gray-100 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-1 transition-all duration-200"
    >
      {icon}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#E5E5E5] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setCurrentView(ViewState.HOME)}
          >
            <img 
              src={logoSrc} 
              alt="NailMentor Logo" 
              className="w-10 h-10 object-contain rounded-lg"
            />
            <span className="font-bold text-xl tracking-tight text-gray-900">NailMentor</span>
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
      <main className="flex-grow">
        {/* The key prop triggers a re-render and animation when the view changes */}
        <div key={currentView} className="animate-fade-in">
          {renderView()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          
          <div className="flex items-center gap-4">
            <SocialButton 
              label="Share on Facebook" 
              icon={<Facebook size={20} />} 
              onClick={() => handleShare('facebook')} 
            />
            <SocialButton 
              label="Share on Twitter" 
              icon={<Twitter size={20} />} 
              onClick={() => handleShare('twitter')} 
            />
             <SocialButton 
              label="Share on LinkedIn" 
              icon={<Linkedin size={20} />} 
              onClick={() => handleShare('linkedin')} 
            />
            <SocialButton 
              label="Copy Link" 
              icon={copied ? <Check size={20} className="text-green-600" /> : <Link2 size={20} />} 
              onClick={() => handleShare('copy')} 
            />
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">{translations[language].common.footer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;