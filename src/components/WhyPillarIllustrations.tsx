import React from 'react';

export const TrafficGenerationIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden select-none">
      <svg
        viewBox="0 0 320 200"
        className="w-full h-full object-contain filter drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="tg-arrow-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#FDE047" />
          </linearGradient>
          <linearGradient id="tg-bar-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="tg-bar-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="tg-bar-3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="tg-coin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="tg-laptop-screen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <radialGradient id="tg-ambient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <filter id="tg-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes tgArrowSoar {
              0%, 100% { transform: translate(0px, 0px) scale(1); filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.4)); }
              50% { transform: translate(5px, -8px) scale(1.03); filter: drop-shadow(0 0 22px rgba(253, 224, 71, 0.8)); }
            }
            @keyframes tgBarPulse1 {
              0%, 100% { transform: scaleY(1); }
              50% { transform: scaleY(1.15); }
            }
            @keyframes tgBarPulse2 {
              0%, 100% { transform: scaleY(1); }
              50% { transform: scaleY(0.88); }
            }
            @keyframes tgBarPulse3 {
              0%, 100% { transform: scaleY(1); }
              50% { transform: scaleY(1.18); }
            }
            @keyframes tgCoinBob {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-5px); }
            }
            @keyframes tgSparkleUp {
              0% { transform: translateY(0px) scale(0); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(-40px) scale(1.2); opacity: 0; }
            }
            @keyframes tgRadarPing {
              0% { r: 3px; opacity: 1; }
              100% { r: 9px; opacity: 0; }
            }
            .tg-arrow-anim {
              animation: tgArrowSoar 3.2s ease-in-out infinite;
              transform-origin: 200px 90px;
            }
            .tg-bar-1-anim {
              animation: tgBarPulse1 2.8s ease-in-out infinite;
              transform-origin: 188px 145px;
            }
            .tg-bar-2-anim {
              animation: tgBarPulse2 3.4s ease-in-out infinite;
              transform-origin: 210px 145px;
            }
            .tg-bar-3-anim {
              animation: tgBarPulse3 2.5s ease-in-out infinite;
              transform-origin: 232px 145px;
            }
            .tg-coins-anim {
              animation: tgCoinBob 3s ease-in-out infinite;
            }
            .tg-sparkle-1 { animation: tgSparkleUp 2.4s ease-in infinite; }
            .tg-sparkle-2 { animation: tgSparkleUp 2.8s ease-in infinite 0.7s; }
            .tg-sparkle-3 { animation: tgSparkleUp 3.2s ease-in infinite 1.4s; }
            .tg-ping { animation: tgRadarPing 1.8s cubic-bezier(0, 0.2, 0.8, 1) infinite; }
          `}</style>
        </defs>

        {/* Ambient warm glow in background */}
        <ellipse cx="190" cy="90" rx="90" ry="70" fill="url(#tg-ambient)" />

        {/* Floor shadow */}
        <ellipse cx="160" cy="182" rx="130" ry="12" fill="#000000" fillOpacity="0.45" />

        {/* 3D Bar Chart Floating Behind with Pulse Animations */}
        <g opacity="0.95">
          {/* Bar 1 */}
          <g className="tg-bar-1-anim">
            <rect x="180" y="85" width="16" height="60" rx="4" fill="url(#tg-bar-1)" />
            <rect x="180" y="85" width="16" height="5" rx="2" fill="#BAE6FD" />
          </g>
          {/* Bar 2 */}
          <g className="tg-bar-2-anim">
            <rect x="202" y="65" width="16" height="80" rx="4" fill="url(#tg-bar-2)" />
            <rect x="202" y="65" width="16" height="5" rx="2" fill="#A7F3D0" />
          </g>
          {/* Bar 3 */}
          <g className="tg-bar-3-anim">
            <rect x="224" y="45" width="16" height="100" rx="4" fill="url(#tg-bar-3)" />
            <rect x="224" y="45" width="16" height="5" rx="2" fill="#FEF08A" />
          </g>
        </g>

        {/* Floating Sparks / Data Particles Rising */}
        <circle cx="210" cy="110" r="2.5" fill="#FDE047" className="tg-sparkle-1" />
        <circle cx="235" cy="80" r="3" fill="#F97316" className="tg-sparkle-2" />
        <circle cx="260" cy="50" r="2" fill="#38BDF8" className="tg-sparkle-3" />

        {/* Big 3D Surging Growth Arrow with Active Soaring Motion */}
        <g className="tg-arrow-anim" filter="url(#tg-glow)">
          {/* Arrow Shadow/3D Side */}
          <path
            d="M 130 145 C 160 135 185 110 240 45 L 265 65 L 285 20 L 235 30 L 252 48 C 200 105 175 125 130 145 Z"
            fill="#9A3412"
            opacity="0.8"
          />
          {/* Main Arrow Face */}
          <path
            d="M 130 140 C 162 130 190 102 242 40 L 267 60 L 287 15 L 237 25 L 254 43 C 202 100 178 120 130 140 Z"
            fill="url(#tg-arrow-grad)"
          />
          {/* Arrow Specular Highlight */}
          <path
            d="M 140 136 C 170 120 200 95 248 42 L 253 45 C 205 98 175 123 140 136 Z"
            fill="#FFFFFF"
            fillOpacity="0.6"
          />
        </g>

        {/* Stack of 3D Golden Coins with Floating Bobbing Animation */}
        <g transform="translate(195, 120)" className="tg-coins-anim">
          {/* Coin 1 Bottom */}
          <ellipse cx="30" cy="40" rx="22" ry="9" fill="#78350F" />
          <path d="M 8 40 C 8 45 52 45 52 40 L 52 47 C 52 52 8 52 8 47 Z" fill="#92400E" />
          <ellipse cx="30" cy="46" rx="22" ry="8" fill="url(#tg-coin-grad)" />
          <ellipse cx="30" cy="46" rx="16" ry="6" fill="#F59E0B" stroke="#FDE047" strokeWidth="1" />

          {/* Coin 2 Middle */}
          <path d="M 14 26 C 14 31 58 31 58 26 L 58 33 C 58 38 14 38 14 33 Z" fill="#92400E" />
          <ellipse cx="36" cy="32" rx="22" ry="8" fill="url(#tg-coin-grad)" />
          <ellipse cx="36" cy="32" rx="16" ry="6" fill="#F59E0B" stroke="#FDE047" strokeWidth="1" />
          <text x="33" y="35" fill="#FEF08A" fontSize="9" fontWeight="900" fontFamily="sans-serif">$</text>

          {/* Coin 3 Top High */}
          <path d="M 22 10 C 22 15 66 15 66 10 L 66 17 C 66 22 22 22 22 17 Z" fill="#92400E" />
          <ellipse cx="44" cy="16" rx="22" ry="8" fill="url(#tg-coin-grad)" />
          <ellipse cx="44" cy="16" rx="16" ry="6" fill="#F59E0B" stroke="#FDE047" strokeWidth="1" />
          <text x="41" y="19" fill="#FEF08A" fontSize="10" fontWeight="900" fontFamily="sans-serif">$</text>
        </g>

        {/* Character with Laptop Working at Growth */}
        <g transform="translate(45, 60)">
          {/* Shadow beneath character */}
          <ellipse cx="45" cy="115" rx="35" ry="8" fill="#000000" fillOpacity="0.4" />

          {/* Legs & Shoes */}
          <path d="M 38 88 L 32 112 L 20 114" stroke="#1D4ED8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="18" cy="114" rx="7" ry="4" fill="#FFFFFF" />
          <path d="M 52 88 L 60 112 L 72 114" stroke="#1D4ED8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="72" cy="114" rx="7" ry="4" fill="#FFFFFF" />

          {/* Torso & Orange Shirt */}
          <path d="M 32 48 C 32 40 58 40 58 48 L 56 88 L 34 88 Z" fill="#F97316" />
          <path d="M 32 54 L 20 72 L 35 76" stroke="#F97316" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

          {/* Head & Hair */}
          <ellipse cx="45" cy="28" rx="9" ry="11" fill="#FCD34D" />
          <path d="M 38 20 C 38 12 55 12 55 20 C 55 24 53 26 53 26 C 47 24 43 25 38 28 Z" fill="#1E293B" />
          <circle cx="48" cy="28" r="1.5" fill="#0F172A" />

          {/* Modern Slim Laptop */}
          <g transform="translate(18, 62)">
            {/* Screen */}
            <polygon points="12,0 36,0 32,22 8,22" fill="#334155" />
            <polygon points="14,2 34,2 31,20 11,20" fill="url(#tg-laptop-screen)" />
            {/* Neon chart on laptop screen */}
            <polyline points="13,17 18,12 23,14 29,6" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Keyboard base */}
            <polygon points="6,22 34,22 40,28 0,28" fill="#94A3B8" />
            <polygon points="12,24 28,24 30,26 10,26" fill="#0F172A" opacity="0.6" />
          </g>
        </g>

        {/* Floating Traffic Metrics Badge with Live Radar Ping */}
        <g transform="translate(200, 15)">
          <rect x="0" y="0" width="85" height="22" rx="11" fill="#0F172A" fillOpacity="0.9" stroke="#F59E0B" strokeWidth="1.5" />
          {/* Radar Ping circles */}
          <circle cx="10" cy="11" r="3" fill="#F59E0B" />
          <circle cx="10" cy="11" r="3" stroke="#FDE047" strokeWidth="1.5" fill="none" className="tg-ping" />
          <text x="18" y="15" fill="#FEF08A" fontSize="9" fontWeight="800" fontFamily="sans-serif">
            +34% Traffic
          </text>
        </g>
      </svg>
    </div>
  );
};

export const EngagementIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden select-none">
      <svg
        viewBox="0 0 320 200"
        className="w-full h-full object-contain filter drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="eng-podium-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="50%" stopColor="#BE123C" />
            <stop offset="100%" stopColor="#881337" />
          </linearGradient>
          <linearGradient id="eng-portal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="eng-shirt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>
          <radialGradient id="eng-ambient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F43F5E" stopOpacity="0" />
          </radialGradient>
          <filter id="eng-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes engPortalPulse {
              0%, 100% { transform: scale(1); opacity: 0.85; filter: drop-shadow(0 0 15px rgba(236, 72, 153, 0.4)); }
              50% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.7)); }
            }
            @keyframes engPopupFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-7px); }
            }
            @keyframes engRatingFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(6px); }
            }
            @keyframes engEmojiWiggle {
              0%, 100% { transform: rotate(0deg) scale(1); }
              25% { transform: rotate(-8deg) scale(1.1); }
              75% { transform: rotate(8deg) scale(1.1); }
            }
            @keyframes engHeartRise {
              0% { transform: translate(0, 0) scale(0.6); opacity: 0; }
              40% { opacity: 0.9; }
              100% { transform: translate(15px, -35px) scale(1.1); opacity: 0; }
            }
            .eng-portal-anim {
              animation: engPortalPulse 4s ease-in-out infinite;
              transform-origin: 160px 90px;
            }
            .eng-popup-anim {
              animation: engPopupFloat 3.2s ease-in-out infinite;
            }
            .eng-rating-anim {
              animation: engRatingFloat 3.6s ease-in-out infinite 0.5s;
            }
            .eng-emoji-anim {
              animation: engEmojiWiggle 2.5s ease-in-out infinite;
              transform-origin: 247px 127px;
            }
            .eng-heart-1 { animation: engHeartRise 2.8s ease-out infinite; }
            .eng-heart-2 { animation: engHeartRise 3.2s ease-out infinite 1.2s; }
          `}</style>
        </defs>

        {/* Ambient Halo */}
        <ellipse cx="160" cy="100" rx="95" ry="75" fill="url(#eng-ambient)" />

        {/* Floor Shadow */}
        <ellipse cx="160" cy="182" rx="120" ry="12" fill="#000000" fillOpacity="0.45" />

        {/* Glowing Circular Portal / Background Disc with Breathing Animation */}
        <g className="eng-portal-anim">
          <circle cx="160" cy="90" r="62" fill="url(#eng-portal-grad)" />
          <circle cx="160" cy="90" r="58" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="6 4" />
        </g>

        {/* Floating Heart / Star Particle Emitters */}
        <g className="eng-heart-1" transform="translate(200, 75)">
          <path d="M 6 2 C 3 0 0 3 0 6 C 0 10 6 14 6 14 C 6 14 12 10 12 6 C 12 3 9 0 6 2 Z" fill="#FB7185" />
        </g>
        <g className="eng-heart-2" transform="translate(110, 65)">
          <path d="M 5 2 C 2.5 0 0 2.5 0 5 C 0 8.5 5 12 5 12 C 5 12 10 8.5 10 5 C 10 2.5 7.5 0 5 2 Z" fill="#F43F5E" />
        </g>

        {/* White / Gradient 3D Cylinder Podium where character sits */}
        <g transform="translate(110, 120)">
          {/* Cylinder Body */}
          <path d="M 0 20 C 0 32 100 32 100 20 L 100 48 C 100 60 0 60 0 48 Z" fill="#CBD5E1" />
          <path d="M 0 20 C 0 32 100 32 100 20 L 100 48 C 100 60 0 60 0 48 Z" fill="url(#eng-podium-grad)" opacity="0.25" />
          {/* Cylinder Top Cap */}
          <ellipse cx="50" cy="20" rx="50" ry="16" fill="#F8FAFC" />
          <ellipse cx="50" cy="20" rx="46" ry="13" fill="#E2E8F0" />
        </g>

        {/* Seated Marketer / Creator with Laptop */}
        <g transform="translate(130, 48)">
          {/* Legs folded/hanging over pedestal */}
          <path d="M 22 66 L 16 94 L 8 98" stroke="#1E293B" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="6" cy="98" rx="6" ry="3.5" fill="#EF4444" />
          <path d="M 38 66 L 44 94 L 52 98" stroke="#1E293B" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="54" cy="98" rx="6" ry="3.5" fill="#EF4444" />

          {/* Torso & Bright Yellow Shirt */}
          <path d="M 18 32 C 18 24 42 24 42 32 L 40 68 L 20 68 Z" fill="url(#eng-shirt)" />
          {/* Arms holding laptop */}
          <path d="M 18 36 L 10 52 L 24 55" stroke="#FDE047" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 42 36 L 50 52 L 36 55" stroke="#FDE047" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Head & Glasses */}
          <ellipse cx="30" cy="18" rx="8" ry="10" fill="#FCD34D" />
          {/* Dark Hair */}
          <path d="M 23 14 C 23 6 37 6 37 14 C 37 16 35 18 35 18 C 30 16 26 17 23 19 Z" fill="#0F172A" />
          {/* Glasses */}
          <rect x="25" y="16" width="5" height="4" rx="1" stroke="#0F172A" strokeWidth="1.2" fill="none" />
          <rect x="31" y="16" width="5" height="4" rx="1" stroke="#0F172A" strokeWidth="1.2" fill="none" />
          <line x1="30" y1="18" x2="31" y2="18" stroke="#0F172A" strokeWidth="1.2" />

          {/* Ultra-slim laptop on lap */}
          <g transform="translate(15, 45)">
            <polygon points="6,0 24,0 22,12 8,12" fill="#E2E8F0" />
            <polygon points="7,2 23,2 21,10 9,10" fill="#38BDF8" opacity="0.9" />
            <polygon points="2,12 28,12 30,16 0,16" fill="#94A3B8" />
          </g>
        </g>

        {/* Orbiting Social Proof / Avatar Elements */}
        {/* Floating Bubble 1: Verified Buyer with Bobbing Floating Motion */}
        <g transform="translate(210, 40)" className="eng-popup-anim" filter="url(#eng-glow)">
          <rect x="0" y="0" width="80" height="26" rx="13" fill="#0F172A" fillOpacity="0.95" stroke="#F43F5E" strokeWidth="1.5" />
          <circle cx="13" cy="13" r="6" fill="#F43F5E" />
          <path d="M 10 13 L 12 15 L 16 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="24" y="13" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="sans-serif">Sarah M.</text>
          <text x="24" y="21" fill="#FDA4AF" fontSize="6.5" fontFamily="sans-serif">Bought 2m ago</text>
        </g>

        {/* Floating Bubble 2: 5-Star Rating with Smooth Float */}
        <g transform="translate(30, 75)" className="eng-rating-anim">
          <rect x="0" y="0" width="70" height="24" rx="12" fill="#0F172A" fillOpacity="0.95" stroke="#EC4899" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="5" fill="#EC4899" />
          <text x="10" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold">★</text>
          <text x="22" y="16" fill="#FDF2F8" fontSize="8" fontWeight="800" fontFamily="sans-serif">4.9 / 5.0</text>
        </g>

        {/* Floating Emoji Reaction with Playful Wiggle */}
        <g transform="translate(235, 115)" className="eng-emoji-anim">
          <circle cx="12" cy="12" r="12" fill="#F59E0B" stroke="#FDE047" strokeWidth="1" />
          <circle cx="8" cy="10" r="1.5" fill="#78350F" />
          <circle cx="16" cy="10" r="1.5" fill="#78350F" />
          <path d="M 7 14 C 9 18 15 18 17 14" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export const RetargetingIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden select-none">
      <svg
        viewBox="0 0 320 200"
        className="w-full h-full object-contain filter drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ret-magnet-red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
          <linearGradient id="ret-magnet-silver" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="ret-coins" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <radialGradient id="ret-ambient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
          <filter id="ret-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes retMagnetHover {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-6px) rotate(-1.5deg); }
            }
            @keyframes retSparkFlicker {
              0%, 100% { opacity: 0.3; stroke: #6EE7B7; }
              30% { opacity: 1; stroke: #A7F3D0; }
              60% { opacity: 0.5; stroke: #34D399; }
              80% { opacity: 1; stroke: #FFFFFF; }
            }
            @keyframes retMagneticWave {
              0% { transform: scale(0.85); opacity: 0.8; }
              100% { transform: scale(1.35); opacity: 0; }
            }
            @keyframes retAvatarOrbit1 {
              0%, 100% { transform: translate(0px, 0px) scale(1); }
              50% { transform: translate(-15px, 6px) scale(1.08); }
            }
            @keyframes retAvatarOrbit2 {
              0%, 100% { transform: translate(0px, 0px) scale(1); }
              50% { transform: translate(-12px, -8px) scale(1.06); }
            }
            @keyframes retAvatarOrbit3 {
              0%, 100% { transform: translate(0px, 0px) scale(1); }
              50% { transform: translate(-18px, -4px) scale(1.1); }
            }
            @keyframes retCoinStackPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.03); }
            }
            .ret-magnet-anim {
              animation: retMagnetHover 3s ease-in-out infinite;
              transform-origin: 155px 70px;
            }
            .ret-spark-anim {
              animation: retSparkFlicker 0.6s infinite alternate;
            }
            .ret-wave-1 {
              animation: retMagneticWave 2.2s cubic-bezier(0.1, 0.5, 0.9, 1) infinite;
              transform-origin: 210px 70px;
            }
            .ret-wave-2 {
              animation: retMagneticWave 2.2s cubic-bezier(0.1, 0.5, 0.9, 1) infinite 0.7s;
              transform-origin: 210px 70px;
            }
            .ret-avatar-1 { animation: retAvatarOrbit1 3.2s ease-in-out infinite; }
            .ret-avatar-2 { animation: retAvatarOrbit2 3.6s ease-in-out infinite 0.4s; }
            .ret-avatar-3 { animation: retAvatarOrbit3 2.9s ease-in-out infinite 0.8s; }
            .ret-coins-pulse {
              animation: retCoinStackPulse 2.8s ease-in-out infinite;
              transform-origin: 235px 145px;
            }
          `}</style>
        </defs>

        {/* Ambient Glow */}
        <ellipse cx="160" cy="95" rx="90" ry="70" fill="url(#ret-ambient)" />

        {/* Floor Shadow */}
        <ellipse cx="160" cy="182" rx="125" ry="12" fill="#000000" fillOpacity="0.45" />

        {/* Concentric Magnetic Waves Radiating with Expansion Animation */}
        <g stroke="#34D399" strokeWidth="1.5" fill="none">
          <ellipse cx="210" cy="70" rx="40" ry="28" strokeDasharray="4 3" className="ret-wave-1" />
          <ellipse cx="210" cy="70" rx="60" ry="42" strokeDasharray="5 4" className="ret-wave-2" />
        </g>

        {/* Large 3D Horseshoe Magnet Held By Marketer with Hovering Physics */}
        <g transform="translate(100, 45)" className="ret-magnet-anim" filter="url(#ret-glow)">
          {/* Horseshoe Curve Body */}
          <path
            d="M 25 15 C 25 -10 85 -10 85 15 L 85 45 L 65 45 L 65 18 C 65 6 45 6 45 18 L 45 45 L 25 45 Z"
            fill="url(#ret-magnet-red)"
          />
          {/* Left Silver Pole */}
          <rect x="25" y="45" width="20" height="15" fill="url(#ret-magnet-silver)" />
          {/* Right Silver Pole */}
          <rect x="65" y="45" width="20" height="15" fill="url(#ret-magnet-silver)" />
          {/* Lightning / Magnetic Spark Between Poles with Flicker */}
          <path
            d="M 45 52 L 53 48 L 57 56 L 65 52"
            stroke="#6EE7B7"
            strokeWidth="3"
            strokeLinecap="round"
            className="ret-spark-anim"
          />
        </g>

        {/* Person Holding Magnet */}
        <g transform="translate(60, 60)">
          {/* Legs */}
          <path d="M 25 78 L 18 114 L 6 116" stroke="#0F172A" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="6" cy="116" rx="6" ry="3.5" fill="#3B82F6" />
          <path d="M 38 78 L 46 114 L 58 116" stroke="#0F172A" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="58" cy="116" rx="6" ry="3.5" fill="#3B82F6" />

          {/* Torso & Blue Shirt */}
          <path d="M 20 40 C 20 32 44 32 44 40 L 42 78 L 22 78 Z" fill="#2563EB" />

          {/* Arms reaching to hold the big magnet */}
          <path d="M 22 46 L 42 42 L 55 35" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
          <path d="M 40 46 L 58 45 L 75 40" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />

          {/* Head & Hair */}
          <ellipse cx="32" cy="24" rx="8" ry="10" fill="#FCD34D" />
          <path d="M 25 18 C 25 10 39 10 39 18 C 39 20 37 22 37 22 C 32 20 28 21 25 23 Z" fill="#0F172A" />
        </g>

        {/* Floating Customer Profile Avatar Nodes Being Attracted Inward */}
        {/* Profile Disc 1 */}
        <g transform="translate(195, 25)" className="ret-avatar-1">
          <circle cx="16" cy="16" r="15" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="16" cy="12" r="5" fill="#F8FAFC" />
          <path d="M 8 26 C 8 20 24 20 24 26" fill="#F8FAFC" />
        </g>

        {/* Profile Disc 2 */}
        <g transform="translate(240, 50)" className="ret-avatar-2">
          <circle cx="16" cy="16" r="14" fill="#7C3AED" stroke="#C084FC" strokeWidth="2" />
          <circle cx="16" cy="12" r="4.5" fill="#F8FAFC" />
          <path d="M 9 25 C 9 19 23 19 23 25" fill="#F8FAFC" />
        </g>

        {/* Profile Disc 3 (WhatsApp Green Node) */}
        <g transform="translate(210, 85)" className="ret-avatar-3">
          <circle cx="14" cy="14" r="13" fill="#059669" stroke="#34D399" strokeWidth="2" />
          <circle cx="14" cy="10" r="4" fill="#F8FAFC" />
          <path d="M 7 22 C 7 17 21 17 21 22" fill="#F8FAFC" />
        </g>

        {/* Stacks of Revenue Coins Gathered Under Retargeting Funnel with Glow Pulse */}
        <g transform="translate(215, 125)" className="ret-coins-pulse">
          {/* Stack 1 */}
          <ellipse cx="20" cy="35" rx="18" ry="7" fill="#047857" />
          <path d="M 2 35 C 2 39 38 39 38 35 L 38 42 C 38 46 2 46 2 42 Z" fill="#065F46" />
          <ellipse cx="20" cy="42" rx="18" ry="7" fill="url(#ret-coins)" />

          {/* Stack 2 Higher */}
          <path d="M 16 20 C 16 24 52 24 52 20 L 52 27 C 52 31 16 31 16 27 Z" fill="#065F46" />
          <ellipse cx="34" cy="27" rx="18" ry="7" fill="url(#ret-coins)" />
          <text x="31" y="30" fill="#A7F3D0" fontSize="9" fontWeight="900">$</text>

          {/* Stack 3 High Peak */}
          <path d="M 28 8 C 28 12 64 12 64 8 L 64 15 C 64 19 28 19 28 15 Z" fill="#065F46" />
          <ellipse cx="46" cy="15" rx="18" ry="7" fill="url(#ret-coins)" />
          <text x="43" y="18" fill="#A7F3D0" fontSize="9" fontWeight="900">$</text>
        </g>

        {/* WhatsApp Badge */}
        <g transform="translate(180, 5)">
          <rect x="0" y="0" width="105" height="20" rx="10" fill="#064E3B" stroke="#34D399" strokeWidth="1.2" />
          <circle cx="10" cy="10" r="3" fill="#34D399" />
          <text x="18" y="14" fill="#A7F3D0" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">
            98% WhatsApp Open
          </text>
        </g>
      </svg>
    </div>
  );
};

export const WebsiteReliabilityIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden select-none">
      <svg
        viewBox="0 0 320 200"
        className="w-full h-full object-contain filter drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rel-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="rel-screen-inner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <radialGradient id="rel-ambient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </radialGradient>
          <filter id="rel-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes relShieldFloat {
              0%, 100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.5)); }
              50% { transform: translateY(-7px) scale(1.04); filter: drop-shadow(0 0 25px rgba(254, 240, 138, 0.8)); }
            }
            @keyframes relHeartbeatDraw {
              0% { stroke-dashoffset: 200; opacity: 0.3; }
              50% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 0.3; }
            }
            @keyframes relMobileCheckPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.2); }
            }
            @keyframes relRadarBeacon {
              0% { r: 3px; opacity: 1; }
              100% { r: 10px; opacity: 0; }
            }
            .rel-shield-anim {
              animation: relShieldFloat 3.4s ease-in-out infinite;
              transform-origin: 225px 60px;
            }
            .rel-ecg-line {
              stroke-dasharray: 200;
              animation: relHeartbeatDraw 2.4s linear infinite;
            }
            .rel-mobile-check {
              animation: relMobileCheckPulse 2s ease-in-out infinite;
              transform-origin: 219px 115px;
            }
            .rel-ping-beacon {
              animation: relRadarBeacon 1.8s cubic-bezier(0, 0.2, 0.8, 1) infinite;
            }
          `}</style>
        </defs>

        {/* Ambient Cyan Glow */}
        <ellipse cx="160" cy="95" rx="95" ry="70" fill="url(#rel-ambient)" />

        {/* Floor Shadow */}
        <ellipse cx="160" cy="182" rx="125" ry="12" fill="#000000" fillOpacity="0.45" />

        {/* Multi-Device Display Array */}
        {/* 1. Large Desktop Monitor (Center-Back) */}
        <g transform="translate(100, 35)">
          <rect x="0" y="0" width="120" height="75" rx="6" fill="#334155" stroke="#64748B" strokeWidth="2" />
          <rect x="4" y="4" width="112" height="67" rx="3" fill="url(#rel-screen-inner)" />
          {/* Uptime Status Waves & Grid on Monitor */}
          <line x1="8" y1="20" x2="110" y2="20" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="8" y1="40" x2="110" y2="40" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
          {/* Real-time animated green uptime heartbeat pulse line */}
          <polyline
            points="10,40 30,40 38,25 46,55 54,32 62,40 85,40 92,20 100,40 108,40"
            stroke="#22C55E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="rel-ecg-line"
          />
          {/* Stand */}
          <rect x="52" y="75" width="16" height="15" fill="#475569" />
          <rect x="40" y="90" width="40" height="6" rx="2" fill="#64748B" />
        </g>

        {/* 2. Responsive Laptop Display (Left-Front) */}
        <g transform="translate(85, 95)">
          <polygon points="6,0 64,0 60,38 10,38" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
          <polygon points="8,2 62,2 58,36 12,36" fill="url(#rel-screen-inner)" />
          <polyline points="14,20 25,20 30,12 35,28 42,20 54,20" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
          {/* Laptop Base */}
          <polygon points="0,38 70,38 76,46 -6,46" fill="#CBD5E1" />
        </g>

        {/* 3. Mobile Smartphone Display (Right-Front) with Pulsing Success Check */}
        <g transform="translate(205, 95)">
          <rect x="0" y="0" width="28" height="48" rx="4" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
          <rect x="2" y="3" width="24" height="42" rx="2" fill="#0EA5E9" fillOpacity="0.3" />
          <circle cx="14" cy="41" r="2" fill="#64748B" />
          {/* Green checkmark on mobile screen with pulse */}
          <g className="rel-mobile-check">
            <circle cx="14" cy="20" r="7" fill="#22C55E" />
            <path d="M 11 20 L 13 22 L 17 18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>

        {/* 4. Giant 3D Golden Protective Security Shield in Front with Levitation Animation */}
        <g transform="translate(180, 25)" className="rel-shield-anim" filter="url(#rel-glow)">
          {/* Golden Shield Base Outline & Body */}
          <path
            d="M 45 10 C 65 10 75 18 80 35 C 80 65 45 88 45 88 C 45 88 10 65 10 35 C 15 18 25 10 45 10 Z"
            fill="url(#rel-shield-grad)"
          />
          {/* Shield Inner Bevel */}
          <path
            d="M 45 16 C 60 16 68 23 72 38 C 72 60 45 78 45 78 C 45 78 18 60 18 38 C 22 23 30 16 45 16 Z"
            fill="#FEF08A"
            fillOpacity="0.3"
          />
          {/* Clean White Security Checkmark / Crest */}
          <path
            d="M 33 46 L 41 54 L 57 38"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* 5. System Engineer Inspecting Display (Left side) */}
        <g transform="translate(45, 80)">
          {/* Legs */}
          <path d="M 22 55 L 16 88 L 6 90" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="6" cy="90" rx="5" ry="3" fill="#0284C7" />
          <path d="M 32 55 L 38 88 L 48 90" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="48" cy="90" rx="5" ry="3" fill="#0284C7" />

          {/* Torso & Yellow/Amber Shirt */}
          <path d="M 16 28 C 16 22 36 22 36 28 L 34 55 L 18 55 Z" fill="#FBBF24" />

          {/* Arm pointing up at the server status screen */}
          <path d="M 18 34 L 35 30 L 52 24" stroke="#FBBF24" strokeWidth="5" strokeLinecap="round" />

          {/* Head & Hair */}
          <ellipse cx="26" cy="16" rx="7" ry="8.5" fill="#FCD34D" />
          <path d="M 20 12 C 20 6 32 6 32 12 C 32 14 30 15 30 15 C 26 14 23 15 20 16 Z" fill="#475569" />
        </g>

        {/* 30s Ping Badge with Radar Ping */}
        <g transform="translate(195, 8)">
          <rect x="0" y="0" width="95" height="20" rx="10" fill="#082F49" stroke="#0EA5E9" strokeWidth="1.2" />
          <circle cx="10" cy="10" r="3" fill="#22C55E" />
          <circle cx="10" cy="10" r="3" stroke="#22C55E" strokeWidth="1.5" fill="none" className="rel-ping-beacon" />
          <text x="18" y="14" fill="#BAE6FD" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">
            30s Uptime Ping
          </text>
        </g>
      </svg>
    </div>
  );
};
