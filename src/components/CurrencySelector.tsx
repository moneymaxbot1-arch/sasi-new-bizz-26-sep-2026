import React, { useState, useEffect, useRef } from 'react';
import { 
  DollarSign, 
  ChevronDown, 
  Check, 
  TrendingUp, 
  Search, 
  X,
  Coins
} from 'lucide-react';
import { 
  SUPPORTED_CURRENCIES, 
  CurrencyConfig, 
  getActiveCurrency, 
  setAppCurrency 
} from '../utils/currencyUtils';

interface CurrencySelectorProps {
  compact?: boolean;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({ compact = false }) => {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyConfig>(getActiveCurrency);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCurrencyChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ currency: CurrencyConfig }>;
      if (customEvent.detail?.currency) {
        setCurrentCurrency(customEvent.detail.currency);
      } else {
        setCurrentCurrency(getActiveCurrency());
      }
    };

    window.addEventListener('bizz2u_currency_changed', handleCurrencyChange);
    window.addEventListener('bizz2u_language_changed', handleCurrencyChange);

    return () => {
      window.removeEventListener('bizz2u_currency_changed', handleCurrencyChange);
      window.removeEventListener('bizz2u_language_changed', handleCurrencyChange);
    };
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelectCurrency = (code: string) => {
    setAppCurrency(code);
    const updated = getActiveCurrency();
    setCurrentCurrency(updated);
    setIsOpen(false);
  };

  const filteredCurrencies = SUPPORTED_CURRENCIES.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
          isOpen
            ? 'bg-emerald-950/90 border-emerald-500/80 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)] ring-1 ring-emerald-400/50'
            : currentCurrency.code === 'MYR'
            ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 hover:border-emerald-400'
            : 'bg-slate-900/90 border-slate-700/80 text-slate-200 hover:text-white hover:border-slate-600'
        }`}
        title={`Change Currency (Current: ${currentCurrency.name} - ${currentCurrency.code})`}
      >
        <span className="text-sm select-none">{currentCurrency.flag}</span>
        <span className="font-mono text-[11px] font-black uppercase text-white">
          {currentCurrency.code}
        </span>
        <span className="text-[10px] font-mono text-emerald-400 font-bold hidden sm:inline">
          ({currentCurrency.symbol.trim()})
        </span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-[#0C121E] border border-slate-700/90 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <Coins className="w-4 h-4 text-emerald-400" />
              <span>Select Display Currency</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Live Bank Rates
            </span>
          </div>

          {/* Rate Notice */}
          <div className="my-2 p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/25 text-[11px] text-emerald-300 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
            <span>Actual Market Rate: <strong>$15 USD = RM 61 MYR</strong></span>
          </div>

          {/* Search */}
          <div className="relative mb-2">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search currency (e.g. MYR, RM, USD, INR)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Currencies List */}
          <div className="max-h-56 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
            {filteredCurrencies.map((c) => {
              const isSelected = currentCurrency.code === c.code;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => handleSelectCurrency(c.code)}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500/20 border border-emerald-500/50 text-white shadow-xs'
                      : 'bg-slate-900/40 border border-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-base shrink-0">{c.flag}</span>
                    <div className="truncate">
                      <div className="text-xs font-bold flex items-center gap-1.5">
                        <span className="text-white font-mono">{c.code}</span>
                        <span className="text-[11px] text-slate-400 font-normal truncate">({c.name})</span>
                      </div>
                      <div className="text-[10px] text-emerald-400 font-mono">
                        {c.exchangeNote}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-1.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick preset links at bottom */}
          <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span className="text-[10px]">Popular:</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleSelectCurrency('MYR')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-emerald-950 hover:text-emerald-300 text-[10px] font-mono text-emerald-400 cursor-pointer font-bold"
              >
                🇲🇾 RM61
              </button>
              <button
                type="button"
                onClick={() => handleSelectCurrency('USD')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-mono text-slate-300 cursor-pointer"
              >
                🇺🇸 $15
              </button>
              <button
                type="button"
                onClick={() => handleSelectCurrency('INR')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-mono text-slate-300 cursor-pointer"
              >
                🇮🇳 ₹1,305
              </button>
              <button
                type="button"
                onClick={() => handleSelectCurrency('SGD')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-mono text-slate-300 cursor-pointer"
              >
                🇸🇬 S$20
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
