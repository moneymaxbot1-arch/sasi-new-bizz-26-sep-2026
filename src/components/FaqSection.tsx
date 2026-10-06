import React, { useState, useMemo } from 'react';
import { FAQS } from '../data/bundleData';
import { ChevronDown, ArrowRight, Mail, Search, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  onClaimClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onClaimClick }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
            Clear, transparent answers on sales automation, worldwide operation, security, AI options, social media CRM, and zero-risk billing.
          </p>
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
            placeholder="Search questions (e.g. AI, security, WATI, payment gateways, sales, countries...)"
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
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
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
