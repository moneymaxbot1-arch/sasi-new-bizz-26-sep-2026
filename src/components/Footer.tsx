import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onClaimClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onClaimClick }) => {
  return (
    <footer className="bg-[#06080F] border-t border-slate-800/80 py-14 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          <div className="md:col-span-5 space-y-3">
            <div className="text-lg font-bold text-white flex items-center gap-1.5">
              <span>StackScale</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              The premier business productivity & sales automation software suite. Giving entrepreneurs enterprise-tier tools starting at just $15/month.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Vendor</span>
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit SSL Encryption</span>
              </span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Included Software
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>Mailchimp (Email Marketing)</li>
              <li>Hostinger (Web Hosting & SSL)</li>
              <li>Fomo (Social Proof Platform)</li>
              <li>Wati (WhatsApp Automation)</li>
              <li>UptimeRobot (Website Monitoring)</li>
              <li>Bitly (URL Shortener & QR)</li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Limited Time Special
            </div>
            <p className="text-slate-400 leading-relaxed">
              Regular individual retail cost is $650/month across separate vendors. Start with all 6 tools from as low as $15/month with our promotional package.
            </p>
            <button
              onClick={onClaimClick}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
            >
              Start $15/mo Subscription
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} StackScale Inc. All rights reserved. Trademarks are property of their respective owners.
          </div>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#faq" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#satisfaction-guarantee" className="hover:text-slate-300 transition-colors">Satisfaction Guarantee</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
