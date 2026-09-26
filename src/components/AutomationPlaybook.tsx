import React from 'react';
import { ArrowRight, Link2, Server, Flame, Mail, MessageSquare, Activity, Check } from 'lucide-react';

interface AutomationPlaybookProps {
  onClaimClick: () => void;
}

export const AutomationPlaybook: React.FC<AutomationPlaybookProps> = ({ onClaimClick }) => {
  const steps = [
    {
      num: '01',
      tool: 'Bitly',
      role: 'Attribution & Tracking',
      desc: 'Turn long messy campaign URLs into branded short links and track exact click conversions from social media, ads, and influencers.',
      icon: <Link2 className="w-5 h-5 text-amber-400" />,
      outcome: 'Know exact ROI on every click'
    },
    {
      num: '02',
      tool: 'Hostinger',
      role: 'High-Speed Web Infrastructure',
      desc: 'Deploy high-converting sales landing pages that load in under 1 second. Fast pages slash bounce rates and rank higher.',
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      outcome: 'Sub-second speeds retain 40% more visitors'
    },
    {
      num: '03',
      tool: 'Fomo',
      role: 'Real-Time Social Proof',
      desc: 'Trigger authentic live buyer popups and active visitor counters while prospects browse, pushing fence-sitters to complete purchase.',
      icon: <Flame className="w-5 h-5 text-orange-400" />,
      outcome: '+34% direct boost in checkout completion'
    },
    {
      num: '04',
      tool: 'Mailchimp',
      role: 'Automated Email Nurturing',
      desc: 'Automatically trigger onboarding journeys, welcome discount codes, abandoned cart emails, and high-margin repeat purchase campaigns.',
      icon: <Mail className="w-5 h-5 text-[#FFE01B]" />,
      outcome: 'Recovers up to 30% of abandoned checkouts'
    },
    {
      num: '05',
      tool: 'Wati',
      role: 'Instant WhatsApp Conversion',
      desc: 'Connect with leads on WhatsApp where open rates hit 98%. Automate customer support inquiries and send targeted broadcast deals.',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      outcome: '10x higher response rate than cold email'
    },
    {
      num: '06',
      tool: 'UptimeRobot',
      role: '24/7 Revenue Guardian',
      desc: 'Monitors your domain and checkout endpoints continuously every 30 seconds. Sends instant SMS warnings if your gateway goes down.',
      icon: <Activity className="w-5 h-5 text-teal-400" />,
      outcome: 'Zero silent checkout revenue loss'
    }
  ];

  return (
    <section id="automation-playbook" className="py-20 bg-[#0B101D] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            The Complete Closed-Loop Automation System
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            How All 6 Software Connect to Run Your Business On Autopilot
          </h2>
          <p className="text-base text-slate-300">
            Instead of buying random tools that don't speak to each other, this bundle gives you a unified growth loop from first impression to closed deal.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all hover:-translate-y-1 duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/80">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400">STAGE {step.num}</span>
                      <h3 className="text-base font-bold text-white">{step.tool}</h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                    {step.role}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Business Impact:</span>
                <span className="font-semibold text-emerald-300 font-mono">{step.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">
              Ready to replace $650/mo with this automated machine?
            </h4>
            <p className="text-sm text-slate-300">
              Get immediate lifetime access to all 6 tools + step-by-step setup blueprints.
            </p>
          </div>
          <button
            onClick={onClaimClick}
            className="px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl text-sm transition-all whitespace-nowrap cursor-pointer shadow-lg active:scale-98 flex items-center gap-2"
          >
            <span>Claim The Bundle For $15</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
