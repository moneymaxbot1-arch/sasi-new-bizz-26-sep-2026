import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock, Flame } from 'lucide-react';
import { useCountdownTimer } from '../utils/countdownUtils';
import { getActiveCurrency, formatLocalizedPrice, CurrencyConfig } from '../utils/currencyUtils';

interface MobileStickyBarProps {
  onClaimClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onClaimClick }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { minutes, seconds, stockRemaining } = useCountdownTimer();
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

  // Track scroll position to show when the user scrolls the page
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls down past 80px
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090D16]/95 backdrop-blur-md border-t border-slate-800 px-3.5 sm:px-4 pt-2 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-2xl transition-all duration-300 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Left Side: High-Intensity Urgency & FOMO Engine (Big Timer + Dynamic Stock Left) */}
        <div className="flex flex-col justify-center min-w-0 pr-1">
          {/* Urgency Kicker */}
          <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-rose-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span>PRICE RISES IN</span>
          </div>

          {/* Big Size Real-Time Timer & Live Stock Scarcity Pill */}
          <div className="flex items-center gap-1.5 mt-0.5">
            {/* Big Countdown Timer Badge */}
            <div className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-lg bg-gradient-to-r from-rose-950 via-slate-900 to-rose-950 border border-rose-500/70 text-rose-200 font-mono font-black text-sm sm:text-base shadow-[0_0_15px_rgba(244,63,94,0.35)]">
              <Clock className="w-3.5 h-3.5 text-rose-400 animate-pulse shrink-0" />
              <span className="tabular-nums tracking-wider">{pad(minutes)}:{pad(seconds)}</span>
            </div>

            {/* Big FOMO Stock Scarcity Pill - Automatically drops as timer counts down */}
            <div 
              key={stockRemaining}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-lg border font-black text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                stockRemaining <= 5
                  ? 'bg-rose-500/25 border-rose-500/70 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.4)] animate-pulse'
                  : 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.25)]'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 shrink-0 ${stockRemaining <= 5 ? 'text-rose-400 animate-bounce' : 'text-amber-400 animate-bounce'}`} />
              <span>{stockRemaining} Left!</span>
            </div>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <button
          onClick={onClaimClick}
          className="flex-1 max-w-[170px] sm:max-w-[190px] py-2.5 px-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-[0_0_20px_rgba(52,211,153,0.4)] flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-98 shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0 fill-slate-950" />
          <span>Subscribe · {formatLocalizedPrice(15, currentCurrency)}/mo</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </div>
  );
};
