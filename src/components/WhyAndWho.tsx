import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Flame, 
  Zap, 
  Briefcase, 
  Store, 
  Megaphone, 
  Compass, 
  Globe, 
  Layers
} from 'lucide-react';
import { 
  TrafficGenerationIllustration,
  EngagementIllustration,
  RetargetingIllustration,
  WebsiteReliabilityIllustration
} from './WhyPillarIllustrations';

interface WhyAndWhoProps {
  onClaimClick: () => void;
}

interface CorePillar {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  problem: string;
  solution: string;
  keyBenefit: string;
  metric: string;
  metricLabel: string;
  toolsResponsible: string[];
  illustrationTheme: {
    gradient: string;
    border: string;
    accent: string;
    iconBg: string;
    svgColor: string;
  };
}

interface TargetAudience {
  id: string;
  role: string;
  badge: string;
  headline: string;
  painPoint: string;
  howWeSolve: string;
  result: string;
  recommendedTool: string;
}

const PILLARS: CorePillar[] = [
  {
    id: 'traffic-generation',
    title: 'Traffic Generation',
    badge: 'Acquisition & Reach',
    tagline: 'Attract qualified visitors continuously without exhausting ad budgets',
    problem: 'Attracting visitors to your website is a constant struggle. Without consistent, high-intent traffic, your online presence remains unnoticed and ad costs spiral out of control.',
    solution: 'Deploy ultra-fast US SSD hosting (Hostinger) for sub-second SEO rankings, dynamic branded short links and QR codes (Bitly) across social & offline campaigns, and custom domain mapping.',
    keyBenefit: '1-Click branded short links + dynamic QR codes boost click-through rates by 34% and bring organic traffic into your funnels.',
    metric: '+34%',
    metricLabel: 'Higher Click-Through & Scans',
    toolsResponsible: ['Bitly', 'Hostinger', 'Mailchimp'],
    illustrationTheme: {
      gradient: 'from-amber-500/15 via-orange-500/10 to-slate-900',
      border: 'border-amber-500/40',
      accent: 'text-amber-400',
      iconBg: 'bg-amber-500/20 text-amber-300',
      svgColor: '#F59E0B'
    }
  },
  {
    id: 'engagement',
    title: 'Engagement & Trust',
    badge: 'Social Proof & On-Site Conversion',
    tagline: 'Turn cold skeptics into eager buyers with real-time social proof',
    problem: 'Once users land on your website, keeping them engaged and building trust is difficult. Bounce rates exceed 70% when first-time visitors see zero signs of active buyer activity.',
    solution: 'Fomo automatically streams real-time verified buyer popups, live visitor counters, interactive emoji reactions, and countdown timers to build immediate authenticity.',
    keyBenefit: 'Acts as your 24/7 virtual sales team, proving to visitors that real people are actively buying right now.',
    metric: '+34%',
    metricLabel: 'Lift in Checkout Completion',
    toolsResponsible: ['Fomo', 'WATi'],
    illustrationTheme: {
      gradient: 'from-rose-500/15 via-pink-500/10 to-slate-900',
      border: 'border-rose-500/40',
      accent: 'text-rose-400',
      iconBg: 'bg-rose-500/20 text-rose-300',
      svgColor: '#F43F5E'
    }
  },
  {
    id: 'retargeting',
    title: 'Retargeting & Automated Sales',
    badge: 'Omnichannel Conversion',
    tagline: 'Reconnect with interested prospects on channels they actually open',
    problem: 'Reaching out to potential customers who have shown interest in your content or offerings is challenging. Traditional emails get lost in spam, and finding a cost-effective way to reconnect is key.',
    solution: 'Combine Mailchimp automated email drip sequences with WATi 98% open-rate WhatsApp broadcasts, Telegram catalog checkout, and automated abandoned cart recovery sequences.',
    keyBenefit: 'Recover up to 40% of abandoned carts with instant WhatsApp follow-ups that bypass saturated inboxes with zero 24-hour rule restrictions.',
    metric: '98%',
    metricLabel: 'WhatsApp Open Rates',
    toolsResponsible: ['WATi', 'Mailchimp'],
    illustrationTheme: {
      gradient: 'from-emerald-500/15 via-teal-500/10 to-slate-900',
      border: 'border-emerald-500/40',
      accent: 'text-emerald-400',
      iconBg: 'bg-emerald-500/20 text-emerald-300',
      svgColor: '#10B981'
    }
  },
  {
    id: 'website-reliability',
    title: 'Website Reliability & Uptime',
    badge: 'Infrastructure Shield',
    tagline: 'Protect every dollar of revenue with 24/7 automated monitoring',
    problem: 'Downtime can be disastrous for any online business. A broken payment gateway, crashed database, or expired SSL certificate quietly drains revenue while you sleep.',
    solution: 'UptimeRobot verifies your server, checkout page, and REST APIs every 30 seconds with immediate SMS, Telegram, and Email alerts the moment an anomaly is detected.',
    keyBenefit: 'Detect and resolve silent payment gateway failures in 30 seconds before customers bounce to your competitors.',
    metric: '99.9%',
    metricLabel: 'Verified Uptime Assurance',
    toolsResponsible: ['UptimeRobot', 'Hostinger'],
    illustrationTheme: {
      gradient: 'from-cyan-500/15 via-blue-500/10 to-slate-900',
      border: 'border-cyan-500/40',
      accent: 'text-cyan-400',
      iconBg: 'bg-cyan-500/20 text-cyan-300',
      svgColor: '#06B6D4'
    }
  }
];

