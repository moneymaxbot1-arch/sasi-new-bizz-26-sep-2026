import React, { useState, useMemo } from 'react';
import { FAQS } from '../data/bundleData';
import { ChevronDown, ArrowRight, Mail, Search, Sparkles, Building2, Home, Landmark, ShoppingBag, Briefcase } from 'lucide-react';

interface FaqSectionProps {
  onClaimClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onClaimClick }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const industrySectors = [
    {
      id: 'f-sector-b2b',
      label: 'B2B Companies',
      icon: Building2,
      sublabel: 'Selling Products & Services',
      tag: '⚡ 8s Intake & RFPs',
      animClass: 'animate-sector-float',
      bgCard: 'from-blue-950/80 via-slate-900 to-[#03152d]',
      borderColor: 'border-blue-500/35 hover:border-blue-400',
      activeBorder: 'border-blue-400 ring-2 ring-blue-400/70 shadow-[0_0_30px_rgba(59,130,246,0.35)]',
      iconBoxBg: 'bg-blue-500/20 text-blue-400 border border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.3)]',
      titleColor: 'text-blue-300 group-hover:text-blue-100',
      tagBg: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
      btnActiveBg: 'bg-blue-500 text-slate-950 font-black',
      btnInactiveBg: 'bg-blue-950/70 text-blue-300 border border-blue-500/40 group-hover:bg-blue-500 group-hover:text-slate-950'
    },
    {
      id: 'f-sector-real-estate',
      label: 'Real Estate Agencies',
      icon: Home,
      sublabel: 'Agents & Property Developers',
      tag: '🏡 -80% No-Shows',
      animClass: 'animate-sector-bounce',
      bgCard: 'from-emerald-950/80 via-slate-900 to-[#021f15]',
      borderColor: 'border-emerald-500/35 hover:border-emerald-400',
      activeBorder: 'border-emerald-400 ring-2 ring-emerald-400/70 shadow-[0_0_30px_rgba(16,185,129,0.35)]',
      iconBoxBg: 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
      titleColor: 'text-emerald-300 group-hover:text-emerald-100',
      tagBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      btnActiveBg: 'bg-emerald-400 text-slate-950 font-black',
      btnInactiveBg: 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/40 group-hover:bg-emerald-400 group-hover:text-slate-950'
    },
    {
      id: 'f-sector-financial-services',
      label: 'Financial Services',
      icon: Landmark,
      sublabel: 'Banks, Insurance & Wealth',
      tag: '🏦 Bank-Grade 2FA',
      animClass: 'animate-sector-pulse',
      bgCard: 'from-amber-950/80 via-slate-900 to-[#241703]',
      borderColor: 'border-amber-500/35 hover:border-amber-400',
      activeBorder: 'border-amber-400 ring-2 ring-amber-400/70 shadow-[0_0_30px_rgba(245,158,11,0.35)]',
      iconBoxBg: 'bg-amber-500/20 text-amber-400 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]',
      titleColor: 'text-amber-300 group-hover:text-amber-100',
      tagBg: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      btnActiveBg: 'bg-amber-400 text-slate-950 font-black',
      btnInactiveBg: 'bg-amber-950/70 text-amber-300 border border-amber-500/40 group-hover:bg-amber-400 group-hover:text-slate-950'
    },
    {
      id: 'f-sector-retail-ecommerce',
      label: 'Retail & E-Commerce',
      icon: ShoppingBag,
      sublabel: 'Online & Multi-Channel Stores',
      tag: '🛒 +30% Cart Recovery',
      animClass: 'animate-sector-wiggle',
      bgCard: 'from-rose-950/80 via-slate-900 to-[#280515]',
      borderColor: 'border-rose-500/35 hover:border-rose-400',
      activeBorder: 'border-rose-400 ring-2 ring-rose-400/70 shadow-[0_0_30px_rgba(244,63,94,0.35)]',
      iconBoxBg: 'bg-rose-500/20 text-rose-400 border border-rose-400/40 shadow-[0_0_15px_rgba(244,63,94,0.3)]',
      titleColor: 'text-rose-300 group-hover:text-rose-100',
      tagBg: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      btnActiveBg: 'bg-rose-500 text-white font-black',
      btnInactiveBg: 'bg-rose-950/70 text-rose-300 border border-rose-500/40 group-hover:bg-rose-500 group-hover:text-white'
    },
    {
      id: 'f-sector-professional-services',
      label: 'Professional Services',
      icon: Briefcase,
      sublabel: 'Consulting, Law & Agencies',
      tag: '⚖️ 24/7 Client Triage',
      animClass: 'animate-sector-float',
      bgCard: 'from-purple-950/80 via-slate-900 to-[#1b0930]',
      borderColor: 'border-purple-500/35 hover:border-purple-400',
      activeBorder: 'border-purple-400 ring-2 ring-purple-400/70 shadow-[0_0_30px_rgba(168,85,247,0.35)]',
      iconBoxBg: 'bg-purple-500/20 text-purple-400 border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
      titleColor: 'text-purple-300 group-hover:text-purple-100',
      tagBg: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
      btnActiveBg: 'bg-purple-500 text-white font-black',
      btnInactiveBg: 'bg-purple-950/70 text-purple-300 border border-purple-500/40 group-hover:bg-purple-500 group-hover:text-white'
    },
  ];

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(FAQS.map(f => f.category)));
    return ['All', ...cats];
  }, []);

  // Filter FAQs based on active category and search term
  const filteredFaqs = useMemo(() => {
    return FAQS.filter(faq => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        faq.question.toLowerCase().includes(q) || 
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-[#090D16] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions ({FAQS.length} Answers)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need to Know Before Joining
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Clear, transparent answers on sales automation, industry solutions (B2B, Real Estate, Finance, Retail, Professional Services), worldwide operation, and zero-risk billing.
          </p>
        </div>

        {/* Industry Sector Quick-Select Cards (Distinct Colors, Bigger Typography & Big Animated Symbols) */}
        <div className="mb-8 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4 px-1">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Explore Automated Solutions By Industry Sector</span>
            </span>
            <span className="text-xs text-emerald-400 font-semibold">
              Pre-configured blueprints tailored to your business model
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
            {industrySectors.map((sector) => {
              const Icon = sector.icon;
              const isSelected = activeCategory === 'Industry Sectors' && openId === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => {
                    setActiveCategory('Industry Sectors');
                    setOpenId(sector.id);
                    setSearchQuery('');
                    // Smoothly scroll down to the opened question
                    setTimeout(() => {
                      const el = document.getElementById(sector.id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }, 50);
                  }}
                  className={`group p-4 sm:p-4.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative bg-gradient-to-br ${sector.bgCard} ${
                    isSelected ? sector.activeBorder : `${sector.borderColor} hover:scale-[1.02]`
                  }`}
                >
                  <div>
                    {/* Top Row: Big Animated Symbol & Benefit Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${sector.iconBoxBg}`}>
                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${sector.animClass}`} />
                      </div>
                      <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${sector.tagBg}`}>
                        {sector.tag}
                      </span>
                    </div>

                    {/* Sector Title - Large, Clear & Bold (No Truncation) */}
                    <div className={`text-base sm:text-lg font-black tracking-tight leading-snug mb-1 transition-colors ${sector.titleColor}`}>
                      {sector.label}
                    </div>

                    {/* Subtitle / Description - Bigger & Clear */}
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                      {sector.sublabel}
                    </p>
                  </div>

                  {/* Bottom Action Pill - High Conviction & Instant Feedback */}
                  <div className={`mt-2 py-2 px-3 rounded-lg text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 ${
                    isSelected ? sector.btnActiveBg : sector.btnInactiveBg
                  }`}>
                    {isSelected ? (
                      <span>✓ Active Sector</span>
                    ) : (
                      <>
                        <span>Explore Workflows</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. B2B, real estate, finance, e-commerce, consulting, pricing, security...)"
            className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-white cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-4 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const count = cat === 'All' ? FAQS.length : FAQS.filter(f => f.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  // Open first item in selected category if current open item isn't visible
                  const firstInCat = cat === 'All' ? FAQS[0] : FAQS.find(f => f.category === cat);
                  if (firstInCat) setOpenId(firstInCat.id);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-slate-900/50 border border-slate-800 rounded-xl text-slate-400">
              <p className="text-sm">No questions found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 text-xs text-emerald-400 hover:underline cursor-pointer"
              >
                Reset filters & show all {FAQS.length} questions
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  id={faq.id}
                  key={faq.id}
                  className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-850 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="inline-block text-[10px] font-mono uppercase tracking-wider text-emerald-400/90 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        {faq.category}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white leading-snug">
                        {faq.question}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-200 mt-1 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40 whitespace-pre-line space-y-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Official Contact Helper Box */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have questions or custom needs?</div>
              <div className="text-xs text-slate-300">Contact our official customer support directly:</div>
            </div>
          </div>
          <a
            href="mailto:Bizzusupport@gmail.com"
            className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 text-emerald-300 hover:text-emerald-200 font-mono font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Bizzusupport@gmail.com</span>
          </a>
        </div>

        {/* Still have questions banner */}
        <div className="mt-6 text-center p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Ready to lock in the limited $15 offer?</h4>
            <p className="text-xs text-slate-400">Join 1,840+ entrepreneurs and automate your sales pipeline today.</p>
          </div>
          <button
            onClick={onClaimClick}
            className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Get Started for $15</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
