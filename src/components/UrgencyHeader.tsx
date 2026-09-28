import React, { useState, useEffect } from 'react';
import { Flame, Clock, ArrowRight } from 'lucide-react';

interface UrgencyHeaderProps {
  onClaimClick: () => void;
}

const TOTAL_SECONDS_15_MIN = 15 * 60; // 900 seconds (15 minutes)
const STORAGE_KEY = 'bizz2u_15m_countdown_start';

export const UrgencyHeader: React.FC<UrgencyHeaderProps> = ({ onClaimClick }) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(() => {
    try {
      const storedStart = localStorage.getItem(STORAGE_KEY);
      const now = Math.floor(Date.now() / 1000);
      if (storedStart) {
        const elapsed = now - parseInt(storedStart, 10);
        if (elapsed >= 0 && elapsed < TOTAL_SECONDS_15_MIN) {
          return TOTAL_SECONDS_15_MIN - elapsed;
        }
      }
      localStorage.setItem(STORAGE_KEY, now.toString());
      return TOTAL_SECONDS_15_MIN;
    } catch {
      return TOTAL_SECONDS_15_MIN;
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prev => (prev <= 1 ? TOTAL_SECONDS_15_MIN : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

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
