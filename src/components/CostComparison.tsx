import React, { useState } from 'react';
import { SOFTWARE_TOOLS, TOTAL_MONTHLY_RETAIL, TOTAL_ANNUAL_RETAIL } from '../data/bundleData';
import { Check, X, ArrowRight, DollarSign, Calculator, Sparkles, TrendingDown } from 'lucide-react';

interface CostComparisonProps {
  onClaimClick: () => void;
}

export const CostComparison: React.FC<CostComparisonProps> = ({ onClaimClick }) => {
  const [timeframe, setTimeframe] = useState<'monthly' | 'annual' | 'threeYear'>('annual');

  const getMultiplier = () => {
    if (timeframe === 'monthly') return 1;
    if (timeframe === 'annual') return 12;
    return 36;
  };

  const multiplier = getMultiplier();
  const individualTotal = TOTAL_MONTHLY_RETAIL * multiplier; // $650 * months
  const bundleCost = 15 * multiplier; // $15/month subscription
  const totalSaved = individualTotal - bundleCost;

  return (
    <section id="cost-comparison" className="py-20 bg-[#0B101D] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            The Truth About Individual Subscriptions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Stop Paying <span className="text-rose-400 font-mono">${TOTAL_MONTHLY_RETAIL}/Month</span> for Separate Software
          </h2>
          <p className="text-base text-slate-300">
            Here is the exact retail cost breakdown if you purchased each of these 6 business productivity & sales automation tools separately:
          </p>
        </div>

        {/* Timeframe Toggle Filter (Functional segmented button) */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setTimeframe('monthly')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                timeframe === 'monthly'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1 Month ($650/mo vs $15/mo)
            </button>
            <button
              onClick={() => setTimeframe('annual')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                timeframe === 'annual'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1 Year ($7,800/yr vs $180/yr)
            </button>
            <button
              onClick={() => setTimeframe('threeYear')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                timeframe === 'threeYear'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3 Year Projection ($23,400 vs $540)
            </button>
          </div>
        </div>

        {/* Two-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: The High-Cost Individual Tools (Matching image breakdown) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-rose-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">The Old Way: Individual Subscriptions</h3>
                  <p className="text-xs text-slate-400">6 separate vendors, 6 separate monthly bills, endless overhead</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-rose-400 font-mono">
                {timeframe === 'monthly' ? 'Billed Monthly' : timeframe === 'annual' ? '12 Months' : '36 Months'}
              </span>
            </div>

            {/* List of 6 Software from the User's Image */}
            <div className="divide-y divide-slate-800/80 my-4 space-y-1">
              {SOFTWARE_TOOLS.map((tool) => {
                const cost = tool.monthlyRetail * multiplier;
                return (
                  <div key={tool.id} className="pt-3 pb-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs border border-slate-700 text-white">
                        {tool.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{tool.name}</span>
                          <span className="text-xs font-normal text-slate-400 hidden sm:inline">
                            ({tool.category})
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">
                          Retail: <span className="font-mono text-slate-300 font-semibold">${tool.monthlyRetail}/mo</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-extrabold text-rose-400 font-mono tabular-nums">
                        ${cost.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {timeframe === 'monthly' ? 'per month' : 'total cost'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtotal of the Old Way */}
            <div className="pt-4 border-t-2 border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Retail Drain</div>
                <div className="text-sm text-slate-300">What most businesses quietly lose</div>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono tabular-nums">
                  ${individualTotal.toLocaleString()}
                </div>
                <div className="text-xs text-rose-300/80 font-mono">
                  {timeframe === 'monthly' ? 'every 30 days' : `${multiplier} months of subscription bleed`}
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: The StackScale Bundle (Starting at $15) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0e1726] border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute -top-3.5 right-6 px-3 py-1 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-extrabold text-xs rounded-full shadow-lg">
              97.7% DISCOUNT
            </div>

            <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The StackScale Bundle</h3>
                <p className="text-xs text-emerald-400">All 6 tools unified · Lifetime starting tier</p>
              </div>
            </div>

            {/* What you get */}
            <div className="space-y-3.5 my-6 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Mailchimp</strong> email marketing automations & drip flows</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Hostinger</strong> fast cloud SSD web hosting & SSL access</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Fomo</strong> live buyer social proof notification engine</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Wati</strong> high-converting WhatsApp broadcasts & CRM bot</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>UptimeRobot</strong> 24/7 downtime alert monitoring</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Bitly</strong> custom short links, QR codes & link-in-bio</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-5 bg-emerald-950/30 border border-emerald-500/40 rounded-xl mb-6">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Starter Subscription Rate
                </span>
                <span className="text-xs text-slate-400 line-through font-mono">
                  ${individualTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tabular-nums">
                  ${timeframe === 'monthly' ? '15' : bundleCost.toLocaleString()}
                </span>
                <span className="text-xs text-emerald-300 font-medium">
                  {timeframe === 'monthly' ? '/month subscription (cancel anytime)' : `total across ${multiplier} months at $15/mo`}
                </span>
              </div>
              <div className="mt-2 text-xs text-slate-400 border-t border-emerald-900/60 pt-2 flex items-center justify-between">
                <span>Net Cash Saved:</span>
                <span className="font-bold text-white font-mono tabular-nums text-sm">
                  +${totalSaved.toLocaleString()}
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onClaimClick}
              className="w-full py-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-bold rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(52,211,153,0.3)] hover:shadow-[0_0_35px_rgba(52,211,153,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Start 6-Tool Subscription ($15/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-3 text-center text-xs text-slate-400">
              ⚡ Instant setup link generated immediately after payment
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
