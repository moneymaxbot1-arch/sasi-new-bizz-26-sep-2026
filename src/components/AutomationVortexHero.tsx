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
  ShieldCheck, 
  Activity,
  Layers,
  BarChart3
} from 'lucide-react';
import { TrustBadgesTrio } from './TrustBadgesTrio';
import { getActiveCurrency, formatLocalizedPrice, CurrencyConfig } from '../utils/currencyUtils';

// 8K Ultra-Animated Rocket Booster with roaring thruster fire, supersonic mach diamonds & shooting ember particles
function RocketIllustration({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="8K Animated Rocket Booster Launcher"
    >
      <defs>
        {/* Fuselage metallic 3D gradient */}
        <linearGradient id="vortexRocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f8fafc" />
          <stop offset="80%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        {/* Nose cone crimson-red gradient */}
        <linearGradient id="vortexRocketNose" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d6d" />
          <stop offset="55%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#be123c" />
        </linearGradient>

        {/* Fins red/magenta gradient */}
        <linearGradient id="vortexRocketFin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d6d" />
          <stop offset="100%" stopColor="#d91b42" />
        </linearGradient>

        {/* Porthole rim metallic gradient */}
        <linearGradient id="vortexWindowRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>

        {/* Porthole glass cyan gradient */}
        <linearGradient id="vortexWindowGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        {/* Roaring plasma flame outer amber-orange gradient */}
        <linearGradient id="vortexFlameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="25%" stopColor="#fbbf24" />
          <stop offset="65%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0.85" />
        </linearGradient>

        {/* Mid-core fiery yellow gradient */}
        <linearGradient id="vortexFlameMid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#fde047" />
          <stop offset="75%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.75" />
        </linearGradient>

        {/* Inner white-hot ignition core flame */}
        <linearGradient id="vortexFlameInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>

        {/* Radial exhaust heat glow */}
        <radialGradient id="vortexExhaustAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#ea580c" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
        </radialGradient>

        {/* Drop shadow for 3D rocket depth */}
        <filter id="vortexRocketShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-1" dy="1.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.45" />
        </filter>

        {/* Dynamic flame aura bloom filter */}
        <filter id="vortexFlameGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <style>{`
          @keyframes rocketEngineVibration {
            0%, 100% {
              transform: translate(49px, 49px) rotate(45deg) scale(1.35) translate(0px, 0px);
            }
            15% {
              transform: translate(49px, 49px) rotate(45deg) scale(1.35) translate(0.35px, -1.2px);
            }
            35% {
              transform: translate(49px, 49px) rotate(45deg) scale(1.35) translate(-0.3px, -0.4px);
            }
            55% {
              transform: translate(49px, 49px) rotate(45deg) scale(1.35) translate(0.4px, -1.8px);
            }
            75% {
              transform: translate(49px, 49px) rotate(45deg) scale(1.35) translate(-0.25px, -0.9px);
            }
            90% {
              transform: translate(49px, 49px) rotate(45deg) scale(1.35) translate(0.2px, -1.4px);
            }
          }

          @keyframes fireRoarOuter {
            0%, 100% {
              transform: scaleY(1) scaleX(1);
              opacity: 0.95;
            }
            20% {
              transform: scaleY(1.36) scaleX(1.1);
              opacity: 1;
            }
            45% {
              transform: scaleY(0.92) scaleX(0.92);
              opacity: 0.88;
            }
            70% {
              transform: scaleY(1.28) scaleX(1.05);
              opacity: 1;
            }
            85% {
              transform: scaleY(1.05) scaleX(0.96);
              opacity: 0.92;
            }
          }

          @keyframes fireRoarMid {
            0%, 100% {
              transform: scaleY(1) scaleX(1);
              opacity: 0.95;
            }
            25% {
              transform: scaleY(1.4) scaleX(1.12);
              opacity: 1;
            }
            50% {
              transform: scaleY(0.88) scaleX(0.9);
              opacity: 0.9;
            }
            75% {
              transform: scaleY(1.3) scaleX(1.06);
              opacity: 1;
            }
          }

          @keyframes fireRoarInner {
            0%, 100% {
              transform: scaleY(1) scaleX(1);
              opacity: 0.95;
            }
            30% {
              transform: scaleY(1.42) scaleX(1.16);
              opacity: 1;
            }
            60% {
              transform: scaleY(0.85) scaleX(0.88);
              opacity: 0.92;
            }
            85% {
              transform: scaleY(1.25) scaleX(1.08);
              opacity: 1;
            }
          }

          @keyframes fireTongueLeft {
            0%, 100% {
              transform: scale(1) rotate(0deg);
              opacity: 0.75;
            }
            50% {
              transform: scale(1.38, 1.3) rotate(-9deg);
              opacity: 1;
            }
          }

          @keyframes fireTongueRight {
            0%, 100% {
              transform: scale(1) rotate(0deg);
              opacity: 0.75;
            }
            50% {
              transform: scale(1.3, 1.4) rotate(9deg);
              opacity: 1;
            }
          }

          @keyframes sparkFly1 {
            0% {
              transform: translate(0px, 24px) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(-7px, 56px) scale(0.15);
              opacity: 0;
            }
          }

          @keyframes sparkFly2 {
            0% {
              transform: translate(2px, 24px) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translate(8px, 60px) scale(0.18);
              opacity: 0;
            }
          }

          @keyframes sparkFly3 {
            0% {
              transform: translate(-1.5px, 24px) scale(1.1);
              opacity: 1;
            }
            100% {
              transform: translate(-3px, 66px) scale(0.1);
              opacity: 0;
            }
          }

          @keyframes sparkFly4 {
            0% {
              transform: translate(1px, 25px) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(5px, 52px) scale(0.2);
              opacity: 0;
            }
          }

          @keyframes machShockPulse {
            0%, 100% {
              transform: scale(0.82);
              opacity: 0.65;
            }
            50% {
              transform: scale(1.3);
              opacity: 1;
            }
          }

          @keyframes glowRadiancePulse {
            0%, 100% {
              opacity: 0.4;
              transform: scale(0.92);
            }
            50% {
              opacity: 0.95;
              transform: scale(1.3);
            }
          }

          @keyframes windowGlareShimmer {
            0%, 100% {
              opacity: 0.75;
            }
            50% {
              opacity: 1;
            }
          }

          .vortex-rocket-hull {
            animation: rocketEngineVibration 0.55s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
            will-change: transform;
          }

          .vortex-fire-outer {
            transform-origin: 0px 24px;
            animation: fireRoarOuter 0.16s ease-in-out infinite alternate;
            will-change: transform, opacity;
          }

          .vortex-fire-mid {
            transform-origin: 0px 24px;
            animation: fireRoarMid 0.13s ease-in-out infinite alternate;
            will-change: transform, opacity;
          }

          .vortex-fire-inner {
            transform-origin: 0px 24px;
            animation: fireRoarInner 0.11s ease-in-out infinite alternate;
            will-change: transform, opacity;
          }

          .vortex-fire-left {
            transform-origin: -4px 24px;
            animation: fireTongueLeft 0.19s ease-in-out infinite alternate;
            will-change: transform, opacity;
          }

          .vortex-fire-right {
            transform-origin: 4px 24px;
            animation: fireTongueRight 0.17s ease-in-out infinite alternate;
            will-change: transform, opacity;
          }

          .vortex-spark-1 {
            animation: sparkFly1 0.5s ease-out infinite;
          }
          .vortex-spark-2 {
            animation: sparkFly2 0.6s ease-out 0.15s infinite;
          }
          .vortex-spark-3 {
            animation: sparkFly3 0.7s ease-out 0.3s infinite;
          }
          .vortex-spark-4 {
            animation: sparkFly4 0.55s ease-out 0.08s infinite;
          }

          .vortex-mach-1 {
            transform-origin: 0px 33px;
            animation: machShockPulse 0.18s ease-in-out infinite alternate;
          }
          .vortex-mach-2 {
            transform-origin: 0px 42px;
            animation: machShockPulse 0.22s ease-in-out 0.07s infinite alternate;
          }

          .vortex-glow-aura {
            transform-origin: 0px 28px;
            animation: glowRadiancePulse 0.35s ease-in-out infinite alternate;
          }

          .vortex-glass-glare {
            animation: windowGlareShimmer 1.4s ease-in-out infinite;
          }
        `}</style>
      </defs>

      {/* Main Hull Group with supersonic thrust vibration & forward surge */}
      <g className="vortex-rocket-hull">
        {/* Engine Exhaust Backlight Radial Glow */}
        <circle
          cx="0"
          cy="32"
          r="18"
          fill="url(#vortexExhaustAura)"
          className="vortex-glow-aura"
        />

        {/* Flying Sparks / Bursting Fire Particles shooting backwards */}
        <circle cx="0" cy="0" r="1.4" fill="#ffffff" className="vortex-spark-1" />
        <circle cx="0" cy="0" r="1.6" fill="#facc15" className="vortex-spark-2" />
        <circle cx="0" cy="0" r="1.3" fill="#fb923c" className="vortex-spark-3" />
        <circle cx="0" cy="0" r="1.2" fill="#ef4444" className="vortex-spark-4" />

        {/* Left Side Fire Tongue */}
        <path
          d="M -5 23 C -11 29 -12 37 -7 43 C -5 36 -4 29 -3 23 Z"
          fill="url(#vortexFlameOuter)"
          className="vortex-fire-left"
        />

        {/* Right Side Fire Tongue */}
        <path
          d="M 5 23 C 11 29 12 37 7 43 C 5 36 4 29 3 23 Z"
          fill="url(#vortexFlameOuter)"
          className="vortex-fire-right"
        />

        {/* Main Central Roaring Exhaust Fire Stream */}
        <path
          d="M -7.5 23 C -15 34 -10 49 0 58 C 10 49 15 34 7.5 23 Z"
          fill="url(#vortexFlameOuter)"
          className="vortex-fire-outer"
          filter="url(#vortexFlameGlow)"
        />

        {/* Mid-core Fire Plume */}
        <path
          d="M -5 23 C -9 32 -6 43 0 49 C 6 43 9 32 5 23 Z"
          fill="url(#vortexFlameMid)"
          className="vortex-fire-mid"
        />

        {/* Inner Hot Combustion Flame Core */}
        <path
          d="M -3.2 23 C -5.5 30 -3.5 38 0 42 C 3.5 38 5.5 30 3.2 23 Z"
          fill="url(#vortexFlameInner)"
          className="vortex-fire-inner"
        />

        {/* Mach Shock Diamonds (Supersonic Thrust Shockwaves) */}
        <polygon
          points="0,29 2.5,33 0,37 -2.5,33"
          fill="#ffffff"
          className="vortex-mach-1"
        />
        <polygon
          points="0,38 2,41.5 0,45 -2,41.5"
          fill="#fef08a"
          className="vortex-mach-2"
        />

        {/* Left aerodynamic fin */}
        <path
          d="M -11 9 C -19 12 -23 23 -22 28 C -16 27 -11 23 -9 19 Z"
          fill="url(#vortexRocketFin)"
        />

        {/* Right aerodynamic fin */}
        <path
          d="M 11 9 C 19 12 23 23 22 28 C 16 27 11 23 9 19 Z"
          fill="url(#vortexRocketFin)"
        />

        {/* Thruster titanium nozzle base */}
        <path
          d="M -7 21 L 7 21 L 5.5 24.5 L -5.5 24.5 Z"
          fill="#1e293b"
        />
        <line
          x1="-6"
          y1="24.5"
          x2="6"
          y2="24.5"
          stroke="#f97316"
          strokeWidth="1.2"
          opacity="0.9"
        />

        {/* Rocket main fuselage capsule body */}
        <path
          d="M -12 15 C -13.5 3 -10 -15 0 -29 C 10 -15 13.5 3 12 15 C 8 21.5 -8 21.5 -12 15 Z"
          fill="url(#vortexRocketBody)"
          filter="url(#vortexRocketShadow)"
        />

        {/* Red dome nose cone */}
        <path
          d="M -8.2 -12.5 C -4.8 -20.5 0 -29 0 -29 C 0 -29 4.8 -20.5 8.2 -12.5 C 5 -10 -5 -10 -8.2 -12.5 Z"
          fill="url(#vortexRocketNose)"
        />

        {/* Center dorsal fin 3D rib */}
        <path
          d="M -1.2 11 L 1.2 11 L 0 24 Z"
          fill="#be123c"
          opacity="0.8"
        />

        {/* Circular glass porthole window */}
        <circle cx="0" cy="-2.5" r="7.2" fill="url(#vortexWindowRim)" />
        <circle cx="0" cy="-2.5" r="5.6" fill="url(#vortexWindowGlass)" />
        {/* Reflection glare arc */}
        <path
          d="M -2.8 -5 A 4 4 0 0 1 2.8 -5 A 4.8 4.8 0 0 0 -2.8 -5 Z"
          fill="#ffffff"
          opacity="0.85"
          className="vortex-glass-glare"
        />
      </g>
    </svg>
  );
}

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
  const [windowWidth, setWindowWidth] = useState<number>(() => 
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] text-balance">
            Run Your Entire Business{' '}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              100% Automated
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Automate your daily Business operations: CRM messaging, WhatsApp marketing, client workflows and hosting into a single dashboard seamlessly from <span className="text-emerald-400 font-bold font-mono">{formatLocalizedPrice(15, currentCurrency)}/month</span>
          </p>

        </div>

        {/* Center Interactive Animation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Circular Fusion Arena */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative select-none">
            
            {/* Circular Orbit Canvas */}
            <div className="relative w-[280px] h-[280px] min-[360px]:w-[320px] min-[360px]:h-[320px] sm:w-[480px] sm:h-[480px] flex items-center justify-center">
              
              {/* Outer decorative orbit rings */}
              <div className="absolute inset-0 rounded-full border border-slate-800/80 pointer-events-none" />
              <div className="absolute inset-6 sm:inset-8 rounded-full border border-dashed border-emerald-500/20 pointer-events-none animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-14 sm:inset-20 rounded-full border border-slate-800/60 pointer-events-none" />

              {/* Pulsing energy waves flowing toward center */}
              <div className="absolute inset-12 sm:inset-16 rounded-full bg-emerald-500/5 animate-ping pointer-events-none opacity-40" />

              {/* SVG Connecting Flow Lines from the 6 outer nodes to the center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 480 480">
                <defs>
                  <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {TOOLS.map((tool, i) => {
                  const rad = ((tool.angle + rotationAngle) * Math.PI) / 180;
                  const radius = 185; // scaled via viewBox
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

              {/* CENTER CIRCLE: The Unified $15 Automated Business Growth Hub with Malaysian Male Photo */}
              <div 
                onClick={onClaimClick}
                className="relative z-20 w-36 h-36 min-[360px]:w-40 min-[360px]:h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-slate-900 via-[#0a1420] to-[#041d15] border-3 sm:border-4 border-emerald-400 p-2 shadow-[0_0_60px_rgba(52,211,153,0.4)] flex flex-col items-center justify-center text-center cursor-pointer transition-transform hover:scale-105 active:scale-95 group"
              >
                
                {/* Glowing Aura Ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-40 blur-md group-hover:opacity-75 transition-opacity" />

                <div className="relative z-10 flex flex-col items-center px-2 sm:px-3">
                  
                  {/* Malaysian Male Entrepreneur Photo & BOOSTING Badge */}
                  <div className="relative mb-1 sm:mb-1.5 flex items-center justify-center">
                    <div className="w-14 h-14 min-[360px]:w-16 min-[360px]:h-16 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-emerald-400 via-amber-300 to-emerald-400 p-0.5 sm:p-1 shadow-xl flex items-center justify-center relative">
                      {/* Dynamic Pulse Glow Aura */}
                      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-emerald-500/40 via-teal-400/25 to-emerald-400/35 blur-sm animate-pulse pointer-events-none" />
                      <div className="w-full h-full rounded-full bg-[#050811] flex items-center justify-center overflow-hidden relative border-2 border-emerald-400/40 shadow-inner">
                        <img 
                          src="/avatars/amirul_hafiz.jpg" 
                          alt="Malaysian Male Business Owner" 
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('khairul_azman')) {
                              target.src = '/avatars/khairul_azman.jpg';
                            }
                          }}
                        />
                      </div>
                    </div>
                    {/* Urgency Badge centered directly below avatar circle */}
                    <span className="absolute -bottom-1 sm:-bottom-1.5 left-1/2 -translate-x-1/2 px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-black text-[8px] sm:text-[9px] uppercase shadow-md tracking-wider z-20 whitespace-nowrap">
                      BOOSTING
                    </span>
                  </div>

                  {/* Core Value Text */}
                  <div className="text-[9px] sm:text-xs font-extrabold uppercase tracking-wider text-emerald-300 mt-1 sm:mt-1.5">
                    6x Automation Hub
                  </div>

                  <div className="flex items-baseline justify-center gap-1 my-0.2 sm:my-0.5">
                    <span className="font-mono text-xl min-[360px]:text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {formatLocalizedPrice(15, currentCurrency)}
                    </span>
                    <span className="text-[10px] sm:text-xs text-emerald-400 font-semibold font-mono">
                      /mo
                    </span>
                    <span className="text-[9px] sm:text-xs text-rose-300 line-through font-mono ml-0.5 sm:ml-1">
                      {formatLocalizedPrice(totalRetailMonthly, currentCurrency)}/mo
                    </span>
                  </div>

                  <div className="text-[9px] sm:text-[10px] text-slate-300 font-semibold line-clamp-1">
                    Starting Monthly
                  </div>

                  {/* Click trigger hint */}
                  <div className="mt-1 sm:mt-1.5 inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[8px] sm:text-[9px] font-bold group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                    <span>From {formatLocalizedPrice(15, currentCurrency)}/mo</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>

                </div>

              </div>

              {/* 6 ORBITING SATELLITE SOFTWARE CIRCLES (The 6 Software from the Pitcher) */}
              {TOOLS.map((tool, index) => {
                const rad = ((tool.angle + rotationAngle) * Math.PI) / 180;
                // Responsive orbit radius calculated from windowWidth
                const radius = windowWidth < 360 ? 104 : windowWidth < 640 ? 120 : 185; 

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
                    className={`absolute z-30 w-13 h-13 min-[360px]:w-15 min-[360px]:h-15 sm:w-20 sm:h-20 rounded-full bg-slate-900/95 backdrop-blur-md border-2 cursor-pointer flex flex-col items-center justify-center p-0.5 sm:p-1 transition-all duration-200 hover:scale-115 active:scale-95 group ${
                      isSelected ? 'scale-110 z-40' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    {/* Tool Brand Avatar / Monogram */}
                    <div 
                      style={{ color: tool.color }}
                      className="text-[10px] min-[360px]:text-xs sm:text-sm font-black tracking-tight"
                    >
                      {tool.iconText}
                    </div>

                    {/* Software Name */}
                    <span className="text-[8px] min-[360px]:text-[9px] sm:text-[10px] font-bold text-white tracking-tight truncate max-w-[90%]">
                      {tool.name}
                    </span>

                    {/* Retail Monthly Price Tag matching uploaded picture */}
                    <span 
                      style={{ backgroundColor: `${tool.color}20`, color: tool.color }}
                      className="text-[7px] min-[360px]:text-[8px] sm:text-[9px] font-mono font-bold px-1 sm:px-1.5 py-0.2 rounded-full mt-0.5"
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
                <span>Start 6-Tool Subscription ({formatLocalizedPrice(15, currentCurrency)}/mo)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* 3 Core Trust Guarantees */}
              <div className="mt-3">
                <TrustBadgesTrio variant="compact" onClaimClick={onClaimClick} />
              </div>

              <div className="mt-2.5 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-medium text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>30-Day Money-Back Guarantee · 1-Day Full Refund</span>
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

        {/* High-Converting 3 Core Assurance Ribbon */}
        <div className="mt-10">
          <TrustBadgesTrio variant="ribbon" onClaimClick={onClaimClick} />
        </div>

      </div>
    </div>
  );
};
