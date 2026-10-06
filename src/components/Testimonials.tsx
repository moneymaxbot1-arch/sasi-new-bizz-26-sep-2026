import React, { useState, useMemo, useEffect } from 'react';
import { TESTIMONIALS } from '../data/bundleData';
import { getActiveCurrency, formatTierName, formatLocalizedPrice, CurrencyConfig } from '../utils/currencyUtils';
import {
  Star,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Search,
  DollarSign,
  Zap,
  MessageSquare,
  Shield,
  X,
  PackageCheck
} from 'lucide-react';

interface TestimonialsProps {
  onClaimClick?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onClaimClick }) => {
  const [selectedOutcome, setSelectedOutcome] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
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

  // Quick outcome filter options (NO country flags!)
  const outcomeFilters = [
    { id: 'all', label: 'All Reviews (45)' },
    { id: 'sales', label: '💰 Boost Sales & Conversions' },
    { id: 'cost', label: '⚡ Save Money & Cut SaaS Costs' },
    { id: 'crm', label: '💬 Instant WhatsApp CRM & Replies' },
    { id: 'uptime', label: '🛡️ Zero Downtime & 30s Alerts' }
  ];

  const filteredTestimonials = useMemo(() => {
    return TESTIMONIALS.filter((t) => {
      // Outcome filter
      if (selectedOutcome !== 'all') {
        const text = `${t.headline} ${t.content} ${t.problemSolved || ''} ${t.metricLabel} ${t.metricValue} ${t.businessCategory || ''}`.toLowerCase();
        if (selectedOutcome === 'sales') {
          const matches = text.includes('sale') || text.includes('revenue') || text.includes('conversion') || text.includes('cart') || text.includes('recovered') || text.includes('orders') || text.includes('close');
          if (!matches) return false;
        } else if (selectedOutcome === 'cost') {
          const matches = text.includes('save') || text.includes('overhead') || text.includes('bill') || text.includes('subscription') || text.includes('margin') || text.includes('cut') || text.includes('waste');
          if (!matches) return false;
        } else if (selectedOutcome === 'crm') {
          const matches = text.includes('crm') || text.includes('whatsapp') || text.includes('reply') || text.includes('response') || text.includes('booking') || text.includes('wati') || text.includes('chat') || text.includes('reminder');
          if (!matches) return false;
        } else if (selectedOutcome === 'uptime') {
          const matches = text.includes('uptime') || text.includes('downtime') || text.includes('speed') || text.includes('server') || text.includes('ping') || text.includes('incident') || text.includes('crash');
          if (!matches) return false;
        }
      }

      // Text search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const searchable = `${t.name} ${t.role} ${t.city || ''} ${t.country || ''} ${t.headline} ${t.content} ${t.problemSolved || ''} ${t.metricLabel} ${t.metricValue} ${t.planTier || ''} ${t.toolsUsed.join(' ')}`.toLowerCase();
        if (!searchable.includes(query)) return false;
      }

      return true;
    });
  }, [selectedOutcome, searchQuery]);

  const displayedTestimonials = filteredTestimonials.slice(0, visibleCount);

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  const resetFilters = () => {
    setSelectedOutcome('all');
    setSearchQuery('');
    setVisibleCount(9);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#090D16] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[350px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Customer Stories & ROI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Real Founders. Real Customers. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Measurable Sales Surge & Slashed Costs
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            See how online businesses replaced disconnected $650/month subscriptions with automated WhatsApp CRM, instant 8-second replies, and rock-solid uptime starting at only {formatLocalizedPrice(15, currentCurrency)}/mo.
          </p>
        </div>

        {/* Filter & Live Search Row (NO country flag filter) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-8 bg-slate-900/70 p-3 rounded-2xl border border-slate-800/80">
          {/* Outcome Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            {outcomeFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setSelectedOutcome(filter.id);
                  setVisibleCount(9);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedOutcome === filter.id
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative min-w-[240px] md:w-72 shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(9);
              }}
              placeholder="Search by city, tool, or metric..."
              className="w-full bg-slate-950 text-xs text-white pl-8 pr-7 py-2 rounded-xl border border-slate-800 focus:border-emerald-500/60 focus:outline-none transition-colors placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if filtered */}
        {(selectedOutcome !== 'all' || searchQuery !== '') && (
          <div className="flex items-center justify-between mb-6 text-xs text-slate-400 px-1">
            <div className="flex items-center gap-2">
              <span>Showing <strong>{filteredTestimonials.length}</strong> reviews</span>
              {searchQuery && (
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                  "{searchQuery}"
                </span>
              )}
            </div>
            <button
              onClick={resetFilters}
              className="text-emerald-400 hover:text-emerald-300 underline cursor-pointer text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Testimonials Grid */}
        {filteredTestimonials.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 p-8">
            <h3 className="text-lg font-bold text-white mb-1">No customer reviews match your search</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-4">
              Try adjusting your search keywords to discover real business ROI stories.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              View All 45 Reviews
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedTestimonials.map((t) => {
              const isImageBroken = failedImages[t.id] || !t.avatarUrl;

              return (
                <div
                  key={t.id}
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-200 hover:-translate-y-1 relative group"
                >
                  <div>
                    {/* Top Header: What Package They Purchased + Star Rating */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
                      {/* Package Purchased Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-tight shrink-0 ${
                          (t.planTier || '').includes('$150') || (t.planTier || '').toLowerCase().includes('agency')
                            ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                            : (t.planTier || '').includes('$35') || (t.planTier || '').toLowerCase().includes('growth')
                            ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                            : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                        }`}
                      >
                        <PackageCheck className="w-3.5 h-3.5 shrink-0" />
                        <span>Purchased: {formatTierName(t.planTier || 'Starter Pack ($15/mo)', currentCurrency)}</span>
                      </div>

                      {/* 5 Stars Rating */}
                      <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Metric Spotlight Banner */}
                    <div className="p-3 bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/25 rounded-xl mb-3 flex items-center justify-between">
                      <div className="text-xs text-slate-400 font-medium">
                        {t.metricLabel}
                      </div>
                      <div className="text-base font-extrabold text-emerald-400 font-mono tracking-tight">
                        {t.metricValue}
                      </div>
                    </div>

                    {/* Problem Solved Snippet */}
                    {t.problemSolved && (
                      <div className="mb-3.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-emerald-500/20 text-xs text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">
                          <strong className="text-emerald-300 font-semibold">Solved:</strong> {t.problemSolved}
                        </span>
                      </div>
                    )}

                    {/* Headline Quote (Psychological Hook) */}
                    <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                      "{t.headline}"
                    </h3>

                    {/* Short, Punchy Story Body */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                      {t.content}
                    </p>

                    {/* Tools Used Tags */}
                    <div className="flex flex-wrap items-center gap-1 mb-4">
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

                  {/* Verified Author Footer (NO Business Name!) */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Avatar Face with small national flag badge */}
                      <div className="relative shrink-0">
                        {isImageBroken ? (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-teal-800 border-2 border-emerald-500/30 flex items-center justify-center font-bold text-xs text-white font-mono shadow-inner">
                            {t.avatarText}
                          </div>
                        ) : (
                          <img
                            src={t.avatarUrl}
                            alt={t.name}
                            onError={() => handleImageError(t.id)}
                            className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/30 shadow-md"
                            loading="lazy"
                          />
                        )}
                        {/* Small flag icon */}
                        <div
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] select-none shadow-sm"
                          title={t.country}
                        >
                          {t.flagEmoji || '🌐'}
                        </div>
                      </div>

                      {/* Author Details (Only Name, Role, Location - NO business name) */}
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-white flex items-center gap-1.5 truncate">
                          <span>{t.name}</span>
                          <span title="Verified Customer" className="inline-flex">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 truncate">
                          <span>{t.role}</span>
                        </div>
                        <div className="text-xs text-emerald-400/90 font-medium truncate flex items-center gap-1">
                          <span>{t.city ? `${t.city}, ` : ''}{t.country || 'Verified Buyer'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Show More / Show All Pagination */}
        {visibleCount < filteredTestimonials.length && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 9, filteredTestimonials.length))}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-xs sm:text-sm font-bold text-emerald-300 transition-all cursor-pointer shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Load More Reviews ({visibleCount} of {filteredTestimonials.length})</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setVisibleCount(filteredTestimonials.length)}
              className="w-full sm:w-auto px-6 py-3 bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>View All {filteredTestimonials.length} Reviews</span>
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
            <div className="text-xs text-slate-400 mt-1">Average Rating (45+ Reviews)</div>
          </div>
        </div>

        {/* Floating Call to Action */}
        {onClaimClick && (
          <div className="mt-10 text-center">
            <button
              onClick={onClaimClick}
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-extrabold rounded-xl text-sm transition-all duration-200 shadow-xl cursor-pointer active:scale-98"
            >
              Join 1,840+ Growing Businesses · Claim Bundle Starting at {formatLocalizedPrice(15, currentCurrency)}/mo
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
