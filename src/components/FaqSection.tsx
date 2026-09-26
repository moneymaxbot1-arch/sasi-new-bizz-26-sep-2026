import React, { useState } from 'react';
import { FAQS } from '../data/bundleData';
import { ChevronDown, HelpCircle, ArrowRight, Mail } from 'lucide-react';

interface FaqSectionProps {
  onClaimClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onClaimClick }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-[#090D16] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need to Know Before Joining
          </h2>
          <p className="text-base text-slate-300">
            Have a question? We've got transparent answers. If you need anything else, our official support team is standing by at{' '}
            <a
              href="mailto:Bizzsoft2u@gmail.com"
              className="text-emerald-400 hover:text-emerald-300 font-bold underline font-mono"
            >
              Bizzsoft2u@gmail.com
            </a>
            .
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-850 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
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
            href="mailto:Bizzsoft2u@gmail.com"
            className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 text-emerald-300 hover:text-emerald-200 font-mono font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Bizzsoft2u@gmail.com</span>
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
