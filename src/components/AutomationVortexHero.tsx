import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Zap, 
  DollarSign, 
  CheckCircle2, 
  Play, 
  Pause, 
  Flame, 
  Smile, 
  ShieldCheck, 
  Activity,
  Layers,
  BarChart3
} from 'lucide-react';

interface AutomationVortexHeroProps {
  onClaimClick: () => void;
}

interface ToolNode {
  id: string;
  name: string;
  category: string;
  monthlyPrice: number;
  color: string;
  glowColor: string;
  bgGradient: string;
  badge: string;
  iconText: string;
  roleDescription: string;
  benefit: string;
  angle: number; // in degrees around the circle
}

const TOOLS: ToolNode[] = [
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    category: 'Email Marketing',
    monthlyPrice: 162,
    color: '#FFE01B',
    glowColor: 'rgba(255, 224, 27, 0.4)',
    bgGradient: 'from-amber-500/20 to-yellow-500/10',
    badge: 'Email Drip Bot',
    iconText: 'MC',
    roleDescription: 'Automated Drip Sequences & Abandoned Cart Recovery',
    benefit: '+310% repeat sales',
    angle: 0
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'Web Hosting',
    monthlyPrice: 9,
    color: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    bgGradient: 'from-violet-500/20 to-indigo-500/10',
    badge: 'Fast Cloud SSD',
    iconText: 'H',
    roleDescription: '0.8s High-Speed Cloud SSD Web Server & Free SSL',
    benefit: 'Sub-second speed',
    angle: 60
  },
  {
    id: 'fomo',
    name: 'Fomo',
    category: 'Social Proof Marketing',
    monthlyPrice: 50,
    color: '#F97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    bgGradient: 'from-orange-500/20 to-amber-500/10',
    badge: 'Live Urgency Engine',
    iconText: 'FOMO',
    roleDescription: 'Real-Time Buyer Popups & Live Visitor Urgency Triggers',
    benefit: '+34% checkout lift',
    angle: 120
  },
  {
    id: 'wati',
    name: 'WATi',
    category: 'WhatsApp Marketing',
    monthlyPrice: 314,
    color: '#22C55E',
    glowColor: 'rgba(34, 197, 94, 0.4)',
    bgGradient: 'from-emerald-500/20 to-green-500/10',
    badge: 'WhatsApp CRM Bot',
    iconText: 'WATi',
    roleDescription: 'WhatsApp Broadcasts & 24/7 Automated Sales Chatbot',
    benefit: '98% open rates',
    angle: 180
  },
  {
    id: 'uptimerobot',
    name: 'UptimeRobot',
    category: 'Website Monitoring',
    monthlyPrice: 80,
    color: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    bgGradient: 'from-cyan-500/20 to-teal-500/10',
    badge: '24/7 Outage Guard',
    iconText: 'UR',
    roleDescription: 'Real-Time 30-Sec Health Checks & Instant SMS Outage Alerts',
    benefit: 'Zero silent loss',
    angle: 240
  },
  {
    id: 'bitly',
    name: 'Bitly',
    category: 'URL Shortener & QR',
    monthlyPrice: 35,
    color: '#FB923C',
    glowColor: 'rgba(251, 146, 60, 0.4)',
    bgGradient: 'from-amber-600/20 to-orange-500/10',
    badge: 'Click Attribution',
    iconText: 'bitly',
    roleDescription: 'Branded Short Links, Dynamic QR Codes & Conversion Tracking',
    benefit: '100% ad ROI clarity',
    angle: 300
  }
];

