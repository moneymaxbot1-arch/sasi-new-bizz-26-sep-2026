import React, { useState, useEffect } from 'react';
import { RECENT_BUYERS } from '../data/bundleData';
import { BuyerEvent } from '../types';
import { getActiveCurrency, formatTierName, CurrencyConfig } from '../utils/currencyUtils';
import { X, CheckCircle2, ShoppingBag } from 'lucide-react';

interface SocialProofPopupProps {
  onClaimClick: () => void;
}

export const SocialProofPopup: React.FC<SocialProofPopupProps> = ({ onClaimClick }) => {
  const [currentEvent, setCurrentEvent] = useState<BuyerEvent | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyConfig>(getActiveCurrency);

  useEffect(() => {
    const handleCurrencyChange = () => {
      setCurrentCurrency(getActiveCurrency());
    };
    window.addEventListener('bizz2u_currency_changed', handleCurrencyChange);
    window.addEventListener('bizz2u_language_changed', handleCurrencyChange);
    const interval = setInterval(handleCurrencyChange, 800);
    return () => {
      window.removeEventListener('bizz2u_currency_changed', handleCurrencyChange);
      window.removeEventListener('bizz2u_language_changed', handleCurrencyChange);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (dismissed) return;

    let index = 0;
    // Wait 6 seconds before showing first alert
    const initialTimer = setTimeout(() => {
      setCurrentEvent(RECENT_BUYERS[index]);
      setVisible(true);
    }, 6000);

    const interval = setInterval(() => {
      // Hide current
      setVisible(false);

      setTimeout(() => {
        index = (index + 1) % RECENT_BUYERS.length;
        setCurrentEvent(RECENT_BUYERS[index]);
        setVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible || !currentEvent) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-3 right-3 sm:right-auto sm:left-4 z-40 max-w-full sm:max-w-sm transition-all duration-300">
      <div className="p-3.5 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl flex items-start gap-3 relative">
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-slate-700 text-[10px] cursor-pointer"
        >
          <X className="w-3 h-3" />
        </button>

        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
            currentEvent.tier.includes('$150') || currentEvent.tier.toLowerCase().includes('agency')
              ? 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-400'
              : currentEvent.tier.includes('$35') || currentEvent.tier.toLowerCase().includes('growth')
              ? 'bg-amber-500/20 border border-amber-400/40 text-amber-300'
              : 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
        </div>

        <div className="flex-1 pr-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-white">
            <span>{currentEvent.name}</span>
            <span className="text-[11px] font-normal text-slate-400">from {currentEvent.location}</span>
          </div>
          <div
            className={`text-[11px] font-semibold mt-0.5 flex items-center gap-1.5 ${
              currentEvent.tier.includes('$150') || currentEvent.tier.toLowerCase().includes('agency')
                ? 'text-cyan-300'
                : currentEvent.tier.includes('$35') || currentEvent.tier.toLowerCase().includes('growth')
                ? 'text-amber-300'
                : 'text-emerald-300'
            }`}
          >
            <CheckCircle2 className="w-3 h-3 shrink-0" />
            <span>Claimed {formatTierName(currentEvent.tier, currentCurrency)}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
            <span>{currentEvent.timeAgo}</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={onClaimClick}
              className="text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer font-semibold"
            >
              View 3 Plans &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