const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'ecommerce',
    role: 'E-Commerce Brands & Shopify Store Owners',
    badge: 'DTC & Retail',
    headline: 'Stop losing checkouts to cart abandonment and silent outages',
    painPoint: 'Paying separate $200+/mo bills for email, WhatsApp apps, hosting, and social proof plugins that don\'t talk to each other.',
    howWeSolve: 'Trigger Fomo live purchase alerts on product pages, broadcast flash sales via WATi WhatsApp (98% opens), and host fast landing pages on Hostinger SSD.',
    result: '+42% higher conversion rate with instant abandoned cart recovery',
    recommendedTool: 'WATi + Fomo + Mailchimp'
  },
  {
    id: 'agencies',
    role: 'Marketing Agencies & Freelance Growth Consultants',
    badge: 'Agencies & Service Pros',
    headline: 'Deliver complete client tech stacks without eating your profit margins',
    painPoint: 'Client software expenses eat into retainer profits, forcing you to juggle 10 different passwords and expensive vendor billing.',
    howWeSolve: 'Equip every client with complete tracking links (Bitly), email automations (Mailchimp), uptime status pages (UptimeRobot), and WhatsApp CRM for just $15/mo.',
    result: 'Save $635/month per client while packaging a premium enterprise stack',
    recommendedTool: 'All 6 Tools Unified'
  },
  {
    id: 'founders',
    role: 'Solo Founders, Students & Startup Creators',
    badge: 'Students & Startups',
    headline: 'Launch fast and look like a 50-person enterprise from day one',
    painPoint: 'Spending $650/mo before generating your first $1,000 in revenue, creating dangerous cash-flow burn on a student or startup budget.',
    howWeSolve: 'Get unlimited cloud hosting, professional custom SMTP email marketing, 24/7 API monitoring, and link attribution for the price of two coffees a month.',
    result: 'Save $7,620 in your first year while looking 100% credible to early buyers',
    recommendedTool: 'Hostinger + Bitly + UptimeRobot'
  },
  {
    id: 'local-biz',
    role: 'Local Businesses & Service Providers',
    badge: 'Local Commerce & Clinics',
    headline: 'Automate booking reminders, customer reviews, and lead capture',
    painPoint: 'Manual follow-ups over phone or email cause 30%+ appointment no-shows and lost repeat business.',
    howWeSolve: 'Automate 2-way WhatsApp appointment confirmations with WATi, generate scan-to-pay QR codes with Bitly, and show verified local reviews with Fomo.',
    result: 'Cut appointment no-shows by 75% and automate repeat bookings 24/7',
    recommendedTool: 'WATi + Bitly + Fomo'
  }
];

