import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  onClaimClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onClaimClick }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090D16]/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-emerald-400 font-mono">$15<span className="text-[11px] font-normal text-slate-300 font-sans">/mo</span></span>
            <span className="text-[11px] text-slate-400 line-through font-mono">$650/mo</span>
          </div>
          <span className="text-[10px] text-amber-300 font-medium">
            🔥 14 licenses left
          </span>
        </div>

        <button
          onClick={onClaimClick}
          className="flex-1 max-w-[200px] py-2 px-3 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-bold text-xs rounded-lg shadow-md flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-98"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Subscribe · $15/mo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
