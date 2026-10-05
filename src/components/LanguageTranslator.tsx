import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Languages, 
  Check, 
  Search, 
  X, 
  ChevronDown, 
  Sparkles 
} from 'lucide-react';
import { 
  LANGUAGES_32, 
  QUICK_LANGUAGES, 
  setAppLanguage, 
  getSavedLanguage, 
  loadGoogleTranslateScript,
  LanguageOption 
} from '../services/translationService';

interface LanguageTranslatorProps {
  compact?: boolean;
}

export const LanguageTranslator: React.FC<LanguageTranslatorProps> = ({ compact = false }) => {
  const [currentLang, setCurrentLang] = useState<string>('en');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = getSavedLanguage();
    setCurrentLang(saved);
    loadGoogleTranslateScript(saved);

    // Close modal on escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle outside click for modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);

  const handleSelectLanguage = (code: string) => {
    setCurrentLang(code);
    setAppLanguage(code);
    setIsModalOpen(false);
  };

  const filteredLanguages = LANGUAGES_32.filter(l => 
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeLangObj = LANGUAGES_32.find(l => l.code === currentLang) || LANGUAGES_32[0];

  return (
    <div className="relative flex items-center">
      {/* Invisible container for Google Translate element */}
      <div id="google_translate_element" className="hidden" />

      {/* Main Bar between Nav Links and CTA Button */}
      <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl shadow-lg backdrop-blur-md">
        
        {/* Mobile View (<640px): Show top quick flags including EN, TA, HI, MS */}
        <div className="flex sm:hidden items-center gap-0.5">
          {QUICK_LANGUAGES.filter(l => ['en', 'ta', 'hi', 'ms'].includes(l.code)).map((lang) => {
            const isActive = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang.code)}
                title={`${lang.name} (${lang.nativeName})`}
                className={`px-1.5 py-1 rounded-lg text-[10px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-0.5 ${
                  isActive
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <span className="text-[11px]">{lang.flag}</span>
                <span className="uppercase font-mono text-[9px]">{lang.code.split('-')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop & Tablet View (>=640px): Show all 6 quick switchers */}
        <div className="hidden sm:flex items-center gap-0.5 sm:gap-1">
          {QUICK_LANGUAGES.map((lang) => {
            const isActive = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang.code)}
                title={`${lang.name} (${lang.nativeName})`}
                className={`px-1.5 sm:px-2 py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                  isActive
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(52,211,153,0.4)] scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <span className="text-[12px]">{lang.flag}</span>
                <span className="hidden xl:inline">{lang.nativeName}</span>
                <span className="xl:hidden uppercase font-mono text-[10px]">{lang.code.split('-')[0]}</span>
              </button>
            );
          })}
        </div>

        <div className="h-4 w-[1px] bg-slate-700/80 mx-0.5 sm:mx-1" />

        {/* Multi-Language Symbol Button to open 32 Languages Modal */}
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className={`flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer border ${
            isModalOpen
              ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.25)]'
              : 'bg-slate-800/80 border-slate-700/60 text-slate-200 hover:text-emerald-300 hover:border-emerald-500/40'
          }`}
          title="Translate website into 32 world languages"
        >
          <div className="relative flex items-center justify-center">
            <Languages className="w-3.5 h-3.5 text-emerald-400" />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span className="font-mono text-[10px] sm:text-[11px]">32 Langs</span>
          <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isModalOpen ? 'rotate-180 text-emerald-400' : ''}`} />
        </button>

      </div>

      {/* 32 Languages Dropdown / Dialog Modal */}
      {isModalOpen && (
        <div 
          ref={modalRef}
          className="fixed inset-x-3 top-24 sm:absolute sm:inset-x-auto sm:top-full sm:right-0 mt-2 sm:w-[480px] max-w-[94vw] max-h-[75vh] overflow-y-auto bg-[#0c121e] border border-slate-700/80 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Translate Website (32 Languages)</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                    Live Real-Time
                  </span>
                </h4>
                <p className="text-[11px] text-slate-400">
                  Select your preferred language to translate the entire website instantly.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative my-3">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by language (e.g. Tamil, Hindi, Chinese, Arabic, French)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Languages Grid (32 Languages) */}
          <div className="max-h-[320px] overflow-y-auto pr-1 space-y-1 custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {filteredLanguages.map((lang: LanguageOption) => {
                const isSelected = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`flex items-center justify-between p-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/20 border border-emerald-500/50 text-white shadow-[0_0_15px_rgba(52,211,153,0.15)]'
                        : 'bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <span className="text-lg shrink-0">{lang.flag}</span>
                      <div className="truncate">
                        <div className="text-xs font-bold flex items-center gap-1.5">
                          <span className="text-white">{lang.name}</span>
                          <span className="text-[11px] text-emerald-400 font-medium">({lang.nativeName})</span>
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {lang.region}
                        </div>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {filteredLanguages.length === 0 && (
              <div className="p-6 text-center text-xs text-slate-400">
                No language found matching "{searchQuery}".
              </div>
            )}
          </div>

          {/* Footer Info */}
          <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1 text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full page live neural translation</span>
            </div>
            <button
              onClick={() => handleSelectLanguage('en')}
              className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Reset to English
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
