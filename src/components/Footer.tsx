import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Award, Mail } from 'lucide-react';
import { TermsModal } from './TermsModal';
import { getActiveCurrency, formatLocalizedPrice, CurrencyConfig } from '../utils/currencyUtils';

interface FooterProps {
  onClaimClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onClaimClick }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
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

  return (
    <footer className="bg-[#06080F] border-t border-slate-800/80 pt-14 pb-28 lg:pb-14 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          <div className="md:col-span-5 space-y-3.5">
            <div className="text-lg font-bold text-white flex items-center gap-1.5">
              <span>Bizz2u</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              The premier business productivity & sales automation software suite. Giving entrepreneurs enterprise-tier tools starting at just {formatLocalizedPrice(15, currentCurrency)}/month.
            </p>
            <div className="flex items-center gap-3 pt-1 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Vendor</span>
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit SSL Encryption</span>
              </span>
            </div>

            {/* Founder Note: Dr. Sasi */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-extrabold text-xs">
                  DS
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>Dr. Sasi</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-semibold font-mono">
                      Founder & CEO
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <Award className="w-3 h-3 text-amber-400" />
                    <span>25+ Years Silicon Valley Experience</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                The founder of Bizz2u is <strong className="text-white">Dr. Sasi</strong>, an accomplished entrepreneur and CEO in the software development industry, with <strong className="text-emerald-400 font-semibold">25+ years of experience</strong> deploying strategic software development for the Silicon Valley industry.
              </p>
            </div>

            {/* Official Support & Contact Details */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/20 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Official Customer Contact Email:</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Have questions or need assistance? Reach out directly anytime:
              </p>
              <a
                href="mailto:Bizzusupport@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-mono font-bold text-xs transition-colors"
              >
                <span>Bizzusupport@gmail.com</span>
                <span className="text-[10px] font-sans font-normal text-slate-400">· Click to email</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Initiated Software
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>Mailchimp (SendgoMail)</li>
              <li>Hostinger (Hostverge)</li>
              <li>Fomo (Prooflander)</li>
              <li>WATi (WTbotBuilder)</li>
              <li>UptimeRobot (UpDowntime)</li>
              <li>Bitly (Taliyos)</li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Limited Time Special
            </div>
            <p className="text-slate-400 leading-relaxed">
              Regular individual retail cost is {formatLocalizedPrice(650, currentCurrency)}/month across separate vendors. Start with all 6 tools from as low as {formatLocalizedPrice(15, currentCurrency)}/month with our promotional package.
            </p>
            <button
              onClick={onClaimClick}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
            >
              Start {formatLocalizedPrice(15, currentCurrency)}/mo Subscription
            </button>
            <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Official Support: <a href="mailto:Bizzusupport@gmail.com" className="text-emerald-400 hover:underline font-mono font-semibold">Bizzusupport@gmail.com</a></span>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Bizz2u Inc. Founded by Dr. Sasi. All rights reserved. Trademarks are property of their respective owners.
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="mailto:Bizzusupport@gmail.com" className="text-emerald-400 hover:text-emerald-300 font-semibold font-mono flex items-center gap-1 transition-colors">
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>Contact: Bizzusupport@gmail.com</span>
            </a>
            <span>·</span>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="text-slate-300 hover:text-emerald-400 font-bold underline underline-offset-4 decoration-emerald-500/50 transition-colors cursor-pointer"
            >
              T&C
            </button>
            <span>·</span>
            <a href="#faq" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>·</span>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>·</span>
            <a href="#faq" className="hover:text-slate-300 transition-colors">30-Day Money-Back Guarantee</a>
          </div>
        </div>

      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
};
