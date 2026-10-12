import React, { useState, useEffect } from 'react';
import { SOFTWARE_TOOLS, TOTAL_MONTHLY_RETAIL, TOTAL_ANNUAL_RETAIL } from '../data/bundleData';
import { getActiveCurrency, formatLocalizedPrice, CurrencyConfig } from '../utils/currencyUtils';
import { Check, X, ArrowRight, Sparkles, TrendingDown, ShieldCheck, Zap, AlertTriangle, Layers, Award } from 'lucide-react';

interface CostComparisonProps {
  onClaimClick: () => void;
  isInsideFaq?: boolean;
}

export const CostComparison: React.FC<CostComparisonProps> = ({ onClaimClick, isInsideFaq = false }) => {
  const [timeframe, setTimeframe] = useState<'monthly' | 'annual' | 'threeYear'>('annual');
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

  const getMultiplier = () => {
    if (timeframe === 'monthly') return 1;
    if (timeframe === 'annual') return 12;
    return 36;
  };

  const multiplier = getMultiplier();
  const competitorMonthlyPrice = 650;
  const competitorAnnualPrice = 7800;
  const bundleMonthlyPrice = 15;
  const bundleAnnualPrice = 180;

  // Standalone competitor alternatives that make up the $650/mo ($7,800/yr) combined retail value
  const competitorTools = [
    {
      id: 'hostinger',
      name: 'Hostinger',
      category: 'Cloud Hosting (SSD Cloud & SSL)',
      monthlyRetail: 9,
      initials: 'HO',
    },
    {
      id: 'wati',
      name: 'WATI',
      category: 'WhatsApp Flow (CRM & Bot)',
      monthlyRetail: 314,
      initials: 'WA',
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      category: 'E-mail Rocket (Automation & SMTP)',
      monthlyRetail: 162,
      initials: 'MC',
    },
    {
      id: 'bitly',
      name: 'Bitly',
      category: 'Smart Links (QR & Bio Links)',
      monthlyRetail: 35,
      initials: 'BI',
    },
    {
      id: 'uptimerobot',
      name: 'UptimeRobot',
      category: 'Site Shield (24/7 Monitoring)',
      monthlyRetail: 80,
      initials: 'UR',
    },
    {
      id: 'fomo',
      name: 'Fomo',
      category: 'Click Engine (Social Proof)',
      monthlyRetail: 50,
      initials: 'FO',
    },
  ];

  // Specific sequence requested: Cloud Hosting, WhatsApp Flow, E-mail Rocket, Smart Link, Site Shield, Click Fomo
  const orderedBundleTools = [
    SOFTWARE_TOOLS.find(t => t.name === 'Cloud Hosting')!,
    SOFTWARE_TOOLS.find(t => t.name === 'WhatsApp Flow')!,
    SOFTWARE_TOOLS.find(t => t.name === 'E-mail Rocket')!,
    SOFTWARE_TOOLS.find(t => t.name === 'Smart Link')!,
    SOFTWARE_TOOLS.find(t => t.name === 'Site Shield')!,
    SOFTWARE_TOOLS.find(t => t.name === 'Click Fomo')!,
  ].filter(Boolean);

  const competitorTotalUsd = competitorMonthlyPrice * multiplier; // $650 * months
  const bundleCostUsd = bundleMonthlyPrice * multiplier; // $15 * months
  const totalSavedUsd = competitorTotalUsd - bundleCostUsd;
  const savingsPercent = Math.round((totalSavedUsd / competitorTotalUsd) * 1000) / 10;

  // Comparison matrix rows
  const comparisonRows = [
    {
      feature: 'Total Monthly Cost',
      competitor: `${formatLocalizedPrice(650, currentCurrency)}/month`,
      bundle: `Just ${formatLocalizedPrice(15, currentCurrency)}/month (Bizz2u)`,
      advantage: '97.7% Lower Cost',
      bundleBetter: true,
    },
    {
      feature: 'Total 1-Year Cost',
      competitor: `${formatLocalizedPrice(7800, currentCurrency)}/year`,
      bundle: `Just ${formatLocalizedPrice(180, currentCurrency)}/year (Bizz2u)`,
      advantage: `Save ${formatLocalizedPrice(7620, currentCurrency)}/yr`,
      bundleBetter: true,
    },
    {
      feature: 'Cloud Hosting (SSD Cloud & Free SSL)',
      competitor: `Hostinger (${formatLocalizedPrice(9, currentCurrency)}/mo)`,
      bundle: 'Included in Bizz2u $15/mo bundle',
      advantage: 'Unlimited bandwidth & CDN',
      bundleBetter: true,
    },
    {
      feature: 'WhatsApp Flow (Omnichannel CRM & Bot)',
      competitor: `WATI (${formatLocalizedPrice(314, currentCurrency)}/mo)`,
      bundle: 'Included in Bizz2u $15/mo bundle',
      advantage: 'No 24-hr broadcast rule limit',
      bundleBetter: true,
    },
    {
      feature: 'E-mail Rocket (Email Automation & SMTP)',
      competitor: `Mailchimp (${formatLocalizedPrice(162, currentCurrency)}/mo)`,
      bundle: 'Included in Bizz2u $15/mo bundle',
      advantage: 'Full commercial license',
      bundleBetter: true,
    },
    {
      feature: 'Smart Links (Dynamic QR & Bio Link Suite)',
      competitor: `Bitly (${formatLocalizedPrice(35, currentCurrency)}/mo)`,
      bundle: 'Included in Bizz2u $15/mo bundle',
      advantage: '120+ bonus marketing tools',
      bundleBetter: true,
    },
    {
      feature: 'Site Shield (24/7 Uptime & API Monitoring)',
      competitor: `UptimeRobot (${formatLocalizedPrice(80, currentCurrency)}/mo)`,
      bundle: 'Included in Bizz2u $15/mo bundle',
      advantage: 'Instant downtime alerts',
      bundleBetter: true,
    },
    {
      feature: 'Click Engine (Social Proof & Live Popups)',
      competitor: `Fomo (${formatLocalizedPrice(50, currentCurrency)}/mo)`,
      bundle: 'Included in Bizz2u $15/mo bundle',
      advantage: 'Unlimited visitor counters',
      bundleBetter: true,
    },
    {
      feature: 'Vendor Billing & Accounts',
      competitor: '6 separate bills, 6 credit card charges, 6 logins',
      bundle: '1 single consolidated invoice & dashboard',
      advantage: 'Zero bookkeeping chaos',
      bundleBetter: true,
    },
    {
      feature: 'Cross-Software Synergy',
      competitor: 'Disconnected silos; costly Zapier sync required',
      bundle: 'Pre-integrated closed-loop automation flow',
      advantage: 'Automated 24/7 lead recovery',
      bundleBetter: true,
    },
    {
      feature: 'Customer Support',
      competitor: '6 different ticket queues with conflicting advice',
      bundle: '24/7 dedicated unified priority support',
      advantage: 'Single point of contact',
      bundleBetter: true,
    },
    {
      feature: 'Contract & Flexibility',
      competitor: 'Often locked into rigid 12-month commitments',
      bundle: 'Cancel or pause anytime with 1 click',
      advantage: '100% risk-free flexibility',
      bundleBetter: true,
    },
  ];

  return (
    <section 
      id="cost-comparison" 
      className={isInsideFaq 
        ? "py-8 lg:py-12 relative overflow-hidden" 
        : "py-20 lg:py-24 bg-[#080C15] border-t border-slate-800/90 relative overflow-hidden"
      }
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Price Match & Value Verification</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 text-balance">
            Competitor Price vs. <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Bizz2u 6 Powerful Software Bundle</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            The competitor price is <span className="text-rose-400 font-bold font-mono">Combined Retail Value: {formatLocalizedPrice(650, currentCurrency)}/month or ({formatLocalizedPrice(7800, currentCurrency)}/yr)</span> across 6 separate tools. 
            With the <span className="text-white font-bold">Bizz2u 6 powerful software bundle</span>, you get all 6 tools for <span className="text-emerald-400 font-bold font-mono">just {formatLocalizedPrice(15, currentCurrency)}/month</span> — saving you <span className="text-white font-bold">{formatLocalizedPrice(635, currentCurrency)}/month</span> ({formatLocalizedPrice(7620, currentCurrency)}/year).
          </p>
        </div>

        {/* Timeframe Toggle Filter */}
        <div className="flex items-center justify-center mb-12 w-full px-2">
          <div className="grid grid-cols-3 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl w-full max-w-xl shadow-lg">
            <button
              type="button"
              onClick={() => setTimeframe('monthly')}
              className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer text-center ${
                timeframe === 'monthly'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>1 Month</span>
            </button>
            <button
              type="button"
              onClick={() => setTimeframe('annual')}
              className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer text-center ${
                timeframe === 'annual'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5">
                <span>1 Year</span>
                <span className={`px-1.5 py-0.5 text-[10px] rounded uppercase font-bold ${
                  timeframe === 'annual' ? 'bg-slate-950/30 text-slate-950' : 'bg-emerald-500/20 text-emerald-300'
                }`}>
                  Best Value
                </span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setTimeframe('threeYear')}
              className={`py-2.5 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer text-center ${
                timeframe === 'threeYear'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>3 Years</span>
            </button>
          </div>
        </div>

        {/* Head-to-Head Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Card 1: Competitor Separate Pricing */}
          <div className="lg:col-span-6 bg-slate-900/80 border-2 border-rose-500/30 hover:border-rose-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all relative">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <X className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Competitor Price</h3>
                    <p className="text-xs text-rose-300 font-medium">6 Individual Standalone Subscriptions</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-bold rounded-full font-mono">
                  Standard Retail
                </span>
              </div>

              {/* Big Retail Callout */}
              <div className="my-6 p-4 rounded-xl bg-rose-950/20 border border-rose-500/20">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-300/80 mb-1">
                  Combined Retail Value:
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl sm:text-4xl font-black text-rose-400 font-mono">
                    {formatLocalizedPrice(competitorTotalUsd, currentCurrency)}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {timeframe === 'monthly' ? '/month ($7,800/yr)' : timeframe === 'annual' ? 'or ($650/month)' : 'across 36 months'}
                  </div>
                </div>
                <div className="mt-2 text-xs text-slate-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Cost rises as contact lists grow with costly per-subscriber fees</span>
                </div>
              </div>

              {/* Itemized Software-by-Software Breakdown */}
              <div className="space-y-3">
                <div className="text-sm font-bold uppercase tracking-wider text-slate-300 pb-1.5 border-b border-slate-800">
                  Individual Software Breakdown:
                </div>

                {competitorTools.map((tool) => {
                  const itemMonthly = tool.monthlyRetail;
                  const itemTotal = itemMonthly * multiplier;
                  return (
                    <div key={tool.id} className="flex items-center justify-between py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-lg bg-slate-850/50 border border-slate-800/80">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800 text-xs font-bold text-slate-200 flex items-center justify-center shrink-0 border border-slate-700">
                          {tool.initials}
                        </div>
                        <div className="truncate">
                          <div className="text-base sm:text-lg font-bold text-white truncate">{tool.name}</div>
                          <div className="text-xs sm:text-sm text-slate-400 truncate">{tool.category}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0 font-mono pl-3">
                        <div className="text-base sm:text-lg font-bold text-rose-400">
                          {formatLocalizedPrice(itemTotal, currentCurrency)}
                        </div>
                        <div className="text-xs text-slate-400">
                          {timeframe === 'monthly' ? '/mo' : `${formatLocalizedPrice(itemMonthly, currentCurrency)}/mo`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Downside Summary */}
            <div className="mt-6 pt-5 border-t border-slate-800 text-sm text-slate-300 space-y-2.5">
              <div className="flex items-center gap-2 text-rose-300/90 font-medium">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>6 separate monthly credit card invoices to track and file</span>
              </div>
              <div className="flex items-center gap-2 text-rose-300/90 font-medium">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>No automatic cross-tool integration or synchronized workflow</span>
              </div>
              <div className="flex items-center gap-2 text-rose-300/90 font-medium">
                <X className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Locked into multiple disconnected software subscriptions</span>
              </div>
            </div>
          </div>

          {/* Card 2: Bizz2u 6 Powerful Software Bundle */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#0F1B2E] via-[#0C1524] to-[#0A101C] border-2 border-emerald-500/70 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            {/* VIP Savings Badge */}
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 text-slate-950 font-black text-xs rounded-full shadow-[0_0_20px_rgba(52,211,153,0.5)] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>97.7% OFF · SAVE {formatLocalizedPrice(635, currentCurrency)}/MO</span>
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-emerald-900/50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">Bizz2u 6 Powerful Software Bundle</h3>
                    <p className="text-sm text-emerald-400 font-medium">All 6 Commercial Tools Unified · Flat Rate</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold rounded-full">
                  All-In-One Suite
                </span>
              </div>

              {/* Big Bundle Price Callout */}
              <div className="my-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
                <div className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-1">
                  Bizz2u Complete 6-Software Bundle Rate:
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight">
                    {timeframe === 'monthly' ? `Just ${formatLocalizedPrice(15, currentCurrency)}` : formatLocalizedPrice(bundleCostUsd, currentCurrency)}
                  </div>
                  <div className="text-sm text-emerald-300 font-mono font-medium">
                    {timeframe === 'monthly' ? '/month subscription' : `total for ${multiplier} months (just ${formatLocalizedPrice(15, currentCurrency)}/mo)`}
                  </div>
                </div>
                <div className="mt-2 text-sm text-emerald-200/90 flex items-center justify-between border-t border-emerald-900/60 pt-2">
                  <span className="font-semibold">Net Cash Kept In Your Pocket:</span>
                  <span className="font-black text-white font-mono text-sm bg-emerald-900/60 px-2 py-0.5 rounded">
                    +{formatLocalizedPrice(totalSavedUsd, currentCurrency)} saved
                  </span>
                </div>
              </div>

              {/* Included Tools in the Bundle */}
              <div className="space-y-3">
                <div className="text-sm font-bold uppercase tracking-wider text-emerald-200 pb-1.5 border-b border-emerald-950">
                  Included In Your Bizz2u $15/Month Bundle:
                </div>

                {orderedBundleTools.map((tool) => (
                  <div key={tool.id} className="flex items-center justify-between py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-lg bg-emerald-950/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/40">
                        <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[3]" />
                      </div>
                      <div className="truncate">
                        <div className="text-base sm:text-lg font-bold text-white truncate flex items-center gap-2">
                          <span>{tool.name}</span>
                          <span className="text-xs sm:text-sm text-emerald-400 font-normal hidden sm:inline">({tool.category})</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0 font-mono pl-3 flex items-center gap-2 sm:gap-3">
                      <span className="text-xs sm:text-sm text-slate-400 line-through hidden sm:inline">
                        {formatLocalizedPrice(tool.monthlyRetail, currentCurrency)}/mo
                      </span>
                      <span className="text-xs sm:text-sm font-black text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-1 rounded">
                        INCLUDED
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA & Benefits */}
            <div className="mt-6 pt-5 border-t border-emerald-900/50">
              <button
                type="button"
                onClick={onClaimClick}
                className="w-full py-4.5 sm:py-5 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 text-base sm:text-lg"
              >
                <span>Get Bizz2u 6 Powerful Software Bundle ({formatLocalizedPrice(15, currentCurrency)}/mo)</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Instant Setup Link</span>
                </span>
                <span>Cancel Anytime</span>
                <span className="font-mono text-emerald-400 font-bold">Just $15/month</span>
              </div>
            </div>
          </div>

        </div>

        {/* Full Side-by-Side Comparison Matrix Table */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4" />
                <span>Direct Feature-by-Feature Matrix</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                How Bizz2u Compares Across Every Dimension
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold font-mono">
              Combined Retail: $650/mo vs Bizz2u: $15/mo
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-850/80 border-b border-slate-800 text-xs sm:text-sm uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-4 sm:px-6 font-bold">Feature / Requirement</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-rose-400">Competitor Individual Software</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-emerald-400">Bizz2u 6 Powerful Software Bundle</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-sky-300 hidden md:table-cell bg-sky-950/30 border-l border-sky-500/30">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.35)] animate-pulse">
                      <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                      <span className="text-sky-200 tracking-wider">Your Direct Benefit</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm sm:text-base">
                {comparisonRows.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`hover:bg-slate-800/40 transition-colors ${idx % 2 === 0 ? 'bg-transparent' : 'bg-slate-900/40'}`}
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold text-white text-sm sm:text-base">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300 font-mono text-sm sm:text-base">
                      <div className="flex items-center gap-2.5">
                        <X className="w-4 h-4 text-rose-400 shrink-0" />
                        <span className="text-slate-200">{row.competitor}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-mono font-bold bg-emerald-950/15 text-sm sm:text-base">
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0 stroke-[2.5]" />
                        <span className="text-white">{row.bundle}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 hidden md:table-cell text-xs sm:text-sm bg-sky-950/20 border-l border-sky-500/20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500/20 via-cyan-500/25 to-blue-500/20 text-sky-100 text-xs sm:text-sm border border-sky-400/50 font-bold animate-benefit-glow">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_#38bdf8]" />
                        {row.advantage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Summary Bar */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300 text-center sm:text-left leading-relaxed">
              <span className="text-white font-bold">Conclusion:</span> Competitor standalone tools require <span className="text-rose-400 font-mono font-bold">$650/month ($7,800/year)</span> plus setup headaches. Our bundle delivers all 6 tools for <span className="text-emerald-400 font-mono font-bold">just $15/month</span> with zero contracts.
            </div>
            <button
              type="button"
              onClick={onClaimClick}
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow-lg shadow-emerald-500/20"
            >
              Lock In $15/Mo Pricing Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
