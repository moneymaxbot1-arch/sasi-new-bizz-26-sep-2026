import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/bundleData';
import { PricingTier } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, Flame, Star, Check, Info, X } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tier: PricingTier) => void;
}

interface ToolSpecDetail {
  id: string;
  name: string;
  category: string;
  tagline: string;
  features: string[];
}

// Additional features for each of the 6 software tools in the 1st price package ($15/month Starter Pack)
const STARTER_SOFTWARE_SPECS: Record<string, ToolSpecDetail> = {
  hostinger: {
    id: 'hostinger',
    name: 'HOSTINGER',
    category: 'Cloud Web Hosting',
    tagline: 'High-speed cloud server infrastructure',
    features: [
      '1 Domain Hosting',
      '5 Sub-Domains',
      '5 Email Addresses',
      '5 MySQL Databases',
      '1 TB Storage',
      '1 TB Bandwidth'
    ]
  },
  fomo: {
    id: 'fomo',
    name: 'FOMO',
    category: 'Social Proof & Conversions',
    tagline: 'Real-time buyer activity & live visitor notifications',
    features: [
      '3K Unique Visitors/ Month',
      '5 Campaigns',
      '10 Notifications',
      'Unlimited Sites',
      'Unlimited Access / Lifetime',
      'API Access',
      'Powerful Analytics',
      'Integrations',
      'No Ads'
    ]
  },
  uptimeRobot: {
    id: 'uptimeRobot',
    name: 'UptimeRobot',
    category: '24/7 Monitoring Alert Suite',
    tagline: 'Instant downtime & server performance monitoring',
    features: [
      'No. of webpages – 1',
      'No. of APIs – 10',
      'No. of servers – 1',
      'Data Retention- 15'
    ]
  },
  mailchimp: {
    id: 'mailchimp',
    name: 'MAILCHIMP',
    category: 'Email Marketing & CRM',
    tagline: 'Automated email marketing & customer sequence journeys',
    features: [
      '3k Subscribers',
      '3 SMTP Servers',
      '1-Sending Domain',
      'Unlimited Emails',
      'Unlimited Lists',
      'Unlimited Campaigns',
      'Unlimited Automation',
      'Unlimited Tags & Segments',
      'Drag and Drop Email Builder'
    ]
  },
  wati: {
    id: 'wati',
    name: 'WATI',
    category: 'WhatsApp Business API',
    tagline: 'Broadcast marketing, automated chatbots & customer support',
    features: [
      'Subscribers 2K',
      'Connect Account : 3',
      'Number of Messages: 15K / Month',
      'Unlimited Bot Conditional Reply',
      'Unlimited Bot Message Insight',
      'Unlimited Input Flow Campaign',
      'Unlimited Live Chat',
      'Unlimited Broadcast',
      'Unlimited Sequence Campaign',
      'Unlimited Telegram – Group Management',
      'Unlimited API Integration',
      'WhatsApp – eCommerce Catalog: 1',
      'WhatsApp – Webhook Workflow: 1',
      'WhatsApp – WordPress/Shopify Integration: 1',
      'Telegram – Native eCommerce Store : 3',
      'Chat Widget: No Brand',
      'Team Members',
      'Live Chat – Advanced'
    ]
  },
  bitly: {
    id: 'bitly',
    name: 'BITLY',
    category: 'Branded Short Links & QR',
    tagline: 'Custom short URL attribution, biolinks & QR codes',
    features: [
      '1 Projects',
      '250 Shortened Links',
      '5 Biolink Pages',
      '2 QR Codes',
      '2 Pixels',
      '5 File Links',
      '5 Vcard Links',
      '5 Event Links',
      '2 Biolink Blocks',
      '90 days statistics retention'
    ]
  }
};

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  // Individual 1-Year / 2-Year selection state for each card
  const [cardCycles, setCardCycles] = useState<{ [tierId: string]: '2year' | '1year' }>({
    starter: '2year',
    growth: '2year',
    agency: '2year',
  });

  // Active popup detail for the 1st price package ($15/month Starter Pack)
  const [activeStarterTool, setActiveStarterTool] = useState<string | null>(null);
  // Dedicated hover state for 1st price box ($15 Starter)
  const [hoveredHostinger, setHoveredHostinger] = useState<boolean>(false);
  const [hoveredFomo, setHoveredFomo] = useState<boolean>(false);
  const [hoveredUptimeRobot, setHoveredUptimeRobot] = useState<boolean>(false);
  const [hoveredMailchimp, setHoveredMailchimp] = useState<boolean>(false);
  const [hoveredWati, setHoveredWati] = useState<boolean>(false);
  const [hoveredBitly, setHoveredBitly] = useState<boolean>(false);

  // Dedicated hover state for 2nd price box ($35 Growth Pack)
  const [hoveredGrowthHostinger, setHoveredGrowthHostinger] = useState<boolean>(false);
  const [hoveredGrowthFomo, setHoveredGrowthFomo] = useState<boolean>(false);
  const [hoveredGrowthUptimeRobot, setHoveredGrowthUptimeRobot] = useState<boolean>(false);
  const [hoveredGrowthMailchimp, setHoveredGrowthMailchimp] = useState<boolean>(false);
  const [hoveredGrowthWati, setHoveredGrowthWati] = useState<boolean>(false);
  const [hoveredGrowthBitly, setHoveredGrowthBitly] = useState<boolean>(false);

  // Dedicated hover state for 3rd price box ($150 Agency Pack)
  const [hoveredAgencyHostinger, setHoveredAgencyHostinger] = useState<boolean>(false);
  const [hoveredAgencyFomo, setHoveredAgencyFomo] = useState<boolean>(false);
  const [hoveredAgencyUptimeRobot, setHoveredAgencyUptimeRobot] = useState<boolean>(false);
  const [hoveredAgencyMailchimp, setHoveredAgencyMailchimp] = useState<boolean>(false);
  const [hoveredAgencyWati, setHoveredAgencyWati] = useState<boolean>(false);
  const [hoveredAgencyBitly, setHoveredAgencyBitly] = useState<boolean>(false);

  const handleToggleCycle = (tierId: string, cycle: '2year' | '1year') => {
    setCardCycles((prev) => ({
      ...prev,
      [tierId]: cycle,
    }));
  };

  const handleSelectWithCycle = (tier: PricingTier) => {
    const cycle = cardCycles[tier.id] || '2year';
    const is2Year = cycle === '2year';
    const activePrice = is2Year ? tier.price2Year : tier.price1Year;
    const activePeriod = is2Year ? '/month (2 years)' : '/month (1 year)';

    onSelectTier({
      ...tier,
      price: activePrice,
      period: activePeriod,
    });
  };

  return (
    <section id="pricing" className="py-24 bg-[#0B101D] border-t border-slate-800/80 relative">
      
      {/* Background radial ambient lights - gold glow concentrated on center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Gold Border Animation Keyframes & Ambient Glow Styles */}
      <style>{`
        @keyframes goldCenterGlowPulse {
          0%, 100% {
            box-shadow: 0 0 35px rgba(245, 158, 11, 0.55), 0 0 70px rgba(217, 119, 6, 0.35), inset 0 0 15px rgba(254, 240, 138, 0.2);
            border-color: #F59E0B;
          }
          50% {
            box-shadow: 0 0 60px rgba(253, 224, 71, 0.95), 0 0 100px rgba(245, 158, 11, 0.7), inset 0 0 25px rgba(254, 240, 138, 0.45);
            border-color: #FEF08A;
          }
        }
        .center-gold-animated-card {
          animation: goldCenterGlowPulse 2.8s ease-in-out infinite;
        }
        .center-gold-border-gradient {
          background: linear-gradient(135deg, #FFFBEB, #FDE047, #F59E0B, #FBBF24, #FEF08A, #F59E0B);
          background-size: 300% 300%;
          animation: goldGradientFlow 3.5s ease infinite;
        }
        @keyframes goldGradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-700/80 rounded-full text-xs font-bold text-slate-300 mb-4 shadow-md">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>SPECIAL INTRODUCTORY SUITE PROMOTION · ALL 6 TOOLS UNIFIED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 text-balance">
            Choose Your Subscription Package. <br />
            Starting From as Low as{' '}
            <span className="text-emerald-400 font-mono">
              Only $15/Month
            </span>
            .
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            All 6 software licenses provided directly from original companies. Select <span className="text-white font-semibold">1-Year or 2-Year</span> on top of any table below. In the $15 Starter Pack, <span className="text-emerald-400 font-semibold underline decoration-emerald-500/50 underline-offset-4">hover or tap any software</span> to reveal its full feature list!
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto relative">
          {PRICING_TIERS.map((tier) => {
            const isStarter = tier.id === 'starter';
            const isCenter = tier.popular; // Growth Pack is center popular choice
            const isAgency = tier.id === 'agency';
            const cycle = cardCycles[tier.id] || '2year';
            const is2Year = cycle === '2year';
            const activePrice = is2Year ? tier.price2Year : tier.price1Year;
            const altPrice = is2Year ? tier.price1Year : tier.price2Year;
            const altTerm = is2Year ? '1 year' : '2 years';

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isCenter
                    ? `p-[4.5px] center-gold-border-gradient rounded-3xl center-gold-animated-card shadow-2xl lg:-translate-y-3 scale-[1.02] ${
                        hoveredGrowthHostinger || hoveredGrowthFomo || hoveredGrowthUptimeRobot || hoveredGrowthMailchimp || hoveredGrowthWati || hoveredGrowthBitly ? 'z-40' : 'z-20'
                      }`
                    : isStarter
                    ? `p-[3.5px] rounded-3xl bg-gradient-to-b from-emerald-300 via-emerald-400 to-teal-500 shadow-[0_0_35px_rgba(52,211,153,0.35)] hover:shadow-[0_0_55px_rgba(52,211,153,0.55)] hover:scale-[1.01] ${
                        hoveredHostinger || hoveredFomo || hoveredUptimeRobot || hoveredMailchimp || hoveredWati || hoveredBitly ? 'z-40' : 'z-25'
                      }`
                    : isAgency
                    ? `p-[3.5px] rounded-3xl bg-gradient-to-b from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_35px_rgba(56,189,248,0.35)] hover:shadow-[0_0_55px_rgba(56,189,248,0.55)] hover:scale-[1.01] ${
                        hoveredAgencyHostinger || hoveredAgencyFomo || hoveredAgencyUptimeRobot || hoveredAgencyMailchimp || hoveredAgencyWati || hoveredAgencyBitly ? 'z-40' : 'z-10'
                      }`
                    : 'p-[3.5px] rounded-3xl bg-gradient-to-b from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_35px_rgba(56,189,248,0.35)] hover:shadow-[0_0_55px_rgba(56,189,248,0.55)] hover:scale-[1.01] z-10'
                }`}
              >
                {/* Gold Highlight Badge ONLY for Center Table */}
                {isCenter && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 text-xs font-black rounded-full shadow-lg shadow-amber-500/40 whitespace-nowrap flex items-center gap-1.5 uppercase tracking-wider z-30">
                    <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                    <span>★ MOST POPULAR CHOICE · RECOMMENDED</span>
                  </div>
                )}

                {/* Card Inner Content Container */}
                <div className={`h-full w-full rounded-[21px] p-6 sm:p-8 flex flex-col justify-between ${
                  isCenter ? 'bg-[#0b101c]' : 'bg-[#0B101D]'
                }`}>
                  
                  <div>
                    {/* 1 & 2 Year Option on Top of Each Pricing Table */}
                    <div className="mb-5">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 mb-1.5 px-0.5">
                        <span>SELECT DURATION:</span>
                        <span className={is2Year ? (isCenter ? 'text-amber-400' : 'text-emerald-400') : 'text-slate-400'}>
                          {is2Year ? 'Save ~40% (Best Value)' : 'Standard 1-Year'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-800/90 shadow-inner">
                        {/* 2-Year Button Option */}
                        <button
                          type="button"
                          onClick={() => handleToggleCycle(tier.id, '2year')}
                          className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer flex flex-col items-center justify-center ${
                            is2Year
                              ? isCenter
                                ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 shadow-md font-black'
                                : 'bg-emerald-400 text-slate-950 shadow-md font-black'
                              : 'text-slate-400 hover:text-white hover:bg-slate-850'
                          }`}
                        >
                          <span className="flex items-center gap-1">
                            {is2Year && <Check className="w-3 h-3 stroke-[3]" />}
                            <span>2 Years</span>
                          </span>
                          <span className={`text-[10px] font-mono leading-tight ${is2Year ? 'text-slate-950 font-bold' : 'text-emerald-400 font-medium'}`}>
                            Save 40%
                          </span>
                        </button>

                        {/* 1-Year Button Option */}
                        <button
                          type="button"
                          onClick={() => handleToggleCycle(tier.id, '1year')}
                          className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer flex flex-col items-center justify-center ${
                            !is2Year
                              ? isCenter
                                ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 shadow-md font-black'
                                : 'bg-emerald-400 text-slate-950 shadow-md font-black'
                              : 'text-slate-400 hover:text-white hover:bg-slate-850'
                          }`}
                        >
                          <span className="flex items-center gap-1">
                            {!is2Year && <Check className="w-3 h-3 stroke-[3]" />}
                            <span>1 Year</span>
                          </span>
                          <span className={`text-[10px] font-mono leading-tight ${!is2Year ? 'text-slate-950 font-bold' : 'text-slate-500'}`}>
                            Standard
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Top Header Badge & Subtitle */}
                    <div className="text-center mb-5">
                      <div className="inline-block px-4 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-inner">
                        {tier.name}
                      </div>

                      {/* Sub-badge if Premium */}
                      {tier.premiumBadge && (
                        <div className="mt-2 inline-block px-3 py-0.5 rounded-md bg-rose-200/90 text-rose-950 font-black text-xs uppercase tracking-wider shadow-xs">
                          {tier.premiumBadge}
                        </div>
                      )}

                      <p className="text-xs text-slate-300 mt-2 font-medium">
                        {tier.subtitle}
                      </p>
                    </div>

                    {/* Pricing Display: GOLD COLOUR PRICING ONLY FOR CENTRE PRICE TABLE */}
                    <div className="text-center py-5 border-y border-slate-800/80 my-3">
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span
                          className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${
                            isCenter
                              ? 'text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                              : 'text-white'
                          }`}
                        >
                          ${activePrice}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 uppercase font-mono">
                          /month
                        </span>
                      </div>

                      {/* Secondary display showing alternate pricing option */}
                      <div className="mt-2 text-xs text-slate-400 flex items-center justify-center gap-2">
                        <span>Or select {altTerm}:</span>
                        <span className={`font-mono font-semibold ${isCenter ? 'text-amber-300/90' : 'text-slate-300'}`}>
                          ${altPrice}/mo
                        </span>
                      </div>
                    </div>

                    {/* Buy Now CTA Button */}
                    <div className="my-6">
                      <button
                        onClick={() => handleSelectWithCycle(tier)}
                        className={`w-full py-4 rounded-xl font-black text-base transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-98 ${
                          isCenter
                            ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50'
                            : tier.id === 'agency'
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/20'
                            : 'bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 shadow-lg shadow-emerald-500/20'
                        }`}
                      >
                        <span>Buy Now</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>

                    {/* 6 Software Allowances List: MODERATE BIG SIZE & BEAUTIFULLY MINGLED */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider px-1 mb-1">
                        <span>6 INCLUDED SOFTWARE:</span>
                        {(isStarter || isCenter || isAgency) && (
                          <span className={`${isCenter ? 'text-amber-400' : isAgency ? 'text-cyan-400' : 'text-emerald-400'} flex items-center gap-1 normal-case font-sans text-[11px]`}>
                            <Sparkles className={`w-3 h-3 ${isCenter ? 'text-amber-400' : isAgency ? 'text-cyan-400' : 'text-emerald-400'}`} />
                            Hover / tap for full specs
                          </span>
                        )}
                      </div>

                      {/* 1. Hostinger */}
                      <div
                        onMouseEnter={() => {
                          if (isStarter) setHoveredHostinger(true);
                          if (isCenter) setHoveredGrowthHostinger(true);
                          if (isAgency) setHoveredAgencyHostinger(true);
                        }}
                        onMouseLeave={() => {
                          if (isStarter) setHoveredHostinger(false);
                          if (isCenter) setHoveredGrowthHostinger(false);
                          if (isAgency) setHoveredAgencyHostinger(false);
                        }}
                        onClick={() => {
                          if (isStarter) setHoveredHostinger(prev => !prev);
                          if (isCenter) setHoveredGrowthHostinger(prev => !prev);
                          if (isAgency) setHoveredAgencyHostinger(prev => !prev);
                        }}
                        className={`relative flex flex-col items-center justify-center text-center p-3.5 rounded-2xl transition-all shadow-xs ${
                          isStarter
                            ? hoveredHostinger
                              ? 'bg-slate-900 border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-emerald-500/80 hover:bg-slate-900 cursor-pointer group'
                            : isCenter
                            ? hoveredGrowthHostinger
                              ? 'bg-slate-900 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-amber-400/80 hover:bg-slate-900 cursor-pointer group'
                            : isAgency
                            ? hoveredAgencyHostinger
                              ? 'bg-slate-900 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-cyan-400/80 hover:bg-slate-900 cursor-pointer group'
                            : 'bg-slate-950/70 border border-slate-800/80 hover:border-slate-700/80'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 shadow-xs">
                            <span className="w-3.5 h-3.5 bg-[#673DE6] rounded-xs flex items-center justify-center text-white font-black text-[9px]">
                              H
                            </span>
                            <span className="font-black tracking-wider text-xs text-white font-sans">
                              HOSTINGER
                            </span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {isStarter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isCenter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isAgency && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                        </div>
                        <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                          {tier.toolAllowances.hostinger}
                        </span>

                        {/* Floating Popup for Hostinger ($15 Starter) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isStarter && hoveredHostinger && (
                          <div
                            onMouseEnter={() => setHoveredHostinger(true)}
                            onMouseLeave={() => setHoveredHostinger(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[350px] bg-[#0A101D]/98 border-2 border-emerald-400 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(16,185,129,0.4)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-emerald-400" />

                            {/* Header with Hostinger logo and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#673DE6] text-white font-black text-xs shadow-xs">
                                  <span>H</span>
                                  <span>HOSTINGER</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase">
                                  $15 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-emerald-400">
                                6 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website design */}
                            <div className="space-y-3">
                              {[
                                '1 Domain Hosting',
                                '5 Sub-Domains',
                                '5 Email Addresses',
                                '5 MySQL Databases',
                                '1 TB Storage',
                                '1 TB Bandwidth',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span>High-Speed Cloud Access</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for Hostinger ($35 Growth - 2nd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isCenter && hoveredGrowthHostinger && (
                          <div
                            onMouseEnter={() => setHoveredGrowthHostinger(true)}
                            onMouseLeave={() => setHoveredGrowthHostinger(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[350px] bg-[#0A101D]/98 border-2 border-amber-400 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(245,158,11,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-amber-400" />

                            {/* Header with Hostinger logo and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#673DE6] text-white font-black text-xs shadow-xs">
                                  <span>H</span>
                                  <span>HOSTINGER</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold uppercase">
                                  $35 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-amber-400">
                                6 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                '5 Domain Hosting',
                                '50 Sub-Domains',
                                '50 Email Addresses',
                                '50 MySQL Databases',
                                '2 TB Storage',
                                '2 TB Bandwidth',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-amber-400 stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                                <span>Enterprise Cloud Infrastructure</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for Hostinger ($150 Agency - 3rd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isAgency && hoveredAgencyHostinger && (
                          <div
                            onMouseEnter={() => setHoveredAgencyHostinger(true)}
                            onMouseLeave={() => setHoveredAgencyHostinger(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[360px] bg-[#0A101D]/98 border-2 border-cyan-400 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(6,182,212,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-cyan-400" />

                            {/* Header with Hostinger logo and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#673DE6] text-white font-black text-xs shadow-xs">
                                  <span>H</span>
                                  <span>HOSTINGER</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono font-bold uppercase">
                                  $150 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-cyan-400">
                                6 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                '1000 Domain Hosting',
                                '10,000 Sub-Domains',
                                '10,000 Email Addresses',
                                '10,000 MySQL Databases',
                                'Unlimited Storage',
                                'Unlimited Bandwidth',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-cyan-400 stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                                <span>Ultra-Tier Dedicated Agency Cloud Hosting</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 2. FOMO */}
                      <div
                        onMouseEnter={() => {
                          if (isStarter) setHoveredFomo(true);
                          if (isCenter) setHoveredGrowthFomo(true);
                          if (isAgency) setHoveredAgencyFomo(true);
                        }}
                        onMouseLeave={() => {
                          if (isStarter) setHoveredFomo(false);
                          if (isCenter) setHoveredGrowthFomo(false);
                          if (isAgency) setHoveredAgencyFomo(false);
                        }}
                        onClick={() => {
                          if (isStarter) setHoveredFomo(prev => !prev);
                          if (isCenter) setHoveredGrowthFomo(prev => !prev);
                          if (isAgency) setHoveredAgencyFomo(prev => !prev);
                        }}
                        className={`relative flex flex-col items-center justify-center text-center p-3.5 rounded-2xl transition-all shadow-xs ${
                          isStarter
                            ? hoveredFomo
                              ? 'bg-slate-900 border-2 border-[#F97316] shadow-[0_0_25px_rgba(249,115,22,0.35)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#F97316]/80 hover:bg-slate-900 cursor-pointer group'
                            : isCenter
                            ? hoveredGrowthFomo
                              ? 'bg-slate-900 border-2 border-[#F97316] shadow-[0_0_25px_rgba(249,115,22,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#F97316]/80 hover:bg-slate-900 cursor-pointer group'
                            : isAgency
                            ? hoveredAgencyFomo
                              ? 'bg-slate-900 border-2 border-[#F97316] shadow-[0_0_25px_rgba(249,115,22,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#F97316]/80 hover:bg-slate-900 cursor-pointer group'
                            : 'bg-slate-950/70 border border-slate-800/80 hover:border-slate-700/80'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="px-3.5 py-1 rounded-md bg-slate-900 border border-slate-700 shadow-xs">
                            <span className="font-serif font-black tracking-tight text-base text-[#F97316]">
                              fomo
                            </span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {isStarter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-950 text-orange-300 border border-orange-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isCenter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-950 text-orange-300 border border-orange-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isAgency && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-950 text-orange-300 border border-orange-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                        </div>
                        <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                          {tier.toolAllowances.fomo}
                        </span>

                        {/* Floating Popup for FOMO ($15 Starter) displayed BELOW the FOMO box with BIGGER WORDS & ANIMATED APPROACH */}
                        {isStarter && hoveredFomo && (
                          <div
                            onMouseEnter={() => setHoveredFomo(true)}
                            onMouseLeave={() => setHoveredFomo(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[350px] bg-[#0A101D]/98 border-2 border-[#F97316] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(249,115,22,0.4)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#F97316]" />

                            {/* Header with FOMO logo and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700">
                                  <span className="font-serif font-black tracking-tight text-base text-[#F97316]">
                                    fomo
                                  </span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-500/40 text-[10px] font-mono font-bold uppercase">
                                  $15 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#F97316]">
                                9 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                '3K Unique Visitors/ Month',
                                '5 Campaigns',
                                '10 Notifications',
                                'Unlimited Sites',
                                'Unlimited Access / Lifetime',
                                'API Access',
                                'Powerful Analytics',
                                'Integrations',
                                'No Ads',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-[#F97316]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#F97316] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-orange-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                                <span>Real-Time Social Proof Engine</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for FOMO ($35 Growth - 2nd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isCenter && hoveredGrowthFomo && (
                          <div
                            onMouseEnter={() => setHoveredGrowthFomo(true)}
                            onMouseLeave={() => setHoveredGrowthFomo(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[350px] bg-[#0A101D]/98 border-2 border-[#F97316] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(249,115,22,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#F97316]" />

                            {/* Header with FOMO logo and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700">
                                  <span className="font-serif font-black tracking-tight text-base text-[#F97316]">
                                    fomo
                                  </span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-500/40 text-[10px] font-mono font-bold uppercase">
                                  $35 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#F97316]">
                                11 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                '10K Unique Visitors/ Month',
                                '20 Campaigns',
                                '20 notifications',
                                'Unlimited Sites',
                                'Unlimited Access / Lifetime',
                                'API Access',
                                'Powerful Analytics',
                                'Integrations',
                                'No Ads',
                                'Removable Branding',
                                'Custom Branding',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-[#F97316]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#F97316] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-orange-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                                <span>Advanced Social Proof & Branding</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for FOMO ($150 Agency - 3rd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isAgency && hoveredAgencyFomo && (
                          <div
                            onMouseEnter={() => setHoveredAgencyFomo(true)}
                            onMouseLeave={() => setHoveredAgencyFomo(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[320px] sm:w-[370px] bg-[#0A101D]/98 border-2 border-[#F97316] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(249,115,22,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#F97316]" />

                            {/* Header with FOMO logo and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700">
                                  <span className="font-serif font-black tracking-tight text-base text-[#F97316]">
                                    fomo
                                  </span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-500/40 text-[10px] font-mono font-bold uppercase">
                                  $150 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#F97316]">
                                11 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                              {[
                                '100,000 Unique Visitors/ Month',
                                'Unlimited Campaigns',
                                'Access to all notifications',
                                'Unlimited Sites',
                                'Unlimited Access / Lifetime',
                                'API Access',
                                'Powerful Analytics',
                                'Integrations',
                                'No Ads',
                                'Removable Branding',
                                'Custom Branding',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-[#F97316]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#F97316] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-orange-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                                <span>Enterprise Social Proof & High-Volume Conversions</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 3. UptimeRobot */}
                      <div
                        onMouseEnter={() => {
                          if (isStarter) setHoveredUptimeRobot(true);
                          if (isCenter) setHoveredGrowthUptimeRobot(true);
                          if (isAgency) setHoveredAgencyUptimeRobot(true);
                        }}
                        onMouseLeave={() => {
                          if (isStarter) setHoveredUptimeRobot(false);
                          if (isCenter) setHoveredGrowthUptimeRobot(false);
                          if (isAgency) setHoveredAgencyUptimeRobot(false);
                        }}
                        onClick={() => {
                          if (isStarter) setHoveredUptimeRobot(prev => !prev);
                          if (isCenter) setHoveredGrowthUptimeRobot(prev => !prev);
                          if (isAgency) setHoveredAgencyUptimeRobot(prev => !prev);
                        }}
                        className={`relative flex flex-col items-center justify-center text-center p-3.5 rounded-2xl transition-all shadow-xs ${
                          isStarter
                            ? hoveredUptimeRobot
                              ? 'bg-slate-900 border-2 border-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.35)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#10B981]/80 hover:bg-slate-900 cursor-pointer group'
                            : isCenter
                            ? hoveredGrowthUptimeRobot
                              ? 'bg-slate-900 border-2 border-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#10B981]/80 hover:bg-slate-900 cursor-pointer group'
                            : isAgency
                            ? hoveredAgencyUptimeRobot
                              ? 'bg-slate-900 border-2 border-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#10B981]/80 hover:bg-slate-900 cursor-pointer group'
                            : 'bg-slate-950/70 border border-slate-800/80 hover:border-slate-700/80'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 shadow-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10b981]" />
                            <span className="font-extrabold text-xs text-white">
                              UptimeRobot
                            </span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {isStarter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isCenter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isAgency && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                        </div>
                        <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                          {tier.toolAllowances.uptimeRobot}
                        </span>

                        {/* Floating Popup for UptimeRobot ($15 Starter) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isStarter && hoveredUptimeRobot && (
                          <div
                            onMouseEnter={() => setHoveredUptimeRobot(true)}
                            onMouseLeave={() => setHoveredUptimeRobot(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[350px] bg-[#0A101D]/98 border-2 border-[#10B981] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(16,185,129,0.4)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#10B981]" />

                            {/* Header with UptimeRobot badge and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 shadow-xs">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10b981]" />
                                  <span className="font-extrabold text-xs text-white">UptimeRobot</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase">
                                  $15 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#10B981]">
                                4 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                'No. of webpages – 1',
                                'No. of APIs – 10',
                                'No. of servers – 1',
                                'Data Retention- 15',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-[#10B981]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span>24/7 Live Incident & Downtime Tracking</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for UptimeRobot ($35 Growth - 2nd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isCenter && hoveredGrowthUptimeRobot && (
                          <div
                            onMouseEnter={() => setHoveredGrowthUptimeRobot(true)}
                            onMouseLeave={() => setHoveredGrowthUptimeRobot(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[350px] bg-[#0A101D]/98 border-2 border-[#10B981] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(16,185,129,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#10B981]" />

                            {/* Header with UptimeRobot badge and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 shadow-xs">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10b981]" />
                                  <span className="font-extrabold text-xs text-white">UptimeRobot</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase">
                                  $35 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#10B981]">
                                4 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                'No. of webpages – 10',
                                'No. of APIs – 50',
                                'No. of servers – 10',
                                'Data Retention – 30',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-[#10B981]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span>24/7 Multi-Server & API Monitoring</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for UptimeRobot ($150 Agency - 3rd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isAgency && hoveredAgencyUptimeRobot && (
                          <div
                            onMouseEnter={() => setHoveredAgencyUptimeRobot(true)}
                            onMouseLeave={() => setHoveredAgencyUptimeRobot(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[320px] sm:w-[370px] bg-[#0A101D]/98 border-2 border-[#10B981] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(16,185,129,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#10B981]" />

                            {/* Header with UptimeRobot badge and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 shadow-xs">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10b981]" />
                                  <span className="font-extrabold text-xs text-white">UptimeRobot</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase">
                                  $150 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#10B981]">
                                11 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                              {[
                                '100,000 Unique Visitors/ Month',
                                'Unlimited Campaigns',
                                'Access to all notifications',
                                'Unlimited Sites',
                                'Unlimited Access / Lifetime',
                                'API Access',
                                'Powerful Analytics',
                                'Integrations',
                                'No Ads',
                                'Removable Branding',
                                'Custom Branding',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-[#10B981]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Enterprise Live Monitoring & Incident Tracking</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 4. Mailchimp */}
                      <div
                        onMouseEnter={() => {
                          if (isStarter) setHoveredMailchimp(true);
                          if (isCenter) setHoveredGrowthMailchimp(true);
                          if (isAgency) setHoveredAgencyMailchimp(true);
                        }}
                        onMouseLeave={() => {
                          if (isStarter) setHoveredMailchimp(false);
                          if (isCenter) setHoveredGrowthMailchimp(false);
                          if (isAgency) setHoveredAgencyMailchimp(false);
                        }}
                        onClick={() => {
                          if (isStarter) setHoveredMailchimp(prev => !prev);
                          if (isCenter) setHoveredGrowthMailchimp(prev => !prev);
                          if (isAgency) setHoveredAgencyMailchimp(prev => !prev);
                        }}
                        className={`relative flex flex-col items-center justify-center text-center p-3.5 rounded-2xl transition-all shadow-xs ${
                          isStarter
                            ? hoveredMailchimp
                              ? 'bg-slate-900 border-2 border-[#FFE01B] shadow-[0_0_25px_rgba(255,224,27,0.35)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#FFE01B]/80 hover:bg-slate-900 cursor-pointer group'
                            : isCenter
                            ? hoveredGrowthMailchimp
                              ? 'bg-slate-900 border-2 border-[#FFE01B] shadow-[0_0_25px_rgba(255,224,27,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#FFE01B]/80 hover:bg-slate-900 cursor-pointer group'
                            : isAgency
                            ? hoveredAgencyMailchimp
                              ? 'bg-slate-900 border-2 border-[#FFE01B] shadow-[0_0_25px_rgba(255,224,27,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#FFE01B]/80 hover:bg-slate-900 cursor-pointer group'
                            : 'bg-slate-950/70 border border-slate-800/80 hover:border-slate-700/80'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-[#FFE01B] text-slate-950 border border-amber-400 shadow-xs">
                            <span className="font-black tracking-tight text-xs uppercase font-sans">
                              mailchimp
                            </span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {isStarter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isCenter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isAgency && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                        </div>
                        <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                          {tier.toolAllowances.mailchimp}
                        </span>

                        {/* Floating Popup for Mailchimp ($15 Starter) displayed with BIGGER WORDS & ANIMATED APPROACH */}
                        {isStarter && hoveredMailchimp && (
                          <div
                            onMouseEnter={() => setHoveredMailchimp(true)}
                            onMouseLeave={() => setHoveredMailchimp(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[350px] bg-[#0A101D]/98 border-2 border-[#FFE01B] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(255,224,27,0.4)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#FFE01B]" />

                            {/* Header with Mailchimp logo and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="px-2.5 py-1 rounded bg-[#FFE01B] text-slate-950 font-black text-xs uppercase font-sans">
                                  <span>MAILCHIMP</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold uppercase">
                                  $15 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#FFE01B]">
                                9 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                '3k Subscribers',
                                '3 SMTP Servers',
                                '1-Sending Domain',
                                'Unlimited Emails',
                                'Unlimited Lists',
                                'Unlimited Campaigns',
                                'Unlimited Automation',
                                'Unlimited Tags & Segments',
                                'Drag and Drop Email Builder',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-[#FFE01B]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#FFE01B] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                                <span>Automated Sequence & Email Engine</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for Mailchimp ($35 Growth - 2nd price box) displayed with BIGGER WORDS & ANIMATED APPROACH */}
                        {isCenter && hoveredGrowthMailchimp && (
                          <div
                            onMouseEnter={() => setHoveredGrowthMailchimp(true)}
                            onMouseLeave={() => setHoveredGrowthMailchimp(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[350px] bg-[#0A101D]/98 border-2 border-[#FFE01B] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(255,224,27,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#FFE01B]" />

                            {/* Header with Mailchimp logo and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="px-2.5 py-1 rounded bg-[#FFE01B] text-slate-950 font-black text-xs uppercase font-sans">
                                  <span>MAILCHIMP</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold uppercase">
                                  $35 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#FFE01B]">
                                9 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                '10k Subscribers',
                                '5 SMTP Servers',
                                '3-Sending Domain',
                                'Unlimited Emails',
                                'Unlimited Lists',
                                'Unlimited Campaigns',
                                'Unlimited Automation',
                                'Unlimited Tags & Segments',
                                'Drag and Drop Email Builder',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-[#FFE01B]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#FFE01B] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                                <span>High-Volume Automated Sequences & SMTP</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for Mailchimp ($150 Agency - 3rd price box) displayed with BIGGER WORDS & ANIMATED APPROACH */}
                        {isAgency && hoveredAgencyMailchimp && (
                          <div
                            onMouseEnter={() => setHoveredAgencyMailchimp(true)}
                            onMouseLeave={() => setHoveredAgencyMailchimp(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[360px] bg-[#0A101D]/98 border-2 border-[#FFE01B] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(255,224,27,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#FFE01B]" />

                            {/* Header with Mailchimp logo and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="px-2.5 py-1 rounded bg-[#FFE01B] text-slate-950 font-black text-xs uppercase font-sans">
                                  <span>MAILCHIMP</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold uppercase">
                                  $150 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#FFE01B]">
                                9 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                '300k Subscribers',
                                '8 SMTP Servers',
                                '8 Sending Domain',
                                'Unlimited Emails',
                                'Unlimited Lists',
                                'Unlimited Campaigns',
                                'Unlimited Automation',
                                'Unlimited Tags & Segments',
                                'Drag and Drop Email Builder',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-[#FFE01B]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#FFE01B] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                                <span>Enterprise Multi-SMTP High-Delivery Infrastructure</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 5. WATI */}
                      <div
                        onMouseEnter={() => {
                          if (isStarter) setHoveredWati(true);
                          if (isCenter) setHoveredGrowthWati(true);
                          if (isAgency) setHoveredAgencyWati(true);
                        }}
                        onMouseLeave={() => {
                          if (isStarter) setHoveredWati(false);
                          if (isCenter) setHoveredGrowthWati(false);
                          if (isAgency) setHoveredAgencyWati(false);
                        }}
                        onClick={() => {
                          if (isStarter) setHoveredWati(prev => !prev);
                          if (isCenter) setHoveredGrowthWati(prev => !prev);
                          if (isAgency) setHoveredAgencyWati(prev => !prev);
                        }}
                        className={`relative flex flex-col items-center justify-center text-center p-3.5 rounded-2xl transition-all shadow-xs ${
                          isStarter
                            ? hoveredWati
                              ? 'bg-slate-900 border-2 border-[#00E785] shadow-[0_0_25px_rgba(0,231,133,0.35)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#00E785]/80 hover:bg-slate-900 cursor-pointer group'
                            : isCenter
                            ? hoveredGrowthWati
                              ? 'bg-slate-900 border-2 border-[#00E785] shadow-[0_0_25px_rgba(0,231,133,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#00E785]/80 hover:bg-slate-900 cursor-pointer group'
                            : isAgency
                            ? hoveredAgencyWati
                              ? 'bg-slate-900 border-2 border-[#00E785] shadow-[0_0_25px_rgba(0,231,133,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#00E785]/80 hover:bg-slate-900 cursor-pointer group'
                            : 'bg-slate-950/70 border border-slate-800/80 hover:border-slate-700/80'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 shadow-xs">
                            <div className="w-4 h-4 rounded-xs bg-[#00E785] flex items-center justify-center text-slate-950 text-[9px] font-black">
                              💬
                            </div>
                            <span className="font-black text-sm text-white tracking-wide">
                              wati
                            </span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {isStarter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isCenter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-[#00E785] border border-[#00E785]/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isAgency && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-[#00E785] border border-[#00E785]/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                        </div>
                        <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                          {tier.toolAllowances.wati}
                        </span>

                        {/* Floating Popup for WATI ($15 Starter) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isStarter && hoveredWati && (
                          <div
                            onMouseEnter={() => setHoveredWati(true)}
                            onMouseLeave={() => setHoveredWati(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[320px] sm:w-[370px] bg-[#0A101D]/98 border-2 border-[#00E785] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(0,231,133,0.4)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#00E785]" />

                            {/* Header with WATI badge and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00E785] text-slate-950 font-black text-xs uppercase shadow-xs">
                                  <span>💬</span>
                                  <span>WATI</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase">
                                  $15 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#00E785]">
                                18 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                              {[
                                'Subscribers 2K',
                                'Connect Account : 3',
                                'Number of Messages: 15K / Month',
                                'Unlimited Bot Conditional Reply',
                                'Unlimited Bot Message Insight',
                                'Unlimited Input Flow Campaign',
                                'Unlimited Live Chat',
                                'Unlimited Broadcast',
                                'Unlimited Sequence Campaign',
                                'Unlimited Telegram – Group Management',
                                'Unlimited API Integration',
                                'WhatsApp – eCommerce Catalog: 1',
                                'WhatsApp – Webhook Workflow: 1',
                                'WhatsApp – WordPress/Shopify Integration: 1',
                                'Telegram – Native eCommerce Store : 3',
                                'Chat Widget: No Brand',
                                'Team Members',
                                'Live Chat – Advanced',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-[#00E785]/20 border border-[#00E785]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#00E785] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Official WhatsApp & Telegram Automation</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for WATI ($35 Growth - 2nd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isCenter && hoveredGrowthWati && (
                          <div
                            onMouseEnter={() => setHoveredGrowthWati(true)}
                            onMouseLeave={() => setHoveredGrowthWati(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[320px] sm:w-[370px] bg-[#0A101D]/98 border-2 border-[#00E785] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(0,231,133,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#00E785]" />

                            {/* Header with WATI badge and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00E785] text-slate-950 font-black text-xs uppercase shadow-xs">
                                  <span>💬</span>
                                  <span>WATI</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-emerald-950 text-[#00E785] border border-[#00E785]/40 text-[10px] font-mono font-bold uppercase">
                                  $35 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#00E785]">
                                18 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                              {[
                                'Subscribers 10K',
                                'Connect Account: 5',
                                'Number of Messages: 25K / Month',
                                'Unlimited Bot Conditional Reply',
                                'Unlimited Bot Message Insight',
                                'Unlimited Input Flow Campaign',
                                'Unlimited Live Chat',
                                'Unlimited Broadcast',
                                'Unlimited Sequence Campaign',
                                'Unlimited Telegram – Group Management',
                                'Unlimited API Integration',
                                'WhatsApp – eCommerce Catalog : 3',
                                'WhatsApp – Webhook Workflow : 3',
                                'WhatsApp – WordPress/Shopify Integration : 3',
                                'Telegram – Native eCommerce Store: 6',
                                'Chat Widget: No Brand',
                                'Team Members 2',
                                'Live Chat – Advanced',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-[#00E785]/20 border border-[#00E785]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#00E785] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span>High-Volume WhatsApp & Telegram Broadcaster</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for WATI ($150 Agency - 3rd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isAgency && hoveredAgencyWati && (
                          <div
                            onMouseEnter={() => setHoveredAgencyWati(true)}
                            onMouseLeave={() => setHoveredAgencyWati(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[320px] sm:w-[370px] bg-[#0A101D]/98 border-2 border-[#00E785] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(0,231,133,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#00E785]" />

                            {/* Header with WATI badge and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00E785] text-slate-950 font-black text-xs uppercase shadow-xs">
                                  <span>💬</span>
                                  <span>WATI</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-emerald-950 text-[#00E785] border border-[#00E785]/40 text-[10px] font-mono font-bold uppercase">
                                  $150 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#00E785]">
                                18 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                              {[
                                'Subscribers 85K',
                                'Connect Account: 50',
                                'Number of Messages: 85K/ Month',
                                'Unlimited Bot Conditional Reply',
                                'Unlimited Bot Message Insight',
                                'Unlimited Input Flow Campaign',
                                'Unlimited Live Chat',
                                'Unlimited Broadcast',
                                'Unlimited Sequence Campaign',
                                'Unlimited Telegram – Group Management',
                                'Unlimited API Integration',
                                'WhatsApp – eCommerce Catalog: 12',
                                'WhatsApp – Webhook Workflow: 12',
                                'WhatsApp – WordPress/Shopify Integration: 12',
                                'Telegram – Native eCommerce Store: 22',
                                'Chat Widget: No Brand',
                                'Team Members: 10',
                                'Live Chat – Advanced',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-[#00E785]/20 border border-[#00E785]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#00E785] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Enterprise WhatsApp & Telegram Multi-Brand Suite</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 6. Bitly */}
                      <div
                        onMouseEnter={() => {
                          if (isStarter) setHoveredBitly(true);
                          if (isCenter) setHoveredGrowthBitly(true);
                          if (isAgency) setHoveredAgencyBitly(true);
                        }}
                        onMouseLeave={() => {
                          if (isStarter) setHoveredBitly(false);
                          if (isCenter) setHoveredGrowthBitly(false);
                          if (isAgency) setHoveredAgencyBitly(false);
                        }}
                        onClick={() => {
                          if (isStarter) setHoveredBitly(prev => !prev);
                          if (isCenter) setHoveredGrowthBitly(prev => !prev);
                          if (isAgency) setHoveredAgencyBitly(prev => !prev);
                        }}
                        className={`relative flex flex-col items-center justify-center text-center p-3.5 rounded-2xl transition-all shadow-xs ${
                          isStarter
                            ? hoveredBitly
                              ? 'bg-slate-900 border-2 border-[#EE6123] shadow-[0_0_25px_rgba(238,97,35,0.35)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#EE6123]/80 hover:bg-slate-900 cursor-pointer group'
                            : isCenter
                            ? hoveredGrowthBitly
                              ? 'bg-slate-900 border-2 border-[#EE6123] shadow-[0_0_25px_rgba(238,97,35,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#EE6123]/80 hover:bg-slate-900 cursor-pointer group'
                            : isAgency
                            ? hoveredAgencyBitly
                              ? 'bg-slate-900 border-2 border-[#EE6123] shadow-[0_0_25px_rgba(238,97,35,0.45)] cursor-pointer'
                              : 'bg-slate-950/80 border border-slate-800 hover:border-[#EE6123]/80 hover:bg-slate-900 cursor-pointer group'
                            : 'bg-slate-950/70 border border-slate-800/80 hover:border-slate-700/80'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="px-3.5 py-1 rounded-md bg-slate-900 border border-slate-700 shadow-xs">
                            <span className="font-black tracking-tight text-sm text-[#EE6123] font-mono">
                              bitly
                            </span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {isStarter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-950 text-orange-300 border border-orange-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isCenter && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-950 text-orange-300 border border-orange-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                          {isAgency && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-950 text-orange-300 border border-orange-500/40 animate-pulse">
                              Hover Specs ⚡
                            </span>
                          )}
                        </div>
                        <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                          {tier.toolAllowances.bitly}
                        </span>

                        {/* Floating Popup for Bitly ($15 Starter) displayed BELOW the box with BIGGER WORDS & ANIMATED APPROACH */}
                        {isStarter && hoveredBitly && (
                          <div
                            onMouseEnter={() => setHoveredBitly(true)}
                            onMouseLeave={() => setHoveredBitly(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[310px] sm:w-[360px] bg-[#0A101D]/98 border-2 border-[#EE6123] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(238,97,35,0.4)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#EE6123]" />

                            {/* Header with Bitly badge and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="px-2.5 py-1 rounded bg-[#EE6123] text-white font-black text-xs font-mono uppercase shadow-xs">
                                  <span>bitly</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-500/40 text-[10px] font-mono font-bold uppercase">
                                  $15 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#EE6123]">
                                10 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3">
                              {[
                                '1 Projects',
                                '250 Shortened Links',
                                '5 Biolink Pages',
                                '2 QR Codes',
                                '2 Pixels',
                                '5 File Links',
                                '5 Vcard Links',
                                '5 Event Links',
                                '2 Biolink Blocks',
                                '90 days statistics retention',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-[#EE6123]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#EE6123] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-orange-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                                <span>Advanced Link Management & QR Biolinks</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for Bitly ($35 Growth - 2nd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isCenter && hoveredGrowthBitly && (
                          <div
                            onMouseEnter={() => setHoveredGrowthBitly(true)}
                            onMouseLeave={() => setHoveredGrowthBitly(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[320px] sm:w-[370px] bg-[#0A101D]/98 border-2 border-[#EE6123] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(238,97,35,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#EE6123]" />

                            {/* Header with Bitly badge and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="px-2.5 py-1 rounded bg-[#EE6123] text-white font-black text-xs font-mono uppercase shadow-xs">
                                  <span>bitly</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-500/40 text-[10px] font-mono font-bold uppercase">
                                  $35 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#EE6123]">
                                14 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                              {[
                                '20 Projects',
                                '2K Shortened Links',
                                '15 Biolink Pages',
                                '25 QR Codes',
                                '25 Pixels',
                                '15 File Links',
                                '15 Vcard Links',
                                '15 Event Links',
                                '3 Biolink Blocks',
                                'Custom Domains-1',
                                '90 days statistics retention',
                                'Custom Branding',
                                'No Ads',
                                'API Access',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-[#EE6123]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#EE6123] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-orange-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                                <span>Enterprise URL Shortening & Branded QR</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}

                        {/* Floating Popup for Bitly ($150 Agency - 3rd price box) displayed BELOW with BIGGER WORDS & ANIMATED APPROACH */}
                        {isAgency && hoveredAgencyBitly && (
                          <div
                            onMouseEnter={() => setHoveredAgencyBitly(true)}
                            onMouseLeave={() => setHoveredAgencyBitly(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[320px] sm:w-[370px] bg-[#0A101D]/98 border-2 border-[#EE6123] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(238,97,35,0.45)] z-50 text-left backdrop-blur-md animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200"
                          >
                            {/* Upward pointing triangle/arrow */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[#EE6123]" />

                            {/* Header with Bitly badge and package indication */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-800">
                              <div className="flex items-center gap-2">
                                <div className="px-2.5 py-1 rounded bg-[#EE6123] text-white font-black text-xs font-mono uppercase shadow-xs">
                                  <span>bitly</span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-500/40 text-[10px] font-mono font-bold uppercase">
                                  $150 Plan Included
                                </span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#EE6123]">
                                14 Specs
                              </span>
                            </div>

                            {/* Bigger words matching website animated approach */}
                            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                              {[
                                '500 Projects',
                                '30K Shortened Links',
                                '250 Biolink Pages',
                                '250 QR Codes',
                                '250 Pixels',
                                '120 File Links',
                                '120 Vcard Links',
                                '120 Event Links',
                                'All Biolink blocks',
                                '10 Custom Domains',
                                '180 days statistics retention',
                                'Custom Branding',
                                'No Ads',
                                'API Access',
                              ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-[#EE6123]/80 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#EE6123] stroke-[3]" />
                                  </div>
                                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom guarantee footer */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                              <div className="flex items-center gap-1.5 text-orange-400 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                                <span>Agency Enterprise Link Infrastructure & 10 Domains</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">2-Min Replacement</span>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Trust footer under card */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
                      <ShieldCheck className={`w-4 h-4 ${isCenter ? 'text-amber-400' : 'text-emerald-400'}`} />
                      <span>100% Satisfaction · 2-Min Replacement</span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}

          {/* Interactive Specification Popup Modal/Flyout for the 1st Price Package ($15/mo Starter Pack) */}
          {activeStarterTool && STARTER_SOFTWARE_SPECS[activeStarterTool] && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
              onClick={() => setActiveStarterTool(null)}
            >
              <div
                className="relative w-full max-w-md bg-[#0C121E] border-2 border-emerald-400/80 rounded-3xl p-6 sm:p-7 shadow-[0_0_50px_rgba(16,185,129,0.35)] text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveStarterTool(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/90 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Close specification popup"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header with tool badge & package indicator */}
                <div className="mb-4 pr-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono font-bold uppercase tracking-wider">
                      $15/mo Starter Pack
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Included Specs
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                    {STARTER_SOFTWARE_SPECS[activeStarterTool].name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {STARTER_SOFTWARE_SPECS[activeStarterTool].tagline}
                  </p>
                </div>

                {/* Full List of Additional Features from the Uploaded Image */}
                <div className="py-3 px-4 rounded-2xl bg-slate-950/90 border border-slate-800 my-4 max-h-[60vh] overflow-y-auto space-y-2.5 divide-y divide-slate-800/60">
                  {STARTER_SOFTWARE_SPECS[activeStarterTool].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium ${
                        idx > 0 ? 'pt-2.5' : 'pt-0.5'
                      }`}
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom confirmation note */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Active in $15/mo Starter Pack</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStarterTool(null)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Got It
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Guarantee Banner below pricing */}
        <div className="mt-14 text-center text-xs text-slate-300 max-w-3xl mx-auto space-y-1.5 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <p className="font-semibold text-emerald-400 flex items-center justify-center gap-1.5 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Satisfaction Guarantee · All 6 Software Licenses Direct From Original Companies</span>
          </p>
          <p className="text-slate-400 leading-relaxed">
            Strictly zero piracy. If you encounter any difficulties operating the tools or if any software is not working, we replace it immediately within 2 minutes — no questions asked.
          </p>
        </div>

      </div>
    </section>
  );
};
