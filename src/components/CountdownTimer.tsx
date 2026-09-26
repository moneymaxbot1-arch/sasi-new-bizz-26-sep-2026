import React, { useState, useEffect } from 'react';
import { Clock, Flame, Zap, ShieldCheck, ArrowRight, AlertTriangle } from 'lucide-react';

interface CountdownTimerProps {
  onClaimClick: () => void;
}

const TOTAL_SECONDS_1_HOUR = 1 * 60 * 60; // 3,600 seconds (1 hour)
const STORAGE_KEY = 'bizz2u_1h_countdown_start';

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ onClaimClick }) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(() => {
    try {
      const storedStart = localStorage.getItem(STORAGE_KEY);
      const now = Math.floor(Date.now() / 1000);
      if (storedStart) {
        const elapsed = now - parseInt(storedStart, 10);
        if (elapsed >= 0 && elapsed < TOTAL_SECONDS_1_HOUR) {
          return TOTAL_SECONDS_1_HOUR - elapsed;
        }
      }
      // Initialize or reset if expired
      localStorage.setItem(STORAGE_KEY, now.toString());
      return TOTAL_SECONDS_1_HOUR;
    } catch {
      return TOTAL_SECONDS_1_HOUR;
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          // Reset loop or keep at 0
          return TOTAL_SECONDS_1_HOUR;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');
  const percentElapsed = ((TOTAL_SECONDS_1_HOUR - secondsRemaining) / TOTAL_SECONDS_1_HOUR) * 100;

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-r from-red-950/80 via-slate-900 to-amber-950/70 border-y sm:border border-red-500/40 sm:rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
      {/* Subtle pulse glow background */}
      <div className="absolute top-0 right-1/4 w-72 h-32 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Urgency Messaging */}
        <div className="space-y-2 text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-rose-300 text-xs font-bold tracking-wide">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>SPECIAL 1-HOUR INTRODUCTORY WINDOW</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Lock in the 6-Tool Suite Starting at <span className="text-emerald-400 font-mono underline decoration-emerald-500/50 underline-offset-4">$15/Month</span> Before Price Reverts
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Separate subscriptions total <span className="line-through text-rose-400 font-semibold font-mono">$650/month ($7,800/year)</span>. When this 1-hour timer reaches zero, starter subscriptions increase to $49/mo. Cancel anytime.
          </p>
        </div>

        {/* Center / Right: Big Real-Time Countdown Clocks & CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto justify-center lg:justify-end">
          
          {/* Time digits grid */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Hours Block */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-950/90 border border-slate-700/80 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-inner min-w-[62px] sm:min-w-[74px] text-center">
                <span className="font-mono text-2xl sm:text-3xl font-black text-white tracking-tight tabular-nums">
                  {pad(hours)}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                Hours
              </span>
            </div>

            <span className="text-xl sm:text-2xl font-bold text-rose-400 font-mono mb-4">:</span>

            {/* Minutes Block */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-950/90 border border-slate-700/80 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-inner min-w-[62px] sm:min-w-[74px] text-center">
                <span className="font-mono text-2xl sm:text-3xl font-black text-amber-300 tracking-tight tabular-nums">
                  {pad(minutes)}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                Minutes
              </span>
            </div>

            <span className="text-xl sm:text-2xl font-bold text-rose-400 font-mono mb-4">:</span>

            {/* Seconds Block */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-950/90 border border-rose-500/50 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-inner min-w-[62px] sm:min-w-[74px] text-center bg-rose-950/20">
                <span className="font-mono text-2xl sm:text-3xl font-black text-rose-400 tracking-tight tabular-nums animate-pulse">
                  {pad(seconds)}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-rose-300 uppercase tracking-widest mt-1">
                Seconds
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col items-center sm:items-start gap-1.5 w-full sm:w-auto">
            <button
              onClick={onClaimClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black rounded-xl text-sm transition-all duration-200 shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap active:scale-98"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Lock In $15 Rate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-slate-300 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Satisfaction · 2-Min Replacement Guarantee</span>
            </span>
          </div>

        </div>

      </div>

      {/* Progress track */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Batch status: <strong className="text-white">86 of 100 promotional licenses claimed</strong></span>
        </div>
        <div className="w-full sm:w-64 h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500 rounded-full transition-all duration-1000"
            style={{ width: `${Math.min(96, Math.max(75, percentElapsed))}%` }}
          />
        </div>
      </div>
    </div>
  );
};
