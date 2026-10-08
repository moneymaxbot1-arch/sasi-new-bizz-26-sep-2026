import React, { useState, useEffect } from 'react';
import { 
  Workflow, 
  Clock, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  Server, 
  Activity, 
  Flame, 
  Link2, 
  ShieldCheck, 
  TrendingUp, 
  PhoneCall, 
  ShoppingBag, 
  RefreshCw, 
  ChevronRight, 
  SlidersHorizontal,
  Bot,
  AlertCircle
} from 'lucide-react';
import { getActiveCurrency, formatLocalizedPrice, CurrencyConfig } from '../utils/currencyUtils';

interface DailyWorkflowAutomationShowcaseProps {
  onClaimClick: () => void;
}

interface WorkflowCardData {
  id: string;
  timeSlot: string;
  category: string;
  title: string;
  headline: string;
  dailyActivityAutomated: string;
  manualPainPoint: string;
  photoUrl: string;
  photoAlt: string;
  toolsUsed: { name: string; role: string; color: string }[];
  timeSaved: string;
  revenueImpact: string;
  steps: {
    number: string;
    stage: string;
    action: string;
    detail: string;
  }[];
  interactiveMockup: {
    type: 'bitly-traffic' | 'wati-whatsapp' | 'fomo-proof' | 'mailchimp-recovery' | 'uptimerobot-sentry';
    badge: string;
    headline: string;
  };
  inDepthExplanation: string;
}

