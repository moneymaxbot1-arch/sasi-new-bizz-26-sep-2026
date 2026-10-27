import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Mail, Menu, X, ChevronRight } from 'lucide-react';
import { LanguageTranslator } from './LanguageTranslator';
import { Bizz2uLogo } from './Bizz2uLogo';
import { getActiveCurrency, formatLocalizedPrice, CurrencyConfig } from '../utils/currencyUtils';

interface NavbarProps {
  onClaimClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onClaimClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyConfig>(getActiveCurrency);

  useEffect(() => {
    const updateCurrency = () => {
      setCurrentCurrency(getActiveCurrency());
    };
    window.addEventListener('bizz2u_currency_changed', updateCurrency as EventListener);
    window.addEventListener('bizz2u_language_changed', updateCurrency as EventListener);
    const interval = setInterval(updateCurrency, 800);
    return () => {
      window.removeEventListener('bizz2u_currency_changed', updateCurrency as EventListener);
      window.removeEventListener('bizz2u_language_changed', updateCurrency as EventListener);
      clearInterval(interval);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[#090D16]/95 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Left: Hamburger (Mobile) + Wordmark */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Zone 1: Logo beside Bizz2u */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group" aria-label="Bizz2u Home">
            <Bizz2uLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(245,200,66,0.4)]" />
            <div className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              <span>Bizz<span className="text-amber-400 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-black">2u</span></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            </div>
          </a>
        </div>

        {/* Zone 2: Desktop clean text navigation links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-bold uppercase tracking-wider text-slate-200 shrink-0">
          <a href="#bundle-tools" className="hover:text-emerald-400 transition-colors">
            6 SOFTWARE SUITE
          </a>
          <a href="#cost-comparison" className="hover:text-emerald-400 transition-colors">
            COMPETITOR VS BIZZ2U
          </a>
          <a href="#pricing" className="hover:text-emerald-300 transition-colors text-slate-200">
            PRICING
          </a>
          <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
            TESTIMONIAL
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">
            FAQ
          </a>
          <a
            href="mailto:Bizzusupport@gmail.com"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300 hover:text-emerald-400"
            title="Official Contact Email: Bizzusupport@gmail.com"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>CONTACT</span>
          </a>
        </nav>

        {/* Language Selector */}
        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageTranslator />
        </div>

        {/* Zone 3: Primary CTA action */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onClaimClick}
            className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] cursor-pointer whitespace-nowrap active:scale-98"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-slate-950" />
            <span>From {formatLocalizedPrice(15, currentCurrency)}/mo</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B101D] border-b border-slate-800 shadow-2xl px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => handleNavClick('#bundle-tools')}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-between"
            >
              <span>6 SOFTWARE SUITE</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('#cost-comparison')}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-between"
            >
              <span>COMPETITOR VS BIZZ2U</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('#pricing')}
              className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-left text-emerald-300 hover:text-white flex items-center justify-between"
            >
              <span>PRICING</span>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            </button>
            <button
              onClick={() => handleNavClick('#testimonials')}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-between"
            >
              <span>TESTIMONIAL</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-between"
            >
              <span>FAQ</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800/80">
            <a
              href="mailto:Bizzusupport@gmail.com"
              className="text-emerald-400 hover:underline flex items-center gap-1.5 font-mono py-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Bizzusupport@gmail.com</span>
            </a>
            <span className="text-[11px] text-slate-400">24/7 Priority Support</span>
          </div>
        </div>
      )}
    </header>
  );
};
