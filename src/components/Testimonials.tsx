import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/bundleData';
import { Star, CheckCircle2, TrendingUp, Sparkles, Filter, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

interface TestimonialsProps {
  onClaimClick?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onClaimClick }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filtered = TESTIMONIALS.filter((t) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'sales') {
      return (
        t.metricLabel.toLowerCase().includes('sales') ||
        t.metricLabel.toLowerCase().includes('conversion') ||
        t.metricLabel.toLowerCase().includes('checkout') ||
        t.metricLabel.toLowerCase().includes('recovered')
      );
    }
    if (filterCategory === 'productivity') {
      return (
        t.metricLabel.toLowerCase().includes('saved') ||
        t.metricLabel.toLowerCase().includes('time') ||
        t.metricLabel.toLowerCase().includes('setup') ||
        t.metricLabel.toLowerCase().includes('hours')
      );
    }
    if (filterCategory === 'tools') {
      return t.toolsUsed.some(
        tool => tool === 'Wati' || tool === 'Mailchimp' || tool === 'Fomo'
      );
    }
    return true;
  });

  const displayedTestimonials = filtered.slice(0, visibleCount);

  return (
    <section id="testimonials" className="py-24 bg-[#090D16] border-t border-slate-800/80 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Customer Results & ROI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Real Founders. Real Businesses. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Measurable Sales & Productivity Surge
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Discover how founders, agencies, and e-commerce leaders replaced disconnected $650/mo subscriptions with our automated 6-software growth suite.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            onClick={() => { setFilterCategory('all'); setVisibleCount(6); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Stories ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => { setFilterCategory('sales'); setVisibleCount(6); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filterCategory === 'sales'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            💰 Driving Sales & Conversions
          </button>
          <button
            onClick={() => { setFilterCategory('productivity'); setVisibleCount(6); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filterCategory === 'productivity'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            ⚡ Business Automation & Hours Saved
          </button>
        </div>

        {/* Testimonials Grid (Multi-column responsive card layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-200 hover:-translate-y-1 relative group"
            >
              <div>
                {/* Metric Spotlight Banner */}
                <div className="p-3 bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/25 rounded-xl mb-5 flex items-center justify-between">
                  <div className="text-xs text-slate-400 font-medium">
                    {t.metricLabel}
                  </div>
                  <div className="text-base font-extrabold text-emerald-400 font-mono tracking-tight">
                    {t.metricValue}
                  </div>
                </div>

                {/* Rating & Tools Tags */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1">
                    {t.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Headline Quote */}
                <h3 className="text-base font-bold text-white mb-2.5 leading-snug group-hover:text-emerald-300 transition-colors">
                  "{t.headline}"
                </h3>

                {/* Body Content */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {t.content}
                </p>
              </div>

              {/* Verified Author Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-emerald-400 font-mono shrink-0 shadow-inner">
                    {t.avatarText}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white flex items-center gap-1.5 truncate">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <div className="text-xs text-slate-400 truncate">
                      <span>{t.role}</span> · <strong className="text-slate-300 font-semibold">{t.company}</strong>
                    </div>
                  </div>
                </div>

                {t.planTier && (
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold shrink-0 whitespace-nowrap ${
                      t.planTier.includes('$150') || t.planTier.toLowerCase().includes('agency')
                        ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                        : t.planTier.includes('$35') || t.planTier.toLowerCase().includes('growth')
                        ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {t.planTier}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Show More / Show All Button */}
        {visibleCount < filtered.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount(filtered.length)}
              className="px-6 py-3 bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
            >
              <span>View All {filtered.length} Customer Reviews</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        )}

        {/* Aggregate Credibility & Performance Stats Bar */}
        <div className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-white font-mono">$1.4M+</div>
            <div className="text-xs text-slate-400 mt-1">Direct SaaS Fees Saved</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 font-mono">97.4%</div>
            <div className="text-xs text-slate-400 mt-1">Average WhatsApp Open Rate</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-white font-mono">1,840+</div>
            <div className="text-xs text-slate-400 mt-1">Active Automated Businesses</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-mono">4.9/5</div>
            <div className="text-xs text-slate-400 mt-1">Average Customer Rating</div>
          </div>
        </div>

        {/* Floating Call to Action */}
        {onClaimClick && (
          <div className="mt-10 text-center">
            <button
              onClick={onClaimClick}
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-extrabold rounded-xl text-sm transition-all duration-200 shadow-xl cursor-pointer active:scale-98"
            >
              Join 1,840+ Growing Businesses · Claim Bundle for $15
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