const WORKFLOW_CARDS: WorkflowCardData[] = [
  {
    id: 'morning-traffic',
    timeSlot: '08:00 AM – 10:30 AM',
    category: 'Traffic & Attribution',
    title: 'Morning Multi-Channel Lead Inflow & Instant Attribution',
    headline: 'Zero Lost Clicks: Every Ad, Social Post & Flyer QR Code Auto-Tracked',
    dailyActivityAutomated: 'Capturing, routing, and measuring inbound leads across Instagram, TikTok, Google Ads, and printed brochures without manually creating spreadsheets.',
    manualPainPoint: 'Previously: Owners spent 2 hours every morning trying to guess which ad drove sales, wrestling with broken URL parameters, and losing 40% of traffic to sluggish server response times.',
    photoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Digital marketing analytics dashboard showing real-time traffic automation and link tracking',
    toolsUsed: [
      { name: 'Bitly', role: 'Custom Domain Links & Dynamic QR', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
      { name: 'Hostinger', role: 'Sub-Second Global Cloud Edge', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' }
    ],
    timeSaved: '2.5 Hours Daily',
    revenueImpact: '+34% Click-Through & Conversion',
    steps: [
      {
        number: '01',
        stage: 'Inbound Scan / Click',
        action: 'Prospect scans QR or clicks branded bio link',
        detail: 'System dynamically resolves custom domain (e.g., bizz2u.link/exclusive) in under 12 milliseconds.'
      },
      {
        number: '02',
        stage: 'Edge Routing & Speed',
        action: 'Hostinger serves ultra-fast sales landing page',
        detail: 'Sub-second server response (TTFB < 280ms) eliminates page abandonments and ensures 100% SEO compliance.'
      },
      {
        number: '03',
        stage: 'Autonomous Attribution',
        action: 'UTM source, device, and campaign auto-logged',
        detail: 'All referrer metadata directly populates the CRM database without any manual copy-paste.'
      }
    ],
    interactiveMockup: {
      type: 'bitly-traffic',
      badge: 'LIVE TRAFFIC PIPELINE · BITLY + HOSTINGER',
      headline: 'Real-Time Dynamic Traffic Routing'
    },
    inDepthExplanation: 'How it operates 100% unattended: When marketing campaigns launch, Bitly automatically generates custom-branded short links and scannable dynamic QR codes for physical flyers, store displays, and digital ads. When prospects click, Hostinger cloud infrastructure delivers the target sales funnel in <1 second. The owner never has to manually generate tracking spreadsheets—conversion metrics sync automatically.'
  },
  {
    id: 'midday-whatsapp',
    timeSlot: '11:00 AM – 02:00 PM',
    category: 'Conversational CRM',
    title: 'Midday 2-Way WhatsApp Instant Inquiry Qualification',
    headline: '3-Second Response Time: Inbound Leads Answered While You Work',
    dailyActivityAutomated: 'Answering repetitive pricing inquiries, sharing digital catalogs, booking discovery consultations, and tagging qualified VIP buyers.',
    manualPainPoint: 'Previously: Business owners constantly got interrupted during lunch to reply to 30+ identical WhatsApp messages manually, losing leads who went to competitors after waiting 20 minutes.',
    photoUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Entrepreneur on smartphone managing automated business operations with high customer engagement',
    toolsUsed: [
      { name: 'WATi', role: 'Verified WhatsApp Business Automation', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { name: 'Bitly', role: 'Deep-Linking To 1-Click WhatsApp', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40' }
    ],
    timeSaved: '3.5 Hours Daily',
    revenueImpact: '98% Open Rate · 10x Response Rate',
    steps: [
      {
        number: '01',
        stage: 'Inquiry Trigger',
        action: 'Customer taps WhatsApp button on website or social ad',
        detail: 'WATi catches incoming mobile phone number with verified official green badge sender authority.'
      },
      {
        number: '02',
        stage: 'Conversational AI Triage',
        action: 'Automated 3-second smart chatbot dialog responds',
        detail: 'Sends catalog PDF, asks for buyer budget/industry, and guides prospect to interactive choice buttons.'
      },
      {
        number: '03',
        stage: 'Booking & Triage',
        action: 'Auto-schedules appointment or alerts sales team',
        detail: 'High-ticket buyers get marked "HOT LEAD" and forwarded straight to senior staff with full conversation transcript.'
      }
    ],
    interactiveMockup: {
      type: 'wati-whatsapp',
      badge: 'OFFICIAL WHATSAPP BUSINESS · 98% OPEN RATE',
      headline: 'Autonomous 3-Second Lead Qualification'
    },
    inDepthExplanation: 'How it operates 100% unattended: Prospects land on your WhatsApp channel directly via Bitly deep links. WATi immediately takes over, answering questions 24/7 without delays. It presents interactive menu pills ("View Pricing", "Schedule Call", "Request Quote"), captures email and phone, and logs everything to your CRM while your staff is eating lunch.'
  },
  {
    id: 'afternoon-fomo',
    timeSlot: '02:30 PM – 05:30 PM',
    category: 'On-Site Social Proof',
    title: 'Afternoon Live Buyer Urgency & Real-Time Checkout Surges',
    headline: 'Turn Cold Browsers Into Paying Buyers With Live Social Proof',
    dailyActivityAutomated: 'Displaying authentic real-time purchase activity, active buyer counters, and limited-time offer scarcity on all product & checkout pages.',
    manualPainPoint: 'Previously: More than 70% of website visitors bounced because the website felt "empty" or abandoned, causing prospects to hesitate and doubt company credibility.',
    photoUrl: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Modern e-commerce checkout transaction processing on mobile and tablet with verified customer proof',
    toolsUsed: [
      { name: 'Fomo', role: 'Real-Time Social Proof Popups', color: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
      { name: 'Hostinger', role: 'Fast CDN Edge Cache For Popups', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' }
    ],
    timeSaved: 'Full-Time Sales Rep Replaced',
    revenueImpact: '+34% Direct Lift In Completed Checkouts',
    steps: [
      {
        number: '01',
        stage: 'Live Store Sync',
        action: 'Fomo syncs with Stripe / PayPal / Shopify webhook',
        detail: 'Pulls verified purchase events: customer name, city/country, and exact product bundle ordered.'
      },
      {
        number: '02',
        stage: 'Contextual Display',
        action: 'Subtle toast notifications pop up on visitor screens',
        detail: 'Visitors see authentic proof: "🔥 Amanda L. from Singapore just upgraded to the 6-Tool Suite 3 mins ago".'
      },
      {
        number: '03',
        stage: 'Urgency & Scarcity',
        action: 'Live viewer counter & countdown timer active',
        detail: 'Shows "38 people viewing this package right now" to compel hesitant shoppers to finalize payment before midnight.'
      }
    ],
    interactiveMockup: {
      type: 'fomo-proof',
      badge: 'VERIFIED BUYER STREAM · FOMO ACCELERATOR',
      headline: 'Authentic 24/7 Social Proof Engine'
    },
    inDepthExplanation: 'How it operates 100% unattended: Fomo works quietly in the background as your digital persuasion engine. The moment any customer in any region purchases a plan, an event is logged and projected non-intrusively to active browsers. This acts as instant word-of-mouth validation, increasing checkout completion by +34% without running extra ads.'
  },
  {
    id: 'evening-recovery',
    timeSlot: '06:00 PM – 09:30 PM',
    category: 'Abandoned Cart Recovery',
    title: 'Evening Autonomous Omnichannel Cart Recovery & Nurturing',
    headline: 'Reclaim 30% of Lost Carts Automatically While You Have Dinner',
    dailyActivityAutomated: 'Detecting checkout drop-offs, dispatching 1-hour email reminders with personalized cart previews, and sending follow-up WhatsApp discount alerts.',
    manualPainPoint: 'Previously: E-commerce and agency owners lost 68% of customers who typed their email at checkout but got distracted before clicking pay, with zero automated follow-up system.',
    photoUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Business woman analyzing automated email sequences and abandoned cart recovery pipelines',
    toolsUsed: [
      { name: 'Mailchimp', role: 'Visual Drip Automation & Abandoned Cart Loops', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40' },
      { name: 'WATi', role: 'Follow-Up WhatsApp Cart Recovery Ping', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' }
    ],
    timeSaved: '2.0 Hours Daily',
    revenueImpact: 'Recovers 28% to 35% of Lost Revenue',
    steps: [
      {
        number: '01',
        stage: 'Abandonment Trigger',
        action: 'Prospect exits checkout step with unpaid cart',
        detail: 'Mailchimp captures email session and starts a 45-minute countdown recovery sequence.'
      },
      {
        number: '02',
        stage: 'Email Sequence #1',
        action: 'Dynamic personalized email dispatched at 45m',
        detail: 'Displays exact abandoned items, 1-click restore checkout button, and reassurance guarantee badges.'
      },
      {
        number: '03',
        stage: 'Omnichannel Fallback',
        action: 'WATi sends WhatsApp reminder if unread in 18h',
        detail: 'Sends a conversational WhatsApp text with a 1-time 10% discount link, recovering up to 35% of abandoned carts.'
      }
    ],
    interactiveMockup: {
      type: 'mailchimp-recovery',
      badge: 'AUTOMATED LIFECYCLE · MAILCHIMP + WATI',
      headline: 'Closed-Loop Revenue Rescue Pipeline'
    },
    inDepthExplanation: 'How it operates 100% unattended: When buyers hesitate and abandon checkout, the system automatically intervenes. Mailchimp sends a branded recovery email showing their exact saved cart items. If unopened, WATi follows up via WhatsApp with an exclusive coupon link. This dual-channel safety net routinely salvages thousands in revenue every single month.'
  },
  {
    id: 'overnight-sentry',
    timeSlot: '10:00 PM – 07:30 AM',
    category: '24/7 Revenue Protection',
    title: 'Overnight 24/7 Global Server, API & Checkout Health Sentry',
    headline: 'Sleep Peacefully: Zero Silent Server Downtime & Instant Alerting',
    dailyActivityAutomated: 'Pinging website URLs, Stripe API gateways, SSL certificate lifespans, and DNS records every 30-60 seconds from global monitoring nodes.',
    manualPainPoint: 'Previously: Servers crashed at 2:00 AM, payment processors malfunctioned, or SSL certificates expired silently. Owners only discovered it when angry customers emailed 8 hours later.',
    photoUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'High-reliability enterprise cloud server racks and automated continuous network health monitoring',
    toolsUsed: [
      { name: 'UptimeRobot', role: '30-Second Ping & Instant SMS/Webhook Alerts', color: 'bg-teal-500/20 text-teal-300 border-teal-500/40' },
      { name: 'Hostinger', role: '99.99% Server SLA & Auto-Failover Edge', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' }
    ],
    timeSaved: '100% Peace Of Mind (24/7 Guard)',
    revenueImpact: 'Zero Silent Revenue Loss & 99.99% Uptime',
    steps: [
      {
        number: '01',
        stage: 'Continuous Ping',
        action: 'UptimeRobot polls site every 30 seconds globally',
        detail: 'Simultaneous HTTP(s) requests sent from Singapore, Dallas, Frankfurt, and Tokyo nodes.'
      },
      {
        number: '02',
        stage: 'API & Gateway Check',
        action: 'Verifies Stripe/PayPal checkout endpoints are responding',
        detail: 'Detects HTTP 500/502/504 errors and slow latency spikes before customers encounter payment failure.'
      },
      {
        number: '03',
        stage: 'Instant Escalation',
        action: 'Dispatches emergency SMS, Telegram & WhatsApp alert',
        detail: 'Wakes up technical team in <60 seconds if downtime occurs, preventing thousands of dollars in lost overnight sales.'
      }
    ],
    interactiveMockup: {
      type: 'uptimerobot-sentry',
      badge: 'ENTERPRISE SENTRY · UPTIMEROBOT 24/7',
      headline: 'Autonomous Global Infrastructure Sentinel'
    },
    inDepthExplanation: 'How it operates 100% unattended: While you and your team sleep, UptimeRobot and Hostinger maintain continuous vigilant watch over every customer touchpoint. If any gateway slows down or an SSL certificate approaches expiration, automated alerts trigger instantly to ensure your sales engine never drops offline.'
  }
];

export const DailyWorkflowAutomationShowcase: React.FC<DailyWorkflowAutomationShowcaseProps> = ({ onClaimClick }) => {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>(WORKFLOW_CARDS[0].id);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyConfig>(getActiveCurrency);
  const [timelineMode, setTimelineMode] = useState<'automated' | 'manual'>('automated');

  useEffect(() => {
    const handleCurrencyChange = () => {
      setCurrentCurrency(getActiveCurrency());
    };
    window.addEventListener('bizz2u_currency_changed', handleCurrencyChange);
    window.addEventListener('bizz2u_language_changed', handleCurrencyChange);
    return () => {
      window.removeEventListener('bizz2u_currency_changed', handleCurrencyChange);
      window.removeEventListener('bizz2u_language_changed', handleCurrencyChange);
    };
  }, []);

  const activeWorkflow = WORKFLOW_CARDS.find(w => w.id === selectedWorkflowId) || WORKFLOW_CARDS[0];

  const filteredCards = activeFilter === 'all' 
    ? WORKFLOW_CARDS 
    : WORKFLOW_CARDS.filter(w => w.id === activeFilter);

  return (
    <section 
      id="daily-workflow-automation" 
      className="py-20 sm:py-28 bg-[#070B14] border-t border-slate-800/90 relative overflow-hidden text-slate-100"
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[350px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[350px] bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges & Main Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-bold tracking-wide mb-4 shadow-[0_0_25px_rgba(52,211,153,0.2)]">
            <Workflow className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>24/7 AUTOPILOT ARCHITECTURE FOR BUSINESS OWNERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 text-balance">
            How Business Owners Automate <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              All Their Daily Business Activities
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            From morning lead capture to midnight checkout monitoring — see the exact visual step-by-step automation workflows that replace <strong className="text-emerald-300">40+ hours of manual grind</strong> each week. Powered entirely by the 6-tool suite starting at just <span className="text-white font-bold">{formatLocalizedPrice(15, currentCurrency)}/month</span>.
          </p>

          {/* Quick Filter Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg font-black'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>All 5 Daily Workflows</span>
            </button>
            {WORKFLOW_CARDS.map(w => (
              <button
                key={w.id}
                onClick={() => {
                  setActiveFilter(w.id);
                  setSelectedWorkflowId(w.id);
                }}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === w.id || (activeFilter === 'all' && selectedWorkflowId === w.id)
                    ? 'bg-slate-800 text-white border border-emerald-400/60 shadow-md'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-slate-200'
                }`}
              >
                <span>{w.timeSlot.split('–')[0].trim()}</span>
                <span className="hidden md:inline">· {w.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* WORKFLOW CARDS GRID: Photos + Live Simulated UI Mockups + In-Depth Step Breakdown */}
        <div className="space-y-12">
          {filteredCards.map((card, idx) => {
            const isSelected = card.id === selectedWorkflowId;
            return (
              <div
                key={card.id}
                id={`workflow-${card.id}`}
                className={`bg-slate-900/90 border rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl ${
                  isSelected 
                    ? 'border-emerald-500/60 shadow-[0_0_40px_rgba(52,211,153,0.15)] ring-1 ring-emerald-500/40' 
                    : 'border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Card Top Banner: Time Slot, Category, Time Saved & Tools */}
                <div className="bg-slate-850/90 border-b border-slate-800 px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      {card.timeSlot}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 font-mono">
                      {card.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      ⚡ {card.timeSaved}
                    </span>
                    <span className="text-xs font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                      📈 {card.revenueImpact}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    
                    {/* LEFT COLUMN (7 Cols): Titles, Daily Activities, Step Diagram, and In-depth Explanation */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1.5">
                          STAGE 0{idx + 1} DAILY WORKFLOW AUTOMATION
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-emerald-300 mt-2">
                          {card.headline}
                        </p>
                      </div>

                      {/* Daily Activity Solved vs Manual Grind Box */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#0B101D] border border-slate-800">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                            <span>Manual Nightmare Solved:</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {card.manualPainPoint}
                          </p>
                        </div>
                        <div className="space-y-1.5 sm:border-l sm:border-slate-800 sm:pl-4">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>100% Autopilot Reality:</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {card.dailyActivityAutomated}
                          </p>
                        </div>
                      </div>

                      {/* Step-by-Step Autonomous Execution Chain */}
                      <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                          <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Step-By-Step Automated Execution Sequence:</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {card.steps.map((step) => (
                            <div 
                              key={step.number} 
                              className="p-3.5 rounded-xl bg-slate-850/80 border border-slate-800 hover:border-slate-700 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/60">
                                    STEP {step.number}
                                  </span>
                                  <span className="text-[10px] text-slate-400 font-medium">
                                    {step.stage}
                                  </span>
                                </div>
                                <h4 className="text-xs font-bold text-white mb-1">
                                  {step.action}
                                </h4>
                              </div>
                              <p className="text-[11px] text-slate-300 leading-tight mt-2">
                                {step.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* In-Depth Workflow Automation Explanation */}
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/30">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1.5">
                          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>In-Depth Workflow Architecture & Business Owner Impact:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {card.inDepthExplanation}
                        </p>
                      </div>

                      {/* Tools Responsible Tags & Trigger CTA */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-mono text-slate-400 font-semibold">
                            Integrated Tools:
                          </span>
                          {card.toolsUsed.map((tool, tIdx) => (
                            <span 
                              key={tIdx} 
                              className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${tool.color}`}
                            >
                              {tool.name} <span className="text-[10px] opacity-75">({tool.role})</span>
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={onClaimClick}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 text-xs font-black hover:opacity-95 transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Get This Automated</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* RIGHT COLUMN (5 Cols): High-Quality Authentic Photo & Real-Time Software UI Overlay Mockup */}
                    <div className="lg:col-span-5 space-y-4">
                      {/* Photo Container with Realistic Photographic Visual */}
                      <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                        <img 
                          src={card.photoUrl} 
                          alt={card.photoAlt}
                          className="w-full h-56 sm:h-64 object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B101D] via-[#0B101D]/40 to-transparent" />
                        
                        {/* Photo overlay badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700 text-xs font-bold text-white shadow-lg">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span>{card.category} Live Environment</span>
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800">
                          <span className="font-semibold">{card.headline}</span>
                          <span className="text-emerald-400 font-mono font-bold">24/7 Active</span>
                        </div>
                      </div>

                      {/* Interactive Live Simulated UI Mockup (Actual Software Representation) */}
                      <div className="p-4 rounded-2xl bg-[#090E17] border border-slate-800 space-y-3 font-sans">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-[11px] font-mono font-bold text-slate-300">
                              {card.interactiveMockup.badge}
                            </span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                            AUTO-SYNCED
                          </span>
                        </div>

                        {/* Custom Mockup Visuals based on tool type */}
                        {card.interactiveMockup.type === 'bitly-traffic' && (
                          <div className="space-y-2 text-xs">
                            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Link2 className="w-4 h-4 text-amber-400 shrink-0" />
                                <span className="font-mono text-slate-200">bizz2u.link/summer-deal</span>
                              </div>
                              <span className="text-emerald-400 font-bold font-mono">+1,842 clicks</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                              <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                                <div className="text-slate-400">Hostinger TTFB:</div>
                                <div className="font-mono font-bold text-emerald-300">284ms (Superfast)</div>
                              </div>
                              <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                                <div className="text-slate-400">Conversion Rate:</div>
                                <div className="font-mono font-bold text-cyan-300">14.8% Opt-in</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {card.interactiveMockup.type === 'wati-whatsapp' && (
                          <div className="space-y-2 text-xs">
                            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 space-y-2">
                              <div className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-emerald-400" />
                                <span className="font-bold text-white">WhatsApp Verified Sender</span>
                                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono">3s Reply</span>
                              </div>
                              <div className="bg-emerald-950/40 p-2 rounded-lg border border-emerald-800/40 text-[11px] text-emerald-200">
                                "Hi David! 👋 Your 2026 Strategy Guide & VIP Discount have been dispatched. Would you like to schedule your site tour?"
                              </div>
                              <div className="flex gap-1.5">
                                <span className="px-2 py-1 bg-emerald-500 text-slate-950 font-bold text-[10px] rounded-md">
                                  [Book Site Visit]
                                </span>
                                <span className="px-2 py-1 bg-slate-800 text-slate-300 font-medium text-[10px] rounded-md">
                                  [Ask Pricing]
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {card.interactiveMockup.type === 'fomo-proof' && (
                          <div className="space-y-2 text-xs">
                            <div className="bg-gradient-to-r from-rose-950/40 to-slate-900 p-3 rounded-xl border border-rose-500/40 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <Flame className="w-5 h-5 text-rose-400 animate-bounce" />
                                <div>
                                  <div className="font-bold text-white text-[11px]">
                                    Marcus T. (Singapore)
                                  </div>
                                  <div className="text-[10px] text-slate-300">
                                    Purchased 6-Tool Suite · 3 mins ago
                                  </div>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800">
                                Verified
                              </span>
                            </div>
                            <div className="flex items-center justify-between px-2 text-[11px] text-slate-400">
                              <span>Live on-site buyers right now:</span>
                              <span className="font-bold font-mono text-amber-300">42 active shoppers</span>
                            </div>
                          </div>
                        )}

                        {card.interactiveMockup.type === 'mailchimp-recovery' && (
                          <div className="space-y-2 text-xs">
                            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 space-y-1.5">
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-yellow-400 font-bold flex items-center gap-1">
                                  <Mail className="w-3.5 h-3.5" />
                                  Abandoned Cart Flow
                                </span>
                                <span className="font-mono text-emerald-400 font-bold">+31.4% Recovered</span>
                              </div>
                              <div className="p-2 bg-slate-950 rounded border border-slate-800 text-[10px] text-slate-300 space-y-1">
                                <div>Trigger: Cart Abandoned &gt; $150 (Auto-Send at 45 min)</div>
                                <div className="text-emerald-300 font-semibold">Fallback: WhatsApp Ping with 10% Coupon if unopened</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {card.interactiveMockup.type === 'uptimerobot-sentry' && (
                          <div className="space-y-2 text-xs">
                            <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1.5 font-bold text-white">
                                  <Activity className="w-4 h-4 text-teal-400" />
                                  Global Server Health
                                </span>
                                <span className="font-mono text-emerald-400 font-black text-xs">
                                  100.0% UPTIME
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                                <span>Pinging every 30s:</span>
                                <span className="text-teal-300">SG (8ms) · US (120ms) · EU (140ms)</span>
                              </div>
                              <div className="p-1.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-[10px] text-emerald-300 text-center font-bold">
                                🛡️ SSL Valid (86 Days) · 0 Incidents · Instant SMS Enabled
                              </div>
                            </div>
                          </div>
                        )}

                      </div>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 24-HOUR EXECUTIVE TIMELINE: BEFORE vs AFTER AUTOMATION COMPARISON */}
        <div className="mt-16 bg-slate-900/95 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Executive Daily Life Comparison</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Your 24-Hour Day: Manual Hell vs. Complete Autopilot
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Compare a chaotic 14-hour manual workday with the streamlined freedom of running this 6-tool automated architecture.
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="inline-flex p-1.5 bg-slate-950 border border-slate-800 rounded-2xl shrink-0">
              <button
                onClick={() => setTimelineMode('automated')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  timelineMode === 'automated'
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>With 6-Tool Suite (Autopilot)</span>
              </button>
              <button
                onClick={() => setTimelineMode('manual')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  timelineMode === 'manual'
                    ? 'bg-rose-500 text-white shadow-md font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Without Suite (Manual Grind)</span>
              </button>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-8">
            {[
              {
                time: '08:00 AM',
                task: 'Campaign & Traffic Launch',
                auto: 'Bitly + Hostinger auto-route & log UTM attribution in <1s.',
                manual: '2 hours lost manually formatting links and diagnosing slow load speeds.'
              },
              {
                time: '11:30 AM',
                task: 'Inbound Lead Qualification',
                auto: 'WATi chatbot answers 40+ WhatsApp inquiries in 3 seconds.',
                manual: 'Owner answers the same 5 questions repeatedly on phone while lunch gets cold.'
              },
              {
                time: '03:15 PM',
                task: 'Checkout & Social Proof',
                auto: 'Fomo streams verified buyer proof, pushing checkout rate +34%.',
                manual: 'Browsers hesitate on silent website with zero social proof and bounce away.'
              },
              {
                time: '07:00 PM',
                task: 'Abandoned Cart Recovery',
                auto: 'Mailchimp + WATi automatically recover 31.4% of abandoned checkouts.',
                manual: 'Unpaid checkouts vanish forever into the void with zero follow-up.'
              },
              {
                time: '02:00 AM',
                task: 'Server & Payment Sentry',
                auto: 'UptimeRobot guards endpoints every 30s. Owner sleeps peacefully.',
                manual: 'Silent server crash goes unnoticed until furious customers leave 1-star reviews.'
              }
            ].map((node, nIdx) => (
              <div 
                key={nIdx} 
                className={`p-4 rounded-2xl border transition-all ${
                  timelineMode === 'automated'
                    ? 'bg-[#0B1220] border-emerald-500/30 hover:border-emerald-500/60'
                    : 'bg-[#18090C] border-rose-500/30 hover:border-rose-500/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {node.time}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    timelineMode === 'automated'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-rose-500/20 text-rose-300'
                  }`}>
                    {timelineMode === 'automated' ? 'AUTOPILOT' : 'MANUAL GRIND'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {node.task}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {timelineMode === 'automated' ? node.auto : node.manual}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Result: 4.5+ Hours Reclaimed Every Day & +34% Higher Conversion
                </div>
                <div className="text-xs text-slate-400">
                  All 6 software licenses bundled into one unified bill starting from {formatLocalizedPrice(15, currentCurrency)}/month.
                </div>
              </div>
            </div>

            <button
              onClick={onClaimClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Automate Your Business Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
