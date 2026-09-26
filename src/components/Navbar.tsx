import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { LanguageTranslator } from './LanguageTranslator';

interface NavbarProps {
  onClaimClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onClaimClick }) => {
  return (
    <header className="w-full bg-[#090D16]/95 backdrop-blur-md border-b border-slate-800/80 sticky top-[37px] z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 shrink-0">
          <span>StackScale</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden xl:flex items-center gap-4 text-xs font-medium text-slate-300 shrink-0">
          <a href="#why-and-who" className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold">
            Why & Who
          </a>
          <a href="#bundle-tools" className="hover:text-emerald-400 transition-colors">
            Software Suite
          </a>
          <a href="#software-specs" className="hover:text-emerald-400 transition-colors">
            In-Depth Specs
          </a>
          <a href="#cost-comparison" className="hover:text-emerald-400 transition-colors">
            Cost Breakdown
          </a>
          <a href="#roi-calculator" className="hover:text-emerald-400 transition-colors">
            ROI Calculator
          </a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors">
            Pricing Plans
          </a>
          <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
            Reviews
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Language Translator: In between Navigation and CTA Button */}
        <div className="flex items-center">
          <LanguageTranslator />
        </div>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onClaimClick}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] cursor-pointer whitespace-nowrap active:scale-98"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
            <span>From $15/mo</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
};
