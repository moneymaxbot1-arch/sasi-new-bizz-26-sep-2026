import React from 'react';
import { Flame, Clock, ArrowRight } from 'lucide-react';
import { useCountdownTimer } from '../utils/countdownUtils';

interface UrgencyHeaderProps {
  onClaimClick: () => void;
}

export const UrgencyHeader: React.FC<UrgencyHeaderProps> = ({ onClaimClick }) => {
  const { hours, minutes, seconds, stockRemaining } = useCountdownTimer();
  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white px-4 py-2.5 text-xs sm:text-sm font-medium sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2 py-0.5 bg-black/25 rounded font-semibold text-amber-200">
            <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>97.7% OFF FLASH SALE</span>
          </span>
          <span className="hidden md:inline text-rose-100">
            6-in-1 Business Automation Suite: Mailchimp, Hostinger, Fomo, WATi, UptimeRobot, Bitly
          </span>
          <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/30 border border-amber-300/40 text-amber-200 font-bold text-xs">
            🔥 {stockRemaining} Licenses Left!
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-1.5 text-white">
            <Clock className="w-3.5 h-3.5 text-amber-200" />
            <span className="text-xs text-rose-100 hidden sm:inline">Price rises in:</span>
            <span className="font-mono font-bold tracking-wider tabular-nums bg-black/30 px-2 py-0.5 rounded text-white text-xs sm:text-sm">
              {format(hours)}:{format(minutes)}:{format(seconds)}
            </span>
          </div>

          <button
            onClick={onClaimClick}
            className="flex items-center gap-1 px-3 py-1 bg-white text-rose-700 hover:bg-rose-50 font-bold rounded text-xs transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Lock In $15/mo</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
