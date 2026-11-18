import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Mail, Menu, X, ChevronRight, LogIn } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-16 py-1.5 flex items-center justify-between gap-1 sm:gap-3">
        {/* Left: Hamburger (Mobile/Tablet) + Wordmark & Client Login */}
        <div className="flex items-center gap-1 sm:gap-3 shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 sm:p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Zone 1: Logo beside Bizz2u + Client Login directly below */}
          <div className="flex flex-col items-start gap-1 shrink-0">
            <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 group" aria-label="Bizz2u Home">
              <Bizz2uLogo className="w-7 h-7 sm:w-9 sm:h-9 shrink-0 transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(245,200,66,0.4)]" />
              <div className="text-base sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1 sm:gap-1.5">
                <span>Bizz<span className="text-amber-400 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-black">2u</span></span>
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              </div>
            </a>

            <a
              href="https://dashboard.bizz2u.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-all duration-200 shadow-[0_0_16px_rgba(255,255,255,0.2)] hover:shadow-[0_0_22px_rgba(255,255,255,0.35)] cursor-pointer whitespace-nowrap active:scale-98"
            >
              <LogIn className="w-3 h-3 sm:w-4 sm:h-4 text-slate-950" />
              <span>Client Login</span>
            </a>
          </div>
        </div>

        {/* Zone 2: Desktop clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-[11px] xl:text-xs font-bold uppercase tracking-wider text-slate-200 shrink-0">
          <a href="#bundle-tools" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            6 SOFTWARE SUITE
          </a>
          <a href="#cost-comparison" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            COMPETITOR VS BIZZ2U
          </a>
          <a href="#pricing" className="hover:text-emerald-300 transition-colors text-slate-200 whitespace-nowrap">
            PRICING
          </a>
          <a href="#testimonials" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            TESTIMONIAL
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors whitespace-nowrap">
            FAQ
          </a>
          <a
            href="mailto:Bizzusupport@gmail.com"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300 whitespace-nowrap"
            title="Official Contact Email: Bizzusupport@gmail.com"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>CONTACT</span>
          </a>
        </nav>

        {/* Right Utility & Primary CTA Group */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Language Selector */}
          <LanguageTranslator />

          {/* Zone 3: Primary CTA action */}
          <button
            onClick={onClaimClick}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] cursor-pointer whitespace-nowrap active:scale-98"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-slate-950 shrink-0" />
            <span>From {formatLocalizedPrice(15, currentCurrency)}/mo</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline shrink-0" />
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B101D] border-b border-slate-800 shadow-2xl px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
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

          <a
            href="https://dashboard.bizz2u.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-100 transition-all duration-200 shadow-[0_0_16px_rgba(255,255,255,0.2)]"
          >
            <LogIn className="w-4 h-4 text-slate-950" />
            <span>Client Login</span>
          </a>

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
