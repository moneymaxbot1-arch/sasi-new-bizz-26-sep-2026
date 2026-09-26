import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Star, TrendingUp, Users } from 'lucide-react';
import { TOTAL_MONTHLY_RETAIL, TOTAL_ANNUAL_RETAIL } from '../data/bundleData';

interface HeroProps {
  onClaimClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onClaimClick }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#090D16]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct-response conversion copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed kicker metadata (Zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-emerald-400">
              <span className="uppercase tracking-wider">LIMITED TIME ALL-IN-ONE BUNDLE</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-400">SAVE $635 EVERY SINGLE MONTH</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">STARTING FROM AS LOW AS $15/MONTH</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              Automate Your Entire Business & Drive Repeat Sales with the{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                6-Software Power Bundle
              </span>
            </h1>

            {/* High-converting subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Stop paying <span className="text-rose-400 font-semibold line-through font-mono tabular-nums">${TOTAL_MONTHLY_RETAIL}/month</span> across disconnected software. Get instant access to enterprise-grade Email Marketing, High-Speed Cloud Hosting, Social Proof Urgency, WhatsApp Broadcasting, 24/7 Uptime Monitoring, and Branded Link Tracking — with starter subscription packages starting from as low as <span className="text-emerald-400 font-bold font-mono">only $15/month</span>.
            </p>

            {/* Urgency Stock Banner */}
            <div className="p-3.5 bg-slate-900/90 border border-amber-500/40 rounded-xl flex items-center justify-between gap-4 max-w-xl shadow-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>TIER 1 PRICING EXPIRES WHEN 100 SUBSCRIBERS JOIN</span>
                </div>
                <div className="text-xs text-slate-400">
                  Currently <span className="text-white font-bold font-mono">86 claimed</span> · Only <span className="text-amber-300 font-bold font-mono">14 licenses remaining</span> at $15/mo
                </div>
              </div>
              <div className="w-24 bg-slate-800 h-2.5 rounded-full overflow-hidden shrink-0 border border-slate-700">
                <div className="bg-gradient-to-r from-amber-400 to-rose-500 h-full w-[86%] rounded-full" />
              </div>
            </div>

            {/* CTA Decision Block */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onClaimClick}
                  className="px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(52,211,153,0.35)] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] cursor-pointer flex items-center justify-center gap-3 active:scale-98"
                >
                  <Zap className="w-5 h-5 fill-slate-950" />
                  <span>Start 6-Tool Subscription · $15/mo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="#cost-comparison"
                  className="px-6 py-4 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors text-center whitespace-nowrap"
                >
                  See $650 vs $15 Breakdown
                </a>
              </div>

              {/* Micro Trust Signals */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant Portal Access</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Complete Beginner Video Tutorials</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cancel Anytime · No Contracts</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Satisfaction · 2-Min Replacement Guarantee</span>
                </span>
              </div>
            </div>

            {/* Real Proof Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white font-mono">4.9/5 rating</span> across <span className="font-bold text-white font-mono">1,840+</span> business owners & automated workflows deployed
              </div>
            </div>

          </div>

          {/* Right Column: Visual Software Bundle Card Showcasing the 6 Tools */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-slate-850 to-slate-900 border border-slate-700/90 rounded-2xl p-6 shadow-2xl shadow-emerald-950/20">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Full Growth Stack Included
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    6 Software Licenses in 1 Box
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through font-mono tabular-nums">
                    ${TOTAL_MONTHLY_RETAIL}/mo
                  </div>
                  <div className="text-xl font-extrabold text-emerald-400 font-mono tabular-nums">
                    $15 <span className="text-xs font-normal text-slate-300">/month</span>
                  </div>
                </div>
              </div>

              {/* The 6 Tools Roster (Directly matching the user's uploaded image) */}
              <div className="divide-y divide-slate-800/80 my-3">
                
                {/* 1. Mailchimp */}
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FFE01B]/15 border border-[#FFE01B]/30 flex items-center justify-center font-bold text-[#FFE01B] text-xs">
                      MC
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Mailchimp</div>
                      <div className="text-xs text-slate-400">Email Marketing & Automations</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                      $162/mo value
                    </span>
                  </div>
                </div>

                {/* 2. Hostinger */}
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#673DE6]/20 border border-[#673DE6]/40 flex items-center justify-center font-bold text-indigo-300 text-xs">
                      H
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Hostinger</div>
                      <div className="text-xs text-slate-400">Fast Cloud Web Hosting & SSL</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                      $9/mo value
                    </span>
                  </div>
                </div>

                {/* 3. Fomo */}
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FF6B4A]/20 border border-[#FF6B4A]/40 flex items-center justify-center font-bold text-orange-300 text-xs">
                      FOMO
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Fomo</div>
                      <div className="text-xs text-slate-400">Social Proof Marketing Platform</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                      $50/mo value
                    </span>
                  </div>
                </div>

                {/* 4. Wati */}
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center font-bold text-emerald-300 text-xs">
                      WATI
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Wati</div>
                      <div className="text-xs text-slate-400">WhatsApp Marketing & Broadcasts</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                      $314/mo value
                    </span>
                  </div>
                </div>

                {/* 5. UptimeRobot */}
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#17C964]/20 border border-[#17C964]/40 flex items-center justify-center font-bold text-teal-300 text-xs">
                      UR
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">UptimeRobot</div>
                      <div className="text-xs text-slate-400">Monitor Your Website's Uptime</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                      $80/mo value
                    </span>
                  </div>
                </div>

                {/* 6. Bitly */}
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EE6123]/20 border border-[#EE6123]/40 flex items-center justify-center font-bold text-amber-300 text-xs">
                      bitly
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Bitly</div>
                      <div className="text-xs text-slate-400">URL Shortener, QR Code & Bio</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                      $35/mo value
                    </span>
                  </div>
                </div>

              </div>

              {/* Value Summary Footer */}
              <div className="mt-4 pt-4 border-t border-slate-800 bg-slate-900/60 -mx-6 -mb-6 p-6 rounded-b-2xl">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                  <span>Combined Retail Value:</span>
                  <span className="font-mono line-through font-semibold text-rose-400">
                    ${TOTAL_MONTHLY_RETAIL}/mo (${TOTAL_ANNUAL_RETAIL}/yr)
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold text-white mb-4">
                  <span className="text-emerald-400">Bundle Subscription:</span>
                  <span className="font-mono text-xl text-emerald-400">
                    $15<span className="text-xs font-normal text-slate-300">/mo</span> <span className="text-xs font-normal text-slate-400 font-sans">(Save $635/mo)</span>
                  </span>
                </div>
                <button
                  onClick={onClaimClick}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors text-center text-sm cursor-pointer shadow-md"
                >
                  Start $15/mo Subscription · Cancel Anytime
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
