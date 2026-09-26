import React, { useState } from 'react';
import { DollarSign, Clock, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { TOTAL_MONTHLY_RETAIL } from '../data/bundleData';

interface RoiCalculatorProps {
  onClaimClick: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onClaimClick }) => {
  const [currentMonthlySpend, setCurrentMonthlySpend] = useState<number>(650);
  const [teamSize, setTeamSize] = useState<number>(2);

  // Math
  const monthlyBundlePrice = 15;
  const annualBundleSpend = monthlyBundlePrice * 12; // $180/year
  const annualOldSpend = currentMonthlySpend * 12;
  const netAnnualSavings = Math.max(0, annualOldSpend - annualBundleSpend);
  const hoursSavedPerMonth = teamSize * 14; // ~14 hours of manual follow-ups & link tracking saved per person
  const roiPercentage = Math.round((netAnnualSavings / annualBundleSpend) * 100);

  return (
    <section id="roi-calculator" className="py-20 bg-[#090D16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            Interactive ROI & Savings Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Calculate Exactly How Much You Save With Our $15/Mo Subscription
          </h2>
          <p className="text-base text-slate-300">
            Slide the controls to calculate your immediate annual cash savings and hours recovered by switching to our unified $15/month automation package.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Left Column: Sliders */}
            <div className="space-y-6">
              
              {/* Slider 1: Monthly Software Budget */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-300">Your Current Monthly Tool Spend:</span>
                  <span className="font-mono text-emerald-400 font-bold text-base">
                    ${currentMonthlySpend}/month
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="25"
                  value={currentMonthlySpend}
                  onChange={(e) => setCurrentMonthlySpend(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>$100/mo</span>
                  <span className="text-amber-400 font-bold">Standard 6-Tool Retail: ${TOTAL_MONTHLY_RETAIL}/mo</span>
                  <span>$1,500/mo</span>
                </div>
              </div>

              {/* Slider 2: Team Members or Automated Tasks */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-300">Team Size / Operators:</span>
                  <span className="font-mono text-teal-400 font-bold text-base">
                    {teamSize} {teamSize === 1 ? 'person' : 'people'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>Solo Founder</span>
                  <span>Small Team (3-5)</span>
                  <span>Growth Agency (10)</span>
                </div>
              </div>

              <div className="p-4 bg-slate-850 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>The $15/Month Math Explained:</span>
                </div>
                <p>
                  Instead of spending $650/month across 6 separate tool bills, you consolidate them into a single $15/month starting subscription package, putting over $7,600/year back into your business.
                </p>
              </div>

            </div>

            {/* Right Column: Calculated Results */}
            <div className="bg-gradient-to-br from-emerald-950/40 via-slate-900 to-teal-950/30 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div>
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Net Annual Cash Saved
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white font-mono tabular-nums mt-1">
                  ${netAnnualSavings.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Every year by not paying recurring subscriptions
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>Time Recovered</span>
                  </div>
                  <div className="text-xl font-bold text-teal-300 font-mono tabular-nums mt-0.5">
                    {hoursSavedPerMonth} hrs/mo
                  </div>
                  <div className="text-[10px] text-slate-400">Automated tasks</div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Calculated ROI</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-400 font-mono tabular-nums mt-0.5">
                    +{roiPercentage.toLocaleString()}%
                  </div>
                  <div className="text-[10px] text-slate-400">On your $15 buy</div>
                </div>
              </div>

              <button
                onClick={onClaimClick}
                className="w-full py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl text-sm transition-all duration-200 shadow-lg cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Lock In Your $15 Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
