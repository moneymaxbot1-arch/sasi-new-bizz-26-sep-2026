import React from 'react';

/**
 * 1. TRAFFIC GENERATION (Acquisition & Reach)
 * Single unified big-size picture: High-tech Traffic Growth Engine
 * Message: Exponential visitor growth, link CTR tracking, and live surge.
 */
export const TrafficGenerationIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden bg-[#0A0F1D]">
      <svg
        viewBox="0 0 340 220"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="tg-area-glow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#D97706" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0A0F1D" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="tg-line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="60%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <filter id="tg-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes tgRadarPulse {
              0% { r: 6px; opacity: 1; stroke-width: 2px; }
              100% { r: 24px; opacity: 0; stroke-width: 0.5px; }
            }
            @keyframes tgPeakBounce {
              0%, 100% { transform: scale(1); filter: drop-shadow(0 0 6px #F59E0B); }
              50% { transform: scale(1.25); filter: drop-shadow(0 0 16px #FDE047); }
            }
            @keyframes tgBarWave1 { 0%, 100% { height: 26px; y: 160px; } 50% { height: 38px; y: 148px; } }
            @keyframes tgBarWave2 { 0%, 100% { height: 42px; y: 144px; } 50% { height: 56px; y: 130px; } }
            @keyframes tgBarWave3 { 0%, 100% { height: 60px; y: 126px; } 50% { height: 78px; y: 108px; } }
            @keyframes tgBarWave4 { 0%, 100% { height: 82px; y: 104px; } 50% { height: 98px; y: 88px; } }
            .tg-peak-node {
              animation: tgPeakBounce 2s ease-in-out infinite;
              transform-origin: 290px 62px;
            }
            .tg-ping { animation: tgRadarPulse 2.2s cubic-bezier(0, 0.2, 0.8, 1) infinite; }
            .tg-b1 { animation: tgBarWave1 2.8s ease-in-out infinite; }
            .tg-b2 { animation: tgBarWave2 2.5s ease-in-out infinite 0.3s; }
            .tg-b3 { animation: tgBarWave3 2.9s ease-in-out infinite 0.6s; }
            .tg-b4 { animation: tgBarWave4 2.4s ease-in-out infinite 0.9s; }
          `}</style>
        </defs>

        {/* Technical Coordinate Grid Background */}
        <g stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6">
          <line x1="20" y1="40" x2="320" y2="40" />
          <line x1="20" y1="85" x2="320" y2="85" />
          <line x1="20" y1="130" x2="320" y2="130" />
          <line x1="20" y1="175" x2="320" y2="175" strokeDasharray="none" stroke="#334155" />
          <line x1="85" y1="20" x2="85" y2="175" />
          <line x1="165" y1="20" x2="165" y2="175" />
          <line x1="245" y1="20" x2="245" y2="175" />
        </g>

        {/* Volume Histogram Bars */}
        <g fill="#F59E0B" fillOpacity="0.22">
          <rect x="75" y="160" width="14" height="26" rx="3" className="tg-b1" />
          <rect x="145" y="144" width="14" height="42" rx="3" className="tg-b2" />
          <rect x="215" y="126" width="14" height="60" rx="3" className="tg-b3" />
          <rect x="275" y="104" width="14" height="82" rx="3" className="tg-b4" />
        </g>

        {/* Area Gradient Fill */}
        <path
          d="M 20 168 C 65 162 110 148 160 126 C 215 102 245 92 290 62 L 290 175 L 20 175 Z"
          fill="url(#tg-area-glow)"
        />

        {/* Glowing Trajectory Curve Line */}
        <path
          d="M 20 168 C 65 162 110 148 160 126 C 215 102 245 92 290 62"
          stroke="url(#tg-line-glow)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#tg-glow-filter)"
        />

        {/* Vertical Target Guide Line */}
        <line x1="290" y1="62" x2="290" y2="175" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />

        {/* Target Radar Rings */}
        <circle cx="290" cy="62" r="8" stroke="#F59E0B" fill="none" className="tg-ping" />
        <circle cx="290" cy="62" r="6" fill="#FDE047" stroke="#EA580C" strokeWidth="2" className="tg-peak-node" />

        {/* Top Header Live Badge */}
        <g transform="translate(20, 16)">
          <rect x="0" y="0" width="140" height="22" rx="6" fill="#1E293B" fillOpacity="0.8" stroke="#334155" strokeWidth="1" />
          <circle cx="12" cy="11" r="3.5" fill="#10B981" />
          <text x="22" y="15" fill="#F8FAFC" fontSize="9" fontFamily="monospace" fontWeight="800">
            TRAFFIC STREAM
          </text>
          <text x="108" y="15" fill="#10B981" fontSize="8" fontFamily="monospace" fontWeight="800">
            LIVE
          </text>
        </g>

        {/* Large Prominent Surge Pill */}
        <g transform="translate(195, 14)">
          <rect x="0" y="0" width="125" height="26" rx="8" fill="#78350F" fillOpacity="0.6" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="12" y="17" fill="#FDE047" fontSize="11" fontFamily="monospace" fontWeight="900">
            ▲ +340% SURGE
          </text>
        </g>

        {/* High-Impact Stat Card 1 (Visitors) */}
        <g transform="translate(20, 68)">
          <rect x="0" y="0" width="112" height="42" rx="8" fill="#0F172A" fillOpacity="0.9" stroke="#F59E0B" strokeWidth="1.2" />
          <text x="10" y="16" fill="#94A3B8" fontSize="7.5" fontFamily="monospace" fontWeight="700">
            TOTAL VISITS
          </text>
          <text x="10" y="34" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif">
            48,290 <tspan fill="#FBBF24" fontSize="10">/mo</tspan>
          </text>
        </g>

        {/* Bottom Channel Strip */}
        <g transform="translate(20, 192)">
          <rect x="0" y="0" width="300" height="20" rx="5" fill="#1E293B" fillOpacity="0.5" stroke="#334155" strokeWidth="0.8" />
          <text x="12" y="14" fill="#E2E8F0" fontSize="8" fontFamily="monospace" fontWeight="700">
            CHANNELS: <tspan fill="#FBBF24">Bitly Links</tspan> · <tspan fill="#38BDF8">Hostinger SSD</tspan> · <tspan fill="#F43F5E">Mailchimp</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 2. SOCIAL PROOF & ON-SITE CONVERSION (Engagement & Trust)
 * Single unified big-size picture: Real-time Verified Buyer Proof & 4.9★ Rating Hub
 * Message: Eliminates customer hesitation with undeniable live social proof.
 */
export const EngagementIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden bg-[#0F0D1E]">
      <svg
        viewBox="0 0 340 220"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="eng-toast-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#881337" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.8" />
          </linearGradient>

          <filter id="eng-card-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#F43F5E" floodOpacity="0.3" />
          </filter>

          <style>{`
            @keyframes engFloatCard {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-5px); }
            }
            @keyframes engLiveBeacon {
              0% { r: 4px; opacity: 1; }
              100% { r: 14px; opacity: 0; }
            }
            @keyframes engStarGlint {
              0%, 100% { opacity: 0.9; }
              50% { opacity: 1; transform: scale(1.04); }
            }
            .eng-hero-card {
              animation: engFloatCard 3.5s ease-in-out infinite;
            }
            .eng-beacon-ring {
              animation: engLiveBeacon 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
            }
            .eng-star-cluster {
              animation: engStarGlint 2.5s ease-in-out infinite;
              transform-origin: 80px 172px;
            }
          `}</style>
        </defs>

        {/* Background Radial Glow */}
        <circle cx="170" cy="110" r="100" fill="#F43F5E" fillOpacity="0.08" filter="blur(40px)" />

        {/* Top Header Live Badge */}
        <g transform="translate(20, 16)">
          <rect x="0" y="0" width="150" height="22" rx="6" fill="#1E1B4B" stroke="#4C1D95" strokeWidth="1" />
          <circle cx="12" cy="11" r="3.5" fill="#EC4899" />
          <text x="22" y="15" fill="#F472B6" fontSize="8.5" fontFamily="monospace" fontWeight="800">
            FOMO SOCIAL PROOF
          </text>
        </g>

        {/* Conversion Surge Tag */}
        <g transform="translate(195, 14)">
          <rect x="0" y="0" width="125" height="26" rx="8" fill="#881337" fillOpacity="0.5" stroke="#F43F5E" strokeWidth="1.5" />
          <text x="12" y="17" fill="#FDA4AF" fontSize="11" fontFamily="monospace" fontWeight="900">
            +34% SALES BOOST
          </text>
        </g>

        {/* BIG CENTRAL SOCIAL PROOF NOTIFICATION TOAST (Single Hero Element) */}
        <g className="eng-hero-card" filter="url(#eng-card-shadow)" transform="translate(20, 52)">
          <rect
            x="0"
            y="0"
            width="300"
            height="74"
            rx="14"
            fill="url(#eng-toast-glow)"
            stroke="#F43F5E"
            strokeWidth="1.6"
          />

          {/* User Profile Avatar with Verification Rings */}
          <g transform="translate(16, 15)">
            <rect x="0" y="0" width="44" height="44" rx="12" fill="#BE123C" />
            <text x="14" y="29" fill="#FFFFFF" fontSize="18" fontWeight="900">
              S
            </text>
            {/* Live Green Online Beacon */}
            <circle cx="44" cy="44" r="5" fill="#10B981" />
            <circle cx="44" cy="44" r="9" stroke="#10B981" strokeWidth="1.5" fill="none" className="eng-beacon-ring" />
          </g>

          {/* Notification Details */}
          <g transform="translate(74, 18)">
            <text x="0" y="11" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="sans-serif">
              Sarah Jenkins <tspan fill="#94A3B8" fontSize="9.5" fontWeight="400">(Dallas, TX)</tspan>
            </text>
            <text x="0" y="27" fill="#FDA4AF" fontSize="10" fontWeight="700" fontFamily="sans-serif">
              Just bought 6-in-1 Automation Suite
            </text>
            <div className="flex items-center gap-1">
              <text x="0" y="41" fill="#94A3B8" fontSize="8" fontFamily="monospace">
                ✓ Verified Purchase · 14 seconds ago
              </text>
            </div>
          </g>

          {/* Green Verified Seal */}
          <g transform="translate(262, 12)">
            <circle cx="16" cy="16" r="13" fill="#10B981" />
            <path d="M 11 16 L 15 20 L 22 13" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </g>

        {/* BOTTOM METRICS: Verified 5-Star Rating & Customer Count */}
        <g transform="translate(20, 142)">
          <rect x="0" y="0" width="144" height="60" rx="10" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1.2" />
          <g transform="translate(14, 24)" className="eng-star-cluster">
            <text x="0" y="0" fill="#FCD34D" fontSize="15">
              ★★★★★
            </text>
          </g>
          <text x="14" y="44" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="monospace">
            4.9 / 5.0 <tspan fill="#A5B4FC" fontSize="8.5" fontWeight="600">Rating</tspan>
          </text>
          <text x="14" y="54" fill="#94A3B8" fontSize="7" fontFamily="sans-serif">
            Based on 1,420+ Reviews
          </text>
        </g>

        {/* Bottom Right Metric: Conversion Impact */}
        <g transform="translate(176, 142)">
          <rect x="0" y="0" width="144" height="60" rx="10" fill="#0F172A" stroke="#F43F5E" strokeWidth="1.2" />
          <text x="14" y="20" fill="#F43F5E" fontSize="8.5" fontFamily="monospace" fontWeight="800">
            BUYER CONFIDENCE
          </text>
          <text x="14" y="38" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="monospace">
            0 Friction
          </text>
          <text x="14" y="52" fill="#CBD5E1" fontSize="7.5" fontFamily="sans-serif">
            Live proof stops cart hesitation
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 3. RETARGETING & OMNICHANNEL (Conversion Engine)
 * Single unified big-size picture: High-Conversion WhatsApp Automated Recovery
 * Message: WhatsApp automated messages get 98% opens and instantly recover abandoned sales.
 */
export const RetargetingIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden bg-[#061814]">
      <svg
        viewBox="0 0 340 220"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ret-bubble-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064E3B" />
            <stop offset="100%" stopColor="#022C22" />
          </linearGradient>

          <filter id="ret-card-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#10B981" floodOpacity="0.25" />
          </filter>

          <style>{`
            @keyframes retBubbleFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-4px); }
            }
            @keyframes retStreamPulse {
              0% { stroke-dashoffset: 40; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes retCheckGlow {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
            .ret-bubble-box {
              animation: retBubbleFloat 3.2s ease-in-out infinite;
            }
            .ret-flow-stream {
              stroke-dasharray: 6 6;
              animation: retStreamPulse 1.4s linear infinite;
            }
            .ret-checks {
              animation: retCheckGlow 2s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Top Header Live Badge */}
        <g transform="translate(20, 16)">
          <rect x="0" y="0" width="140" height="22" rx="6" fill="#064E3B" stroke="#059669" strokeWidth="1" />
          <circle cx="12" cy="11" r="3.5" fill="#34D399" />
          <text x="22" y="15" fill="#6EE7B7" fontSize="8.5" fontFamily="monospace" fontWeight="800">
            WATI AUTOMATION
          </text>
        </g>

        {/* 98% Open Rate Badge */}
        <g transform="translate(195, 14)">
          <rect x="0" y="0" width="125" height="26" rx="8" fill="#065F46" stroke="#10B981" strokeWidth="1.5" />
          <text x="12" y="17" fill="#A7F3D0" fontSize="11" fontFamily="monospace" fontWeight="900">
            ● 98% OPEN RATE
          </text>
        </g>

        {/* BIG CENTRAL WHATSAPP RECOVERY MESSAGE BOX (Single Hero Card) */}
        <g className="ret-bubble-box" filter="url(#ret-card-shadow)" transform="translate(20, 48)">
          <rect
            x="0"
            y="0"
            width="300"
            height="110"
            rx="14"
            fill="url(#ret-bubble-grad)"
            stroke="#10B981"
            strokeWidth="1.6"
          />

          {/* WhatsApp Header Bar */}
          <g transform="translate(16, 12)">
            {/* WhatsApp Icon Circle */}
            <circle cx="14" cy="14" r="14" fill="#10B981" />
            <path
              d="M 10 9 C 9 10 9 11 11 15 C 13 19 16 20 18 19 C 19 18 19 17 18 16 L 16 15 C 15 14 15 15 14 15 C 13 14 13 14 12 13 C 11 12 11 11 12 11 C 12 10 12 10 11 9 Z"
              fill="#FFFFFF"
            />
            <text x="36" y="13" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="sans-serif">
              Bizz2u Automated Assistant
            </text>
            <text x="36" y="24" fill="#6EE7B7" fontSize="8.5" fontFamily="monospace">
              ⚡ Instant Cart Trigger · 2m delay
            </text>
          </g>

          {/* Message Content Bubble */}
          <g transform="translate(16, 46)">
            <rect x="0" y="0" width="268" height="52" rx="10" fill="#022C22" stroke="#047857" strokeWidth="1" />
            <text x="14" y="18" fill="#F1F5F9" fontSize="10.5" fontFamily="sans-serif">
              "Hi Alex! Your items are reserved with <tspan fill="#FDE047" fontWeight="700">15% OFF</tspan>."
            </text>

            {/* 1-Click Checkout Action Button */}
            <g transform="translate(14, 26)">
              <rect x="0" y="0" width="150" height="20" rx="5" fill="#10B981" />
              <text x="14" y="14" fill="#022C22" fontSize="9" fontWeight="900" fontFamily="sans-serif">
                👉 Complete Order ($150)
              </text>
            </g>

            {/* Blue Double Checkmarks */}
            <g transform="translate(236, 32)" className="ret-checks">
              <path d="M 0 5 L 4 9 L 11 1" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 6 5 L 10 9 L 17 1" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
          </g>
        </g>

        {/* BOTTOM METRICS STRIP: Cart Abandoned -> Recovered Revenue */}
        <g transform="translate(20, 168)">
          {/* Node 1: Left */}
          <rect x="0" y="0" width="110" height="38" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
          <text x="10" y="14" fill="#F87171" fontSize="7.5" fontFamily="monospace" fontWeight="700">
            CART ABANDONED
          </text>
          <text x="10" y="28" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif">
            $150.00 Lost
          </text>

          {/* Animated Connecting Flow Line */}
          <line x1="114" y1="19" x2="186" y2="19" stroke="#10B981" strokeWidth="2.5" className="ret-flow-stream" />

          {/* Node 2: Right (Recovered) */}
          <g transform="translate(190, 0)">
            <rect x="0" y="0" width="110" height="38" rx="8" fill="#065F46" stroke="#34D399" strokeWidth="1.2" />
            <text x="10" y="14" fill="#6EE7B7" fontSize="7.5" fontFamily="monospace" fontWeight="800">
              REVENUE RECOVERED
            </text>
            <text x="10" y="28" fill="#FDE047" fontSize="12" fontWeight="900" fontFamily="monospace">
              +$150.00 Paid
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

/**
 * 4. WEBSITE RELIABILITY (Infrastructure Shield)
 * Single unified big-size picture: Enterprise 99.99% Uptime Shield & Live Pulse Monitor
 * Message: Continuous 24/7 server monitoring, 30s pings, and unbreakable SSL security.
 */
export const WebsiteReliabilityIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden bg-[#07131E]">
      <svg
        viewBox="0 0 340 220"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rel-ecg-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>

          <linearGradient id="rel-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>

          <filter id="rel-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes relEcgSweep {
              0% { stroke-dashoffset: 600; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes relShieldPulse {
              0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.4)); }
              50% { transform: scale(1.05); filter: drop-shadow(0 0 18px rgba(34, 197, 94, 0.8)); }
            }
            @keyframes relRadarBeacon {
              0% { r: 4px; opacity: 1; }
              100% { r: 16px; opacity: 0; }
            }
            .rel-ecg-heartbeat {
              stroke-dasharray: 600;
              animation: relEcgSweep 3.5s linear infinite;
            }
            .rel-shield-hero {
              animation: relShieldPulse 3s ease-in-out infinite;
              transform-origin: 170px 92px;
            }
            .rel-ping-circle {
              animation: relRadarBeacon 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
            }
          `}</style>
        </defs>

        {/* Top Header Live Badge */}
        <g transform="translate(20, 16)">
          <rect x="0" y="0" width="150" height="22" rx="6" fill="#082F49" stroke="#0284C7" strokeWidth="1" />
          <circle cx="12" cy="11" r="3.5" fill="#22C55E" />
          <text x="22" y="15" fill="#38BDF8" fontSize="8.5" fontFamily="monospace" fontWeight="800">
            UPTIME ROBOT SHIELD
          </text>
        </g>

        {/* 30s Check Frequency Badge */}
        <g transform="translate(205, 14)">
          <rect x="0" y="0" width="115" height="26" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
          <text x="12" y="17" fill="#6EE7B7" fontSize="11" fontFamily="monospace" fontWeight="900">
            ● 30s PING RATE
          </text>
        </g>

        {/* BIG CENTRAL OSCILLOSCOPE MONITOR WITH HEARTBEAT (Single Hero Visual) */}
        <g transform="translate(20, 48)">
          {/* Screen Container */}
          <rect
            x="0"
            y="0"
            width="300"
            height="95"
            rx="12"
            fill="#030712"
            stroke="#1E293B"
            strokeWidth="1.4"
          />

          {/* Oscilloscope Grid Lines */}
          <g stroke="#1F2937" strokeWidth="0.8">
            <line x1="0" y1="24" x2="300" y2="24" />
            <line x1="0" y1="48" x2="300" y2="48" stroke="#374151" strokeDasharray="3 3" />
            <line x1="0" y1="72" x2="300" y2="72" />
            <line x1="75" y1="0" x2="75" y2="95" />
            <line x1="150" y1="0" x2="150" y2="95" />
            <line x1="225" y1="0" x2="225" y2="95" />
          </g>

          {/* Live Continuous Heartbeat ECG Waveform */}
          <path
            d="M 10 48 L 40 48 L 48 48 L 56 26 L 64 70 L 72 16 L 80 58 L 88 48 L 130 48 L 138 30 L 146 64 L 154 22 L 162 56 L 170 48 L 220 48 L 228 32 L 236 66 L 244 24 L 252 54 L 260 48 L 290 48"
            stroke="url(#rel-ecg-line)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="rel-ecg-heartbeat"
            filter="url(#rel-glow-filter)"
          />

          {/* Telemetry Response Marker */}
          <g transform="translate(14, 14)">
            <text x="0" y="0" fill="#22C55E" fontSize="8.5" fontFamily="monospace" fontWeight="800">
              RESPONSE: 14ms (OPTIMAL)
            </text>
          </g>

          {/* Golden Shield Centered Over Waveform */}
          <g className="rel-shield-hero" transform="translate(130, 22)">
            <path
              d="M 20 2 L 36 8 L 36 24 C 36 34 20 42 20 42 C 20 42 4 34 4 24 L 4 8 Z"
              fill="url(#rel-shield-grad)"
              stroke="#4ADE80"
              strokeWidth="2"
            />
            {/* Checkmark inside shield */}
            <path
              d="M 13 22 L 18 27 L 27 17"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </g>

        {/* BOTTOM METRICS BAR: 99.99% UPTIME & 256-BIT ENCRYPTION */}
        <g transform="translate(20, 154)">
          {/* Stat Box 1: Uptime */}
          <rect x="0" y="0" width="144" height="52" rx="10" fill="#064E3B" fillOpacity="0.5" stroke="#059669" strokeWidth="1.2" />
          <text x="14" y="18" fill="#6EE7B7" fontSize="8" fontFamily="monospace" fontWeight="800">
            UPTIME GUARANTEE
          </text>
          <text x="14" y="38" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="monospace">
            99.99% <tspan fill="#34D399" fontSize="9">Active</tspan>
          </text>

          {/* Stat Box 2: SSL & Infrastructure */}
          <g transform="translate(156, 0)">
            <rect x="0" y="0" width="144" height="52" rx="10" fill="#0C4A6E" fillOpacity="0.5" stroke="#0284C7" strokeWidth="1.2" />
            <text x="14" y="18" fill="#7DD3FC" fontSize="8" fontFamily="monospace" fontWeight="800">
              SECURITY SHIELD
            </text>
            <text x="14" y="38" fill="#FDE047" fontSize="15" fontWeight="900" fontFamily="monospace">
              256-Bit SSL
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