export const AutomationVortexHero: React.FC<AutomationVortexHeroProps> = ({ onClaimClick }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [hoveredTool, setHoveredTool] = useState<ToolNode | null>(null);

  // Smooth continuous ambient orbit rotation
  useEffect(() => {
    let animFrame: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      if (isAutoPlaying) {
        setRotationAngle(prev => (prev + delta * 14) % 360);
      }
      animFrame = requestAnimationFrame(loop);
    };

    animFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrame);
  }, [isAutoPlaying]);

  // Cycle through active tool highlights every 3.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % TOOLS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTool = hoveredTool || TOOLS[activeStep];
  const totalRetailMonthly = TOOLS.reduce((sum, t) => sum + t.monthlyPrice, 0); // $650

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#06080F] via-[#090D16] to-[#0B101D] border-b border-slate-800/80 py-12 lg:py-16">
      
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Hook */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide shadow-[0_0_20px_rgba(52,211,153,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>INTERACTIVE AUTOMATION VORTEX ENGINE</span>
            <span className="text-slate-500">·</span>
            <span className="text-amber-300 font-mono">6 TOOLS UNIFIED INTO 1</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] text-balance">
            World’s Most Powerful 6 Applications to Scale & Grow your Business Into{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              One Automated Sales Engine
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Instead of juggling 6 separate monthly invoices totaling <span className="line-through text-rose-400 font-bold font-mono">${totalRetailMonthly}/month</span>, see how our unified software combo runs your marketing, hosting, CRM, and conversions on autopilot for <span className="text-emerald-400 font-bold font-mono">only $15</span>.
          </p>

        </div>

        {/* Center Interactive Animation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Circular Fusion Arena */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative select-none">
            
            {/* Circular Orbit Canvas */}
            <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] flex items-center justify-center">
              
              {/* Outer decorative orbit rings */}
              <div className="absolute inset-0 rounded-full border border-slate-800/80 pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-dashed border-emerald-500/20 pointer-events-none animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-20 rounded-full border border-slate-800/60 pointer-events-none" />

              {/* Pulsing energy waves flowing toward center */}
              <div className="absolute inset-16 rounded-full bg-emerald-500/5 animate-ping pointer-events-none opacity-40" />

              {/* SVG Connecting Flow Lines from the 6 outer nodes to the center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                  <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {TOOLS.map((tool, i) => {
                  const rad = ((tool.angle + rotationAngle) * Math.PI) / 180;
                  const radius = 175; // px from center in 480px canvas
                  const cx = 240 + Math.cos(rad) * radius;
                  const cy = 240 + Math.sin(rad) * radius;
                  const isActive = currentTool.id === tool.id;

                  return (
                    <g key={tool.id}>
                      {/* Flow beam */}
                      <line
                        x1={cx}
                        y1={cy}
                        x2="240"
                        y2="240"
                        stroke={isActive ? tool.color : 'rgba(52, 211, 153, 0.25)'}
                        strokeWidth={isActive ? '2.5' : '1'}
                        strokeDasharray={isActive ? '4 3' : '2 4'}
                        className={isActive ? 'animate-[dash_1s_linear_infinite]' : ''}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* CENTER CIRCLE: The Unified $15 Automated Business Growth Hub with Excited Businessman */}
              <div 
                onClick={onClaimClick}
                className="relative z-20 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-slate-900 via-[#0a1420] to-[#041d15] border-4 border-emerald-400 p-2 shadow-[0_0_60px_rgba(52,211,153,0.4)] flex flex-col items-center justify-center text-center cursor-pointer transition-transform hover:scale-105 active:scale-95 group"
              >
                
                {/* Glowing Aura Ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-40 blur-md group-hover:opacity-75 transition-opacity" />

                <div className="relative z-10 flex flex-col items-center px-3">
                  
                  {/* Businessman Success Avatar / Badge */}
                  <div className="relative mb-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-amber-300 p-0.5 shadow-lg flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
                        {/* Excited Smiling Business Owner Icon Illustration */}
                        <div className="text-2xl sm:text-3xl select-none" role="img" aria-label="Happy Businessman">
                          🚀
                        </div>
                      </div>
                    </div>
                    {/* Urgency Badge */}
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-black text-[9px] uppercase shadow">
                      BOOSTING
                    </span>
                  </div>

                  {/* Core Value Text */}
                  <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                    6x Automation Hub
                  </div>

                  <div className="flex items-baseline justify-center gap-1 my-0.5">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-white tracking-tight">
                      $15
                    </span>
                    <span className="text-[11px] sm:text-xs text-emerald-400 font-semibold font-mono">
                      /month
                    </span>
                    <span className="text-[10px] sm:text-xs text-rose-300 line-through font-mono ml-1">
                      ${totalRetailMonthly}/mo
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-300 font-semibold line-clamp-1">
                    Starting Monthly Subscription
                  </div>

                  {/* Click trigger hint */}
                  <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[9px] font-bold group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                    <span>From $15/mo</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>

                </div>

              </div>

              {/* 6 ORBITING SATELLITE SOFTWARE CIRCLES (The 6 Software from the Pitcher) */}
              {TOOLS.map((tool, index) => {
                const rad = ((tool.angle + rotationAngle) * Math.PI) / 180;
                // Responsive orbit radius
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                const radius = isMobile ? 125 : 185; 

                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                const isSelected = currentTool.id === tool.id;

                return (
                  <div
                    key={tool.id}
                    onMouseEnter={() => {
                      setHoveredTool(tool);
                      setIsAutoPlaying(false);
                    }}
                    onMouseLeave={() => {
                      setHoveredTool(null);
                      setIsAutoPlaying(true);
                    }}
                    onClick={() => {
                      setActiveStep(index);
                      setHoveredTool(tool);
                    }}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      borderColor: isSelected ? tool.color : 'rgba(51, 65, 85, 0.8)',
                      boxShadow: isSelected ? `0 0 25px ${tool.glowColor}` : '0 10px 20px rgba(0,0,0,0.5)',
                    }}
                    className={`absolute z-30 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-900/95 backdrop-blur-md border-2 cursor-pointer flex flex-col items-center justify-center p-1 transition-all duration-200 hover:scale-115 active:scale-95 group ${
                      isSelected ? 'scale-110 z-40' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    {/* Tool Brand Avatar / Monogram */}
                    <div 
                      style={{ color: tool.color }}
                      className="text-xs sm:text-sm font-black tracking-tight"
                    >
                      {tool.iconText}
                    </div>

                    {/* Software Name */}
                    <span className="text-[9px] sm:text-[10px] font-bold text-white tracking-tight truncate max-w-[90%]">
                      {tool.name}
                    </span>

                    {/* Retail Monthly Price Tag matching uploaded picture */}
                    <span 
                      style={{ backgroundColor: `${tool.color}20`, color: tool.color }}
                      className="text-[8px] sm:text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full mt-0.5"
                    >
                      ${tool.monthlyPrice}/mo
                    </span>

                    {/* Mini pulse ring on active */}
                    {isSelected && (
                      <span 
                        style={{ borderColor: tool.color }}
                        className="absolute -inset-1.5 rounded-full border-2 animate-ping pointer-events-none opacity-50"
                      />
                    )}
                  </div>
                );
              })}

            </div>

            {/* Orbit Controls (Play/Pause & Direct Click Selectors) */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-750 transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                title={isAutoPlaying ? 'Pause rotation' : 'Resume rotation'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline font-mono text-[11px]">
                  {isAutoPlaying ? 'Pause Orbit' : 'Resume Orbit'}
                </span>
              </button>

              <div className="flex items-center gap-1.5">
                {TOOLS.map((tool, idx) => (
                  <button
                    key={tool.id}
                    onClick={() => {
                      setActiveStep(idx);
                      setHoveredTool(tool);
                    }}
                    style={{
                      backgroundColor: currentTool.id === tool.id ? tool.color : '#334155'
                    }}
                    className="w-2.5 h-2.5 rounded-full transition-all cursor-pointer hover:scale-125"
                    title={tool.name}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Telemetry & Happy Founder Business Impact Panel */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Focused Tool Card with Visual Impact */}
            <div 
              style={{ borderColor: `${currentTool.color}50` }}
              className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0e1726] border-2 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-300"
            >
              
              {/* Decorative brand tint */}
              <div 
                style={{ backgroundColor: currentTool.color }}
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-15 pointer-events-none"
              />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span 
                    style={{ backgroundColor: currentTool.color }}
                    className="w-2.5 h-2.5 rounded-full inline-block animate-pulse"
                  />
                  <span className="font-bold text-white uppercase tracking-wider">
                    {currentTool.name}
                  </span>
                  <span className="text-slate-400">· {currentTool.category}</span>
                </div>

                <div className="text-right">
                  <span className="text-xs text-rose-400 line-through font-mono">
                    ${currentTool.monthlyPrice}/mo standalone
                  </span>
                </div>
              </div>

              {/* Core Role & Output */}
              <div className="my-4 space-y-2">
                <h4 className="text-lg sm:text-xl font-black text-white">
                  {currentTool.roleDescription}
                </h4>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Outcome: {currentTool.benefit}</span>
                </div>
              </div>

              {/* The "Happy Founder" Story Callout Box */}
              <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Smile className="w-4 h-4 text-amber-400" />
                  <span>Why Founders & Business Owners Love This Combination:</span>
                </div>
                <p className="leading-relaxed text-slate-300">
                  "Before combining these 6 tools, I wasted hours updating lists manually and paid over $600/month. Combining Mailchimp, Hostinger, Fomo, WATi, UptimeRobot, and Bitly turned our customer acquisition into an automatic flywheel that converts while we sleep!"
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Owner: Alex M., Retail Founder</span>
                  <span className="text-emerald-400 font-bold">100% Automated</span>
                </div>
              </div>

              {/* Price Comparison Callout */}
              <div className="mt-5 p-3.5 bg-slate-850/80 rounded-xl border border-slate-700/80 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Standalone Retail:</div>
                  <div className="text-sm font-bold text-rose-400 font-mono line-through">
                    ${totalRetailMonthly}/month
                  </div>
                </div>

                <div className="text-center px-2">
                  <span className="text-xs text-slate-400">&rarr;</span>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-emerald-400 font-semibold">Starter Subscription:</div>
                  <div className="text-xl font-black text-emerald-400 font-mono">
                    $15 <span className="text-[11px] font-normal text-slate-300">/month</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={onClaimClick}
                className="mt-4 w-full py-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black rounded-xl text-sm transition-all duration-200 shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                <span>Start 6-Tool Subscription ($15/mo)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-2.5 flex items-center justify-center gap-3 text-[11px] text-slate-300">
                <span className="flex items-center gap-1 font-medium text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Satisfaction · 2-Min Replacement Guarantee</span>
                </span>
                <span>·</span>
                <span className="text-amber-300 font-semibold">
                  100% Legit Original Licenses
                </span>
              </div>

            </div>

            {/* Quick 6-Tool Strip Indicator */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xs font-mono font-bold text-emerald-400">$635 Saved</div>
                <div className="text-[10px] text-slate-400">Every Single Month</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xs font-mono font-bold text-cyan-400">98% Opens</div>
                <div className="text-[10px] text-slate-400">WhatsApp Broadcasts</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-xs font-mono font-bold text-amber-300">100% Uptime</div>
                <div className="text-[10px] text-slate-400">Continuous Monitoring</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