export const WhyAndWho: React.FC<WhyAndWhoProps> = ({ onClaimClick }) => {
  const [activeTab, setActiveTab] = useState<'why' | 'who'>('why');
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PILLARS[0].id);

  const selectedPillar = PILLARS.find(p => p.id === selectedPillarId) || PILLARS[0];

  return (
    <section id="why-and-who" className="py-20 sm:py-28 bg-[#080C16] border-y border-slate-800/90 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching user image inspiration */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide mb-3 shadow-[0_0_20px_rgba(52,211,153,0.15)]">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>THE STRATEGIC ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 text-balance">
            Here's Why This 6-Tool Suite Is The Future <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              For Marketers & Entrepreneurs Everywhere
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every growing business needs 4 core pillars to dominate online: <strong className="text-white">Traffic Generation</strong>, <strong className="text-white">Engagement & Trust</strong>, <strong className="text-white">Retargeting</strong>, and <strong className="text-white">Website Reliability</strong>. See how our $15/mo package solves all four effortlessly.
          </p>

          {/* Interactive Switcher between "Why It's Essential" and "Who Will Benefit" */}
          <div className="inline-flex items-center p-1.5 bg-slate-900 border border-slate-800 rounded-2xl mt-8 shadow-xl">
            <button
              onClick={() => setActiveTab('why')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'why'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Why Everyone Needs This (4 Pillars)</span>
            </button>
            <button
              onClick={() => setActiveTab('who')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'who'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Who Will Benefit (By Business Type)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: THE 4 PILLARS (Inspired by the uploaded image) */}
        {activeTab === 'why' && (
          <div className="space-y-10">
            {/* 4 Cards Grid - Direct mapping to the 4 modules in user image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILLARS.map((pillar) => {
                const isSelected = pillar.id === selectedPillarId;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setSelectedPillarId(pillar.id)}
                    className={`bg-slate-900/90 border rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:scale-[1.02] ${
                      isSelected 
                        ? `${pillar.illustrationTheme.border} shadow-[0_0_30px_rgba(52,211,153,0.15)] bg-slate-850`
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      {/* Styled Big Visual Illustration Container */}
                      <div className={`relative h-52 sm:h-56 w-full rounded-2xl bg-[#090E17] border border-slate-700/60 overflow-hidden mb-6 flex items-center justify-center p-0`}>
                        {pillar.id === 'traffic-generation' && <TrafficGenerationIllustration />}
                        {pillar.id === 'engagement' && <EngagementIllustration />}
                        {pillar.id === 'retargeting' && <RetargetingIllustration />}
                        {pillar.id === 'website-reliability' && <WebsiteReliabilityIllustration />}
                      </div>

                      {/* Header matching image: Traffic Generation / Engagement / Retargeting / Website Reliability */}
                      <div className="space-y-2 mb-4">
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${pillar.illustrationTheme.accent}`}>
                          {pillar.badge}
                        </span>
                        <h3 className="text-xl font-black text-white group-hover:text-emerald-300 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed min-h-[70px]">
                          {pillar.problem}
                        </p>
                      </div>
                    </div>

                    {/* Bottom metric & responsible tools */}
                    <div className="pt-4 border-t border-slate-800/80 mt-auto">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[11px] text-slate-400 font-medium">Impact:</span>
                        <span className={`text-base font-black font-mono ${pillar.illustrationTheme.accent}`}>
                          {pillar.metric}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-400 uppercase font-mono">Powered by:</span>
                        <div className="flex items-center gap-1">
                          {pillar.toolsResponsible.map((t, idx) => (
                            <span key={idx} className="text-[10px] font-bold text-slate-300 bg-slate-800 px-1.5 py-0.2 rounded border border-slate-700">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* In-Depth Selected Pillar Deep Dive Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
                    Deep Dive Solution · {selectedPillar.title}
                  </span>
                  <span className="text-slate-600">|</span>
                  <span className="text-xs text-slate-300 font-mono">
                    Included in $15/mo plan
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  {selectedPillar.tagline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedPillar.solution}
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-emerald-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{selectedPillar.keyBenefit}</span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center sm:items-end gap-3 w-full sm:w-auto">
                <div className="text-center sm:text-right">
                  <div className="text-xs text-slate-400">All 4 Pillars Consolidated:</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    $15<span className="text-xs font-normal text-emerald-400">/month</span>
                  </div>
                </div>
                <button
                  onClick={onClaimClick}
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black rounded-xl text-xs shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Activate All 4 Pillars for $15</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WHO WILL BENEFIT (Personas & Business Types) */}
        {activeTab === 'who' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TARGET_AUDIENCES.map((persona) => (
              <div
                key={persona.id}
                className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/50">
                      {persona.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Ideal for: <strong className="text-white">{persona.recommendedTool}</strong>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-emerald-300 transition-colors">
                      {persona.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                      {persona.headline}
                    </p>
                  </div>

                  {/* The Pain vs Solution breakdown */}
                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 bg-rose-950/20 border border-rose-500/30 rounded-xl text-xs text-rose-200">
                      <strong className="text-rose-400 block mb-0.5">The Common Headache:</strong>
                      {persona.painPoint}
                    </div>

                    <div className="p-3.5 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-xs text-emerald-200">
                      <strong className="text-emerald-400 block mb-0.5">How Our $15/Mo Stack Solves It:</strong>
                      {persona.howWeSolve}
                    </div>
                  </div>
                </div>

                {/* Bottom Result Badge */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{persona.result}</span>
                  </div>
                  <button
                    onClick={onClaimClick}
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <span>Start Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
