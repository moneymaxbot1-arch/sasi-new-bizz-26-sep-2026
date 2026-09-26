import React from 'react';
import { ShieldCheck, CheckCircle2, Zap, ArrowRight, Award, Clock } from 'lucide-react';

interface GuaranteeSectionProps {
  onClaimClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onClaimClick }) => {
  return (
    <section id="satisfaction-guarantee" className="py-16 bg-[#0B101D] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border-2 border-emerald-500/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-3 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mb-3 shadow-[0_0_35px_rgba(52,211,153,0.25)]">
                <Award className="w-12 h-12" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                100% SATISFACTION
              </span>
              <span className="text-xs text-slate-300 font-semibold mt-0.5">Guaranteed by Direct Vendors</span>
            </div>

            <div className="md:col-span-9 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% LEGIT ORIGINAL COMPANY LICENSES · ZERO PIRACY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                100% Satisfaction Guarantee & Immediate 2-Minute Replacement.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                All 6 software licenses provided in this package are <strong className="text-white">100% legitimate and authentic</strong>, sourced directly from the original vendor companies (Mailchimp, Hostinger, Fomo, Wati, UptimeRobot, and Bitly). <strong className="text-emerald-300">Strictly zero piracy, no cracks, and 100% straight from the official companies.</strong>
              </p>

              {/* The 2-minute replacement promise */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-500/30 text-xs sm:text-sm text-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Immediate 2-Minute Replacement Policy:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  If you experience any difficulties operating any of the tools or if a software license is not working as expected, our dedicated priority support will <strong className="text-white">replace it immediately within 2 minutes</strong>. No delays, and <strong className="text-emerald-300">no questions will be asked</strong>.
                </p>
              </div>

              {/* Key bullet checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Legit licenses from original vendors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero piracy & zero unauthorized accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant 2-minute replacement if any issue occurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No questions asked resolution</span>
                </div>
              </div>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onClaimClick}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2 shadow-lg active:scale-98"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Get 100% Authentic Suite for $15</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Official Direct Vendor Provisioning</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
