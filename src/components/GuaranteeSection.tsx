import React from 'react';
import { ShieldCheck, CheckCircle2, Zap, ArrowRight, Award, Clock, RefreshCw, AlertCircle } from 'lucide-react';
import { TrustBadgesTrio } from './TrustBadgesTrio';

interface GuaranteeSectionProps {
  onClaimClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onClaimClick }) => {
  return (
    <section id="satisfaction-guarantee" className="py-16 bg-[#0B101D] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Trust & Security Pillars: Cancel Anytime, 100% Private Data, Instant Setup */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Guaranteed Satisfaction & Freedom
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Complete Buyer Confidence & Zero Risk
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every subscription comes with our triple buyer security assurance and immediate 1-click self-service control.
            </p>
          </div>
          <TrustBadgesTrio variant="cards" onClaimClick={onClaimClick} />
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border-2 border-emerald-500/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-3 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mb-3 shadow-[0_0_35px_rgba(52,211,153,0.25)]">
                <Award className="w-12 h-12" />
              </div>
              <span className="text-sm font-mono font-black text-emerald-400 uppercase tracking-wider">
                30-DAY GUARANTEE
              </span>
              <span className="text-xs text-slate-300 font-semibold mt-1">1-Day Full Refund Policy</span>
            </div>

            <div className="md:col-span-9 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>30-DAY MONEY-BACK GUARANTEE & AUTHENTICITY ASSURANCE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                30-Day Money-Back Guarantee & No Questions Asked Policy.
              </h3>

              {/* Explicit Policy Terms Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/40 text-xs sm:text-sm text-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guarantee Policy & Validity Terms:</span>
                </div>
                
                <p className="text-slate-300 leading-relaxed">
                  Our <strong className="text-white">30-day money-back guarantee & no questions asked policy</strong> is valid if the software we provided is <strong className="text-emerald-300">not working or not legit</strong>. If a customer finds that any software provided is not working, or the license code is fake or piracy, our team will <strong className="text-emerald-300 underline decoration-emerald-400/60 font-semibold">refund 100% of your money within 1 day (24 hours)</strong> — strictly no questions asked.
                </p>

                <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Instant replacement alternative: <strong className="text-white">2-minute replacement</strong> also available.</span>
                  </div>
                  <div className="text-slate-300">
                    Direct Email Support:{' '}
                    <a
                      href="mailto:Bizzusupport@gmail.com"
                      className="text-emerald-400 hover:text-emerald-300 font-bold underline font-mono"
                    >
                      Bizzusupport@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Key bullet checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Full refund within 1 day if not working or not legit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero piracy & official direct vendor license verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No questions asked refund process</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Immediate 2-minute license replacement upon request</span>
                </div>
              </div>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onClaimClick}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2 shadow-lg active:scale-98"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Lock In 6-in-1 Suite Risk-Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>30-Day Money-Back Guarantee · Official Licenses</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
